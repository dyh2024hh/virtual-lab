/* ==========================================================
 * engine.js —— 通用虚拟实验引擎
 *
 * 一份代码跑所有实验：实验内容、步骤、评分、销毁/失败动画
 * 全部写在 data/xxx.json 里。加新实验 = 加一个 JSON 文件。
 *
 * 动作(action)速查：
 *   {"do":"set","k":"tube","v":true,"delay":300}   改状态（delay 毫秒后生效，可做过程动画）
 *   {"do":"score","key":"equip","v":10}            加分（取最高分，不重复扣）
 *   {"do":"err","text":"……"}                       记一次错误 + 红色提示
 *   {"do":"tip","text":"……","kind":"ok"}           绿色提示
 *   {"do":"goto","id":"heat","delay":900}          跳转步骤
 *   {"do":"if","cond":"stage.pipeOut","then":[…],"else":[…]}
 *   {"do":"checkEquip","key":"equip","goto":"assemble"}
 *   {"do":"finish"} {"do":"reset"} {"do":"export"}
 * ========================================================== */
window.LabEngine = (function () {

  var CFG = null;
  var stage = {};
  var S = {};                 // 得分表 key -> got
  var app = {};               // 运行时状态
  var timers = [];

  /* ================= 表达式 ================= */
  function run(expr, extra) {
    var st = extra || {};
    /* eslint-disable no-new-func */
    return new Function('stage', 'step', 'S', 'v',
      'return (' + expr + ');')(stage, app.stepId, S, st.v);
  }
  function truthy(cond, extra) {
    if (cond === undefined || cond === null) return true;
    if (typeof cond === 'boolean') return !!cond;
    return !!run(cond, extra);
  }
  function val(v, extra) {
    if (typeof v === 'string' && v.charAt(0) === '@') return run(v.slice(1), extra);
    return v;
  }

  /* ================= 初始化 ================= */
  function init(cfg) {
    CFG = cfg;
    resetAll(true);
    render();
  }

  function resetAll(silent) {
    timers.forEach(clearTimeout); timers = [];
    stage = JSON.parse(JSON.stringify(CFG.initialStage || {}));
    S = {};
    (CFG.scoreItems || []).forEach(function (it) { S[it.key] = 0; });
    app = {
      stepId: (CFG.steps[0] || {}).id,
      selected: {},
      errors: [],
      lastError: '',
      startTs: Date.now(),
      saved: false,
      gest: null
    };
    if (!silent) render();
  }

  function step(id) {
    id = id || app.stepId;
    var steps = CFG.steps || [];
    for (var i = 0; i < steps.length; i++) if (steps[i].id === id) return steps[i];
    return steps[0];
  }

  function go(id) {
    var st = step(id);
    if (!st) return;
    app.stepId = st.id;
    app.lastError = '';
    if (st.type === 'score') saveOnce();
    render();
  }

  /* ================= 动作执行器 ================= */
  function apply(a) {
    if (!a) return;
    var d = a.delay || 0;
    if (d > 0) { timers.push(setTimeout(function () { doAction(a); }, d)); return; }
    doAction(a);
  }

  function runActions(list) {
    if (!list) return;
    for (var i = 0; i < list.length; i++) apply(list[i]);
  }

  function doAction(a) {
    switch (a['do']) {
      case 'set':
        stage[a.k] = val(a.v, { v: stage[step().gesture ? step().gesture.field : ''] });
        render();
        break;
      case 'score': {
        var max = 0;
        (CFG.scoreItems || []).forEach(function (it) { if (it.key === a.key) max = it.max; });
        var v = a.v === undefined ? max : a.v;
        S[a.key] = Math.max(S[a.key] || 0, v);
        break;
      }
      case 'err':
        recordError(a.text);
        render();
        break;
      case 'tip':
        window.LabCore.toast(a.text, a.kind || 'ok', a.duration);
        break;
      case 'clearErr':
        app.lastError = '';
        render();
        break;
      case 'goto':
        go(a.id || a.target);
        break;
      case 'if':
        runActions(truthy(a.cond, { v: valueOf(step().gesture && step().gesture.field) }) ? a.then : a['else']);
        break;
      case 'checkEquip':
        doCheckEquip(a);
        break;
      case 'finish':
        saveOnce(true);
        break;
      case 'reset':
        resetAll();
        window.LabCore.toast('已重置，可以重新做一次', 'ok');
        break;
      case 'export':
        exportOne();
        break;
    }
  }

  function valueOf(field) { return field ? stage[field] : undefined; }

  function recordError(msg) {
    if (app.errors.indexOf(msg) === -1) app.errors.push(msg);
    app.lastError = msg;
    window.LabCore.toast(msg, 'err', 4600);
  }

  /* ================= 器材选择 ================= */
  function toggleEquip(id) {
    if (app.selected[id]) delete app.selected[id]; else app.selected[id] = true;
    render();
  }

  function doCheckEquip(a) {
    var miss = [], extra = [];
    (CFG.equipments || []).forEach(function (e) {
      if (e.need && !app.selected[e.id]) miss.push(e.name);
      if (!e.need && app.selected[e.id]) extra.push(e.name);
    });
    if (!miss.length && !extra.length) {
      var it = itemOf(a.key);
      S[a.key] = it ? it.max : (a.v || 10);
      window.LabCore.toast('器材选择完整，正确 ✓', 'ok');
      app.lastError = '';
      render();
      timers.push(setTimeout(function () { go(a['goto']); }, 700));
    } else {
      var msg = '';
      if (miss.length) msg += '漏选：' + miss.join('、');
      if (extra.length) msg += (msg ? '；' : '') + '多选：' + extra.join('、');
      recordError('器材选择有误（' + msg + '）');
      render();
    }
  }

  function itemOf(key) {
    var items = CFG.scoreItems || [];
    for (var i = 0; i < items.length; i++) if (items[i].key === key) return items[i];
    return null;
  }

  /* ================= 得分 ================= */
  function totalScore() {
    var t = 0; (CFG.scoreItems || []).forEach(function (it) { t += (S[it.key] || 0); }); return t;
  }
  function maxScore() {
    var t = 0; (CFG.scoreItems || []).forEach(function (it) { t += it.max; }); return t;
  }
  function dimScore(dimKey) {
    var got = 0, max = 0;
    (CFG.scoreItems || []).forEach(function (it) {
      if ((it.dim || 'skill') !== dimKey) return;
      got += (S[it.key] || 0); max += it.max;
    });
    return { got: got, max: max };
  }

  /* ================= 学习记录 ================= */
  function buildRecord() {
    var detail = {};
    (CFG.scoreItems || []).forEach(function (it) { detail[it.name] = S[it.key] || 0; });
    return {
      id: Date.now(),
      student: window.LabCore.getStudent() || '未填写',
      experiment: CFG.id,
      expName: CFG.title,
      score: totalScore(),
      max: maxScore(),
      rate: maxScore() ? Math.round(totalScore() / maxScore() * 100) : 0,
      errors: app.errors.slice(),
      duration: Math.max(1, Math.round((Date.now() - app.startTs) / 1000)),
      time: new Date().toISOString(),
      detail: detail
    };
  }

  function saveOnce(force) {
    if (app.saved && !force) return;
    app.saved = true;
    window.LabCore.saveRecord(buildRecord());
  }

  function exportOne() {
    var r = buildRecord();
    exportRows([r], r.student);
  }

  function exportRows(records, who) {
    var head = ['姓名', '实验', '得分', '满分', '正确率(%)', '用时(秒)', '错误操作', '提交时间'];
    var rows = [head];
    records.forEach(function (r) {
      rows.push([r.student, r.expName, r.score, r.max, r.rate, r.duration,
        (r.errors || []).join('；'), new Date(r.time).toLocaleString('zh-CN')]);
    });
    window.LabCore.download('虚拟实验成绩-' + (who || '全部') + '-' + window.LabCore.stamp() + '.csv',
      window.LabCore.toCSV(rows));
    window.LabCore.toast('已导出 CSV，可交给老师导入教师端查看', 'ok');
  }

  /* ================= 拖放 ================= */
  var drag = null;

  function startDragFromShelf(e, equipId) {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    var ghost = document.createElement('div');
    ghost.className = 'drag-ghost';
    ghost.innerHTML = window.LabIcons.svg(equipId);
    ghost.style.left = e.clientX + 'px';
    ghost.style.top = e.clientY + 'px';
    document.body.appendChild(ghost);
    document.body.classList.add('dragging');

    drag = {
      equipId: equipId, ghost: ghost,
      tx: e.clientX, ty: e.clientY, cx: e.clientX, cy: e.clientY, raf: 0
    };
    var loop = function () {
      if (!drag) return;
      drag.cx += (drag.tx - drag.cx) * 0.4;
      drag.cy += (drag.ty - drag.cy) * 0.4;
      drag.ghost.style.left = drag.cx + 'px';
      drag.ghost.style.top = drag.cy + 'px';
      drag.raf = requestAnimationFrame(loop);
    };
    drag.raf = requestAnimationFrame(loop);

    document.addEventListener('pointermove', onDragMove);
    document.addEventListener('pointerup', onDragUp);
    document.addEventListener('pointercancel', onDragCancel);
  }

  function onDragMove(e) {
    if (!drag) return;
    drag.tx = e.clientX; drag.ty = e.clientY;
    var zones = document.querySelectorAll('[data-drop]');
    for (var i = 0; i < zones.length; i++) zones[i].classList.remove('hit');
    var hit = findZoneAt(e.clientX, e.clientY);
    if (hit) {
      var el = document.querySelector('[data-drop="' + hit + '"]');
      if (el) el.classList.add('hit');
    }
  }

  function onDragUp(e) {
    if (!drag) return;
    var equipId = drag.equipId, ghost = drag.ghost;
    cancelAnimationFrame(drag.raf);
    document.removeEventListener('pointermove', onDragMove);
    document.removeEventListener('pointerup', onDragUp);
    document.removeEventListener('pointercancel', onDragCancel);
    drag = null;
    document.body.classList.remove('dragging');

    var hit = findZoneAt(e.clientX, e.clientY);
    if (hit) {
      /* 吸附动画：200ms 滑进放置区中心再落下 */
      var svg = document.querySelector('svg.scene');
      var z = CFG.dropZones[hit];
      var pt = svgToClient(svg, z.x + z.w / 2, z.y + z.h / 2);
      ghost.classList.add('snap');
      ghost.style.left = pt.x + 'px';
      ghost.style.top = pt.y + 'px';
      setTimeout(function () {
        ghost.classList.add('fade');
        setTimeout(function () { ghost.remove(); }, 220);
      }, 170);
      setTimeout(function () { handleDrop(equipId, hit); }, 200);
    } else {
      ghost.classList.add('fade');
      setTimeout(function () { ghost.remove(); }, 220);
      handleDrop(equipId, null);
    }
  }

  function onDragCancel() {
    if (!drag) return;
    cancelAnimationFrame(drag.raf);
    if (drag.ghost) drag.ghost.remove();
    document.removeEventListener('pointermove', onDragMove);
    document.removeEventListener('pointerup', onDragUp);
    document.removeEventListener('pointercancel', onDragCancel);
    drag = null;
    document.body.classList.remove('dragging');
  }

  function findZoneAt(clientX, clientY) {
    var st = step();
    var list = st.zones || [];
    if (!list.length) return null;
    var svg = document.querySelector('svg.scene');
    if (!svg) return null;
    var p = window.LabCore.svgPoint(svg, clientX, clientY);
    var best = null, bestDist = Infinity;
    for (var i = 0; i < list.length; i++) {
      var key = list[i], z = CFG.dropZones[key];
      if (!z) continue;
      var dx = Math.max(z.x - p.x, 0, p.x - (z.x + z.w));
      var dy = Math.max(z.y - p.y, 0, p.y - (z.y + z.h));
      var d = Math.sqrt(dx * dx + dy * dy);
      if (d < bestDist) { bestDist = d; best = key; }
    }
    return bestDist <= 60 ? best : null;
  }

  function svgToClient(svg, x, y) {
    if (!svg || !svg.createSVGPoint) return { x: x, y: y };
    var pt = svg.createSVGPoint(); pt.x = x; pt.y = y;
    var m = svg.getScreenCTM(); if (!m) return { x: x, y: y };
    var p = pt.matrixTransform(m);
    return { x: p.x, y: p.y };
  }

  function handleDrop(equipId, zone) {
    var st = step();
    app.lastError = '';
    var rules = st.drop || [];
    for (var i = 0; i < rules.length; i++) {
      var r = rules[i];
      if (r.equip !== undefined && r.equip !== equipId) continue;
      if (r.zone !== undefined && r.zone !== zone) continue;
      app.lastError = '';
      render();
      runActions(r['do'] || r.then);
      return;
    }
    window.LabCore.toast('这个位置不对，再想想', 'err');
  }

  /* ================= 手势 ================= */
  function gestureConf() {
    var st = step();
    return st.gesture || null;
  }

  function startGesture(e) {
    e.preventDefault();
    var g = gestureConf();
    if (!g) return;
    var svg = e.currentTarget.ownerSVGElement || e.currentTarget;
    var p = window.LabCore.svgPoint(svg, e.clientX, e.clientY);
    app.gest = {
      kind: g.kind, sx: p.x, sy: p.y, lastX: p.x, moved: 0, field: g.field,
      startVal: g.field ? (stage[g.field] || 0) : 0
    };
    document.addEventListener('pointermove', onGestureMove);
    document.addEventListener('pointerup', onGestureUp);
    document.addEventListener('pointercancel', onGestureUp);
  }

  function onGestureMove(e) {
    var g = gestureConf();
    if (!g || !app.gest) return;
    var svg = document.querySelector('svg.scene');
    if (!svg) return;
    var p = window.LabCore.svgPoint(svg, e.clientX, e.clientY);
    if (g.kind === 'rotate') {
      var ang = Math.atan2(p.y - g.pivot[1], p.x - g.pivot[0]) * 180 / Math.PI;
      if (ang < g.range[0]) ang = g.range[0];
      if (ang > g.range[1]) ang = g.range[1];
      stage[g.field] = Math.round(ang * 10) / 10;
      render();
    } else if (g.metric === 'accumulate') {
      var dx = Math.abs(p.x - app.gest.lastX);
      app.gest.moved += dx;
      app.gest.lastX = p.x;
      stage[g.field] = Math.min(g.max || 100, stage[g.field] + dx * (g.rate || 0.35));
      render();
    } else { /* displacement */
      var dxx = p.x - app.gest.sx, dyy = p.y - app.gest.sy;
      app.gest.moved = Math.max(app.gest.moved, Math.sqrt(dxx * dxx + dyy * dyy));
    }
  }

  function onGestureUp() {
    var g = gestureConf();
    document.removeEventListener('pointermove', onGestureMove);
    document.removeEventListener('pointerup', onGestureUp);
    document.removeEventListener('pointercancel', onGestureUp);
    if (!g || !app.gest) return;
    var v = g.kind === 'rotate' ? stage[g.field] : (g.metric === 'accumulate' ? stage[g.field] : app.gest.moved);
    app.gest = null;
    app.lastError = '';

    if (g.kind === 'rotate') {
      var c = g.correct || [];
      if (v >= c[0] && v <= c[1]) { runActions(g.onCorrect); return; }
      var wrongs = g.onWrong || [];
      var extra = { v: v };
      for (var i = 0; i < wrongs.length; i++) {
        if (wrongs[i].when === undefined || truthy(wrongs[i].when, extra)) {
          runActions(wrongs[i]['do']); return;
        }
      }
      return;
    }

    if (v >= (g.threshold || 40)) {
      if (g.metric === 'accumulate' && g.field) stage[g.field] = g.max || 100;
      runActions(g.onReach);
    } else {
      if (g.metric === 'accumulate' && g.field) stage[g.field] = Math.max(0, stage[g.field] - (g.penalty || 15));
      render();
      runActions(g.onFail);
    }
  }

  /* ================= 语音指令（选做） ================= */
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  function voiceAvailable() { return !!SR; }

  function startVoice() {
    if (!SR) { window.LabCore.toast('当前浏览器不支持语音，请用 Chrome 或 Edge', 'err'); return; }
    var st = step();
    var pool = [];
    (st.buttons || []).forEach(function (b) { if (b.voice) pool.push(b); });
    (CFG.voiceMap || []).forEach(function (m) { pool.push(m); });
    if (!pool.length) { window.LabCore.toast('这一步没有可用的语音指令', 'err'); return; }

    try {
      var rec = new SR();
      rec.lang = 'zh-CN'; rec.interimResults = false; rec.maxAlternatives = 1;
      window.LabCore.toast('请说话…（点燃 / 熄灭 / 移出导管）', 'ok', 2200);
      rec.onresult = function (ev) {
        var txt = String(ev.results[0][0].transcript).replace(/[。，！？,.!?\s]/g, '');
        for (var i = 0; i < pool.length; i++) {
          var keys = pool[i].voice || [];
          for (var j = 0; j < keys.length; j++) {
            if (txt.indexOf(keys[j]) >= 0) {
              window.LabCore.toast('识别到：' + txt, 'ok', 1600);
              if (pool[i]['do']) runActions(pool[i]['do']);
              else if (pool[i]['goto']) go(pool[i]['goto']);
              return;
            }
          }
        }
        window.LabCore.toast('没听懂“' + txt + '”，请再说一次', 'err', 2400);
      };
      rec.onerror = function () { window.LabCore.toast('麦克风没开或没听清', 'err'); };
      rec.start();
    } catch (err) {
      window.LabCore.toast('语音启动失败：' + err.message, 'err');
    }
  }

  /* ================= 渲染 ================= */
  function render() {
    var st = step();
    var html = '';

    /* 头部 */
    html += '<div class="hd">'
      + '<a class="back" href="index.html">← 首页</a>'
      + '<h1>🧪 ' + window.LabCore.esc(CFG.title) + '</h1>'
      + '<div class="step-name">' + window.LabCore.esc(st.title || '') + '</div>'
      + '<div class="pbar"><i style="width:' + (st.progress || 0) + '%"></i></div>'
      + '</div>';

    /* 主体 */
    var body = '';
    switch (st.type) {
      case 'cover': body = bodyCover(st); break;
      case 'doc': body = bodyDoc(st); break;
      case 'equip': body = bodyEquip(st); break;
      case 'report': body = bodyReport(st); break;
      case 'score': body = bodyScore(st); break;
      case 'errors': body = bodyErrors(st); break;
      default: body = bodyStage(st);
    }
    html += body;

    /* 底部 */
    html += '<div class="ft">' + footer(st) + '</div>';

    document.getElementById('app').innerHTML = html;
  }

  function bodyCover(st) {
    var badges = (st.badges || CFG.badges || []).map(function (b) {
      return '<span style="font-size:12.5px;color:#475569;background:#f1f5f9;padding:6px 16px;border-radius:20px">' + window.LabCore.esc(b) + '</span>';
    }).join('');
    return '<div class="mn"><div class="panel stage" style="background:#fff"><div class="card">'
      + '<h2 style="font-size:26px;letter-spacing:2px;text-align:center">' + window.LabCore.esc(st.headline || CFG.title) + '</h2>'
      + '<p style="font-size:14px;color:#64748b">' + window.LabCore.esc(st.subtitle || CFG.subtitle || '') + '</p>'
      + '<div style="display:flex;gap:12px;margin-top:10px;flex-wrap:wrap;justify-content:center">' + badges + '</div>'
      + '</div></div></div>';
  }

  function bodyDoc(st) {
    var cols = (st.cols || []).map(function (c) {
      var lines = (c.lines || []).map(function (l) { return '<p>' + window.LabCore.esc(l) + '</p>'; }).join('');
      return '<div class="col"><h4>' + window.LabCore.esc(c.title) + '</h4>' + lines + '</div>';
    }).join('');
    return '<div class="mn"><div class="panel stage" style="background:#fff"><div class="doc">' + cols + '</div></div></div>';
  }

  function bodyEquip(st) {
    var cards = (CFG.equipments || []).map(function (e) {
      var sel = app.selected[e.id] ? 'sel' : '';
      return '<div class="equip-card ' + sel + '" onclick="LabEngine.toggleEquip(\'' + e.id + '\')">'
        + window.LabIcons.svg(e.id) + '<span>' + window.LabCore.esc(e.name) + '</span></div>';
    }).join('');
    return '<div class="mn"><div class="panel stage" style="background:#fff"><div class="card">'
      + '<p>' + window.LabCore.esc(st.tip || '选出本实验需要的全部器材和药品') + '</p>'
      + '<div class="equip-grid">' + cards + '</div>'
      + '<p style="margin-top:6px">已选：<b style="color:#2563eb">' + Object.keys(app.selected).length + '</b> 项</p>'
      + '</div></div></div>';
  }

  function bodyReport(st) {
    var rep = st.cols || CFG.report || [];
    return '<div class="mn"><div class="panel stage" style="background:#fff">'
      + '<div class="doc">' + rep.map(function (c) {
        var lines = (c.lines || []).map(function (l) { return '<p>' + window.LabCore.esc(l) + '</p>'; }).join('');
        return '<div class="col"><h4>' + window.LabCore.esc(c.title) + '</h4>' + lines + '</div>';
      }).join('') + '</div></div></div>';
  }

  function bodyErrors(st) {
    var rows = (CFG.errorTable || []).map(function (r) {
      return '<tr><td>' + window.LabCore.esc(r.op) + '</td><td>' + window.LabCore.esc(r.phen)
        + '</td><td>' + window.LabCore.esc(r.result) + '</td><td>' + window.LabCore.esc(r.score) + '</td></tr>';
    }).join('');
    return '<div class="mn"><div class="panel stage" style="background:#fff;overflow:auto">'
      + '<div style="width:100%;max-width:820px;margin:auto;padding:10px 0">'
      + '<table><tr><th>错误操作</th><th>现象</th><th>后果</th><th>扣分</th></tr>' + rows + '</table>'
      + '</div></div></div>';
  }

  function bodyScore(st) {
    var tot = totalScore(), mx = maxScore();
    var dims = (CFG.dims || []).map(function (d) {
      var r = dimScore(d.key);
      var pct = r.max ? Math.round(r.got / r.max * 100) : 0;
      return '<div class="dim-bar d-' + window.LabCore.esc(d.key) + '">'
        + '<div class="lb"><span>' + window.LabCore.esc(d.name) + '</span><span>' + r.got + ' / ' + r.max + '（' + pct + '%）</span></div>'
        + '<div class="bar"><i style="width:' + pct + '%"></i></div></div>';
    }).join('');

    var rows = (CFG.scoreItems || []).map(function (it) {
      var got = S[it.key] || 0;
      var cls = got === it.max ? 'full' : (got === 0 ? 'zero' : '');
      return '<div class="row ' + cls + '"><span>' + window.LabCore.esc(it.name) + '</span><span>' + got + ' / ' + it.max + '</span></div>';
    }).join('');

    var errs = app.errors.length
      ? app.errors.map(function (e) { return '<div>· ' + window.LabCore.esc(e) + '</div>'; }).join('')
      : '<div class="none">✓ 本次实验没有出现错误操作</div>';
    var comment = tot >= mx * 0.9 ? '优秀！操作非常规范' : (tot >= mx * 0.75 ? '良好，仍有提升空间' : '还需要再练习一次');

    return '<div class="mn"><div class="panel stage" style="background:#fff"><div class="doc">'
      + '<div class="col" style="flex:0 0 210px;display:flex;flex-direction:column;justify-content:center;align-items:center">'
      + '<div class="score-big">' + tot + '<small> / ' + mx + '</small></div>'
      + '<p style="margin-top:10px;color:#64748b;font-size:13px;text-align:center">' + comment + '</p>'
      + '<div style="width:100%;margin-top:18px">' + dims + '</div>'
      + '</div>'
      + '<div class="col" style="flex:0 0 240px"><h4>得分明细</h4><div class="score-list">' + rows + '</div></div>'
      + '<div class="col"><h4>错误记录</h4><div class="err-list">' + errs + '</div>'
      + '<p style="margin-top:12px;color:#64748b;font-size:12px">用时：' + window.LabCore.fmtDuration(Math.round((Date.now() - app.startTs) / 1000)) + '</p>'
      + '</div></div></div></div>';
  }

  function bodyStage(st) {
    var shelf = (st.shelf || []);
    var shelfHtml = '';
    if (!shelf.length) {
      shelfHtml = '<p style="font-size:11.5px;color:#cbd5e1;text-align:center;padding:10px 0;line-height:1.6">本步骤<br>不需要<br>选择器材</p>';
    } else {
      shelfHtml = shelf.map(function (id) {
        var nm = equipName(id);
        return '<div class="shelf-item" onpointerdown="LabEngine.startDragFromShelf(event,\'' + id + '\')">'
          + window.LabIcons.svg(id) + '<span>' + window.LabCore.esc(nm) + '</span></div>';
      }).join('');
    }

    var right = '<h3>实验阶段</h3><div class="stage-name">' + window.LabCore.esc(st.title) + '</div>'
      + '<div class="stage-desc">' + window.LabCore.esc(st.desc || '') + '</div>'
      + (app.lastError ? '<div class="err-note">' + window.LabCore.esc(app.lastError) + '</div>' : '');

    return '<div class="mn">'
      + '<div class="panel shelf"><h3>器材架</h3>' + shelfHtml + '</div>'
      + '<div class="panel stage">' + stageSvg(st) + '</div>'
      + '<div class="panel right">' + right + '</div>'
      + '</div>';
  }

  function equipName(id) {
    var list = CFG.equipments || [];
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i].name;
    return id;
  }

  function stageSvg(st) {
    var ctx = { stage: stage, step: app.stepId, S: S };
    var svg = window.LabScene.render(CFG, ctx);
    var injections = window.LabScene.renderZones(CFG.dropZones, st.zones || []) + overlay(st, ctx);
    if (injections) {
      var i = svg.lastIndexOf('</svg>');
      svg = svg.slice(0, i) + injections + svg.slice(i);
    }
    return svg;
  }

  /* 手势热区 / 句柄 */
  function overlay(st, ctx) {
    var g = st.gesture;
    if (!g) return '';
    if (!window.LabScene.truthy(g.visibleWhen, ctx)) return '';
    var common = ' style="cursor:grab;touch-action:none" onpointerdown="LabEngine.startGesture(event)"';
    if (g.kind === 'rotate') {
      var rad = (stage[g.field] || 0) * Math.PI / 180;
      var hx = g.pivot[0] + g.radius * Math.cos(rad);
      var hy = g.pivot[1] + g.radius * Math.sin(rad);
      return '<g' + common + '>'
        + '<circle cx="' + hx + '" cy="' + hy + '" r="16" fill="#2563eb" opacity="0.9"/>'
        + '<circle cx="' + hx + '" cy="' + hy + '" r="16" fill="none" stroke="#fff" stroke-width="2"/>'
        + '<path d="M' + (hx - 7) + ' ' + hy + ' L' + (hx + 7) + ' ' + hy
        + ' M' + hx + ' ' + (hy - 7) + ' L' + hx + ' ' + (hy + 7) + '" stroke="#fff" stroke-width="2" stroke-linecap="round"/>'
        + '</g>';
    }
    /* swipe */
    var z = g.zone;
    var s = '<g' + common + '><rect x="' + z.x + '" y="' + z.y + '" width="' + z.w + '" height="' + z.h
      + '" rx="' + (z.rx || 12) + '" fill="#2563eb" fill-opacity="0.08" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="6 4"/></g>';
    if (g.metric === 'accumulate' && g.bar) {
      var pct = Math.min(100, stage[g.field] || 0);
      s += '<rect x="' + g.bar.x + '" y="' + g.bar.y + '" width="' + g.bar.w + '" height="' + (g.bar.h || 7)
        + '" rx="3.5" fill="#e2e8f0"/>'
        + '<rect x="' + g.bar.x + '" y="' + g.bar.y + '" width="' + (g.bar.w * pct / 100) + '" height="' + (g.bar.h || 7)
        + '" rx="3.5" fill="#22c55e"/>'
        + '<text x="' + (g.bar.x + g.bar.w / 2) + '" y="' + (g.bar.y - 6) + '" font-size="10" text-anchor="middle" fill="#64748b">'
        + Math.round(pct) + '%</text>';
    }
    if (g.label) {
      s += '<text class="scene-label" x="' + (z.x + z.w / 2) + '" y="' + (z.y - 8)
        + '" text-anchor="middle">' + window.LabCore.esc(g.label) + '</text>';
    }
    return s;
  }

  /* ================= 底部按钮 ================= */
  function footer(st) {
    var html = '';
    var btns = st.buttons || [];
    btns.forEach(function (b, i) {
      if (!window.LabScene.truthy(b.when, { stage: stage, step: app.stepId, S: S })) return;
      html += '<button class="' + (b.c || '') + '" onclick="LabEngine.press(' + i + ')">'
        + window.LabCore.esc(b.t) + '</button>';
    });

    if (st.type === 'stage' || st.type === 'cover') {
      if (st.help !== false && st.help !== undefined) {
        html += '<button class="help-btn" onclick="LabEngine.help()" title="获取提示">？</button>';
      }
      var hasVoice = (st.buttons || []).some(function (b) { return !!b.voice; }) || (CFG.voiceMap || []).length > 0;
      if (hasVoice && voiceAvailable()) {
        html += '<button class="mic-btn" onclick="LabEngine.startVoice()" title="语音指令">🎤</button>';
      }
    }
    return html;
  }

  function press(i) {
    var st = step();
    var b = (st.buttons || [])[i];
    if (!b) return;
    app.lastError = '';
    if (b['do']) runActions(b['do']);
    else if (b['goto']) go(b['goto']);
    else if (b.fn === 'reset') { resetAll(); window.LabCore.toast('已重置，可以重新做一次', 'ok'); }
  }

  function help() {
    var h = step().help;
    if (h) window.LabCore.toast('提示：' + h, 'ok', 5200);
    else window.LabCore.toast('这一步没有更多提示了', 'ok');
  }

  return {
    init: init, go: go, render: render, reset: function () { resetAll(); },
    toggleEquip: toggleEquip, press: press, help: help,
    startDragFromShelf: startDragFromShelf, startGesture: startGesture, startVoice: startVoice,
    exportOne: exportOne
  };
})();
