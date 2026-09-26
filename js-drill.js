/* ==========================================================
 * drill.js —— 方程式记忆卡练习
 * 题型：默写（write）/ 四选一（choice）/ 看图判断（pic）/ 填空（fill）/ 背卡（browse）
 * ========================================================== */
var Drill = (function () {

  var DATA = null, cards = [];
  var queue = [], idx = 0, right = 0, t0 = 0, miss = [];
  var cfg = { mode: 'mix', scope: 'all', count: 10, write: true };
  var state = 'setup';          /* setup | play | result */
  var cur = null, answered = false;

  /* ================= 化学式渲染 ================= */
  var SUB = { '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉' };
  var SUP = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '+': '⁺', '-': '⁻' };
  var SUBREV = { '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9' };

  /* 把 ASCII 化学式转成带上下标的显示文本
   * 规则：项开头的数字是系数（正常大小），其余数字是下标 */
  function fmt(s) {
    s = String(s === undefined || s === null ? '' : s);
    var out = '', i = 0, prev = '';
    while (i < s.length) {
      var ch = s[i];
      if (ch === '^') {                       /* ^ 开头的一段转上标 */
        i++;
        while (i < s.length && s[i] !== ' ') { out += (SUP[s[i]] || s[i]); i++; }
        continue;
      }
      if (ch >= '0' && ch <= '9') {
        var isCoef = (prev === '' || prev === '+' || prev === '=' || prev === '（' || prev === '(');
        out += isCoef ? ch : (SUB[ch] || ch);
        prev = ch; i++;
        continue;
      }
      out += ch; prev = ch; i++;
    }
    return out;
  }

  function esc(s) {
    return String(s === undefined || s === null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* 方程式整体渲染：左边 —条件→ 右边 */
  function eqHTML(card) {
    if (!card || !card.formula) return '';
    var p = card.formula.split('=');
    var left = p[0] || '', right = p[1] || '';
    return '<span class="eq">'
      + chemList(left)
      + '<span class="eq-op">' + (card.cond ? '<i>' + esc(card.cond) + '</i>' : '') + '<b>⟶</b></span>'
      + chemList(right) + '</span>';
  }
  function chemList(s) {
    return s.split('+').map(function (t) { return fmt(t.trim()); }).join(' <em>+</em> ');
  }

  /* ================= 输入归一化与判定 ================= */
  function norm(s) {
    s = String(s === undefined || s === null ? '' : s);
    s = s.replace(/＝/g, '=').replace(/＋/g, '+').replace(/→/g, '=').replace(/＝/g, '=');
    s = s.replace(/\s/g, '');
    s = s.replace(/[₀₁₂₃₄₅₆₇₈₉]/g, function (c) { return SUBREV[c] || c; });
    s = s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]/g, '');
    s = s.replace(/[↑↓]/g, '');
    s = s.replace(/点燃|加热|高温|通电|光照|催化剂|催化|常温/g, '');
    s = s.replace(/[\u4e00-\u9fa5]/g, '');        /* 其余汉字一律忽略 */
    s = s.replace(/-{1,}>|(?:--)+>?/g, '=');
    s = s.replace(/[=]{2,}/g, '=');
    return s;
  }

  function splitSide(s) {
    return String(s).split('+').filter(function (t) { return t.length; });
  }
  function bare(t) { return String(t).replace(/^[0-9]+/, ''); }
  /* 化学式的“信息量”：去掉系数和下标数字后还剩几个字符（单质≈1，化合物>1） */
  function lengthOf(t) { return bare(t).replace(/[0-9]/g, '').replace(/[()]/g, '').length; }
  function keyOf(side) { return side.map(bare).sort().join('+'); }
  function canon(eq) {
    var n = norm(eq), p = n.split('=');
    if (p.length < 2) return '';
    var L = splitSide(p[0]).sort().join('+');
    var R = splitSide(p[p.length - 1]).sort().join('+');
    return L + '=' + R;
  }
  function canonBare(eq) {
    var n = norm(eq), p = n.split('=');
    if (p.length < 2) return '';
    return keyOf(splitSide(p[0])) + '=' + keyOf(splitSide(p[p.length - 1]));
  }

  /* 错因诊断，返回提示文本数组 */
  function diagnose(input, card) {
    var n = norm(input), p = n.split('=');
    if (p.length < 2) return ['格式不对：用“+”连接多种物质，中间用“=”隔开反应物和生成物。'];
    var iL = splitSide(p[0]), iR = splitSide(p[p.length - 1]);
    var ap = card.formula.split('=');
    var aL = splitSide(ap[0]), aR = splitSide(ap[1]);

    if (canonBare(input) === canonBare(card.formula)) {
      if (canon(input) !== canon(card.formula)) return ['化学式全部正确，但系数没有配平。'];
      return ['（顺序不同也算对，这里按错误处理）'];
    }
    /* 左右写反 */
    if (keyOf(iL) === keyOf(aR) && keyOf(iR) === keyOf(aL)) {
      return ['反应物和生成物写反了。'];
    }
    var out = [];
    ['左', '右'].forEach(function (side, k) {
      var got = splitSide(k === 0 ? p[0] : p[p.length - 1]).map(bare);
      var want = (k === 0 ? aL : aR).map(bare);
      var extra = [], lack = [];
      got.forEach(function (g) {
        var at = want.indexOf(g);
        if (at < 0) extra.push(g); else want.splice(at, 1);
      });
      lack = want.slice();
      if (extra.length) out.push((k === 0 ? '反应物' : '生成物') + '里“' + extra.map(fmt).join('、') + '”不该出现');
      if (lack.length) out.push((k === 0 ? '反应物' : '生成物') + '漏写了“' + lack.map(fmt).join('、') + '”');
    });
    return out.length ? out : ['还有一处写得不准确，对照正确答案再看一遍。'];
  }

  /* ================= 小图渲染（参数化 SVG） ================= */
  function pic(spec) {
    if (!spec) return '';
    var v = spec.v || 'tube';
    var body = '';
    if (v === 'tube') body = pTube(spec);
    else if (v === 'flask') body = pFlask(spec);
    else if (v === 'burn') body = pBurn(spec);
    else if (v === 'wire') body = pWire(spec);
    else if (v === 'tubeheat') body = pTubeHeat(spec);
    else if (v === 'beaker') body = pBeaker(spec);
    else if (v === 'cell') body = pCell(spec);
    else body = pTube(spec);
    return '<svg viewBox="0 0 200 150" class="dr-pic">' + body + '</svg>';
  }

  function glass(x, y, w, h, r) {
    /* 圆底试管外形 */
    return 'M' + x + ',' + y + ' L' + x + ',' + (y + h - r)
      + ' A' + r + ',' + r + ' 0 0 0 ' + (x + w) + ',' + (y + h - r)
      + ' L' + (x + w) + ',' + y;
  }
  function bubbles(cx, top, bot, n) {
    var s = '';
    for (var i = 0; i < (n || 5); i++) {
      var x = cx + ((i * 13) % 30) - 15;
      var y = top + ((i * 17) % Math.max(8, bot - top));
      s += '<circle cx="' + x + '" cy="' + y + '" r="' + (2 + (i % 3)) + '" fill="none" stroke="#94a3b8" stroke-width="1"/>';
    }
    return s;
  }
  function solids(cx, y, color, n) {
    var s = '';
    for (var i = 0; i < (n || 3); i++) {
      s += '<rect x="' + (cx - 16 + i * 11) + '" y="' + (y + (i % 2) * 3) + '" width="9" height="7" rx="2" fill="' + color + '"/>';
    }
    return s;
  }
  function precip(cx, y, color) {
    var s = '';
    for (var i = 0; i < 9; i++) {
      var x = cx - 18 + (i % 5) * 9 + ((i > 4) ? 4 : 0);
      var yy = y + Math.floor(i / 5) * 6;
      s += '<circle cx="' + x + '" cy="' + yy + '" r="3.2" fill="' + color + '" opacity=".85"/>';
    }
    return s;
  }
  function steam(cx, y) {
    var s = '';
    for (var i = 0; i < 3; i++) {
      s += '<path d="M' + (cx - 14 + i * 14) + ',' + y + ' q6,-8 0,-16 q-6,-8 0,-16" fill="none" stroke="#cbd5e1" stroke-width="1.6" opacity=".8"/>';
    }
    return s;
  }
  function flame(x, y, color, scale) {
    var k = scale || 1;
    return '<path d="M' + x + ',' + (y - 26 * k) + ' q' + (9 * k) + ',' + (18 * k) + ' 0,' + (26 * k)
      + ' q' + (-9 * k) + ',' + (-8 * k) + ' 0,' + (-26 * k) + 'z" fill="' + color + '" opacity=".95">'
      + '<animate attributeName="opacity" values=".75;1;.75" dur="0.7s" repeatCount="indefinite"/></path>'
      + '<path d="M' + x + ',' + (y - 14 * k) + ' q' + (4.5 * k) + ',' + (10 * k) + ' 0,' + (14 * k)
      + ' q' + (-4.5 * k) + ',' + (-4 * k) + ' 0,' + (-14 * k) + 'z" fill="#fff7ed" opacity=".9"/>';
  }

  function pTube(s) {
    var x = 74, y = 26, w = 52, h = 100;
    var o = '<defs><clipPath id="cpT"><path d="' + glass(x, y, w, h, 26) + 'z"/></clipPath>'
      + '<linearGradient id="gT" x1="0" y1="0" x2="0" y2="1">'
      + '<stop offset="0%" stop-color="' + (s.liq || '#e0f2fe') + '"/>'
      + '<stop offset="100%" stop-color="' + (s.liq2 || s.liq || '#e0f2fe') + '"/></linearGradient></defs>';
    o += '<path d="' + glass(x, y, w, h, 26) + '" fill="#ffffff" stroke="#64748b" stroke-width="2.4"/>';
    if (s.liq2 && s.liq) { }
    o += '<g clip-path="url(#cpT)">';
    if (s.liq) o += '<rect x="' + (x - 2) + '" y="62" width="' + (w + 4) + '" height="70" fill="url(#gT)"/>';
    if (s.prec) o += precip(100, 108, s.prec);
    if (s.sol) o += solids(100, 112, s.sol, 3);
    if (s.bub) o += bubbles(100, 70, 116, 6);
    o += '</g>';
    if (s.drop) o += '<path d="M100,96 q5,7 0,11 q-5,-4 0,-11z" fill="#93c5fd"/>';
    o += '<path d="' + glass(x, y, w, h, 26) + '" fill="none" stroke="#64748b" stroke-width="2.4"/>';
    return o;
  }

  function pFlask(s) {
    var o = '<defs><clipPath id="cpF"><path d="M78,32 L78,58 L58,126 L142,126 L122,58 L122,32 Z"/></clipPath></defs>';
    o += '<path d="M78,32 L78,58 L58,126 L142,126 L122,58 L122,32" fill="#fff" stroke="#64748b" stroke-width="2.4" stroke-linejoin="round"/>';
    o += '<g clip-path="url(#cpF)">';
    if (s.liq) o += '<rect x="50" y="88" width="100" height="46" fill="' + s.liq + '"/>';
    if (s.sol) o += solids(100, 116, s.sol, 3);
    if (s.bub) o += bubbles(100, 92, 122, 7);
    o += '</g>';
    o += '<path d="M76,26 L124,26" stroke="#64748b" stroke-width="2.4" stroke-linecap="round"/>';
    o += '<path d="M78,32 L78,58 L58,126 L142,126 L122,58 L122,32" fill="none" stroke="#64748b" stroke-width="2.4" stroke-linejoin="round"/>';
    return o;
  }

  function pBurn(s) {
    var o = '<rect x="58" y="40" width="84" height="90" rx="6" fill="#fff" stroke="#64748b" stroke-width="2.4"/>';
    o += '<rect x="80" y="26" width="40" height="14" rx="4" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>';
    o += '<path d="M100,40 L100,88" stroke="#475569" stroke-width="2.4"/>';       /* 燃烧匙柄 */
    o += '<path d="M92,88 q8,10 16,0 z" fill="#94a3b8" stroke="#475569" stroke-width="1.6"/>';
    if (s.glow) o += '<circle cx="100" cy="80" r="34" fill="' + s.glow + '" opacity=".22"><animate attributeName="opacity" values=".12;.3;.12" dur="1s" repeatCount="indefinite"/></circle>';
    if (s.flame) o += flame(100, 88, s.flame, 1.15);
    if (s.smoke) {
      for (var i = 0; i < 5; i++) {
        o += '<circle cx="' + (88 + i * 6) + '" cy="' + (60 - i * 7) + '" r="' + (3 + i) + '" fill="' + s.smoke + '" opacity="' + (0.5 - i * 0.07) + '"/>';
      }
    }
    if (s.steam) o += steam(100, 46);
    return o;
  }

  function pWire(s) {
    var o = '<rect x="58" y="40" width="84" height="90" rx="6" fill="#fff" stroke="#64748b" stroke-width="2.4"/>';
    o += '<rect x="80" y="26" width="40" height="14" rx="4" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>';
    o += '<path d="M100,40 L100,92" stroke="#475569" stroke-width="3"/>';
    if (s.glow) {
      o += '<circle cx="100" cy="92" r="30" fill="#ffffff" opacity=".35"><animate attributeName="opacity" values=".2;.5;.2" dur="0.6s" repeatCount="indefinite"/></circle>';
      o += '<circle cx="100" cy="92" r="10" fill="#fff"/>';
    }
    if (s.spark) {
      for (var i = 0; i < 8; i++) {
        var a = i * Math.PI / 4;
        o += '<line x1="100" y1="92" x2="' + (100 + Math.cos(a) * 22) + '" y2="' + (92 + Math.sin(a) * 22)
          + '" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"><animate attributeName="opacity" values="1;0;1" dur="0.5s" repeatCount="indefinite"/></line>';
      }
      o += '<circle cx="100" cy="92" r="6" fill="#fbbf24"/>';
    }
    if (s.sol) {
      o += '<path d="M92,124 q8,8 16,0 z" fill="' + s.sol + '"/>';
      o += '<circle cx="86" cy="126" r="3" fill="' + s.sol + '"/><circle cx="112" cy="126" r="2.4" fill="' + s.sol + '"/>';
    }
    return o;
  }

  function pTubeHeat(s) {
    var o = '<defs><clipPath id="cpH"><path d="M40,52 L118,44 L118,64 L40,72 Z"/></clipPath></defs>';
    o += '<path d="M40,52 L118,44 L118,64 L40,72 Z" fill="#fff" stroke="#64748b" stroke-width="2.4"/>';   /* 横放试管 */
    o += '<g clip-path="url(#cpH)">';
    if (s.sol) {
      o += '<rect x="62" y="48" width="34" height="18" fill="' + s.sol + '" opacity=".95"/>';
      o += '<circle cx="70" cy="62" r="3" fill="' + s.sol + '"/><circle cx="80" cy="64" r="2.6" fill="' + s.sol + '"/>';
    }
    o += '</g>';
    o += '<path d="M40,52 L118,44 L118,64 L40,72 Z" fill="none" stroke="#64748b" stroke-width="2.4"/>';
    o += flame(74, 100, '#f59e0b', 1.1);                                   /* 酒精灯 */
    o += '<path d="M62,102 L86,102 L86,116 L62,116 Z" fill="#fef3c7" stroke="#94a3b8" stroke-width="1.6"/>';
    o += '<path d="M30,62 L44,62 L44,58" stroke="#94a3b8" stroke-width="2.4" fill="none" stroke-linejoin="round"/>'; /* 导管 */
    if (s.lime) {
      o += '<path d="M30,62 L30,120" stroke="#94a3b8" stroke-width="2.4"/>';
      o += '<path d="' + glass(16, 92, 28, 44, 14) + '" fill="#f8fafc" stroke="#64748b" stroke-width="2.2"/>';
      o += '<rect x="18" y="112" width="24" height="22" fill="#e5e7eb"/>';
      o += precip(30, 128, '#ffffff');
    }
    if (s.drop) {
      o += '<path d="M124,60 q5,7 0,11 q-5,-4 0,-11z" fill="#93c5fd"/>';
      o += '<path d="M128,74 q5,7 0,11 q-5,-4 0,-11z" fill="#93c5fd" opacity=".7"/>';
    }
    return o;
  }

  function pBeaker(s) {
    var o = '<defs><clipPath id="cpB"><path d="M62,58 L62,128 L138,128 L138,58"/></clipPath></defs>';
    o += '<path d="M56,52 L62,58 L62,128 L138,128 L138,58 L144,52" fill="#fff" stroke="#64748b" stroke-width="2.4" stroke-linejoin="round"/>';
    o += '<g clip-path="url(#cpB)">';
    if (s.liq) o += '<rect x="60" y="76" width="80" height="56" fill="' + s.liq + '"/>';
    if (s.sol) o += solids(100, 120, s.sol, 4);
    o += '</g>';
    o += '<path d="M56,52 L144,52" stroke="#64748b" stroke-width="2.4" stroke-linecap="round"/>';
    o += '<path d="M126,86 L138,86 M126,100 L138,100" stroke="#94a3b8" stroke-width="1.4"/>';
    if (s.steam) o += steam(100, 52);
    return o;
  }

  function pCell(s) {
    var o = '<path d="M46,44 L46,116 M154,44 L154,116" stroke="#64748b" stroke-width="2.4" fill="none"/>';
    o += '<rect x="40" y="40" width="12" height="80" rx="6" fill="#eff6ff" stroke="#64748b" stroke-width="2"/>';
    o += '<rect x="148" y="40" width="12" height="80" rx="6" fill="#eff6ff" stroke="#64748b" stroke-width="2"/>';
    o += '<path d="M52,120 L148,120 L148,132 L52,132 Z" fill="#e0f2fe" stroke="#64748b" stroke-width="2"/>';
    o += '<rect x="40" y="52" width="12" height="68" fill="#bae6fd"/>';
    o += '<rect x="148" y="66" width="12" height="54" fill="#bae6fd"/>';
    o += '<path d="M46,40 L46,28 M154,40 L154,28" stroke="#dc2626" stroke-width="2.4"/>';
    o += '<circle cx="46" cy="24" r="4" fill="#dc2626"/><circle cx="154" cy="24" r="4" fill="#1d4ed8"/>';
    o += bubbles(46, 58, 108, 5) + bubbles(154, 72, 112, 4);
    o += '<text x="46" y="20" text-anchor="middle" font-size="9" fill="#dc2626">+</text>';
    o += '<text x="154" y="20" text-anchor="middle" font-size="9" fill="#1d4ed8">−</text>';
    return o;
  }

  /* ================= 出题 ================= */
  function rnd(a) { return a[Math.floor(Math.random() * a.length)]; }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function scopeCards() {
    if (cfg.scope === 'all') return cards.slice();
    return cards.filter(function (c) { return c.group === cfg.scope; });
  }
  function distracts(card, field, n) {
    var same = cards.filter(function (c) { return c.id !== card.id && c.group === card.group; });
    var other = cards.filter(function (c) { return c.id !== card.id && c.group !== card.group; });
    var pool = shuffle(same).concat(shuffle(other));
    var out = [];
    pool.forEach(function (c) {
      var v = c[field];
      if (!v) return;
      if (v === card[field]) return;
      if (out.indexOf(v) >= 0) return;
      if (out.length < n) out.push(v);
    });
    return out;
  }

  /* 全部卡片里出现过的化学式（去系数），用作填空干扰项 */
  function allTerms() {
    var out = [];
    cards.forEach(function (c) {
      var p = c.formula.split('=');
      splitSide(p[0]).concat(splitSide(p[1])).forEach(function (t) {
        var b = bare(t);
        if (b && out.indexOf(b) < 0) out.push(b);
      });
    });
    return out;
  }

  function makeQ(card, kind) {
    var q = { card: card, kind: kind };
    if (kind === 'write') {
      q.title = '默写方程式';
      q.prompt = '写出「' + card.name + '」的化学方程式';
      q.hintHTML = '<b>反应物：</b>' + chemList(card.formula.split('=')[0])
        + (card.cond ? '　<b>条件：</b>' + esc(card.cond) : '');
      q.body = pic(card.pic) + '<input id="ansInput" class="eq-input" placeholder="例如：C+O2=CO2" autocomplete="off">'
        + kbHTML();
      q.check = function () {
        var v = (document.getElementById('ansInput') || {}).value || '';
        if (!v.trim()) return { ok: false, why: ['还没写答案'], empty: true };
        if (canon(v) === canon(card.formula)) return { ok: true };
        return { ok: false, why: diagnose(v, card) };
      };
      q.solution = eqHTML(card);
    } else if (kind === 'choice') {
      if (Math.random() < 0.5) {
        q.title = '四选一 · 选方程式';
        q.prompt = '下列哪个方程式对应「' + card.name + '」？';
        q.sub = '<b>现象提示：</b>' + esc(card.phenom);
        q.opts = shuffle([card.formula].concat(distracts(card, 'formula', 3))).map(function (f) {
          return { html: eqHTML({ formula: f, cond: '' }), val: f };
        });
      } else {
        q.title = '四选一 · 选现象';
        q.promptHTML = '反应 ' + eqHTML(card) + ' 的现象是？';
        q.opts = shuffle([card.phenom].concat(distracts(card, 'phenom', 3))).map(function (t) {
          return { html: '<span class="opt-txt">' + esc(t) + '</span>', val: t };
        });
      }
      q.answer = (q.opts.filter(function (o) {
        return o.val === card.formula || o.val === card.phenom;
      })[0] || {}).val;
      q.body = pic(card.pic) + optsHTML(q);
      q.check = function () {
        var v = picked();
        if (!v) return { ok: false, why: ['请先选一个答案'], empty: true };
        return { ok: v === q.answer };
      };
      q.solution = eqHTML(card);
    } else if (kind === 'pic') {
      q.title = '看图判断';
      q.body = '<div class="pic-box">' + pic(card.pic) + '</div>';
      if (Math.random() < 0.5) {
        q.prompt = '图中实验对应的化学方程式是？';
        q.opts = shuffle([card.formula].concat(distracts(card, 'formula', 3))).map(function (f) {
          return { html: eqHTML({ formula: f, cond: '' }), val: f };
        });
        q.answer = card.formula;
      } else {
        q.prompt = '图中实验的主要现象是？';
        q.opts = shuffle([card.phenom].concat(distracts(card, 'phenom', 3))).map(function (t) {
          return { html: '<span class="opt-txt">' + esc(t) + '</span>', val: t };
        });
        q.answer = card.phenom;
      }
      q.body += optsHTML(q);
      q.check = function () {
        var v = picked();
        if (!v) return { ok: false, why: ['请先选一个答案'], empty: true };
        return { ok: v === q.answer };
      };
      q.solution = eqHTML(card);
    } else if (kind === 'fill') {
      var p = card.formula.split('=');
      var allT = splitSide(p[0]).concat(splitSide(p[1]));
      var leftT = splitSide(p[0]), rightT = splitSide(p[1]);
      var cand = allT.filter(function (t) { return lengthOf(t) > 1; });
      var target = rnd(cand.length ? cand : allT) || rnd(allT);
      var inLeft = leftT.indexOf(target) >= 0;
      var BLANK = '<u class="blank">?</u>';
      var blankHTML = leftT.map(function (t) { return t === target ? BLANK : fmt(t); }).join(' <em>+</em> ');
      var rightHTML = rightT.map(function (t) {
        return (!inLeft && t === target) ? BLANK : fmt(t);
      }).join(' <em>+</em> ');
      q.title = '填空 · 补化学式';
      q.prompt = '补全方程式：';
      q.blankEq = '<span class="eq">' + blankHTML
        + '<span class="eq-op"><i>' + esc(card.cond || '') + '</i><b>⟶</b></span>' + rightHTML + '</span>';
      /* 干扰项：先随机取其他方程式的生成物，再按化学式去重，不够时从全部化学式里补 */
      var cands = shuffle(cards.filter(function (c) { return c.id !== card.id; })
        .map(function (c) { return rnd(splitSide(c.formula.split('=')[1])); }))
        .filter(function (t) { return t && bare(t) !== bare(target); });
      var uniq = [];
      cands.concat(shuffle(allTerms())).forEach(function (t) {
        if (uniq.length >= 3) return;
        if (!t) return;
        if (bare(t) === bare(target)) return;
        if (uniq.some(function (u) { return bare(u) === bare(t); })) return;
        uniq.push(t);
      });
      var pool = [target].concat(uniq);
      q.opts = shuffle(pool).map(function (t) { return { html: fmt(t), val: t }; });
      q.answer = target;
      q.body = pic(card.pic) + optsHTML(q);
      q.check = function () {
        var v = picked();
        if (!v) return { ok: false, why: ['请先选一个答案'], empty: true };
        return { ok: bare(v) === bare(target) };
      };
      q.solution = eqHTML(card);
    }
    return q;
  }

  function optsHTML(q) {
    return '<div class="opts">' + q.opts.map(function (o, i) {
      return '<div class="opt" data-v="' + esc(o.val) + '" onclick="Drill.pick(this)">'
        + '<i>' + 'ABCD'[i] + '</i>' + o.html + '</div>';
    }).join('') + '</div>';
  }
  function kbHTML() {
    var el = ['H', 'O', 'C', 'N', 'S', 'P', 'Cl', 'Na', 'Mg', 'Al', 'Ca', 'Fe', 'Cu', 'Zn', 'Ag', 'Ba', 'K', 'Mn'];
    var num = ['2', '3', '4', '5', '6'];
    var sym = ['+', '=', '(', ')', '↑', '↓'];
    return '<div class="kb">'
      + '<div class="kb-row">' + el.map(function (e) { return kbBtn(e); }).join('') + '</div>'
      + '<div class="kb-row">' + num.map(function (e) { return kbBtn(e); }).join('')
      + sym.map(function (e) { return kbBtn(e); }).join('')
      + '<button type="button" class="kb-k fn" onclick="Drill.type(\'BK\')">⌫</button>'
      + '<button type="button" class="kb-k fn" onclick="Drill.type(\'CL\')">清空</button>'
      + '</div></div>';
  }
  function kbBtn(t) {
    return '<button type="button" class="kb-k" onclick="Drill.type(\'' + t + '\')">' + t + '</button>';
  }

  var chosen = null;
  function picked() { return chosen; }

  /* ================= 渲染 ================= */
  function $(s) { return document.querySelector(s); }

  function renderSetup() {
    var gs = (DATA && DATA.groups) || [];
    $('#drBody').innerHTML =
      '<div class="dr-setup">'
      + '<div class="dr-row"><label>练习模式</label><div class="mode-btns">'
      + [['mix', '混合（推荐）'], ['write', '✍ 方程式默写'], ['choice', '🔤 四选一'],
      ['pic', '🖼 看图判断'], ['fill', '🧩 补化学式'], ['browse', '🃏 背卡片']]
        .map(function (m) {
          return '<button class="mb' + (cfg.mode === m[0] ? ' on' : '') + '" onclick="Drill.setMode(\'' + m[0] + '\')">' + m[1] + '</button>';
        }).join('')
      + '</div></div>'
      + '<div class="dr-row"><label>范围</label><select id="drScope" onchange="Drill.setScope(this.value)">'
      + '<option value="all"' + (cfg.scope === 'all' ? ' selected' : '') + '>全部 ' + cards.length + ' 条</option>'
      + gs.map(function (g) {
        var n = cards.filter(function (c) { return c.group === g; }).length;
        return '<option value="' + esc(g) + '"' + (cfg.scope === g ? ' selected' : '') + '>' + esc(g) + ' ' + n + ' 条</option>';
      }).join('')
      + '</select></div>'
      + '<div class="dr-row"><label>题数</label><select id="drCount" onchange="Drill.setCount(this.value)">'
      + [10, 20, 30, 999].map(function (n) {
        return '<option value="' + n + '"' + (cfg.count === n ? ' selected' : '') + '>' + (n === 999 ? '全部' : n + ' 题') + '</option>';
      }).join('')
      + '</select></div>'
      + '<label class="ck"><input type="checkbox" id="drWrite"' + (cfg.write ? ' checked' : '') + ' onchange="Drill.setWrite(this.checked)"> 混合模式里包含「默写题」（手机上打字较慢可不选）</label>'
      + '<button class="primary big" onclick="Drill.start()">开始练习</button>'
      + '<div class="dr-tip">💡 默写题输入 <code>O2</code> 这样的普通数字即可，不用输入下标；反应条件（点燃、加热…）可写可不写。</div>'
      + '</div>';
  }

  function renderQ() {
    cur = queue[idx];
    answered = false; chosen = null;
    var q = cur;
    var html = '<div class="dr-q">'
      + '<div class="dr-qtop"><span class="tag">' + esc(q.title) + '</span>'
      + '<span class="progress">第 ' + (idx + 1) + ' / ' + queue.length + ' 题</span></div>'
      + '<div class="dr-prompt">' + (q.promptHTML ? q.promptHTML : esc(q.prompt || '')) + '</div>';
    if (q.blankEq) html += '<div class="dr-eqbox">' + q.blankEq + '</div>';
    if (q.hintHTML) html += '<div class="dr-sub">' + q.hintHTML + '</div>';
    if (q.sub) html += '<div class="dr-sub">' + q.sub + '</div>';
    html += '<div class="dr-main">' + q.body + '</div>'
      + '<div id="fbBox"></div>'
      + '<div class="dr-btns">'
      + '<button class="ghost" onclick="Drill.showAnswer()">看答案</button>'
      + '<button class="primary" id="okBtn" onclick="Drill.submit()">确定</button>'
      + '<button class="ghost" id="nextBtn" style="display:none" onclick="Drill.next()">下一题 →</button>'
      + '</div></div>';
    $('#drBody').innerHTML = html;
    var inp = document.getElementById('ansInput');
    if (inp) {
      inp.focus();
      inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') Drill.submit(); });
    }
  }

  function renderBrowse() {
    cur = queue[idx];
    var c = cur.card;
    $('#drBody').innerHTML = '<div class="dr-q">'
      + '<div class="dr-qtop"><span class="tag">🃏 背卡片</span>'
      + '<span class="progress">第 ' + (idx + 1) + ' / ' + queue.length + ' 张</span></div>'
      + '<div class="dr-card2" id="flipCard" onclick="Drill.flip()">'
      + '<div class="fc-front">' + pic(c.pic)
      + '<h3>' + esc(c.name) + '</h3>'
      + '<p class="dim">' + esc(c.type || '') + '</p>'
      + '<div class="flip-hint">点击翻面看答案</div></div>'
      + '</div>'
      + '<div id="backBox"></div>'
      + '<div class="dr-btns">'
      + '<button class="ghost" onclick="Drill.flip()">翻面</button>'
      + '<button class="primary" id="nextBtn" onclick="Drill.next()">下一张 →</button>'
      + '</div></div>';
  }

  /* ================= 流程 ================= */
  function build() {
    var pool = scopeCards();
    if (!pool.length) { LabCore.toast('这个范围没有卡片', 'err'); return false; }
    var sel = shuffle(pool);
    if (cfg.count < 999) sel = sel.slice(0, cfg.count);
    var kinds = cfg.mode === 'mix' ? (cfg.write ? ['write', 'choice', 'pic', 'fill'] : ['choice', 'pic', 'fill']) : [cfg.mode];
    queue = sel.map(function (c) { return { card: c, kind: rnd(kinds) }; });
    if (cfg.mode !== 'browse') {
      queue = queue.map(function (it) { return makeQ(it.card, it.kind === 'browse' ? 'choice' : it.kind); });
    }
    idx = 0; right = 0; miss = []; t0 = Date.now();
    return true;
  }

  /* ---------------- 对外接口 ---------------- */
  return {
    boot: function () {
      /* 支持 URL 参数：drill.html?mode=write&scope=酸碱盐&count=10&auto=1 */
      var m = LabCore.param('mode');
      if (m) cfg.mode = m;
      var s = LabCore.param('scope');
      if (s) cfg.scope = s;
      var n = LabCore.param('count');
      if (n) cfg.count = parseInt(n, 10) || 10;
      var auto = false;
      var done = function (d) {
        DATA = d; cards = d.cards || [];
        var cnt = document.getElementById('drCountAll');
        if (cnt) cnt.textContent = cards.length;
        if (auto) { if (build()) { state = 'play'; if (cfg.mode === 'browse') renderBrowse(); else renderQ(); } }
        else renderSetup();
      };
      auto = LabCore.param('auto') === '1';
      if (window.LAB_BUNDLE && window.LAB_BUNDLE.cards) done(window.LAB_BUNDLE.cards);
      LabCore.loadJSON('data-cards.json', 'cards').then(done).catch(function () {
        var box = document.getElementById('drBody');
        if (box && !cards.length) {
          box.innerHTML =
            '<div class="empty">卡片加载失败。请用本地服务器打开：在项目文件夹执行 '
            + '<code>python -m http.server 8000</code>，再访问 http://localhost:8000/drill.html</div>';
        }
      });
      var nm = document.getElementById('drName');
      if (nm) {
        nm.value = LabCore.getStudent();
        nm.addEventListener('change', function () { LabCore.setStudent(nm.value); });
      }
    },

    setMode: function (m) { cfg.mode = m; renderSetup(); },
    setScope: function (s) { cfg.scope = s; },
    setCount: function (n) { cfg.count = parseInt(n, 10) || 10; },
    setWrite: function (b) { cfg.write = !!b; },

    start: function () {
      if (!build()) return;
      state = 'play';
      if (cfg.mode === 'browse') renderBrowse(); else renderQ();
    },

    pick: function (el) {
      if (answered) return;
      chosen = el.getAttribute('data-v');
      Array.prototype.forEach.call(document.querySelectorAll('.opt'), function (o) { o.classList.remove('sel'); });
      el.classList.add('sel');
    },

    type: function (t) {
      var inp = document.getElementById('ansInput');
      if (!inp) return;
      if (t === 'BK') inp.value = inp.value.slice(0, -1);
      else if (t === 'CL') inp.value = '';
      else inp.value += t;
      inp.focus();
    },

    submit: function () {
      if (answered) { this.next(); return; }
      var r = cur.check();
      if (r.empty) { LabCore.toast(r.why[0], 'err'); return; }
      answered = true;
      var box = document.getElementById('fbBox');
      if (r.ok) {
        right++;
        box.innerHTML = '<div class="fb ok">✅ 正确！' + (cur.kind === 'write' ? '' : '')
          + '<div class="fb-eq">' + cur.solution + '</div></div>';
      } else {
        miss.push(cur.card.name + '（' + cur.card.formula + '）');
        box.innerHTML = '<div class="fb bad">❌ 不对。' + (r.why && r.why.length ? '<div class="fb-why">' + r.why.map(esc).join('；') + '</div>' : '')
          + '<div class="fb-eq">正确答案：<b>' + cur.solution + '</b></div></div>';
      }
      if (cur.kind !== 'write') {
        Array.prototype.forEach.call(document.querySelectorAll('.opt'), function (o) {
          var v = o.getAttribute('data-v');
          if (v === cur.answer) o.classList.add('right');
          else if (v === chosen) o.classList.add('wrong');
        });
      }
      document.getElementById('okBtn').style.display = 'none';
      document.getElementById('nextBtn').style.display = '';
      var ph = document.getElementById('drPhenom');
      box.innerHTML += '<div class="fb-phen"><b>现象：</b>' + esc(cur.card.phenom)
        + '<br><b>考点：</b>' + (cur.card.key || []).map(esc).join(' / ')
        + (cur.card.tip ? '<br><b>提醒：</b>' + esc(cur.card.tip) : '') + '</div>';
    },

    showAnswer: function () {
      if (answered) return;
      answered = true;
      miss.push(cur.card.name + '（' + cur.card.formula + '）');
      var box = document.getElementById('fbBox');
      box.innerHTML = '<div class="fb bad">📖 正确答案：<div class="fb-eq"><b>' + cur.solution + '</b></div></div>'
        + '<div class="fb-phen"><b>现象：</b>' + esc(cur.card.phenom)
        + '<br><b>考点：</b>' + (cur.card.key || []).map(esc).join(' / ') + '</div>';
      document.getElementById('okBtn').style.display = 'none';
      document.getElementById('nextBtn').style.display = '';
      if (cur.kind !== 'write') {
        Array.prototype.forEach.call(document.querySelectorAll('.opt'), function (o) {
          if (o.getAttribute('data-v') === cur.answer) o.classList.add('right');
        });
      }
    },

    next: function () {
      idx++;
      if (idx >= queue.length) { this.finish(); return; }
      if (cfg.mode === 'browse') renderBrowse(); else renderQ();
    },

    flip: function () {
      var box = document.getElementById('backBox');
      var c = cur.card;
      if (!box) return;
      box.innerHTML = '<div class="dr-back">' + eqHTML(c)
        + '<div class="bk-row"><b>现象</b><span>' + esc(c.phenom) + '</span></div>'
        + '<div class="bk-row"><b>考点</b><span>' + (c.key || []).map(esc).join(' / ') + '</span></div>'
        + (c.tip ? '<div class="bk-row"><b>提醒</b><span>' + esc(c.tip) + '</span></div>' : '')
        + '</div>';
      var f = document.getElementById('flipCard');
      if (f) f.style.display = 'none';
    },

    finish: function () {
      state = 'result';
      var dur = Math.round((Date.now() - t0) / 1000);
      var total = queue.length;
      if (cfg.mode === 'browse') {
        $('#drBody').innerHTML = '<div class="dr-res"><h2>🃏 已过 ' + total + ' 张卡</h2>'
          + '<p class="dim">背卡模式不计分，建议再用「混合」模式测一遍掌握情况。</p>'
          + '<div class="dr-btns"><button class="ghost" onclick="Drill.home()">返回设置</button>'
          + '<button class="primary" onclick="Drill.setMode(\'mix\');Drill.start()">直接开测</button></div></div>';
        return;
      }
      var score = right * 10, max = total * 10;
      var rate = Math.round(score / max * 100);
      var scopeName = cfg.scope === 'all' ? '全部 ' + total + ' 题' : cfg.scope;
      LabCore.saveRecord({
        id: Date.now(),
        student: LabCore.getStudent() || '未填写',
        experiment: 'drill:' + cfg.scope,
        expName: '记忆卡练习 · ' + scopeName,
        score: score, max: max, rate: rate, duration: dur,
        errors: miss.slice(0, 12), time: Date.now()
      });
      var cls = rate >= 90 ? '#16a34a' : (rate >= 75 ? '#ea580c' : '#dc2626');
      $('#drBody').innerHTML = '<div class="dr-res">'
        + '<div class="score-big" style="color:' + cls + '">' + score + '<small> / ' + max + '</small></div>'
        + '<div class="dim">正确率 ' + rate + '%　·　用时 ' + LabCore.fmtDuration(dur) + '　·　答对 ' + right + '/' + total + '</div>'
        + (miss.length
          ? '<div class="miss-box"><b>需要再记的 ' + miss.length + ' 条：</b><ul>'
          + miss.map(function (m) { return '<li>' + fmt(m) + '</li>'; }).join('') + '</ul></div>'
          : '<div class="miss-box ok">🎉 全部正确，这些方程式已经记牢了！</div>')
        + '<div class="dr-btns">'
        + '<button class="ghost" onclick="Drill.home()">返回设置</button>'
        + (miss.length ? '<button class="ghost" onclick="Drill.redo()">只练错题</button>' : '')
        + '<button class="primary" onclick="Drill.start()">再来一组</button>'
        + '<button class="ghost" onclick="location.href=\'index.html\'">回首页</button>'
        + '</div>'
        + '<p class="dim" style="margin-top:10px;font-size:12px">成绩已保存到本机，可在首页「我的记录」看到，也能导出 CSV 交给老师。</p>'
        + '</div>';
    },

    /* 调试/自检接口（tools/test-drill.html 用，不影响正常使用） */
    _debug: function () {
      return {
        cards: function () { return cards; },
        norm: norm, canon: canon, canonBare: canonBare, fmt: fmt,
        diagnose: diagnose, makeQ: makeQ, pic: pic, eqHTML: eqHTML,
        setCards: function (d) { DATA = d; cards = d.cards || []; }
      };
    },

    redo: function () {
      var names = miss.map(function (m) { return m.split('（')[0]; });
      queue = cards.filter(function (c) { return names.indexOf(c.name) >= 0; })
        .map(function (c) { return makeQ(c, rnd(['choice', 'pic', 'fill'])); });
      if (!queue.length) { LabCore.toast('没有错题啦', 'ok'); return; }
      idx = 0; right = 0; miss = []; t0 = Date.now();
      state = 'play'; renderQ();
    },

    home: function () { state = 'setup'; renderSetup(); }
  };
})();

document.addEventListener('DOMContentLoaded', function () { Drill.boot(); });
