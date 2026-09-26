/* ==========================================================
 * teacher.js —— 教师查看端：解析 CSV → 统计 → 渲染
 * 纯前端，不上传任何数据到服务器
 * ========================================================== */
var Teacher = (function () {

  var rows = [];

  function boot() {
    document.getElementById('csvFile').addEventListener('change', function (e) {
      var files = Array.prototype.slice.call(e.target.files || []);
      if (!files.length) return;
      files.forEach(function (f) {
        var fr = new FileReader();
        fr.onload = function () {
          var parsed = parseCSV(String(fr.result));
          rows = rows.concat(parsed);
          LabCore.toast('已导入 ' + parsed.length + ' 条记录', 'ok');
          render();
        };
        fr.readAsText(f, 'utf-8');
      });
      e.target.value = '';
    });
    render();
  }

  /* ---------- CSV 解析（支持引号包裹） ---------- */
  function parseCSV(text) {
    text = text.replace(/^\ufeff/, '');
    var lines = [], cur = '', inQ = false;
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      if (inQ) {
        if (c === '"') {
          if (text[i + 1] === '"') { cur += '"'; i++; }
          else inQ = false;
        } else cur += c;
      } else {
        if (c === '"') inQ = true;
        else if (c === ',') { lines.push(cur); cur = ''; }
        else if (c === '\n') { lines.push(cur); cur = ''; pushRow(); }
        else if (c !== '\r') cur += c;
      }
    }
    if (cur !== '' || lines.length) { lines.push(cur); pushRow(); }

    var out = [];
    function pushRow() {
      if (!lines.length) return;
      var cells = lines.slice(); lines = [];
      out.push(cells);
    }
    out = out.filter(function (r) { return r.join('').trim() !== ''; });
    if (!out.length) return [];

    var head = out[0].map(function (h) { return String(h).trim(); });
    var idx = {};
    head.forEach(function (h, i) { idx[h] = i; });
    function cell(r, key, alt) {
      var i = idx[key];
      if (i === undefined && alt) i = idx[alt];
      return i === undefined ? '' : String(r[i] === undefined ? '' : r[i]).trim();
    }
    return out.slice(1).map(function (r) {
      var sc = parseFloat(cell(r, '得分', 'score')) || 0;
      var mx = parseFloat(cell(r, '满分', 'max')) || 0;
      var rate = parseFloat(cell(r, '正确率(%)', '正确率'));
      if (isNaN(rate)) rate = mx ? Math.round(sc / mx * 100) : 0;
      return {
        student: cell(r, '姓名', 'student') || '匿名',
        expName: cell(r, '实验', 'experiment'),
        score: sc, max: mx, rate: rate,
        duration: parseFloat(cell(r, '用时(秒)', 'duration')) || 0,
        errors: cell(r, '错误操作', 'errors'),
        time: cell(r, '提交时间', 'time')
      };
    }).filter(function (r) { return r.student || r.expName; });
  }

  /* ---------- 读取本机 localStorage 记录 ---------- */
  function readLocal() {
    var rs = LabCore.allRecords();
    if (!rs.length) { LabCore.toast('本机还没有练习记录', 'err'); return; }
    rows = rows.concat(rs.map(function (r) {
      return {
        student: r.student, expName: r.expName || r.experiment, score: r.score,
        max: r.max, rate: r.rate, duration: r.duration,
        errors: (r.errors || []).join('；'), time: r.time
      };
    }));
    LabCore.toast('已读取本机 ' + rs.length + ' 条记录', 'ok');
    render();
  }

  function clearBoard() {
    rows = [];
    render();
    LabCore.toast('看板已清空', 'ok');
  }

  /* ---------- 渲染 ---------- */
  function render() {
    var box = document.getElementById('board');
    if (!rows.length) {
      box.innerHTML = '<div class="t-card"><div class="empty">还没有数据。导入 CSV 或读取本机记录后，这里会自动统计。</div></div>';
      return;
    }
    var avg = Math.round(rows.reduce(function (s, r) { return s + r.rate; }, 0) / rows.length);
    var scores = rows.map(function (r) { return r.score; });
    var high = Math.max.apply(null, scores), low = Math.min.apply(null, scores);
    var students = {};
    rows.forEach(function (r) { students[r.student] = 1; });
    var passCnt = rows.filter(function (r) { return r.rate >= 75; }).length;

    /* 错误 TOP5 */
    var errMap = {};
    rows.forEach(function (r) {
      (r.errors || '').split('；').forEach(function (e) {
        e = e.trim();
        if (!e || e === '—') return;
        errMap[e] = (errMap[e] || 0) + 1;
      });
    });
    var errList = Object.keys(errMap).map(function (k) { return { name: k, n: errMap[k] }; })
      .sort(function (a, b) { return b.n - a.n; }).slice(0, 5);
    var maxErr = errList.length ? errList[0].n : 1;

    /* 分实验统计 */
    var byExp = {};
    rows.forEach(function (r) {
      var k = r.expName || '未知';
      if (!byExp[k]) byExp[k] = { n: 0, sum: 0 };
      byExp[k].n++; byExp[k].sum += r.rate;
    });

    var html = '';
    html += '<div class="t-card"><h4>② 总体情况</h4><div class="stat-row">'
      + stat(rows.length, '提交次数', false)
      + stat(Object.keys(students).length, '学生人数', false)
      + stat(avg + '%', '平均正确率', false)
      + stat(high, '最高分', false)
      + stat(low, '最低分', true)
      + stat(Math.round(passCnt / rows.length * 100) + '%', '及格率(≥75%)', false)
      + '</div></div>';

    html += '<div class="t-card"><h4>③ 错误类型 TOP 5</h4>';
    if (errList.length) {
      html += '<div class="bar-chart">' + errList.map(function (e) {
        return '<div class="bar-row">'
          + '<span class="nm" title="' + LabCore.esc(e.name) + '">' + LabCore.esc(e.name) + '</span>'
          + '<span class="tr"><i style="width:' + Math.round(e.n / maxErr * 100) + '%"></i></span>'
          + '<span class="ct">' + e.n + ' 次</span></div>';
      }).join('') + '</div>';
    } else {
      html += '<div class="empty">本次没有记录到错误操作 👏</div>';
    }
    html += '</div>';

    html += '<div class="t-card"><h4>④ 分实验统计</h4><table><tr><th>实验</th><th>次数</th><th>平均正确率</th></tr>'
      + Object.keys(byExp).map(function (k) {
        return '<tr><td>' + LabCore.esc(k) + '</td><td>' + byExp[k].n + '</td><td>'
          + Math.round(byExp[k].sum / byExp[k].n) + '%</td></tr>';
      }).join('') + '</table></div>';

    html += '<div class="t-card"><h4>⑤ 学生得分明细</h4><div style="overflow-x:auto"><table>'
      + '<tr><th>姓名</th><th>实验</th><th>得分</th><th>正确率</th><th>用时</th><th>主要错误</th><th>提交时间</th></tr>'
      + rows.slice().sort(function (a, b) { return b.rate - a.rate; }).map(function (r) {
        var cls = r.rate >= 90 ? '#16a34a' : (r.rate >= 75 ? '#ea580c' : '#dc2626');
        return '<tr><td>' + LabCore.esc(r.student) + '</td>'
          + '<td>' + LabCore.esc(r.expName) + '</td>'
          + '<td><b style="color:' + cls + '">' + r.score + '</b> / ' + r.max + '</td>'
          + '<td>' + r.rate + '%</td>'
          + '<td>' + LabCore.fmtDuration(r.duration) + '</td>'
          + '<td style="font-size:11.5px;color:#dc2626">' + LabCore.esc(r.errors || '—') + '</td>'
          + '<td>' + LabCore.esc(r.time) + '</td></tr>';
      }).join('')
      + '</table></div></div>';

    box.innerHTML = html;
  }

  function stat(v, k, warn) {
    return '<div class="stat"><div class="v' + (warn ? ' warn' : '') + '">' + v + '</div><div class="k">' + k + '</div></div>';
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
  return { readLocal: readLocal, clearBoard: clearBoard, parseCSV: parseCSV };
})();
