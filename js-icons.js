/* ==========================================================
 * icons.js —— SVG 材质定义 + 器材图标库
 * 新增实验时：如果要画新器材，只在这个文件里加一条即可
 * ========================================================== */
window.LabIcons = (function () {

  /* ---------- 通用渐变 / 图案（所有场景共用） ---------- */
  var DEFS = ''
    + '<defs>'
    +   '<linearGradient id="gGlass" x1="0" y1="0" x2="0" y2="1">'
    +     '<stop offset="0%" stop-color="#e6f4fb"/><stop offset="30%" stop-color="#ffffff"/>'
    +     '<stop offset="60%" stop-color="#e3f2fb"/><stop offset="100%" stop-color="#b3d4e8"/>'
    +   '</linearGradient>'
    +   '<linearGradient id="gGlassH" x1="0" y1="0" x2="1" y2="0">'
    +     '<stop offset="0%" stop-color="#a8cfe6" stop-opacity="0.9"/>'
    +     '<stop offset="50%" stop-color="#ffffff" stop-opacity="0.9"/>'
    +     '<stop offset="100%" stop-color="#a8cfe6" stop-opacity="0.9"/>'
    +   '</linearGradient>'
    +   '<linearGradient id="gMetal" x1="0" y1="0" x2="1" y2="0">'
    +     '<stop offset="0%" stop-color="#5a6670"/><stop offset="20%" stop-color="#a4b2bb"/>'
    +     '<stop offset="45%" stop-color="#e2e9ed"/><stop offset="65%" stop-color="#9aa8b1"/>'
    +     '<stop offset="100%" stop-color="#4d5962"/>'
    +   '</linearGradient>'
    +   '<linearGradient id="gMetalV" x1="0" y1="0" x2="0" y2="1">'
    +     '<stop offset="0%" stop-color="#e2e9ed"/><stop offset="50%" stop-color="#a4b2bb"/>'
    +     '<stop offset="100%" stop-color="#5a6670"/>'
    +   '</linearGradient>'
    +   '<linearGradient id="gRubber" x1="0" y1="0" x2="0" y2="1">'
    +     '<stop offset="0%" stop-color="#8d6e63"/><stop offset="50%" stop-color="#5d4037"/>'
    +     '<stop offset="100%" stop-color="#3e2723"/>'
    +   '</linearGradient>'
    +   '<radialGradient id="gLamp" cx="0.35" cy="0.28" r="0.85">'
    +     '<stop offset="0%" stop-color="#e3ebf0"/><stop offset="60%" stop-color="#94a6b3"/>'
    +     '<stop offset="100%" stop-color="#5f7180"/>'
    +   '</radialGradient>'
    +   '<radialGradient id="gFlameCore" cx="0.5" cy="0.75" r="0.7">'
    +     '<stop offset="0%" stop-color="#ffffff"/><stop offset="45%" stop-color="#fff59d"/>'
    +     '<stop offset="100%" stop-color="#ffb74d" stop-opacity="0.2"/>'
    +   '</radialGradient>'
    +   '<radialGradient id="gFlameOut" cx="0.5" cy="0.7" r="0.7">'
    +     '<stop offset="0%" stop-color="#ffcc80" stop-opacity="0.95"/>'
    +     '<stop offset="70%" stop-color="#ff9800" stop-opacity="0.55"/>'
    +     '<stop offset="100%" stop-color="#ff6f00" stop-opacity="0"/>'
    +   '</radialGradient>'
    +   '<pattern id="pKMnO4" width="7" height="7" patternUnits="userSpaceOnUse">'
    +     '<rect width="7" height="7" fill="#6a1b9a"/><circle cx="1.8" cy="1.8" r="1" fill="#4a148c"/>'
    +     '<circle cx="5.2" cy="4.6" r="0.85" fill="#9c27b0"/><circle cx="3.5" cy="2.8" r="0.5" fill="#ce93d8"/>'
    +   '</pattern>'
    +   '<pattern id="pCotton" width="9" height="9" patternUnits="userSpaceOnUse">'
    +     '<rect width="9" height="9" fill="#fefefe"/><circle cx="2.2" cy="2.2" r="2.1" fill="#f2f2f2"/>'
    +     '<circle cx="6.5" cy="5.8" r="2.3" fill="#fafafa"/><circle cx="4.5" cy="1.2" r="1" fill="#e8e8e8"/>'
    +   '</pattern>'
    +   '<pattern id="pMarble" width="10" height="10" patternUnits="userSpaceOnUse">'
    +     '<rect width="10" height="10" fill="#eceff1"/><circle cx="3" cy="3" r="2.6" fill="#cfd8dc"/>'
    +     '<circle cx="7.5" cy="7" r="2.2" fill="#b0bec5"/><circle cx="6" cy="2" r="1.2" fill="#e0e0e0"/>'
    +   '</pattern>'
    +   '<pattern id="pLime" width="8" height="8" patternUnits="userSpaceOnUse">'
    +     '<rect width="8" height="8" fill="#eafaf1"/><circle cx="2" cy="2" r="1.6" fill="#c8e6c9"/>'
    +     '<circle cx="6" cy="5.5" r="1.8" fill="#a5d6a7"/>'
    +   '</pattern>'
    +   '<linearGradient id="gWater" x1="0" y1="0" x2="0" y2="1">'
    +     '<stop offset="0%" stop-color="#a5e2ff" stop-opacity="0.75"/>'
    +     '<stop offset="100%" stop-color="#42a5f5" stop-opacity="0.88"/>'
    +   '</linearGradient>'
    +   '<linearGradient id="gAcid" x1="0" y1="0" x2="0" y2="1">'
    +     '<stop offset="0%" stop-color="#e8f5e9" stop-opacity="0.85"/>'
    +     '<stop offset="100%" stop-color="#a5d6a7" stop-opacity="0.9"/>'
    +   '</linearGradient>'
    +   '<linearGradient id="gWood" x1="0" y1="0" x2="1" y2="0">'
    +     '<stop offset="0%" stop-color="#a1763e"/><stop offset="50%" stop-color="#d4a869"/>'
    +     '<stop offset="100%" stop-color="#8b6330"/>'
    +   '</linearGradient>'
    /* 下面几个供「性质探究」类实验画溶液颜色用 */
    +   '<linearGradient id="gPink" x1="0" y1="0" x2="0" y2="1">'
    +     '<stop offset="0%" stop-color="#f8bbd0"/><stop offset="100%" stop-color="#ec407a"/>'
    +   '</linearGradient>'
    +   '<linearGradient id="gBlue" x1="0" y1="0" x2="0" y2="1">'
    +     '<stop offset="0%" stop-color="#90caf9"/><stop offset="100%" stop-color="#1565c0"/>'
    +   '</linearGradient>'
    +   '<linearGradient id="gBrown" x1="0" y1="0" x2="0" y2="1">'
    +     '<stop offset="0%" stop-color="#ffe0b2"/><stop offset="100%" stop-color="#d84315"/>'
    +   '</linearGradient>'
    +   '<linearGradient id="gGreenP" x1="0" y1="0" x2="0" y2="1">'
    +     '<stop offset="0%" stop-color="#dcedc8"/><stop offset="100%" stop-color="#7cb342"/>'
    +   '</linearGradient>'
    + '</defs>';

  /* 试剂瓶通用画法：同一套玻璃瓶，换个盖子颜色、液体颜色和标签就是另一种试剂 */
  function reagent(capFill, liquidFill, label, labelColor, strokeColor) {
    var fs2 = label.length > 5 ? 5.6 : (label.length > 3 ? 6.4 : 7.6);
    return '<rect x="20" y="14" width="22" height="38" rx="4" fill="url(#gGlass)" stroke="' + strokeColor + '" stroke-width="2"/>'
      + '<rect x="23" y="10" width="16" height="6" rx="2" fill="' + capFill + '" stroke="' + strokeColor + '" stroke-width="1.4"/>'
      + '<rect x="23" y="28" width="16" height="21" rx="2" fill="' + liquidFill + '"/>'
      + '<text x="31" y="25" font-size="' + fs2 + '" text-anchor="middle" fill="' + labelColor + '" font-weight="700">' + label + '</text>';
  }

  /* 广口瓶（装固体药品）通用画法 */
  function jar(capFill, fill, label, labelColor, strokeColor) {
    var fs2 = label.length > 5 ? 5.6 : (label.length > 3 ? 6.4 : 7.6);
    return '<rect x="17" y="16" width="26" height="36" rx="4" fill="url(#gGlass)" stroke="' + strokeColor + '" stroke-width="2"/>'
      + '<rect x="20" y="11" width="20" height="7" rx="2" fill="' + capFill + '" stroke="' + strokeColor + '" stroke-width="1.4"/>'
      + '<rect x="20" y="33" width="20" height="16" rx="2" fill="' + fill + '"/>'
      + '<text x="30" y="29" font-size="' + fs2 + '" text-anchor="middle" fill="' + labelColor + '" font-weight="700">' + label + '</text>';
  }

  /* ---------- 器材图标（60x60 viewBox） ---------- */
  var ICONS = {
    stand: '<rect x="6" y="48" width="48" height="7" rx="2" fill="url(#gMetal)"/>'
      + '<rect x="27" y="8" width="6" height="42" fill="url(#gMetalV)"/>'
      + '<rect x="27" y="18" width="27" height="5" rx="2" fill="url(#gMetalV)"/>',
    lamp: '<rect x="14" y="44" width="32" height="12" rx="4" fill="url(#gLamp)"/>'
      + '<path d="M20 44 L40 44 L37 28 L23 28 Z" fill="#b0bec5" stroke="#8494a0" stroke-width="1"/>'
      + '<rect x="27" y="20" width="6" height="9" rx="2" fill="#cfd8dc"/>'
      + '<path d="M30 6 C36 14 37 19 30 22 C23 19 24 14 30 6 Z" fill="url(#gFlameOut)"/>'
      + '<path d="M30 12 C33 17 33 20 30 21 C27 20 27 17 30 12 Z" fill="#fff59d"/>',
    tube: '<rect x="22" y="6" width="16" height="48" rx="8" fill="url(#gGlass)" stroke="#7ba7c7" stroke-width="1.8"/>'
      + '<rect x="24" y="9" width="3" height="40" rx="1.5" fill="#fff" opacity="0.85"/>'
      + '<rect x="23" y="38" width="14" height="14" rx="6" fill="url(#pKMnO4)"/>',
    flask: '<path d="M26 8 L26 20 L14 46 Q12 52 18 52 L42 52 Q48 52 46 46 L34 20 L34 8 Z" fill="url(#gGlass)" stroke="#7ba7c7" stroke-width="1.8"/>'
      + '<rect x="24" y="5" width="12" height="6" rx="2" fill="url(#gGlass)" stroke="#7ba7c7" stroke-width="1.6"/>'
      + '<path d="M22 40 L38 40 L43 50 L17 50 Z" fill="url(#gWater)" opacity="0.6"/>'
      + '<path d="M28 10 L28 20 L20 36" stroke="#fff" stroke-width="2" fill="none" opacity="0.8"/>',
    stopper: '<path d="M18 22 L42 22 L46 42 L14 42 Z" fill="url(#gRubber)"/>'
      + '<ellipse cx="30" cy="22" rx="12" ry="3" fill="#8d6e63"/>',
    stopper2: '<path d="M14 24 L46 24 L46 40 L14 40 Z" fill="url(#gRubber)"/>'
      + '<ellipse cx="30" cy="24" rx="16" ry="3" fill="#8d6e63"/>'
      + '<circle cx="23" cy="31" r="3" fill="#3e2723"/><circle cx="37" cy="31" r="3" fill="#3e2723"/>',
    pipe: '<path d="M8 16 L34 16 Q50 16 50 34 L50 54" stroke="#90a4ae" stroke-width="6" fill="none" stroke-linecap="round"/>'
      + '<path d="M8 16 L34 16 Q50 16 50 34 L50 54" stroke="#e0e8ec" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.7"/>',
    basin: '<rect x="5" y="22" width="50" height="32" rx="5" fill="url(#gGlass)" stroke="#7ba7c7" stroke-width="1.8"/>'
      + '<rect x="8" y="32" width="44" height="19" rx="3" fill="url(#gWater)"/>'
      + '<rect x="8" y="24" width="44" height="3" rx="1.5" fill="#fff" opacity="0.6"/>',
    bottle: '<rect x="19" y="12" width="22" height="42" rx="3" fill="url(#gGlass)" stroke="#7ba7c7" stroke-width="1.8"/>'
      + '<rect x="21" y="5" width="18" height="9" rx="2" fill="url(#gGlass)" stroke="#7ba7c7" stroke-width="1.8"/>'
      + '<rect x="21" y="30" width="18" height="22" rx="2" fill="url(#gWater)" opacity="0.7"/>'
      + '<rect x="21" y="14" width="3" height="38" rx="1.5" fill="#fff" opacity="0.7"/>',
    glass: '<rect x="7" y="26" width="46" height="8" rx="2" fill="url(#gGlassH)" stroke="#4fc3f7" stroke-width="1.5"/>',
    cotton: '<circle cx="22" cy="32" r="11" fill="url(#pCotton)" stroke="#e0e0e0"/>'
      + '<circle cx="37" cy="31" r="11" fill="url(#pCotton)" stroke="#e0e0e0"/>'
      + '<circle cx="30" cy="23" r="9" fill="url(#pCotton)" stroke="#e0e0e0"/>',
    spoon: '<rect x="5" y="28" width="32" height="6" rx="3" fill="url(#gMetal)"/>'
      + '<ellipse cx="44" cy="31" rx="10" ry="7" fill="#cfd8dc" stroke="#90a4ae" stroke-width="1"/>',
    kmno4: '<rect x="16" y="16" width="28" height="36" rx="4" fill="url(#gGlass)" stroke="#ab47bc" stroke-width="2"/>'
      + '<rect x="19" y="32" width="22" height="17" rx="3" fill="url(#pKMnO4)"/>'
      + '<text x="30" y="28" font-size="8.5" text-anchor="middle" fill="#6a1b9a" font-weight="600">KMnO4</text>',
    marble: '<circle cx="22" cy="34" r="11" fill="url(#pMarble)" stroke="#90a4ae" stroke-width="1.2"/>'
      + '<circle cx="38" cy="30" r="10" fill="url(#pMarble)" stroke="#90a4ae" stroke-width="1.2"/>'
      + '<circle cx="30" cy="20" r="7.5" fill="url(#pMarble)" stroke="#90a4ae" stroke-width="1.2"/>',
    acid: '<rect x="20" y="14" width="22" height="38" rx="4" fill="url(#gGlass)" stroke="#66bb6a" stroke-width="2"/>'
      + '<rect x="23" y="10" width="16" height="6" rx="2" fill="#c8e6c9" stroke="#66bb6a" stroke-width="1.4"/>'
      + '<rect x="23" y="28" width="16" height="21" rx="2" fill="url(#gAcid)"/>'
      + '<text x="31" y="25" font-size="7.5" text-anchor="middle" fill="#2e7d32" font-weight="700">稀HCl</text>',
    funnel: '<path d="M13 12 L47 12 L34 30 L34 48 L26 48 L26 30 Z" fill="url(#gGlass)" stroke="#7ba7c7" stroke-width="1.8"/>',
    funnel2: '<path d="M10 10 L50 10 L33 26 L33 54 L27 54 L27 26 Z" fill="url(#gGlass)" stroke="#7ba7c7" stroke-width="1.8"/>'
      + '<path d="M16 12 L44 12" stroke="#fff" stroke-width="2" opacity="0.8"/>',
    beaker: '<path d="M17 12 L17 46 Q17 50 21 50 L39 50 Q43 50 43 46 L43 12" fill="url(#gGlass)" stroke="#7ba7c7" stroke-width="1.8"/>'
      + '<rect x="20" y="32" width="20" height="16" fill="url(#gWater)" opacity="0.6"/>',
    wood: '<rect x="24" y="14" width="12" height="42" rx="4" fill="url(#gWood)"/>'
      + '<circle cx="30" cy="14" r="5" fill="#8d6e63"/>'
      + '<circle cx="30" cy="14" r="2.5" fill="#ff8a65"/>',
    match: '<rect x="27" y="24" width="7" height="30" rx="3" fill="#d4a869"/>'
      + '<circle cx="30" cy="18" r="8" fill="url(#gFlameOut)"/>'
      + '<circle cx="30" cy="19" r="3.5" fill="#fff59d"/>',
    limewater: '<rect x="19" y="16" width="22" height="38" rx="4" fill="url(#gGlass)" stroke="#81c784" stroke-width="2"/>'
      + '<rect x="22" y="12" width="16" height="6" rx="2" fill="#c8e6c9" stroke="#81c784" stroke-width="1.4"/>'
      + '<rect x="22" y="30" width="16" height="21" rx="2" fill="url(#pLime)"/>'
      + '<text x="30" y="27" font-size="6" text-anchor="middle" fill="#2e7d32" font-weight="700">石灰水</text>',
    tweezers: '<path d="M22 8 L26 30 L34 52" stroke="#90a4ae" stroke-width="4" fill="none" stroke-linecap="round"/>'
      + '<path d="M38 8 L34 30 L26 52" stroke="#b0bec5" stroke-width="4" fill="none" stroke-linecap="round"/>',
    h2o2: '<rect x="20" y="14" width="22" height="38" rx="4" fill="url(#gGlass)" stroke="#4fa3d1" stroke-width="2"/>'
      + '<rect x="23" y="10" width="16" height="6" rx="2" fill="#b3e5fc" stroke="#4fa3d1" stroke-width="1.4"/>'
      + '<rect x="23" y="28" width="16" height="21" rx="2" fill="url(#gWater)" opacity="0.8"/>'
      + '<text x="31" y="25" font-size="7" text-anchor="middle" fill="#0277bd" font-weight="700">H2O2</text>',
    mno2: '<rect x="16" y="16" width="28" height="36" rx="4" fill="url(#gGlass)" stroke="#455a64" stroke-width="2"/>'
      + '<rect x="19" y="34" width="22" height="15" rx="3" fill="#212121"/>'
      + '<circle cx="24" cy="38" r="1.6" fill="#4e4e4e"/><circle cx="33" cy="42" r="1.8" fill="#4e4e4e"/>'
      + '<text x="30" y="28" font-size="8" text-anchor="middle" fill="#263238" font-weight="700">MnO2</text>',
    zinc: '<circle cx="22" cy="34" r="9" fill="#b0bec5" stroke="#78909c" stroke-width="1.2"/>'
      + '<circle cx="38" cy="31" r="8" fill="#cfd8dc" stroke="#78909c" stroke-width="1.2"/>'
      + '<circle cx="30" cy="21" r="6.5" fill="#90a4ae" stroke="#546e7a" stroke-width="1"/>',
    h2so4: '<rect x="20" y="14" width="22" height="38" rx="4" fill="url(#gGlass)" stroke="#7cb342" stroke-width="2"/>'
      + '<rect x="23" y="10" width="16" height="6" rx="2" fill="#dcedc8" stroke="#7cb342" stroke-width="1.4"/>'
      + '<rect x="23" y="28" width="16" height="21" rx="2" fill="url(#gAcid)" opacity="0.9"/>'
      + '<text x="31" y="25" font-size="6.2" text-anchor="middle" fill="#33691e" font-weight="700">H2SO4</text>',
    redP: '<rect x="19" y="16" width="22" height="38" rx="4" fill="url(#gGlass)" stroke="#c62828" stroke-width="2"/>'
      + '<rect x="22" y="12" width="16" height="6" rx="2" fill="#ffcdd2" stroke="#c62828" stroke-width="1.4"/>'
      + '<rect x="22" y="34" width="16" height="17" rx="2" fill="#8d2f22"/>'
      + '<circle cx="27" cy="40" r="1.6" fill="#b71c1c"/><circle cx="34" cy="45" r="1.4" fill="#c62828"/>'
      + '<text x="30" y="29" font-size="7.5" text-anchor="middle" fill="#b71c1c" font-weight="700">红磷</text>',
    sulfur: '<rect x="19" y="16" width="22" height="38" rx="4" fill="url(#gGlass)" stroke="#f9a825" stroke-width="2"/>'
      + '<rect x="22" y="12" width="16" height="6" rx="2" fill="#fff59d" stroke="#f9a825" stroke-width="1.4"/>'
      + '<rect x="22" y="34" width="16" height="17" rx="2" fill="#fdd835"/>'
      + '<text x="30" y="29" font-size="7.5" text-anchor="middle" fill="#ef6c00" font-weight="700">硫粉</text>',
    clamp: '<path d="M18 16 L42 16 L42 25 L18 25 Z" fill="#cfd8dc" stroke="#78909c" stroke-width="1.4"/>'
      + '<path d="M13 25 L47 25" stroke="#546e7a" stroke-width="4" stroke-linecap="round"/>'
      + '<path d="M19 29 Q30 45 41 29" stroke="#90a4ae" stroke-width="4" fill="none" stroke-linecap="round"/>'
      + '<circle cx="30" cy="21" r="2.4" fill="#546e7a"/>',
    power: '<rect x="6" y="20" width="42" height="26" rx="4" fill="#eceff1" stroke="#546e7a" stroke-width="2"/>'
      + '<rect x="10" y="25" width="16" height="11" rx="2" fill="#bbdefb" stroke="#1565c0" stroke-width="1.2"/>'
      + '<text x="18" y="34" font-size="8" text-anchor="middle" fill="#1565c0" font-weight="700">DC</text>'
      + '<circle cx="40" cy="27" r="3.6" fill="#c62828"/><circle cx="40" cy="38" r="3.6" fill="#1565c0"/>'
      + '<text x="52" y="31" font-size="11" fill="#c62828" font-weight="700">+</text>'
      + '<text x="53" y="43" font-size="13" fill="#1565c0" font-weight="700">-</text>',

    /* ===== 以下为「性质探究」类实验新增器材 ===== */

    pbottle: '<path d="M24 8 L36 8 L36 14 L45 20 Q47 25 47 31 L47 50 Q47 54 43 54 L17 54 Q13 54 13 50 L13 31 Q13 25 15 20 L24 14 Z" fill="url(#gGlass)" stroke="#7ba7c7" stroke-width="1.8"/>'
      + '<rect x="24" y="6" width="12" height="6" rx="2" fill="#90caf9" stroke="#42a5f5" stroke-width="1.4"/>'
      + '<rect x="20" y="31" width="20" height="21" rx="2" fill="url(#gWater)" opacity="0.55"/>'
      + '<text x="30" y="47" font-size="7" text-anchor="middle" fill="#0277bd">塑料瓶</text>',
    cogas: '<path d="M24 8 L36 8 L36 14 L45 20 Q47 25 47 31 L47 50 Q47 54 43 54 L17 54 Q13 54 13 50 L13 31 Q13 25 15 20 L24 14 Z" fill="#e0f7fa" stroke="#26a69a" stroke-width="1.8"/>'
      + '<rect x="24" y="6" width="12" height="6" rx="2" fill="#80cbc4" stroke="#00897b" stroke-width="1.4"/>'
      + '<text x="30" y="42" font-size="9" text-anchor="middle" fill="#00695c" font-weight="700">CO2</text>',
    naoh: reagent('#ef9a9a', '#ffffff', 'NaOH', '#c62828', '#e57373'),
    water2: reagent('#90caf9', 'url(#gWater)', 'H2O', '#0277bd', '#4fa3d1'),
    phenol: reagent('#f48fb1', '#f8bbd0', '酚酞', '#ad1457', '#ec407a'),
    alcohol: reagent('#ce93d8', '#f3e5f5', '乙醇', '#6a1b9a', '#ab47bc'),
    cuso4: reagent('#64b5f6', 'url(#gBlue)', 'CuSO4', '#0d47a1', '#1565c0'),
    cuso4a: jar('#b3bdbf', '#ffffff', '无水CuSO4', '#455a64', '#78909c'),
    fecl3: reagent('#ffcc80', 'url(#gBrown)', 'FeCl3', '#bf360c', '#e65100'),
    na2co3: reagent('#e0e0e0', '#f5f5f5', 'Na2CO3', '#37474f', '#90a4ae'),
    na2so4: reagent('#b0bec5', '#fafafa', 'Na2SO4', '#37474f', '#78909c'),
    nacl: reagent('#cfd8dc', '#fafafa', 'NaCl', '#37474f', '#90a4ae'),
    bacl2: reagent('#fff59d', '#fffde7', 'BaCl2', '#f9a825', '#fbc02d'),
    hno3: reagent('#ffab91', '#ffccbc', 'HNO3', '#bf360c', '#ff7043'),
    agno3: reagent('#c5cae9', '#e8eaf6', 'AgNO3', '#283593', '#5c6bc0'),
    quicklime: '<circle cx="22" cy="36" r="11" fill="#fafafa" stroke="#cfd8dc" stroke-width="1.2"/>'
      + '<circle cx="38" cy="32" r="10" fill="#f5f5f5" stroke="#cfd8dc" stroke-width="1.2"/>'
      + '<circle cx="30" cy="21" r="7.5" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.2"/>'
      + '<path d="M18 34 L26 39 M36 30 L42 34" stroke="#e0e0e0" stroke-width="1"/>',
    dropper: '<path d="M27 6 L33 6 L33 16 L27 16 Z" fill="#8d6e63"/>'
      + '<rect x="28" y="16" width="4" height="26" rx="1.5" fill="url(#gGlass)" stroke="#7ba7c7" stroke-width="1.2"/>'
      + '<path d="M28 40 L32 40 L31 52 L29 52 Z" fill="url(#gGlass)" stroke="#7ba7c7" stroke-width="1.2"/>'
      + '<circle cx="30" cy="56" r="2" fill="#42a5f5" opacity="0.8"/>',
    thermo: '<rect x="27" y="6" width="8" height="44" rx="4" fill="url(#gGlass)" stroke="#90a4ae" stroke-width="1.4"/>'
      + '<circle cx="31" cy="48" r="8" fill="#ef5350" stroke="#c62828" stroke-width="1.2"/>'
      + '<rect x="29" y="20" width="4" height="30" rx="2" fill="#ef5350"/>'
      + '<path d="M35 12 L35 44 M35 16 L39 16 M35 22 L39 22 M35 28 L39 28" stroke="#607d8b" stroke-width="1"/>',
    rod: '<rect x="27" y="4" width="7" height="52" rx="3.5" fill="url(#gGlass)" stroke="#7ba7c7" stroke-width="1.4"/>'
      + '<rect x="28" y="8" width="2" height="44" rx="1" fill="#ffffff" opacity="0.8"/>',
    iron: '<rect x="26" y="10" width="9" height="42" rx="1.5" fill="#b0bec5" stroke="#546e7a" stroke-width="1.2"/>'
      + '<rect x="24" y="6" width="13" height="6" rx="2" fill="#90a4ae" stroke="#546e7a" stroke-width="1.2"/>'
      + '<path d="M30 20 L30 48" stroke="#eceff1" stroke-width="1.6"/>',
    mag: '<rect x="19" y="12" width="24" height="6" rx="2" fill="#cfd8dc" stroke="#78909c" stroke-width="1.2"/>'
      + '<rect x="19" y="24" width="24" height="6" rx="2" fill="#e0e0e0" stroke="#78909c" stroke-width="1.2"/>'
      + '<rect x="19" y="36" width="24" height="6" rx="2" fill="#cfd8dc" stroke="#78909c" stroke-width="1.2"/>',
    cu: '<path d="M18 40 Q24 16 30 30 Q36 44 42 24" stroke="#d84315" stroke-width="6" fill="none" stroke-linecap="round"/>'
      + '<path d="M18 40 Q24 16 30 30 Q36 44 42 24" stroke="#ff8a65" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.7"/>'
  };

  /* 返回一个完整的 60x60 小图标 SVG 字符串 */
  function svg(id) {
    return '<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">' + DEFS + (ICONS[id] || '') + '</svg>';
  }

  return { DEFS: DEFS, ICONS: ICONS, svg: svg };
})();
