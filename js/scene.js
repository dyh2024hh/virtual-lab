/* ==========================================================
 * scene.js —— 数据驱动的 SVG 场景渲染器
 *
 * JSON 里的每个零件长这样：
 *   { "tag":"rect", "when":"stage.tube", "x":10, "y":20, ...属性 }
 *   { "tag":"g", "rotate":{"deg":"stage.tubeTilt","cx":255,"cy":150}, "children":[...] }
 *   { "tag":"text", "text":"水倒吸！", ... }
 *
 * 规则：
 *   1. when      —— 条件表达式，为真才渲染（表达式里可用 stage / step / S）
 *   2. rotate    —— 动态旋转，deg 为角度表达式
 *   3. 属性值前缀 @ 表示这是一个表达式，会先求值
 *   4. text      —— tag 为 text 时的文本内容
 * ========================================================== */
window.LabScene = (function () {

  var ATTRS = ['id', 'class', 'x', 'y', 'x1', 'y1', 'x2', 'y2', 'width', 'height', 'rx', 'ry',
    'r', 'cx', 'cy', 'points', 'd', 'fill', 'fill-opacity', 'stroke', 'stroke-width',
    'stroke-dasharray', 'stroke-linecap', 'opacity', 'transform', 'style', 'font-size',
    'font-weight', 'text-anchor', 'dominant-baseline'];

  /* --- 表达式求值：stage / step / S 三个变量可用 --- */
  function run(expr, ctx) {
    /* eslint-disable no-new-func */
    return new Function('stage', 'step', 'S', 'return (' + expr + ');')(ctx.stage, ctx.step, ctx.S);
  }
  function truthy(cond, ctx) {
    if (cond === undefined || cond === null) return true;
    if (typeof cond === 'boolean') return !!cond;
    return !!run(cond, ctx);
  }
  function val(v, ctx) {
    if (typeof v === 'string' && v.charAt(0) === '@') return run(v.slice(1), ctx);
    return v;
  }

  function attrs(p, ctx) {
    var out = [];
    for (var i = 0; i < ATTRS.length; i++) {
      var k = ATTRS[i];
      if (p[k] === undefined) continue;
      var v = val(p[k], ctx);
      if (v === false || v === null) continue;
      out.push(k + '="' + String(v) + '"');
    }
    return out.join(' ');
  }

  function renderPart(p, ctx) {
    if (!truthy(p.when, ctx)) return '';
    var tag = p.tag || 'g';

    var tf = [];
    if (p.rotate) {
      var deg = val(p.rotate.deg, ctx);
      tf.push('rotate(' + deg + ' ' + p.rotate.cx + ' ' + p.rotate.cy + ')');
    }
    if (p.translate) tf.push('translate(' + val(p.translate[0], ctx) + ' ' + val(p.translate[1], ctx) + ')');
    if (p.scale) tf.push('scale(' + val(p.scale, ctx) + ')');

    var extra = '';
    if (tf.length) {
      var base = p.transform ? p.transform + ' ' : '';
      extra = ' transform="' + base + tf.join(' ') + '"';
    }

    var a = attrs(p, ctx);
    var head = '<' + tag + (a ? ' ' + a : '') + extra;

    if (tag === 'text') {
      var t = p.text || '';
      /* text 内容同样支持 @ 表达式，比如动态显示温度读数 */
      if (typeof t === 'string' && t.charAt(0) === '@') t = String(val(t, ctx));
      return head + '>' + t + '</text>';
    }
    if (p.children && p.children.length) {
      var inner = '';
      for (var i = 0; i < p.children.length; i++) inner += renderPart(p.children[i], ctx);
      /* 空 g 就不输出，省得留下垃圾节点 */
      if (tag === 'g' && !inner) return '';
      return head + '>' + inner + '</' + tag + '>';
    }
    return head + '/>';
  }

  /* 渲染整个实验台场景 */
  function render(cfg, ctx) {
    var body = window.LabIcons.DEFS;
    var parts = cfg.scene || [];
    for (var i = 0; i < parts.length; i++) body += renderPart(parts[i], ctx);
    return '<svg viewBox="' + (cfg.viewBox || '0 0 600 360') + '" class="scene" xmlns="http://www.w3.org/2000/svg">'
      + body + '</svg>';
  }

  /* 渲染放置区（可拖拽目标的高亮框） */
  function renderZones(zoneMap, activeList) {
    var s = '';
    for (var i = 0; i < activeList.length; i++) {
      var key = activeList[i];
      var z = zoneMap[key];
      if (!z) continue;
      s += '<rect class="zone" data-drop="' + key + '" x="' + z.x + '" y="' + z.y
        + '" width="' + z.w + '" height="' + z.h + '" rx="10" fill="#93c5fd" fill-opacity="0.10"'
        + ' stroke="#60a5fa" stroke-width="1.8" stroke-dasharray="7 5"/>';
    }
    return s;
  }

  return { render: render, renderZones: renderZones, renderPart: renderPart, eval: run, truthy: truthy, val: val };
})();
