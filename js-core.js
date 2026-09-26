/* ==========================================================
 * core.js —— 通用工具 / 提示条 / 学习记录存储 / CSV
 * ========================================================== */
window.LabCore = (function () {

  /* ---------------- 基础工具 ---------------- */
  function $(sel) { return document.querySelector(sel); }

  function esc(s) {
    return String(s === undefined || s === null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  var toastTimer = null;
  function toast(msg, kind, duration) {
    var box = document.getElementById('toast');
    if (!box) return;
    box.textContent = msg;
    box.className = 'show ' + (kind || 'ok');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { box.className = ''; },
      duration || (kind === 'err' ? 4200 : 2400));
  }

  /* 屏幕坐标 → SVG viewBox 坐标 */
  function svgPoint(svg, clientX, clientY) {
    if (!svg || !svg.createSVGPoint) return { x: clientX, y: clientY };
    var pt = svg.createSVGPoint();
    pt.x = clientX; pt.y = clientY;
    var ctm = svg.getScreenCTM();
    if (!ctm) return { x: clientX, y: clientY };
    var p = pt.matrixTransform(ctm.inverse());
    return { x: p.x, y: p.y };
  }

  /* 取 URL 参数 */
  function param(name) {
    var m = new RegExp('[?&]' + name + '=([^&#]*)').exec(window.location.search);
    return m ? decodeURIComponent(m[1]) : '';
  }

  /* ---------------- 数据加载：fetch 优先，失败回退到 bundle.js ---------------- */
  var memory = {};
  function remember(key, obj) { memory[key] = obj; }

  function loadJSON(url, key) {
    if (memory[key]) return Promise.resolve(memory[key]);
    /* bundle.js 已内联数据（用于 file:// 直接双击打开） */
    if (window.LAB_BUNDLE && window.LAB_BUNDLE[key]) {
      memory[key] = window.LAB_BUNDLE[key];
      return Promise.resolve(memory[key]);
    }
    return fetch(url, { cache: 'no-store' })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(function (d) { memory[key] = d; return d; });
  }

  /* ---------------- 学习记录（localStorage） ---------------- */
  var K_REC = 'lab_records';
  var K_STU = 'lab_student';

  function getStudent() {
    try { return localStorage.getItem(K_STU) || ''; } catch (e) { return ''; }
  }
  function setStudent(name) {
    try { localStorage.setItem(K_STU, String(name || '').trim()); } catch (e) { }
  }

  function allRecords() {
    try { return JSON.parse(localStorage.getItem(K_REC) || '[]'); } catch (e) { return []; }
  }
  function listRecords(expId) {
    var all = allRecords();
    if (!expId) return all;
    return all.filter(function (r) { return r.experiment === expId; });
  }
  function saveRecord(rec) {
    var all = allRecords();
    all.push(rec);
    try { localStorage.setItem(K_REC, JSON.stringify(all)); } catch (e) { }
    return rec;
  }
  function removeRecord(id) {
    var all = allRecords().filter(function (r) { return r.id !== id; });
    try { localStorage.setItem(K_REC, JSON.stringify(all)); } catch (e) { }
  }
  function clearRecords(expId) {
    try {
      if (!expId) localStorage.removeItem(K_REC);
      else localStorage.setItem(K_REC, JSON.stringify(allRecords().filter(function (r) { return r.experiment !== expId; })));
    } catch (e) { }
  }

  /* ---------------- CSV ---------------- */
  function toCSV(rows) {
    return rows.map(function (r) {
      return r.map(function (c) {
        var s = String(c === undefined || c === null ? '' : c);
        return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
      }).join(',');
    }).join('\r\n');
  }

  function download(filename, text) {
    /* 加 BOM，Excel 打开中文不乱码 */
    var blob = new Blob(['\ufeff' + text], { type: 'text/csv;charset=utf-8;' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 200);
  }

  function stamp() {
    var d = new Date(), p = function (n) { return n < 10 ? '0' + n : '' + n; };
    return d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) + '-' + p(d.getHours()) + p(d.getMinutes());
  }

  function fmtDuration(sec) {
    var m = Math.floor(sec / 60), s = Math.round(sec % 60);
    return m + '分' + (s < 10 ? '0' + s : s) + '秒';
  }

  return {
    $: $, esc: esc, toast: toast, svgPoint: svgPoint, param: param,
    loadJSON: loadJSON, remember: remember,
    getStudent: getStudent, setStudent: setStudent,
    allRecords: allRecords, listRecords: listRecords, saveRecord: saveRecord,
    removeRecord: removeRecord, clearRecords: clearRecords,
    toCSV: toCSV, download: download, stamp: stamp, fmtDuration: fmtDuration
  };
})();
