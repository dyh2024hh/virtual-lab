/* ==========================================================
 * app.js —— 实验页启动器：按 URL 的 id 载入对应实验数据
 * 新增实验只需在 data/ 放一个 json，并在 data/experiments.json 登记
 * ========================================================== */
(function () {
  function fail(msg) {
    document.getElementById('app').innerHTML =
      '<div style="padding:40px;text-align:center;color:#64748b;font-size:14px;line-height:2">' + msg + '</div>';
  }

  function boot() {
    var id = LabCore.param('id');
    if (!id) { fail('缺少实验参数。<br>请从<a href="index.html" style="color:#2563eb">首页</a>选择一个实验。'); return; }

    /* 优先用离线 bundle（双击打开也能跑），否则 fetch JSON */
    if (window.LAB_BUNDLE && window.LAB_BUNDLE['exp_' + id]) {
      start(window.LAB_BUNDLE['exp_' + id]);
    }
    LabCore.loadJSON('data/' + id + '.json', 'exp_' + id)
      .then(start)
      .catch(function (e) {
        fail('实验数据加载失败（' + e.message + '）。<br><br>'
          + '如果你是直接双击打开的 HTML，浏览器会禁止读取数据文件。<br>'
          + '在项目文件夹里执行：<br><code style="background:#f1f5f9;padding:4px 8px;border-radius:4px">python -m http.server 8000</code><br><br>'
          + '然后访问 <b>http://localhost:8000</b><br><br>'
          + '<a href="index.html" style="color:#2563eb">返回首页</a>');
      });
  }

  function start(cfg) {
    if (!cfg || !cfg.steps) { fail('实验数据格式不对，缺少 steps 字段。'); return; }
    document.title = cfg.title + ' · 虚拟实验';
    LabEngine.init(cfg);
    /* 支持 &step=xxx 直达某一步，方便老师讲评时直接分享链接 */
    var s = LabCore.param('step');
    if (s) LabEngine.go(s);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
