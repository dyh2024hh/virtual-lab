/* ==========================================================
 * home.js —— 首页：实验列表 + 我的记录 + CSV 导出
 * ========================================================== */
var Home = (function () {

  var list = [];

  function boot() {
    var nameBox = document.getElementById('stuName');
    nameBox.value = LabCore.getStudent();
    nameBox.addEventListener('change', function () {
      LabCore.setStudent(nameBox.value);
      LabCore.toast('已记住姓名：' + (nameBox.value || '未填写'), 'ok');
    });
    load();
  }

  function load() {
    /* 先走离线 bundle（双击 index.html 也能用），再尝试 fetch 取最新 JSON */
    var done = function (data) { list = data || []; renderList(); renderRecords(); };
    if (window.LAB_BUNDLE && window.LAB_BUNDLE.experiments) {
      done(window.LAB_BUNDLE.experiments);
    }
    LabCore.loadJSON('data-experiments.json', 'experiments')
      .then(done)
      .catch(function () {
        if (!list.length) {
          document.getElementById('expGrid').innerHTML =
            '<div class="empty">加载失败。请用本地服务器打开：在项目文件夹里执行 <code>python -m http.server 8000</code>，'
            + '然后访问 http://localhost:8000</div>';
        }
      });
  }

  function renderList() {
    var box = document.getElementById('expGrid');
    if (!list.length) { box.innerHTML = '<div class="empty">暂无实验</div>'; return; }
    document.getElementById('expCount').textContent = '共 ' + list.length + ' 个';

    /* 清单里带 group 字段时按分组显示：气体制取一组、性质探究一组…… */
    if (list.some(function (e) { return e.group; })) {
      var order = [], map = {};
      list.forEach(function (e) {
        var g = e.group || '其他实验';
        if (!map[g]) { map[g] = []; order.push(g); }
        map[g].push(e);
      });
      box.innerHTML = order.map(function (g) {
        return '<div class="grp-hd"><span>' + LabCore.esc(g) + '</span>'
          + '<em>' + map[g].length + ' 个</em><i></i></div>'
          + map[g].map(card).join('');
      }).join('') + drillCard();
      return;
    }
    box.innerHTML = list.map(card).join('') + drillCard();
  }

  /* 记忆卡练习入口（固定在实验卡片最后） */
  function drillCard() {
    var best = null;
    LabCore.allRecords().forEach(function (r) {
      if (String(r.experiment || '').indexOf('drill:') === 0 && (!best || r.rate > best.rate)) best = r;
    });
    return '<div class="grp-hd"><span>记忆与自测</span><em>' + (window.LAB_CARD_COUNT || 34) + ' 条</em><i></i></div>'
      + '<div class="exp-card" style="border-color:#bfdbfe;background:linear-gradient(160deg,#f8fbff,#fff)" '
      + 'onclick="location.href=\'drill.html\'">'
      + '<div class="ic" style="background:#eff6ff">📇</div>'
      + '<h3>化学方程式记忆卡</h3>'
      + '<p>34 条核心方程式：默写、四选一、看图判断、补全化学式，自动判分并记入成绩。</p>'
      + '<div class="meta">'
      + '<span>满分 100 分</span><span>4 种题型</span>'
      + (best ? '<span style="background:#dcfce7;color:#15803d">最好正确率 ' + best.rate + '%</span>' : '<span>未练习</span>')
      + '</div></div>';
  }

  function card(e) {
    var best = bestOf(e.id);
    return '<div class="exp-card" onclick="location.href=\'experiment.html?id=' + encodeURIComponent(e.id) + '\'">'
      + '<div class="ic">' + (e.iconEmoji || '🧪') + '</div>'
      + '<h3>' + LabCore.esc(e.name) + '</h3>'
      + '<p>' + LabCore.esc(e.desc || '') + '</p>'
      + '<div class="meta">'
      +   '<span>满分 ' + (e.max || 100) + ' 分</span>'
      +   '<span>' + LabCore.esc(e.method || '') + '</span>'
      +   (best ? '<span style="background:#dcfce7;color:#15803d">最好成绩 ' + best.score + '</span>' : '<span>未练习</span>')
      + '</div></div>';
  }

  function bestOf(id) {
    if (String(id).indexOf('drill:') === 0) {
      var d = null;
      LabCore.allRecords().forEach(function (r) {
        if (String(r.experiment || '').indexOf('drill:') === 0 && (!d || r.rate > d.rate)) d = r;
      });
      return d;
    }
    var rs = LabCore.listRecords(id);
    var b = null;
    rs.forEach(function (r) { if (!b || r.score > b.score) b = r; });
    return b;
  }

  function renderRecords() {
    var box = document.getElementById('recBox');
    var rs = LabCore.allRecords().slice().sort(function (a, b) { return b.id - a.id; });
    if (!rs.length) {
      box.innerHTML = '<div class="empty">还没有练习记录，做完一次实验后会自动出现在这里。</div>';
      return;
    }
    var rows = rs.map(function (r) {
      var rateCls = r.rate >= 90 ? '#16a34a' : (r.rate >= 75 ? '#ea580c' : '#dc2626');
      return '<tr>'
        + '<td>' + LabCore.esc(r.student) + '</td>'
        + '<td>' + LabCore.esc(r.expName || r.experiment) + '</td>'
        + '<td><b style="color:' + rateCls + '">' + r.score + '</b> / ' + r.max + '</td>'
        + '<td>' + r.rate + '%</td>'
        + '<td>' + LabCore.fmtDuration(r.duration) + '</td>'
        + '<td style="color:#dc2626;font-size:11.5px">' + LabCore.esc((r.errors || []).join('；') || '—') + '</td>'
        + '<td>' + new Date(r.time).toLocaleString('zh-CN') + '</td>'
        + '<td><button class="ghost" style="padding:3px 9px;font-size:11.5px" onclick="Home.del(' + r.id + ')">删除</button></td>'
        + '</tr>';
    }).join('');

    box.innerHTML = '<div class="t-card" style="padding:0;overflow-x:auto">'
      + '<table><tr><th>姓名</th><th>实验</th><th>得分</th><th>正确率</th><th>用时</th><th>错误</th><th>提交时间</th><th></th></tr>'
      + rows + '</table></div>'
      + '<div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap">'
      + '<button class="primary" onclick="Home.exportAll()">导出全部为 CSV</button>'
      + '<button class="danger" onclick="Home.clearAll()">清空本机记录</button>'
      + '</div>'
      + '<p style="margin-top:8px;font-size:12px;color:#94a3b8">'
      + '说明：记录保存在当前浏览器本地，换设备或清理浏览器数据会丢失。导出的 CSV 可以发给老师，用「教师端」打开汇总。</p>';
  }

  function del(id) {
    LabCore.removeRecord(id);
    renderList(); renderRecords();
  }

  function clearAll() {
    if (!confirm('确定清空本机的全部练习记录吗？此操作不可恢复。')) return;
    LabCore.clearRecords();
    renderList(); renderRecords();
    LabCore.toast('已清空记录', 'ok');
  }

  function exportAll() {
    var rs = LabCore.allRecords();
    if (!rs.length) { LabCore.toast('还没有记录可以导出', 'err'); return; }
    exportRows(rs, '全部');
  }

  function exportRows(records, who) {
    var head = ['姓名', '实验', '得分', '满分', '正确率(%)', '用时(秒)', '错误操作', '提交时间'];
    var rows = [head];
    records.forEach(function (r) {
      rows.push([r.student, r.expName, r.score, r.max, r.rate, r.duration,
        (r.errors || []).join('；'), new Date(r.time).toLocaleString('zh-CN')]);
    });
    LabCore.download('虚拟实验成绩-' + who + '-' + LabCore.stamp() + '.csv', LabCore.toCSV(rows));
    LabCore.toast('已导出 CSV，可交给老师导入教师端查看', 'ok');
  }

  document.addEventListener('DOMContentLoaded', boot);
  return { exportAll: exportAll, del: del, clearAll: clearAll };
})();
