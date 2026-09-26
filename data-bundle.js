/* 自动生成文件，请勿手改。改完 data/*.json 后执行：node tools/build-bundle.js */
window.LAB_BUNDLE = {
  "experiments": [
    {
      "id": "kmno4",
      "name": "高锰酸钾制取氧气",
      "file": "data-kmno4.json",
      "iconEmoji": "🔥",
      "desc": "固体加热型发生装置，排水法收集，带火星木条检验。",
      "method": "排水法",
      "group": "气体制取与检验",
      "max": 100
    },
    {
      "id": "h2o2",
      "name": "过氧化氢制取氧气",
      "file": "data-h2o2.json",
      "iconEmoji": "💧",
      "desc": "固液常温型发生装置，MnO₂ 催化，排水法收集。",
      "method": "排水法",
      "group": "气体制取与检验",
      "max": 100
    },
    {
      "id": "co2",
      "name": "实验室制取二氧化碳",
      "file": "data-co2.json",
      "iconEmoji": "🫧",
      "desc": "固液常温型发生装置，向上排空气法收集，澄清石灰水检验。",
      "method": "向上排空气法",
      "group": "气体制取与检验",
      "max": 100
    },
    {
      "id": "h2",
      "name": "实验室制取氢气",
      "file": "data-h2.json",
      "iconEmoji": "🎈",
      "desc": "锌粒与稀硫酸，向下排空气法收集，点燃前必须验纯。",
      "method": "向下排空气法",
      "group": "气体制取与检验",
      "max": 100
    },
    {
      "id": "o2air",
      "name": "测定空气里氧气的含量",
      "file": "data-o2air.json",
      "iconEmoji": "📏",
      "desc": "红磷燃烧消耗氧气，水倒吸入集气瓶，测得氧气约占 1/5。",
      "method": "压强法",
      "group": "气体制取与检验",
      "max": 100
    },
    {
      "id": "water",
      "name": "水的组成 —— 电解水",
      "file": "data-water.json",
      "iconEmoji": "⚡",
      "desc": "通直流电分解水，正氧负氢、体积比 1:2，推出水的元素组成。",
      "method": "电解法",
      "group": "气体制取与检验",
      "max": 100
    },
    {
      "id": "co2naoh",
      "name": "二氧化碳与氢氧化钠反应",
      "file": "data-co2naoh.json",
      "iconEmoji": "🥤",
      "desc": "没有明显现象的反应：用塑料瓶变瘪和对照实验把它显示出来。",
      "method": "压强法 + 对照",
      "group": "性质探究",
      "max": 100
    },
    {
      "id": "cao",
      "name": "生石灰与水反应放热",
      "file": "data-cao.json",
      "iconEmoji": "🌡️",
      "desc": "CaO + H₂O = Ca(OH)₂，温度计飙升的背后是干燥剂的原理。",
      "method": "温度变化法",
      "group": "性质探究",
      "max": 100
    },
    {
      "id": "neutral",
      "name": "酸和碱的中和反应",
      "file": "data-neutral.json",
      "iconEmoji": "🧪",
      "desc": "酚酞变红后逐滴加酸至恰好褪色，看懂 H⁺ + OH⁻ = H₂O。",
      "method": "指示剂法",
      "group": "性质探究",
      "max": 100
    },
    {
      "id": "metalacid",
      "name": "金属与稀盐酸的反应",
      "file": "data-metalacid.json",
      "iconEmoji": "⚙️",
      "desc": "三支试管同时比气泡：Mg > Zn > Fe，顺便点燃检验氢气。",
      "method": "对比实验法",
      "group": "性质探究",
      "max": 100
    },
    {
      "id": "fecuso4",
      "name": "铁与硫酸铜溶液的反应",
      "file": "data-fecuso4.json",
      "iconEmoji": "🪙",
      "desc": "铁丝表面长出红色的铜，蓝溶液变浅绿：这就是湿法炼铜。",
      "method": "置换法",
      "group": "性质探究",
      "max": 100
    },
    {
      "id": "ions",
      "name": "硫酸根与氯离子的检验",
      "file": "data-ions.json",
      "iconEmoji": "🔎",
      "desc": "BaCl₂ 和 AgNO₃ 各显本领，稀硝酸负责排除碳酸根的干扰。",
      "method": "沉淀加酸法",
      "group": "性质探究",
      "max": 100
    },
    {
      "id": "precip",
      "name": "碱与盐的沉淀反应",
      "file": "data-precip.json",
      "iconEmoji": "🎨",
      "desc": "蓝色、红褐色、白色三种沉淀，一次记牢复分解的发生条件。",
      "method": "沉淀法",
      "group": "性质探究",
      "max": 100
    },
    {
      "id": "cuso4water",
      "name": "无水硫酸铜检验水",
      "file": "data-cuso4water.json",
      "iconEmoji": "💠",
      "desc": "白色粉末遇水变蓝，对照无水乙醇，学会检验水的存在。",
      "method": "显色法",
      "group": "性质探究",
      "max": 100
    }
  ],
  "cards": {
    "updated": "2026-09-27",
    "note": "初中化学核心方程式记忆卡。formula 用 ASCII 书写（数字代表下标），页面渲染时自动转下标；cond 是反应条件，默写时可不写。",
    "groups": [
      "燃烧与氧化",
      "分解反应",
      "置换与还原",
      "酸碱盐"
    ],
    "cards": [
      {
        "id": "c01",
        "group": "燃烧与氧化",
        "type": "化合反应",
        "name": "木炭在氧气中燃烧（充分）",
        "formula": "C+O2=CO2",
        "cond": "点燃",
        "phenom": "木炭在氧气中剧烈燃烧，发出白光，放出热量，生成能使澄清石灰水变浑浊的气体。",
        "key": [
          "发出白光",
          "澄清石灰水变浑浊",
          "由上而下缓慢伸入"
        ],
        "pic": {
          "v": "burn",
          "flame": "#f59e0b",
          "glow": "#ffffff"
        },
        "tip": "氧气不足时碳不完全燃烧：2C+O2=点燃=2CO。"
      },
      {
        "id": "c02",
        "group": "燃烧与氧化",
        "type": "化合反应",
        "name": "硫在氧气中燃烧",
        "formula": "S+O2=SO2",
        "cond": "点燃",
        "phenom": "在空气中发出淡蓝色火焰，在氧气中发出明亮的蓝紫色火焰，放出热量，生成有刺激性气味的气体。",
        "key": [
          "蓝紫色火焰",
          "刺激性气味",
          "瓶底留少量水吸收SO2"
        ],
        "pic": {
          "v": "burn",
          "flame": "#a78bfa",
          "glow": "#c4b5fd",
          "smoke": "#ede9fe"
        },
        "tip": "集气瓶底预先放少量水或 NaOH 溶液，吸收 SO₂ 防止污染。"
      },
      {
        "id": "c03",
        "group": "燃烧与氧化",
        "type": "化合反应",
        "name": "红磷燃烧（测氧气含量）",
        "formula": "4P+5O2=2P2O5",
        "cond": "点燃",
        "phenom": "剧烈燃烧，产生大量白烟，放出热量；冷却后水面上升约 1/5。",
        "key": [
          "大量白烟",
          "水面上升约1/5",
          "烟是固体小颗粒"
        ],
        "pic": {
          "v": "burn",
          "flame": "#fbbf24",
          "smoke": "#ffffff"
        },
        "tip": "P₂O₅ 是固体，所以叫“白烟”；气体才叫“雾”。"
      },
      {
        "id": "c04",
        "group": "燃烧与氧化",
        "type": "化合反应",
        "name": "铁丝在氧气中燃烧",
        "formula": "3Fe+2O2=Fe3O4",
        "cond": "点燃",
        "phenom": "剧烈燃烧，火星四射，放出大量热，生成黑色固体。",
        "key": [
          "火星四射",
          "黑色固体Fe3O4",
          "瓶底放水或细沙"
        ],
        "pic": {
          "v": "wire",
          "spark": true,
          "sol": "#1f2937"
        },
        "tip": "瓶底要放少量水或铺一层细沙，防止溅落的高温熔融物炸裂瓶底。"
      },
      {
        "id": "c05",
        "group": "燃烧与氧化",
        "type": "化合反应",
        "name": "镁条燃烧",
        "formula": "2Mg+O2=2MgO",
        "cond": "点燃",
        "phenom": "剧烈燃烧，发出耀眼的白光，放出大量热，生成白色固体。",
        "key": [
          "耀眼白光",
          "白色固体MgO",
          "用于照明弹"
        ],
        "pic": {
          "v": "wire",
          "glow": "#ffffff",
          "sol": "#f8fafc"
        },
        "tip": "镁燃烧不能用 CO₂ 灭火：2Mg+CO2=点燃=2MgO+C。"
      },
      {
        "id": "c06",
        "group": "燃烧与氧化",
        "type": "化合反应",
        "name": "氢气燃烧",
        "formula": "2H2+O2=2H2O",
        "cond": "点燃",
        "phenom": "纯净的氢气在空气中安静燃烧，产生淡蓝色火焰，罩在火焰上方的烧杯内壁出现水雾。",
        "key": [
          "淡蓝色火焰",
          "烧杯壁有水雾",
          "点燃前必须验纯"
        ],
        "pic": {
          "v": "burn",
          "flame": "#7dd3fc",
          "steam": true
        },
        "tip": "不纯的氢气点燃会爆鸣，点燃前一定要验纯。"
      },
      {
        "id": "c07",
        "group": "燃烧与氧化",
        "type": "化合反应",
        "name": "一氧化碳燃烧",
        "formula": "2CO+O2=2CO2",
        "cond": "点燃",
        "phenom": "产生蓝色火焰，放出热量，生成能使澄清石灰水变浑浊的气体。",
        "key": [
          "蓝色火焰",
          "生成CO2",
          "CO有毒"
        ],
        "pic": {
          "v": "burn",
          "flame": "#60a5fa"
        },
        "tip": "CO 是煤气中毒的元凶，无色无味，难溶于水。"
      },
      {
        "id": "c08",
        "group": "燃烧与氧化",
        "type": "氧化反应",
        "name": "甲烷（天然气）燃烧",
        "formula": "CH4+2O2=CO2+2H2O",
        "cond": "点燃",
        "phenom": "产生明亮的蓝色火焰，放出热量，罩在上方的烧杯内壁出现水雾，倒入石灰水变浑浊。",
        "key": [
          "蓝色火焰",
          "产物是CO2和H2O",
          "点燃前验纯"
        ],
        "pic": {
          "v": "burn",
          "flame": "#60a5fa",
          "glow": "#dbeafe",
          "steam": true
        },
        "tip": "用干冷烧杯检验水、用澄清石灰水检验 CO₂，可证明甲烷含 C、H 元素。"
      },
      {
        "id": "c09",
        "group": "燃烧与氧化",
        "type": "氧化反应",
        "name": "酒精（乙醇）燃烧",
        "formula": "C2H5OH+3O2=2CO2+3H2O",
        "cond": "点燃",
        "phenom": "产生淡蓝色火焰，放出热量，烧杯内壁出现水雾，生成能使澄清石灰水变浑浊的气体。",
        "key": [
          "淡蓝色火焰",
          "产物是CO2和H2O",
          "可再生能源"
        ],
        "pic": {
          "v": "burn",
          "flame": "#fbbf24",
          "steam": true
        },
        "tip": "乙醇俗称酒精，可由高粱、玉米发酵制得，属于可再生能源。"
      },
      {
        "id": "c10",
        "group": "分解反应",
        "type": "分解反应",
        "name": "加热高锰酸钾制氧气",
        "formula": "2KMnO4=K2MnO4+MnO2+O2",
        "cond": "加热",
        "phenom": "暗紫色固体逐渐变化，导管口有气泡冒出，带火星的木条复燃。",
        "key": [
          "试管口塞一团棉花",
          "试管口略向下倾斜",
          "排水法收集"
        ],
        "pic": {
          "v": "tubeheat",
          "sol": "#581c87"
        },
        "tip": "试管口要塞棉花，防止 KMnO₄ 粉末进入导管。",
        "link": "kmno4"
      },
      {
        "id": "c11",
        "group": "分解反应",
        "type": "分解反应",
        "name": "过氧化氢分解制氧气",
        "formula": "2H2O2=2H2O+O2",
        "cond": "MnO2催化",
        "phenom": "加入二氧化锰后迅速产生大量气泡，带火星的木条复燃。",
        "key": [
          "MnO2是催化剂",
          "固液常温型",
          "催化作用不改产量"
        ],
        "pic": {
          "v": "flask",
          "liq": "#e0f2fe",
          "bub": true,
          "sol": "#1f2937"
        },
        "tip": "MnO₂ 是催化剂，改变反应速率，本身质量和化学性质不变。",
        "link": "h2o2"
      },
      {
        "id": "c12",
        "group": "分解反应",
        "type": "分解反应",
        "name": "加热氯酸钾制氧气",
        "formula": "2KClO3=2KCl+3O2",
        "cond": "MnO2催化、加热",
        "phenom": "固体混合物受热后导管口有气泡冒出，带火星的木条复燃。",
        "key": [
          "MnO2是催化剂",
          "不加MnO2需更高温度",
          "反应后固体质量减少"
        ],
        "pic": {
          "v": "tubeheat",
          "sol": "#e5e7eb"
        },
        "tip": "单独加热 KClO₃ 也能分解，但需要较高温度、速率慢。"
      },
      {
        "id": "c13",
        "group": "分解反应",
        "type": "分解反应",
        "name": "电解水",
        "formula": "2H2O=2H2+O2",
        "cond": "通直流电",
        "phenom": "两极均产生气泡，正极与负极气体体积比约为 1:2；正极气体使带火星木条复燃，负极气体能燃烧。",
        "key": [
          "正氧负氢",
          "体积比1:2",
          "加稀硫酸增强导电性"
        ],
        "pic": {
          "v": "cell"
        },
        "tip": "记忆口诀：正氧负氢、氢二氧一（体积比 H₂:O₂ = 2:1）。",
        "link": "water"
      },
      {
        "id": "c14",
        "group": "分解反应",
        "type": "分解反应",
        "name": "高温煅烧石灰石",
        "formula": "CaCO3=CaO+CO2",
        "cond": "高温",
        "phenom": "块状固体变成白色粉末（生石灰），生成能使澄清石灰水变浑浊的气体。",
        "key": [
          "工业制CO2和CaO",
          "高温不是加热",
          "分解反应"
        ],
        "pic": {
          "v": "tubeheat",
          "sol": "#f5f5f4",
          "lime": true
        },
        "tip": "条件是“高温”不是“加热”；这是工业上制取生石灰和 CO₂ 的方法。"
      },
      {
        "id": "c15",
        "group": "置换与还原",
        "type": "置换反应",
        "name": "锌与稀硫酸反应（制氢气）",
        "formula": "Zn+H2SO4=ZnSO4+H2",
        "cond": "",
        "phenom": "锌粒表面产生大量气泡，锌粒逐渐减少，溶液仍为无色。",
        "key": [
          "无色溶液ZnSO4",
          "固液常温型",
          "点燃前验纯"
        ],
        "pic": {
          "v": "tube",
          "liq": "#e0f2fe",
          "sol": "#94a3b8",
          "bub": true
        },
        "tip": "实验室常用锌粒和稀硫酸制 H₂，反应速率适中便于收集。",
        "link": "h2"
      },
      {
        "id": "c16",
        "group": "置换与还原",
        "type": "置换反应",
        "name": "铁与稀硫酸反应",
        "formula": "Fe+H2SO4=FeSO4+H2",
        "cond": "",
        "phenom": "铁丝表面产生气泡，溶液由无色逐渐变为浅绿色。",
        "key": [
          "浅绿色FeSO4",
          "亚铁是+2价",
          "速率比锌慢"
        ],
        "pic": {
          "v": "tube",
          "liq": "#bbf7d0",
          "sol": "#78716c",
          "bub": true
        },
        "tip": "铁发生置换反应时生成 +2 价的亚铁（Fe²⁺），溶液呈浅绿色。",
        "link": "metalacid"
      },
      {
        "id": "c17",
        "group": "置换与还原",
        "type": "置换反应",
        "name": "镁与稀盐酸反应",
        "formula": "Mg+2HCl=MgCl2+H2",
        "cond": "",
        "phenom": "镁带表面产生大量气泡，反应非常剧烈，镁带迅速消失，放出大量热。",
        "key": [
          "反应最剧烈",
          "金属活动性最强",
          "放出大量热"
        ],
        "pic": {
          "v": "tube",
          "liq": "#e0f2fe",
          "sol": "#e5e7eb",
          "bub": true
        },
        "tip": "金属活动性 Mg > Zn > Fe，与酸反应越靠前越剧烈。",
        "link": "metalacid"
      },
      {
        "id": "c18",
        "group": "置换与还原",
        "type": "置换反应",
        "name": "铁与硫酸铜溶液反应（湿法炼铜）",
        "formula": "Fe+CuSO4=FeSO4+Cu",
        "cond": "",
        "phenom": "铁丝表面覆盖一层红色物质，蓝色溶液逐渐变为浅绿色。",
        "key": [
          "红色固体是Cu",
          "蓝色变浅绿",
          "湿法炼铜原理"
        ],
        "pic": {
          "v": "tube",
          "liq": "#38bdf8",
          "liq2": "#a7f3d0",
          "sol": "#b45309",
          "prec": "#dc2626"
        },
        "tip": "曾青得铁则化为铜，这是古代湿法炼铜的原理。",
        "link": "fecuso4"
      },
      {
        "id": "c19",
        "group": "置换与还原",
        "type": "置换反应",
        "name": "铜与硝酸银溶液反应",
        "formula": "Cu+2AgNO3=Cu(NO3)2+2Ag",
        "cond": "",
        "phenom": "铜丝表面覆盖一层银白色物质，溶液由无色逐渐变为蓝色。",
        "key": [
          "银白色物质是Ag",
          "无色变蓝色",
          "Cu比Ag活泼"
        ],
        "pic": {
          "v": "tube",
          "liq": "#67e8f9",
          "sol": "#b45309",
          "prec": "#e5e7eb"
        },
        "tip": "生成 Cu²⁺ 使溶液变蓝，说明活动性 Cu > Ag。"
      },
      {
        "id": "c20",
        "group": "置换与还原",
        "type": "置换反应",
        "name": "木炭还原氧化铜",
        "formula": "C+2CuO=2Cu+CO2",
        "cond": "高温",
        "phenom": "黑色粉末逐渐变成红色，生成的气体使澄清石灰水变浑浊。",
        "key": [
          "黑色变红色",
          "石灰水变浑浊",
          "试管口略向下倾斜"
        ],
        "pic": {
          "v": "tubeheat",
          "sol": "#1f2937",
          "lime": true
        },
        "tip": "C 具有还原性，夺取 CuO 中的氧；反应后要等冷却再倒出固体。"
      },
      {
        "id": "c21",
        "group": "置换与还原",
        "type": "置换反应",
        "name": "氢气还原氧化铜",
        "formula": "H2+CuO=Cu+H2O",
        "cond": "加热",
        "phenom": "黑色粉末逐渐变成红色，试管口有水珠出现。",
        "key": [
          "黑色变红色",
          "试管口有水珠",
          "先通氢气后加热"
        ],
        "pic": {
          "v": "tubeheat",
          "sol": "#1f2937",
          "drop": true
        },
        "tip": "操作口诀：氢气“早出晚归”，酒精灯“迟到早退”，防止爆炸和被氧化。"
      },
      {
        "id": "c22",
        "group": "置换与还原",
        "type": "还原反应",
        "name": "一氧化碳还原氧化铁（炼铁）",
        "formula": "3CO+Fe2O3=2Fe+3CO2",
        "cond": "高温",
        "phenom": "红棕色粉末逐渐变成黑色，生成的气体使澄清石灰水变浑浊，尾气燃烧呈蓝色火焰。",
        "key": [
          "红棕变黑色",
          "石灰水变浑浊",
          "尾气要处理"
        ],
        "pic": {
          "v": "tubeheat",
          "sol": "#b91c1c",
          "lime": true
        },
        "tip": "工业炼铁原理；尾气中的 CO 有毒，必须点燃或收集处理。"
      },
      {
        "id": "c23",
        "group": "酸碱盐",
        "type": "不属于基本类型",
        "name": "二氧化碳与澄清石灰水反应",
        "formula": "CO2+Ca(OH)2=CaCO3+H2O",
        "cond": "",
        "phenom": "澄清石灰水变浑浊（生成白色沉淀）；通入过量 CO₂ 后浑浊又变澄清。",
        "key": [
          "变浑浊",
          "检验CO2的方法",
          "过量CO2变澄清"
        ],
        "pic": {
          "v": "tube",
          "liq": "#e5e7eb",
          "bub": true,
          "prec": "#ffffff"
        },
        "tip": "过量 CO₂ 会继续反应：CaCO3+H2O+CO2=Ca(HCO3)2，沉淀溶解。",
        "link": "co2"
      },
      {
        "id": "c24",
        "group": "酸碱盐",
        "type": "不属于基本类型",
        "name": "二氧化碳与氢氧化钠反应",
        "formula": "CO2+2NaOH=Na2CO3+H2O",
        "cond": "",
        "phenom": "无明显现象；需借助塑料瓶变瘪、瓶内气压减小等间接现象证明反应发生。",
        "key": [
          "无明显现象",
          "塑料瓶变瘪",
          "做对照实验"
        ],
        "pic": {
          "v": "flask",
          "liq": "#e0f2fe"
        },
        "tip": "NaOH 用于吸收 CO₂，石灰水用于检验 CO₂，用途不同。",
        "link": "co2naoh"
      },
      {
        "id": "c25",
        "group": "酸碱盐",
        "type": "化合反应",
        "name": "生石灰与水反应",
        "formula": "CaO+H2O=Ca(OH)2",
        "cond": "",
        "phenom": "块状固体变成粉末，放出大量热，水沸腾并冒出大量白汽。",
        "key": [
          "放出大量热",
          "生成熟石灰",
          "作干燥剂"
        ],
        "pic": {
          "v": "beaker",
          "liq": "#f8fafc",
          "sol": "#e7e5e4",
          "steam": true
        },
        "tip": "CaO 常用作食品干燥剂；生成的 Ca(OH)₂ 俗称熟石灰。",
        "link": "cao"
      },
      {
        "id": "c26",
        "group": "酸碱盐",
        "type": "中和反应",
        "name": "氢氧化钠与盐酸中和",
        "formula": "NaOH+HCl=NaCl+H2O",
        "cond": "",
        "phenom": "滴有酚酞的 NaOH 溶液呈红色，逐滴加入盐酸至红色恰好褪去，反应放热。",
        "key": [
          "红色恰好褪去",
          "放热",
          "H+与OH-结合成水"
        ],
        "pic": {
          "v": "tube",
          "liq": "#fecdd3",
          "liq2": "#f8fafc"
        },
        "tip": "中和反应实质：H⁺ + OH⁻ = H₂O；常用酚酞判断恰好反应。",
        "link": "neutral"
      },
      {
        "id": "c27",
        "group": "酸碱盐",
        "type": "复分解反应",
        "name": "氢氧化钙与碳酸钠反应",
        "formula": "Ca(OH)2+Na2CO3=CaCO3+2NaOH",
        "cond": "",
        "phenom": "溶液变浑浊，产生白色沉淀。",
        "key": [
          "白色沉淀CaCO3",
          "制取少量NaOH",
          "复分解反应"
        ],
        "pic": {
          "v": "tube",
          "liq": "#f8fafc",
          "prec": "#ffffff"
        },
        "tip": "这是工业上制取烧碱（NaOH）的原理之一。"
      },
      {
        "id": "c28",
        "group": "酸碱盐",
        "type": "复分解反应",
        "name": "碳酸钙与稀盐酸反应（制CO2）",
        "formula": "CaCO3+2HCl=CaCl2+H2O+CO2",
        "cond": "",
        "phenom": "固体表面产生大量气泡，固体逐渐溶解，生成的气体使澄清石灰水变浑浊。",
        "key": [
          "大量气泡",
          "石灰水变浑浊",
          "向上排空气法收集"
        ],
        "pic": {
          "v": "flask",
          "liq": "#e0f2fe",
          "sol": "#f5f5f4",
          "bub": true
        },
        "tip": "不能用硫酸代替盐酸（生成微溶 CaSO₄ 覆盖大理石使反应停止）。",
        "link": "co2"
      },
      {
        "id": "c29",
        "group": "酸碱盐",
        "type": "复分解反应",
        "name": "碳酸钠与稀盐酸反应",
        "formula": "Na2CO3+2HCl=2NaCl+H2O+CO2",
        "cond": "",
        "phenom": "剧烈反应，产生大量气泡，固体（或溶液）迅速产生气体。",
        "key": [
          "剧烈产生气泡",
          "泡沫灭火器原理",
          "碳酸盐遇酸必产气"
        ],
        "pic": {
          "v": "flask",
          "liq": "#e0f2fe",
          "bub": true
        },
        "tip": "检验碳酸盐（含 CO₃²⁻）：加稀盐酸，把气体通入澄清石灰水。"
      },
      {
        "id": "c30",
        "group": "酸碱盐",
        "type": "复分解反应",
        "name": "硫酸铜与氢氧化钠反应",
        "formula": "CuSO4+2NaOH=Cu(OH)2+Na2SO4",
        "cond": "",
        "phenom": "产生蓝色絮状沉淀，蓝色溶液颜色变浅。",
        "key": [
          "蓝色沉淀Cu(OH)2",
          "絮状",
          "碱与盐反应"
        ],
        "pic": {
          "v": "tube",
          "liq": "#38bdf8",
          "prec": "#3b82f6"
        },
        "tip": "Cu(OH)₂ 是蓝色沉淀，加热会分解成黑色 CuO 和水。",
        "link": "precip"
      },
      {
        "id": "c31",
        "group": "酸碱盐",
        "type": "复分解反应",
        "name": "氯化铁与氢氧化钠反应",
        "formula": "FeCl3+3NaOH=Fe(OH)3+3NaCl",
        "cond": "",
        "phenom": "产生红褐色絮状沉淀，黄色溶液颜色变浅。",
        "key": [
          "红褐色沉淀",
          "Fe(OH)3",
          "铁盐溶液呈黄色"
        ],
        "pic": {
          "v": "tube",
          "liq": "#fbbf24",
          "prec": "#b45309"
        },
        "tip": "Fe³⁺ 溶液呈黄色，Fe²⁺ 溶液呈浅绿色，沉淀颜色也不同。",
        "link": "precip"
      },
      {
        "id": "c32",
        "group": "酸碱盐",
        "type": "复分解反应",
        "name": "氯化钠与硝酸银反应（检验Cl-）",
        "formula": "NaCl+AgNO3=AgCl+NaNO3",
        "cond": "",
        "phenom": "产生白色沉淀，加稀硝酸后沉淀不溶解。",
        "key": [
          "白色沉淀AgCl",
          "不溶于稀硝酸",
          "检验Cl-"
        ],
        "pic": {
          "v": "tube",
          "liq": "#f8fafc",
          "prec": "#ffffff"
        },
        "tip": "先加 AgNO₃ 再加稀硝酸，排除 CO₃²⁻ 的干扰。",
        "link": "ions"
      },
      {
        "id": "c33",
        "group": "酸碱盐",
        "type": "复分解反应",
        "name": "硫酸钠与氯化钡反应（检验SO4^2-）",
        "formula": "Na2SO4+BaCl2=BaSO4+2NaCl",
        "cond": "",
        "phenom": "产生白色沉淀，加稀硝酸后沉淀不溶解。",
        "key": [
          "白色沉淀BaSO4",
          "不溶于稀硝酸",
          "检验SO4^2-"
        ],
        "pic": {
          "v": "tube",
          "liq": "#f8fafc",
          "prec": "#ffffff"
        },
        "tip": "检验 SO₄²⁻：加 BaCl₂ 溶液和稀硝酸，白色沉淀不溶解即可确认。",
        "link": "ions"
      },
      {
        "id": "c34",
        "group": "酸碱盐",
        "type": "复分解反应",
        "name": "氧化铁与稀盐酸反应（除铁锈）",
        "formula": "Fe2O3+6HCl=2FeCl3+3H2O",
        "cond": "",
        "phenom": "红棕色固体逐渐溶解，溶液由无色变成黄色。",
        "key": [
          "黄色溶液FeCl3",
          "铁锈溶解",
          "酸除锈"
        ],
        "pic": {
          "v": "tube",
          "liq": "#fbbf24",
          "sol": "#b91c1c"
        },
        "tip": "除锈后若继续加酸，铁会与酸反应产生气泡（Fe+2HCl=FeCl2+H2）。"
      }
    ]
  },
  "exp_kmno4": {
    "id": "kmno4",
    "title": "高锰酸钾制取氧气",
    "subtitle": "初中化学虚拟实验 · 完整操作流程训练",
    "badges": [
      "拖拽 + 手势操作",
      "满分 100 分"
    ],
    "viewBox": "0 0 600 360",
    "equipments": [
      {
        "id": "stand",
        "name": "铁架台",
        "need": true
      },
      {
        "id": "lamp",
        "name": "酒精灯",
        "need": true
      },
      {
        "id": "tube",
        "name": "试管",
        "need": true
      },
      {
        "id": "stopper",
        "name": "橡皮塞",
        "need": true
      },
      {
        "id": "pipe",
        "name": "导管",
        "need": true
      },
      {
        "id": "basin",
        "name": "水槽",
        "need": true
      },
      {
        "id": "bottle",
        "name": "集气瓶",
        "need": true
      },
      {
        "id": "glass",
        "name": "玻璃片",
        "need": true
      },
      {
        "id": "cotton",
        "name": "棉花",
        "need": true
      },
      {
        "id": "spoon",
        "name": "药匙",
        "need": true
      },
      {
        "id": "kmno4",
        "name": "高锰酸钾",
        "need": true
      },
      {
        "id": "wood",
        "name": "木条",
        "need": true
      },
      {
        "id": "funnel",
        "name": "漏斗",
        "need": false
      },
      {
        "id": "beaker",
        "name": "烧杯",
        "need": false
      }
    ],
    "dims": [
      {
        "key": "skill",
        "name": "操作规范"
      },
      {
        "key": "safety",
        "name": "安全意识"
      }
    ],
    "scoreItems": [
      {
        "key": "equip",
        "name": "器材选择",
        "max": 10,
        "dim": "skill"
      },
      {
        "key": "assemble",
        "name": "组装装置",
        "max": 10,
        "dim": "skill"
      },
      {
        "key": "airtight",
        "name": "检查气密性",
        "max": 12,
        "dim": "safety"
      },
      {
        "key": "load",
        "name": "装药品与塞棉花",
        "max": 10,
        "dim": "skill"
      },
      {
        "key": "fix",
        "name": "调整试管倾角",
        "max": 14,
        "dim": "safety"
      },
      {
        "key": "heat",
        "name": "预热与加热",
        "max": 14,
        "dim": "safety"
      },
      {
        "key": "collect",
        "name": "排水法收集",
        "max": 10,
        "dim": "skill"
      },
      {
        "key": "takeout",
        "name": "取出集气瓶",
        "max": 5,
        "dim": "skill"
      },
      {
        "key": "finish",
        "name": "结束操作顺序",
        "max": 12,
        "dim": "safety"
      },
      {
        "key": "test",
        "name": "检验氧气",
        "max": 3,
        "dim": "skill"
      }
    ],
    "initialStage": {
      "stand": true,
      "tube": false,
      "tubeTilt": 0,
      "stopper": false,
      "pipe": false,
      "pipeOut": false,
      "kmno4": false,
      "cotton": false,
      "lamp": false,
      "flame": false,
      "preheat": 0,
      "heating": false,
      "basin": false,
      "bottlePos": "shelf",
      "bottleGas": false,
      "glass": false,
      "wood": false,
      "woodFire": false,
      "bubbles": false,
      "suckStage": 0,
      "crackStage": 0
    },
    "dropZones": {
      "tube": {
        "x": 180,
        "y": 122,
        "w": 180,
        "h": 60
      },
      "kmno4": {
        "x": 180,
        "y": 128,
        "w": 110,
        "h": 50
      },
      "cotton": {
        "x": 296,
        "y": 126,
        "w": 56,
        "h": 54
      },
      "lamp": {
        "x": 196,
        "y": 246,
        "w": 88,
        "h": 70
      },
      "basin": {
        "x": 384,
        "y": 244,
        "w": 200,
        "h": 104
      },
      "bottle": {
        "x": 448,
        "y": 188,
        "w": 88,
        "h": 120
      },
      "glass": {
        "x": 440,
        "y": 176,
        "w": 100,
        "h": 36
      },
      "wood": {
        "x": 412,
        "y": 140,
        "w": 80,
        "h": 96
      }
    },
    "scene": [
      {
        "tag": "rect",
        "x": 52,
        "y": 322,
        "width": 200,
        "height": 15,
        "rx": 5,
        "fill": "url(#gMetal)"
      },
      {
        "tag": "rect",
        "x": 52,
        "y": 322,
        "width": 200,
        "height": 4,
        "rx": 2,
        "fill": "#e8eef2",
        "opacity": 0.75
      },
      {
        "tag": "rect",
        "x": 146,
        "y": 70,
        "width": 13,
        "height": 252,
        "fill": "url(#gMetalV)"
      },
      {
        "tag": "rect",
        "x": 149,
        "y": 70,
        "width": 3,
        "height": 252,
        "fill": "#e8eef2",
        "opacity": 0.6
      },
      {
        "tag": "rect",
        "x": 146,
        "y": 128,
        "width": 112,
        "height": 11,
        "rx": 4,
        "fill": "url(#gMetalV)"
      },
      {
        "tag": "path",
        "d": "M258 130 L282 130 L282 142 L258 142 Z",
        "fill": "url(#gMetal)"
      },
      {
        "tag": "path",
        "d": "M282 133 L292 136 L292 150 L282 152 Z",
        "fill": "#8896a0"
      },
      {
        "tag": "g",
        "when": "stage.basin",
        "children": [
          {
            "tag": "rect",
            "x": 386,
            "y": 248,
            "width": 196,
            "height": 96,
            "rx": 11,
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.5
          },
          {
            "tag": "rect",
            "x": 392,
            "y": "@ stage.suckStage>=2 ? 296 : 272",
            "width": 184,
            "height": "@ stage.suckStage>=2 ? 42 : 66",
            "rx": 6,
            "fill": "url(#gWater)"
          },
          {
            "tag": "rect",
            "x": 392,
            "y": 250,
            "width": 184,
            "height": 4,
            "rx": 2,
            "fill": "#ffffff",
            "opacity": 0.65
          },
          {
            "tag": "path",
            "when": "stage.suckStage<2",
            "d": "M396 274 Q420 271 444 274 T492 274 T540 274 T576 274",
            "stroke": "#ffffff",
            "stroke-width": 1.2,
            "fill": "none",
            "opacity": 0.5
          },
          {
            "tag": "path",
            "when": "stage.suckStage>=2",
            "d": "M396 298 Q420 295 444 298 T492 298 T540 298 T576 298",
            "stroke": "#ffffff",
            "stroke-width": 1.2,
            "fill": "none",
            "opacity": 0.5
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.pipe && !stage.pipeOut",
        "children": [
          {
            "tag": "path",
            "d": "M356 150 Q420 150 428 200 L428 300 Q428 310 452 310",
            "stroke": "#90a4ae",
            "stroke-width": 7,
            "fill": "none",
            "stroke-linecap": "round"
          },
          {
            "tag": "path",
            "d": "M356 150 Q420 150 428 200 L428 300 Q428 310 452 310",
            "stroke": "#e0e8ec",
            "stroke-width": 2,
            "fill": "none",
            "stroke-linecap": "round",
            "opacity": 0.7
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.pipe && stage.pipeOut",
        "children": [
          {
            "tag": "path",
            "d": "M356 150 Q420 150 428 200 L428 240 Q428 250 452 250",
            "stroke": "#90a4ae",
            "stroke-width": 7,
            "fill": "none",
            "stroke-linecap": "round"
          },
          {
            "tag": "path",
            "d": "M356 150 Q420 150 428 200 L428 240 Q428 250 452 250",
            "stroke": "#e0e8ec",
            "stroke-width": 2,
            "fill": "none",
            "stroke-linecap": "round",
            "opacity": 0.7
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.bubbles",
        "children": [
          {
            "tag": "circle",
            "class": "bub",
            "cx": 450,
            "cy": 292,
            "r": 3.5,
            "fill": "#90caf9",
            "opacity": 0.9,
            "style": "animation-delay:0s"
          },
          {
            "tag": "circle",
            "class": "bub",
            "cx": 462,
            "cy": 288,
            "r": 4.5,
            "fill": "#90caf9",
            "opacity": 0.9,
            "style": "animation-delay:0.32s"
          },
          {
            "tag": "circle",
            "class": "bub",
            "cx": 472,
            "cy": 294,
            "r": 5.5,
            "fill": "#90caf9",
            "opacity": 0.9,
            "style": "animation-delay:0.64s"
          },
          {
            "tag": "circle",
            "class": "bub",
            "cx": 456,
            "cy": 282,
            "r": 3.5,
            "fill": "#90caf9",
            "opacity": 0.9,
            "style": "animation-delay:0.96s"
          },
          {
            "tag": "circle",
            "class": "bub",
            "cx": 466,
            "cy": 278,
            "r": 4.5,
            "fill": "#90caf9",
            "opacity": 0.9,
            "style": "animation-delay:1.28s"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.tube",
        "rotate": {
          "deg": "stage.tubeTilt",
          "cx": 255,
          "cy": 150
        },
        "opacity": "@ stage.crackStage>=3 ? 0.28 : 1",
        "children": [
          {
            "tag": "rect",
            "x": 168,
            "y": 130,
            "width": 174,
            "height": 40,
            "rx": 20,
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2
          },
          {
            "tag": "rect",
            "x": 176,
            "y": 134,
            "width": 156,
            "height": 4,
            "rx": 2,
            "fill": "#ffffff",
            "opacity": 0.9
          },
          {
            "tag": "rect",
            "x": 176,
            "y": 162,
            "width": 156,
            "height": 3,
            "rx": 1.5,
            "fill": "#ffffff",
            "opacity": 0.45
          },
          {
            "tag": "ellipse",
            "cx": 342,
            "cy": 150,
            "rx": 4,
            "ry": 19,
            "fill": "none",
            "stroke": "#7ba7c7",
            "stroke-width": 2.5
          },
          {
            "tag": "rect",
            "when": "stage.kmno4",
            "x": 176,
            "y": 142,
            "width": 52,
            "height": 20,
            "rx": 9,
            "fill": "url(#pKMnO4)"
          },
          {
            "tag": "rect",
            "when": "stage.kmno4 && stage.heating",
            "x": 176,
            "y": 142,
            "width": 52,
            "height": 20,
            "rx": 9,
            "fill": "#2a0a3a",
            "opacity": 0.55
          },
          {
            "tag": "rect",
            "when": "stage.suckStage>=3",
            "x": 180,
            "y": 150,
            "width": 66,
            "height": 18,
            "rx": 9,
            "fill": "#64b5f6",
            "opacity": 0.75
          },
          {
            "tag": "circle",
            "when": "stage.cotton",
            "cx": 306,
            "cy": 150,
            "r": 13,
            "fill": "url(#pCotton)",
            "stroke": "#e0e0e0"
          },
          {
            "tag": "circle",
            "when": "stage.cotton",
            "cx": 316,
            "cy": 145,
            "r": 8,
            "fill": "url(#pCotton)",
            "stroke": "#e0e0e0"
          },
          {
            "tag": "circle",
            "when": "stage.cotton",
            "cx": 314,
            "cy": 156,
            "r": 8,
            "fill": "url(#pCotton)",
            "stroke": "#e0e0e0"
          },
          {
            "tag": "path",
            "when": "stage.stopper",
            "d": "M334 137 L358 141 L358 159 L334 163 Z",
            "fill": "url(#gRubber)"
          },
          {
            "tag": "ellipse",
            "when": "stage.stopper",
            "cx": 358,
            "cy": 150,
            "rx": 3,
            "ry": 10,
            "fill": "#5d4037"
          },
          {
            "tag": "path",
            "when": "stage.crackStage>=1",
            "class": "crack",
            "d": "M200 132 L214 150 L202 170",
            "stroke": "#c62828",
            "stroke-width": 2.2,
            "fill": "none"
          },
          {
            "tag": "path",
            "when": "stage.crackStage>=2",
            "class": "crack2",
            "d": "M244 132 L256 156 L240 170",
            "stroke": "#c62828",
            "stroke-width": 2.2,
            "fill": "none"
          },
          {
            "tag": "path",
            "when": "stage.crackStage>=2",
            "class": "crack2",
            "d": "M280 132 L272 152 L286 170",
            "stroke": "#c62828",
            "stroke-width": 2,
            "fill": "none"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.crackStage>=3",
        "children": [
          {
            "tag": "path",
            "class": "shatter",
            "d": "M178 130 L212 130 L202 152 L184 150 Z",
            "fill": "#dbe9f4",
            "stroke": "#7ba7c7",
            "stroke-width": 1.4,
            "style": "--dx:-18px;--dy:34px;--rot:-55deg"
          },
          {
            "tag": "path",
            "class": "shatter",
            "d": "M214 130 L248 130 L252 152 L220 156 Z",
            "fill": "#e6f2fa",
            "stroke": "#7ba7c7",
            "stroke-width": 1.4,
            "style": "--dx:6px;--dy:40px;--rot:35deg"
          },
          {
            "tag": "path",
            "class": "shatter",
            "d": "M250 130 L286 130 L290 150 L258 154 Z",
            "fill": "#dbe9f4",
            "stroke": "#7ba7c7",
            "stroke-width": 1.4,
            "style": "--dx:22px;--dy:36px;--rot:60deg"
          },
          {
            "tag": "path",
            "class": "shatter",
            "d": "M290 132 L332 138 L330 162 L296 160 Z",
            "fill": "#e6f2fa",
            "stroke": "#7ba7c7",
            "stroke-width": 1.4,
            "style": "--dx:30px;--dy:44px;--rot:75deg"
          },
          {
            "tag": "text",
            "x": 255,
            "y": 118,
            "font-size": 15,
            "text-anchor": "middle",
            "fill": "#dc2626",
            "font-weight": 700,
            "text": "试管炸裂！"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.lamp",
        "children": [
          {
            "tag": "rect",
            "x": 208,
            "y": 282,
            "width": 60,
            "height": 28,
            "rx": 7,
            "fill": "url(#gLamp)",
            "stroke": "#5f7180",
            "stroke-width": 1
          },
          {
            "tag": "rect",
            "x": 212,
            "y": 285,
            "width": 52,
            "height": 4,
            "rx": 2,
            "fill": "#e8eef2",
            "opacity": 0.75
          },
          {
            "tag": "path",
            "d": "M218 282 L258 282 L252 254 L224 254 Z",
            "fill": "#b0bec5",
            "stroke": "#8494a0",
            "stroke-width": 1
          },
          {
            "tag": "rect",
            "x": 234,
            "y": 240,
            "width": 8,
            "height": 16,
            "rx": 2,
            "fill": "#cfd8dc"
          },
          {
            "tag": "g",
            "when": "stage.flame",
            "class": "flame",
            "children": [
              {
                "tag": "path",
                "d": "M238 206 C252 226 254 244 238 250 C222 244 224 226 238 206 Z",
                "fill": "url(#gFlameOut)"
              },
              {
                "tag": "path",
                "d": "M238 218 C246 230 246 240 238 244 C230 240 230 230 238 218 Z",
                "fill": "url(#gFlameCore)"
              }
            ]
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.bottlePos==='basin'",
        "children": [
          {
            "tag": "rect",
            "x": 462,
            "y": 196,
            "width": 56,
            "height": 102,
            "rx": 4,
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.5
          },
          {
            "tag": "rect",
            "when": "!stage.bottleGas",
            "x": 465,
            "y": 232,
            "width": 50,
            "height": 63,
            "fill": "url(#gWater)"
          },
          {
            "tag": "rect",
            "when": "stage.bottleGas",
            "x": 465,
            "y": 262,
            "width": 50,
            "height": 33,
            "fill": "url(#gWater)"
          },
          {
            "tag": "rect",
            "when": "stage.bottleGas",
            "x": 465,
            "y": 199,
            "width": 50,
            "height": 96,
            "fill": "#f0f8ff",
            "opacity": 0.35
          },
          {
            "tag": "rect",
            "x": 465,
            "y": 198,
            "width": 4,
            "height": 96,
            "rx": 2,
            "fill": "#ffffff",
            "opacity": 0.7
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.bottlePos==='out'",
        "children": [
          {
            "tag": "rect",
            "x": 462,
            "y": 190,
            "width": 56,
            "height": 102,
            "rx": 4,
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.5
          },
          {
            "tag": "rect",
            "x": 465,
            "y": 193,
            "width": 50,
            "height": 96,
            "fill": "#f0f8ff",
            "opacity": 0.45
          },
          {
            "tag": "rect",
            "x": 465,
            "y": 193,
            "width": 4,
            "height": 96,
            "rx": 2,
            "fill": "#ffffff",
            "opacity": 0.7
          }
        ]
      },
      {
        "tag": "rect",
        "when": "stage.glass",
        "x": 456,
        "y": 184,
        "width": 70,
        "height": 10,
        "rx": 3,
        "fill": "url(#gGlassH)",
        "stroke": "#4fc3f7",
        "stroke-width": 1.5
      },
      {
        "tag": "g",
        "when": "stage.wood",
        "children": [
          {
            "tag": "rect",
            "x": 424,
            "y": 150,
            "width": 9,
            "height": 96,
            "rx": 3,
            "fill": "url(#gWood)",
            "transform": "rotate(18 428 198)"
          },
          {
            "tag": "g",
            "when": "stage.woodFire",
            "class": "flame",
            "children": [
              {
                "tag": "ellipse",
                "cx": 452,
                "cy": 148,
                "rx": 8,
                "ry": 13,
                "fill": "url(#gFlameOut)"
              },
              {
                "tag": "ellipse",
                "cx": 452,
                "cy": 152,
                "rx": 4,
                "ry": 7,
                "fill": "#fff59d"
              }
            ]
          },
          {
            "tag": "circle",
            "when": "!stage.woodFire",
            "cx": 452,
            "cy": 150,
            "r": 4.5,
            "fill": "#ff8a65"
          },
          {
            "tag": "circle",
            "when": "!stage.woodFire",
            "cx": 452,
            "cy": 150,
            "r": 2,
            "fill": "#ffcc80"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.suckStage>=1",
        "children": [
          {
            "tag": "path",
            "class": "suck",
            "d": "M452 310 Q428 310 428 250 L428 200 Q420 170 380 158",
            "stroke": "#64b5f6",
            "stroke-width": 7,
            "fill": "none",
            "stroke-linecap": "round",
            "opacity": 0.85
          },
          {
            "tag": "text",
            "when": "stage.suckStage>=1",
            "x": 430,
            "y": 336,
            "font-size": 13,
            "text-anchor": "middle",
            "fill": "#dc2626",
            "font-weight": 700,
            "text": "① 水沿导管倒流 →"
          },
          {
            "tag": "text",
            "when": "stage.suckStage>=2",
            "x": 250,
            "y": 300,
            "font-size": 12,
            "text-anchor": "middle",
            "fill": "#dc2626",
            "font-weight": 700,
            "text": "② 槽内水面下降"
          },
          {
            "tag": "text",
            "when": "stage.suckStage>=3",
            "x": 255,
            "y": 205,
            "font-size": 12,
            "text-anchor": "middle",
            "fill": "#dc2626",
            "font-weight": 700,
            "text": "③ 冷水进入试管"
          }
        ]
      }
    ],
    "report": [
      {
        "title": "实验记录",
        "lines": [
          "实验名称：高锰酸钾制取氧气",
          "实验原理：2KMnO₄ —Δ→ K₂MnO₄ + MnO₂ + O₂↑",
          "收集方法：排水法",
          "检验方法：带火星木条复燃"
        ]
      },
      {
        "title": "现象记录",
        "lines": [
          "1. 加热后试管内产生气体",
          "2. 导管口有气泡冒出",
          "3. 集气瓶内水位下降",
          "4. 带火星木条复燃"
        ]
      },
      {
        "title": "实验结论",
        "lines": [
          "高锰酸钾受热分解生成氧气，氧气能支持燃烧。"
        ]
      }
    ],
    "errorTable": [
      {
        "op": "未检查气密性",
        "phen": "装置漏气",
        "result": "收集不到气体",
        "score": 12
      },
      {
        "op": "未塞棉花",
        "phen": "粉末进入导管",
        "result": "气体不纯",
        "score": 10
      },
      {
        "op": "试管口向上倾斜",
        "phen": "冷凝水倒流",
        "result": "试管炸裂",
        "score": 14
      },
      {
        "op": "未预热直接集中加热",
        "phen": "受热不均",
        "result": "试管炸裂",
        "score": 14
      },
      {
        "op": "先熄灯后移导管",
        "phen": "水倒吸",
        "result": "试管炸裂",
        "score": 12
      },
      {
        "op": "用普通木条检验",
        "phen": "木条不燃",
        "result": "检验失败",
        "score": 3
      }
    ],
    "steps": [
      {
        "id": "cover",
        "type": "cover",
        "title": "准备开始",
        "progress": 0,
        "headline": "高锰酸钾制取氧气",
        "subtitle": "初中化学虚拟实验 · 完整操作流程训练",
        "buttons": [
          {
            "t": "开始实验",
            "c": "primary",
            "goto": "goal"
          }
        ]
      },
      {
        "id": "goal",
        "type": "doc",
        "title": "实验目标",
        "progress": 5,
        "cols": [
          {
            "title": "实验目标",
            "lines": [
              "1. 掌握高锰酸钾制取氧气的装置与操作顺序",
              "2. 学会检查装置气密性",
              "3. 学会排水法收集气体",
              "4. 能正确检验氧气",
              "5. 能识别常见错误操作及其后果"
            ]
          },
          {
            "title": "操作方式",
            "lines": [
              "● 拖拽器材：从左侧器材架拖到实验台",
              "● 手势操作：按住滑动、拖动旋转",
              "● 右侧显示当前实验阶段",
              "● 遇到困难点击右下角“？”获取提示",
              "● 部分步骤支持语音指令（🎤 按钮）"
            ]
          },
          {
            "title": "安全提示",
            "lines": [
              "⚠ 试管口略向下倾斜，防止冷凝水倒流",
              "⚠ 试管口塞棉花，防止粉末进入导管",
              "⚠ 先移导管再熄灯，防止水倒吸",
              "⚠ 加热前先预热，防止试管炸裂"
            ]
          }
        ],
        "buttons": [
          {
            "t": "下一步",
            "c": "primary",
            "goto": "equip"
          },
          {
            "t": "返回封面",
            "c": "ghost",
            "goto": "cover"
          }
        ]
      },
      {
        "id": "equip",
        "type": "equip",
        "title": "选择实验器材",
        "progress": 10,
        "tip": "选出本实验需要的全部器材和药品",
        "buttons": [
          {
            "t": "确认器材",
            "c": "primary",
            "do": [
              {
                "do": "checkEquip",
                "key": "equip",
                "goto": "assemble"
              }
            ]
          }
        ]
      },
      {
        "id": "assemble",
        "type": "stage",
        "title": "组装实验装置",
        "progress": 18,
        "shelf": [
          "tube",
          "stopper",
          "pipe",
          "basin"
        ],
        "desc": "把需要的器材从左侧拖到实验台，组成完整的实验装置。",
        "help": "把左侧器材架上的器材拖到实验台中间。想一想：这个实验需要哪些器材？它们怎么连接？",
        "zones": [
          "tube"
        ],
        "drop": [
          {
            "equip": "tube",
            "zone": "tube",
            "do": [
              {
                "do": "set",
                "k": "tube",
                "v": true
              },
              {
                "do": "set",
                "k": "stopper",
                "v": true
              },
              {
                "do": "set",
                "k": "pipe",
                "v": true
              },
              {
                "do": "set",
                "k": "basin",
                "v": true
              },
              {
                "do": "score",
                "key": "assemble"
              },
              {
                "do": "tip",
                "text": "装置组装完成 ✓"
              },
              {
                "do": "goto",
                "id": "airtight",
                "delay": 800
              }
            ]
          },
          {
            "equip": "tube",
            "do": [
              {
                "do": "err",
                "text": "试管的位置不对。想一想：试管应该固定在什么装置上才能稳定加热？"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步先把试管固定好。想一想：试管应该固定在哪里才能稳定加热？"
              }
            ]
          }
        ]
      },
      {
        "id": "airtight",
        "type": "stage",
        "title": "检查装置气密性",
        "progress": 28,
        "shelf": [],
        "desc": "判断装置是否漏气。如果漏气，后面就收集不到气体。",
        "help": "想一想：怎样判断一个装置是否漏气？双手握住试管外壁，让里面的气体受热膨胀，再看导管口。按住试管外壁滑动试试。",
        "zones": [],
        "gesture": {
          "kind": "swipe",
          "metric": "displacement",
          "threshold": 40,
          "zone": {
            "x": 200,
            "y": 128,
            "w": 140,
            "h": 46,
            "rx": 20
          },
          "label": "按住试管外壁滑动",
          "visibleWhen": "stage.tube && stage.stopper && stage.pipe && stage.basin",
          "onReach": [
            {
              "do": "set",
              "k": "bubbles",
              "v": true
            },
            {
              "do": "score",
              "key": "airtight"
            },
            {
              "do": "tip",
              "text": "导管口有气泡冒出，装置气密性良好 ✓"
            },
            {
              "do": "set",
              "k": "bubbles",
              "v": false,
              "delay": 1200
            },
            {
              "do": "goto",
              "id": "load",
              "delay": 1400
            }
          ],
          "onFail": [
            {
              "do": "err",
              "text": "动作不到位。想一想：检查气密性时，要让试管内的气体受热膨胀，应该怎么做？"
            }
          ]
        }
      },
      {
        "id": "load",
        "type": "stage",
        "title": "装入药品",
        "progress": 38,
        "shelf": [
          "kmno4",
          "cotton"
        ],
        "desc": "把药品装入试管，并处理试管口。顺序无所谓，两样都要做到位。",
        "help": "高锰酸钾装在试管底部，棉花塞在试管口附近。把对应器材拖到试管上高亮的位置。",
        "zones": [
          "kmno4",
          "cotton"
        ],
        "drop": [
          {
            "equip": "kmno4",
            "zone": "kmno4",
            "do": [
              {
                "do": "set",
                "k": "kmno4",
                "v": true
              },
              {
                "do": "tip",
                "text": "高锰酸钾已装入试管底部 ✓"
              },
              {
                "do": "if",
                "cond": "stage.kmno4 && stage.cotton",
                "then": [
                  {
                    "do": "score",
                    "key": "load"
                  },
                  {
                    "do": "goto",
                    "id": "tilt",
                    "delay": 900
                  }
                ]
              }
            ]
          },
          {
            "equip": "cotton",
            "zone": "cotton",
            "do": [
              {
                "do": "set",
                "k": "cotton",
                "v": true
              },
              {
                "do": "tip",
                "text": "棉花已塞到试管口 ✓"
              },
              {
                "do": "if",
                "cond": "stage.kmno4 && stage.cotton",
                "then": [
                  {
                    "do": "score",
                    "key": "load"
                  },
                  {
                    "do": "goto",
                    "id": "tilt",
                    "delay": 900
                  }
                ]
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "放错位置了。高锰酸钾放在试管底部，棉花塞在试管口附近。"
              }
            ]
          }
        ]
      },
      {
        "id": "tilt",
        "type": "stage",
        "title": "调整试管倾角",
        "progress": 48,
        "shelf": [],
        "desc": "拖动试管尾部的蓝色圆柄，把试管调到合适的角度（10°~20°）。",
        "help": "拖动试管尾部的蓝色圆柄旋转试管。想一想：加热固体时，试管口为什么要略向下倾斜？",
        "zones": [],
        "gesture": {
          "kind": "rotate",
          "field": "tubeTilt",
          "pivot": [
            255,
            150
          ],
          "radius": 172,
          "range": [
            -40,
            40
          ],
          "visibleWhen": "stage.tube",
          "correct": [
            10,
            20
          ],
          "onCorrect": [
            {
              "do": "score",
              "key": "fix"
            },
            {
              "do": "tip",
              "text": "试管口略向下倾斜，角度正确 ✓"
            },
            {
              "do": "goto",
              "id": "heat",
              "delay": 900
            }
          ],
          "onWrong": [
            {
              "when": "v>20",
              "do": [
                {
                  "do": "err",
                  "text": "倾角过大，管口太朝下。冷凝水虽然不会倒流，但药品容易滑出。请调整到 10°~20°。"
                }
              ]
            },
            {
              "when": "v>=0",
              "do": [
                {
                  "do": "err",
                  "text": "试管几乎水平。想一想：加热高锰酸钾时会产生水蒸气，冷凝水会流到哪里？"
                }
              ]
            },
            {
              "do": [
                {
                  "do": "err",
                  "text": "管口朝上了！冷凝水会倒流回试管底部，试管受热不均…"
                },
                {
                  "do": "set",
                  "k": "crackStage",
                  "v": 1,
                  "delay": 600
                },
                {
                  "do": "set",
                  "k": "crackStage",
                  "v": 2,
                  "delay": 1200
                },
                {
                  "do": "set",
                  "k": "crackStage",
                  "v": 3,
                  "delay": 1800
                },
                {
                  "do": "tip",
                  "text": "试管炸裂！正确做法：试管口略向下倾斜",
                  "kind": "err",
                  "delay": 2500
                },
                {
                  "do": "goto",
                  "id": "report",
                  "delay": 4400
                }
              ]
            }
          ]
        }
      },
      {
        "id": "heat",
        "type": "stage",
        "title": "加热试管",
        "progress": 58,
        "shelf": [
          "lamp"
        ],
        "desc": "先放好酒精灯并点燃，再用外焰来回预热，最后集中在药品部位加热。",
        "help": "先把酒精灯拖到试管下方，然后在虚线区左右来回滑动预热，进度到 100% 再集中加热。",
        "zones": [
          "lamp"
        ],
        "drop": [
          {
            "equip": "lamp",
            "zone": "lamp",
            "do": [
              {
                "do": "set",
                "k": "lamp",
                "v": true
              },
              {
                "do": "set",
                "k": "flame",
                "v": true
              },
              {
                "do": "tip",
                "text": "酒精灯已就位并点燃 ✓"
              }
            ]
          },
          {
            "equip": "lamp",
            "do": [
              {
                "do": "err",
                "text": "酒精灯的位置不对。想一想：加热试管时，酒精灯应该放在试管的什么位置？"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步需要放置的是加热工具。"
              }
            ]
          }
        ],
        "gesture": {
          "kind": "swipe",
          "metric": "accumulate",
          "field": "preheat",
          "max": 100,
          "rate": 0.35,
          "threshold": 90,
          "zone": {
            "x": 190,
            "y": 240,
            "w": 100,
            "h": 70,
            "rx": 12
          },
          "bar": {
            "x": 180,
            "y": 316,
            "w": 120,
            "h": 7
          },
          "label": "左右滑动预热",
          "visibleWhen": "stage.lamp && stage.flame",
          "onReach": [
            {
              "do": "set",
              "k": "heating",
              "v": true
            },
            {
              "do": "score",
              "key": "heat"
            },
            {
              "do": "tip",
              "text": "预热完成，试管内产生气体 ✓"
            },
            {
              "do": "goto",
              "id": "collect",
              "delay": 1200
            }
          ],
          "onFail": [
            {
              "do": "err",
              "text": "预热不够。想一想：如果直接集中加热，试管受热不均会发生什么？"
            }
          ]
        }
      },
      {
        "id": "collect",
        "type": "stage",
        "title": "收集氧气",
        "progress": 68,
        "shelf": [
          "bottle"
        ],
        "desc": "用排水法收集。想一想：刚开始冒的气泡能不能收集？",
        "help": "排水法收集气体：集气瓶装满水倒扣在水槽中，气泡连续均匀冒出后再把导管伸入瓶口。把集气瓶拖到水槽里。",
        "zones": [
          "bottle"
        ],
        "drop": [
          {
            "equip": "bottle",
            "zone": "bottle",
            "do": [
              {
                "do": "set",
                "k": "bottlePos",
                "v": "basin"
              },
              {
                "do": "set",
                "k": "bubbles",
                "v": true
              },
              {
                "do": "tip",
                "text": "集气瓶已倒扣在水中，开始收集气体"
              },
              {
                "do": "set",
                "k": "bottleGas",
                "v": true,
                "delay": 2200
              },
              {
                "do": "set",
                "k": "bubbles",
                "v": false,
                "delay": 2200
              },
              {
                "do": "score",
                "key": "collect",
                "delay": 2200
              },
              {
                "do": "tip",
                "text": "集气瓶口有大气泡冒出，已收集满 ✓",
                "delay": 2300
              },
              {
                "do": "goto",
                "id": "takeout",
                "delay": 3200
              }
            ]
          },
          {
            "equip": "bottle",
            "do": [
              {
                "do": "err",
                "text": "集气瓶的位置不对。想一想：排水法收集气体时，集气瓶应该放在哪里？"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步需要用集气瓶收集气体。"
              }
            ]
          }
        ]
      },
      {
        "id": "takeout",
        "type": "stage",
        "title": "取出集气瓶",
        "progress": 78,
        "shelf": [
          "glass"
        ],
        "desc": "用玻璃片盖住瓶口，从水中取出后正放在桌面上。",
        "help": "用玻璃片盖住集气瓶口再从水中取出。想一想：氧气密度比空气大还是小？集气瓶该正放还是倒放？",
        "zones": [
          "glass"
        ],
        "drop": [
          {
            "equip": "glass",
            "zone": "glass",
            "do": [
              {
                "do": "set",
                "k": "glass",
                "v": true
              },
              {
                "do": "set",
                "k": "bottlePos",
                "v": "out"
              },
              {
                "do": "score",
                "key": "takeout"
              },
              {
                "do": "tip",
                "text": "玻璃片盖好，集气瓶正放 ✓"
              },
              {
                "do": "goto",
                "id": "finish",
                "delay": 900
              }
            ]
          },
          {
            "equip": "glass",
            "do": [
              {
                "do": "err",
                "text": "玻璃片的位置不对。想一想：集气瓶应该怎样从水槽中取出，需要什么遮盖？"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步需要用玻璃片遮盖集气瓶。"
              }
            ]
          }
        ]
      },
      {
        "id": "finish",
        "type": "stage",
        "title": "结束实验操作",
        "progress": 86,
        "shelf": [],
        "desc": "实验结束时的操作顺序很关键，选错了会发生危险。",
        "help": "实验结束时的操作顺序很关键。想一想：如果先熄灭酒精灯，试管内气压会怎样变化？水会往哪里流？",
        "zones": [],
        "buttons": [
          {
            "t": "移出导管",
            "c": "primary",
            "when": "!stage.pipeOut && stage.flame",
            "voice": [
              "移出导管",
              "移导管",
              "拔导管",
              "取出导管"
            ],
            "do": [
              {
                "do": "set",
                "k": "pipeOut",
                "v": true
              },
              {
                "do": "set",
                "k": "bubbles",
                "v": false
              },
              {
                "do": "tip",
                "text": "导管已移出水面"
              }
            ]
          },
          {
            "t": "熄灭酒精灯",
            "c": "primary",
            "when": "stage.flame",
            "voice": [
              "熄灭",
              "熄灯",
              "灭灯",
              "吹灭"
            ],
            "do": [
              {
                "do": "if",
                "cond": "stage.pipeOut",
                "then": [
                  {
                    "do": "set",
                    "k": "flame",
                    "v": false
                  },
                  {
                    "do": "score",
                    "key": "finish"
                  },
                  {
                    "do": "tip",
                    "text": "操作顺序正确，实验安全结束 ✓"
                  },
                  {
                    "do": "goto",
                    "id": "test",
                    "delay": 900
                  }
                ],
                "else": [
                  {
                    "do": "set",
                    "k": "flame",
                    "v": false
                  },
                  {
                    "do": "err",
                    "text": "先熄灭酒精灯，试管内气压降低，水槽中的水被倒吸回试管！"
                  },
                  {
                    "do": "set",
                    "k": "suckStage",
                    "v": 1,
                    "delay": 700
                  },
                  {
                    "do": "set",
                    "k": "suckStage",
                    "v": 2,
                    "delay": 1400
                  },
                  {
                    "do": "set",
                    "k": "suckStage",
                    "v": 3,
                    "delay": 2100
                  },
                  {
                    "do": "set",
                    "k": "suckStage",
                    "v": 4,
                    "delay": 2900
                  },
                  {
                    "do": "set",
                    "k": "crackStage",
                    "v": 1,
                    "delay": 2900
                  },
                  {
                    "do": "set",
                    "k": "crackStage",
                    "v": 2,
                    "delay": 3400
                  },
                  {
                    "do": "set",
                    "k": "crackStage",
                    "v": 3,
                    "delay": 3900
                  },
                  {
                    "do": "tip",
                    "text": "试管炸裂！正确顺序：先把导管移出水面，再熄灭酒精灯",
                    "kind": "err",
                    "delay": 4400
                  },
                  {
                    "do": "goto",
                    "id": "report",
                    "delay": 6200
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "test",
        "type": "stage",
        "title": "检验气体",
        "progress": 92,
        "shelf": [
          "wood"
        ],
        "desc": "用带火星的木条检验收集到的气体是不是氧气。",
        "help": "检验氧气：用带火星的木条伸入集气瓶，观察是否复燃。把木条拖到集气瓶口。",
        "zones": [
          "wood"
        ],
        "drop": [
          {
            "equip": "wood",
            "zone": "wood",
            "do": [
              {
                "do": "set",
                "k": "wood",
                "v": true
              },
              {
                "do": "set",
                "k": "woodFire",
                "v": true
              },
              {
                "do": "score",
                "key": "test"
              },
              {
                "do": "tip",
                "text": "带火星木条复燃，证明是氧气 ✓"
              },
              {
                "do": "goto",
                "id": "report",
                "delay": 1000
              }
            ]
          },
          {
            "equip": "wood",
            "do": [
              {
                "do": "err",
                "text": "木条的位置不对。想一想：检验氧气应该把木条放在集气瓶的什么位置？"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步需要用木条检验气体。"
              }
            ]
          }
        ]
      },
      {
        "id": "report",
        "type": "report",
        "title": "实验报告",
        "progress": 96,
        "buttons": [
          {
            "t": "提交报告",
            "c": "primary",
            "do": [
              {
                "do": "finish"
              },
              {
                "do": "goto",
                "id": "score"
              }
            ]
          }
        ]
      },
      {
        "id": "score",
        "type": "score",
        "title": "实验评分",
        "progress": 100,
        "buttons": [
          {
            "t": "导出本次成绩",
            "c": "ghost",
            "do": [
              {
                "do": "export"
              }
            ]
          },
          {
            "t": "查看常见错误",
            "c": "ghost",
            "goto": "errtable"
          },
          {
            "t": "重做实验",
            "c": "primary",
            "do": [
              {
                "do": "reset"
              }
            ]
          }
        ]
      },
      {
        "id": "errtable",
        "type": "errors",
        "title": "常见错误与后果",
        "progress": 100,
        "buttons": [
          {
            "t": "返回评分",
            "c": "ghost",
            "goto": "score"
          },
          {
            "t": "重做实验",
            "c": "primary",
            "do": [
              {
                "do": "reset"
              }
            ]
          }
        ]
      }
    ]
  },
  "exp_h2o2": {
    "id": "h2o2",
    "title": "过氧化氢制取氧气",
    "subtitle": "初中化学虚拟实验 · 固液常温型 + 催化",
    "badges": [
      "MnO₂ 作催化剂",
      "排水法收集",
      "满分 100 分"
    ],
    "viewBox": "0 0 600 360",
    "equipments": [
      {
        "id": "flask",
        "name": "锥形瓶",
        "need": true
      },
      {
        "id": "mno2",
        "name": "二氧化锰",
        "need": true
      },
      {
        "id": "h2o2",
        "name": "过氧化氢溶液",
        "need": true
      },
      {
        "id": "stopper2",
        "name": "双孔橡皮塞",
        "need": true
      },
      {
        "id": "funnel2",
        "name": "长颈漏斗",
        "need": true
      },
      {
        "id": "pipe",
        "name": "导管",
        "need": true
      },
      {
        "id": "basin",
        "name": "水槽",
        "need": true
      },
      {
        "id": "bottle",
        "name": "集气瓶",
        "need": true
      },
      {
        "id": "glass",
        "name": "玻璃片",
        "need": true
      },
      {
        "id": "wood",
        "name": "带火星的木条",
        "need": true
      },
      {
        "id": "lamp",
        "name": "酒精灯",
        "need": false
      },
      {
        "id": "stand",
        "name": "铁架台",
        "need": false
      },
      {
        "id": "kmno4",
        "name": "高锰酸钾",
        "need": false
      },
      {
        "id": "cotton",
        "name": "棉花",
        "need": false
      },
      {
        "id": "match",
        "name": "火柴",
        "need": false
      }
    ],
    "dims": [
      {
        "key": "skill",
        "name": "操作规范"
      },
      {
        "key": "safety",
        "name": "安全意识"
      }
    ],
    "scoreItems": [
      {
        "key": "equip",
        "name": "器材选择",
        "max": 10,
        "dim": "skill"
      },
      {
        "key": "assemble",
        "name": "放置发生装置",
        "max": 8,
        "dim": "skill"
      },
      {
        "key": "catalyst",
        "name": "加入二氧化锰",
        "max": 8,
        "dim": "skill"
      },
      {
        "key": "install",
        "name": "组装塞子/漏斗/导管",
        "max": 10,
        "dim": "skill"
      },
      {
        "key": "pour",
        "name": "加过氧化氢（液封）",
        "max": 12,
        "dim": "safety"
      },
      {
        "key": "basin",
        "name": "准备排水法装置",
        "max": 6,
        "dim": "skill"
      },
      {
        "key": "timing",
        "name": "把握开始收集时机",
        "max": 10,
        "dim": "skill"
      },
      {
        "key": "collect",
        "name": "排水法收集气体",
        "max": 12,
        "dim": "skill"
      },
      {
        "key": "takeout",
        "name": "盖片正放取出",
        "max": 10,
        "dim": "safety"
      },
      {
        "key": "verify",
        "name": "带火星木条检验",
        "max": 14,
        "dim": "skill"
      }
    ],
    "initialStage": {
      "flaskPlaced": false,
      "mno2In": false,
      "stopperOn": false,
      "funnelOn": false,
      "pipeOn": false,
      "poured": false,
      "wrongPour": false,
      "gasEscape": false,
      "reacting": false,
      "basinPlaced": false,
      "bottleIn": false,
      "gas": 0,
      "early": false,
      "takenOut": false,
      "glassOn": false,
      "wood": false,
      "relit": false
    },
    "dropZones": {
      "flask": {
        "x": 84,
        "y": 226,
        "w": 180,
        "h": 116
      },
      "mouth": {
        "x": 118,
        "y": 186,
        "w": 80,
        "h": 54
      },
      "stopper": {
        "x": 116,
        "y": 150,
        "w": 84,
        "h": 62
      },
      "funnel": {
        "x": 96,
        "y": 92,
        "w": 122,
        "h": 74
      },
      "basin": {
        "x": 288,
        "y": 168,
        "w": 244,
        "h": 160
      },
      "bottle": {
        "x": 330,
        "y": 132,
        "w": 130,
        "h": 190
      },
      "takeout": {
        "x": 478,
        "y": 108,
        "w": 84,
        "h": 62
      },
      "wood": {
        "x": 486,
        "y": 44,
        "w": 100,
        "h": 118
      }
    },
    "scene": [
      {
        "tag": "rect",
        "x": 40,
        "y": 322,
        "width": 520,
        "height": 15,
        "rx": 5,
        "fill": "url(#gMetal)"
      },
      {
        "tag": "rect",
        "x": 40,
        "y": 322,
        "width": 520,
        "height": 4,
        "rx": 2,
        "fill": "#e8eef2",
        "opacity": 0.75
      },
      {
        "tag": "g",
        "when": "stage.basinPlaced",
        "children": [
          {
            "tag": "path",
            "d": "M300 184 L300 314 Q300 322 308 322 L454 322 Q462 322 462 314 L462 184 Z",
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.2
          },
          {
            "tag": "rect",
            "x": 304,
            "y": 200,
            "width": 154,
            "height": 118,
            "fill": "url(#gWater)",
            "opacity": 0.85
          },
          {
            "tag": "rect",
            "x": 294,
            "y": 178,
            "width": 176,
            "height": 10,
            "rx": 4,
            "fill": "url(#gGlassH)",
            "stroke": "#7ba7c7",
            "stroke-width": 1.5
          },
          {
            "tag": "text",
            "x": 452,
            "y": 262,
            "font-size": 11,
            "text-anchor": "end",
            "fill": "#0277bd",
            "opacity": 0.75,
            "text": "水"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.bottleIn && !stage.takenOut",
        "children": [
          {
            "tag": "rect",
            "x": 352,
            "y": 150,
            "width": 84,
            "height": 152,
            "rx": 6,
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.2
          },
          {
            "tag": "rect",
            "x": 374,
            "y": 300,
            "width": 40,
            "height": 20,
            "rx": 3,
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.2
          },
          {
            "tag": "rect",
            "x": 354,
            "y": 152,
            "width": 80,
            "height": "@ 148*stage.gas/100",
            "fill": "#bbdefb",
            "opacity": 0.45
          },
          {
            "tag": "rect",
            "x": 354,
            "y": "@ 152 + 148*stage.gas/100",
            "width": 80,
            "height": "@ 148 - 148*stage.gas/100",
            "fill": "url(#gWater)",
            "opacity": 0.85
          },
          {
            "tag": "text",
            "when": "stage.gas>=100",
            "x": 394,
            "y": 240,
            "font-size": 13,
            "text-anchor": "middle",
            "fill": "#1565c0",
            "font-weight": 700,
            "text": "O₂"
          },
          {
            "tag": "text",
            "when": "stage.gas>=100",
            "x": 452,
            "y": 118,
            "font-size": 11.5,
            "text-anchor": "middle",
            "fill": "#0277bd",
            "text": "瓶口有气泡向外冒出 → 已满"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.pipeOn",
        "children": [
          {
            "tag": "path",
            "d": "M170 182 C240 166 300 178 326 210 L326 300 Q326 314 340 314 L392 314 L392 304",
            "stroke": "#90a4ae",
            "stroke-width": 7,
            "fill": "none",
            "stroke-linecap": "round"
          },
          {
            "tag": "path",
            "d": "M170 182 C240 166 300 178 326 210 L326 300 Q326 314 340 314 L392 314 L392 304",
            "stroke": "#e0e8ec",
            "stroke-width": 2,
            "fill": "none",
            "stroke-linecap": "round",
            "opacity": 0.7
          },
          {
            "tag": "g",
            "when": "stage.reacting && stage.bottleIn",
            "children": [
              {
                "tag": "circle",
                "class": "bub",
                "cx": 392,
                "cy": 306,
                "r": 4,
                "fill": "#ffffff",
                "opacity": 0.9,
                "style": "animation-delay:0s"
              },
              {
                "tag": "circle",
                "class": "bub",
                "cx": 388,
                "cy": 310,
                "r": 3,
                "fill": "#ffffff",
                "opacity": 0.9,
                "style": "animation-delay:.4s"
              },
              {
                "tag": "circle",
                "class": "bub",
                "cx": 396,
                "cy": 308,
                "r": 3.5,
                "fill": "#ffffff",
                "opacity": 0.9,
                "style": "animation-delay:.8s"
              }
            ]
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.flaskPlaced",
        "children": [
          {
            "tag": "path",
            "d": "M140 175 L172 175 L172 216 L206 298 Q209 308 198 308 L114 308 Q103 308 106 298 L140 216 Z",
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.2
          },
          {
            "tag": "path",
            "when": "stage.mno2In",
            "d": "M118 300 Q150 286 200 300 L200 307 Q150 307 118 307 Z",
            "fill": "#212121"
          },
          {
            "tag": "circle",
            "when": "stage.mno2In",
            "cx": 140,
            "cy": 297,
            "r": 2.6,
            "fill": "#4e4e4e"
          },
          {
            "tag": "circle",
            "when": "stage.mno2In",
            "cx": 166,
            "cy": 299,
            "r": 2.2,
            "fill": "#4e4e4e"
          },
          {
            "tag": "path",
            "when": "stage.poured",
            "d": "M126 250 L186 250 L204 296 Q207 306 196 306 L114 306 Q103 306 106 296 Z",
            "fill": "url(#gWater)",
            "opacity": 0.55
          },
          {
            "tag": "g",
            "when": "stage.reacting",
            "children": [
              {
                "tag": "circle",
                "class": "bub",
                "cx": 136,
                "cy": 292,
                "r": 4.5,
                "fill": "#ffffff",
                "opacity": 0.9,
                "style": "animation-delay:0s"
              },
              {
                "tag": "circle",
                "class": "bub",
                "cx": 158,
                "cy": 288,
                "r": 5,
                "fill": "#ffffff",
                "opacity": 0.9,
                "style": "animation-delay:.3s"
              },
              {
                "tag": "circle",
                "class": "bub",
                "cx": 180,
                "cy": 291,
                "r": 3.5,
                "fill": "#ffffff",
                "opacity": 0.9,
                "style": "animation-delay:.65s"
              },
              {
                "tag": "circle",
                "class": "bub",
                "cx": 146,
                "cy": 278,
                "r": 3,
                "fill": "#ffffff",
                "opacity": 0.9,
                "style": "animation-delay:1s"
              }
            ]
          },
          {
            "tag": "path",
            "d": "M146 180 L146 214 L118 292",
            "stroke": "#ffffff",
            "stroke-width": 2.2,
            "fill": "none",
            "opacity": 0.75
          },
          {
            "tag": "text",
            "when": "stage.reacting",
            "x": 232,
            "y": 274,
            "font-size": 10.5,
            "fill": "#0277bd",
            "font-weight": 700,
            "text": "迅速放出气泡"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.funnelOn",
        "children": [
          {
            "tag": "path",
            "d": "M108 116 L204 116 L168 150 L144 150 Z",
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2
          },
          {
            "tag": "rect",
            "x": 149,
            "y": 148,
            "width": 14,
            "height": 114,
            "rx": 2,
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2
          },
          {
            "tag": "path",
            "when": "stage.poured && !stage.wrongPour",
            "d": "M112 120 L200 120 L172 146 L140 146 Z",
            "fill": "url(#gWater)",
            "opacity": 0.7
          },
          {
            "tag": "rect",
            "when": "stage.poured && !stage.wrongPour",
            "x": 151,
            "y": 150,
            "width": 10,
            "height": 112,
            "fill": "url(#gWater)",
            "opacity": 0.8
          },
          {
            "tag": "text",
            "when": "stage.poured && !stage.wrongPour",
            "x": 222,
            "y": 252,
            "font-size": 10.5,
            "fill": "#0277bd",
            "font-weight": 700,
            "text": "液封 ✓"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.gasEscape",
        "children": [
          {
            "tag": "circle",
            "class": "bub",
            "cx": 148,
            "cy": 106,
            "r": 5,
            "fill": "#ffffff",
            "opacity": 0.9,
            "style": "animation-delay:0s"
          },
          {
            "tag": "circle",
            "class": "bub",
            "cx": 172,
            "cy": 102,
            "r": 4,
            "fill": "#ffffff",
            "opacity": 0.9,
            "style": "animation-delay:.4s"
          },
          {
            "tag": "circle",
            "class": "bub",
            "cx": 194,
            "cy": 105,
            "r": 4.5,
            "fill": "#ffffff",
            "opacity": 0.9,
            "style": "animation-delay:.8s"
          },
          {
            "tag": "text",
            "x": 168,
            "y": 86,
            "font-size": 12,
            "text-anchor": "middle",
            "fill": "#dc2626",
            "font-weight": 700,
            "text": "氧气从漏斗跑掉了！"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.stopperOn",
        "children": [
          {
            "tag": "ellipse",
            "cx": 156,
            "cy": 168,
            "rx": 22,
            "ry": 3.5,
            "fill": "#8d6e63"
          },
          {
            "tag": "path",
            "d": "M134 168 L178 168 L173 193 L139 193 Z",
            "fill": "url(#gRubber)"
          },
          {
            "tag": "circle",
            "cx": 148,
            "cy": 181,
            "r": 3,
            "fill": "#3e2723"
          },
          {
            "tag": "circle",
            "cx": 168,
            "cy": 181,
            "r": 3,
            "fill": "#3e2723"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.takenOut",
        "children": [
          {
            "tag": "rect",
            "x": 480,
            "y": 150,
            "width": 80,
            "height": 160,
            "rx": 5,
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.5
          },
          {
            "tag": "rect",
            "x": 498,
            "y": 134,
            "width": 44,
            "height": 18,
            "rx": 3,
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.5
          },
          {
            "tag": "rect",
            "x": 492,
            "y": 128,
            "width": 56,
            "height": 8,
            "rx": 3,
            "fill": "url(#gGlassH)",
            "stroke": "#7ba7c7",
            "stroke-width": 1.5
          },
          {
            "tag": "rect",
            "class": "cloudy",
            "x": 483,
            "y": 156,
            "width": 74,
            "height": 152,
            "fill": "#bbdefb",
            "opacity": 0.45
          },
          {
            "tag": "text",
            "x": 520,
            "y": 240,
            "font-size": 13,
            "text-anchor": "middle",
            "fill": "#1565c0",
            "font-weight": 700,
            "text": "O₂"
          },
          {
            "tag": "rect",
            "when": "stage.glassOn",
            "x": 490,
            "y": 118,
            "width": 60,
            "height": 10,
            "rx": 3,
            "fill": "url(#gGlassH)",
            "stroke": "#4fc3f7",
            "stroke-width": 1.5
          },
          {
            "tag": "text",
            "x": 520,
            "y": 346,
            "font-size": 11,
            "text-anchor": "middle",
            "fill": "#0277bd",
            "text": "正放保存"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.wood",
        "children": [
          {
            "tag": "rect",
            "x": 516,
            "y": 52,
            "width": 9,
            "height": 64,
            "rx": 3,
            "fill": "url(#gWood)"
          },
          {
            "tag": "circle",
            "cx": 520,
            "cy": 54,
            "r": 5.5,
            "fill": "#8d6e63"
          },
          {
            "tag": "circle",
            "cx": 520,
            "cy": 54,
            "r": 2.6,
            "fill": "#ff8a65"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.relit",
        "class": "flame",
        "children": [
          {
            "tag": "ellipse",
            "cx": 520,
            "cy": 46,
            "rx": 9,
            "ry": 14,
            "fill": "url(#gFlameOut)"
          },
          {
            "tag": "ellipse",
            "cx": 520,
            "cy": 50,
            "rx": 4,
            "ry": 7,
            "fill": "#fff59d"
          },
          {
            "tag": "text",
            "x": 580,
            "y": 40,
            "font-size": 12,
            "text-anchor": "end",
            "fill": "#dc2626",
            "font-weight": 700,
            "text": "木条复燃 → 是氧气"
          }
        ]
      }
    ],
    "report": [
      {
        "title": "实验记录",
        "lines": [
          "实验名称：过氧化氢分解制取氧气",
          "反应原理：2H₂O₂ --MnO₂--> 2H₂O + O₂↑",
          "发生装置：固液常温型（锥形瓶 + 长颈漏斗）",
          "催化剂：MnO₂（本身不消耗，可重复使用）",
          "收集方法：排水法（氧气不易溶于水）"
        ]
      },
      {
        "title": "现象记录",
        "lines": [
          "1. 加入二氧化锰后，锥形瓶中迅速产生大量气泡",
          "2. 带火星的木条伸入集气瓶中，木条复燃",
          "3. 二氧化锰本身并没有消失，反应前后质量不变"
        ]
      },
      {
        "title": "实验结论",
        "lines": [
          "过氧化氢在二氧化锰催化下分解生成水和氧气。",
          "二氧化锰是该反应的催化剂，能改变反应速率，但本身质量和化学性质不变。",
          "氧气支持燃烧：能使带火星的木条复燃。"
        ]
      }
    ],
    "errorTable": [
      {
        "op": "用向上排空气法代替排水法",
        "phen": "氧气与空气密度接近",
        "result": "收集的气体不纯、难验满",
        "score": 12
      },
      {
        "op": "长颈漏斗下端未形成液封",
        "phen": "未液封",
        "result": "氧气从漏斗口逸出",
        "score": 12
      },
      {
        "op": "气泡刚冒出就开始收集",
        "phen": "排的是装置内的空气",
        "result": "收集到的氧气不纯",
        "score": 10
      },
      {
        "op": "取出时未在水下盖玻璃片",
        "phen": "气体逸散",
        "result": "氧气跑掉，检验失败",
        "score": 10
      },
      {
        "op": "集满后倒放保存",
        "phen": "氧气密度略大于空气",
        "result": "气体下沉流失",
        "score": 10
      },
      {
        "op": "误用酒精灯加热",
        "phen": "本实验常温即可",
        "result": "装置与药品选择错误",
        "score": 10
      },
      {
        "op": "误用高锰酸钾、棉花",
        "phen": "那是固体加热型药品",
        "result": "本实验用不到",
        "score": 10
      }
    ],
    "steps": [
      {
        "id": "cover",
        "type": "cover",
        "title": "准备开始",
        "progress": 0,
        "headline": "过氧化氢制取氧气",
        "subtitle": "初中化学虚拟实验 · 固液常温型 + 催化",
        "buttons": [
          {
            "t": "开始实验",
            "c": "primary",
            "goto": "goal"
          }
        ]
      },
      {
        "id": "goal",
        "type": "doc",
        "title": "实验目标",
        "progress": 5,
        "cols": [
          {
            "title": "实验目标",
            "lines": [
              "1. 认识固液常温型发生装置（不用加热）",
              "2. 理解催化剂MnO₂ 的作用与特点",
              "3. 掌握排水法收集气体的操作与时机",
              "4. 学会用带火星的木条检验氧气",
              "5. 与「高锰酸钾制氧」「制取二氧化碳」形成对比"
            ]
          },
          {
            "title": "操作方式",
            "lines": [
              "● 拖拽器材：从左侧器材架拖到实验台",
              "● 高亮区域就是本步该放的位置",
              "● 右侧显示当前实验阶段",
              "● 卡住时点右下角“？”获取提示"
            ]
          },
          {
            "title": "安全提示",
            "lines": [
              "⚠ 本实验不需要加热",
              "⚠ 长颈漏斗下端必须伸入液面以下形成液封",
              "⚠ 刚开始冒出的气泡是装置内的空气，要等气泡连续均匀再收集",
              "⚠ 取出集气瓶要在水面下用玻璃片盖住瓶口，取出后正放"
            ]
          }
        ],
        "buttons": [
          {
            "t": "下一步",
            "c": "primary",
            "goto": "equip"
          },
          {
            "t": "返回封面",
            "c": "ghost",
            "goto": "cover"
          }
        ]
      },
      {
        "id": "equip",
        "type": "equip",
        "title": "选择实验器材",
        "progress": 10,
        "tip": "这是「固液常温型」反应，不用加热；氧气不易溶于水，想一想该用什么方法收集",
        "buttons": [
          {
            "t": "确认器材",
            "c": "primary",
            "do": [
              {
                "do": "checkEquip",
                "key": "equip",
                "goto": "assemble"
              }
            ]
          }
        ]
      },
      {
        "id": "assemble",
        "type": "stage",
        "title": "放置发生装置",
        "progress": 18,
        "shelf": [
          "flask"
        ],
        "desc": "先把反应容器放到桌面上，作为整套装置的主体。",
        "help": "把锥形瓶拖到桌面左侧的高亮区域。和小试管比，锥形瓶更适合装较多液体。",
        "zones": [
          "flask"
        ],
        "drop": [
          {
            "equip": "flask",
            "zone": "flask",
            "do": [
              {
                "do": "set",
                "k": "flaskPlaced",
                "v": true
              },
              {
                "do": "score",
                "key": "assemble"
              },
              {
                "do": "tip",
                "text": "锥形瓶已放好 ✓"
              },
              {
                "do": "goto",
                "id": "catalyst",
                "delay": 800
              }
            ]
          },
          {
            "equip": "flask",
            "do": [
              {
                "do": "err",
                "text": "锥形瓶要放在平整的桌面上，拖到高亮区域。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步先放反应容器。想一想：固体和液体在哪里混合？"
              }
            ]
          }
        ]
      },
      {
        "id": "catalyst",
        "type": "stage",
        "title": "加入二氧化锰",
        "progress": 26,
        "shelf": [
          "mno2"
        ],
        "desc": "先加黑色粉末状的二氧化锰。它不是反应物，而是催化剂。",
        "help": "把二氧化锰拖到锥形瓶口。记住：MnO₂ 在这里是催化剂，反应前后质量和化学性质都不变。",
        "zones": [
          "mouth"
        ],
        "drop": [
          {
            "equip": "mno2",
            "zone": "mouth",
            "do": [
              {
                "do": "set",
                "k": "mno2In",
                "v": true
              },
              {
                "do": "score",
                "key": "catalyst"
              },
              {
                "do": "tip",
                "text": "二氧化锰已加入（作催化剂，本身不被消耗）✓"
              },
              {
                "do": "goto",
                "id": "install",
                "delay": 1200
              }
            ]
          },
          {
            "equip": "mno2",
            "do": [
              {
                "do": "err",
                "text": "二氧化锰要从锥形瓶口加入，注意不要洒在外面。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步需要加入的是黑色粉末状催化剂。"
              }
            ]
          }
        ]
      },
      {
        "id": "install",
        "type": "stage",
        "title": "组装双孔塞、漏斗与导管",
        "progress": 34,
        "shelf": [
          "stopper2",
          "funnel2",
          "pipe"
        ],
        "desc": "三件都要装好：双孔橡皮塞、长颈漏斗、导气管。",
        "help": "依次把双孔橡皮塞、长颈漏斗、导气管拖到锥形瓶口。长颈漏斗下端要伸到接近瓶底的位置。",
        "zones": [
          "stopper"
        ],
        "drop": [
          {
            "equip": "stopper2",
            "zone": "stopper",
            "do": [
              {
                "do": "set",
                "k": "stopperOn",
                "v": true
              },
              {
                "do": "tip",
                "text": "双孔橡皮塞已塞紧 ✓"
              },
              {
                "do": "if",
                "cond": "stage.stopperOn && stage.funnelOn && stage.pipeOn",
                "then": [
                  {
                    "do": "score",
                    "key": "install"
                  },
                  {
                    "do": "goto",
                    "id": "pour",
                    "delay": 1000
                  }
                ]
              }
            ]
          },
          {
            "equip": "funnel2",
            "zone": "stopper",
            "do": [
              {
                "do": "set",
                "k": "funnelOn",
                "v": true
              },
              {
                "do": "tip",
                "text": "长颈漏斗已插到液面以下 ✓"
              },
              {
                "do": "if",
                "cond": "stage.stopperOn && stage.funnelOn && stage.pipeOn",
                "then": [
                  {
                    "do": "score",
                    "key": "install"
                  },
                  {
                    "do": "goto",
                    "id": "pour",
                    "delay": 1000
                  }
                ]
              }
            ]
          },
          {
            "equip": "pipe",
            "zone": "stopper",
            "do": [
              {
                "do": "set",
                "k": "pipeOn",
                "v": true
              },
              {
                "do": "tip",
                "text": "导气管已接在另一个孔上 ✓"
              },
              {
                "do": "if",
                "cond": "stage.stopperOn && stage.funnelOn && stage.pipeOn",
                "then": [
                  {
                    "do": "score",
                    "key": "install"
                  },
                  {
                    "do": "goto",
                    "id": "pour",
                    "delay": 1000
                  }
                ]
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "要往瓶口上方的高亮区域放。塞子、长颈漏斗、导管三件都要装好。"
              }
            ]
          }
        ]
      },
      {
        "id": "pour",
        "type": "stage",
        "title": "加入过氧化氢溶液",
        "progress": 44,
        "shelf": [
          "h2o2"
        ],
        "desc": "过氧化氢溶液要从长颈漏斗加入，让漏斗下端被液体封住。",
        "help": "把过氧化氢溶液拖到长颈漏斗口。如果直接从瓶口倒进去，漏斗下端没有被液体封住会怎样？",
        "zones": [
          "funnel",
          "mouth"
        ],
        "drop": [
          {
            "equip": "h2o2",
            "zone": "funnel",
            "do": [
              {
                "do": "set",
                "k": "poured",
                "v": true
              },
              {
                "do": "set",
                "k": "reacting",
                "v": true
              },
              {
                "do": "score",
                "key": "pour"
              },
              {
                "do": "tip",
                "text": "过氧化氢已加入，漏斗下端形成液封，氧气只能从导管走 ✓"
              },
              {
                "do": "goto",
                "id": "basin",
                "delay": 1600
              }
            ]
          },
          {
            "equip": "h2o2",
            "zone": "mouth",
            "do": [
              {
                "do": "set",
                "k": "poured",
                "v": true
              },
              {
                "do": "set",
                "k": "wrongPour",
                "v": true
              },
              {
                "do": "set",
                "k": "gasEscape",
                "v": true
              },
              {
                "do": "set",
                "k": "reacting",
                "v": true
              },
              {
                "do": "err",
                "text": "直接从瓶口倒入，长颈漏斗下端没有形成液封，生成的氧气会从漏斗口跑掉！"
              },
              {
                "do": "goto",
                "id": "basin",
                "delay": 4000
              }
            ]
          },
          {
            "equip": "h2o2",
            "do": [
              {
                "do": "err",
                "text": "要倒进长颈漏斗里，或者直接对着瓶口倒（想一想哪种才对）。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步需要加入的是液体药品。"
              }
            ]
          }
        ]
      },
      {
        "id": "basin",
        "type": "stage",
        "title": "准备排水法装置",
        "progress": 52,
        "shelf": [
          "basin"
        ],
        "desc": "氧气不易溶于水，也不与水反应，所以可以用排水法收集。先把水槽放到桌面右侧。",
        "help": "把水槽拖到桌面右侧的高亮区域，里面装了大半槽水。",
        "zones": [
          "basin"
        ],
        "drop": [
          {
            "equip": "basin",
            "zone": "basin",
            "do": [
              {
                "do": "set",
                "k": "basinPlaced",
                "v": true
              },
              {
                "do": "score",
                "key": "basin"
              },
              {
                "do": "tip",
                "text": "水槽已放好 ✓ 导管口已伸入水面下"
              },
              {
                "do": "goto",
                "id": "timing",
                "delay": 1200
              }
            ]
          },
          {
            "equip": "basin",
            "do": [
              {
                "do": "err",
                "text": "水槽要放在桌面右侧、导管下方的位置。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要把排水法用的水槽放好。"
              }
            ]
          }
        ]
      },
      {
        "id": "timing",
        "type": "doc",
        "title": "什么时候开始收集？",
        "progress": 60,
        "cols": [
          {
            "title": "想一想",
            "lines": [
              "导管口现在正在冒出气泡。",
              "但导管和锥形瓶里原先装的是空气，",
              "一开始被排出来的气体是空气，不是氧气。",
              "所以：刚冒气泡就收集，得到的是「氧气+空气」的混合气体。"
            ]
          },
          {
            "title": "正确做法",
            "lines": [
              "等气泡连续、均匀、较快地放出时，",
              "才说明装置内的空气已经排尽，",
              "此时再把装满水的集气瓶倒扣在导管口收集。"
            ]
          }
        ],
        "buttons": [
          {
            "t": "气泡一冒出就立即收集",
            "c": "ghost",
            "do": [
              {
                "do": "set",
                "k": "early",
                "v": true
              },
              {
                "do": "err",
                "text": "刚开始排出的是装置内的空气，这样收集到的氧气不纯。"
              },
              {
                "do": "goto",
                "id": "collect",
                "delay": 3600
              }
            ]
          },
          {
            "t": "等气泡连续均匀后再收集",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "timing"
              },
              {
                "do": "tip",
                "text": "对！连续均匀的气泡说明空气已排尽，此时收集的才是氧气 ✓"
              },
              {
                "do": "goto",
                "id": "collect",
                "delay": 1400
              }
            ]
          }
        ]
      },
      {
        "id": "collect",
        "type": "stage",
        "title": "排水法收集氧气",
        "progress": 70,
        "shelf": [
          "bottle"
        ],
        "desc": "把装满水的集气瓶倒扣在水槽中，导管口伸到瓶口，氧气进入后瓶内水面下降。",
        "help": "把集气瓶拖到水槽里倒扣的位置。集气瓶必须装满水、瓶口向下，不能有气泡残留。",
        "zones": [
          "bottle"
        ],
        "drop": [
          {
            "equip": "bottle",
            "zone": "bottle",
            "do": [
              {
                "do": "set",
                "k": "bottleIn",
                "v": true
              },
              {
                "do": "tip",
                "text": "氧气进入瓶中，把水排出，瓶内水面在下降"
              },
              {
                "do": "set",
                "k": "gas",
                "v": 30,
                "delay": 700
              },
              {
                "do": "set",
                "k": "gas",
                "v": 62,
                "delay": 1500
              },
              {
                "do": "set",
                "k": "gas",
                "v": 100,
                "delay": 2400
              },
              {
                "do": "score",
                "key": "collect",
                "delay": 2500
              },
              {
                "do": "goto",
                "id": "takeout",
                "delay": 3600
              }
            ]
          },
          {
            "equip": "bottle",
            "do": [
              {
                "do": "err",
                "text": "集气瓶要装满水、瓶口向下倒扣在水槽里。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要用装满水的集气瓶收集气体。"
              }
            ]
          }
        ]
      },
      {
        "id": "takeout",
        "type": "stage",
        "title": "取出并正放保存",
        "progress": 82,
        "shelf": [
          "glass"
        ],
        "desc": "当瓶口有大气泡向外冒出时说明已集满。在水面下用玻璃片盖住瓶口，取出后正放在桌上。",
        "help": "把玻璃片拖到集气瓶口。想一想：氧气密度比空气略大，盖好后应该正放还是倒放？",
        "zones": [
          "takeout"
        ],
        "drop": [
          {
            "equip": "glass",
            "zone": "takeout",
            "do": [
              {
                "do": "set",
                "k": "glassOn",
                "v": true
              },
              {
                "do": "set",
                "k": "takenOut",
                "v": true
              },
              {
                "do": "score",
                "key": "takeout"
              },
              {
                "do": "tip",
                "text": "水面下盖好玻璃片、正放保存 ✓ 准备检验"
              },
              {
                "do": "goto",
                "id": "verify",
                "delay": 1400
              }
            ]
          },
          {
            "equip": "glass",
            "do": [
              {
                "do": "err",
                "text": "玻璃片要在水面下盖住集气瓶口，再一起取出。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要用玻璃片盖住瓶口。"
              }
            ]
          }
        ]
      },
      {
        "id": "verify",
        "type": "stage",
        "title": "检验氧气",
        "progress": 92,
        "shelf": [
          "wood"
        ],
        "desc": "把带火星的木条伸入集气瓶中，观察是否复燃。",
        "help": "把带火星的木条拖到集气瓶口并伸入瓶中。注意：验满是放在瓶口，检验要伸进瓶内。",
        "zones": [
          "wood"
        ],
        "drop": [
          {
            "equip": "wood",
            "zone": "wood",
            "do": [
              {
                "do": "set",
                "k": "wood",
                "v": true
              },
              {
                "do": "set",
                "k": "relit",
                "v": true,
                "delay": 800
              },
              {
                "do": "score",
                "key": "verify"
              },
              {
                "do": "tip",
                "text": "木条复燃，证明收集到的是氧气 ✓"
              },
              {
                "do": "goto",
                "id": "report",
                "delay": 2200
              }
            ]
          },
          {
            "equip": "wood",
            "do": [
              {
                "do": "err",
                "text": "带火星的木条要伸到集气瓶里。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步用带火星的木条检验氧气。"
              }
            ]
          }
        ]
      },
      {
        "id": "report",
        "type": "report",
        "title": "实验报告",
        "progress": 96,
        "buttons": [
          {
            "t": "提交报告",
            "c": "primary",
            "do": [
              {
                "do": "finish"
              },
              {
                "do": "goto",
                "id": "score"
              }
            ]
          }
        ]
      },
      {
        "id": "score",
        "type": "score",
        "title": "实验评分",
        "progress": 100,
        "buttons": [
          {
            "t": "导出本次成绩",
            "c": "ghost",
            "do": [
              {
                "do": "export"
              }
            ]
          },
          {
            "t": "查看常见错误",
            "c": "ghost",
            "goto": "errtable"
          },
          {
            "t": "重做实验",
            "c": "primary",
            "do": [
              {
                "do": "reset"
              }
            ]
          }
        ]
      },
      {
        "id": "errtable",
        "type": "errors",
        "title": "常见错误与后果",
        "progress": 100,
        "buttons": [
          {
            "t": "返回评分",
            "c": "ghost",
            "goto": "score"
          },
          {
            "t": "重做实验",
            "c": "primary",
            "do": [
              {
                "do": "reset"
              }
            ]
          }
        ]
      }
    ]
  },
  "exp_co2": {
    "id": "co2",
    "title": "实验室制取二氧化碳",
    "subtitle": "初中化学虚拟实验 · 固液常温型装置",
    "badges": [
      "向上排空气法收集",
      "满分 100 分"
    ],
    "viewBox": "0 0 600 360",
    "equipments": [
      {
        "id": "flask",
        "name": "锥形瓶",
        "need": true
      },
      {
        "id": "marble",
        "name": "大理石",
        "need": true
      },
      {
        "id": "acid",
        "name": "稀盐酸",
        "need": true
      },
      {
        "id": "stopper2",
        "name": "双孔橡皮塞",
        "need": true
      },
      {
        "id": "funnel2",
        "name": "长颈漏斗",
        "need": true
      },
      {
        "id": "pipe",
        "name": "导管",
        "need": true
      },
      {
        "id": "bottle",
        "name": "集气瓶",
        "need": true
      },
      {
        "id": "glass",
        "name": "玻璃片",
        "need": true
      },
      {
        "id": "match",
        "name": "火柴",
        "need": true
      },
      {
        "id": "limewater",
        "name": "澄清石灰水",
        "need": true
      },
      {
        "id": "lamp",
        "name": "酒精灯",
        "need": false
      },
      {
        "id": "tube",
        "name": "试管",
        "need": false
      },
      {
        "id": "basin",
        "name": "水槽",
        "need": false
      },
      {
        "id": "stand",
        "name": "铁架台",
        "need": false
      }
    ],
    "dims": [
      {
        "key": "skill",
        "name": "操作规范"
      },
      {
        "key": "safety",
        "name": "安全意识"
      }
    ],
    "scoreItems": [
      {
        "key": "equip",
        "name": "器材选择",
        "max": 10,
        "dim": "skill"
      },
      {
        "key": "assemble",
        "name": "放置发生装置",
        "max": 10,
        "dim": "skill"
      },
      {
        "key": "load",
        "name": "装入大理石",
        "max": 8,
        "dim": "skill"
      },
      {
        "key": "install",
        "name": "安装双孔塞与漏斗",
        "max": 12,
        "dim": "skill"
      },
      {
        "key": "acid",
        "name": "加入稀盐酸",
        "max": 8,
        "dim": "skill"
      },
      {
        "key": "seal",
        "name": "长颈漏斗液封",
        "max": 12,
        "dim": "safety"
      },
      {
        "key": "collect",
        "name": "向上排空气法收集",
        "max": 12,
        "dim": "skill"
      },
      {
        "key": "fullcheck",
        "name": "验满操作",
        "max": 10,
        "dim": "safety"
      },
      {
        "key": "takeout",
        "name": "盖片正放保存",
        "max": 8,
        "dim": "safety"
      },
      {
        "key": "lime",
        "name": "石灰水检验",
        "max": 10,
        "dim": "skill"
      }
    ],
    "initialStage": {
      "flaskPlaced": false,
      "marble": false,
      "stopperOn": false,
      "funnelOn": false,
      "pipeOn": false,
      "pipeOut": false,
      "acid": false,
      "wrongPour": false,
      "gasEscape": false,
      "reacting": false,
      "gas": 0,
      "bottlePlaced": false,
      "glassOn": false,
      "wood": false,
      "woodFire": true,
      "woodOut": false,
      "lime": false
    },
    "dropZones": {
      "flask": {
        "x": 84,
        "y": 226,
        "w": 180,
        "h": 116
      },
      "marble": {
        "x": 110,
        "y": 196,
        "w": 100,
        "h": 118
      },
      "stopper": {
        "x": 116,
        "y": 150,
        "w": 84,
        "h": 62
      },
      "acidFunnel": {
        "x": 96,
        "y": 92,
        "w": 122,
        "h": 74
      },
      "acidMouth": {
        "x": 118,
        "y": 186,
        "w": 80,
        "h": 54
      },
      "bottle": {
        "x": 350,
        "y": 128,
        "w": 140,
        "h": 186
      },
      "wood": {
        "x": 378,
        "y": 58,
        "w": 104,
        "h": 112
      },
      "glass": {
        "x": 358,
        "y": 108,
        "w": 112,
        "h": 42
      },
      "lime": {
        "x": 356,
        "y": 130,
        "w": 132,
        "h": 172
      }
    },
    "scene": [
      {
        "tag": "rect",
        "x": 40,
        "y": 322,
        "width": 520,
        "height": 15,
        "rx": 5,
        "fill": "url(#gMetal)"
      },
      {
        "tag": "rect",
        "x": 40,
        "y": 322,
        "width": 520,
        "height": 4,
        "rx": 2,
        "fill": "#e8eef2",
        "opacity": 0.75
      },
      {
        "tag": "g",
        "when": "stage.flaskPlaced",
        "children": [
          {
            "tag": "path",
            "d": "M140 175 L172 175 L172 216 L206 298 Q209 308 198 308 L114 308 Q103 308 106 298 L140 216 Z",
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.2
          },
          {
            "tag": "circle",
            "when": "stage.marble",
            "cx": 132,
            "cy": 292,
            "r": 9,
            "fill": "url(#pMarble)",
            "stroke": "#90a4ae",
            "stroke-width": 1
          },
          {
            "tag": "circle",
            "when": "stage.marble",
            "cx": 154,
            "cy": 296,
            "r": 10,
            "fill": "url(#pMarble)",
            "stroke": "#90a4ae",
            "stroke-width": 1
          },
          {
            "tag": "circle",
            "when": "stage.marble",
            "cx": 177,
            "cy": 291,
            "r": 8.5,
            "fill": "url(#pMarble)",
            "stroke": "#90a4ae",
            "stroke-width": 1
          },
          {
            "tag": "circle",
            "when": "stage.marble",
            "cx": 143,
            "cy": 277,
            "r": 7,
            "fill": "url(#pMarble)",
            "stroke": "#90a4ae",
            "stroke-width": 1
          },
          {
            "tag": "circle",
            "when": "stage.marble",
            "cx": 170,
            "cy": 276,
            "r": 6.5,
            "fill": "url(#pMarble)",
            "stroke": "#90a4ae",
            "stroke-width": 1
          },
          {
            "tag": "path",
            "when": "stage.acid",
            "d": "M126 254 L186 254 L206 296 Q209 306 198 306 L114 306 Q103 306 106 296 Z",
            "fill": "url(#gAcid)",
            "opacity": 0.75
          },
          {
            "tag": "g",
            "when": "stage.reacting",
            "children": [
              {
                "tag": "circle",
                "class": "bub",
                "cx": 136,
                "cy": 288,
                "r": 4,
                "fill": "#b2dfdb",
                "opacity": 0.9,
                "style": "animation-delay:0s"
              },
              {
                "tag": "circle",
                "class": "bub",
                "cx": 156,
                "cy": 286,
                "r": 5,
                "fill": "#b2dfdb",
                "opacity": 0.9,
                "style": "animation-delay:.35s"
              },
              {
                "tag": "circle",
                "class": "bub",
                "cx": 176,
                "cy": 289,
                "r": 3.5,
                "fill": "#b2dfdb",
                "opacity": 0.9,
                "style": "animation-delay:.7s"
              },
              {
                "tag": "circle",
                "class": "bub",
                "cx": 146,
                "cy": 280,
                "r": 3.5,
                "fill": "#b2dfdb",
                "opacity": 0.9,
                "style": "animation-delay:1.05s"
              }
            ]
          },
          {
            "tag": "path",
            "d": "M146 180 L146 214 L118 292",
            "stroke": "#ffffff",
            "stroke-width": 2.2,
            "fill": "none",
            "opacity": 0.75
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.funnelOn",
        "children": [
          {
            "tag": "path",
            "d": "M108 116 L204 116 L168 150 L144 150 Z",
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2
          },
          {
            "tag": "rect",
            "x": 149,
            "y": 148,
            "width": 14,
            "height": 114,
            "rx": 2,
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2
          },
          {
            "tag": "path",
            "when": "stage.acid && !stage.wrongPour",
            "d": "M112 120 L200 120 L172 146 L140 146 Z",
            "fill": "url(#gAcid)",
            "opacity": 0.7
          },
          {
            "tag": "rect",
            "when": "stage.acid && !stage.wrongPour",
            "x": 151,
            "y": 150,
            "width": 10,
            "height": 112,
            "fill": "url(#gAcid)",
            "opacity": 0.8
          },
          {
            "tag": "text",
            "when": "stage.acid && !stage.wrongPour",
            "x": 222,
            "y": 268,
            "font-size": 10.5,
            "fill": "#00695c",
            "font-weight": 700,
            "text": "液封 ✓"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.gasEscape",
        "children": [
          {
            "tag": "circle",
            "class": "bub",
            "cx": 148,
            "cy": 108,
            "r": 5,
            "fill": "#b2dfdb",
            "opacity": 0.9,
            "style": "animation-delay:0s"
          },
          {
            "tag": "circle",
            "class": "bub",
            "cx": 170,
            "cy": 104,
            "r": 4,
            "fill": "#b2dfdb",
            "opacity": 0.9,
            "style": "animation-delay:.4s"
          },
          {
            "tag": "circle",
            "class": "bub",
            "cx": 192,
            "cy": 107,
            "r": 4.5,
            "fill": "#b2dfdb",
            "opacity": 0.9,
            "style": "animation-delay:.8s"
          },
          {
            "tag": "text",
            "x": 170,
            "y": 88,
            "font-size": 12,
            "text-anchor": "middle",
            "fill": "#dc2626",
            "font-weight": 700,
            "text": "气体从漏斗逸出！"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.stopperOn",
        "children": [
          {
            "tag": "ellipse",
            "cx": 156,
            "cy": 168,
            "rx": 22,
            "ry": 3.5,
            "fill": "#8d6e63"
          },
          {
            "tag": "path",
            "d": "M134 168 L178 168 L173 193 L139 193 Z",
            "fill": "url(#gRubber)"
          },
          {
            "tag": "circle",
            "cx": 148,
            "cy": 181,
            "r": 3,
            "fill": "#3e2723"
          },
          {
            "tag": "circle",
            "cx": 168,
            "cy": 181,
            "r": 3,
            "fill": "#3e2723"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.pipeOn && !stage.pipeOut",
        "children": [
          {
            "tag": "path",
            "d": "M170 180 Q260 168 330 122 L410 122 L410 288",
            "stroke": "#90a4ae",
            "stroke-width": 7,
            "fill": "none",
            "stroke-linecap": "round"
          },
          {
            "tag": "path",
            "d": "M170 180 Q260 168 330 122 L410 122 L410 288",
            "stroke": "#e0e8ec",
            "stroke-width": 2,
            "fill": "none",
            "stroke-linecap": "round",
            "opacity": 0.7
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.pipeOn && stage.pipeOut",
        "children": [
          {
            "tag": "path",
            "d": "M170 180 Q260 168 330 122 L410 122 L410 158",
            "stroke": "#90a4ae",
            "stroke-width": 7,
            "fill": "none",
            "stroke-linecap": "round"
          },
          {
            "tag": "path",
            "d": "M170 180 Q260 168 330 122 L410 122 L410 158",
            "stroke": "#e0e8ec",
            "stroke-width": 2,
            "fill": "none",
            "stroke-linecap": "round",
            "opacity": 0.7
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.bottlePlaced",
        "children": [
          {
            "tag": "rect",
            "x": 370,
            "y": 150,
            "width": 80,
            "height": 150,
            "rx": 5,
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.5
          },
          {
            "tag": "rect",
            "x": 386,
            "y": 136,
            "width": 48,
            "height": 16,
            "rx": 3,
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.5
          },
          {
            "tag": "rect",
            "x": 380,
            "y": 129,
            "width": 60,
            "height": 8,
            "rx": 3,
            "fill": "url(#gGlassH)",
            "stroke": "#7ba7c7",
            "stroke-width": 1.5
          },
          {
            "tag": "rect",
            "when": "stage.gas>0",
            "class": "cloudy",
            "x": 373,
            "y": "@ 298 - 138*stage.gas/100",
            "width": 74,
            "height": "@ 138*stage.gas/100",
            "fill": "#e0f7fa",
            "opacity": 0.6
          },
          {
            "tag": "text",
            "when": "stage.gas>=100",
            "x": 410,
            "y": 246,
            "font-size": 12,
            "text-anchor": "middle",
            "fill": "#00838f",
            "font-weight": 700,
            "text": "CO₂"
          },
          {
            "tag": "rect",
            "when": "stage.lime",
            "class": "cloudy",
            "x": 373,
            "y": 226,
            "width": 74,
            "height": 72,
            "fill": "#fafafa",
            "opacity": 0.8
          },
          {
            "tag": "text",
            "when": "stage.lime",
            "x": 410,
            "y": 266,
            "font-size": 11.5,
            "text-anchor": "middle",
            "fill": "#616161",
            "font-weight": 700,
            "text": "变浑浊"
          }
        ]
      },
      {
        "tag": "rect",
        "when": "stage.glassOn",
        "x": 376,
        "y": 120,
        "width": 68,
        "height": 10,
        "rx": 3,
        "fill": "url(#gGlassH)",
        "stroke": "#4fc3f7",
        "stroke-width": 1.5
      },
      {
        "tag": "g",
        "when": "stage.wood",
        "children": [
          {
            "tag": "rect",
            "x": 404,
            "y": 70,
            "width": 9,
            "height": 62,
            "rx": 3,
            "fill": "url(#gWood)"
          },
          {
            "tag": "g",
            "when": "stage.woodFire",
            "class": "flame",
            "children": [
              {
                "tag": "ellipse",
                "cx": 408,
                "cy": 62,
                "rx": 7,
                "ry": 11,
                "fill": "url(#gFlameOut)"
              },
              {
                "tag": "ellipse",
                "cx": 408,
                "cy": 66,
                "rx": 3.5,
                "ry": 6,
                "fill": "#fff59d"
              }
            ]
          },
          {
            "tag": "text",
            "when": "stage.woodOut",
            "x": 452,
            "y": 96,
            "font-size": 12,
            "text-anchor": "middle",
            "fill": "#dc2626",
            "font-weight": 700,
            "text": "木条熄灭 → 已满"
          }
        ]
      }
    ],
    "report": [
      {
        "title": "实验记录",
        "lines": [
          "实验名称：实验室制取二氧化碳",
          "实验原理：CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑",
          "发生装置：固液常温型（锥形瓶 + 长颈漏斗）",
          "收集方法：向上排空气法",
          "检验方法：通入澄清石灰水，变浑浊"
        ]
      },
      {
        "title": "现象记录",
        "lines": [
          "1. 大理石表面产生大量气泡",
          "2. 大理石逐渐溶解变小",
          "3. 集气瓶中气体使燃着木条熄灭",
          "4. 加入澄清石灰水振荡后变浑浊"
        ]
      },
      {
        "title": "实验结论",
        "lines": [
          "碳酸盐与稀盐酸反应生成二氧化碳。",
          "二氧化碳密度比空气大、不支持燃烧，能使澄清石灰水变浑浊。"
        ]
      }
    ],
    "errorTable": [
      {
        "op": "用排水法收集",
        "phen": "CO₂ 能溶于水",
        "result": "收集不到气体",
        "score": 12
      },
      {
        "op": "长颈漏斗下端未伸入液面下",
        "phen": "未形成液封",
        "result": "气体从漏斗逸出",
        "score": 12
      },
      {
        "op": "燃着木条伸入瓶内验满",
        "phen": "判断不准",
        "result": "无法确认是否集满",
        "score": 10
      },
      {
        "op": "集气瓶倒放保存",
        "phen": "气体下沉逸出",
        "result": "收集到的气体跑掉",
        "score": 8
      },
      {
        "op": "用燃着木条代替石灰水检验",
        "phen": "氮气也能灭火",
        "result": "结论不可靠",
        "score": 10
      },
      {
        "op": "误用酒精灯加热",
        "phen": "装置不匹配",
        "result": "器材选择错误",
        "score": 10
      }
    ],
    "steps": [
      {
        "id": "cover",
        "type": "cover",
        "title": "准备开始",
        "progress": 0,
        "headline": "实验室制取二氧化碳",
        "subtitle": "初中化学虚拟实验 · 固液常温型装置",
        "buttons": [
          {
            "t": "开始实验",
            "c": "primary",
            "goto": "goal"
          }
        ]
      },
      {
        "id": "goal",
        "type": "doc",
        "title": "实验目标",
        "progress": 5,
        "cols": [
          {
            "title": "实验目标",
            "lines": [
              "1. 掌握固液常温型发生装置的组装",
              "2. 理解长颈漏斗为什么要液封",
              "3. 学会向上排空气法收集气体",
              "4. 学会验满与澄清石灰水检验",
              "5. 对比排水法与排空气法的适用条件"
            ]
          },
          {
            "title": "操作方式",
            "lines": [
              "● 拖拽器材：从左侧器材架拖到实验台",
              "● 高亮区域就是本步该放的位置",
              "● 右侧显示当前实验阶段",
              "● 遇到困难点击右下角“？”获取提示"
            ]
          },
          {
            "title": "安全提示",
            "lines": [
              "⚠ 本实验不需要加热（对比制氧气）",
              "⚠ 长颈漏斗下端必须伸入液面以下",
              "⚠ 二氧化碳密度比空气大，集气瓶要正放",
              "⚠ 验满时木条放在瓶口，不要伸入瓶内"
            ]
          }
        ],
        "buttons": [
          {
            "t": "下一步",
            "c": "primary",
            "goto": "equip"
          },
          {
            "t": "返回封面",
            "c": "ghost",
            "goto": "cover"
          }
        ]
      },
      {
        "id": "equip",
        "type": "equip",
        "title": "选择实验器材",
        "progress": 10,
        "tip": "这是固液常温型反应，不需要加热；CO₂ 能溶于水，想一想该用什么方法收集",
        "buttons": [
          {
            "t": "确认器材",
            "c": "primary",
            "do": [
              {
                "do": "checkEquip",
                "key": "equip",
                "goto": "assemble"
              }
            ]
          }
        ]
      },
      {
        "id": "assemble",
        "type": "stage",
        "title": "放置发生装置",
        "progress": 18,
        "shelf": [
          "flask"
        ],
        "desc": "先把反应容器放到桌面上，作为整套装置的主体。",
        "help": "把锥形瓶拖到桌面左侧的高亮区域。想一想：锥形瓶比试管的优势是什么？",
        "zones": [
          "flask"
        ],
        "drop": [
          {
            "equip": "flask",
            "zone": "flask",
            "do": [
              {
                "do": "set",
                "k": "flaskPlaced",
                "v": true
              },
              {
                "do": "score",
                "key": "assemble"
              },
              {
                "do": "tip",
                "text": "锥形瓶已放好 ✓"
              },
              {
                "do": "goto",
                "id": "load",
                "delay": 800
              }
            ]
          },
          {
            "equip": "flask",
            "do": [
              {
                "do": "err",
                "text": "锥形瓶要放在平整的桌面上，拖到高亮区域。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步先放反应容器。想一想：固体和液体在哪里反应？"
              }
            ]
          }
        ]
      },
      {
        "id": "load",
        "type": "stage",
        "title": "装入大理石",
        "progress": 26,
        "shelf": [
          "marble"
        ],
        "desc": "先把固体药品加入锥形瓶，再加液体。",
        "help": "把大理石拖到锥形瓶口。加固体时要把容器横放、用镊子夹住慢慢滑到瓶底。",
        "zones": [
          "marble"
        ],
        "drop": [
          {
            "equip": "marble",
            "zone": "marble",
            "do": [
              {
                "do": "set",
                "k": "marble",
                "v": true
              },
              {
                "do": "score",
                "key": "load"
              },
              {
                "do": "tip",
                "text": "大理石已加入锥形瓶 ✓"
              },
              {
                "do": "goto",
                "id": "install",
                "delay": 900
              }
            ]
          },
          {
            "equip": "marble",
            "do": [
              {
                "do": "err",
                "text": "大理石要从锥形瓶口加入，注意不要砸破瓶底。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步需要加的是固体药品。"
              }
            ]
          }
        ]
      },
      {
        "id": "install",
        "type": "stage",
        "title": "组装双孔塞、漏斗与导管",
        "progress": 36,
        "shelf": [
          "stopper2",
          "funnel2",
          "pipe"
        ],
        "desc": "三件都要装好：双孔塞、长颈漏斗、导气管。漏斗下端要伸到液面以下。",
        "help": "依次把双孔橡皮塞、长颈漏斗、导气管拖到锥形瓶口。长颈漏斗下端必须伸入液面以下，才能形成液封。",
        "zones": [
          "stopper"
        ],
        "drop": [
          {
            "equip": "stopper2",
            "zone": "stopper",
            "do": [
              {
                "do": "set",
                "k": "stopperOn",
                "v": true
              },
              {
                "do": "tip",
                "text": "双孔橡皮塞已塞紧 ✓"
              },
              {
                "do": "if",
                "cond": "stage.stopperOn && stage.funnelOn && stage.pipeOn",
                "then": [
                  {
                    "do": "score",
                    "key": "install"
                  },
                  {
                    "do": "goto",
                    "id": "acid",
                    "delay": 1000
                  }
                ]
              }
            ]
          },
          {
            "equip": "funnel2",
            "zone": "stopper",
            "do": [
              {
                "do": "set",
                "k": "funnelOn",
                "v": true
              },
              {
                "do": "tip",
                "text": "长颈漏斗已插入，下端伸到液面以下 ✓"
              },
              {
                "do": "if",
                "cond": "stage.stopperOn && stage.funnelOn && stage.pipeOn",
                "then": [
                  {
                    "do": "score",
                    "key": "install"
                  },
                  {
                    "do": "goto",
                    "id": "acid",
                    "delay": 1000
                  }
                ]
              }
            ]
          },
          {
            "equip": "pipe",
            "zone": "stopper",
            "do": [
              {
                "do": "set",
                "k": "pipeOn",
                "v": true
              },
              {
                "do": "tip",
                "text": "导气管已接在另一个孔上 ✓"
              },
              {
                "do": "if",
                "cond": "stage.stopperOn && stage.funnelOn && stage.pipeOn",
                "then": [
                  {
                    "do": "score",
                    "key": "install"
                  },
                  {
                    "do": "goto",
                    "id": "acid",
                    "delay": 1000
                  }
                ]
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "要往瓶口上方的高亮区域放。塞子、长颈漏斗、导气管三件都要装好。"
              }
            ]
          }
        ]
      },
      {
        "id": "acid",
        "type": "stage",
        "title": "加入稀盐酸",
        "progress": 48,
        "shelf": [
          "acid"
        ],
        "desc": "稀盐酸要从长颈漏斗加入，让漏斗下端被液体封住。",
        "help": "把稀盐酸拖到长颈漏斗口上。想一想：如果直接从瓶口倒进去，漏斗下端没被液体封住会怎么样？",
        "zones": [
          "acidFunnel",
          "acidMouth"
        ],
        "drop": [
          {
            "equip": "acid",
            "zone": "acidFunnel",
            "do": [
              {
                "do": "set",
                "k": "acid",
                "v": true
              },
              {
                "do": "set",
                "k": "reacting",
                "v": true
              },
              {
                "do": "score",
                "key": "acid"
              },
              {
                "do": "score",
                "key": "seal"
              },
              {
                "do": "tip",
                "text": "稀盐酸已加入，漏斗下端形成液封，气体只能从导管走 ✓"
              },
              {
                "do": "goto",
                "id": "collect",
                "delay": 1400
              }
            ]
          },
          {
            "equip": "acid",
            "zone": "acidMouth",
            "do": [
              {
                "do": "set",
                "k": "acid",
                "v": true
              },
              {
                "do": "set",
                "k": "wrongPour",
                "v": true
              },
              {
                "do": "set",
                "k": "gasEscape",
                "v": true
              },
              {
                "do": "set",
                "k": "reacting",
                "v": true
              },
              {
                "do": "score",
                "key": "acid"
              },
              {
                "do": "err",
                "text": "直接从瓶口倒入，长颈漏斗下端没有形成液封，生成的二氧化碳会从漏斗口跑掉！"
              },
              {
                "do": "goto",
                "id": "collect",
                "delay": 3800
              }
            ]
          },
          {
            "equip": "acid",
            "do": [
              {
                "do": "err",
                "text": "稀盐酸要从长颈漏斗加入，或者直接从瓶口加入（想一想哪种才对）。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步需要加入的是液体药品。"
              }
            ]
          }
        ]
      },
      {
        "id": "collect",
        "type": "stage",
        "title": "向上排空气法收集",
        "progress": 60,
        "shelf": [
          "bottle"
        ],
        "desc": "把集气瓶正放在导管下方，导管要伸到瓶底，才能把空气排干净。",
        "help": "把集气瓶拖到右侧高亮区域，正放在桌面上，让导管伸到瓶底。想一想：为什么二氧化碳用向上排空气法？",
        "zones": [
          "bottle"
        ],
        "drop": [
          {
            "equip": "bottle",
            "zone": "bottle",
            "do": [
              {
                "do": "set",
                "k": "bottlePlaced",
                "v": true
              },
              {
                "do": "tip",
                "text": "开始收集，二氧化碳沉在瓶底，空气被向上排出"
              },
              {
                "do": "set",
                "k": "gas",
                "v": 35,
                "delay": 700
              },
              {
                "do": "set",
                "k": "gas",
                "v": 70,
                "delay": 1500
              },
              {
                "do": "set",
                "k": "gas",
                "v": 100,
                "delay": 2300
              },
              {
                "do": "score",
                "key": "collect",
                "delay": 2400
              },
              {
                "do": "tip",
                "text": "集气瓶已基本收集满，可以验满了",
                "delay": 2500
              },
              {
                "do": "goto",
                "id": "fullcheck",
                "delay": 3400
              }
            ]
          },
          {
            "equip": "bottle",
            "do": [
              {
                "do": "err",
                "text": "集气瓶要正放在导管正下方。想一想：二氧化碳密度比空气大，瓶口应该朝上还是朝下？"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步需要用集气瓶收集气体。"
              }
            ]
          }
        ]
      },
      {
        "id": "fullcheck",
        "type": "stage",
        "title": "检验是否集满",
        "progress": 70,
        "shelf": [
          "match"
        ],
        "desc": "把燃着的木条放在集气瓶口（不要伸进去），看它是否熄灭。",
        "help": "把燃着的木条放到集气瓶口正上方。注意：验满是放在瓶口，不是伸进瓶里。",
        "zones": [
          "wood"
        ],
        "drop": [
          {
            "equip": "match",
            "zone": "wood",
            "do": [
              {
                "do": "set",
                "k": "wood",
                "v": true
              },
              {
                "do": "set",
                "k": "woodFire",
                "v": false,
                "delay": 900
              },
              {
                "do": "set",
                "k": "woodOut",
                "v": true,
                "delay": 900
              },
              {
                "do": "score",
                "key": "fullcheck"
              },
              {
                "do": "tip",
                "text": "木条熄灭，说明二氧化碳已收集满 ✓"
              },
              {
                "do": "goto",
                "id": "takeout",
                "delay": 2100
              }
            ]
          },
          {
            "equip": "match",
            "do": [
              {
                "do": "err",
                "text": "木条要放在集气瓶口的位置，不能伸进瓶内。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步用燃着的木条验满。"
              }
            ]
          }
        ]
      },
      {
        "id": "takeout",
        "type": "stage",
        "title": "取出并保存集气瓶",
        "progress": 80,
        "shelf": [
          "glass"
        ],
        "desc": "先把导管移出，再用玻璃片盖住瓶口，正放在桌面上。",
        "help": "把玻璃片拖到集气瓶口。想一想：二氧化碳密度比空气大，盖好后应该正放还是倒放？",
        "zones": [
          "glass"
        ],
        "drop": [
          {
            "equip": "glass",
            "zone": "glass",
            "do": [
              {
                "do": "set",
                "k": "pipeOut",
                "v": true
              },
              {
                "do": "set",
                "k": "glassOn",
                "v": true
              },
              {
                "do": "score",
                "key": "takeout"
              },
              {
                "do": "tip",
                "text": "导管已取出、玻璃片盖好，集气瓶正放保存 ✓"
              },
              {
                "do": "goto",
                "id": "lime",
                "delay": 1200
              }
            ]
          },
          {
            "equip": "glass",
            "do": [
              {
                "do": "err",
                "text": "玻璃片要盖在集气瓶口上。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步需要用玻璃片盖住集气瓶。"
              }
            ]
          }
        ]
      },
      {
        "id": "lime",
        "type": "stage",
        "title": "检验二氧化碳",
        "progress": 90,
        "shelf": [
          "limewater"
        ],
        "desc": "向集气瓶中倒入少量澄清石灰水，振荡后观察是否变浑浊。",
        "help": "把澄清石灰水拖到集气瓶上，振荡。想一想：为什么不能用燃着的木条来“检验”二氧化碳？",
        "zones": [
          "lime"
        ],
        "drop": [
          {
            "equip": "limewater",
            "zone": "lime",
            "do": [
              {
                "do": "set",
                "k": "lime",
                "v": true
              },
              {
                "do": "score",
                "key": "lime"
              },
              {
                "do": "tip",
                "text": "澄清石灰水变浑浊，证明是二氧化碳 ✓"
              },
              {
                "do": "goto",
                "id": "report",
                "delay": 1400
              }
            ]
          },
          {
            "equip": "limewater",
            "do": [
              {
                "do": "err",
                "text": "石灰水要倒进集气瓶里。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步用澄清石灰水检验气体。"
              }
            ]
          }
        ]
      },
      {
        "id": "report",
        "type": "report",
        "title": "实验报告",
        "progress": 96,
        "buttons": [
          {
            "t": "提交报告",
            "c": "primary",
            "do": [
              {
                "do": "finish"
              },
              {
                "do": "goto",
                "id": "score"
              }
            ]
          }
        ]
      },
      {
        "id": "score",
        "type": "score",
        "title": "实验评分",
        "progress": 100,
        "buttons": [
          {
            "t": "导出本次成绩",
            "c": "ghost",
            "do": [
              {
                "do": "export"
              }
            ]
          },
          {
            "t": "查看常见错误",
            "c": "ghost",
            "goto": "errtable"
          },
          {
            "t": "重做实验",
            "c": "primary",
            "do": [
              {
                "do": "reset"
              }
            ]
          }
        ]
      },
      {
        "id": "errtable",
        "type": "errors",
        "title": "常见错误与后果",
        "progress": 100,
        "buttons": [
          {
            "t": "返回评分",
            "c": "ghost",
            "goto": "score"
          },
          {
            "t": "重做实验",
            "c": "primary",
            "do": [
              {
                "do": "reset"
              }
            ]
          }
        ]
      }
    ]
  },
  "exp_h2": {
    "id": "h2",
    "title": "实验室制取氢气",
    "subtitle": "初中化学虚拟实验 · 固液常温型 + 验纯",
    "badges": [
      "锌粒 + 稀硫酸",
      "点燃前必须验纯",
      "满分 100 分"
    ],
    "viewBox": "0 0 600 360",
    "equipments": [
      {
        "id": "tube",
        "name": "试管",
        "need": true
      },
      {
        "id": "zinc",
        "name": "锌粒",
        "need": true
      },
      {
        "id": "h2so4",
        "name": "稀硫酸",
        "need": true
      },
      {
        "id": "stopper",
        "name": "单孔橡皮塞",
        "need": true
      },
      {
        "id": "pipe",
        "name": "导管",
        "need": true
      },
      {
        "id": "bottle",
        "name": "集气瓶",
        "need": true
      },
      {
        "id": "match",
        "name": "火柴",
        "need": true
      },
      {
        "id": "beaker",
        "name": "干冷烧杯",
        "need": true
      },
      {
        "id": "lamp",
        "name": "酒精灯",
        "need": true
      },
      {
        "id": "glass",
        "name": "玻璃片",
        "need": true
      },
      {
        "id": "acid",
        "name": "稀盐酸",
        "need": false
      },
      {
        "id": "stand",
        "name": "铁架台",
        "need": false
      },
      {
        "id": "basin",
        "name": "水槽",
        "need": false
      },
      {
        "id": "kmno4",
        "name": "高锰酸钾",
        "need": false
      },
      {
        "id": "limewater",
        "name": "澄清石灰水",
        "need": false
      }
    ],
    "dims": [
      {
        "key": "skill",
        "name": "操作规范"
      },
      {
        "key": "safety",
        "name": "安全意识"
      }
    ],
    "scoreItems": [
      {
        "key": "equip",
        "name": "器材选择",
        "max": 10,
        "dim": "skill"
      },
      {
        "key": "assemble",
        "name": "放置发生装置",
        "max": 8,
        "dim": "skill"
      },
      {
        "key": "load",
        "name": "装入锌粒",
        "max": 8,
        "dim": "skill"
      },
      {
        "key": "install",
        "name": "组装单孔塞与导管",
        "max": 10,
        "dim": "skill"
      },
      {
        "key": "seal",
        "name": "检查装置气密性",
        "max": 8,
        "dim": "safety"
      },
      {
        "key": "pour",
        "name": "加入稀硫酸",
        "max": 10,
        "dim": "skill"
      },
      {
        "key": "method",
        "name": "选择收集方法",
        "max": 8,
        "dim": "skill"
      },
      {
        "key": "collect",
        "name": "收集一整瓶氢气",
        "max": 12,
        "dim": "skill"
      },
      {
        "key": "purify",
        "name": "点燃前先验纯",
        "max": 10,
        "dim": "safety"
      },
      {
        "key": "ignite",
        "name": "点燃氢气观察火焰",
        "max": 8,
        "dim": "safety"
      },
      {
        "key": "water",
        "name": "烧杯检验生成的水",
        "max": 8,
        "dim": "skill"
      }
    ],
    "initialStage": {
      "tubePlaced": false,
      "zincIn": false,
      "stopperOn": false,
      "pipeOn": false,
      "acidIn": false,
      "reacting": false,
      "bottleOn": false,
      "gas": 0,
      "lampOn": false,
      "sampling": false,
      "boom": false,
      "ignited": false,
      "beakerOn": false
    },
    "dropZones": {
      "tube": {
        "x": 120,
        "y": 106,
        "w": 120,
        "h": 210
      },
      "zinc": {
        "x": 148,
        "y": 200,
        "w": 60,
        "h": 104
      },
      "stopper": {
        "x": 146,
        "y": 96,
        "w": 62,
        "h": 54
      },
      "mouthTube": {
        "x": 148,
        "y": 150,
        "w": 60,
        "h": 110
      },
      "bottle": {
        "x": 386,
        "y": 96,
        "w": 112,
        "h": 190
      },
      "ignite": {
        "x": 494,
        "y": 216,
        "w": 68,
        "h": 64
      },
      "beakerZone": {
        "x": 486,
        "y": 140,
        "w": 80,
        "h": 104
      }
    },
    "scene": [
      {
        "tag": "rect",
        "x": 40,
        "y": 322,
        "width": 520,
        "height": 15,
        "rx": 5,
        "fill": "url(#gMetal)"
      },
      {
        "tag": "rect",
        "x": 40,
        "y": 322,
        "width": 520,
        "height": 4,
        "rx": 2,
        "fill": "#e8eef2",
        "opacity": 0.75
      },
      {
        "tag": "g",
        "when": "stage.tubePlaced",
        "children": [
          {
            "tag": "path",
            "d": "M144 294 L206 294 L212 318 L138 318 Z",
            "fill": "url(#gMetalV)"
          },
          {
            "tag": "rect",
            "x": 152,
            "y": 112,
            "width": 46,
            "height": 190,
            "rx": 22,
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.2
          },
          {
            "tag": "rect",
            "x": 157,
            "y": 122,
            "width": 8,
            "height": 168,
            "rx": 4,
            "fill": "#ffffff",
            "opacity": 0.7
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.zincIn",
        "children": [
          {
            "tag": "circle",
            "cx": 166,
            "cy": 288,
            "r": 6,
            "fill": "#90a4ae",
            "stroke": "#546e7a",
            "stroke-width": 1
          },
          {
            "tag": "circle",
            "cx": 184,
            "cy": 291,
            "r": 5.5,
            "fill": "#b0bec5",
            "stroke": "#546e7a",
            "stroke-width": 1
          },
          {
            "tag": "circle",
            "cx": 174,
            "cy": 273,
            "r": 5,
            "fill": "#90a4ae",
            "stroke": "#546e7a",
            "stroke-width": 1
          },
          {
            "tag": "circle",
            "cx": 188,
            "cy": 277,
            "r": 4.5,
            "fill": "#cfd8dc",
            "stroke": "#546e7a",
            "stroke-width": 1
          },
          {
            "tag": "circle",
            "cx": 165,
            "cy": 262,
            "r": 4.5,
            "fill": "#b0bec5",
            "stroke": "#546e7a",
            "stroke-width": 1
          }
        ]
      },
      {
        "tag": "path",
        "when": "stage.acidIn",
        "d": "M154 206 L196 206 L196 278 Q196 296 175 296 Q154 296 154 278 Z",
        "fill": "url(#gAcid)",
        "opacity": 0.75
      },
      {
        "tag": "g",
        "when": "stage.reacting",
        "children": [
          {
            "tag": "circle",
            "class": "bub",
            "cx": 168,
            "cy": 286,
            "r": 4,
            "fill": "#ffffff",
            "opacity": 0.9,
            "style": "animation-delay:0s"
          },
          {
            "tag": "circle",
            "class": "bub",
            "cx": 186,
            "cy": 284,
            "r": 4.5,
            "fill": "#ffffff",
            "opacity": 0.9,
            "style": "animation-delay:.35s"
          },
          {
            "tag": "circle",
            "class": "bub",
            "cx": 176,
            "cy": 270,
            "r": 3,
            "fill": "#ffffff",
            "opacity": 0.9,
            "style": "animation-delay:.7s"
          },
          {
            "tag": "circle",
            "class": "bub",
            "cx": 164,
            "cy": 258,
            "r": 3.5,
            "fill": "#ffffff",
            "opacity": 0.9,
            "style": "animation-delay:1.05s"
          },
          {
            "tag": "text",
            "x": 175,
            "y": 344,
            "font-size": 10.5,
            "text-anchor": "middle",
            "fill": "#33691e",
            "font-weight": 700,
            "text": "锌粒表面产生大量气泡"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.stopperOn",
        "children": [
          {
            "tag": "ellipse",
            "cx": 175,
            "cy": 112,
            "rx": 20,
            "ry": 4,
            "fill": "#8d6e63"
          },
          {
            "tag": "path",
            "d": "M157 112 L193 112 L189 134 L161 134 Z",
            "fill": "url(#gRubber)"
          },
          {
            "tag": "circle",
            "cx": 175,
            "cy": 122,
            "r": 3,
            "fill": "#3e2723"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.pipeOn",
        "children": [
          {
            "tag": "path",
            "d": "M175 122 Q250 108 292 152 L292 262 Q292 278 310 278 L414 278 L414 238",
            "stroke": "#90a4ae",
            "stroke-width": 7,
            "fill": "none",
            "stroke-linecap": "round"
          },
          {
            "tag": "path",
            "d": "M175 122 Q250 108 292 152 L292 262 Q292 278 310 278 L414 278 L414 238",
            "stroke": "#e0e8ec",
            "stroke-width": 2,
            "fill": "none",
            "stroke-linecap": "round",
            "opacity": 0.7
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.bottleOn",
        "children": [
          {
            "tag": "rect",
            "x": 370,
            "y": 110,
            "width": 86,
            "height": 142,
            "rx": 6,
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.2
          },
          {
            "tag": "rect",
            "x": 392,
            "y": 250,
            "width": 42,
            "height": 22,
            "rx": 3,
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.2
          },
          {
            "tag": "rect",
            "x": 372,
            "y": 112,
            "width": 82,
            "height": "@ 138*stage.gas/100",
            "fill": "#dfe3ee",
            "opacity": 0.6
          },
          {
            "tag": "text",
            "when": "stage.gas>=100",
            "x": 413,
            "y": 186,
            "font-size": 14,
            "text-anchor": "middle",
            "fill": "#3949ab",
            "font-weight": 700,
            "text": "H₂"
          },
          {
            "tag": "text",
            "x": 413,
            "y": 306,
            "font-size": 11,
            "text-anchor": "middle",
            "fill": "#0277bd",
            "text": "向下排空气法 · 瓶口朝下"
          },
          {
            "tag": "g",
            "when": "stage.reacting && stage.gas<100",
            "children": [
              {
                "tag": "circle",
                "class": "bub",
                "cx": 414,
                "cy": 250,
                "r": 4,
                "fill": "#ffffff",
                "opacity": 0.85,
                "style": "animation-delay:0s"
              },
              {
                "tag": "circle",
                "class": "bub",
                "cx": 406,
                "cy": 254,
                "r": 3,
                "fill": "#ffffff",
                "opacity": 0.85,
                "style": "animation-delay:.5s"
              }
            ]
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.lampOn",
        "children": [
          {
            "tag": "rect",
            "x": 500,
            "y": 276,
            "width": 46,
            "height": 38,
            "rx": 6,
            "fill": "url(#gLamp)"
          },
          {
            "tag": "path",
            "d": "M512 276 L534 276 L530 262 L516 262 Z",
            "fill": "#b0bec5",
            "stroke": "#8494a0",
            "stroke-width": 1
          },
          {
            "tag": "rect",
            "x": 520,
            "y": 254,
            "width": 7,
            "height": 9,
            "rx": 2,
            "fill": "#cfd8dc"
          },
          {
            "tag": "g",
            "class": "flame",
            "children": [
              {
                "tag": "ellipse",
                "cx": 523,
                "cy": 242,
                "rx": 8,
                "ry": 14,
                "fill": "url(#gFlameOut)"
              },
              {
                "tag": "ellipse",
                "cx": 523,
                "cy": 246,
                "rx": 3.5,
                "ry": 6.5,
                "fill": "#fff59d"
              }
            ]
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.sampling && !stage.beakerOn",
        "children": [
          {
            "tag": "rect",
            "x": 505,
            "y": 152,
            "width": 34,
            "height": 96,
            "rx": 16,
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.2
          },
          {
            "tag": "rect",
            "x": 510,
            "y": 158,
            "width": 24,
            "height": 84,
            "rx": 12,
            "fill": "#dfe3ee",
            "opacity": 0.6
          },
          {
            "tag": "text",
            "x": 522,
            "y": 206,
            "font-size": 9.5,
            "text-anchor": "middle",
            "fill": "#3949ab",
            "font-weight": 700,
            "text": "H₂"
          },
          {
            "tag": "text",
            "x": 522,
            "y": 142,
            "font-size": 10.5,
            "text-anchor": "middle",
            "fill": "#3949ab",
            "font-weight": 700,
            "text": "一小试管 H₂"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.ignited",
        "children": [
          {
            "tag": "ellipse",
            "class": "flame",
            "cx": 522,
            "cy": 228,
            "rx": 9,
            "ry": 15,
            "fill": "#7ec8ff",
            "opacity": 0.9
          },
          {
            "tag": "ellipse",
            "class": "flame",
            "cx": 522,
            "cy": 232,
            "rx": 4,
            "ry": 7,
            "fill": "#e3f6ff"
          },
          {
            "tag": "text",
            "when": "!stage.beakerOn",
            "x": 522,
            "y": 346,
            "font-size": 12,
            "text-anchor": "middle",
            "fill": "#0288d1",
            "font-weight": 700,
            "text": "淡蓝色火焰"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.boom",
        "class": "shake",
        "children": [
          {
            "tag": "text",
            "x": 452,
            "y": 92,
            "font-size": 13,
            "text-anchor": "middle",
            "fill": "#dc2626",
            "font-weight": 700,
            "text": "锐利的爆鸣声！氢气不纯"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.beakerOn",
        "children": [
          {
            "tag": "path",
            "d": "M496 150 L496 226 Q496 236 506 236 L546 236 Q556 236 556 226 L556 150 Z",
            "fill": "url(#gGlass)",
            "opacity": 0.42,
            "stroke": "#7ba7c7",
            "stroke-width": 2
          },
          {
            "tag": "circle",
            "cx": 510,
            "cy": 206,
            "r": 3.2,
            "fill": "#81d4fa",
            "opacity": 0.9
          },
          {
            "tag": "circle",
            "cx": 524,
            "cy": 214,
            "r": 2.6,
            "fill": "#81d4fa",
            "opacity": 0.9
          },
          {
            "tag": "circle",
            "cx": 540,
            "cy": 204,
            "r": 2.9,
            "fill": "#81d4fa",
            "opacity": 0.9
          },
          {
            "tag": "text",
            "x": 430,
            "y": 346,
            "font-size": 11.5,
            "text-anchor": "middle",
            "fill": "#0288d1",
            "font-weight": 700,
            "text": "淡蓝色火焰 · 烧杯内壁出现水雾 → 生成水"
          }
        ]
      }
    ],
    "report": [
      {
        "title": "实验记录",
        "lines": [
          "实验名称：锌粒与稀硫酸反应制取氢气",
          "反应原理：Zn + H₂SO₄ → ZnSO₄ + H₂↑",
          "发生装置：固液常温型（试管 + 单孔塞 + 导管）",
          "收集方法：向下排空气法（或排水法）",
          "检验方法：点燃，淡蓝色火焰；火焰上方罩干冷烧杯，内壁有水雾"
        ]
      },
      {
        "title": "现象记录",
        "lines": [
          "1. 锌粒表面产生大量气泡，锌粒逐渐溶解",
          "2. 验纯时听到轻微的“噗”声，说明氢气已纯净",
          "3. 点燃纯净氢气，产生淡蓝色火焰",
          "4. 火焰上方罩干冷烧杯，内壁出现水雾"
        ]
      },
      {
        "title": "实验结论",
        "lines": [
          "活泼金属（锌）与稀硫酸发生置换反应生成氢气。",
          "氢气密度比空气小，可用向下排空气法收集；难溶于水，也可用排水法。",
          "氢气具有可燃性，点燃前必须验纯，否则会发生爆炸。"
        ]
      }
    ],
    "errorTable": [
      {
        "op": "用向上排空气法收集",
        "phen": "氢气比空气轻",
        "result": "气体向上逸散，收集不到",
        "score": 12
      },
      {
        "op": "未验纯直接点燃",
        "phen": "混有空气或氧气",
        "result": "爆鸣甚至爆炸",
        "score": 10
      },
      {
        "op": "听验纯时正对试管口",
        "phen": "危险操作",
        "result": "可能被灼伤",
        "score": 8
      },
      {
        "op": "用稀盐酸代替稀硫酸",
        "phen": "盐酸有挥发性",
        "result": "制得的氢气混有HCl气体",
        "score": 8
      },
      {
        "op": "未检查装置气密性",
        "phen": "装置漏气",
        "result": "收集不到足量气体",
        "score": 8
      },
      {
        "op": "收集满后正放保存",
        "phen": "氢气向上逸出",
        "result": "气体很快跑光",
        "score": 8
      },
      {
        "op": "点燃后立刻用湿烧杯罩",
        "phen": "烧杯不干燥",
        "result": "无法证明生成的是水",
        "score": 8
      }
    ],
    "steps": [
      {
        "id": "cover",
        "type": "cover",
        "title": "准备开始",
        "progress": 0,
        "headline": "实验室制取氢气",
        "subtitle": "初中化学虚拟实验 · 固液常温型 + 验纯",
        "buttons": [
          {
            "t": "开始实验",
            "c": "primary",
            "goto": "goal"
          }
        ]
      },
      {
        "id": "goal",
        "type": "doc",
        "title": "实验目标",
        "progress": 5,
        "cols": [
          {
            "title": "实验目标",
            "lines": [
              "1. 学会锌粒与稀硫酸反应制取氢气的操作",
              "2. 理解为什么用向下排空气法收集氢气",
              "3. 掌握「点燃前必须验纯」这条安全底线",
              "4. 学会用干冷烧杯检验氢气燃烧的产物",
              "5. 与制氧、制二氧化碳三个实验形成完整对比"
            ]
          },
          {
            "title": "操作方式",
            "lines": [
              "● 拖拽器材：从左侧器材架拖到实验台",
              "● 有些步骤需要判断，选一个按钮继续",
              "● 右侧显示当前实验阶段",
              "● 卡住时点右下角“？”获取提示"
            ]
          },
          {
            "title": "安全提示",
            "lines": [
              "⚠ 氢气是可燃性气体，点燃前必须验纯！",
              "⚠ 验纯时试管口要朝下，远离面部",
              "⚠ 听到尖锐爆鸣声说明不纯，要重新收集",
              "⚠ 本实验不用加热、不用棉花"
            ]
          }
        ],
        "buttons": [
          {
            "t": "下一步",
            "c": "primary",
            "goto": "equip"
          },
          {
            "t": "返回封面",
            "c": "ghost",
            "goto": "cover"
          }
        ]
      },
      {
        "id": "equip",
        "type": "equip",
        "title": "选择实验器材",
        "progress": 10,
        "tip": "固液常温型：锌粒 + 稀硫酸；氢气比空气轻且难溶于水，想一想收集方法和检验方法需要什么",
        "buttons": [
          {
            "t": "确认器材",
            "c": "primary",
            "do": [
              {
                "do": "checkEquip",
                "key": "equip",
                "goto": "assemble"
              }
            ]
          }
        ]
      },
      {
        "id": "assemble",
        "type": "stage",
        "title": "放置发生装置",
        "progress": 18,
        "shelf": [
          "tube"
        ],
        "desc": "用试管作反应容器，把它放在桌面左侧。",
        "help": "把试管拖到桌面左侧的高亮区域。这个实验是固液常温型，试管比锥形瓶更常用。",
        "zones": [
          "tube"
        ],
        "drop": [
          {
            "equip": "tube",
            "zone": "tube",
            "do": [
              {
                "do": "set",
                "k": "tubePlaced",
                "v": true
              },
              {
                "do": "score",
                "key": "assemble"
              },
              {
                "do": "tip",
                "text": "试管已放好 ✓"
              },
              {
                "do": "goto",
                "id": "load",
                "delay": 800
              }
            ]
          },
          {
            "equip": "tube",
            "do": [
              {
                "do": "err",
                "text": "试管要放在左侧的高亮区域。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步先放反应容器。"
              }
            ]
          }
        ]
      },
      {
        "id": "load",
        "type": "stage",
        "title": "装入锌粒",
        "progress": 26,
        "shelf": [
          "zinc"
        ],
        "desc": "先把固体药品锌粒加入试管底部。",
        "help": "把锌粒拖到试管中。取用锌粒要用镊子，把试管横放，让锌粒慢慢滑到试管底部，避免打破试管。",
        "zones": [
          "zinc"
        ],
        "drop": [
          {
            "equip": "zinc",
            "zone": "zinc",
            "do": [
              {
                "do": "set",
                "k": "zincIn",
                "v": true
              },
              {
                "do": "score",
                "key": "load"
              },
              {
                "do": "tip",
                "text": "锌粒已加到试管底部 ✓"
              },
              {
                "do": "goto",
                "id": "install",
                "delay": 900
              }
            ]
          },
          {
            "equip": "zinc",
            "do": [
              {
                "do": "err",
                "text": "锌粒要从试管口加入，注意别打破试管底。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步需要加的是固体药品。"
              }
            ]
          }
        ]
      },
      {
        "id": "install",
        "type": "stage",
        "title": "组装单孔塞与导管",
        "progress": 34,
        "shelf": [
          "stopper",
          "pipe"
        ],
        "desc": "装好单孔橡皮塞和导气管，用来把产生的氢气导出。",
        "help": "依次把单孔橡皮塞、导气管拖到试管口。组装时要先把导管用玻璃管与橡皮塞连接好再一起塞进试管。",
        "zones": [
          "stopper"
        ],
        "drop": [
          {
            "equip": "stopper",
            "zone": "stopper",
            "do": [
              {
                "do": "set",
                "k": "stopperOn",
                "v": true
              },
              {
                "do": "tip",
                "text": "单孔橡皮塞已塞紧 ✓"
              },
              {
                "do": "if",
                "cond": "stage.stopperOn && stage.pipeOn",
                "then": [
                  {
                    "do": "score",
                    "key": "install"
                  },
                  {
                    "do": "goto",
                    "id": "seal",
                    "delay": 1000
                  }
                ]
              }
            ]
          },
          {
            "equip": "pipe",
            "zone": "stopper",
            "do": [
              {
                "do": "set",
                "k": "pipeOn",
                "v": true
              },
              {
                "do": "tip",
                "text": "导气管已插进橡皮塞 ✓"
              },
              {
                "do": "if",
                "cond": "stage.stopperOn && stage.pipeOn",
                "then": [
                  {
                    "do": "score",
                    "key": "install"
                  },
                  {
                    "do": "goto",
                    "id": "seal",
                    "delay": 1000
                  }
                ]
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "塞子和导管都要往试管口的高亮区域装。"
              }
            ]
          }
        ]
      },
      {
        "id": "seal",
        "type": "doc",
        "title": "检查装置气密性",
        "progress": 40,
        "cols": [
          {
            "title": "为什么要做",
            "lines": [
              "如果装置漏气，产生的氢气会跑掉，",
              "后面收集一瓶要花很久，还可能把空气混进去。",
              "凡是制取气体的实验，加药品前都要先查气密性。"
            ]
          },
          {
            "title": "怎么做",
            "lines": [
              "把导管一端浸入水中，用手掌紧握试管外壁。",
              "若导管口有气泡冒出，松开手后导管内",
              "形成一段水柱，说明装置气密性良好。"
            ]
          }
        ],
        "buttons": [
          {
            "t": "先检查气密性再继续",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "seal"
              },
              {
                "do": "tip",
                "text": "导管口冒出气泡，松开手后形成水柱 → 气密性良好 ✓"
              },
              {
                "do": "goto",
                "id": "pour",
                "delay": 2000
              }
            ]
          },
          {
            "t": "跳过，直接加药品",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "没检查气密性就加药品：万一漏气，收集到的气体量不足且容易混入空气。"
              },
              {
                "do": "goto",
                "id": "pour",
                "delay": 3600
              }
            ]
          }
        ]
      },
      {
        "id": "pour",
        "type": "stage",
        "title": "加入稀硫酸",
        "progress": 48,
        "shelf": [
          "h2so4"
        ],
        "desc": "向试管中加入适量稀硫酸，让液体浸没锌粒。",
        "help": "把稀硫酸拖到试管口。注意：实验室用稀硫酸而不是稀盐酸，因为盐酸有挥发性会让氢气混有杂质。",
        "zones": [
          "mouthTube"
        ],
        "drop": [
          {
            "equip": "h2so4",
            "zone": "mouthTube",
            "do": [
              {
                "do": "set",
                "k": "acidIn",
                "v": true
              },
              {
                "do": "set",
                "k": "reacting",
                "v": true
              },
              {
                "do": "score",
                "key": "pour"
              },
              {
                "do": "tip",
                "text": "锌粒表面产生大量气泡，反应开始 ✓"
              },
              {
                "do": "goto",
                "id": "method",
                "delay": 2000
              }
            ]
          },
          {
            "equip": "h2so4",
            "do": [
              {
                "do": "err",
                "text": "稀硫酸要沿试管壁缓缓倒入试管中。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要加的是液体药品稀硫酸。"
              }
            ]
          }
        ]
      },
      {
        "id": "method",
        "type": "doc",
        "title": "选择收集方法",
        "progress": 55,
        "cols": [
          {
            "title": "氢气的性质",
            "lines": [
              "密度比空气小（是最轻的气体）",
              "难溶于水、也不与水反应",
              "所以两种收集方法都能用。"
            ]
          },
          {
            "title": "怎么选",
            "lines": [
              "向下排空气法：操作简单，但纯度较低",
              "排水法：收集到的气体更纯",
              "绝对不能选向上排空气法。"
            ]
          }
        ],
        "buttons": [
          {
            "t": "向下排空气法收集",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "method"
              },
              {
                "do": "tip",
                "text": "氢气密度比空气小，瓶口朝下收集的气体会留在瓶内 ✓"
              },
              {
                "do": "goto",
                "id": "collect",
                "delay": 1800
              }
            ]
          },
          {
            "t": "排水法收集",
            "c": "ghost",
            "do": [
              {
                "do": "score",
                "key": "method"
              },
              {
                "do": "tip",
                "text": "排水法也正确，而且收集到的氢气更纯；本实验演示用向下排空气法 ✓"
              },
              {
                "do": "goto",
                "id": "collect",
                "delay": 2200
              }
            ]
          },
          {
            "t": "向上排空气法收集",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "氢气比空气轻，用向上排空气法气体会直接从瓶口向上跑掉，一股也收不到！"
              },
              {
                "do": "goto",
                "id": "collect",
                "delay": 4000
              }
            ]
          }
        ]
      },
      {
        "id": "collect",
        "type": "stage",
        "title": "收集一瓶氢气",
        "progress": 66,
        "shelf": [
          "bottle"
        ],
        "desc": "把集气瓶瓶口朝下，罩在导管上方，氢气上升聚集在瓶底，空气被向下排出。",
        "help": "把集气瓶拖到右侧高亮区域。注意：向下排空气法要求瓶口朝下，导管要伸到瓶底（此时是最上方）。",
        "zones": [
          "bottle"
        ],
        "drop": [
          {
            "equip": "bottle",
            "zone": "bottle",
            "do": [
              {
                "do": "set",
                "k": "bottleOn",
                "v": true
              },
              {
                "do": "tip",
                "text": "氢气上升聚集在瓶内，空气被向下排出"
              },
              {
                "do": "set",
                "k": "gas",
                "v": 30,
                "delay": 700
              },
              {
                "do": "set",
                "k": "gas",
                "v": 65,
                "delay": 1500
              },
              {
                "do": "set",
                "k": "gas",
                "v": 100,
                "delay": 2400
              },
              {
                "do": "score",
                "key": "collect",
                "delay": 2500
              },
              {
                "do": "goto",
                "id": "purify",
                "delay": 3400
              }
            ]
          },
          {
            "equip": "bottle",
            "do": [
              {
                "do": "err",
                "text": "集气瓶要瓶口朝下，罩在导管口的上方。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要用集气瓶收集氢气。"
              }
            ]
          }
        ]
      },
      {
        "id": "purify",
        "type": "doc",
        "title": "点燃前必须先验纯",
        "progress": 76,
        "cols": [
          {
            "title": "为什么",
            "lines": [
              "氢气混有空气或氧气时点燃，会剧烈燃烧，",
              "在有限空间内瞬间放热，就会发生爆炸。",
              "所以任何可燃性气体点燃前都必须验纯。"
            ]
          },
          {
            "title": "怎么做",
            "lines": [
              "用排水法或向下排空气法收集一小试管氢气，",
              "用拇指堵住管口（管口始终朝下），",
              "移近酒精灯火焰后松开拇指听声音。"
            ]
          }
        ],
        "buttons": [
          {
            "t": "先收集一小试管验纯",
            "c": "primary",
            "do": [
              {
                "do": "set",
                "k": "lampOn",
                "v": true
              },
              {
                "do": "set",
                "k": "sampling",
                "v": true
              },
              {
                "do": "score",
                "key": "purify"
              },
              {
                "do": "tip",
                "text": "听到轻微的“噗”声 → 氢气已纯净，可以点燃 ✓"
              },
              {
                "do": "goto",
                "id": "ignite",
                "delay": 2600
              }
            ]
          },
          {
            "t": "直接拿火柴去点燃集气瓶口",
            "c": "ghost",
            "do": [
              {
                "do": "set",
                "k": "lampOn",
                "v": true
              },
              {
                "do": "set",
                "k": "sampling",
                "v": true
              },
              {
                "do": "set",
                "k": "boom",
                "v": true,
                "delay": 900
              },
              {
                "do": "err",
                "text": "没验纯就点燃，很可能听到尖锐爆鸣声甚至炸裂，这是实验室大忌！"
              },
              {
                "do": "goto",
                "id": "ignite",
                "delay": 4600
              }
            ]
          }
        ]
      },
      {
        "id": "ignite",
        "type": "stage",
        "title": "点燃纯净的氢气",
        "progress": 86,
        "shelf": [
          "match"
        ],
        "desc": "把一小试管纯净氢气靠近酒精灯火焰点燃，观察火焰颜色。",
        "help": "把火柴或燃着的小试管拖到高亮区域点燃。氢气燃烧的火焰是淡蓝色。",
        "zones": [
          "ignite"
        ],
        "drop": [
          {
            "equip": "match",
            "zone": "ignite",
            "do": [
              {
                "do": "set",
                "k": "ignited",
                "v": true
              },
              {
                "do": "score",
                "key": "ignite"
              },
              {
                "do": "tip",
                "text": "氢气燃烧产生淡蓝色火焰 ✓ 下一步验证产物"
              },
              {
                "do": "goto",
                "id": "water",
                "delay": 1800
              }
            ]
          },
          {
            "equip": "match",
            "do": [
              {
                "do": "err",
                "text": "要靠近酒精灯火焰的位置点燃。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步需要点燃氢气并观察火焰。"
              }
            ]
          }
        ]
      },
      {
        "id": "water",
        "type": "stage",
        "title": "检验燃烧产物",
        "progress": 93,
        "shelf": [
          "beaker"
        ],
        "desc": "把干燥的冷烧杯罩在火焰上方，观察烧杯内壁是否出现水雾。",
        "help": "把干冷烧杯拖到火焰正上方。一定要用干燥的烧杯，湿烧杯无法说明问题。",
        "zones": [
          "beakerZone"
        ],
        "drop": [
          {
            "equip": "beaker",
            "zone": "beakerZone",
            "do": [
              {
                "do": "set",
                "k": "beakerOn",
                "v": true
              },
              {
                "do": "score",
                "key": "water"
              },
              {
                "do": "tip",
                "text": "烧杯内壁出现水雾 → 氢气燃烧生成水 ✓"
              },
              {
                "do": "goto",
                "id": "report",
                "delay": 1800
              }
            ]
          },
          {
            "equip": "beaker",
            "do": [
              {
                "do": "err",
                "text": "烧杯要罩在火焰的正上方。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步用干冷烧杯检验水的生成。"
              }
            ]
          }
        ]
      },
      {
        "id": "report",
        "type": "report",
        "title": "实验报告",
        "progress": 96,
        "buttons": [
          {
            "t": "提交报告",
            "c": "primary",
            "do": [
              {
                "do": "finish"
              },
              {
                "do": "goto",
                "id": "score"
              }
            ]
          }
        ]
      },
      {
        "id": "score",
        "type": "score",
        "title": "实验评分",
        "progress": 100,
        "buttons": [
          {
            "t": "导出本次成绩",
            "c": "ghost",
            "do": [
              {
                "do": "export"
              }
            ]
          },
          {
            "t": "查看常见错误",
            "c": "ghost",
            "goto": "errtable"
          },
          {
            "t": "重做实验",
            "c": "primary",
            "do": [
              {
                "do": "reset"
              }
            ]
          }
        ]
      },
      {
        "id": "errtable",
        "type": "errors",
        "title": "常见错误与后果",
        "progress": 100,
        "buttons": [
          {
            "t": "返回评分",
            "c": "ghost",
            "goto": "score"
          },
          {
            "t": "重做实验",
            "c": "primary",
            "do": [
              {
                "do": "reset"
              }
            ]
          }
        ]
      }
    ]
  },
  "exp_o2air": {
    "id": "o2air",
    "title": "测定空气里氧气的含量",
    "subtitle": "初中化学虚拟实验 · 红磷燃烧法",
    "badges": [
      "红磷燃烧",
      "水面上升约 1/5",
      "满分 100 分"
    ],
    "viewBox": "0 0 600 360",
    "equipments": [
      {
        "id": "bottle",
        "name": "集气瓶",
        "need": true
      },
      {
        "id": "stopper2",
        "name": "双孔橡皮塞",
        "need": true
      },
      {
        "id": "spoon",
        "name": "燃烧匙",
        "need": true
      },
      {
        "id": "redP",
        "name": "红磷",
        "need": true
      },
      {
        "id": "pipe",
        "name": "导管",
        "need": true
      },
      {
        "id": "clamp",
        "name": "止水夹",
        "need": true
      },
      {
        "id": "beaker",
        "name": "盛水烧杯",
        "need": true
      },
      {
        "id": "match",
        "name": "火柴",
        "need": true
      },
      {
        "id": "sulfur",
        "name": "硫粉",
        "need": false
      },
      {
        "id": "kmno4",
        "name": "高锰酸钾",
        "need": false
      },
      {
        "id": "lamp",
        "name": "酒精灯",
        "need": false
      },
      {
        "id": "glass",
        "name": "玻璃片",
        "need": false
      },
      {
        "id": "basin",
        "name": "水槽",
        "need": false
      }
    ],
    "dims": [
      {
        "key": "skill",
        "name": "操作规范"
      },
      {
        "key": "safety",
        "name": "安全意识"
      }
    ],
    "scoreItems": [
      {
        "key": "equip",
        "name": "器材选择",
        "max": 10,
        "dim": "skill"
      },
      {
        "key": "prepare",
        "name": "准备集气瓶与少量水",
        "max": 8,
        "dim": "skill"
      },
      {
        "key": "seal",
        "name": "检查装置气密性",
        "max": 8,
        "dim": "safety"
      },
      {
        "key": "load",
        "name": "燃烧匙盛红磷",
        "max": 12,
        "dim": "skill"
      },
      {
        "key": "ignite",
        "name": "点燃红磷",
        "max": 8,
        "dim": "safety"
      },
      {
        "key": "insert",
        "name": "迅速伸入并塞紧",
        "max": 14,
        "dim": "skill"
      },
      {
        "key": "wait",
        "name": "冷却至室温再打开",
        "max": 12,
        "dim": "skill"
      },
      {
        "key": "open",
        "name": "打开止水夹",
        "max": 10,
        "dim": "skill"
      },
      {
        "key": "read",
        "name": "读数并得出结论",
        "max": 18,
        "dim": "skill"
      }
    ],
    "initialStage": {
      "bottlePlaced": false,
      "stopperReady": false,
      "spoonReady": false,
      "redPOn": false,
      "sulfurOn": false,
      "burning": false,
      "inserted": false,
      "slowIn": false,
      "clampOn": false,
      "clampOpen": false,
      "hot": false,
      "rise": 0,
      "suck": 0,
      "pipeOn": false
    },
    "dropZones": {
      "bottle": {
        "x": 138,
        "y": 118,
        "w": 124,
        "h": 200
      },
      "assemb": {
        "x": 150,
        "y": 88,
        "w": 116,
        "h": 96
      },
      "spoon": {
        "x": 176,
        "y": 40,
        "w": 62,
        "h": 118
      },
      "clamp": {
        "x": 262,
        "y": 168,
        "w": 76,
        "h": 120
      },
      "readzone": {
        "x": 150,
        "y": 150,
        "w": 100,
        "h": 140
      }
    },
    "scene": [
      {
        "tag": "rect",
        "x": 40,
        "y": 322,
        "width": 520,
        "height": 15,
        "rx": 5,
        "fill": "url(#gMetal)"
      },
      {
        "tag": "rect",
        "x": 40,
        "y": 322,
        "width": 520,
        "height": 4,
        "rx": 2,
        "fill": "#e8eef2",
        "opacity": 0.75
      },
      {
        "tag": "g",
        "when": "stage.bottlePlaced",
        "children": [
          {
            "tag": "rect",
            "x": 160,
            "y": 140,
            "width": 84,
            "height": 170,
            "rx": 5,
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.5
          },
          {
            "tag": "rect",
            "x": 178,
            "y": 126,
            "width": 48,
            "height": 16,
            "rx": 3,
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.5
          },
          {
            "tag": "rect",
            "x": 182,
            "y": 120,
            "width": 40,
            "height": 8,
            "rx": 3,
            "fill": "url(#gGlassH)",
            "stroke": "#7ba7c7",
            "stroke-width": 1.5
          },
          {
            "tag": "line",
            "x1": 163,
            "y1": 232,
            "x2": 245,
            "y2": 232,
            "stroke": "#ef5350",
            "stroke-width": 1.4,
            "stroke-dasharray": "6 4",
            "opacity": 0.9
          },
          {
            "tag": "text",
            "x": 250,
            "y": 236,
            "font-size": 10.5,
            "fill": "#c62828",
            "text": "原空气柱 1/5"
          },
          {
            "tag": "rect",
            "x": 163,
            "y": 278,
            "width": 78,
            "height": 30,
            "fill": "url(#gWater)",
            "opacity": 0.85
          },
          {
            "tag": "rect",
            "when": "stage.rise>0",
            "x": 163,
            "y": "@ 278 - 46*stage.rise/100",
            "width": 78,
            "height": "@ 46*stage.rise/100",
            "fill": "url(#gWater)",
            "opacity": 0.85
          },
          {
            "tag": "text",
            "x": 252,
            "y": 300,
            "font-size": 11,
            "fill": "#0277bd",
            "text": "少量水（吸收白烟）"
          },
          {
            "tag": "text",
            "when": "stage.burning && stage.inserted",
            "x": 152,
            "y": 214,
            "font-size": 11,
            "text-anchor": "end",
            "fill": "#616161",
            "font-weight": 700,
            "text": "产生大量白烟"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.stopperReady || stage.spoonReady || stage.redPOn || stage.sulfurOn",
        "translate": [
          "@ 0",
          "@ stage.inserted ? 0 : -76"
        ],
        "children": [
          {
            "tag": "ellipse",
            "cx": 202,
            "cy": 124,
            "rx": 28,
            "ry": 4.5,
            "fill": "#8d6e63"
          },
          {
            "tag": "path",
            "d": "M174 124 L230 124 L226 148 L178 148 Z",
            "fill": "url(#gRubber)"
          },
          {
            "tag": "circle",
            "cx": 188,
            "cy": 136,
            "r": 3,
            "fill": "#3e2723"
          },
          {
            "tag": "circle",
            "cx": 216,
            "cy": 136,
            "r": 3,
            "fill": "#3e2723"
          },
          {
            "tag": "rect",
            "x": 199,
            "y": 58,
            "width": 5,
            "height": 126,
            "fill": "url(#gMetalV)"
          },
          {
            "tag": "ellipse",
            "cx": 202,
            "cy": 190,
            "rx": 13,
            "ry": 7,
            "fill": "#cfd8dc",
            "stroke": "#90a4ae",
            "stroke-width": 1.4
          },
          {
            "tag": "ellipse",
            "when": "stage.redPOn",
            "cx": 202,
            "cy": 187,
            "rx": 9.5,
            "ry": 4.8,
            "fill": "#8d2f22"
          },
          {
            "tag": "ellipse",
            "when": "stage.sulfurOn",
            "cx": 202,
            "cy": 187,
            "rx": 9.5,
            "ry": 4.8,
            "fill": "#fdd835"
          },
          {
            "tag": "text",
            "when": "stage.redPOn",
            "x": 252,
            "y": 190,
            "font-size": 10.5,
            "fill": "#b71c1c",
            "text": "红磷"
          },
          {
            "tag": "text",
            "when": "stage.sulfurOn",
            "x": 252,
            "y": 190,
            "font-size": 10.5,
            "fill": "#ef6c00",
            "text": "硫粉"
          },
          {
            "tag": "g",
            "when": "stage.burning",
            "class": "flame",
            "children": [
              {
                "tag": "ellipse",
                "cx": 202,
                "cy": 176,
                "rx": 8,
                "ry": 12,
                "fill": "url(#gFlameOut)"
              },
              {
                "tag": "ellipse",
                "cx": 202,
                "cy": 180,
                "rx": 3.5,
                "ry": 6,
                "fill": "#fff59d"
              }
            ]
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.burning && stage.inserted && !stage.sulfurOn",
        "children": [
          {
            "tag": "circle",
            "class": "bub",
            "cx": 186,
            "cy": 208,
            "r": 5,
            "fill": "#f5f5f5",
            "opacity": 0.9,
            "style": "animation-delay:0s"
          },
          {
            "tag": "circle",
            "class": "bub",
            "cx": 210,
            "cy": 212,
            "r": 4,
            "fill": "#fafafa",
            "opacity": 0.9,
            "style": "animation-delay:.4s"
          },
          {
            "tag": "circle",
            "class": "bub",
            "cx": 224,
            "cy": 206,
            "r": 3.4,
            "fill": "#eeeeee",
            "opacity": 0.9,
            "style": "animation-delay:.8s"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.pipeOn && stage.inserted",
        "children": [
          {
            "tag": "path",
            "d": "M222 132 Q268 130 296 156 L296 244 Q296 262 314 262 L466 262 L466 282",
            "stroke": "#90a4ae",
            "stroke-width": 7,
            "fill": "none",
            "stroke-linecap": "round"
          },
          {
            "tag": "path",
            "d": "M222 132 Q268 130 296 156 L296 244 Q296 262 314 262 L466 262 L466 282",
            "stroke": "#e0e8ec",
            "stroke-width": 2,
            "fill": "none",
            "stroke-linecap": "round",
            "opacity": 0.7
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.clampOn",
        "children": [
          {
            "tag": "rect",
            "x": 280,
            "y": 196,
            "width": 32,
            "height": 10,
            "rx": 2,
            "fill": "#cfd8dc",
            "stroke": "#78909c",
            "stroke-width": 1.4
          },
          {
            "tag": "path",
            "when": "!stage.clampOpen",
            "d": "M280 201 Q296 222 312 201",
            "stroke": "#90a4ae",
            "stroke-width": 3.5,
            "fill": "none",
            "stroke-linecap": "round"
          },
          {
            "tag": "text",
            "when": "!stage.clampOpen",
            "x": 396,
            "y": 180,
            "font-size": 10.5,
            "text-anchor": "end",
            "fill": "#546e7a",
            "text": "止水夹：关闭"
          },
          {
            "tag": "text",
            "when": "stage.clampOpen",
            "x": 396,
            "y": 180,
            "font-size": 10.5,
            "text-anchor": "end",
            "fill": "#0277bd",
            "font-weight": 700,
            "text": "止水夹：打开 → 水倒流"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.clampOn && stage.clampOpen",
        "children": [
          {
            "tag": "rect",
            "x": 280,
            "y": 196,
            "width": 12,
            "height": 10,
            "rx": 2,
            "fill": "#cfd8dc",
            "stroke": "#78909c",
            "stroke-width": 1.4
          },
          {
            "tag": "rect",
            "x": 302,
            "y": 196,
            "width": 12,
            "height": 10,
            "rx": 2,
            "fill": "#cfd8dc",
            "stroke": "#78909c",
            "stroke-width": 1.4
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.bottlePlaced",
        "children": [
          {
            "tag": "path",
            "d": "M430 208 L430 300 Q430 314 444 314 L496 314 Q510 314 510 300 L510 208 Z",
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.2
          },
          {
            "tag": "rect",
            "x": 434,
            "y": "@ 244 + 26*stage.suck/100",
            "width": 72,
            "height": "@ 68 - 26*stage.suck/100",
            "fill": "url(#gWater)",
            "opacity": 0.85
          },
          {
            "tag": "rect",
            "x": 426,
            "y": 202,
            "width": 88,
            "height": 9,
            "rx": 3,
            "fill": "url(#gGlassH)",
            "stroke": "#7ba7c7",
            "stroke-width": 1.5
          },
          {
            "tag": "text",
            "x": 470,
            "y": 352,
            "font-size": 11,
            "text-anchor": "middle",
            "fill": "#0277bd",
            "text": "烧杯中的水"
          },
          {
            "tag": "g",
            "when": "stage.clampOpen",
            "children": [
              {
                "tag": "circle",
                "class": "bub",
                "cx": 466,
                "cy": 286,
                "r": 4,
                "fill": "#ffffff",
                "opacity": 0.9,
                "style": "animation-delay:0s"
              },
              {
                "tag": "circle",
                "class": "bub",
                "cx": 458,
                "cy": 290,
                "r": 3,
                "fill": "#ffffff",
                "opacity": 0.9,
                "style": "animation-delay:.5s"
              }
            ]
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.rise>=100",
        "children": [
          {
            "tag": "text",
            "x": 202,
            "y": 116,
            "font-size": 12,
            "text-anchor": "middle",
            "fill": "#0277bd",
            "font-weight": 700,
            "text": "水面上升约原空气柱的 1/5"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.clampOpen && stage.rise>0 && stage.rise<100",
        "children": [
          {
            "tag": "text",
            "x": 202,
            "y": 116,
            "font-size": 12,
            "text-anchor": "middle",
            "fill": "#dc2626",
            "font-weight": 700,
            "text": "上升不到 1/5 → 测定结果偏小"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.clampOpen && stage.sulfurOn",
        "children": [
          {
            "tag": "text",
            "x": 202,
            "y": 116,
            "font-size": 12,
            "text-anchor": "middle",
            "fill": "#dc2626",
            "font-weight": 700,
            "text": "水面几乎不上升 → 硫燃烧生成气体，测不出氧气含量"
          }
        ]
      }
    ],
    "report": [
      {
        "title": "实验记录",
        "lines": [
          "实验名称：用红磷燃烧测定空气里氧气的含量",
          "反应原理：4P + 5O₂ --点燃--> 2P₂O₅（产生大量白烟）",
          "实验装置：集气瓶 + 燃烧匙 + 导管（带止水夹）+ 烧杯",
          "关键现象：冷却后打开止水夹，水倒流入集气瓶",
          "测得的体积：约占原空气柱体积的 1/5"
        ]
      },
      {
        "title": "现象记录",
        "lines": [
          "1. 红磷燃烧，发出白光，产生大量白烟，放出热量",
          "2. 冷却至室温后打开止水夹，烧杯中的水倒流入集气瓶",
          "3. 进入的水约占瓶中原空气柱体积的 1/5",
          "4. 燃烧停止后白烟逐渐消失（P₂O₅ 被水吸收）"
        ]
      },
      {
        "title": "实验结论",
        "lines": [
          "氧气约占空气总体积的 1/5。",
          "红磷燃烧消耗氧气，瓶内压强减小，水被压入瓶中补足减小的体积。",
          "剩余气体主要是氮气，它不支持红磷燃烧、也不溶于水。"
        ]
      }
    ],
    "errorTable": [
      {
        "op": "用硫或木炭代替红磷",
        "phen": "生成的是气体",
        "result": "压强几乎不变，测不出结果",
        "score": 12
      },
      {
        "op": "红磷不足量",
        "phen": "氧气没有被耗尽",
        "result": "结果偏小",
        "score": 12
      },
      {
        "op": "伸入速度太慢才塞紧瓶塞",
        "phen": "瓶内空气受热逸出",
        "result": "结果偏大",
        "score": 14
      },
      {
        "op": "未冷却就打开止水夹",
        "phen": "气体温度高、压强大",
        "result": "进入的水偏少，结果偏小",
        "score": 12
      },
      {
        "op": "装置漏气（未检查气密性）",
        "phen": "外界空气被吸入",
        "result": "进入的水偏少，结果偏小",
        "score": 8
      },
      {
        "op": "导管未预先夹上止水夹",
        "phen": "燃烧时气体逸出",
        "result": "结果偏大",
        "score": 8
      }
    ],
    "steps": [
      {
        "id": "cover",
        "type": "cover",
        "title": "准备开始",
        "progress": 0,
        "headline": "测定空气里氧气的含量",
        "subtitle": "初中化学虚拟实验 · 红磷燃烧法",
        "buttons": [
          {
            "t": "开始实验",
            "c": "primary",
            "goto": "goal"
          }
        ]
      },
      {
        "id": "goal",
        "type": "doc",
        "title": "实验目标",
        "progress": 5,
        "cols": [
          {
            "title": "实验原理",
            "lines": [
              "红磷燃烧只消耗氧气，生成的是固体 P₂O₅（白烟）。",
              "氧气被耗尽后，瓶内压强减小，",
              "打开止水夹后，烧杯里的水被压入集气瓶。",
              "进入的水的体积 ≈ 被消耗的氧气的体积。"
            ]
          },
          {
            "title": "实验目标",
            "lines": [
              "1. 知道氧气约占空气总体积的 1/5",
              "2. 理解「消耗气体 → 压强减小 → 水倒吸」的逻辑",
              "3. 明白为什么只能用生成固体的可燃物",
              "4. 学会分析误差偏大、偏小的原因"
            ]
          },
          {
            "title": "安全提示",
            "lines": [
              "⚠ 点燃红磷后要迅速伸入集气瓶并塞紧瓶塞",
              "⚠ 必须冷却到室温才能打开止水夹",
              "⚠ 燃烧时止水夹要夹紧，防止气体逸出",
              "⚠ 不能用硫、木炭代替红磷"
            ]
          }
        ],
        "buttons": [
          {
            "t": "下一步",
            "c": "primary",
            "goto": "equip"
          },
          {
            "t": "返回封面",
            "c": "ghost",
            "goto": "cover"
          }
        ]
      },
      {
        "id": "equip",
        "type": "equip",
        "title": "选择实验器材",
        "progress": 10,
        "tip": "想一想：为什么要用红磷而不是硫？导管上为什么要带止水夹？",
        "buttons": [
          {
            "t": "确认器材",
            "c": "primary",
            "do": [
              {
                "do": "checkEquip",
                "key": "equip",
                "goto": "prepare"
              }
            ]
          }
        ]
      },
      {
        "id": "prepare",
        "type": "stage",
        "title": "准备集气瓶",
        "progress": 18,
        "shelf": [
          "bottle",
          "pipe",
          "clamp",
          "beaker"
        ],
        "desc": "把集气瓶放到桌面上（瓶内预先加了少量水，用来吸收白烟），并把带止水夹的导管、盛水烧杯装好。",
        "help": "依次把集气瓶、导管、止水夹、盛水烧杯拖到高亮区域。导管要先夹上止水夹，燃烧时保持关闭。",
        "zones": [
          "bottle",
          "clamp",
          "readzone"
        ],
        "drop": [
          {
            "equip": "bottle",
            "zone": "bottle",
            "do": [
              {
                "do": "set",
                "k": "bottlePlaced",
                "v": true
              },
              {
                "do": "tip",
                "text": "集气瓶已放好，瓶内有少量水，可吸收生成的白烟 ✓"
              }
            ]
          },
          {
            "equip": "pipe",
            "zone": "bottle",
            "do": [
              {
                "do": "set",
                "k": "pipeOn",
                "v": true
              },
              {
                "do": "tip",
                "text": "导管已连好，一端通到烧杯的水面以下 ✓"
              }
            ]
          },
          {
            "equip": "pipe",
            "zone": "readzone",
            "do": [
              {
                "do": "set",
                "k": "pipeOn",
                "v": true
              },
              {
                "do": "tip",
                "text": "导管已连好 ✓"
              }
            ]
          },
          {
            "equip": "clamp",
            "zone": "clamp",
            "do": [
              {
                "do": "set",
                "k": "clampOn",
                "v": true
              },
              {
                "do": "tip",
                "text": "止水夹已夹紧导管 ✓ 燃烧时保持关闭"
              }
            ]
          },
          {
            "equip": "beaker",
            "zone": "clamp",
            "do": [
              {
                "do": "tip",
                "text": "盛水烧杯已放到右侧 ✓"
              }
            ]
          },
          {
            "equip": "beaker",
            "zone": "bottle",
            "do": [
              {
                "do": "err",
                "text": "盛水烧杯要放在导管另一端那侧的桌面上。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要把收集装置（集气瓶、导管、止水夹、盛水烧杯）准备好。"
              }
            ]
          }
        ],
        "buttons": [
          {
            "t": "装好了，下一步",
            "c": "primary",
            "when": "stage.bottlePlaced && stage.pipeOn && stage.clampOn",
            "do": [
              {
                "do": "score",
                "key": "prepare"
              },
              {
                "do": "tip",
                "text": "装置组装完成 ✓"
              },
              {
                "do": "goto",
                "id": "seal",
                "delay": 900
              }
            ]
          }
        ]
      },
      {
        "id": "seal",
        "type": "doc",
        "title": "检查装置气密性",
        "progress": 24,
        "cols": [
          {
            "title": "为什么要做",
            "lines": [
              "装置如果漏气，燃烧后外界空气会被吸进瓶内，",
              "进入的水就会偏少，测定结果偏小。",
              "所以这一步不能省。"
            ]
          },
          {
            "title": "怎么做",
            "lines": [
              "夹紧止水夹，把导管一端放入水中，",
              "用手掌紧握集气瓶外壁，若导管口有气泡冒出，",
              "松手后导管内形成一段水柱，说明气密性良好。"
            ]
          }
        ],
        "buttons": [
          {
            "t": "先检查气密性",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "seal"
              },
              {
                "do": "tip",
                "text": "导管内形成一段水柱 → 气密性良好 ✓"
              },
              {
                "do": "goto",
                "id": "load",
                "delay": 2200
              }
            ]
          },
          {
            "t": "不用查，直接开始",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "气密性不好会让外界空气进入，最终测得的结果会偏小。"
              },
              {
                "do": "goto",
                "id": "load",
                "delay": 3600
              }
            ]
          }
        ]
      },
      {
        "id": "load",
        "type": "stage",
        "title": "燃烧匙盛红磷",
        "progress": 32,
        "shelf": [
          "redP",
          "sulfur"
        ],
        "desc": "在燃烧匙里放足量红磷。想一想：能不能用硫粉代替？",
        "help": "把红磷拖到燃烧匙上。红磷燃烧生成的是固体五氧化二磷（白烟），瓶内气体减少，水才会进来。",
        "zones": [
          "spoon"
        ],
        "drop": [
          {
            "equip": "redP",
            "zone": "spoon",
            "do": [
              {
                "do": "set",
                "k": "spoonReady",
                "v": true
              },
              {
                "do": "set",
                "k": "redPOn",
                "v": true
              },
              {
                "do": "score",
                "key": "load"
              },
              {
                "do": "tip",
                "text": "红磷已盛好 ✓ 生成固体 → 瓶内压强才会减小"
              },
              {
                "do": "goto",
                "id": "ignite",
                "delay": 1300
              }
            ]
          },
          {
            "equip": "sulfur",
            "zone": "spoon",
            "do": [
              {
                "do": "set",
                "k": "spoonReady",
                "v": true
              },
              {
                "do": "set",
                "k": "sulfurOn",
                "v": true
              },
              {
                "do": "err",
                "text": "硫燃烧生成的是二氧化硫气体，气体体积几乎不变，水进不来，根本测不出氧气含量！"
              },
              {
                "do": "goto",
                "id": "ignite",
                "delay": 4200
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要把药品盛到燃烧匙上。"
              }
            ]
          }
        ]
      },
      {
        "id": "ignite",
        "type": "stage",
        "title": "点燃红磷",
        "progress": 40,
        "shelf": [
          "match"
        ],
        "desc": "先用火柴点燃燃烧匙中的红磷，再迅速伸入集气瓶。",
        "help": "把火柴拖到燃烧匙上点燃红磷。点燃后要立刻伸入集气瓶并塞紧瓶塞。",
        "zones": [
          "spoon"
        ],
        "drop": [
          {
            "equip": "match",
            "zone": "spoon",
            "do": [
              {
                "do": "set",
                "k": "burning",
                "v": true
              },
              {
                "do": "score",
                "key": "ignite"
              },
              {
                "do": "tip",
                "text": "红磷已点燃 ✓ 发出白光，产生大量白烟"
              },
              {
                "do": "goto",
                "id": "insert",
                "delay": 1800
              }
            ]
          },
          {
            "equip": "match",
            "do": [
              {
                "do": "err",
                "text": "火柴要靠近燃烧匙里的红磷。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要点燃燃烧匙中的药品。"
              }
            ]
          }
        ]
      },
      {
        "id": "insert",
        "type": "doc",
        "title": "伸入集气瓶并塞紧",
        "progress": 48,
        "cols": [
          {
            "title": "关键操作",
            "lines": [
              "红磷点燃后要马上伸入集气瓶，立即塞紧瓶塞。",
              "慢了的话，瓶内空气受热膨胀会从瓶口逸出，",
              "跑出去的这部分空气会被算成「被消耗掉的氧气」，",
              "最后进入的水偏多，测定结果偏大。"
            ]
          },
          {
            "title": "此时应该做什么",
            "lines": [
              "保持止水夹关闭，",
              "让红磷在瓶内继续燃烧到火焰熄灭，",
              "观察白烟，等待冷却。"
            ]
          }
        ],
        "buttons": [
          {
            "t": "迅速伸入并塞紧瓶塞",
            "c": "primary",
            "do": [
              {
                "do": "set",
                "k": "inserted",
                "v": true
              },
              {
                "do": "set",
                "k": "stopperReady",
                "v": true
              },
              {
                "do": "score",
                "key": "insert"
              },
              {
                "do": "tip",
                "text": "塞紧了 ✓ 红磷在瓶内继续燃烧"
              },
              {
                "do": "set",
                "k": "burning",
                "v": false,
                "delay": 3000
              },
              {
                "do": "goto",
                "id": "wait",
                "delay": 3600
              }
            ]
          },
          {
            "t": "举着燃烧一会儿再塞进去",
            "c": "ghost",
            "do": [
              {
                "do": "set",
                "k": "inserted",
                "v": true
              },
              {
                "do": "set",
                "k": "stopperReady",
                "v": true
              },
              {
                "do": "set",
                "k": "slowIn",
                "v": true
              },
              {
                "do": "set",
                "k": "hot",
                "v": true
              },
              {
                "do": "err",
                "text": "动作太慢，瓶内空气受热逸出，最后进入的水会偏多，测定结果偏大！"
              },
              {
                "do": "set",
                "k": "burning",
                "v": false,
                "delay": 3000
              },
              {
                "do": "goto",
                "id": "wait",
                "delay": 4600
              }
            ]
          }
        ]
      },
      {
        "id": "wait",
        "type": "doc",
        "title": "等待冷却到室温",
        "progress": 58,
        "cols": [
          {
            "title": "为什么要等",
            "lines": [
              "燃烧放热使瓶内气体温度升高，",
              "温度高、压强大，水就进不去多少。",
              "必须冷却到室温再打开止水夹。"
            ]
          },
          {
            "title": "如果不等会怎样",
            "lines": [
              "过早打开：进入的水偏少 → 结果偏小。",
              "所以要等白烟完全消失、瓶子摸上去不烫了。"
            ]
          }
        ],
        "buttons": [
          {
            "t": "等冷却到室温再打开",
            "c": "primary",
            "do": [
              {
                "do": "set",
                "k": "hot",
                "v": false
              },
              {
                "do": "score",
                "key": "wait"
              },
              {
                "do": "tip",
                "text": "耐心等待 ✓ 这一步最容易被忽略"
              },
              {
                "do": "goto",
                "id": "open",
                "delay": 1800
              }
            ]
          },
          {
            "t": "现在就打开止水夹",
            "c": "ghost",
            "do": [
              {
                "do": "set",
                "k": "hot",
                "v": true
              },
              {
                "do": "err",
                "text": "瓶内气体还是热的，压强偏大，水进得少，测定结果会偏小。"
              },
              {
                "do": "goto",
                "id": "open",
                "delay": 4000
              }
            ]
          }
        ]
      },
      {
        "id": "open",
        "type": "stage",
        "title": "打开止水夹观察倒吸",
        "progress": 68,
        "shelf": [
          "clamp"
        ],
        "desc": "打开止水夹，烧杯中的水会沿导管倒流入集气瓶。",
        "help": "把止水夹拖到导管上松开。观察水柱慢慢上升，最后停在哪里。",
        "zones": [
          "clamp"
        ],
        "drop": [
          {
            "equip": "clamp",
            "zone": "clamp",
            "do": [
              {
                "do": "set",
                "k": "clampOpen",
                "v": true
              },
              {
                "do": "score",
                "key": "open"
              },
              {
                "do": "if",
                "cond": "stage.sulfurOn",
                "then": [
                  {
                    "do": "tip",
                    "text": "几乎没有水进入：换成红磷才能完成这个实验"
                  },
                  {
                    "do": "goto",
                    "id": "read",
                    "delay": 2600
                  }
                ],
                "else": [
                  {
                    "do": "if",
                    "cond": "stage.hot || stage.slowIn",
                    "then": [
                      {
                        "do": "set",
                        "k": "suck",
                        "v": 30,
                        "delay": 600
                      },
                      {
                        "do": "set",
                        "k": "rise",
                        "v": 45,
                        "delay": 800
                      },
                      {
                        "do": "set",
                        "k": "suck",
                        "v": 55,
                        "delay": 1600
                      },
                      {
                        "do": "set",
                        "k": "rise",
                        "v": 72,
                        "delay": 1800
                      },
                      {
                        "do": "goto",
                        "id": "read",
                        "delay": 3000
                      }
                    ],
                    "else": [
                      {
                        "do": "set",
                        "k": "suck",
                        "v": 40,
                        "delay": 600
                      },
                      {
                        "do": "set",
                        "k": "rise",
                        "v": 55,
                        "delay": 800
                      },
                      {
                        "do": "set",
                        "k": "suck",
                        "v": 85,
                        "delay": 1600
                      },
                      {
                        "do": "set",
                        "k": "rise",
                        "v": 92,
                        "delay": 1800
                      },
                      {
                        "do": "set",
                        "k": "suck",
                        "v": 100,
                        "delay": 2500
                      },
                      {
                        "do": "set",
                        "k": "rise",
                        "v": 100,
                        "delay": 2600
                      },
                      {
                        "do": "tip",
                        "text": "水面停在原空气柱的 1/5 处 ✓",
                        "delay": 2900
                      },
                      {
                        "do": "goto",
                        "id": "read",
                        "delay": 4400
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "equip": "clamp",
            "do": [
              {
                "do": "err",
                "text": "止水夹要松开在导管上。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要打开止水夹。"
              }
            ]
          }
        ]
      },
      {
        "id": "read",
        "type": "doc",
        "title": "读数与结论",
        "progress": 84,
        "cols": [
          {
            "title": "观察到的现象",
            "lines": [
              "水沿着导管倒流入集气瓶，",
              "进入的水约占瓶中原空气柱体积的 1/5，",
              "剩余气体主要是氮气。"
            ]
          },
          {
            "title": "这个值说明什么",
            "lines": [
              "氧气约占空气总体积的 1/5（约为 21%）。",
              "结论：空气不是单一物质，",
              "其中支持红磷燃烧的氧气约占五分之一。"
            ]
          }
        ],
        "buttons": [
          {
            "t": "约占空气总体积的 1/5",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "read"
              },
              {
                "do": "tip",
                "text": "正确！这就是「氧气约占空气体积 1/5」的经典结论 ✓"
              },
              {
                "do": "goto",
                "id": "report",
                "delay": 2200
              }
            ]
          },
          {
            "t": "约占空气总体积的 4/5",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "4/5 是剩下的氮气等的体积；被消耗掉、被水补上的才是氧气。"
              },
              {
                "do": "goto",
                "id": "report",
                "delay": 3600
              }
            ]
          },
          {
            "t": "约占空气总体积的 1/2",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "差太多了，再看一下瓶内水面停在哪条刻度线。"
              },
              {
                "do": "goto",
                "id": "report",
                "delay": 3600
              }
            ]
          }
        ]
      },
      {
        "id": "report",
        "type": "report",
        "title": "实验报告",
        "progress": 96,
        "buttons": [
          {
            "t": "提交报告",
            "c": "primary",
            "do": [
              {
                "do": "finish"
              },
              {
                "do": "goto",
                "id": "score"
              }
            ]
          }
        ]
      },
      {
        "id": "score",
        "type": "score",
        "title": "实验评分",
        "progress": 100,
        "buttons": [
          {
            "t": "导出本次成绩",
            "c": "ghost",
            "do": [
              {
                "do": "export"
              }
            ]
          },
          {
            "t": "查看常见错误",
            "c": "ghost",
            "goto": "errtable"
          },
          {
            "t": "重做实验",
            "c": "primary",
            "do": [
              {
                "do": "reset"
              }
            ]
          }
        ]
      },
      {
        "id": "errtable",
        "type": "errors",
        "title": "常见错误与后果",
        "progress": 100,
        "buttons": [
          {
            "t": "返回评分",
            "c": "ghost",
            "goto": "score"
          },
          {
            "t": "重做实验",
            "c": "primary",
            "do": [
              {
                "do": "reset"
              }
            ]
          }
        ]
      }
    ]
  },
  "exp_water": {
    "id": "water",
    "title": "水的组成 —— 电解水实验",
    "subtitle": "初中化学虚拟实验 · 通直流电分解水",
    "badges": [
      "正氧负氢",
      "体积比 1:2",
      "满分 100 分"
    ],
    "viewBox": "0 0 600 360",
    "equipments": [
      {
        "id": "power",
        "name": "直流电源",
        "need": true
      },
      {
        "id": "beaker",
        "name": "盛水烧杯",
        "need": true
      },
      {
        "id": "h2so4",
        "name": "稀硫酸",
        "need": true
      },
      {
        "id": "wood",
        "name": "带火星的木条",
        "need": true
      },
      {
        "id": "match",
        "name": "火柴",
        "need": true
      },
      {
        "id": "lamp",
        "name": "酒精灯",
        "need": false
      },
      {
        "id": "kmno4",
        "name": "高锰酸钾",
        "need": false
      },
      {
        "id": "basin",
        "name": "水槽",
        "need": false
      },
      {
        "id": "glass",
        "name": "玻璃片",
        "need": false
      },
      {
        "id": "redP",
        "name": "红磷",
        "need": false
      }
    ],
    "dims": [
      {
        "key": "skill",
        "name": "操作规范"
      },
      {
        "key": "safety",
        "name": "安全意识"
      }
    ],
    "scoreItems": [
      {
        "key": "equip",
        "name": "器材选择",
        "max": 10,
        "dim": "skill"
      },
      {
        "key": "fill",
        "name": "电解器中加满水",
        "max": 8,
        "dim": "skill"
      },
      {
        "key": "enhance",
        "name": "加稀硫酸增强导电性",
        "max": 10,
        "dim": "skill"
      },
      {
        "key": "connect",
        "name": "正确接通直流电源",
        "max": 14,
        "dim": "safety"
      },
      {
        "key": "observe",
        "name": "观察两极气泡",
        "max": 12,
        "dim": "skill"
      },
      {
        "key": "ratio",
        "name": "判断两管气体体积比",
        "max": 12,
        "dim": "skill"
      },
      {
        "key": "verifyO",
        "name": "正极气体使木条复燃",
        "max": 12,
        "dim": "skill"
      },
      {
        "key": "verifyH",
        "name": "负极气体能燃烧",
        "max": 12,
        "dim": "safety"
      },
      {
        "key": "conclude",
        "name": "得出水由氢氧元素组成",
        "max": 10,
        "dim": "skill"
      }
    ],
    "initialStage": {
      "filled": false,
      "enhanced": false,
      "powered": false,
      "reversed": false,
      "gasL": 0,
      "gasR": 0,
      "woodO": false,
      "relit": false,
      "fireH": false,
      "nofire": false
    },
    "dropZones": {
      "tank": {
        "x": 198,
        "y": 226,
        "w": 204,
        "h": 96
      },
      "power": {
        "x": 76,
        "y": 168,
        "w": 108,
        "h": 92
      },
      "woodO": {
        "x": 228,
        "y": 74,
        "w": 76,
        "h": 72
      },
      "fireH": {
        "x": 296,
        "y": 74,
        "w": 76,
        "h": 72
      }
    },
    "scene": [
      {
        "tag": "rect",
        "x": 40,
        "y": 322,
        "width": 520,
        "height": 15,
        "rx": 5,
        "fill": "url(#gMetal)"
      },
      {
        "tag": "rect",
        "x": 40,
        "y": 322,
        "width": 520,
        "height": 4,
        "rx": 2,
        "fill": "#e8eef2",
        "opacity": 0.75
      },
      {
        "tag": "g",
        "children": [
          {
            "tag": "path",
            "d": "M212 250 L212 306 Q212 318 224 318 L376 318 Q388 318 388 306 L388 250 Z",
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.2
          },
          {
            "tag": "rect",
            "when": "stage.filled",
            "x": 216,
            "y": 262,
            "width": 168,
            "height": 52,
            "fill": "url(#gWater)",
            "opacity": 0.85
          },
          {
            "tag": "rect",
            "x": 208,
            "y": 244,
            "width": 184,
            "height": 10,
            "rx": 4,
            "fill": "url(#gGlassH)",
            "stroke": "#7ba7c7",
            "stroke-width": 1.5
          },
          {
            "tag": "text",
            "x": 300,
            "y": 352,
            "font-size": 11,
            "text-anchor": "middle",
            "fill": "#475569",
            "text": "水电解器（霍夫曼电解器）"
          }
        ]
      },
      {
        "tag": "g",
        "children": [
          {
            "tag": "rect",
            "x": 250,
            "y": 104,
            "width": 44,
            "height": 160,
            "rx": 20,
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.2
          },
          {
            "tag": "rect",
            "when": "stage.filled",
            "x": 252,
            "y": 106,
            "width": 40,
            "height": "@ 156*stage.gasL/100",
            "fill": "#bbdefb",
            "opacity": 0.5
          },
          {
            "tag": "rect",
            "when": "stage.filled",
            "x": 252,
            "y": "@ 106 + 156*stage.gasL/100",
            "width": 40,
            "height": "@ 156 - 156*stage.gasL/100",
            "fill": "url(#gWater)",
            "opacity": 0.85
          },
          {
            "tag": "text",
            "when": "stage.gasL>=45 && stage.gasL<=stage.gasR",
            "x": 272,
            "y": 176,
            "font-size": 12,
            "text-anchor": "middle",
            "fill": "#1565c0",
            "font-weight": 700,
            "text": "O₂"
          },
          {
            "tag": "text",
            "when": "stage.gasL>stage.gasR",
            "x": 272,
            "y": 176,
            "font-size": 12,
            "text-anchor": "middle",
            "fill": "#3949ab",
            "font-weight": 700,
            "text": "H₂"
          }
        ]
      },
      {
        "tag": "g",
        "children": [
          {
            "tag": "rect",
            "x": 306,
            "y": 104,
            "width": 44,
            "height": 160,
            "rx": 20,
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.2
          },
          {
            "tag": "rect",
            "when": "stage.filled",
            "x": 308,
            "y": 106,
            "width": 40,
            "height": "@ 156*stage.gasR/100",
            "fill": "#dfe3ee",
            "opacity": 0.6
          },
          {
            "tag": "rect",
            "when": "stage.filled",
            "x": 308,
            "y": "@ 106 + 156*stage.gasR/100",
            "width": 40,
            "height": "@ 156 - 156*stage.gasR/100",
            "fill": "url(#gWater)",
            "opacity": 0.85
          },
          {
            "tag": "text",
            "when": "stage.gasR>stage.gasL",
            "x": 328,
            "y": 176,
            "font-size": 12,
            "text-anchor": "middle",
            "fill": "#3949ab",
            "font-weight": 700,
            "text": "H₂"
          },
          {
            "tag": "text",
            "when": "stage.gasR>=45 && stage.gasR<=stage.gasL",
            "x": 328,
            "y": 176,
            "font-size": 12,
            "text-anchor": "middle",
            "fill": "#1565c0",
            "font-weight": 700,
            "text": "O₂"
          }
        ]
      },
      {
        "tag": "g",
        "children": [
          {
            "tag": "rect",
            "x": 268,
            "y": 196,
            "width": 6,
            "height": 68,
            "fill": "url(#gMetalV)"
          },
          {
            "tag": "rect",
            "x": 324,
            "y": 196,
            "width": 6,
            "height": 68,
            "fill": "url(#gMetalV)"
          },
          {
            "tag": "circle",
            "cx": 271,
            "cy": 200,
            "r": 4,
            "fill": "#90a4ae"
          },
          {
            "tag": "circle",
            "cx": 327,
            "cy": 200,
            "r": 4,
            "fill": "#90a4ae"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.powered && stage.gasR<100",
        "children": [
          {
            "tag": "circle",
            "class": "bub",
            "cx": 265,
            "cy": 236,
            "r": 3.5,
            "fill": "#ffffff",
            "opacity": 0.9,
            "style": "animation-delay:0s"
          },
          {
            "tag": "circle",
            "class": "bub",
            "cx": 278,
            "cy": 240,
            "r": 3,
            "fill": "#ffffff",
            "opacity": 0.9,
            "style": "animation-delay:.45s"
          },
          {
            "tag": "circle",
            "class": "bub",
            "cx": 320,
            "cy": 234,
            "r": 4,
            "fill": "#ffffff",
            "opacity": 0.9,
            "style": "animation-delay:.2s"
          },
          {
            "tag": "circle",
            "class": "bub",
            "cx": 334,
            "cy": 240,
            "r": 3.4,
            "fill": "#ffffff",
            "opacity": 0.9,
            "style": "animation-delay:.65s"
          },
          {
            "tag": "circle",
            "class": "bub",
            "cx": 327,
            "cy": 228,
            "r": 3,
            "fill": "#ffffff",
            "opacity": 0.9,
            "style": "animation-delay:1s"
          },
          {
            "tag": "text",
            "x": 402,
            "y": 214,
            "font-size": 11.5,
            "fill": "#0277bd",
            "font-weight": 700,
            "text": "两极都产生气泡"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.gasR>=100",
        "children": [
          {
            "tag": "text",
            "x": 402,
            "y": 150,
            "font-size": 11.5,
            "fill": "#1565c0",
            "font-weight": 700,
            "text": "负极 : 正极气体体积 ≈ 2 : 1"
          }
        ]
      },
      {
        "tag": "g",
        "children": [
          {
            "tag": "text",
            "x": 272,
            "y": 96,
            "font-size": 11.5,
            "text-anchor": "middle",
            "fill": "#c62828",
            "font-weight": 700,
            "text": "正极（+）"
          },
          {
            "tag": "text",
            "x": 328,
            "y": 96,
            "font-size": 11.5,
            "text-anchor": "middle",
            "fill": "#1565c0",
            "font-weight": 700,
            "text": "负极（−）"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.powered",
        "children": [
          {
            "tag": "path",
            "d": "M156 198 Q200 168 244 196 L268 216",
            "stroke": "#c62828",
            "stroke-width": 3.5,
            "fill": "none",
            "stroke-linecap": "round"
          },
          {
            "tag": "path",
            "d": "M156 226 Q210 262 300 264 L326 240",
            "stroke": "#1565c0",
            "stroke-width": 3.5,
            "fill": "none",
            "stroke-linecap": "round"
          }
        ]
      },
      {
        "tag": "g",
        "children": [
          {
            "tag": "rect",
            "x": 86,
            "y": 180,
            "width": 80,
            "height": 64,
            "rx": 6,
            "fill": "#eceff1",
            "stroke": "#546e7a",
            "stroke-width": 2
          },
          {
            "tag": "rect",
            "x": 94,
            "y": 188,
            "width": 36,
            "height": 24,
            "rx": 3,
            "fill": "#bbdefb",
            "stroke": "#1565c0",
            "stroke-width": 1.2
          },
          {
            "tag": "text",
            "x": 112,
            "y": 205,
            "font-size": 11,
            "text-anchor": "middle",
            "fill": "#1565c0",
            "font-weight": 700,
            "text": "DC"
          },
          {
            "tag": "circle",
            "cx": 150,
            "cy": 198,
            "r": 6,
            "fill": "#c62828"
          },
          {
            "tag": "circle",
            "cx": 150,
            "cy": 226,
            "r": 6,
            "fill": "#1565c0"
          },
          {
            "tag": "text",
            "x": 164,
            "y": 202,
            "font-size": 13,
            "fill": "#c62828",
            "font-weight": 700,
            "text": "+"
          },
          {
            "tag": "text",
            "x": 164,
            "y": 232,
            "font-size": 15,
            "fill": "#1565c0",
            "font-weight": 700,
            "text": "-"
          },
          {
            "tag": "text",
            "x": 126,
            "y": 172,
            "font-size": 11,
            "text-anchor": "middle",
            "fill": "#475569",
            "text": "直流电源"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.woodO",
        "children": [
          {
            "tag": "rect",
            "x": 268,
            "y": 42,
            "width": 9,
            "height": 56,
            "rx": 3,
            "fill": "url(#gWood)"
          },
          {
            "tag": "circle",
            "cx": 272,
            "cy": 44,
            "r": 5.5,
            "fill": "#8d6e63"
          },
          {
            "tag": "circle",
            "cx": 272,
            "cy": 44,
            "r": 2.6,
            "fill": "#ff8a65"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.relit",
        "class": "flame",
        "children": [
          {
            "tag": "ellipse",
            "cx": 272,
            "cy": 36,
            "rx": 9,
            "ry": 14,
            "fill": "url(#gFlameOut)"
          },
          {
            "tag": "ellipse",
            "cx": 272,
            "cy": 40,
            "rx": 4,
            "ry": 7,
            "fill": "#fff59d"
          },
          {
            "tag": "text",
            "x": 60,
            "y": 52,
            "font-size": 12,
            "fill": "#dc2626",
            "font-weight": 700,
            "text": "木条复燃 → 正极气体是氧气"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.nofire",
        "class": "shake",
        "children": [
          {
            "tag": "text",
            "x": 60,
            "y": 52,
            "font-size": 12,
            "fill": "#dc2626",
            "font-weight": 700,
            "text": "没有复燃 → 这一极气体不是氧气"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.fireH",
        "class": "flame",
        "children": [
          {
            "tag": "ellipse",
            "cx": 328,
            "cy": 40,
            "rx": 9,
            "ry": 15,
            "fill": "#7ec8ff",
            "opacity": 0.9
          },
          {
            "tag": "ellipse",
            "cx": 328,
            "cy": 44,
            "rx": 4,
            "ry": 7,
            "fill": "#e3f6ff"
          },
          {
            "tag": "text",
            "x": 400,
            "y": 56,
            "font-size": 12,
            "fill": "#0288d1",
            "font-weight": 700,
            "text": "淡蓝色火焰 → 负极气体是氢气"
          }
        ]
      },
      {
        "tag": "text",
        "when": "stage.enhanced",
        "x": 402,
        "y": 266,
        "font-size": 11,
        "fill": "#33691e",
        "text": "加稀硫酸 → 增强导电性"
      }
    ],
    "report": [
      {
        "title": "实验记录",
        "lines": [
          "实验名称：电解水测定水的组成",
          "反应原理：2H₂O --通电--> 2H₂↑ + O₂↑（分解反应）",
          "通电方式：必须用直流电",
          "正极气体：氧气（体积小，使带火星木条复燃）",
          "负极气体：氢气（体积大，能被点燃）"
        ]
      },
      {
        "title": "现象记录",
        "lines": [
          "1. 通电后两个电极上都产生气泡",
          "2. 一段时间后两个玻璃管中都有气体聚集，水面下降",
          "3. 正极与负极气体的体积比约为 1 : 2",
          "4. 带火星木条伸入正极气体复燃；点燃负极气体发出淡蓝色火焰"
        ]
      },
      {
        "title": "实验结论",
        "lines": [
          "水通电生成氢气和氧气，属于分解反应。",
          "正极产生氧气、负极产生氢气，体积比约为 1 : 2（口诀：正氧负氢、氢二氧一）。",
          "根据化学反应前后元素种类不变，可推知：水由氢元素和氧元素组成。"
        ]
      }
    ],
    "errorTable": [
      {
        "op": "直接用纯水，未加稀硫酸",
        "phen": "纯水几乎不导电",
        "result": "几乎看不到气泡",
        "score": 10
      },
      {
        "op": "正负极接反",
        "phen": "两管气体体积颠倒",
        "result": "结论完全错误",
        "score": 14
      },
      {
        "op": "用交流电",
        "phen": "电极产物不稳定",
        "result": "无法分出氢气氧气",
        "score": 10
      },
      {
        "op": "气体体积比判断为 1:1",
        "phen": "读数错误",
        "result": "无法得出水的组成",
        "score": 12
      },
      {
        "op": "读数时未看液面凹处",
        "phen": "读数习惯错误",
        "result": "体积比不准",
        "score": 8
      },
      {
        "op": "未检验就下结论",
        "phen": "缺少证据支撑",
        "result": "不知道哪管是什么气体",
        "score": 12
      }
    ],
    "steps": [
      {
        "id": "cover",
        "type": "cover",
        "title": "准备开始",
        "progress": 0,
        "headline": "水的组成 —— 电解水实验",
        "subtitle": "初中化学虚拟实验 · 通直流电分解水",
        "buttons": [
          {
            "t": "开始实验",
            "c": "primary",
            "goto": "goal"
          }
        ]
      },
      {
        "id": "goal",
        "type": "doc",
        "title": "实验目标",
        "progress": 5,
        "cols": [
          {
            "title": "实验原理",
            "lines": [
              "水通电分解成氢气和氧气，属于分解反应。",
              "与电源正极相连的电极产生氧气，",
              "与负极相连的电极产生氢气，",
              "两者的体积比约为 1 : 2。"
            ]
          },
          {
            "title": "实验目标",
            "lines": [
              "1. 记住口诀：正氧负氢、氢二氧一",
              "2. 知道实验用的是直流电、要加稀硫酸增强导电性",
              "3. 学会用带火星木条检验氧气、点燃法检验氢气",
              "4. 理解「化学反应前后元素种类不变」的推理"
            ]
          },
          {
            "title": "安全与提示",
            "lines": [
              "⚠ 必须用直流电源，交流电不能得到稳定产物",
              "⚠ 纯水几乎不导电，要加少量稀硫酸或氢氧化钠",
              "⚠ 氢气要点燃检验时，注意气体体积足够、远离面部",
              "⚠ 读数时视线要与液面最低处相平"
            ]
          }
        ],
        "buttons": [
          {
            "t": "下一步",
            "c": "primary",
            "goto": "equip"
          },
          {
            "t": "返回封面",
            "c": "ghost",
            "goto": "cover"
          }
        ]
      },
      {
        "id": "equip",
        "type": "equip",
        "title": "选择实验器材",
        "progress": 10,
        "tip": "想一想：这一步要通电，用什么电源？要检验两种气体，各需要什么？",
        "buttons": [
          {
            "t": "确认器材",
            "c": "primary",
            "do": [
              {
                "do": "checkEquip",
                "key": "equip",
                "goto": "fill"
              }
            ]
          }
        ]
      },
      {
        "id": "fill",
        "type": "stage",
        "title": "向电解器中加满水",
        "progress": 18,
        "shelf": [
          "beaker"
        ],
        "desc": "先把水电解器的两个玻璃管和底座都装满水，管中不能留有气泡。",
        "help": "把盛水烧杯拖到电解器上加水。注意要加到两个玻璃管中都装满为止。",
        "zones": [
          "tank"
        ],
        "drop": [
          {
            "equip": "beaker",
            "zone": "tank",
            "do": [
              {
                "do": "set",
                "k": "filled",
                "v": true
              },
              {
                "do": "score",
                "key": "fill"
              },
              {
                "do": "tip",
                "text": "电解器已装满水 ✓"
              },
              {
                "do": "goto",
                "id": "enhance",
                "delay": 1200
              }
            ]
          },
          {
            "equip": "beaker",
            "do": [
              {
                "do": "err",
                "text": "水要倒进电解器里。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要用水把电解器装满。"
              }
            ]
          }
        ]
      },
      {
        "id": "enhance",
        "type": "stage",
        "title": "增强水的导电性",
        "progress": 26,
        "shelf": [
          "h2so4"
        ],
        "desc": "纯水几乎不导电，要加入少量稀硫酸（或氢氧化钠）增强导电性。",
        "help": "把稀硫酸拖到电解器里。不加的话反应会非常缓慢，几乎看不到气泡。",
        "zones": [
          "tank"
        ],
        "drop": [
          {
            "equip": "h2so4",
            "zone": "tank",
            "do": [
              {
                "do": "set",
                "k": "enhanced",
                "v": true
              },
              {
                "do": "score",
                "key": "enhance"
              },
              {
                "do": "tip",
                "text": "已加入少量稀硫酸，导电性增强 ✓"
              },
              {
                "do": "goto",
                "id": "connect",
                "delay": 1400
              }
            ]
          },
          {
            "equip": "h2so4",
            "do": [
              {
                "do": "err",
                "text": "稀硫酸要从上方加入电解器。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要加入能增强导电性的药品。"
              }
            ]
          }
        ]
      },
      {
        "id": "connect",
        "type": "stage",
        "title": "接通直流电源",
        "progress": 36,
        "shelf": [
          "power"
        ],
        "desc": "把两电极分别接到直流电源的正负极上，接通后观察两管中的气泡。",
        "help": "把直流电源拖到左侧的高亮区域接通。千万要分清正负极：接反了气体的量会完全颠倒。",
        "zones": [
          "power"
        ],
        "drop": [
          {
            "equip": "power",
            "zone": "power",
            "do": [
              {
                "do": "tip",
                "text": "电源已接好，请选择接线方式"
              }
            ]
          },
          {
            "equip": "power",
            "do": [
              {
                "do": "err",
                "text": "电源要接到电极上，拖到左侧高亮区域。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要接上直流电源。"
              }
            ]
          }
        ],
        "buttons": [
          {
            "t": "分清正负极后接通",
            "c": "primary",
            "when": "true",
            "do": [
              {
                "do": "set",
                "k": "powered",
                "v": true
              },
              {
                "do": "score",
                "key": "connect"
              },
              {
                "do": "tip",
                "text": "接通直流电 ✓ 观察两管中的气泡"
              },
              {
                "do": "set",
                "k": "gasL",
                "v": 12,
                "delay": 900
              },
              {
                "do": "set",
                "k": "gasR",
                "v": 24,
                "delay": 900
              },
              {
                "do": "set",
                "k": "gasL",
                "v": 28,
                "delay": 1800
              },
              {
                "do": "set",
                "k": "gasR",
                "v": 56,
                "delay": 1800
              },
              {
                "do": "set",
                "k": "gasL",
                "v": 50,
                "delay": 2800
              },
              {
                "do": "set",
                "k": "gasR",
                "v": 100,
                "delay": 2800
              },
              {
                "do": "goto",
                "id": "observe",
                "delay": 3700
              }
            ]
          },
          {
            "t": "随便把两根线接上通电",
            "c": "ghost",
            "do": [
              {
                "do": "set",
                "k": "powered",
                "v": true
              },
              {
                "do": "set",
                "k": "reversed",
                "v": true
              },
              {
                "do": "err",
                "text": "没有分清正负极就通电，两管气体的量会完全颠倒，结论也会跟着错！"
              },
              {
                "do": "set",
                "k": "gasL",
                "v": 24,
                "delay": 900
              },
              {
                "do": "set",
                "k": "gasR",
                "v": 12,
                "delay": 900
              },
              {
                "do": "set",
                "k": "gasL",
                "v": 56,
                "delay": 1800
              },
              {
                "do": "set",
                "k": "gasR",
                "v": 28,
                "delay": 1800
              },
              {
                "do": "set",
                "k": "gasL",
                "v": 100,
                "delay": 2800
              },
              {
                "do": "set",
                "k": "gasR",
                "v": 50,
                "delay": 2800
              },
              {
                "do": "goto",
                "id": "observe",
                "delay": 4200
              }
            ]
          }
        ]
      },
      {
        "id": "observe",
        "type": "doc",
        "title": "观察两极的气泡",
        "progress": 48,
        "cols": [
          {
            "title": "看到的现象",
            "lines": [
              "两个电极上都有气泡产生，",
              "气泡上升聚集在玻璃管顶部，把水往下压，",
              "管中水面逐渐下降。",
              "气泡快的一极产生的气体更多。"
            ]
          },
          {
            "title": "为什么",
            "lines": [
              "水分子在通电条件下分解成氢、氧两种元素，",
              "氢原子在负极聚集成氢气，氧原子在正极聚集成氧气。",
              "一个水分子里氢氧原子个数比是 2:1，",
              "所以生成的气体体积比约为 2:1。"
            ]
          }
        ],
        "buttons": [
          {
            "t": "继续观察两者体积差别",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "observe"
              },
              {
                "do": "tip",
                "text": "看到气泡快的一极气体明显更多 ✓"
              },
              {
                "do": "goto",
                "id": "ratio",
                "delay": 1600
              }
            ]
          }
        ]
      },
      {
        "id": "ratio",
        "type": "doc",
        "title": "两管气体的体积比",
        "progress": 58,
        "cols": [
          {
            "title": "读数注意",
            "lines": [
              "视线要与液面（凹液面最低处）相平，",
              "等一段时间气体不再增加后再读，",
              "读数时不要取出电源。"
            ]
          },
          {
            "title": "口诀",
            "lines": [
              "「正氧负氢，氢二氧一」",
              "正极气体少：氧气",
              "负极气体多：氢气"
            ]
          }
        ],
        "buttons": [
          {
            "t": "正极 : 负极 ≈ 1 : 2",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "ratio"
              },
              {
                "do": "tip",
                "text": "正确！这就是「氢二氧一」✓"
              },
              {
                "do": "goto",
                "id": "verifyO",
                "delay": 1600
              }
            ]
          },
          {
            "t": "正极 : 负极 ≈ 2 : 1",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "记反了。口诀是「正氧负氢，氢二氧一」：负极的氢气是正极氧气的 2 倍。"
              },
              {
                "do": "goto",
                "id": "verifyO",
                "delay": 3600
              }
            ]
          },
          {
            "t": "两者差不多 1 : 1",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "仔细看两管水面下降的高度，它们的差别很大。"
              },
              {
                "do": "goto",
                "id": "verifyO",
                "delay": 3600
              }
            ]
          }
        ]
      },
      {
        "id": "verifyO",
        "type": "stage",
        "title": "检验正极气体",
        "progress": 70,
        "shelf": [
          "wood"
        ],
        "desc": "把带火星的木条伸入气体较少的一根玻璃管（与正极相连），看是否复燃。",
        "help": "把带火星的木条拖到气体较少的那根管口。如果接对了极性，这管气体应该能让木条复燃。",
        "zones": [
          "woodO"
        ],
        "drop": [
          {
            "equip": "wood",
            "zone": "woodO",
            "do": [
              {
                "do": "set",
                "k": "woodO",
                "v": true
              },
              {
                "do": "if",
                "cond": "stage.gasL < stage.gasR",
                "then": [
                  {
                    "do": "set",
                    "k": "relit",
                    "v": true,
                    "delay": 700
                  },
                  {
                    "do": "score",
                    "key": "verifyO"
                  },
                  {
                    "do": "tip",
                    "text": "木条复燃 → 正极产生的的确是氧气 ✓"
                  },
                  {
                    "do": "goto",
                    "id": "verifyH",
                    "delay": 2200
                  }
                ],
                "else": [
                  {
                    "do": "set",
                    "k": "nofire",
                    "v": true,
                    "delay": 700
                  },
                  {
                    "do": "err",
                    "text": "这管气体多、却不能支持燃烧：极性接反了，这管其实是氢气。"
                  },
                  {
                    "do": "goto",
                    "id": "verifyH",
                    "delay": 4200
                  }
                ]
              }
            ]
          },
          {
            "equip": "wood",
            "do": [
              {
                "do": "err",
                "text": "带火星的木条要伸进左边那根管（正极）管口。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步用带火星的木条检验气体。"
              }
            ]
          }
        ]
      },
      {
        "id": "verifyH",
        "type": "stage",
        "title": "检验负极气体",
        "progress": 80,
        "shelf": [
          "match"
        ],
        "desc": "用火柴点燃气体较多的一根玻璃管中的气体，观察火焰颜色。",
        "help": "把火柴拖到右边那根管（负极）的管口点燃。氢气燃烧是淡蓝色火焰。",
        "zones": [
          "fireH"
        ],
        "drop": [
          {
            "equip": "match",
            "zone": "fireH",
            "do": [
              {
                "do": "if",
                "cond": "stage.gasR > stage.gasL",
                "then": [
                  {
                    "do": "set",
                    "k": "fireH",
                    "v": true
                  },
                  {
                    "do": "score",
                    "key": "verifyH"
                  },
                  {
                    "do": "tip",
                    "text": "淡蓝色火焰 → 负极产生的确实是氢气 ✓"
                  },
                  {
                    "do": "goto",
                    "id": "conclude",
                    "delay": 2000
                  }
                ],
                "else": [
                  {
                    "do": "err",
                    "text": "这管气体少、燃不起来：极性接反了，它其实是氧气。"
                  },
                  {
                    "do": "goto",
                    "id": "conclude",
                    "delay": 3400
                  }
                ]
              }
            ]
          },
          {
            "equip": "match",
            "do": [
              {
                "do": "err",
                "text": "火柴要靠近右边那根管（负极）的管口。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要点燃负极气体并观察火焰。"
              }
            ]
          }
        ]
      },
      {
        "id": "conclude",
        "type": "doc",
        "title": "实验结论",
        "progress": 88,
        "cols": [
          {
            "title": "推理过程",
            "lines": [
              "水通电 → 氢气 + 氧气",
              "氢气由氢元素组成，氧气由氧元素组成。",
              "化学反应前后元素种类不变，",
              "所以水中一定含有氢、氧两种元素。"
            ]
          },
          {
            "title": "还会想到的",
            "lines": [
              "正极：氧气（体积小，支持燃烧）",
              "负极：氢气（体积大，能燃烧）",
              "体积比 1 : 2"
            ]
          }
        ],
        "buttons": [
          {
            "t": "水由氢元素和氧元素组成",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "conclude"
              },
              {
                "do": "tip",
                "text": "正确！这是初中最重要的一条推理结论 ✓"
              },
              {
                "do": "goto",
                "id": "report",
                "delay": 1800
              }
            ]
          },
          {
            "t": "水由氢气和氧气组成",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "水是纯净物，里面只有水分子，不能说它「含有氢气和氧气」，应当说由氢、氧两种元素组成。"
              },
              {
                "do": "goto",
                "id": "report",
                "delay": 4200
              }
            ]
          }
        ]
      },
      {
        "id": "report",
        "type": "report",
        "title": "实验报告",
        "progress": 96,
        "buttons": [
          {
            "t": "提交报告",
            "c": "primary",
            "do": [
              {
                "do": "finish"
              },
              {
                "do": "goto",
                "id": "score"
              }
            ]
          }
        ]
      },
      {
        "id": "score",
        "type": "score",
        "title": "实验评分",
        "progress": 100,
        "buttons": [
          {
            "t": "导出本次成绩",
            "c": "ghost",
            "do": [
              {
                "do": "export"
              }
            ]
          },
          {
            "t": "查看常见错误",
            "c": "ghost",
            "goto": "errtable"
          },
          {
            "t": "重做实验",
            "c": "primary",
            "do": [
              {
                "do": "reset"
              }
            ]
          }
        ]
      },
      {
        "id": "errtable",
        "type": "errors",
        "title": "常见错误与后果",
        "progress": 100,
        "buttons": [
          {
            "t": "返回评分",
            "c": "ghost",
            "goto": "score"
          },
          {
            "t": "重做实验",
            "c": "primary",
            "do": [
              {
                "do": "reset"
              }
            ]
          }
        ]
      }
    ]
  },
  "exp_co2naoh": {
    "id": "co2naoh",
    "title": "二氧化碳与氢氧化钠溶液反应",
    "subtitle": "初中化学虚拟实验 · 无明显现象反应的验证",
    "badges": [
      "压强法",
      "对照实验",
      "满分 100 分"
    ],
    "viewBox": "0 0 600 360",
    "equipments": [
      {
        "id": "cogas",
        "name": "装满CO₂的塑料瓶",
        "need": true
      },
      {
        "id": "naoh",
        "name": "氢氧化钠溶液",
        "need": true
      },
      {
        "id": "water2",
        "name": "蒸馏水",
        "need": true
      },
      {
        "id": "acid",
        "name": "稀盐酸",
        "need": true
      },
      {
        "id": "phenol",
        "name": "酚酞试液",
        "need": false
      },
      {
        "id": "limewater",
        "name": "澄清石灰水",
        "need": false
      },
      {
        "id": "marble",
        "name": "大理石",
        "need": false
      }
    ],
    "dims": [
      {
        "key": "skill",
        "name": "操作规范"
      },
      {
        "key": "safety",
        "name": "安全意识"
      }
    ],
    "scoreItems": [
      {
        "key": "equip",
        "name": "器材选择",
        "max": 10,
        "dim": "skill"
      },
      {
        "key": "place",
        "name": "分组放置两瓶气体",
        "max": 8,
        "dim": "skill"
      },
      {
        "key": "pour",
        "name": "实验组加入氢氧化钠",
        "max": 14,
        "dim": "skill"
      },
      {
        "key": "control",
        "name": "对照组加入等体积水",
        "max": 12,
        "dim": "skill"
      },
      {
        "key": "cap",
        "name": "立即盖紧瓶盖并振荡",
        "max": 14,
        "dim": "safety"
      },
      {
        "key": "observe",
        "name": "解释瓶子变瘪的原因",
        "max": 12,
        "dim": "skill"
      },
      {
        "key": "verify",
        "name": "加稀盐酸检验碳酸盐",
        "max": 16,
        "dim": "skill"
      },
      {
        "key": "summary",
        "name": "归纳这类实验的思路",
        "max": 14,
        "dim": "skill"
      }
    ],
    "initialStage": {
      "bottleOn": false,
      "naohPour": false,
      "ctlWater": false,
      "capped": false,
      "openLeft": false,
      "cA": 0,
      "cB": 0,
      "gasCheck": false
    },
    "dropZones": {
      "placeAll": {
        "x": 110,
        "y": 128,
        "w": 392,
        "h": 196
      },
      "pmain": {
        "x": 148,
        "y": 92,
        "w": 104,
        "h": 74
      },
      "pctl": {
        "x": 358,
        "y": 92,
        "w": 104,
        "h": 74
      }
    },
    "scene": [
      {
        "tag": "rect",
        "x": 30,
        "y": 322,
        "width": 540,
        "height": 14,
        "rx": 5,
        "fill": "url(#gMetal)"
      },
      {
        "tag": "rect",
        "x": 30,
        "y": 322,
        "width": 540,
        "height": 4,
        "rx": 2,
        "fill": "#e8eef2",
        "opacity": 0.75
      },
      {
        "tag": "g",
        "when": "stage.bottleOn",
        "children": [
          {
            "tag": "path",
            "d": "@ 'M152 148 L248 148 L248 196 Q' + (248 - 15*stage.cA) + ' 232 248 264 L248 302 Q248 312 238 312 L162 312 Q152 312 152 302 L152 264 Q' + (152 + 15*stage.cA) + ' 232 152 196 Z'",
            "fill": "url(#gGlass)",
            "stroke": "#26a69a",
            "stroke-width": 2.4
          },
          {
            "tag": "rect",
            "x": 193,
            "y": 108,
            "width": 24,
            "height": 14,
            "rx": 3,
            "fill": "#80cbc4",
            "stroke": "#00897b",
            "stroke-width": 1.8
          },
          {
            "tag": "rect",
            "x": 196,
            "y": 120,
            "width": 18,
            "height": 30,
            "fill": "url(#gGlassH)",
            "stroke": "#26a69a",
            "stroke-width": 1.6
          },
          {
            "tag": "rect",
            "x": 156,
            "y": 152,
            "width": 88,
            "height": 118,
            "fill": "#e0f7fa",
            "opacity": 0.55
          },
          {
            "tag": "text",
            "when": "!stage.naohPour",
            "x": 200,
            "y": 214,
            "font-size": 13,
            "text-anchor": "middle",
            "fill": "#00695c",
            "font-weight": 700,
            "text": "CO₂"
          },
          {
            "tag": "rect",
            "when": "stage.naohPour",
            "x": 156,
            "y": 276,
            "width": 88,
            "height": 32,
            "rx": 4,
            "fill": "@ stage.gasCheck ? 'url(#gWater)' : '#f5f5f5'",
            "opacity": 0.9
          },
          {
            "tag": "g",
            "when": "stage.gasCheck",
            "children": [
              {
                "tag": "circle",
                "class": "bub",
                "cx": 178,
                "cy": 288,
                "r": 4,
                "fill": "#ffffff",
                "opacity": 0.9,
                "style": "animation-delay:0s"
              },
              {
                "tag": "circle",
                "class": "bub",
                "cx": 200,
                "cy": 292,
                "r": 5,
                "fill": "#ffffff",
                "opacity": 0.9,
                "style": "animation-delay:.35s"
              },
              {
                "tag": "circle",
                "class": "bub",
                "cx": 222,
                "cy": 289,
                "r": 3.5,
                "fill": "#ffffff",
                "opacity": 0.9,
                "style": "animation-delay:.7s"
              },
              {
                "tag": "text",
                "x": 200,
                "y": 258,
                "font-size": 11.5,
                "text-anchor": "middle",
                "fill": "#0277bd",
                "font-weight": 700,
                "text": "产生气泡 → 有碳酸盐"
              }
            ]
          },
          {
            "tag": "text",
            "x": 200,
            "y": 344,
            "font-size": 12,
            "text-anchor": "middle",
            "fill": "#b71c1c",
            "font-weight": 700,
            "text": "实验组：加氢氧化钠溶液"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.bottleOn",
        "children": [
          {
            "tag": "path",
            "d": "@ 'M362 148 L458 148 L458 196 Q' + (458 - 15*stage.cB) + ' 232 458 264 L458 302 Q458 312 448 312 L372 312 Q362 312 362 302 L362 264 Q' + (362 + 15*stage.cB) + ' 232 362 196 Z'",
            "fill": "url(#gGlass)",
            "stroke": "#78909c",
            "stroke-width": 2.4
          },
          {
            "tag": "rect",
            "x": 403,
            "y": 108,
            "width": 24,
            "height": 14,
            "rx": 3,
            "fill": "#cfd8dc",
            "stroke": "#607d8b",
            "stroke-width": 1.8
          },
          {
            "tag": "rect",
            "x": 406,
            "y": 120,
            "width": 18,
            "height": 30,
            "fill": "url(#gGlassH)",
            "stroke": "#78909c",
            "stroke-width": 1.6
          },
          {
            "tag": "rect",
            "x": 366,
            "y": 152,
            "width": 88,
            "height": 118,
            "fill": "#eceff1",
            "opacity": 0.5
          },
          {
            "tag": "text",
            "when": "!stage.ctlWater",
            "x": 410,
            "y": 214,
            "font-size": 13,
            "text-anchor": "middle",
            "fill": "#455a64",
            "font-weight": 700,
            "text": "CO₂"
          },
          {
            "tag": "rect",
            "when": "stage.ctlWater",
            "x": 366,
            "y": 276,
            "width": 88,
            "height": 32,
            "rx": 4,
            "fill": "url(#gWater)",
            "opacity": 0.85
          },
          {
            "tag": "text",
            "x": 410,
            "y": 344,
            "font-size": 12,
            "text-anchor": "middle",
            "fill": "#455a64",
            "font-weight": 700,
            "text": "对照组：加等量蒸馏水"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.capped",
        "children": [
          {
            "tag": "text",
            "x": 300,
            "y": 96,
            "font-size": 12,
            "text-anchor": "middle",
            "fill": "#0277bd",
            "font-weight": 700,
            "text": "振荡，使CO₂与溶液充分接触"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.openLeft",
        "children": [
          {
            "tag": "circle",
            "class": "bub",
            "cx": 205,
            "cy": 96,
            "r": 5,
            "fill": "#b2dfdb",
            "opacity": 0.9,
            "style": "animation-delay:0s"
          },
          {
            "tag": "circle",
            "class": "bub",
            "cx": 218,
            "cy": 88,
            "r": 4,
            "fill": "#b2dfdb",
            "opacity": 0.9,
            "style": "animation-delay:.5s"
          },
          {
            "tag": "text",
            "x": 236,
            "y": 84,
            "font-size": 11.5,
            "fill": "#dc2626",
            "font-weight": 700,
            "text": "CO₂ 从瓶口跑掉了"
          }
        ]
      }
    ],
    "report": [
      {
        "title": "实验记录",
        "lines": [
          "实验名称：二氧化碳与氢氧化钠溶液反应",
          "反应原理：CO₂ + 2NaOH = Na₂CO₃ + H₂O",
          "实验组：向充满 CO₂ 的塑料瓶中加入约 1/5 体积 NaOH 溶液，立即盖紧振荡",
          "对照组：向同样充满 CO₂ 的塑料瓶中加入等体积蒸馏水，盖紧振荡",
          "检验：向反应后的溶液中滴加稀盐酸，产生气泡"
        ]
      },
      {
        "title": "现象记录",
        "lines": [
          "1. 实验组：加入 NaOH 溶液并振荡后，塑料瓶明显变瘪，瓶壁向内凹陷",
          "2. 对照组：加入蒸馏水振荡后，塑料瓶只有极轻微的变化",
          "3. 向实验组反应后的液体中滴加稀盐酸，有大量气泡产生"
        ]
      },
      {
        "title": "实验结论",
        "lines": [
          "二氧化碳能与氢氧化钠溶液反应，被吸收后瓶内气体减少、压强变小，",
          "外界大气压把塑料瓶压瘪了。因为反应本身没有颜色变化、没有沉淀，",
          "所以要借助「压强变化」这个看得见的现象来间接证明反应确实发生。",
          "生成的碳酸钠能与稀盐酸反应放出二氧化碳，这是检验该产物的依据。"
        ]
      }
    ],
    "errorTable": [
      {
        "op": "加完溶液后敞口不盖瓶盖",
        "phen": "瓶内外压强始终相通",
        "result": "瓶子不变瘪，实验失败",
        "score": 14
      },
      {
        "op": "没有做对照组",
        "phen": "分不清是谁的作用",
        "result": "无法排除水也能吸收CO₂",
        "score": 12
      },
      {
        "op": "用酚酞检验产物",
        "phen": "过量NaOH也能使其变红",
        "result": "不能证明生成了碳酸盐",
        "score": 16
      },
      {
        "op": "只在实验组加很多NaOH",
        "phen": "对照组水量不等",
        "result": "变量不唯一，对比无效",
        "score": 12
      },
      {
        "op": "用大理石和稀盐酸",
        "phen": "那是制取CO₂的药品",
        "result": "本实验要用已收集好的CO₂",
        "score": 10
      },
      {
        "op": "用澄清石灰水代替NaOH溶液",
        "phen": "石灰水用于检验CO₂",
        "result": "不是本实验要研究的反应",
        "score": 12
      }
    ],
    "steps": [
      {
        "id": "cover",
        "type": "cover",
        "title": "准备开始",
        "progress": 0,
        "headline": "二氧化碳与氢氧化钠溶液反应",
        "subtitle": "看不见现象的反应，怎么证明它真的发生了？",
        "buttons": [
          {
            "t": "开始实验",
            "c": "primary",
            "goto": "goal"
          }
        ]
      },
      {
        "id": "goal",
        "type": "doc",
        "title": "实验目标",
        "progress": 6,
        "cols": [
          {
            "title": "实验目标",
            "lines": [
              "1. 知道 CO₂ 与 NaOH 反应但无明显现象",
              "2. 学会用「压强变化」把看不见的反应显示出来",
              "3. 体会对照实验中「变量唯一」的思想",
              "4. 学会检验产物：碳酸盐遇酸会产生气泡",
              "5. 写出方程式：CO₂ + 2NaOH = Na₂CO₃ + H₂O"
            ]
          },
          {
            "title": "操作方式",
            "lines": [
              "● 拖拽试剂到对应瓶口的高亮区域",
              "● 遇到思考题时点选项作答",
              "● 右侧显示当前实验阶段",
              "● 卡住时点右下角“？”获取提示"
            ]
          },
          {
            "title": "安全提示",
            "lines": [
              "⚠ 氢氧化钠有强腐蚀性，不能用手直接接触",
              "⚠ 沾到皮肤上要立即用大量水冲洗，再涂硼酸溶液",
              "⚠ 塑料瓶要盖紧后再振荡，防止液体溅出",
              "⚠ 振荡时不要对着人"
            ]
          }
        ],
        "buttons": [
          {
            "t": "下一步",
            "c": "primary",
            "goto": "equip"
          },
          {
            "t": "返回封面",
            "c": "ghost",
            "goto": "cover"
          }
        ]
      },
      {
        "id": "equip",
        "type": "equip",
        "title": "选择实验器材",
        "progress": 12,
        "tip": "NaOH 有强腐蚀性、要对照、还要能证明产物是碳酸盐——想一想都要用到哪些东西",
        "buttons": [
          {
            "t": "确认器材",
            "c": "primary",
            "do": [
              {
                "do": "checkEquip",
                "key": "equip",
                "goto": "place"
              }
            ]
          }
        ]
      },
      {
        "id": "place",
        "type": "stage",
        "title": "取两瓶相同的二氧化碳",
        "progress": 20,
        "shelf": [
          "cogas"
        ],
        "desc": "实验要分成两组：一组加氢氧化钠溶液，一组加等体积的水做对照。",
        "help": "把两瓶充满二氧化碳的塑料瓶拖到桌面上。两个瓶子必须完全相同（同材质、同体积、同样集满气体），对比才有意义。",
        "zones": [
          "placeAll"
        ],
        "drop": [
          {
            "equip": "cogas",
            "zone": "placeAll",
            "do": [
              {
                "do": "set",
                "k": "bottleOn",
                "v": true
              },
              {
                "do": "score",
                "key": "place"
              },
              {
                "do": "tip",
                "text": "两瓶相同的二氧化碳已放好：左边做实验组，右边做对照组 ✓"
              },
              {
                "do": "goto",
                "id": "pour",
                "delay": 1200
              }
            ]
          },
          {
            "equip": "cogas",
            "do": [
              {
                "do": "err",
                "text": "塑料瓶要放在桌面中央的高亮区域。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步需要的是已经收集满二氧化碳的塑料瓶。"
              }
            ]
          }
        ]
      },
      {
        "id": "pour",
        "type": "stage",
        "title": "加入等体积的液体",
        "progress": 32,
        "shelf": [
          "naoh",
          "water2"
        ],
        "desc": "实验组加入氢氧化钠溶液，对照组加入等体积的蒸馏水。这就是变量。",
        "help": "把氢氧化钠溶液拖到左边瓶口，把蒸馏水拖到右边瓶口。两组加入的液体体积必须相同，否则就不是一个变量的对比了。",
        "zones": [
          "pmain",
          "pctl"
        ],
        "drop": [
          {
            "equip": "naoh",
            "zone": "pmain",
            "do": [
              {
                "do": "set",
                "k": "naohPour",
                "v": true
              },
              {
                "do": "score",
                "key": "pour"
              },
              {
                "do": "tip",
                "text": "实验组加入氢氧化钠溶液 ✓ 对照组还没加水"
              },
              {
                "do": "if",
                "cond": "stage.ctlWater",
                "then": [
                  {
                    "do": "goto",
                    "id": "cap",
                    "delay": 1100
                  }
                ]
              }
            ]
          },
          {
            "equip": "water2",
            "zone": "pctl",
            "do": [
              {
                "do": "set",
                "k": "ctlWater",
                "v": true
              },
              {
                "do": "score",
                "key": "control"
              },
              {
                "do": "tip",
                "text": "对照组加入等体积蒸馏水 ✓ 现在两组只有一个变量不同"
              },
              {
                "do": "if",
                "cond": "stage.naohPour",
                "then": [
                  {
                    "do": "goto",
                    "id": "cap",
                    "delay": 1100
                  }
                ]
              }
            ]
          },
          {
            "equip": "water2",
            "zone": "pmain",
            "do": [
              {
                "do": "err",
                "text": "实验组要加的是氢氧化钠溶液，水请加到右边的对照组里。"
              }
            ]
          },
          {
            "equip": "naoh",
            "zone": "pctl",
            "do": [
              {
                "do": "err",
                "text": "对照组只能加等体积的水，这样才能和实验组形成单一变量对比。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要加的是液体：实验组氢氧化钠溶液，对照组蒸馏水。"
              }
            ]
          }
        ]
      },
      {
        "id": "cap",
        "type": "doc",
        "title": "盖紧瓶盖后该怎么办？",
        "progress": 44,
        "cols": [
          {
            "title": "想一想",
            "lines": [
              "液体已经加进去了，接下来两种做法：",
              "A. 立刻盖紧瓶盖，然后振荡，让气体和液体充分接触",
              "B. 敞口放一会儿，让反应慢慢进行",
              "",
              "选哪种？为什么？"
            ]
          },
          {
            "title": "提示",
            "lines": [
              "反应只发生在气体与液体的接触面上。",
              "振荡能大大增加接触面积，让反应更快更完全。",
              "而敞口放置的话，瓶内压强始终和外界相通，",
              "即使气体被吸收，外面的空气也会补进去。"
            ]
          }
        ],
        "buttons": [
          {
            "t": "立即盖紧瓶盖并振荡",
            "c": "primary",
            "do": [
              {
                "do": "set",
                "k": "capped",
                "v": true
              },
              {
                "do": "score",
                "key": "cap"
              },
              {
                "do": "tip",
                "text": "盖紧并振荡，CO₂ 正在被氢氧化钠溶液吸收…"
              },
              {
                "do": "set",
                "k": "cA",
                "v": 0.8,
                "delay": 900
              },
              {
                "do": "set",
                "k": "cA",
                "v": 1.6,
                "delay": 1700
              },
              {
                "do": "set",
                "k": "cB",
                "v": 0.5,
                "delay": 1900
              },
              {
                "do": "set",
                "k": "cA",
                "v": 2,
                "delay": 2500
              },
              {
                "do": "tip",
                "text": "看！实验组瓶子明显瘪了，对照组几乎没变化",
                "delay": 2700
              },
              {
                "do": "goto",
                "id": "observe",
                "delay": 3600
              }
            ]
          },
          {
            "t": "敞口放一会儿再说",
            "c": "ghost",
            "do": [
              {
                "do": "set",
                "k": "openLeft",
                "v": true
              },
              {
                "do": "err",
                "text": "敞口时瓶内外压强相通，气体被吸收也没人看得出来，瓶子不会变瘪。而且 CO₂ 还会跑掉。"
              },
              {
                "do": "goto",
                "id": "observe",
                "delay": 4200
              }
            ]
          }
        ]
      },
      {
        "id": "observe",
        "type": "doc",
        "title": "为什么会变瘪？",
        "progress": 56,
        "cols": [
          {
            "title": "现象",
            "lines": [
              "实验组：塑料瓶明显变瘪，瓶壁向内凹陷",
              "对照组：几乎看不出变化",
              "",
              "同样的两瓶气体，为什么差别这么大？"
            ]
          },
          {
            "title": "分析",
            "lines": [
              "瓶内气体被吸收 → 气体分子数减少",
              "→ 瓶内压强变小 → 小于外界大气压",
              "→ 大气压把软塑料瓶压瘪",
              "水只能溶解很少的 CO₂，所以对照瓶几乎不变"
            ]
          }
        ],
        "buttons": [
          {
            "t": "CO₂被NaOH吸收，气体减少、压强变小",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "observe"
              },
              {
                "do": "tip",
                "text": "说对了！这正是把「看不见的反应」变成「看得见的形变」的关键 ✓"
              },
              {
                "do": "goto",
                "id": "verify",
                "delay": 1600
              }
            ]
          },
          {
            "t": "氢氧化钠把塑料瓶腐蚀软了",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "氢氧化钠确实有腐蚀性，但在这么短的时间内不会把塑料腐蚀变形。想想对照组也没变化——它也加了液体。"
              }
            ]
          },
          {
            "t": "振荡时手把瓶子捏瘪了",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "两瓶都振荡了，对照组却几乎没变。所以形变不是手捏出来的，而是瓶内气体减少造成的。"
              }
            ]
          }
        ]
      },
      {
        "id": "verify",
        "type": "stage",
        "title": "检验生成的新物质",
        "progress": 70,
        "shelf": [
          "acid"
        ],
        "desc": "如果 CO₂ 真的和 NaOH 反应生成了碳酸钠，那么往里面加稀盐酸就会产生气泡。",
        "help": "把稀盐酸拖到实验组瓶口。想一想：为什么不能用酚酞来证明？（氢氧化钠过量也会让酚酞变红）",
        "zones": [
          "pmain"
        ],
        "drop": [
          {
            "equip": "acid",
            "zone": "pmain",
            "do": [
              {
                "do": "set",
                "k": "gasCheck",
                "v": true
              },
              {
                "do": "score",
                "key": "verify"
              },
              {
                "do": "tip",
                "text": "产生大量气泡：Na₂CO₃ + 2HCl = 2NaCl + H₂O + CO₂↑ ✓"
              },
              {
                "do": "goto",
                "id": "summary",
                "delay": 2200
              }
            ]
          },
          {
            "equip": "phenol",
            "zone": "pmain",
            "do": [
              {
                "do": "err",
                "text": "酚酞会变红，但过量的氢氧化钠同样能让酚酞变红，所以它不能证明生成了新的物质。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要用能检验碳酸盐的试剂：加入后会放出气体。"
              }
            ]
          }
        ]
      },
      {
        "id": "summary",
        "type": "doc",
        "title": "这类实验的关键思路",
        "progress": 82,
        "cols": [
          {
            "title": "小结",
            "lines": [
              "CO₂ + 2NaOH = Na₂CO₃ + H₂O",
              "这个反应没有沉淀、没有颜色变化、没有气体放出，",
              "肉眼什么都看不到。",
              "所以必须借助某个「能看见的变化」来间接证明。"
            ]
          },
          {
            "title": "可用的间接证据",
            "lines": [
              "● 压强变化：密闭容器内气体减少 → 瓶子变瘪",
              "● 检验产物：加酸有气泡 → 生成了碳酸盐",
              "● 设置对照：排除水本身也能吸收 CO₂ 的可能",
              "这三个思路合在一起，结论才站得住。"
            ]
          }
        ],
        "buttons": [
          {
            "t": "用压强变化+检验产物+对照实验来间接证明",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "summary"
              },
              {
                "do": "tip",
                "text": "完全正确 ✓ 这就是研究「无明显现象反应」的通用方法"
              },
              {
                "do": "goto",
                "id": "report",
                "delay": 1600
              }
            ]
          },
          {
            "t": "盯着看，看到现象就说明反应了",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "这类反应恰恰看不到现象。要主动制造一个能被观察到的变化。"
              }
            ]
          },
          {
            "t": "用天平称量反应前后的总质量",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "这个体系总质量本来就不变（质量守恒），称不出差别。要用能变化的现象。"
              }
            ]
          }
        ]
      },
      {
        "id": "report",
        "type": "report",
        "title": "实验报告",
        "progress": 92,
        "buttons": [
          {
            "t": "提交报告",
            "c": "primary",
            "do": [
              {
                "do": "finish"
              },
              {
                "do": "goto",
                "id": "score"
              }
            ]
          }
        ]
      },
      {
        "id": "score",
        "type": "score",
        "title": "实验评分",
        "progress": 100,
        "buttons": [
          {
            "t": "导出本次成绩",
            "c": "ghost",
            "do": [
              {
                "do": "export"
              }
            ]
          },
          {
            "t": "查看常见错误",
            "c": "ghost",
            "goto": "errtable"
          },
          {
            "t": "重做实验",
            "c": "primary",
            "do": [
              {
                "do": "reset"
              }
            ]
          }
        ]
      },
      {
        "id": "errtable",
        "type": "errors",
        "title": "常见错误与后果",
        "progress": 100,
        "buttons": [
          {
            "t": "返回评分",
            "c": "ghost",
            "goto": "score"
          },
          {
            "t": "重做实验",
            "c": "primary",
            "do": [
              {
                "do": "reset"
              }
            ]
          }
        ]
      }
    ]
  },
  "exp_cao": {
    "id": "cao",
    "title": "生石灰与水反应放热",
    "subtitle": "初中化学虚拟实验 · 化合反应与干燥剂",
    "badges": [
      "CaO + H₂O",
      "放热反应",
      "满分 100 分"
    ],
    "viewBox": "0 0 600 360",
    "equipments": [
      {
        "id": "quicklime",
        "name": "生石灰（块状）",
        "need": true
      },
      {
        "id": "beaker",
        "name": "烧杯",
        "need": true
      },
      {
        "id": "water2",
        "name": "蒸馏水",
        "need": true
      },
      {
        "id": "rod",
        "name": "玻璃棒",
        "need": true
      },
      {
        "id": "thermo",
        "name": "温度计",
        "need": true
      },
      {
        "id": "spoon",
        "name": "药匙",
        "need": true
      },
      {
        "id": "phenol",
        "name": "酚酞试液",
        "need": true
      },
      {
        "id": "flask",
        "name": "锥形瓶",
        "need": false
      },
      {
        "id": "lamp",
        "name": "酒精灯",
        "need": false
      },
      {
        "id": "acid",
        "name": "稀盐酸",
        "need": false
      }
    ],
    "dims": [
      {
        "key": "skill",
        "name": "操作规范"
      },
      {
        "key": "safety",
        "name": "安全意识"
      }
    ],
    "scoreItems": [
      {
        "key": "equip",
        "name": "器材选择",
        "max": 10,
        "dim": "skill"
      },
      {
        "key": "beaker",
        "name": "放置烧杯",
        "max": 6,
        "dim": "skill"
      },
      {
        "key": "lime",
        "name": "取用块状生石灰",
        "max": 10,
        "dim": "skill"
      },
      {
        "key": "thermo",
        "name": "先测水的初温",
        "max": 8,
        "dim": "skill"
      },
      {
        "key": "water",
        "name": "把水加入生石灰",
        "max": 12,
        "dim": "skill"
      },
      {
        "key": "judge",
        "name": "判断反应放热",
        "max": 12,
        "dim": "safety"
      },
      {
        "key": "stir",
        "name": "用玻璃棒搅拌",
        "max": 12,
        "dim": "skill"
      },
      {
        "key": "verify",
        "name": "酚酞检验生成的碱",
        "max": 14,
        "dim": "skill"
      },
      {
        "key": "summary",
        "name": "归纳用途与原理",
        "max": 16,
        "dim": "skill"
      }
    ],
    "initialStage": {
      "beakerOn": false,
      "limeIn": false,
      "thermoIn": false,
      "lvl": 0,
      "waterIn": false,
      "temp": 20,
      "hot": false,
      "stirred": false,
      "sampleOn": false,
      "phenolIn": false,
      "pink": false
    },
    "dropZones": {
      "bench": {
        "x": 180,
        "y": 206,
        "w": 200,
        "h": 118
      },
      "mouth": {
        "x": 244,
        "y": 146,
        "w": 112,
        "h": 86
      },
      "thzone": {
        "x": 274,
        "y": 96,
        "w": 58,
        "h": 196
      },
      "sample": {
        "x": 424,
        "y": 150,
        "w": 108,
        "h": 168
      }
    },
    "scene": [
      {
        "tag": "rect",
        "x": 30,
        "y": 322,
        "width": 540,
        "height": 14,
        "rx": 5,
        "fill": "url(#gMetal)"
      },
      {
        "tag": "rect",
        "x": 30,
        "y": 322,
        "width": 540,
        "height": 4,
        "rx": 2,
        "fill": "#e8eef2",
        "opacity": 0.75
      },
      {
        "tag": "g",
        "when": "stage.beakerOn",
        "children": [
          {
            "tag": "path",
            "d": "M240 178 L240 298 Q240 312 254 312 L346 312 Q360 312 360 298 L360 178 Z",
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.4
          },
          {
            "tag": "rect",
            "x": 234,
            "y": 168,
            "width": 132,
            "height": 12,
            "rx": 5,
            "fill": "url(#gGlassH)",
            "stroke": "#7ba7c7",
            "stroke-width": 1.6
          },
          {
            "tag": "path",
            "d": "M234 174 L226 168 L234 162",
            "fill": "none",
            "stroke": "#7ba7c7",
            "stroke-width": 2
          },
          {
            "tag": "path",
            "d": "M248 190 L248 292",
            "stroke": "#ffffff",
            "stroke-width": 2.2,
            "opacity": 0.8,
            "fill": "none"
          },
          {
            "tag": "g",
            "when": "stage.limeIn && !stage.waterIn",
            "children": [
              {
                "tag": "circle",
                "cx": 268,
                "cy": 296,
                "r": 14,
                "fill": "#ffffff",
                "stroke": "#cfd8dc",
                "stroke-width": 1.4
              },
              {
                "tag": "circle",
                "cx": 300,
                "cy": 292,
                "r": 12,
                "fill": "#fafafa",
                "stroke": "#cfd8dc",
                "stroke-width": 1.4
              },
              {
                "tag": "circle",
                "cx": 332,
                "cy": 297,
                "r": 13,
                "fill": "#f5f5f5",
                "stroke": "#cfd8dc",
                "stroke-width": 1.4
              },
              {
                "tag": "path",
                "d": "M262 292 L274 300 M326 293 L338 301",
                "stroke": "#e0e0e0",
                "stroke-width": 1.2,
                "fill": "none"
              }
            ]
          },
          {
            "tag": "rect",
            "when": "stage.lvl>0",
            "x": 243,
            "y": "@ 306 - 78*stage.lvl/100",
            "width": 114,
            "height": "@ 78*stage.lvl/100",
            "rx": 3,
            "fill": "@ stage.stirred ? '#eceff1' : 'url(#gWater)'",
            "opacity": "@ stage.stirred ? 0.95 : 0.85"
          },
          {
            "tag": "g",
            "when": "stage.waterIn && stage.lvl>60",
            "children": [
              {
                "tag": "circle",
                "class": "bub",
                "cx": 272,
                "cy": 288,
                "r": 4,
                "fill": "#ffffff",
                "opacity": 0.85,
                "style": "animation-delay:0s"
              },
              {
                "tag": "circle",
                "class": "bub",
                "cx": 300,
                "cy": 284,
                "r": 5,
                "fill": "#ffffff",
                "opacity": 0.85,
                "style": "animation-delay:.4s"
              },
              {
                "tag": "circle",
                "class": "bub",
                "cx": 328,
                "cy": 288,
                "r": 3.5,
                "fill": "#ffffff",
                "opacity": 0.85,
                "style": "animation-delay:.8s"
              }
            ]
          },
          {
            "tag": "g",
            "when": "stage.stirred",
            "children": [
              {
                "tag": "rect",
                "x": 243,
                "y": 286,
                "width": 114,
                "height": 22,
                "rx": 4,
                "fill": "#ffffff",
                "opacity": 0.9
              },
              {
                "tag": "text",
                "x": 328,
                "y": 248,
                "font-size": 10.5,
                "text-anchor": "middle",
                "fill": "#455a64",
                "text": "白色糊状"
              }
            ]
          },
          {
            "tag": "text",
            "x": 300,
            "y": 344,
            "font-size": 12,
            "text-anchor": "middle",
            "fill": "#455a64",
            "font-weight": 700,
            "text": "烧杯：生石灰 + 水"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.hot",
        "children": [
          {
            "tag": "circle",
            "class": "bub",
            "cx": 268,
            "cy": 152,
            "r": 6,
            "fill": "#ffffff",
            "opacity": 0.75,
            "style": "animation-delay:0s"
          },
          {
            "tag": "circle",
            "class": "bub",
            "cx": 300,
            "cy": 146,
            "r": 7,
            "fill": "#ffffff",
            "opacity": 0.7,
            "style": "animation-delay:.5s"
          },
          {
            "tag": "circle",
            "class": "bub",
            "cx": 332,
            "cy": 152,
            "r": 5.5,
            "fill": "#ffffff",
            "opacity": 0.75,
            "style": "animation-delay:1s"
          },
          {
            "tag": "text",
            "x": 280,
            "y": 118,
            "font-size": 11.5,
            "text-anchor": "end",
            "fill": "#b71c1c",
            "font-weight": 700,
            "text": "冒出大量白汽 · 放出大量的热"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.thermoIn",
        "children": [
          {
            "tag": "rect",
            "x": 287,
            "y": 108,
            "width": 8,
            "height": 170,
            "rx": 4,
            "fill": "url(#gGlass)",
            "stroke": "#90a4ae",
            "stroke-width": 1.4
          },
          {
            "tag": "rect",
            "x": 289,
            "y": "@ 268 - 1.24*stage.temp",
            "width": 4,
            "height": "@ 12 + 1.24*stage.temp",
            "fill": "#ef5350"
          },
          {
            "tag": "circle",
            "cx": 291,
            "cy": 272,
            "r": 8,
            "fill": "#ef5350",
            "stroke": "#c62828",
            "stroke-width": 1.2
          },
          {
            "tag": "path",
            "d": "M297 124 L302 124 M297 140 L302 140 M297 156 L302 156 M297 172 L302 172 M297 188 L302 188",
            "stroke": "#607d8b",
            "stroke-width": 1,
            "fill": "none"
          },
          {
            "tag": "text",
            "x": 316,
            "y": "@ 272 - 1.24*stage.temp",
            "font-size": 12,
            "fill": "@ stage.temp>45 ? '#b71c1c' : '#0277bd'",
            "font-weight": 700,
            "text": "@ Math.round(stage.temp) + ' ℃'"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.sampleOn",
        "children": [
          {
            "tag": "path",
            "d": "M452 176 L452 284 Q452 298 466 298 L494 298 Q508 298 508 284 L508 176 Z",
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2
          },
          {
            "tag": "rect",
            "x": 448,
            "y": 168,
            "width": 64,
            "height": 10,
            "rx": 4,
            "fill": "url(#gGlassH)",
            "stroke": "#7ba7c7",
            "stroke-width": 1.4
          },
          {
            "tag": "rect",
            "x": 455,
            "y": 218,
            "width": 50,
            "height": 76,
            "rx": 3,
            "fill": "@ stage.pink ? 'url(#gPink)' : '#f5f5f5'",
            "opacity": 0.9
          },
          {
            "tag": "text",
            "x": 480,
            "y": 344,
            "font-size": 11.5,
            "text-anchor": "middle",
            "fill": "#455a64",
            "font-weight": 700,
            "text": "上层清液"
          },
          {
            "tag": "text",
            "when": "stage.pink",
            "x": 480,
            "y": 160,
            "font-size": 11.5,
            "text-anchor": "middle",
            "fill": "#ad1457",
            "font-weight": 700,
            "text": "变红 → 溶液显碱性"
          }
        ]
      }
    ],
    "report": [
      {
        "title": "实验记录",
        "lines": [
          "实验名称：生石灰与水反应",
          "反应原理：CaO + H₂O = Ca(OH)₂（化合反应，放出大量的热）",
          "操作：烧杯中放块状生石灰 → 插入温度计记下初温 → 倒入水 → 观察读数与白汽",
          "检验：取上层清液滴加酚酞，溶液变红，说明生成了碱性的氢氧化钙"
        ]
      },
      {
        "title": "现象记录",
        "lines": [
          "1. 加水后块状生石灰逐渐变成白色粉末，最后成白色糊状",
          "2. 温度计示数迅速上升，烧杯外壁发烫，有大量白汽冒出",
          "3. 上层清液滴加酚酞后变红"
        ]
      },
      {
        "title": "实验结论",
        "lines": [
          "生石灰与水发生化合反应生成熟石灰 Ca(OH)₂，同时放出大量的热。",
          "因为反应放热且能吸水，生石灰常被用作食品等物品的干燥剂。",
          "熟石灰的水溶液就是澄清石灰水，显碱性，能使酚酞变红。"
        ]
      }
    ],
    "errorTable": [
      {
        "op": "先把水倒进烧杯再加生石灰",
        "phen": "块状固体沉底、可能溅出",
        "result": "操作顺序不规范，容易烫伤",
        "score": 12
      },
      {
        "op": "没测水的初温就加水",
        "phen": "不知道升高了多少",
        "result": "无法证明反应放热",
        "score": 8
      },
      {
        "op": "直接用手触摸烧杯外壁",
        "phen": "反应剧烈放热",
        "result": "容易烫伤皮肤",
        "score": 12
      },
      {
        "op": "加水后不使用玻璃棒搅拌",
        "phen": "固体结块沉底",
        "result": "反应不充分、局部过热",
        "score": 12
      },
      {
        "op": "误用酒精灯加热",
        "phen": "本反应常温自发剧烈进行",
        "result": "装置与操作选择错误",
        "score": 10
      },
      {
        "op": "用锥形瓶代替烧杯",
        "phen": "口径小，不便搅拌与取样",
        "result": "器材选择不当",
        "score": 6
      },
      {
        "op": "用稀盐酸代替水",
        "phen": "那是与碱反应",
        "result": "研究对象错误",
        "score": 14
      }
    ],
    "steps": [
      {
        "id": "cover",
        "type": "cover",
        "title": "准备开始",
        "progress": 0,
        "headline": "生石灰与水反应放热",
        "subtitle": "一块白石头，遇水竟能烧开水？",
        "buttons": [
          {
            "t": "开始实验",
            "c": "primary",
            "goto": "goal"
          }
        ]
      },
      {
        "id": "goal",
        "type": "doc",
        "title": "实验目标",
        "progress": 6,
        "cols": [
          {
            "title": "实验目标",
            "lines": [
              "1. 认识化合反应 CaO + H₂O = Ca(OH)₂",
              "2. 通过温度计示数变化确认反应放热",
              "3. 学会用酚酞检验碱性物质",
              "4. 理解生石灰作干燥剂的原因",
              "5. 知道熟石灰的水溶液就是澄清石灰水"
            ]
          },
          {
            "title": "操作方式",
            "lines": [
              "● 拖拽器材和试剂到高亮区域",
              "● 遇到思考题时点选项作答",
              "● 右侧显示当前实验阶段",
              "● 卡住时点右下角“？”获取提示"
            ]
          },
          {
            "title": "安全提示",
            "lines": [
              "⚠ 该反应放出大量热，切勿用手直接触摸烧杯外壁",
              "⚠ 生石灰和熟石灰都有腐蚀性，避免接触皮肤和眼睛",
              "⚠ 块状固体要沿杯壁缓慢放入，防止水花飞溅",
              "⚠ 加料顺序：先放固体，后加液体"
            ]
          }
        ],
        "buttons": [
          {
            "t": "下一步",
            "c": "primary",
            "goto": "equip"
          },
          {
            "t": "返回封面",
            "c": "ghost",
            "goto": "cover"
          }
        ]
      },
      {
        "id": "equip",
        "type": "equip",
        "title": "选择实验器材",
        "progress": 12,
        "tip": "要能看到温度的变化、要能搅拌、还要能检验生成的碱——想一想都要哪些东西",
        "buttons": [
          {
            "t": "确认器材",
            "c": "primary",
            "do": [
              {
                "do": "checkEquip",
                "key": "equip",
                "goto": "beaker"
              }
            ]
          }
        ]
      },
      {
        "id": "beaker",
        "type": "stage",
        "title": "放置烧杯",
        "progress": 18,
        "shelf": [
          "beaker"
        ],
        "desc": "先把反应容器放在桌面上。烧杯口径大，方便投料、搅拌和取样。",
        "help": "把烧杯拖到桌面中间的高亮区域。想一想：为什么要用烧杯而不是锥形瓶？",
        "zones": [
          "bench"
        ],
        "drop": [
          {
            "equip": "beaker",
            "zone": "bench",
            "do": [
              {
                "do": "set",
                "k": "beakerOn",
                "v": true
              },
              {
                "do": "score",
                "key": "beaker"
              },
              {
                "do": "tip",
                "text": "烧杯已放好 ✓ 接下来先放固体"
              },
              {
                "do": "goto",
                "id": "lime",
                "delay": 1000
              }
            ]
          },
          {
            "equip": "flask",
            "zone": "bench",
            "do": [
              {
                "do": "err",
                "text": "锥形瓶口径太小，不便于投放块状固体和搅拌。本实验用烧杯更合适。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要放的是反应容器。"
              }
            ]
          }
        ]
      },
      {
        "id": "lime",
        "type": "stage",
        "title": "取用块状生石灰",
        "progress": 26,
        "shelf": [
          "quicklime",
          "spoon"
        ],
        "desc": "用药匙取几块生石灰放入烧杯。加料顺序是：先固体，后液体。",
        "help": "把生石灰拖到烧杯里。生石灰是白色块状固体，化学式 CaO，俗称「白石头」。",
        "zones": [
          "mouth"
        ],
        "drop": [
          {
            "equip": "quicklime",
            "zone": "mouth",
            "do": [
              {
                "do": "set",
                "k": "limeIn",
                "v": true
              },
              {
                "do": "score",
                "key": "lime"
              },
              {
                "do": "tip",
                "text": "已放入几块生石灰 ✓ 白色块状固体"
              },
              {
                "do": "goto",
                "id": "thermo",
                "delay": 1100
              }
            ]
          },
          {
            "equip": "spoon",
            "zone": "mouth",
            "do": [
              {
                "do": "err",
                "text": "药匙是用来取药品的工具，本身不是药品。要放进去的是生石灰。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要取用的是白色块状固体——生石灰。"
              }
            ]
          }
        ]
      },
      {
        "id": "thermo",
        "type": "stage",
        "title": "插入温度计，记下初温",
        "progress": 34,
        "shelf": [
          "thermo"
        ],
        "desc": "先把温度计插进去，记下加水前的温度。没有对照读数，后面就看不出升高了多少。",
        "help": "把温度计拖到烧杯上方的位置。温度计的玻璃泡要完全浸没在液体中，且不能碰到杯底和杯壁。",
        "zones": [
          "thzone"
        ],
        "drop": [
          {
            "equip": "thermo",
            "zone": "thzone",
            "do": [
              {
                "do": "set",
                "k": "thermoIn",
                "v": true
              },
              {
                "do": "score",
                "key": "thermo"
              },
              {
                "do": "tip",
                "text": "温度计已放好，当前室温约 20 ℃ ✓"
              },
              {
                "do": "goto",
                "id": "water",
                "delay": 1200
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要把温度计放进去，先测出加水前的初温。"
              }
            ]
          }
        ]
      },
      {
        "id": "water",
        "type": "stage",
        "title": "加入水",
        "progress": 44,
        "shelf": [
          "water2"
        ],
        "desc": "沿烧杯壁把水倒入，观察生石灰的变化和温度计读数。",
        "help": "把蒸馏水拖到烧杯口。注意安全：反应会放出大量的热，千万不要用手去摸烧杯外壁。",
        "zones": [
          "mouth"
        ],
        "drop": [
          {
            "equip": "water2",
            "zone": "mouth",
            "do": [
              {
                "do": "set",
                "k": "waterIn",
                "v": true
              },
              {
                "do": "set",
                "k": "lvl",
                "v": 45,
                "delay": 400
              },
              {
                "do": "set",
                "k": "lvl",
                "v": 100,
                "delay": 1000
              },
              {
                "do": "set",
                "k": "temp",
                "v": 46,
                "delay": 1200
              },
              {
                "do": "set",
                "k": "hot",
                "v": true,
                "delay": 1500
              },
              {
                "do": "set",
                "k": "temp",
                "v": 72,
                "delay": 2000
              },
              {
                "do": "set",
                "k": "temp",
                "v": 94,
                "delay": 2800
              },
              {
                "do": "score",
                "key": "water"
              },
              {
                "do": "tip",
                "text": "温度迅速上升！块状固体变成白色粉末，白汽冒出"
              },
              {
                "do": "goto",
                "id": "judge",
                "delay": 3400
              }
            ]
          },
          {
            "equip": "acid",
            "zone": "mouth",
            "do": [
              {
                "do": "err",
                "text": "稀盐酸会与生成的碱发生反应，这里要研究的是生石灰与水。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要加入的是水。"
              }
            ]
          }
        ]
      },
      {
        "id": "judge",
        "type": "doc",
        "title": "这是什么变化？",
        "progress": 54,
        "cols": [
          {
            "title": "看到的现象",
            "lines": [
              "块状固体逐渐松散，变成白色粉末",
              "温度计示数从 20 ℃ 一路升到 90 ℃ 以上",
              "烧杯口冒出大量白汽，杯壁发烫"
            ]
          },
          {
            "title": "想一想",
            "lines": [
              "温度升高说明反应过程中能量怎样变化？",
              "白汽其实是水蒸气遇冷凝成的小水珠，",
              "说明水被反应放出的热加热了。"
            ]
          }
        ],
        "buttons": [
          {
            "t": "反应放出热量（放热反应）",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "judge"
              },
              {
                "do": "tip",
                "text": "正确！CaO + H₂O = Ca(OH)₂，这是典型的放热反应 ✓"
              },
              {
                "do": "goto",
                "id": "stir",
                "delay": 1500
              }
            ]
          },
          {
            "t": "反应吸收热量（吸热反应）",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "吸热反应的温度应该下降。现在示数一路飙升，说明能量是释放出来的。"
              }
            ]
          },
          {
            "t": "温度升高是水太多导致的",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "水只会吸收热量、让温度升得更慢。真正让水变热的，是反应放出的能量。"
              }
            ]
          }
        ]
      },
      {
        "id": "stir",
        "type": "stage",
        "title": "用玻璃棒搅拌",
        "progress": 64,
        "shelf": [
          "rod"
        ],
        "desc": "搅拌能让固体与水充分接触，防止结块、防止局部过热。",
        "help": "把玻璃棒拖到烧杯里搅拌。注意：搅拌时玻璃棒不要碰到杯壁发出响声，更不能用温度计代替玻璃棒搅拌。",
        "zones": [
          "mouth"
        ],
        "drop": [
          {
            "equip": "rod",
            "zone": "mouth",
            "do": [
              {
                "do": "set",
                "k": "stirred",
                "v": true
              },
              {
                "do": "score",
                "key": "stir"
              },
              {
                "do": "tip",
                "text": "搅拌后固体全部变成熟石灰 Ca(OH)₂，呈白色糊状 ✓"
              },
              {
                "do": "goto",
                "id": "verify",
                "delay": 1400
              }
            ]
          },
          {
            "equip": "thermo",
            "zone": "mouth",
            "do": [
              {
                "do": "err",
                "text": "温度计是用来测温度的，它的玻璃泡很薄，搅拌很容易打碎。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要用搅拌工具。"
              }
            ]
          }
        ]
      },
      {
        "id": "verify",
        "type": "stage",
        "title": "取上层清液检验",
        "progress": 76,
        "shelf": [
          "phenol"
        ],
        "desc": "静置后取上层清液，滴加酚酞试液，看它是否变红。",
        "help": "先拖动右侧的试管完成取样，再把酚酞滴进去。无色酚酞遇碱性溶液变红，这是检验碱的常用方法。",
        "zones": [
          "sample"
        ],
        "drop": [
          {
            "equip": "phenol",
            "zone": "sample",
            "do": [
              {
                "do": "set",
                "k": "sampleOn",
                "v": true
              },
              {
                "do": "set",
                "k": "phenolIn",
                "v": true
              },
              {
                "do": "set",
                "k": "pink",
                "v": true,
                "delay": 600
              },
              {
                "do": "score",
                "key": "verify"
              },
              {
                "do": "tip",
                "text": "酚酞变红 → 上层清液显碱性 → 生成了 Ca(OH)₂ ✓"
              },
              {
                "do": "goto",
                "id": "summary",
                "delay": 1800
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要滴加酚酞试液来检验清液的酸碱性。"
              }
            ]
          }
        ]
      },
      {
        "id": "summary",
        "type": "doc",
        "title": "生石灰有什么用？",
        "progress": 86,
        "cols": [
          {
            "title": "反应本质",
            "lines": [
              "CaO + H₂O = Ca(OH)₂",
              "两种物质生成一种物质，属于化合反应。",
              "反应过程中放出大量的热。"
            ]
          },
          {
            "title": "生活中的应用",
            "lines": [
              "● 作干燥剂：能吸收水分（食品、服装、精密仪器包装中常见）",
              "● 自热食品：放热特性用来加热饭菜",
              "● 生成物熟石灰：砌砖抹墙、改良酸性土壤",
              "● 熟石灰的水溶液就是实验室常用的澄清石灰水"
            ]
          }
        ],
        "buttons": [
          {
            "t": "既能吸水又放热，可作干燥剂和发热剂",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "summary"
              },
              {
                "do": "tip",
                "text": "回答完整 ✓ 生石灰的两大用途都抓住了"
              },
              {
                "do": "goto",
                "id": "report",
                "delay": 1500
              }
            ]
          },
          {
            "t": "只用来砌墙抹灰",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "砌墙抹灰用的是生成物熟石灰，生石灰本身的价值不止于此。再想想它吸水的本领。"
              }
            ]
          },
          {
            "t": "只因为它便宜，没有特别的地方",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "便宜不能解释温度计为什么飙升。关键性质是吸水并放热。"
              }
            ]
          }
        ]
      },
      {
        "id": "report",
        "type": "report",
        "title": "实验报告",
        "progress": 92,
        "buttons": [
          {
            "t": "提交报告",
            "c": "primary",
            "do": [
              {
                "do": "finish"
              },
              {
                "do": "goto",
                "id": "score"
              }
            ]
          }
        ]
      },
      {
        "id": "score",
        "type": "score",
        "title": "实验评分",
        "progress": 100,
        "buttons": [
          {
            "t": "导出本次成绩",
            "c": "ghost",
            "do": [
              {
                "do": "export"
              }
            ]
          },
          {
            "t": "查看常见错误",
            "c": "ghost",
            "goto": "errtable"
          },
          {
            "t": "重做实验",
            "c": "primary",
            "do": [
              {
                "do": "reset"
              }
            ]
          }
        ]
      },
      {
        "id": "errtable",
        "type": "errors",
        "title": "常见错误与后果",
        "progress": 100,
        "buttons": [
          {
            "t": "返回评分",
            "c": "ghost",
            "goto": "score"
          },
          {
            "t": "重做实验",
            "c": "primary",
            "do": [
              {
                "do": "reset"
              }
            ]
          }
        ]
      }
    ]
  },
  "exp_neutral": {
    "id": "neutral",
    "title": "酸和碱的中和反应",
    "subtitle": "初中化学虚拟实验 · 酚酞显色 + 逐滴滴定",
    "badges": [
      "NaOH + HCl",
      "酚酞作指示剂",
      "满分 100 分"
    ],
    "viewBox": "0 0 600 360",
    "equipments": [
      {
        "id": "flask",
        "name": "锥形瓶",
        "need": true
      },
      {
        "id": "naoh",
        "name": "氢氧化钠溶液",
        "need": true
      },
      {
        "id": "phenol",
        "name": "酚酞试液",
        "need": true
      },
      {
        "id": "dropper",
        "name": "胶头滴管",
        "need": true
      },
      {
        "id": "acid",
        "name": "稀盐酸",
        "need": true
      },
      {
        "id": "rod",
        "name": "玻璃棒",
        "need": true
      },
      {
        "id": "thermo",
        "name": "温度计",
        "need": true
      },
      {
        "id": "limewater",
        "name": "澄清石灰水",
        "need": false
      },
      {
        "id": "marble",
        "name": "大理石",
        "need": false
      },
      {
        "id": "water2",
        "name": "蒸馏水",
        "need": false
      }
    ],
    "dims": [
      {
        "key": "skill",
        "name": "操作规范"
      },
      {
        "key": "safety",
        "name": "安全意识"
      }
    ],
    "scoreItems": [
      {
        "key": "equip",
        "name": "器材选择",
        "max": 10,
        "dim": "skill"
      },
      {
        "key": "flask",
        "name": "放置锥形瓶",
        "max": 6,
        "dim": "skill"
      },
      {
        "key": "pour",
        "name": "加入氢氧化钠溶液",
        "max": 14,
        "dim": "skill"
      },
      {
        "key": "phenol",
        "name": "滴加酚酞显红色",
        "max": 8,
        "dim": "skill"
      },
      {
        "key": "thermo",
        "name": "插入温度计",
        "max": 8,
        "dim": "skill"
      },
      {
        "key": "howto",
        "name": "选对滴加方式",
        "max": 12,
        "dim": "safety"
      },
      {
        "key": "drip",
        "name": "滴加至红色恰好褪去",
        "max": 12,
        "dim": "skill"
      },
      {
        "key": "judge",
        "name": "解释褪色的含义",
        "max": 14,
        "dim": "skill"
      },
      {
        "key": "summary",
        "name": "说出中和反应实质",
        "max": 16,
        "dim": "skill"
      }
    ],
    "initialStage": {
      "flaskOn": false,
      "naohIn": false,
      "red": false,
      "thermoIn": false,
      "temp": 20,
      "helperIn": false,
      "dripping": false,
      "neutral": false,
      "over": false
    },
    "dropZones": {
      "bench": {
        "x": 180,
        "y": 200,
        "w": 240,
        "h": 120
      },
      "mouth": {
        "x": 236,
        "y": 142,
        "w": 128,
        "h": 96
      },
      "thzone": {
        "x": 254,
        "y": 102,
        "w": 60,
        "h": 210
      }
    },
    "scene": [
      {
        "tag": "rect",
        "x": 30,
        "y": 322,
        "width": 540,
        "height": 14,
        "rx": 5,
        "fill": "url(#gMetal)"
      },
      {
        "tag": "rect",
        "x": 30,
        "y": 322,
        "width": 540,
        "height": 4,
        "rx": 2,
        "fill": "#e8eef2",
        "opacity": 0.75
      },
      {
        "tag": "g",
        "when": "stage.flaskOn",
        "children": [
          {
            "tag": "path",
            "d": "M288 164 L312 164 L312 206 L360 300 Q364 310 354 310 L246 310 Q236 310 240 300 L288 206 Z",
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.4
          },
          {
            "tag": "rect",
            "x": 284,
            "y": 156,
            "width": 32,
            "height": 10,
            "rx": 4,
            "fill": "url(#gGlassH)",
            "stroke": "#7ba7c7",
            "stroke-width": 1.6
          },
          {
            "tag": "path",
            "d": "M294 220 L294 290",
            "stroke": "#ffffff",
            "stroke-width": 2.4,
            "opacity": 0.8,
            "fill": "none"
          },
          {
            "tag": "path",
            "when": "stage.naohIn",
            "d": "M262 258 L338 258 L354 298 Q358 308 348 308 L252 308 Q242 308 246 298 Z",
            "fill": "@ stage.neutral ? '#f1f3f5' : (stage.red ? 'url(#gPink)' : '#fafafa')",
            "opacity": "@ stage.red ? 0.92 : 0.6"
          },
          {
            "tag": "text",
            "when": "stage.red && !stage.neutral",
            "x": 300,
            "y": 290,
            "font-size": 13,
            "text-anchor": "middle",
            "fill": "#880e4f",
            "font-weight": 700,
            "text": "红色（碱性）"
          },
          {
            "tag": "text",
            "when": "stage.neutral",
            "x": 300,
            "y": 290,
            "font-size": 13,
            "text-anchor": "middle",
            "fill": "#455a64",
            "font-weight": 700,
            "text": "无色（恰好反应）"
          },
          {
            "tag": "text",
            "x": 300,
            "y": 344,
            "font-size": 12,
            "text-anchor": "middle",
            "fill": "#455a64",
            "font-weight": 700,
            "text": "锥形瓶：中和反应"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.helperIn",
        "children": [
          {
            "tag": "rect",
            "x": 294,
            "y": 54,
            "width": 14,
            "height": 20,
            "rx": 6,
            "fill": "#8d6e63"
          },
          {
            "tag": "rect",
            "x": 297,
            "y": 72,
            "width": 8,
            "height": 52,
            "rx": 3,
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 1.4
          },
          {
            "tag": "path",
            "d": "M297 122 L305 122 L303 146 L299 146 Z",
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 1.4
          },
          {
            "tag": "rect",
            "x": 298,
            "y": 92,
            "width": 6,
            "height": 30,
            "fill": "url(#gAcid)",
            "opacity": 0.9
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.dripping",
        "children": [
          {
            "tag": "circle",
            "cx": 301,
            "cy": 156,
            "r": 3.4,
            "fill": "#a5d6a7",
            "opacity": 0.95
          },
          {
            "tag": "circle",
            "cx": 301,
            "cy": 178,
            "r": 2.6,
            "fill": "#a5d6a7",
            "opacity": 0.9
          },
          {
            "tag": "text",
            "x": 436,
            "y": 188,
            "font-size": 11,
            "fill": "#33691e",
            "font-weight": 700,
            "text": "逐滴加入并振荡"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.thermoIn",
        "children": [
          {
            "tag": "rect",
            "x": 268,
            "y": 100,
            "width": 8,
            "height": 176,
            "rx": 4,
            "fill": "url(#gGlass)",
            "stroke": "#90a4ae",
            "stroke-width": 1.4
          },
          {
            "tag": "rect",
            "x": 270,
            "y": "@ 268 - 1.24*stage.temp",
            "width": 4,
            "height": "@ 12 + 1.24*stage.temp",
            "fill": "#ef5350"
          },
          {
            "tag": "circle",
            "cx": 272,
            "cy": 272,
            "r": 8,
            "fill": "#ef5350",
            "stroke": "#c62828",
            "stroke-width": 1.2
          },
          {
            "tag": "text",
            "x": 240,
            "y": "@ 272 - 1.24*stage.temp",
            "font-size": 12,
            "text-anchor": "end",
            "fill": "@ stage.temp>25 ? '#b71c1c' : '#0277bd'",
            "font-weight": 700,
            "text": "@ Math.round(stage.temp) + ' ℃'"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.over",
        "children": [
          {
            "tag": "text",
            "x": 470,
            "y": 220,
            "font-size": 11.5,
            "fill": "#dc2626",
            "font-weight": 700,
            "text": "酸已过量"
          }
        ]
      },
      {
        "tag": "text",
        "when": "stage.naohIn && !stage.red",
        "x": 470,
        "y": 200,
        "font-size": 11.5,
        "fill": "#475569",
        "text": "无色溶液（看不出酸碱性）"
      }
    ],
    "report": [
      {
        "title": "实验记录",
        "lines": [
          "实验名称：酸和碱的中和反应",
          "反应原理：NaOH + HCl = NaCl + H₂O",
          "指示剂：无色酚酞（遇碱变红，遇酸和中性均不变色）",
          "终点判断：溶液恰好由红色变为无色",
          "温度计示数上升，说明中和反应放热"
        ]
      },
      {
        "title": "现象记录",
        "lines": [
          "1. 向 NaOH 溶液中滴入无色酚酞，溶液变成红色",
          "2. 用滴管逐滴加入稀盐酸并不断振荡，红色逐渐变浅",
          "3. 当最后一滴使红色刚好褪去时，反应恰好完全",
          "4. 温度计示数上升，试管（烧瓶）外壁微微发热"
        ]
      },
      {
        "title": "实验结论",
        "lines": [
          "酸与碱作用生成盐和水的反应叫做中和反应，它放出热量。",
          "中和反应的微观实质：酸中的 H⁺ 与碱中的 OH⁻ 结合生成 H₂O。",
          "酚酞的作用是借助颜色变化判断肉眼看不见的反应是否恰好完全。"
        ]
      }
    ],
    "errorTable": [
      {
        "op": "把盐酸一次性倒入",
        "phen": "局部过量，红色突变",
        "result": "错过恰好反应的时刻",
        "score": 12
      },
      {
        "op": "滴加时不振荡",
        "phen": "酸在局部聚集",
        "result": "褪色过早或不均匀，终点不准",
        "score": 12
      },
      {
        "op": "忘记加酚酞",
        "phen": "反应本身无颜色变化",
        "result": "完全无法判断何时恰好反应",
        "score": 8
      },
      {
        "op": "红色褪去后继续大量加酸",
        "phen": "酸过量",
        "result": "溶质不再是纯净的 NaCl",
        "score": 14
      },
      {
        "op": "用石蕊试液代替酚酞",
        "phen": "紫色到红色变化不明显",
        "result": "终点难以判断",
        "score": 8
      },
      {
        "op": "误用大理石、石灰水",
        "phen": "那是制取CO₂的药品",
        "result": "本实验研究的是酸碱中和",
        "score": 10
      }
    ],
    "steps": [
      {
        "id": "cover",
        "type": "cover",
        "title": "准备开始",
        "progress": 0,
        "headline": "酸和碱的中和反应",
        "subtitle": "两种无色液体混在一起，什么也看不出来 —— 酚酞来帮忙",
        "buttons": [
          {
            "t": "开始实验",
            "c": "primary",
            "goto": "goal"
          }
        ]
      },
      {
        "id": "goal",
        "type": "doc",
        "title": "实验目标",
        "progress": 6,
        "cols": [
          {
            "title": "实验目标",
            "lines": [
              "1. 认识中和反应：酸 + 碱 → 盐 + 水",
              "2. 学会用酚酞判断反应是否恰好完全",
              "3. 掌握逐滴滴加并不断振荡的操作",
              "4. 知道中和反应放热",
              "5. 理解实质：H⁺ + OH⁻ = H₂O"
            ]
          },
          {
            "title": "操作方式",
            "lines": [
              "● 拖拽试剂到锥形瓶口的高亮区域",
              "● 遇到思考题时点选项作答",
              "● 右侧显示当前实验阶段",
              "● 卡住时点右下角“？”获取提示"
            ]
          },
          {
            "title": "安全提示",
            "lines": [
              "⚠ 氢氧化钠和盐酸都有腐蚀性，不能接触皮肤和衣物",
              "⚠ 沾到皮肤立即用大量水冲洗",
              "⚠ 滴管要垂直悬空在瓶口上方，不能伸进瓶内",
              "⚠ 滴加过程中要不断振荡，使反应充分"
            ]
          }
        ],
        "buttons": [
          {
            "t": "下一步",
            "c": "primary",
            "goto": "equip"
          },
          {
            "t": "返回封面",
            "c": "ghost",
            "goto": "cover"
          }
        ]
      },
      {
        "id": "equip",
        "type": "equip",
        "title": "选择实验器材",
        "progress": 12,
        "tip": "既然反应本身没有颜色变化，就要靠指示剂；还要一滴一滴加进去才抓得住终点",
        "buttons": [
          {
            "t": "确认器材",
            "c": "primary",
            "do": [
              {
                "do": "checkEquip",
                "key": "equip",
                "goto": "flask"
              }
            ]
          }
        ]
      },
      {
        "id": "flask",
        "type": "stage",
        "title": "放置锥形瓶",
        "progress": 18,
        "shelf": [
          "flask"
        ],
        "desc": "锥形瓶口小底大，振荡时液体不容易溅出，很适合做滴定类实验。",
        "help": "把锥形瓶拖到桌面中间的高亮区域。想一想：为什么酸碱中和实验常用锥形瓶而不是烧杯？",
        "zones": [
          "bench"
        ],
        "drop": [
          {
            "equip": "flask",
            "zone": "bench",
            "do": [
              {
                "do": "set",
                "k": "flaskOn",
                "v": true
              },
              {
                "do": "score",
                "key": "flask"
              },
              {
                "do": "tip",
                "text": "锥形瓶已放好 ✓ 便于振荡、液体不易溅出"
              },
              {
                "do": "goto",
                "id": "pour",
                "delay": 1000
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要放的是进行中和反应的容器。"
              }
            ]
          }
        ]
      },
      {
        "id": "pour",
        "type": "stage",
        "title": "加入氢氧化钠溶液",
        "progress": 26,
        "shelf": [
          "naoh"
        ],
        "desc": "先量取一定体积的氢氧化钠稀溶液倒入锥形瓶。",
        "help": "把氢氧化钠溶液拖到锥形瓶口。氢氧化钠溶液显碱性，是无色透明的，肉眼完全看不出来。",
        "zones": [
          "mouth"
        ],
        "drop": [
          {
            "equip": "naoh",
            "zone": "mouth",
            "do": [
              {
                "do": "set",
                "k": "naohIn",
                "v": true
              },
              {
                "do": "score",
                "key": "pour"
              },
              {
                "do": "tip",
                "text": "氢氧化钠溶液已加入 ✓ 溶液无色，看不出酸碱性"
              },
              {
                "do": "goto",
                "id": "phenolStep",
                "delay": 1300
              }
            ]
          },
          {
            "equip": "water2",
            "zone": "mouth",
            "do": [
              {
                "do": "err",
                "text": "本实验要研究的是碱与酸的反应，先加入的应该是氢氧化钠溶液。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要加入的是碱溶液。"
              }
            ]
          }
        ]
      },
      {
        "id": "phenolStep",
        "type": "stage",
        "title": "滴入无色酚酞",
        "progress": 34,
        "shelf": [
          "phenol"
        ],
        "desc": "无色酚酞遇碱变红，这是本实验的眼睛。",
        "help": "把酚酞试液拖到锥形瓶口，只需 2~3 滴。酚酞本身无色，遇到碱性溶液才会变成红色。",
        "zones": [
          "mouth"
        ],
        "drop": [
          {
            "equip": "phenol",
            "zone": "mouth",
            "do": [
              {
                "do": "set",
                "k": "red",
                "v": true
              },
              {
                "do": "score",
                "key": "phenol"
              },
              {
                "do": "tip",
                "text": "溶液变成红色 ✓ 说明此时溶液显碱性"
              },
              {
                "do": "goto",
                "id": "thermoStep",
                "delay": 1300
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要加入的是能指示酸碱性的试液。"
              }
            ]
          }
        ]
      },
      {
        "id": "thermoStep",
        "type": "stage",
        "title": "插入温度计",
        "progress": 42,
        "shelf": [
          "thermo"
        ],
        "desc": "加酸之前先把温度计放好，这样才能看出反应前后温度是否有变化。",
        "help": "把温度计拖到锥形瓶上方的位置，玻璃泡要完全浸没在溶液中，读数会更准确。",
        "zones": [
          "thzone"
        ],
        "drop": [
          {
            "equip": "thermo",
            "zone": "thzone",
            "do": [
              {
                "do": "set",
                "k": "thermoIn",
                "v": true
              },
              {
                "do": "score",
                "key": "thermo"
              },
              {
                "do": "tip",
                "text": "温度计已放好，当前约 20 ℃ ✓"
              },
              {
                "do": "goto",
                "id": "howto",
                "delay": 1200
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要放入温度计，记录反应前的初温。"
              }
            ]
          }
        ]
      },
      {
        "id": "howto",
        "type": "doc",
        "title": "酸该怎么加？",
        "progress": 50,
        "cols": [
          {
            "title": "方案 A",
            "lines": [
              "用量筒量取一定量盐酸，一次性倒入锥形瓶，",
              "看看能不能恰好把红色褪掉。"
            ]
          },
          {
            "title": "方案 B",
            "lines": [
              "用滴管逐滴滴加盐酸，每加一滴就振荡一下，",
              "盯着颜色变化，直到红色刚好褪去。"
            ]
          }
        ],
        "buttons": [
          {
            "t": "用滴管逐滴加入并不断振荡",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "howto"
              },
              {
                "do": "tip",
                "text": "选得对！只有这样才能抓住恰好反应的那一刻 ✓"
              },
              {
                "do": "goto",
                "id": "drip",
                "delay": 1500
              }
            ]
          },
          {
            "t": "一次性把盐酸倒进去",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "倒多了就过量，倒少了又不够，而且一瞬间就过去了，根本抓不住「恰好反应」的那个点。"
              },
              {
                "do": "goto",
                "id": "drip",
                "delay": 3600
              }
            ]
          }
        ]
      },
      {
        "id": "drip",
        "type": "stage",
        "title": "逐滴滴加稀盐酸",
        "progress": 62,
        "shelf": [
          "dropper",
          "acid"
        ],
        "desc": "用滴管吸取稀盐酸，垂直悬空在瓶口上方逐滴加入，边加边振荡。",
        "help": "先把胶头滴管拖到瓶口准备好，再把稀盐酸拖到瓶口开始滴加。眼睛要盯着溶液颜色的变化。",
        "zones": [
          "mouth"
        ],
        "drop": [
          {
            "equip": "dropper",
            "zone": "mouth",
            "do": [
              {
                "do": "set",
                "k": "helperIn",
                "v": true
              },
              {
                "do": "tip",
                "text": "滴管已悬在瓶口上方，注意滴管不能伸入瓶内 ✓"
              }
            ]
          },
          {
            "equip": "acid",
            "zone": "mouth",
            "do": [
              {
                "do": "set",
                "k": "dripping",
                "v": true
              },
              {
                "do": "set",
                "k": "temp",
                "v": 24,
                "delay": 1000
              },
              {
                "do": "set",
                "k": "temp",
                "v": 27,
                "delay": 2000
              },
              {
                "do": "set",
                "k": "neutral",
                "v": true,
                "delay": 2600
              },
              {
                "do": "score",
                "key": "drip"
              },
              {
                "do": "tip",
                "text": "红色刚好褪去！此时溶液显中性，温度计示数还在上升"
              },
              {
                "do": "goto",
                "id": "judge",
                "delay": 3600
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要加入的是酸溶液，而且是少量少量地加。"
              }
            ]
          }
        ]
      },
      {
        "id": "judge",
        "type": "doc",
        "title": "红色褪去意味着什么？",
        "progress": 74,
        "cols": [
          {
            "title": "现象",
            "lines": [
              "红色刚好褪去，溶液变回无色",
              "温度计示数从约 20 ℃ 升到 27 ℃ 以上",
              "瓶壁摸上去微微发热"
            ]
          },
          {
            "title": "分析",
            "lines": [
              "酚酞在碱中显红色，在酸性和中性溶液中都是无色的。",
              "所以「刚好无色」说明碱刚好被消耗完，",
              "既没有多余的碱，也没有多余的酸。"
            ]
          }
        ],
        "buttons": [
          {
            "t": "酸碱恰好完全反应，溶液显中性",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "judge"
              },
              {
                "do": "tip",
                "text": "正确！此时溶质只有生成的氯化钠 ✓"
              },
              {
                "do": "goto",
                "id": "summary",
                "delay": 1600
              }
            ]
          },
          {
            "t": "盐酸加过量了",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "如果盐酸过量，溶液会显酸性。但酚酞在酸里也是无色的，所以靠酚酞分不出「中性」还是「酸性」——要抓住「刚好」那一滴。"
              }
            ]
          },
          {
            "t": "酚酞失效了",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "酚酞没有失效。它被加进去就是为了指示溶液的酸碱性，颜色变化正是它在起作用。"
              }
            ]
          }
        ]
      },
      {
        "id": "summary",
        "type": "doc",
        "title": "中和反应的本质",
        "progress": 86,
        "cols": [
          {
            "title": "化学方程式",
            "lines": [
              "NaOH + HCl = NaCl + H₂O",
              "属于复分解反应，也是中和反应。",
              "生成物：盐（NaCl）+ 水"
            ]
          },
          {
            "title": "微观实质",
            "lines": [
              "氢氧化钠在水中解离出 Na⁺ 和 OH⁻，",
              "盐酸在水中解离出 H⁺ 和 Cl⁻，",
              "真正发生变化的只有一步：H⁺ + OH⁻ = H₂O。",
              "Na⁺ 和 Cl⁻ 自始至终没有参加反应。"
            ]
          }
        ],
        "buttons": [
          {
            "t": "H⁺ 与 OH⁻ 结合生成水分子",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "summary"
              },
              {
                "do": "tip",
                "text": "抓住了本质 ✓ 同时这也是中和反应放热的原因"
              },
              {
                "do": "goto",
                "id": "report",
                "delay": 1600
              }
            ]
          },
          {
            "t": "Na⁺ 与 Cl⁻ 结合生成氯化钠",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "Na⁺ 和 Cl⁻ 在反应前后都自由存在于溶液中，并没有结合。真正结合成难电离物质的是 H⁺ 和 OH⁻。"
              }
            ]
          },
          {
            "t": "酸把碱腐蚀掉了",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "腐蚀是生活用语不是化学解释。要从离子角度看：是哪两种离子结合成了稳定的水分子？"
              }
            ]
          }
        ]
      },
      {
        "id": "report",
        "type": "report",
        "title": "实验报告",
        "progress": 92,
        "buttons": [
          {
            "t": "提交报告",
            "c": "primary",
            "do": [
              {
                "do": "finish"
              },
              {
                "do": "goto",
                "id": "score"
              }
            ]
          }
        ]
      },
      {
        "id": "score",
        "type": "score",
        "title": "实验评分",
        "progress": 100,
        "buttons": [
          {
            "t": "导出本次成绩",
            "c": "ghost",
            "do": [
              {
                "do": "export"
              }
            ]
          },
          {
            "t": "查看常见错误",
            "c": "ghost",
            "goto": "errtable"
          },
          {
            "t": "重做实验",
            "c": "primary",
            "do": [
              {
                "do": "reset"
              }
            ]
          }
        ]
      },
      {
        "id": "errtable",
        "type": "errors",
        "title": "常见错误与后果",
        "progress": 100,
        "buttons": [
          {
            "t": "返回评分",
            "c": "ghost",
            "goto": "score"
          },
          {
            "t": "重做实验",
            "c": "primary",
            "do": [
              {
                "do": "reset"
              }
            ]
          }
        ]
      }
    ]
  },
  "exp_metalacid": {
    "id": "metalacid",
    "title": "金属与稀盐酸的反应",
    "subtitle": "初中化学虚拟实验 · 金属活动性 + 氢气检验",
    "badges": [
      "Mg > Zn > Fe",
      "Fe²⁺ 显浅绿色",
      "满分 100 分"
    ],
    "viewBox": "0 0 600 360",
    "equipments": [
      {
        "id": "tube",
        "name": "试管（3支）",
        "need": true
      },
      {
        "id": "mag",
        "name": "镁条",
        "need": true
      },
      {
        "id": "zinc",
        "name": "锌粒",
        "need": true
      },
      {
        "id": "iron",
        "name": "铁钉",
        "need": true
      },
      {
        "id": "acid",
        "name": "稀盐酸",
        "need": true
      },
      {
        "id": "match",
        "name": "燃着的木条",
        "need": true
      },
      {
        "id": "cu",
        "name": "铜丝",
        "need": false
      },
      {
        "id": "water2",
        "name": "蒸馏水",
        "need": false
      },
      {
        "id": "h2so4",
        "name": "稀硫酸",
        "need": false
      }
    ],
    "dims": [
      {
        "key": "skill",
        "name": "操作规范"
      },
      {
        "key": "safety",
        "name": "安全意识"
      }
    ],
    "scoreItems": [
      {
        "key": "equip",
        "name": "器材选择",
        "max": 10,
        "dim": "skill"
      },
      {
        "key": "tubes",
        "name": "排列三支试管",
        "max": 8,
        "dim": "skill"
      },
      {
        "key": "metals",
        "name": "分别放入三种金属",
        "max": 14,
        "dim": "skill"
      },
      {
        "key": "acid",
        "name": "同时加入等浓度盐酸",
        "max": 12,
        "dim": "skill"
      },
      {
        "key": "observe",
        "name": "比较反应速率快慢",
        "max": 14,
        "dim": "skill"
      },
      {
        "key": "gas",
        "name": "点燃检验氢气",
        "max": 16,
        "dim": "safety"
      },
      {
        "key": "fe",
        "name": "判断铁的生成物",
        "max": 10,
        "dim": "skill"
      },
      {
        "key": "summary",
        "name": "归纳活动性顺序",
        "max": 16,
        "dim": "skill"
      }
    ],
    "initialStage": {
      "tubesOn": false,
      "mgIn": false,
      "znIn": false,
      "feIn": false,
      "wrongMetal": false,
      "acidIn": false,
      "react": 0,
      "feReact": false,
      "fire": false,
      "popTest": false
    },
    "dropZones": {
      "bench": {
        "x": 140,
        "y": 204,
        "w": 320,
        "h": 118
      },
      "metalAll": {
        "x": 128,
        "y": 140,
        "w": 344,
        "h": 104
      },
      "allMouth": {
        "x": 128,
        "y": 116,
        "w": 344,
        "h": 128
      },
      "gasZone": {
        "x": 150,
        "y": 88,
        "w": 92,
        "h": 84
      }
    },
    "scene": [
      {
        "tag": "rect",
        "x": 30,
        "y": 322,
        "width": 540,
        "height": 14,
        "rx": 5,
        "fill": "url(#gMetal)"
      },
      {
        "tag": "rect",
        "x": 30,
        "y": 322,
        "width": 540,
        "height": 4,
        "rx": 2,
        "fill": "#e8eef2",
        "opacity": 0.75
      },
      {
        "tag": "g",
        "when": "stage.tubesOn",
        "children": [
          {
            "tag": "rect",
            "x": 138,
            "y": 296,
            "width": 324,
            "height": 12,
            "rx": 4,
            "fill": "url(#gMetal)"
          },
          {
            "tag": "rect",
            "x": 138,
            "y": 296,
            "width": 324,
            "height": 3,
            "rx": 2,
            "fill": "#e8eef2",
            "opacity": 0.8
          },
          {
            "tag": "rect",
            "x": 148,
            "y": 300,
            "width": 10,
            "height": 22,
            "fill": "url(#gMetalV)"
          },
          {
            "tag": "rect",
            "x": 442,
            "y": 300,
            "width": 10,
            "height": 22,
            "fill": "url(#gMetalV)"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.tubesOn",
        "children": [
          {
            "tag": "path",
            "d": "M167 152 L167 286 Q167 300 181 300 L205 300 Q219 300 219 286 L219 152 Z",
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.2
          },
          {
            "tag": "rect",
            "x": 163,
            "y": 144,
            "width": 60,
            "height": 10,
            "rx": 4,
            "fill": "url(#gGlassH)",
            "stroke": "#7ba7c7",
            "stroke-width": 1.6
          },
          {
            "tag": "path",
            "d": "M174 168 L174 284",
            "stroke": "#ffffff",
            "stroke-width": 2,
            "opacity": 0.8,
            "fill": "none"
          },
          {
            "tag": "rect",
            "when": "stage.acidIn",
            "x": 169,
            "y": 216,
            "width": 48,
            "height": 80,
            "rx": 4,
            "fill": "url(#gAcid)",
            "opacity": 0.85
          },
          {
            "tag": "g",
            "when": "stage.mgIn",
            "children": [
              {
                "tag": "rect",
                "x": 180,
                "y": 236,
                "width": 30,
                "height": 7,
                "rx": 2,
                "fill": "#cfd8dc",
                "stroke": "#78909c",
                "stroke-width": 1.2
              },
              {
                "tag": "rect",
                "x": 180,
                "y": 248,
                "width": 30,
                "height": 7,
                "rx": 2,
                "fill": "#e0e0e0",
                "stroke": "#78909c",
                "stroke-width": 1.2
              },
              {
                "tag": "rect",
                "x": 180,
                "y": 260,
                "width": 30,
                "height": 7,
                "rx": 2,
                "fill": "#cfd8dc",
                "stroke": "#78909c",
                "stroke-width": 1.2
              }
            ]
          },
          {
            "tag": "g",
            "when": "stage.react>=1",
            "children": [
              {
                "tag": "circle",
                "class": "bub",
                "cx": 180,
                "cy": 262,
                "r": 4.5,
                "fill": "#ffffff",
                "opacity": 0.9,
                "style": "animation-delay:0s"
              },
              {
                "tag": "circle",
                "class": "bub",
                "cx": 196,
                "cy": 258,
                "r": 5,
                "fill": "#ffffff",
                "opacity": 0.9,
                "style": "animation-delay:.18s"
              },
              {
                "tag": "circle",
                "class": "bub",
                "cx": 208,
                "cy": 264,
                "r": 4,
                "fill": "#ffffff",
                "opacity": 0.9,
                "style": "animation-delay:.36s"
              },
              {
                "tag": "circle",
                "class": "bub",
                "cx": 186,
                "cy": 240,
                "r": 3.2,
                "fill": "#ffffff",
                "opacity": 0.9,
                "style": "animation-delay:.54s"
              },
              {
                "tag": "text",
                "x": 193,
                "y": 202,
                "font-size": 11,
                "text-anchor": "middle",
                "fill": "#b71c1c",
                "font-weight": 700,
                "text": "最剧烈"
              }
            ]
          },
          {
            "tag": "text",
            "x": 193,
            "y": 330,
            "font-size": 11.5,
            "text-anchor": "middle",
            "fill": "#455a64",
            "font-weight": 700,
            "text": "Mg + 稀盐酸"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.tubesOn",
        "children": [
          {
            "tag": "path",
            "d": "M277 152 L277 286 Q277 300 291 300 L315 300 Q329 300 329 286 L329 152 Z",
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.2
          },
          {
            "tag": "rect",
            "x": 273,
            "y": 144,
            "width": 60,
            "height": 10,
            "rx": 4,
            "fill": "url(#gGlassH)",
            "stroke": "#7ba7c7",
            "stroke-width": 1.6
          },
          {
            "tag": "path",
            "d": "M284 168 L284 284",
            "stroke": "#ffffff",
            "stroke-width": 2,
            "opacity": 0.8,
            "fill": "none"
          },
          {
            "tag": "rect",
            "when": "stage.acidIn",
            "x": 279,
            "y": 216,
            "width": 48,
            "height": 80,
            "rx": 4,
            "fill": "url(#gAcid)",
            "opacity": 0.85
          },
          {
            "tag": "g",
            "when": "stage.znIn",
            "children": [
              {
                "tag": "circle",
                "cx": 292,
                "cy": 274,
                "r": 9,
                "fill": "#b0bec5",
                "stroke": "#78909c",
                "stroke-width": 1.2
              },
              {
                "tag": "circle",
                "cx": 310,
                "cy": 278,
                "r": 8,
                "fill": "#cfd8dc",
                "stroke": "#78909c",
                "stroke-width": 1.2
              },
              {
                "tag": "circle",
                "cx": 300,
                "cy": 262,
                "r": 7,
                "fill": "#90a4ae",
                "stroke": "#546e7a",
                "stroke-width": 1.2
              }
            ]
          },
          {
            "tag": "g",
            "when": "stage.react>=1",
            "children": [
              {
                "tag": "circle",
                "class": "bub",
                "cx": 292,
                "cy": 266,
                "r": 4,
                "fill": "#ffffff",
                "opacity": 0.9,
                "style": "animation-delay:.3s"
              },
              {
                "tag": "circle",
                "class": "bub",
                "cx": 308,
                "cy": 262,
                "r": 4.5,
                "fill": "#ffffff",
                "opacity": 0.9,
                "style": "animation-delay:.5s"
              },
              {
                "tag": "circle",
                "class": "bub",
                "cx": 300,
                "cy": 244,
                "r": 3,
                "fill": "#ffffff",
                "opacity": 0.9,
                "style": "animation-delay:.7s"
              }
            ]
          },
          {
            "tag": "text",
            "x": 303,
            "y": 330,
            "font-size": 11.5,
            "text-anchor": "middle",
            "fill": "#455a64",
            "font-weight": 700,
            "text": "Zn + 稀盐酸"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.tubesOn",
        "children": [
          {
            "tag": "path",
            "d": "M387 152 L387 286 Q387 300 401 300 L425 300 Q439 300 439 286 L439 152 Z",
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.2
          },
          {
            "tag": "rect",
            "x": 383,
            "y": 144,
            "width": 60,
            "height": 10,
            "rx": 4,
            "fill": "url(#gGlassH)",
            "stroke": "#7ba7c7",
            "stroke-width": 1.6
          },
          {
            "tag": "path",
            "d": "M394 168 L394 284",
            "stroke": "#ffffff",
            "stroke-width": 2,
            "opacity": 0.8,
            "fill": "none"
          },
          {
            "tag": "rect",
            "when": "stage.acidIn",
            "x": 389,
            "y": 216,
            "width": 48,
            "height": 80,
            "rx": 4,
            "fill": "@ stage.feReact ? 'url(#gGreenP)' : 'url(#gAcid)'",
            "opacity": "@ stage.feReact ? 0.92 : 0.85"
          },
          {
            "tag": "g",
            "when": "stage.feIn",
            "children": [
              {
                "tag": "rect",
                "x": 406,
                "y": 236,
                "width": 9,
                "height": 58,
                "rx": 1.5,
                "fill": "#b0bec5",
                "stroke": "#546e7a",
                "stroke-width": 1.2
              },
              {
                "tag": "path",
                "d": "M408 246 L408 288",
                "stroke": "#eceff1",
                "stroke-width": 1.6,
                "fill": "none"
              }
            ]
          },
          {
            "tag": "g",
            "when": "stage.react>=2",
            "children": [
              {
                "tag": "circle",
                "class": "bub",
                "cx": 404,
                "cy": 268,
                "r": 3.4,
                "fill": "#ffffff",
                "opacity": 0.9,
                "style": "animation-delay:.6s"
              },
              {
                "tag": "circle",
                "class": "bub",
                "cx": 416,
                "cy": 262,
                "r": 3,
                "fill": "#ffffff",
                "opacity": 0.9,
                "style": "animation-delay:1.1s"
              },
              {
                "tag": "text",
                "x": 413,
                "y": 202,
                "font-size": 11,
                "text-anchor": "middle",
                "fill": "#2e7d32",
                "font-weight": 700,
                "text": "较慢·变浅绿"
              }
            ]
          },
          {
            "tag": "text",
            "x": 413,
            "y": 330,
            "font-size": 11.5,
            "text-anchor": "middle",
            "fill": "#455a64",
            "font-weight": 700,
            "text": "Fe + 稀盐酸"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.wrongMetal",
        "children": [
          {
            "tag": "text",
            "x": 300,
            "y": 116,
            "font-size": 11.5,
            "text-anchor": "middle",
            "fill": "#dc2626",
            "font-weight": 700,
            "text": "铜排在氢之后，不与稀盐酸反应"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.fire",
        "children": [
          {
            "tag": "ellipse",
            "class": "flame",
            "cx": 193,
            "cy": 122,
            "rx": 9,
            "ry": 15,
            "fill": "#7ec8ff",
            "opacity": 0.95
          },
          {
            "tag": "ellipse",
            "class": "flame",
            "cx": 193,
            "cy": 126,
            "rx": 4,
            "ry": 7,
            "fill": "#e3f6ff"
          },
          {
            "tag": "text",
            "when": "stage.popTest",
            "x": 234,
            "y": 106,
            "font-size": 11.5,
            "fill": "#0288d1",
            "font-weight": 700,
            "text": "淡蓝色火焰 / 爆鸣声 → H₂"
          }
        ]
      }
    ],
    "report": [
      {
        "title": "实验记录",
        "lines": [
          "实验名称：金属与稀盐酸的反应",
          "Mg + 2HCl = MgCl₂ + H₂↑  （最剧烈）",
          "Zn + 2HCl = ZnCl₂ + H₂↑  （较快）",
          "Fe + 2HCl = FeCl₂ + H₂↑  （较慢，溶液由无色变为浅绿色）",
          "Cu + HCl → 不反应（铜排在氢之后）"
        ]
      },
      {
        "title": "现象记录",
        "lines": [
          "1. 镁条表面产生气泡最快、最剧烈，镁条迅速溶解",
          "2. 锌粒表面产生大量气泡，锌粒逐渐变小",
          "3. 铁钉表面有气泡产生，溶液由无色慢慢变成浅绿色",
          "4. 点燃收集的气体，听到爆鸣声或看到淡蓝色火焰"
        ]
      },
      {
        "title": "实验结论",
        "lines": [
          "镁、锌、铁都能置换出盐酸中的氢，说明它们排在氢之前，且活动性依次减弱。",
          "铁与盐酸反应生成的是亚铁化合物 FeCl₂（浅绿色），不是 FeCl₃。",
          "产生的气体是氢气：点燃有爆鸣声，火焰呈淡蓝色。"
        ]
      }
    ],
    "errorTable": [
      {
        "op": "三种试管内的盐酸浓度不同",
        "phen": "变量不唯一",
        "result": "无法比较反应快慢",
        "score": 12
      },
      {
        "op": "把铜丝放进酸里等它反应",
        "phen": "铜排在氢之后",
        "result": "始终无现象",
        "score": 14
      },
      {
        "op": "直接凑近闻产生的气体",
        "phen": "氢气无色无味",
        "result": "闻不到，且做法不安全",
        "score": 16
      },
      {
        "op": "未验纯就点燃大量氢气",
        "phen": "混有空气",
        "result": "可能发生爆鸣甚至危险",
        "score": 16
      },
      {
        "op": "认为生成 FeCl₃",
        "phen": "Fe³⁺ 溶液显黄色",
        "result": "正确应生成浅绿色 FeCl₂",
        "score": 10
      },
      {
        "op": "用稀硫酸代替稀盐酸",
        "phen": "同样会反应",
        "result": "本实验指定用稀盐酸做对比",
        "score": 10
      }
    ],
    "steps": [
      {
        "id": "cover",
        "type": "cover",
        "title": "准备开始",
        "progress": 0,
        "headline": "金属与稀盐酸的反应",
        "subtitle": "三支试管同时进行，谁的气泡最急？",
        "buttons": [
          {
            "t": "开始实验",
            "c": "primary",
            "goto": "goal"
          }
        ]
      },
      {
        "id": "goal",
        "type": "doc",
        "title": "实验目标",
        "progress": 6,
        "cols": [
          {
            "title": "实验目标",
            "lines": [
              "1. 通过对比实验比较 Mg、Zn、Fe 的活动性强弱",
              "2. 知道排在氢前面的金属能置换出酸中的氢",
              "3. 记住铁与酸反应生成浅绿色 Fe²⁺ 溶液",
              "4. 学会点燃法检验氢气（爆鸣声 / 淡蓝色火焰）",
              "5. 体会对比实验中控制变量的做法"
            ]
          },
          {
            "title": "操作方式",
            "lines": [
              "● 拖拽金属到试管的高亮区域",
              "● 遇到思考题时点选项作答",
              "● 右侧显示当前实验阶段",
              "● 卡住时点右下角“？”获取提示"
            ]
          },
          {
            "title": "安全提示",
            "lines": [
              "⚠ 稀盐酸有腐蚀性，沾到皮肤立即用大量水冲洗",
              "⚠ 镁与酸反应非常剧烈，不要一次加入过多镁条",
              "⚠ 点燃氢气前必须先验纯，否则可能爆鸣",
              "⚠ 三支试管要用同浓度、同体积的盐酸，才能比较"
            ]
          }
        ],
        "buttons": [
          {
            "t": "下一步",
            "c": "primary",
            "goto": "equip"
          },
          {
            "t": "返回封面",
            "c": "ghost",
            "goto": "cover"
          }
        ]
      },
      {
        "id": "equip",
        "type": "equip",
        "title": "选择实验器材",
        "progress": 12,
        "tip": "要同时对比三种金属，还要能检验生成的气体——想一想该选什么",
        "buttons": [
          {
            "t": "确认器材",
            "c": "primary",
            "do": [
              {
                "do": "checkEquip",
                "key": "equip",
                "goto": "tubes"
              }
            ]
          }
        ]
      },
      {
        "id": "tubes",
        "type": "stage",
        "title": "排好三支试管",
        "progress": 18,
        "shelf": [
          "tube"
        ],
        "desc": "把三支试管并排架好。要同时做三组，才能保证酸是同一种、同一刻加入的。",
        "help": "把试管拖到桌面上的高亮区域。对比实验讲究同时、同条件，这样看到的气泡快慢差异才可信。",
        "zones": [
          "bench"
        ],
        "drop": [
          {
            "equip": "tube",
            "zone": "bench",
            "do": [
              {
                "do": "set",
                "k": "tubesOn",
                "v": true
              },
              {
                "do": "score",
                "key": "tubes"
              },
              {
                "do": "tip",
                "text": "三支试管已并排架好 ✓ 从左到右依次放 Mg、Zn、Fe"
              },
              {
                "do": "goto",
                "id": "metals",
                "delay": 1200
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要准备好盛放金属和酸的容器。"
              }
            ]
          }
        ]
      },
      {
        "id": "metals",
        "type": "stage",
        "title": "分别放入三种金属",
        "progress": 30,
        "shelf": [
          "mag",
          "zinc",
          "iron"
        ],
        "desc": "把镁条、锌粒、铁钉分别放入三支试管，金属的形状和大小要差不多。",
        "help": "依次把三种金属拖到试管区域。金属的表面积会影响反应快慢，所以要取形状大小相近的样品才公平。",
        "zones": [
          "metalAll"
        ],
        "drop": [
          {
            "equip": "mag",
            "zone": "metalAll",
            "do": [
              {
                "do": "set",
                "k": "mgIn",
                "v": true
              },
              {
                "do": "tip",
                "text": "镁条已放入左边试管 ✓ 继续放入另外两种金属"
              },
              {
                "do": "if",
                "cond": "stage.mgIn && stage.znIn && stage.feIn",
                "then": [
                  {
                    "do": "score",
                    "key": "metals"
                  },
                  {
                    "do": "goto",
                    "id": "acidStep",
                    "delay": 900
                  }
                ]
              }
            ]
          },
          {
            "equip": "zinc",
            "zone": "metalAll",
            "do": [
              {
                "do": "set",
                "k": "znIn",
                "v": true
              },
              {
                "do": "tip",
                "text": "锌粒已放入 ✓"
              },
              {
                "do": "if",
                "cond": "stage.mgIn && stage.znIn && stage.feIn",
                "then": [
                  {
                    "do": "score",
                    "key": "metals"
                  },
                  {
                    "do": "goto",
                    "id": "acidStep",
                    "delay": 900
                  }
                ]
              }
            ]
          },
          {
            "equip": "iron",
            "zone": "metalAll",
            "do": [
              {
                "do": "set",
                "k": "feIn",
                "v": true
              },
              {
                "do": "tip",
                "text": "铁钉已放入 ✓"
              },
              {
                "do": "if",
                "cond": "stage.mgIn && stage.znIn && stage.feIn",
                "then": [
                  {
                    "do": "score",
                    "key": "metals"
                  },
                  {
                    "do": "goto",
                    "id": "acidStep",
                    "delay": 900
                  }
                ]
              }
            ]
          },
          {
            "equip": "cu",
            "zone": "metalAll",
            "do": [
              {
                "do": "set",
                "k": "wrongMetal",
                "v": true
              },
              {
                "do": "err",
                "text": "铜排在氢之后，不能置换出盐酸中的氢，放进去也不会有气泡。这一步请放镁、锌、铁。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要放的是能与酸反应的金属。"
              }
            ]
          }
        ]
      },
      {
        "id": "acidStep",
        "type": "stage",
        "title": "同时加入稀盐酸",
        "progress": 42,
        "shelf": [
          "acid"
        ],
        "desc": "向三支试管中加入同浓度、同体积的稀盐酸，然后比较哪个冒气泡最急。",
        "help": "把稀盐酸拖到试管上方的高亮区域。三个试管加入的酸必须完全一样，否则就不是公平的比较了。",
        "zones": [
          "allMouth"
        ],
        "drop": [
          {
            "equip": "acid",
            "zone": "allMouth",
            "do": [
              {
                "do": "set",
                "k": "acidIn",
                "v": true
              },
              {
                "do": "set",
                "k": "react",
                "v": 1,
                "delay": 500
              },
              {
                "do": "set",
                "k": "react",
                "v": 2,
                "delay": 1400
              },
              {
                "do": "set",
                "k": "feReact",
                "v": true,
                "delay": 2200
              },
              {
                "do": "score",
                "key": "acid"
              },
              {
                "do": "tip",
                "text": "三支试管都冒出气泡了，仔细比较气泡的快慢 ✓"
              },
              {
                "do": "goto",
                "id": "observe",
                "delay": 2800
              }
            ]
          },
          {
            "equip": "water2",
            "zone": "allMouth",
            "do": [
              {
                "do": "err",
                "text": "水不能与这几种金属反应，看不到任何现象。本实验要用稀盐酸。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要加入的是酸溶液。"
              }
            ]
          }
        ]
      },
      {
        "id": "observe",
        "type": "doc",
        "title": "谁反应得最剧烈？",
        "progress": 54,
        "cols": [
          {
            "title": "观察到的现象",
            "lines": [
              "镁条：气泡极多极快，镁迅速溶解，试管发烫",
              "锌粒：气泡较多较快，锌粒逐渐变小",
              "铁钉：气泡较少较慢，溶液由无色慢慢变成浅绿色"
            ]
          },
          {
            "title": "提示",
            "lines": [
              "单位时间内产生的气泡越多，说明反应越快，",
              "也就说明这种金属越活泼。",
              "由快到慢排个序，就是它们的活动性顺序。"
            ]
          }
        ],
        "buttons": [
          {
            "t": "Mg > Zn > Fe",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "observe"
              },
              {
                "do": "tip",
                "text": "完全正确 ✓ 反应越剧烈，金属越活泼"
              },
              {
                "do": "goto",
                "id": "gas",
                "delay": 1500
              }
            ]
          },
          {
            "t": "Fe > Zn > Mg",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "顺序反了。铁钉那支试管气泡最少最慢，镁条那支几乎是在翻腾。"
              }
            ]
          },
          {
            "t": "Zn > Mg > Fe",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "镁和锌的顺序颠倒了。看镁条那支，气泡密集得多，而且试管明显发烫。"
              }
            ]
          }
        ]
      },
      {
        "id": "gas",
        "type": "stage",
        "title": "检验产生的气体",
        "progress": 68,
        "shelf": [
          "match"
        ],
        "desc": "把燃着的木条放在产生气体最急的那支试管口，看看会发生什么。",
        "help": "把燃着的木条拖到最左边试管口上方。产生的气体应该先收集在小试管里验纯，再点燃，直接点燃大量气体有危险。",
        "zones": [
          "gasZone"
        ],
        "drop": [
          {
            "equip": "match",
            "zone": "gasZone",
            "do": [
              {
                "do": "set",
                "k": "fire",
                "v": true
              },
              {
                "do": "set",
                "k": "popTest",
                "v": true,
                "delay": 700
              },
              {
                "do": "score",
                "key": "gas"
              },
              {
                "do": "tip",
                "text": "气体被点燃：淡蓝色火焰并伴有轻微爆鸣声 → 是氢气 ✓"
              },
              {
                "do": "goto",
                "id": "feStep",
                "delay": 2200
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要用燃着的木条靠近试管口。"
              }
            ]
          }
        ]
      },
      {
        "id": "feStep",
        "type": "doc",
        "title": "铁那支试管变成了浅绿色",
        "progress": 78,
        "cols": [
          {
            "title": "现象",
            "lines": [
              "铁钉表面有气泡慢慢放出",
              "溶液原本是无色的稀盐酸",
              "反应一段时间后，溶液变成了浅绿色"
            ]
          },
          {
            "title": "想一想",
            "lines": [
              "Fe²⁺ 在水溶液中显浅绿色，",
              "Fe³⁺ 的水溶液显黄色。",
              "现在看到的是浅绿色，说明生成的是哪种离子？"
            ]
          }
        ],
        "buttons": [
          {
            "t": "生成了 FeCl₂（含 Fe²⁺）",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "fe"
              },
              {
                "do": "tip",
                "text": "对！Fe + 2HCl = FeCl₂ + H₂↑，这是亚铁化合物 ✓"
              },
              {
                "do": "goto",
                "id": "summary",
                "delay": 1600
              }
            ]
          },
          {
            "t": "生成了 FeCl₃（含 Fe³⁺）",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "Fe³⁺ 溶液是黄色的。铁与盐酸这样的非氧化性酸反应只能生成亚铁盐。"
              }
            ]
          },
          {
            "t": "生成了 Fe₂O₃",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "Fe₂O₃ 是红棕色的铁锈，不溶于水，不可能形成浅绿色溶液。"
              }
            ]
          }
        ]
      },
      {
        "id": "summary",
        "type": "doc",
        "title": "金属活动性顺序",
        "progress": 88,
        "cols": [
          {
            "title": "实验得到的顺序",
            "lines": [
              "Mg  Zn  Fe  (H)  Cu",
              "由左到右活动性逐渐减弱",
              "排在氢前面的金属能置换出酸中的氢，",
              "排在氢后面的（如铜、银）不能。"
            ]
          },
          {
            "title": "完整顺序（常考）",
            "lines": [
              "K  Ca  Na  Mg  Al  Zn  Fe  Sn  Pb  (H)  Cu  Hg  Ag  Pt  Au",
              "钾钙钠镁铝 锌铁锡铅氢 铜汞银铂金",
              "越靠前越活泼，越容易失去电子。"
            ]
          }
        ],
        "buttons": [
          {
            "t": "排在氢前的金属能置换出酸中的氢",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "summary"
              },
              {
                "do": "tip",
                "text": "总结到位 ✓ 这正是判断金属能否与酸反应的依据"
              },
              {
                "do": "goto",
                "id": "report",
                "delay": 1600
              }
            ]
          },
          {
            "t": "金属都能与酸反应产生氢气",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "铜、银等排在氢之后的金属就不行。刚才把铜丝放进盐酸，一点气泡都没有。"
              }
            ]
          },
          {
            "t": "只有铁能产生氢气",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "三支试管都在冒气泡，只是快慢不同。区别是反应的剧烈程度，不是能不能反应。"
              }
            ]
          }
        ]
      },
      {
        "id": "report",
        "type": "report",
        "title": "实验报告",
        "progress": 94,
        "buttons": [
          {
            "t": "提交报告",
            "c": "primary",
            "do": [
              {
                "do": "finish"
              },
              {
                "do": "goto",
                "id": "score"
              }
            ]
          }
        ]
      },
      {
        "id": "score",
        "type": "score",
        "title": "实验评分",
        "progress": 100,
        "buttons": [
          {
            "t": "导出本次成绩",
            "c": "ghost",
            "do": [
              {
                "do": "export"
              }
            ]
          },
          {
            "t": "查看常见错误",
            "c": "ghost",
            "goto": "errtable"
          },
          {
            "t": "重做实验",
            "c": "primary",
            "do": [
              {
                "do": "reset"
              }
            ]
          }
        ]
      },
      {
        "id": "errtable",
        "type": "errors",
        "title": "常见错误与后果",
        "progress": 100,
        "buttons": [
          {
            "t": "返回评分",
            "c": "ghost",
            "goto": "score"
          },
          {
            "t": "重做实验",
            "c": "primary",
            "do": [
              {
                "do": "reset"
              }
            ]
          }
        ]
      }
    ]
  },
  "exp_fecuso4": {
    "id": "fecuso4",
    "title": "铁与硫酸铜溶液的反应",
    "subtitle": "初中化学虚拟实验 · 置换反应与湿法炼铜",
    "badges": [
      "Fe + CuSO₄",
      "溶液蓝→浅绿",
      "满分 100 分"
    ],
    "viewBox": "0 0 600 360",
    "equipments": [
      {
        "id": "tube",
        "name": "试管",
        "need": true
      },
      {
        "id": "cuso4",
        "name": "硫酸铜溶液",
        "need": true
      },
      {
        "id": "iron",
        "name": "铁丝（钉）",
        "need": true
      },
      {
        "id": "tweezers",
        "name": "镊子",
        "need": true
      },
      {
        "id": "cu",
        "name": "铜丝",
        "need": false
      },
      {
        "id": "marble",
        "name": "大理石",
        "need": false
      },
      {
        "id": "alcohol",
        "name": "无水乙醇",
        "need": false
      }
    ],
    "dims": [
      {
        "key": "skill",
        "name": "操作规范"
      },
      {
        "key": "safety",
        "name": "安全意识"
      }
    ],
    "scoreItems": [
      {
        "key": "equip",
        "name": "器材选择",
        "max": 10,
        "dim": "skill"
      },
      {
        "key": "tube",
        "name": "放置试管",
        "max": 8,
        "dim": "skill"
      },
      {
        "key": "cuso4",
        "name": "加入硫酸铜溶液",
        "max": 12,
        "dim": "skill"
      },
      {
        "key": "iron",
        "name": "放入铁丝",
        "max": 14,
        "dim": "skill"
      },
      {
        "key": "observe",
        "name": "描述实验现象",
        "max": 14,
        "dim": "skill"
      },
      {
        "key": "judge",
        "name": "判断红色物质与溶液",
        "max": 16,
        "dim": "skill"
      },
      {
        "key": "mass",
        "name": "质量变化判断",
        "max": 10,
        "dim": "skill"
      },
      {
        "key": "summary",
        "name": "归纳置换规律",
        "max": 16,
        "dim": "skill"
      }
    ],
    "initialStage": {
      "tubeOn": false,
      "blueIn": false,
      "ironIn": false,
      "react": 0,
      "dep": 0,
      "wrongCu": false
    },
    "dropZones": {
      "bench": {
        "x": 210,
        "y": 216,
        "w": 190,
        "h": 108
      },
      "tubeZone": {
        "x": 256,
        "y": 126,
        "w": 90,
        "h": 184
      }
    },
    "scene": [
      {
        "tag": "rect",
        "x": 30,
        "y": 322,
        "width": 540,
        "height": 14,
        "rx": 5,
        "fill": "url(#gMetal)"
      },
      {
        "tag": "rect",
        "x": 30,
        "y": 322,
        "width": 540,
        "height": 4,
        "rx": 2,
        "fill": "#e8eef2",
        "opacity": 0.75
      },
      {
        "tag": "g",
        "when": "stage.tubeOn",
        "children": [
          {
            "tag": "path",
            "d": "M268 148 L268 284 Q268 300 284 300 L316 300 Q332 300 332 284 L332 148 Z",
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.4
          },
          {
            "tag": "rect",
            "x": 262,
            "y": 138,
            "width": 76,
            "height": 11,
            "rx": 4,
            "fill": "url(#gGlassH)",
            "stroke": "#7ba7c7",
            "stroke-width": 1.6
          },
          {
            "tag": "path",
            "d": "M278 170 L278 282",
            "stroke": "#ffffff",
            "stroke-width": 2.2,
            "opacity": 0.8,
            "fill": "none"
          },
          {
            "tag": "rect",
            "when": "stage.blueIn",
            "x": 272,
            "y": 200,
            "width": 56,
            "height": 94,
            "rx": 4,
            "fill": "@ stage.react>=3 ? 'url(#gGreenP)' : (stage.react>=2 ? '#8db98a' : (stage.react>=1 ? '#5f9bd0' : 'url(#gBlue)'))",
            "opacity": 0.9
          },
          {
            "tag": "g",
            "when": "stage.ironIn",
            "children": [
              {
                "tag": "rect",
                "x": 296,
                "y": 168,
                "width": 10,
                "height": 126,
                "rx": 2,
                "fill": "#b0bec5",
                "stroke": "#546e7a",
                "stroke-width": 1.2
              },
              {
                "tag": "rect",
                "when": "stage.dep>0",
                "x": 294,
                "y": "@ 294 - 78*stage.dep/3",
                "width": 14,
                "height": "@ 78*stage.dep/3",
                "rx": 2,
                "fill": "#c1440e",
                "opacity": 0.92
              },
              {
                "tag": "circle",
                "when": "stage.dep>=2",
                "cx": 293,
                "cy": 258,
                "r": 3.2,
                "fill": "#e65100"
              },
              {
                "tag": "circle",
                "when": "stage.dep>=2",
                "cx": 310,
                "cy": 272,
                "r": 2.8,
                "fill": "#bf360c"
              },
              {
                "tag": "circle",
                "when": "stage.dep>=3",
                "cx": 309,
                "cy": 240,
                "r": 3,
                "fill": "#d84315"
              },
              {
                "tag": "text",
                "when": "stage.dep>=2",
                "x": 340,
                "y": 254,
                "font-size": 11.5,
                "fill": "#bf360c",
                "font-weight": 700,
                "text": "表面覆盖红色物质 → Cu"
              }
            ]
          },
          {
            "tag": "g",
            "when": "stage.react>=1 && stage.react<3",
            "children": [
              {
                "tag": "text",
                "x": 244,
                "y": 226,
                "font-size": 11,
                "text-anchor": "end",
                "fill": "#0277bd",
                "font-weight": 700,
                "text": "颜色正在变化…"
              }
            ]
          },
          {
            "tag": "text",
            "when": "stage.blueIn && stage.react===0",
            "x": 244,
            "y": 226,
            "font-size": 11,
            "text-anchor": "end",
            "fill": "#1565c0",
            "font-weight": 700,
            "text": "蓝色溶液"
          },
          {
            "tag": "text",
            "when": "stage.react>=3",
            "x": 244,
            "y": 226,
            "font-size": 11,
            "text-anchor": "end",
            "fill": "#33691e",
            "font-weight": 700,
            "text": "已变浅绿色"
          },
          {
            "tag": "text",
            "x": 300,
            "y": 344,
            "font-size": 12,
            "text-anchor": "middle",
            "fill": "#455a64",
            "font-weight": 700,
            "text": "试管：Fe + CuSO₄ 溶液"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.wrongCu",
        "children": [
          {
            "tag": "text",
            "x": 430,
            "y": 190,
            "font-size": 11.5,
            "fill": "#dc2626",
            "font-weight": 700,
            "text": "铜不能置换出自己："
          },
          {
            "tag": "text",
            "x": 430,
            "y": 208,
            "font-size": 11.5,
            "fill": "#dc2626",
            "font-weight": 700,
            "text": "Cu 与 CuSO₄ 不反应"
          }
        ]
      }
    ],
    "report": [
      {
        "title": "实验记录",
        "lines": [
          "实验名称：铁与硫酸铜溶液的反应",
          "反应原理：Fe + CuSO₄ = FeSO₄ + Cu",
          "操作：试管中加入硫酸铜溶液，用镊子夹取打磨过的铁丝浸入溶液中",
          "注意：反应在常温下进行，不需要加热，也不需要催化剂"
        ]
      },
      {
        "title": "现象记录",
        "lines": [
          "1. 铁丝表面覆盖一层红色的物质（铜）",
          "2. 溶液由蓝色逐渐变成浅绿色（生成 FeSO₄）",
          "3. 铁丝逐渐变细，试管底部可以看到少量红色固体沉积",
          "4. 若把铜丝放进硫酸铜溶液，则什么现象都没有"
        ]
      },
      {
        "title": "实验结论",
        "lines": [
          "铁的活动性比铜强，能把铜从它的盐溶液中置换出来。",
          "这是置换反应，也是古代湿法炼铜的原理：Fe + CuSO₄ = FeSO₄ + Cu。",
          "若反应在密闭容器中进行，反应前后物质的总质量保持不变（质量守恒）。"
        ]
      }
    ],
    "errorTable": [
      {
        "op": "用铜丝代替铁丝",
        "phen": "铜不能置换出自己",
        "result": "始终无现象，实验失败",
        "score": 14
      },
      {
        "op": "铁丝未打磨直接放入",
        "phen": "表面有锈、油污",
        "result": "反应慢、现象不明显",
        "score": 14
      },
      {
        "op": "误以为溶液变黄色",
        "phen": "Fe³⁺ 才显黄色",
        "result": "生成的是浅绿色 FeSO₄",
        "score": 16
      },
      {
        "op": "认为红色物质是铁锈",
        "phen": "铁锈是红棕色且疏松",
        "result": "那是有光泽的金属铜",
        "score": 16
      },
      {
        "op": "以为反应后总质量变大了",
        "phen": "铜附着在铁丝上",
        "result": "总质量不变（质量守恒）",
        "score": 10
      },
      {
        "op": "误加无水乙醇或大理石",
        "phen": "与本反应无关",
        "result": "药品选择错误",
        "score": 12
      }
    ],
    "steps": [
      {
        "id": "cover",
        "type": "cover",
        "title": "准备开始",
        "progress": 0,
        "headline": "铁与硫酸铜溶液的反应",
        "subtitle": "一根铁丝泡进蓝水里，竟能捞出红色的铜",
        "buttons": [
          {
            "t": "开始实验",
            "c": "primary",
            "goto": "goal"
          }
        ]
      },
      {
        "id": "goal",
        "type": "doc",
        "title": "实验目标",
        "progress": 6,
        "cols": [
          {
            "title": "实验目标",
            "lines": [
              "1. 认识置换反应 Fe + CuSO₄ = FeSO₄ + Cu",
              "2. 记住 Cu²⁺ 溶液蓝色、Fe²⁺ 溶液浅绿色",
              "3. 理解「活动性强的金属置换弱的」",
              "4. 知道这就是古代湿法炼铜的原理",
              "5. 用质量守恒解释反应前后总质量的变化"
            ]
          },
          {
            "title": "操作方式",
            "lines": [
              "● 拖拽试剂到试管的高亮区域",
              "● 遇到思考题时点选项作答",
              "● 右侧显示当前实验阶段",
              "● 卡住时点右下角“？”获取提示"
            ]
          },
          {
            "title": "安全提示",
            "lines": [
              "⚠ 硫酸铜溶液有毒，不能入口，避免接触伤口",
              "⚠ 用镊子夹取铁丝，不要直接用手拿",
              "⚠ 铁丝事先要用砂纸打磨，除去锈和油污",
              "⚠ 取用过的铁丝不要放回原试剂瓶"
            ]
          }
        ],
        "buttons": [
          {
            "t": "下一步",
            "c": "primary",
            "goto": "equip"
          },
          {
            "t": "返回封面",
            "c": "ghost",
            "goto": "cover"
          }
        ]
      },
      {
        "id": "equip",
        "type": "equip",
        "title": "选择实验器材",
        "progress": 12,
        "tip": "这是一种盐溶液 + 一种金属，还要有夹持工具——想一想该准备什么",
        "buttons": [
          {
            "t": "确认器材",
            "c": "primary",
            "do": [
              {
                "do": "checkEquip",
                "key": "equip",
                "goto": "tubeStep"
              }
            ]
          }
        ]
      },
      {
        "id": "tubeStep",
        "type": "stage",
        "title": "放置试管",
        "progress": 18,
        "shelf": [
          "tube"
        ],
        "desc": "把试管放在桌面上，作为这次反应的容器。",
        "help": "把试管拖到桌面中间的高亮区域。这个反应在常温下就能进行，不需要加热。",
        "zones": [
          "bench"
        ],
        "drop": [
          {
            "equip": "tube",
            "zone": "bench",
            "do": [
              {
                "do": "set",
                "k": "tubeOn",
                "v": true
              },
              {
                "do": "score",
                "key": "tube"
              },
              {
                "do": "tip",
                "text": "试管已放好 ✓"
              },
              {
                "do": "goto",
                "id": "blue",
                "delay": 1000
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要放的是反应容器。"
              }
            ]
          }
        ]
      },
      {
        "id": "blue",
        "type": "stage",
        "title": "加入硫酸铜溶液",
        "progress": 26,
        "shelf": [
          "cuso4"
        ],
        "desc": "向试管中倒入约 1/3 体积的硫酸铜溶液，记住它现在的颜色。",
        "help": "把硫酸铜溶液拖到试管口。含 Cu²⁺ 的溶液显蓝色，先记住这个起点颜色，后面才好对比。",
        "zones": [
          "tubeZone"
        ],
        "drop": [
          {
            "equip": "cuso4",
            "zone": "tubeZone",
            "do": [
              {
                "do": "set",
                "k": "blueIn",
                "v": true
              },
              {
                "do": "score",
                "key": "cuso4"
              },
              {
                "do": "tip",
                "text": "蓝色溶液已加入 ✓ 这是 Cu²⁺ 的颜色"
              },
              {
                "do": "goto",
                "id": "ironStep",
                "delay": 1200
              }
            ]
          },
          {
            "equip": "alcohol",
            "zone": "tubeZone",
            "do": [
              {
                "do": "err",
                "text": "无水乙醇与本反应无关，这里要加的是含 Cu²⁺ 的蓝色溶液。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要加入的是含铜离子的蓝色溶液。"
              }
            ]
          }
        ]
      },
      {
        "id": "ironStep",
        "type": "stage",
        "title": "放入打磨过的铁丝",
        "progress": 38,
        "shelf": [
          "iron",
          "tweezers"
        ],
        "desc": "用镊子夹取打磨过的铁丝，浸入硫酸铜溶液中，静置观察。",
        "help": "把铁丝拖到试管里。铁丝表面若有铁锈或油污，要先用砂纸打磨干净，否则会挡住反应、看不到明显现象。",
        "zones": [
          "tubeZone"
        ],
        "drop": [
          {
            "equip": "iron",
            "zone": "tubeZone",
            "do": [
              {
                "do": "set",
                "k": "ironIn",
                "v": true
              },
              {
                "do": "set",
                "k": "react",
                "v": 1,
                "delay": 900
              },
              {
                "do": "set",
                "k": "dep",
                "v": 1,
                "delay": 1400
              },
              {
                "do": "set",
                "k": "react",
                "v": 2,
                "delay": 1900
              },
              {
                "do": "set",
                "k": "dep",
                "v": 2,
                "delay": 2300
              },
              {
                "do": "set",
                "k": "react",
                "v": 3,
                "delay": 2900
              },
              {
                "do": "set",
                "k": "dep",
                "v": 3,
                "delay": 3300
              },
              {
                "do": "score",
                "key": "iron"
              },
              {
                "do": "tip",
                "text": "铁丝表面开始出现红色物质，蓝色溶液在慢慢变浅绿 ✓"
              },
              {
                "do": "goto",
                "id": "observe",
                "delay": 3800
              }
            ]
          },
          {
            "equip": "cu",
            "zone": "tubeZone",
            "do": [
              {
                "do": "set",
                "k": "wrongCu",
                "v": true
              },
              {
                "do": "err",
                "text": "铜不能置换出铜自己！铁的活动性比铜强，所以要用的是铁丝。"
              }
            ]
          },
          {
            "equip": "tweezers",
            "zone": "tubeZone",
            "do": [
              {
                "do": "err",
                "text": "镊子是用来夹取药品的工具，本身不放进试管。要放进去的是铁丝。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要放入的是一种比铜活泼的金属。"
              }
            ]
          }
        ]
      },
      {
        "id": "observe",
        "type": "doc",
        "title": "你看到了什么？",
        "progress": 52,
        "cols": [
          {
            "title": "观察要点",
            "lines": [
              "铁丝表面发生了什么变化？",
              "溶液颜色从什么色变成了什么色？",
              "反应过程中有没有加热、有没有加催化剂？"
            ]
          },
          {
            "title": "提示",
            "lines": [
              "红色有光泽的物质 —— 金属铜",
              "浅绿色的溶液 —— 生成的硫酸亚铁 FeSO₄",
              "整个反应在常温下自己就发生了。"
            ]
          }
        ],
        "buttons": [
          {
            "t": "铁丝表面覆盖红色物质，溶液由蓝变浅绿",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "observe"
              },
              {
                "do": "tip",
                "text": "现象描述完整准确 ✓"
              },
              {
                "do": "goto",
                "id": "judge",
                "delay": 1500
              }
            ]
          },
          {
            "t": "铁丝表面变黑，溶液由蓝变黄",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "析出的铜是红色的，Fe²⁺ 溶液是浅绿色的（Fe³⁺ 才是黄色）。再看一遍。"
              }
            ]
          },
          {
            "t": "铁丝溶解消失，溶液颜色不变",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "溶液颜色明显变了。而且铁丝只是变细，同时有红色物质在它表面长出来。"
              }
            ]
          }
        ]
      },
      {
        "id": "judge",
        "type": "doc",
        "title": "红色物质和浅绿色溶液各是什么？",
        "progress": 66,
        "cols": [
          {
            "title": "分析",
            "lines": [
              "Fe + CuSO₄ = FeSO₄ + Cu",
              "铁原子失去电子变成 Fe²⁺ 进入溶液",
              "铜离子得到电子变成铜原子析出在铁丝表面"
            ]
          },
          {
            "title": "颜色口诀",
            "lines": [
              "Cu²⁺ 溶液：蓝色",
              "Fe²⁺ 溶液：浅绿色",
              "Fe³⁺ 溶液：黄色",
              "单质铜：红色（紫红色）固体"
            ]
          }
        ],
        "buttons": [
          {
            "t": "红色物质是 Cu，浅绿色溶液是 FeSO₄",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "judge"
              },
              {
                "do": "tip",
                "text": "完全正确 ✓ 记住这几个颜色，中考常考"
              },
              {
                "do": "goto",
                "id": "mass",
                "delay": 1500
              }
            ]
          },
          {
            "t": "红色物质是铁锈，浅绿色溶液是 FeCl₂",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "铁锈是红棕色疏松的，而这里是有光泽的红色金属；溶液里也没有氯离子，不会是 FeCl₂。"
              }
            ]
          },
          {
            "t": "红色物质是 Cu，浅绿色溶液是 Fe₂(SO₄)₃",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "Fe₂(SO₄)₃ 里是 Fe³⁺，溶液显黄色。铁与盐溶液发生置换时生成的是亚铁盐。"
              }
            ]
          }
        ]
      },
      {
        "id": "mass",
        "type": "doc",
        "title": "质量会变吗？",
        "progress": 76,
        "cols": [
          {
            "title": "情景",
            "lines": [
              "把整个试管连同里面的东西一起放在天平上，",
              "反应前后称量（不打开塞子、不洒出一滴液体）。",
              "铁丝变细了，铜析出了，物质在互相转化。"
            ]
          },
          {
            "title": "依据",
            "lines": [
              "质量守恒定律：参加化学反应的各物质质量总和，",
              "等于反应后生成的各物质质量总和。"
            ]
          }
        ],
        "buttons": [
          {
            "t": "总质量不变",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "mass"
              },
              {
                "do": "tip",
                "text": "对！析出多少铜，就消耗多少铁并生成相应的 FeSO₄，总账是平的 ✓"
              },
              {
                "do": "goto",
                "id": "summary",
                "delay": 1600
              }
            ]
          },
          {
            "t": "总质量变大（析出了铜）",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "铜不是凭空来的，它来自溶液中减少的 Cu²⁺。有增必有减，总质量守恒。"
              }
            ]
          },
          {
            "t": "总质量变小（铁被消耗）",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "铁减少的同时，溶液中多了 Fe²⁺。所有变化都要算进去。"
              }
            ]
          }
        ]
      },
      {
        "id": "summary",
        "type": "doc",
        "title": "置换反应的规律",
        "progress": 88,
        "cols": [
          {
            "title": "规律",
            "lines": [
              "活动性强的金属，能把活动性弱的金属",
              "从它的盐溶液中置换出来。",
              "Fe 在 Cu 之前 → 铁能置换出铜",
              "Cu 在 Ag 之前 → 铜能置换出银",
              "反之则不发生反应。"
            ]
          },
          {
            "title": "应用",
            "lines": [
              "● 湿法炼铜：Fe + CuSO₄ = FeSO₄ + Cu",
              "● 我国西汉时期就有「曾青得铁则化为铜」的记载",
              "● 不能用铁桶盛放硫酸铜溶液（会被腐蚀）"
            ]
          }
        ],
        "buttons": [
          {
            "t": "强置换弱：Fe 比 Cu 活泼，所以能把铜置换出来",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "summary"
              },
              {
                "do": "tip",
                "text": "抓住了规律 ✓ 这正是金属活动性顺序的核心用途"
              },
              {
                "do": "goto",
                "id": "report",
                "delay": 1600
              }
            ]
          },
          {
            "t": "只要两种金属碰在一起就会置换",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "必须强置换弱。刚才把铜丝放进硫酸铜溶液，一点变化都没有。"
              }
            ]
          },
          {
            "t": "与活动性无关，只看谁的量更多",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "量多量少只影响能反应多少，能不能反应由活动性顺序决定。"
              }
            ]
          }
        ]
      },
      {
        "id": "report",
        "type": "report",
        "title": "实验报告",
        "progress": 94,
        "buttons": [
          {
            "t": "提交报告",
            "c": "primary",
            "do": [
              {
                "do": "finish"
              },
              {
                "do": "goto",
                "id": "score"
              }
            ]
          }
        ]
      },
      {
        "id": "score",
        "type": "score",
        "title": "实验评分",
        "progress": 100,
        "buttons": [
          {
            "t": "导出本次成绩",
            "c": "ghost",
            "do": [
              {
                "do": "export"
              }
            ]
          },
          {
            "t": "查看常见错误",
            "c": "ghost",
            "goto": "errtable"
          },
          {
            "t": "重做实验",
            "c": "primary",
            "do": [
              {
                "do": "reset"
              }
            ]
          }
        ]
      },
      {
        "id": "errtable",
        "type": "errors",
        "title": "常见错误与后果",
        "progress": 100,
        "buttons": [
          {
            "t": "返回评分",
            "c": "ghost",
            "goto": "score"
          },
          {
            "t": "重做实验",
            "c": "primary",
            "do": [
              {
                "do": "reset"
              }
            ]
          }
        ]
      }
    ]
  },
  "exp_ions": {
    "id": "ions",
    "title": "硫酸根与氯离子的检验",
    "subtitle": "初中化学虚拟实验 · 离子检验 + 排除干扰",
    "badges": [
      "BaSO₄ 不溶于酸",
      "AgCl 不溶于酸",
      "满分 100 分"
    ],
    "viewBox": "0 0 600 360",
    "equipments": [
      {
        "id": "tube",
        "name": "试管（2支）",
        "need": true
      },
      {
        "id": "na2so4",
        "name": "硫酸钠溶液",
        "need": true
      },
      {
        "id": "nacl",
        "name": "氯化钠溶液",
        "need": true
      },
      {
        "id": "bacl2",
        "name": "氯化钡溶液",
        "need": true
      },
      {
        "id": "agno3",
        "name": "硝酸银溶液",
        "need": true
      },
      {
        "id": "hno3",
        "name": "稀硝酸",
        "need": true
      },
      {
        "id": "dropper",
        "name": "胶头滴管",
        "need": true
      },
      {
        "id": "na2co3",
        "name": "碳酸钠溶液",
        "need": false
      },
      {
        "id": "water2",
        "name": "蒸馏水",
        "need": false
      }
    ],
    "dims": [
      {
        "key": "skill",
        "name": "操作规范"
      },
      {
        "key": "safety",
        "name": "安全意识"
      }
    ],
    "scoreItems": [
      {
        "key": "equip",
        "name": "器材选择",
        "max": 10,
        "dim": "skill"
      },
      {
        "key": "tubes",
        "name": "准备两支试管",
        "max": 8,
        "dim": "skill"
      },
      {
        "key": "samples",
        "name": "分别取两种待测液",
        "max": 12,
        "dim": "skill"
      },
      {
        "key": "dropA",
        "name": "用BaCl₂检验硫酸根",
        "max": 14,
        "dim": "skill"
      },
      {
        "key": "acidA",
        "name": "加稀硝酸确认沉淀不溶",
        "max": 10,
        "dim": "skill"
      },
      {
        "key": "dropB",
        "name": "用AgNO₃检验氯离子",
        "max": 12,
        "dim": "skill"
      },
      {
        "key": "acidB",
        "name": "再次加稀硝酸排除干扰",
        "max": 8,
        "dim": "skill"
      },
      {
        "key": "judge",
        "name": "解释稀硝酸的作用",
        "max": 16,
        "dim": "skill"
      },
      {
        "key": "summary",
        "name": "归纳检验思路",
        "max": 10,
        "dim": "skill"
      }
    ],
    "initialStage": {
      "tubesOn": false,
      "sampleA": false,
      "sampleB": false,
      "pptA": 0,
      "pptB": 0,
      "hno3A": false,
      "hno3B": false,
      "wrongOrder": false
    },
    "dropZones": {
      "bench": {
        "x": 130,
        "y": 210,
        "w": 340,
        "h": 112
      },
      "zoneA": {
        "x": 150,
        "y": 128,
        "w": 106,
        "h": 186
      },
      "zoneB": {
        "x": 346,
        "y": 128,
        "w": 106,
        "h": 186
      }
    },
    "scene": [
      {
        "tag": "rect",
        "x": 30,
        "y": 322,
        "width": 540,
        "height": 14,
        "rx": 5,
        "fill": "url(#gMetal)"
      },
      {
        "tag": "rect",
        "x": 30,
        "y": 322,
        "width": 540,
        "height": 4,
        "rx": 2,
        "fill": "#e8eef2",
        "opacity": 0.75
      },
      {
        "tag": "g",
        "when": "stage.tubesOn",
        "children": [
          {
            "tag": "rect",
            "x": 138,
            "y": 292,
            "width": 324,
            "height": 12,
            "rx": 4,
            "fill": "url(#gMetal)"
          },
          {
            "tag": "rect",
            "x": 148,
            "y": 296,
            "width": 10,
            "height": 22,
            "fill": "url(#gMetalV)"
          },
          {
            "tag": "rect",
            "x": 442,
            "y": 296,
            "width": 10,
            "height": 22,
            "fill": "url(#gMetalV)"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.tubesOn",
        "children": [
          {
            "tag": "path",
            "d": "M172 152 L172 280 Q172 292 184 292 L216 292 Q228 292 228 280 L228 152 Z",
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.2
          },
          {
            "tag": "rect",
            "x": 168,
            "y": 144,
            "width": 64,
            "height": 10,
            "rx": 4,
            "fill": "url(#gGlassH)",
            "stroke": "#7ba7c7",
            "stroke-width": 1.6
          },
          {
            "tag": "rect",
            "when": "stage.sampleA",
            "x": 175,
            "y": 206,
            "width": 50,
            "height": 82,
            "rx": 4,
            "fill": "@ stage.pptA>0 ? '#f2f4f7' : '#fafafa'",
            "opacity": 0.92
          },
          {
            "tag": "g",
            "when": "stage.pptA>0",
            "children": [
              {
                "tag": "path",
                "d": "M175 268 Q186 258 200 266 Q214 256 225 268 L225 286 Q225 290 221 290 L179 290 Q175 290 175 286 Z",
                "fill": "#ffffff",
                "stroke": "#e0e0e0",
                "stroke-width": 1.4
              },
              {
                "tag": "rect",
                "x": 175,
                "y": "@ 268 - 16*stage.pptA/2",
                "width": 50,
                "height": "@ 16*stage.pptA/2",
                "rx": 3,
                "fill": "#ffffff",
                "opacity": 0.95
              },
              {
                "tag": "circle",
                "cx": 186,
                "cy": "@ 268 - 18*stage.pptA/2",
                "r": 4,
                "fill": "#ffffff",
                "stroke": "#eceff1",
                "stroke-width": 1
              },
              {
                "tag": "circle",
                "cx": 214,
                "cy": "@ 270 - 18*stage.pptA/2",
                "r": 3.4,
                "fill": "#ffffff",
                "stroke": "#eceff1",
                "stroke-width": 1
              }
            ]
          },
          {
            "tag": "text",
            "when": "stage.pptA>0",
            "x": 200,
            "y": 246,
            "font-size": 11,
            "text-anchor": "middle",
            "fill": "#37474f",
            "font-weight": 700,
            "text": "白色沉淀"
          },
          {
            "tag": "text",
            "when": "stage.hno3A",
            "x": 200,
            "y": 224,
            "font-size": 10.5,
            "text-anchor": "middle",
            "fill": "#b71c1c",
            "font-weight": 700,
            "text": "加稀硝酸：不溶解"
          },
          {
            "tag": "text",
            "x": 200,
            "y": 330,
            "font-size": 11.5,
            "text-anchor": "middle",
            "fill": "#455a64",
            "font-weight": 700,
            "text": "Na₂SO₄ 溶液"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.tubesOn",
        "children": [
          {
            "tag": "path",
            "d": "M368 152 L368 280 Q368 292 380 292 L412 292 Q424 292 424 280 L424 152 Z",
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.2
          },
          {
            "tag": "rect",
            "x": 364,
            "y": 144,
            "width": 64,
            "height": 10,
            "rx": 4,
            "fill": "url(#gGlassH)",
            "stroke": "#7ba7c7",
            "stroke-width": 1.6
          },
          {
            "tag": "rect",
            "when": "stage.sampleB",
            "x": 371,
            "y": 206,
            "width": 50,
            "height": 82,
            "rx": 4,
            "fill": "@ stage.pptB>0 ? '#f2f4f7' : '#fafafa'",
            "opacity": 0.92
          },
          {
            "tag": "g",
            "when": "stage.pptB>0",
            "children": [
              {
                "tag": "path",
                "d": "M371 268 Q382 258 396 266 Q410 256 421 268 L421 286 Q421 290 417 290 L375 290 Q371 290 371 286 Z",
                "fill": "#ffffff",
                "stroke": "#e0e0e0",
                "stroke-width": 1.4
              },
              {
                "tag": "rect",
                "x": 371,
                "y": "@ 268 - 16*stage.pptB/2",
                "width": 50,
                "height": "@ 16*stage.pptB/2",
                "rx": 3,
                "fill": "#ffffff",
                "opacity": 0.95
              },
              {
                "tag": "circle",
                "cx": 382,
                "cy": "@ 268 - 18*stage.pptB/2",
                "r": 4,
                "fill": "#ffffff",
                "stroke": "#eceff1",
                "stroke-width": 1
              },
              {
                "tag": "circle",
                "cx": 410,
                "cy": "@ 270 - 18*stage.pptB/2",
                "r": 3.4,
                "fill": "#ffffff",
                "stroke": "#eceff1",
                "stroke-width": 1
              }
            ]
          },
          {
            "tag": "text",
            "when": "stage.pptB>0",
            "x": 396,
            "y": 246,
            "font-size": 11,
            "text-anchor": "middle",
            "fill": "#37474f",
            "font-weight": 700,
            "text": "白色沉淀"
          },
          {
            "tag": "text",
            "when": "stage.hno3B",
            "x": 396,
            "y": 224,
            "font-size": 10.5,
            "text-anchor": "middle",
            "fill": "#b71c1c",
            "font-weight": 700,
            "text": "加稀硝酸：不溶解"
          },
          {
            "tag": "text",
            "x": 396,
            "y": 330,
            "font-size": 11.5,
            "text-anchor": "middle",
            "fill": "#455a64",
            "font-weight": 700,
            "text": "NaCl 溶液"
          }
        ]
      },
      {
        "tag": "text",
        "when": "stage.wrongOrder",
        "x": 300,
        "y": 116,
        "font-size": 11.5,
        "text-anchor": "middle",
        "fill": "#dc2626",
        "font-weight": 700,
        "text": "试剂加错了试管：硫酸根用BaCl₂，氯离子用AgNO₃"
      }
    ],
    "report": [
      {
        "title": "实验记录",
        "lines": [
          "实验名称：硫酸根离子与氯离子的检验",
          "SO₄²⁻ 检验：Na₂SO₄ + BaCl₂ = BaSO₄↓ + 2NaCl，再加稀硝酸沉淀不溶解",
          "Cl⁻ 检验：NaCl + AgNO₃ = AgCl↓ + NaNO₃，再加稀硝酸沉淀不溶解",
          "操作：取少量待测液于试管中，滴加试剂，观察是否产生不溶于稀硝酸的白色沉淀"
        ]
      },
      {
        "title": "现象记录",
        "lines": [
          "1. 硫酸钠溶液中滴加氯化钡溶液，产生白色沉淀",
          "2. 再滴加稀硝酸，白色沉淀不溶解 → 证明含 SO₄²⁻",
          "3. 氯化钠溶液中滴加硝酸银溶液，产生白色沉淀",
          "4. 再滴加稀硝酸，白色沉淀不溶解 → 证明含 Cl⁻"
        ]
      },
      {
        "title": "实验结论",
        "lines": [
          "BaSO₄ 和 AgCl 都是既不溶于水也不溶于稀硝酸的白色沉淀。",
          "加稀硝酸的目的是排除 CO₃²⁻ 等离子的干扰：碳酸盐沉淀会溶于酸并放出气体。",
          "检验离子的思路：选一种能与目标离子生成特征沉淀的试剂，再加酸验证沉淀是否特殊的稳定。"
        ]
      }
    ],
    "errorTable": [
      {
        "op": "只加BaCl₂不加稀硝酸",
        "phen": "CO₃²⁻也能产生白色沉淀",
        "result": "无法排除干扰，结论不可靠",
        "score": 10
      },
      {
        "op": "把AgNO₃加到硫酸钠里",
        "phen": "硫酸银微溶，可能干扰",
        "result": "检验对象选错试剂",
        "score": 12
      },
      {
        "op": "先加稀硝酸后加试剂",
        "phen": "顺序颠倒",
        "result": "失去排除干扰的意义",
        "score": 16
      },
      {
        "op": "用自来水配制溶液",
        "phen": "自来水中含Cl⁻",
        "result": "氯离子检验出现假阳性",
        "score": 12
      },
      {
        "op": "把BaCl₂和AgNO₃混在一支试管",
        "phen": "多种沉淀同时生成",
        "result": "无法判断是哪一种离子",
        "score": 16
      },
      {
        "op": "误用碳酸钠溶液",
        "phen": "那是用来演示干扰的",
        "result": "本实验的待测液不是它",
        "score": 14
      }
    ],
    "steps": [
      {
        "id": "cover",
        "type": "cover",
        "title": "准备开始",
        "progress": 0,
        "headline": "硫酸根与氯离子的检验",
        "subtitle": "都是白色沉淀，怎么知道沉淀的是谁？",
        "buttons": [
          {
            "t": "开始实验",
            "c": "primary",
            "goto": "goal"
          }
        ]
      },
      {
        "id": "goal",
        "type": "doc",
        "title": "实验目标",
        "progress": 6,
        "cols": [
          {
            "title": "实验目标",
            "lines": [
              "1. 学会检验 SO₄²⁻：BaCl₂ 溶液 + 稀硝酸",
              "2. 学会检验 Cl⁻：AgNO₃ 溶液 + 稀硝酸",
              "3. 记住 BaSO₄、AgCl 都是不溶于稀硝酸的白色沉淀",
              "4. 理解加稀硝酸是为了排除 CO₃²⁻ 的干扰",
              "5. 养成取少量样品、分两支试管分别检验的习惯"
            ]
          },
          {
            "title": "操作方式",
            "lines": [
              "● 拖拽试剂到对应试管的高亮区域",
              "● 遇到思考题时点选项作答",
              "● 右侧显示当前实验阶段",
              "● 卡住时点右下角“？”获取提示"
            ]
          },
          {
            "title": "安全提示",
            "lines": [
              "⚠ 硝酸银溶液见光易分解，要保存在棕色瓶中",
              "⚠ 硝酸有腐蚀性，取用时不能滴到皮肤和衣物上",
              "⚠ 实验后的废液要倒入指定容器，不能随手倒进水池",
              "⚠ 每取一种试剂滴管要专用，防止交叉污染"
            ]
          }
        ],
        "buttons": [
          {
            "t": "下一步",
            "c": "primary",
            "goto": "equip"
          },
          {
            "t": "返回封面",
            "c": "ghost",
            "goto": "cover"
          }
        ]
      },
      {
        "id": "equip",
        "type": "equip",
        "title": "选择实验器材",
        "progress": 12,
        "tip": "两支试管分别装两种待测液，另需要两种沉淀试剂，以及用来排除干扰的酸",
        "buttons": [
          {
            "t": "确认器材",
            "c": "primary",
            "do": [
              {
                "do": "checkEquip",
                "key": "equip",
                "goto": "tubes"
              }
            ]
          }
        ]
      },
      {
        "id": "tubes",
        "type": "stage",
        "title": "准备两支试管",
        "progress": 18,
        "shelf": [
          "tube"
        ],
        "desc": "两种待测液要分开检验，绝不能倒在同一支试管里。",
        "help": "把试管拖到桌面上的高亮区域。分开取样是最基本的操作习惯：一旦混在一起，就分不清沉淀来自哪种离子了。",
        "zones": [
          "bench"
        ],
        "drop": [
          {
            "equip": "tube",
            "zone": "bench",
            "do": [
              {
                "do": "set",
                "k": "tubesOn",
                "v": true
              },
              {
                "do": "score",
                "key": "tubes"
              },
              {
                "do": "tip",
                "text": "两支试管已并排架好 ✓ 左边检验SO₄²⁻，右边检验Cl⁻"
              },
              {
                "do": "goto",
                "id": "samples",
                "delay": 1200
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要准备好盛放待测液的试管。"
              }
            ]
          }
        ]
      },
      {
        "id": "samples",
        "type": "stage",
        "title": "分别取两种待测液",
        "progress": 28,
        "shelf": [
          "na2so4",
          "nacl"
        ],
        "desc": "左试管取少量硫酸钠溶液，右试管取少量氯化钠溶液。",
        "help": "把硫酸钠溶液拖到左边试管，把氯化钠溶液拖到右边试管。取量不必多，1~2 mL 就够观察了。",
        "zones": [
          "zoneA",
          "zoneB"
        ],
        "drop": [
          {
            "equip": "na2so4",
            "zone": "zoneA",
            "do": [
              {
                "do": "set",
                "k": "sampleA",
                "v": true
              },
              {
                "do": "tip",
                "text": "已取硫酸钠溶液 ✓"
              },
              {
                "do": "if",
                "cond": "stage.sampleB",
                "then": [
                  {
                    "do": "score",
                    "key": "samples"
                  },
                  {
                    "do": "goto",
                    "id": "testA",
                    "delay": 900
                  }
                ]
              }
            ]
          },
          {
            "equip": "nacl",
            "zone": "zoneB",
            "do": [
              {
                "do": "set",
                "k": "sampleB",
                "v": true
              },
              {
                "do": "tip",
                "text": "已取氯化钠溶液 ✓"
              },
              {
                "do": "if",
                "cond": "stage.sampleA",
                "then": [
                  {
                    "do": "score",
                    "key": "samples"
                  },
                  {
                    "do": "goto",
                    "id": "testA",
                    "delay": 900
                  }
                ]
              }
            ]
          },
          {
            "equip": "nacl",
            "zone": "zoneA",
            "do": [
              {
                "do": "err",
                "text": "左边这支要检验的是硫酸根离子，应该取硫酸钠溶液。"
              }
            ]
          },
          {
            "equip": "na2so4",
            "zone": "zoneB",
            "do": [
              {
                "do": "err",
                "text": "右边这支要检验的是氯离子，应该取氯化钠溶液。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要取的是待测的两种无色溶液。"
              }
            ]
          }
        ]
      },
      {
        "id": "testA",
        "type": "stage",
        "title": "检验硫酸根离子",
        "progress": 40,
        "shelf": [
          "bacl2"
        ],
        "desc": "向左边试管滴加氯化钡溶液，观察是否有白色沉淀生成。",
        "help": "把氯化钡溶液拖到左边试管。Ba²⁺ 遇到 SO₄²⁻ 会生成既不溶于水也不溶于酸的白色硫酸钡沉淀。",
        "zones": [
          "zoneA"
        ],
        "drop": [
          {
            "equip": "bacl2",
            "zone": "zoneA",
            "do": [
              {
                "do": "set",
                "k": "pptA",
                "v": 1,
                "delay": 600
              },
              {
                "do": "set",
                "k": "pptA",
                "v": 2,
                "delay": 1400
              },
              {
                "do": "score",
                "key": "dropA"
              },
              {
                "do": "tip",
                "text": "出现白色沉淀：Na₂SO₄ + BaCl₂ = BaSO₄↓ + 2NaCl ✓"
              },
              {
                "do": "goto",
                "id": "acidA",
                "delay": 2200
              }
            ]
          },
          {
            "equip": "agno3",
            "zone": "zoneA",
            "do": [
              {
                "do": "set",
                "k": "wrongOrder",
                "v": true
              },
              {
                "do": "err",
                "text": "硝酸银是用来检验氯离子的，硫酸根要用含 Ba²⁺ 的溶液。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要滴入能检验硫酸根的试剂。"
              }
            ]
          }
        ]
      },
      {
        "id": "acidA",
        "type": "stage",
        "title": "加稀硝酸验证",
        "progress": 50,
        "shelf": [
          "hno3"
        ],
        "desc": "向左边试管的白色沉淀中滴加稀硝酸，看沉淀是否溶解。",
        "help": "把稀硝酸拖到左边试管。如果沉淀是碳酸钡之类的，会溶于酸并冒气泡；硫酸钡则纹丝不动。",
        "zones": [
          "zoneA"
        ],
        "drop": [
          {
            "equip": "hno3",
            "zone": "zoneA",
            "do": [
              {
                "do": "set",
                "k": "hno3A",
                "v": true
              },
              {
                "do": "score",
                "key": "acidA"
              },
              {
                "do": "tip",
                "text": "沉淀不溶解，也不产生气泡 → 确实是 BaSO₄ ✓"
              },
              {
                "do": "goto",
                "id": "testB",
                "delay": 1900
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要加入稀硝酸，验证沉淀是否溶于酸。"
              }
            ]
          }
        ]
      },
      {
        "id": "testB",
        "type": "stage",
        "title": "检验氯离子",
        "progress": 62,
        "shelf": [
          "agno3"
        ],
        "desc": "向右边试管滴加硝酸银溶液，观察是否有白色沉淀生成。",
        "help": "把硝酸银溶液拖到右边试管。Ag⁺ 遇到 Cl⁻ 会生成既不溶于水也不溶于稀硝酸的白色氯化银沉淀。",
        "zones": [
          "zoneB"
        ],
        "drop": [
          {
            "equip": "agno3",
            "zone": "zoneB",
            "do": [
              {
                "do": "set",
                "k": "pptB",
                "v": 1,
                "delay": 600
              },
              {
                "do": "set",
                "k": "pptB",
                "v": 2,
                "delay": 1400
              },
              {
                "do": "score",
                "key": "dropB"
              },
              {
                "do": "tip",
                "text": "出现白色沉淀：NaCl + AgNO₃ = AgCl↓ + NaNO₃ ✓"
              },
              {
                "do": "goto",
                "id": "acidB",
                "delay": 2200
              }
            ]
          },
          {
            "equip": "bacl2",
            "zone": "zoneB",
            "do": [
              {
                "do": "set",
                "k": "wrongOrder",
                "v": true
              },
              {
                "do": "err",
                "text": "氯化钡是用来检验硫酸根的，氯离子要用含 Ag⁺ 的溶液。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要滴入能检验氯离子的试剂。"
              }
            ]
          }
        ]
      },
      {
        "id": "acidB",
        "type": "stage",
        "title": "再次加稀硝酸",
        "progress": 72,
        "shelf": [
          "hno3"
        ],
        "desc": "同样地，向白色沉淀中滴加稀硝酸，确认它不溶于酸。",
        "help": "把稀硝酸拖到右边试管。到这一步，你就能踏实地说：这支试管里确实含有氯离子 ✓",
        "zones": [
          "zoneB"
        ],
        "drop": [
          {
            "equip": "hno3",
            "zone": "zoneB",
            "do": [
              {
                "do": "set",
                "k": "hno3B",
                "v": true
              },
              {
                "do": "score",
                "key": "acidB"
              },
              {
                "do": "tip",
                "text": "沉淀同样不溶解 → 确实是 AgCl ✓"
              },
              {
                "do": "goto",
                "id": "judge",
                "delay": 1800
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步还是要加入稀硝酸。"
              }
            ]
          }
        ]
      },
      {
        "id": "judge",
        "type": "doc",
        "title": "为什么要多此一举加酸？",
        "progress": 82,
        "cols": [
          {
            "title": "只用沉淀试剂不行吗",
            "lines": [
              "看到白色沉淀就下结论，其实很危险。",
              "溶液里若含 CO₃²⁻，加 BaCl₂ 也会生成白色的碳酸钡沉淀；",
              "加 AgNO₃ 也会生成白色的碳酸银沉淀。",
              "光看白色沉淀，根本分不清是谁。"
            ]
          },
          {
            "title": "稀硝酸的作用",
            "lines": [
              "碳酸盐沉淀遇酸会溶解，还放出二氧化碳气泡；",
              "而 BaSO₄ 和 AgCl 既不溶于水也不溶于酸。",
              "加酸后沉淀还在 → 排除了碳酸根的干扰；",
              "沉淀溶解 → 说明原来只是碳酸盐。"
            ]
          }
        ],
        "buttons": [
          {
            "t": "排除CO₃²⁻等离子的干扰，确认沉淀是BaSO₄/AgCl",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "judge"
              },
              {
                "do": "tip",
                "text": "这正是加稀硝酸的全部意义 ✓"
              },
              {
                "do": "goto",
                "id": "summary",
                "delay": 1600
              }
            ]
          },
          {
            "t": "让沉淀更白更明显",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "稀硝酸不会让沉淀更白。它是一道检验：能让杂质沉淀溶解掉，留下真正不溶于酸的那一个。"
              }
            ]
          },
          {
            "t": "没有什么用，习惯而已",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "这一步恰恰是结论可靠性的保证。少了它，碳酸盐就能冒充硫酸盐。"
              }
            ]
          }
        ]
      },
      {
        "id": "summary",
        "type": "doc",
        "title": "离子检验的通用思路",
        "progress": 90,
        "cols": [
          {
            "title": "三步走",
            "lines": [
              "① 取样：取少量待测液于洁净试管中",
              "② 加试剂：产生特征现象（沉淀/气体/颜色）",
              "③ 加酸（或加另一种试剂）确认，排除干扰"
            ]
          },
          {
            "title": "常考的两对",
            "lines": [
              "SO₄²⁻：BaCl₂ 溶液 + 稀硝酸 → 不溶的白色沉淀",
              "Cl⁻：AgNO₃ 溶液 + 稀硝酸 → 不溶的白色沉淀",
              "CO₃²⁻：稀盐酸 + 澄清石灰水 → 气体使石灰水变浑浊"
            ]
          }
        ],
        "buttons": [
          {
            "t": "取样 → 加特征试剂 → 再加酸排除干扰",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "summary"
              },
              {
                "do": "tip",
                "text": "思路清晰 ✓ 这套流程适用于绝大多数离子检验题"
              },
              {
                "do": "goto",
                "id": "report",
                "delay": 1500
              }
            ]
          },
          {
            "t": "看到白色沉淀就可以直接下结论",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "白色沉淀太多见了。必须经过「加酸不溶」这一步验证，结论才站得住。"
              }
            ]
          },
          {
            "t": "把所有试剂都倒进一支试管观察",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "多种沉淀混在一起就无法判断来源。检验必须分开取样、逐一验证。"
              }
            ]
          }
        ]
      },
      {
        "id": "report",
        "type": "report",
        "title": "实验报告",
        "progress": 95,
        "buttons": [
          {
            "t": "提交报告",
            "c": "primary",
            "do": [
              {
                "do": "finish"
              },
              {
                "do": "goto",
                "id": "score"
              }
            ]
          }
        ]
      },
      {
        "id": "score",
        "type": "score",
        "title": "实验评分",
        "progress": 100,
        "buttons": [
          {
            "t": "导出本次成绩",
            "c": "ghost",
            "do": [
              {
                "do": "export"
              }
            ]
          },
          {
            "t": "查看常见错误",
            "c": "ghost",
            "goto": "errtable"
          },
          {
            "t": "重做实验",
            "c": "primary",
            "do": [
              {
                "do": "reset"
              }
            ]
          }
        ]
      },
      {
        "id": "errtable",
        "type": "errors",
        "title": "常见错误与后果",
        "progress": 100,
        "buttons": [
          {
            "t": "返回评分",
            "c": "ghost",
            "goto": "score"
          },
          {
            "t": "重做实验",
            "c": "primary",
            "do": [
              {
                "do": "reset"
              }
            ]
          }
        ]
      }
    ]
  },
  "exp_precip": {
    "id": "precip",
    "title": "碱与盐的沉淀反应",
    "subtitle": "初中化学虚拟实验 · 复分解反应 + 沉淀颜色",
    "badges": [
      "蓝色 / 红褐 / 白色",
      "复分解发生条件",
      "满分 100 分"
    ],
    "viewBox": "0 0 600 360",
    "equipments": [
      {
        "id": "tube",
        "name": "试管（3支）",
        "need": true
      },
      {
        "id": "cuso4",
        "name": "硫酸铜溶液",
        "need": true
      },
      {
        "id": "fecl3",
        "name": "氯化铁溶液",
        "need": true
      },
      {
        "id": "na2co3",
        "name": "碳酸钠溶液",
        "need": true
      },
      {
        "id": "naoh",
        "name": "氢氧化钠溶液",
        "need": true
      },
      {
        "id": "limewater",
        "name": "澄清石灰水",
        "need": true
      },
      {
        "id": "dropper",
        "name": "胶头滴管",
        "need": true
      },
      {
        "id": "acid",
        "name": "稀盐酸",
        "need": false
      },
      {
        "id": "water2",
        "name": "蒸馏水",
        "need": false
      }
    ],
    "dims": [
      {
        "key": "skill",
        "name": "操作规范"
      },
      {
        "key": "safety",
        "name": "安全意识"
      }
    ],
    "scoreItems": [
      {
        "key": "equip",
        "name": "器材选择",
        "max": 10,
        "dim": "skill"
      },
      {
        "key": "tubes",
        "name": "排列三支试管",
        "max": 8,
        "dim": "skill"
      },
      {
        "key": "salts",
        "name": "分别加入三种盐溶液",
        "max": 14,
        "dim": "skill"
      },
      {
        "key": "alkali",
        "name": "分别加入对应的碱",
        "max": 16,
        "dim": "skill"
      },
      {
        "key": "observe",
        "name": "准确描述沉淀颜色",
        "max": 14,
        "dim": "skill"
      },
      {
        "key": "judge",
        "name": "判断生成的沉淀",
        "max": 14,
        "dim": "skill"
      },
      {
        "key": "rule",
        "name": "归纳复分解发生条件",
        "max": 14,
        "dim": "skill"
      },
      {
        "key": "summary",
        "name": "说出三个方程式",
        "max": 10,
        "dim": "skill"
      }
    ],
    "initialStage": {
      "tubesOn": false,
      "saltA": false,
      "saltB": false,
      "saltC": false,
      "naohIn": false,
      "limeIn": false,
      "react": 0,
      "wrongAcid": false
    },
    "dropZones": {
      "bench": {
        "x": 110,
        "y": 210,
        "w": 380,
        "h": 112
      },
      "zoneA": {
        "x": 120,
        "y": 126,
        "w": 90,
        "h": 190
      },
      "zoneB": {
        "x": 232,
        "y": 126,
        "w": 90,
        "h": 190
      },
      "zoneC": {
        "x": 396,
        "y": 126,
        "w": 100,
        "h": 190
      },
      "zoneAB": {
        "x": 116,
        "y": 110,
        "w": 266,
        "h": 202
      }
    },
    "scene": [
      {
        "tag": "rect",
        "x": 30,
        "y": 322,
        "width": 540,
        "height": 14,
        "rx": 5,
        "fill": "url(#gMetal)"
      },
      {
        "tag": "rect",
        "x": 30,
        "y": 322,
        "width": 540,
        "height": 4,
        "rx": 2,
        "fill": "#e8eef2",
        "opacity": 0.75
      },
      {
        "tag": "g",
        "when": "stage.tubesOn",
        "children": [
          {
            "tag": "rect",
            "x": 108,
            "y": 292,
            "width": 388,
            "height": 12,
            "rx": 4,
            "fill": "url(#gMetal)"
          },
          {
            "tag": "rect",
            "x": 118,
            "y": 296,
            "width": 10,
            "height": 22,
            "fill": "url(#gMetalV)"
          },
          {
            "tag": "rect",
            "x": 476,
            "y": 296,
            "width": 10,
            "height": 22,
            "fill": "url(#gMetalV)"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.tubesOn",
        "children": [
          {
            "tag": "path",
            "d": "M140 152 L140 276 Q140 292 156 292 L188 292 Q204 292 204 276 L204 152 Z",
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.2
          },
          {
            "tag": "rect",
            "x": 136,
            "y": 144,
            "width": 72,
            "height": 10,
            "rx": 4,
            "fill": "url(#gGlassH)",
            "stroke": "#7ba7c7",
            "stroke-width": 1.6
          },
          {
            "tag": "rect",
            "when": "stage.saltA",
            "x": 143,
            "y": 206,
            "width": 58,
            "height": 84,
            "rx": 4,
            "fill": "@ stage.react>=2 ? '#f2f4f7' : 'url(#gBlue)'",
            "opacity": 0.9
          },
          {
            "tag": "g",
            "when": "stage.react>0",
            "children": [
              {
                "tag": "path",
                "d": "M143 268 Q156 256 172 264 Q188 254 201 268 L201 286 Q201 290 197 290 L147 290 Q143 290 143 286 Z",
                "fill": "#1976d2",
                "opacity": 0.95
              },
              {
                "tag": "rect",
                "x": 143,
                "y": "@ 268 - 30*stage.react/3",
                "width": 58,
                "height": "@ 30*stage.react/3",
                "rx": 3,
                "fill": "#1565c0",
                "opacity": 0.95
              },
              {
                "tag": "text",
                "when": "stage.react>=2",
                "x": 172,
                "y": 236,
                "font-size": 10.5,
                "text-anchor": "middle",
                "fill": "#0d47a1",
                "font-weight": 700,
                "text": "蓝色絮状"
              }
            ]
          },
          {
            "tag": "text",
            "x": 172,
            "y": 330,
            "font-size": 11,
            "text-anchor": "middle",
            "fill": "#455a64",
            "font-weight": 700,
            "text": "CuSO₄ + NaOH"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.tubesOn",
        "children": [
          {
            "tag": "path",
            "d": "M250 152 L250 276 Q250 292 266 292 L298 292 Q314 292 314 276 L314 152 Z",
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.2
          },
          {
            "tag": "rect",
            "x": 246,
            "y": 144,
            "width": 72,
            "height": 10,
            "rx": 4,
            "fill": "url(#gGlassH)",
            "stroke": "#7ba7c7",
            "stroke-width": 1.6
          },
          {
            "tag": "rect",
            "when": "stage.saltB",
            "x": 253,
            "y": 206,
            "width": 58,
            "height": 84,
            "rx": 4,
            "fill": "@ stage.react>=2 ? '#f6f2ee' : 'url(#gBrown)'",
            "opacity": 0.9
          },
          {
            "tag": "g",
            "when": "stage.react>0",
            "children": [
              {
                "tag": "path",
                "d": "M253 268 Q266 256 282 264 Q298 254 311 268 L311 286 Q311 290 307 290 L257 290 Q253 290 253 286 Z",
                "fill": "#8d4e1e",
                "opacity": 0.95
              },
              {
                "tag": "rect",
                "x": 253,
                "y": "@ 268 - 30*stage.react/3",
                "width": 58,
                "height": "@ 30*stage.react/3",
                "rx": 3,
                "fill": "#7b3f13",
                "opacity": 0.95
              },
              {
                "tag": "text",
                "when": "stage.react>=2",
                "x": 282,
                "y": 236,
                "font-size": 10.5,
                "text-anchor": "middle",
                "fill": "#bf360c",
                "font-weight": 700,
                "text": "红褐色"
              }
            ]
          },
          {
            "tag": "text",
            "x": 282,
            "y": 330,
            "font-size": 11,
            "text-anchor": "middle",
            "fill": "#455a64",
            "font-weight": 700,
            "text": "FeCl₃ + NaOH"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.tubesOn",
        "children": [
          {
            "tag": "path",
            "d": "M408 152 L408 276 Q408 292 424 292 L456 292 Q472 292 472 276 L472 152 Z",
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.2
          },
          {
            "tag": "rect",
            "x": 404,
            "y": 144,
            "width": 72,
            "height": 10,
            "rx": 4,
            "fill": "url(#gGlassH)",
            "stroke": "#7ba7c7",
            "stroke-width": 1.6
          },
          {
            "tag": "rect",
            "when": "stage.saltC",
            "x": 411,
            "y": 206,
            "width": 58,
            "height": 84,
            "rx": 4,
            "fill": "@ stage.react>=1 ? '#f0f2f4' : '#fafafa'",
            "opacity": 0.92
          },
          {
            "tag": "g",
            "when": "stage.react>0",
            "children": [
              {
                "tag": "path",
                "d": "M411 268 Q424 256 440 264 Q456 254 469 268 L469 286 Q469 290 465 290 L415 290 Q411 290 411 286 Z",
                "fill": "#ffffff",
                "stroke": "#e0e0e0",
                "stroke-width": 1.2,
                "opacity": 0.98
              },
              {
                "tag": "rect",
                "x": 411,
                "y": "@ 268 - 32*stage.react/3",
                "width": 58,
                "height": "@ 32*stage.react/3",
                "rx": 3,
                "fill": "#ffffff",
                "opacity": 0.98
              },
              {
                "tag": "text",
                "when": "stage.react>=2",
                "x": 440,
                "y": 236,
                "font-size": 10.5,
                "text-anchor": "middle",
                "fill": "#37474f",
                "font-weight": 700,
                "text": "白色沉淀"
              }
            ]
          },
          {
            "tag": "text",
            "x": 440,
            "y": 330,
            "font-size": 11,
            "text-anchor": "middle",
            "fill": "#455a64",
            "font-weight": 700,
            "text": "Na₂CO₃ + Ca(OH)₂"
          }
        ]
      },
      {
        "tag": "text",
        "when": "stage.wrongAcid",
        "x": 300,
        "y": 112,
        "font-size": 11.5,
        "text-anchor": "middle",
        "fill": "#dc2626",
        "font-weight": 700,
        "text": "加酸会把已经生成的沉淀又溶解掉，这一步要加的是碱"
      },
      {
        "tag": "text",
        "when": "stage.naohIn && stage.limeIn && stage.react===0",
        "x": 300,
        "y": 112,
        "font-size": 11.5,
        "text-anchor": "middle",
        "fill": "#0277bd",
        "font-weight": 700,
        "text": "静置一会儿，观察沉淀的生成"
      }
    ],
    "report": [
      {
        "title": "实验记录",
        "lines": [
          "① CuSO₄ + 2NaOH = Cu(OH)₂↓ + Na₂SO₄   蓝色絮状沉淀",
          "② FeCl₃ + 3NaOH = Fe(OH)₃↓ + 3NaCl    红褐色沉淀",
          "③ Na₂CO₃ + Ca(OH)₂ = CaCO₃↓ + 2NaOH   白色沉淀",
          "操作：分别取三种盐溶液于试管中，再滴加对应的碱溶液，静置观察"
        ]
      },
      {
        "title": "现象记录",
        "lines": [
          "1. 硫酸铜溶液中滴加氢氧化钠，产生蓝色絮状沉淀，上层溶液蓝色变浅",
          "2. 氯化铁溶液中滴加氢氧化钠，产生红褐色沉淀，溶液棕黄色变浅",
          "3. 碳酸钠溶液中滴加澄清石灰水，产生白色沉淀"
        ]
      },
      {
        "title": "实验结论",
        "lines": [
          "碱与盐反应生成新碱和新盐，属于复分解反应（双交换、价不变）。",
          "复分解反应发生的条件是：生成物中有沉淀、气体或水（难电离物质）。",
          "Cu(OH)₂ 蓝色、Fe(OH)₃ 红褐色、CaCO₃ 白色，是中考常考的特征沉淀颜色。"
        ]
      }
    ],
    "errorTable": [
      {
        "op": "把三种溶液倒在同一支试管里",
        "phen": "沉淀混合",
        "result": "无法分辨各自的沉淀颜色",
        "score": 14
      },
      {
        "op": "向第三支试管加NaOH而不是石灰水",
        "phen": "Na₂CO₃与NaOH不反应",
        "result": "看不到白色沉淀",
        "score": 16
      },
      {
        "op": "把红褐色沉淀误记为黑色",
        "phen": "Fe(OH)₃是红褐色",
        "result": "颜色错位，推断错误",
        "score": 14
      },
      {
        "op": "认为Cu(OH)₂是蓝色溶液",
        "phen": "沉淀与溶液要分清",
        "result": "应是蓝色絮状沉淀",
        "score": 14
      },
      {
        "op": "加稀盐酸代替碱溶液",
        "phen": "酸会溶解沉淀",
        "result": "沉淀不出现甚至被溶解",
        "score": 16
      },
      {
        "op": "以为所有反应都能发生",
        "phen": "要满足生成沉淀/气体/水",
        "result": "复分解不一定发生",
        "score": 14
      }
    ],
    "steps": [
      {
        "id": "cover",
        "type": "cover",
        "title": "准备开始",
        "progress": 0,
        "headline": "碱与盐的沉淀反应",
        "subtitle": "蓝、红褐、白——三支试管三种颜色",
        "buttons": [
          {
            "t": "开始实验",
            "c": "primary",
            "goto": "goal"
          }
        ]
      },
      {
        "id": "goal",
        "type": "doc",
        "title": "实验目标",
        "progress": 6,
        "cols": [
          {
            "title": "实验目标",
            "lines": [
              "1. 记住三种特征沉淀：Cu(OH)₂ 蓝色、Fe(OH)₃ 红褐色、CaCO₃ 白色",
              "2. 认识复分解反应：碱 + 盐 → 新碱 + 新盐",
              "3. 归纳复分解反应发生的条件",
              "4. 会写三个化学方程式（注意配平与沉淀符号）",
              "5. 体会「双交换、价不变」的写法规律"
            ]
          },
          {
            "title": "操作方式",
            "lines": [
              "● 拖拽试剂到对应试管的高亮区域",
              "● 遇到思考题时点选项作答",
              "● 右侧显示当前实验阶段",
              "● 卡住时点右下角“？”获取提示"
            ]
          },
          {
            "title": "安全提示",
            "lines": [
              "⚠ 氢氧化钠、氢氧化钙溶液都有腐蚀性",
              "⚠ 氯化铁溶液有腐蚀性且会染色，注意别滴到衣物上",
              "⚠ 滴管要专管专用，避免试剂交叉污染",
              "⚠ 废液倒入指定容器，不要直接倒进水池"
            ]
          }
        ],
        "buttons": [
          {
            "t": "下一步",
            "c": "primary",
            "goto": "equip"
          },
          {
            "t": "返回封面",
            "c": "ghost",
            "goto": "cover"
          }
        ]
      },
      {
        "id": "equip",
        "type": "equip",
        "title": "选择实验器材",
        "progress": 12,
        "tip": "三种盐溶液 + 两种碱溶液（注意第三支要用含钙离子的碱），还要能一滴一滴加",
        "buttons": [
          {
            "t": "确认器材",
            "c": "primary",
            "do": [
              {
                "do": "checkEquip",
                "key": "equip",
                "goto": "tubes"
              }
            ]
          }
        ]
      },
      {
        "id": "tubes",
        "type": "stage",
        "title": "排好三支试管",
        "progress": 18,
        "shelf": [
          "tube"
        ],
        "desc": "三种盐溶液要分开放，三个试管互不干扰。",
        "help": "把试管拖到桌面上的高亮区域。三支试管各自独立完成一个反应，这样沉淀颜色才看得清楚。",
        "zones": [
          "bench"
        ],
        "drop": [
          {
            "equip": "tube",
            "zone": "bench",
            "do": [
              {
                "do": "set",
                "k": "tubesOn",
                "v": true
              },
              {
                "do": "score",
                "key": "tubes"
              },
              {
                "do": "tip",
                "text": "三支试管已排好 ✓"
              },
              {
                "do": "goto",
                "id": "salts",
                "delay": 1100
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要准备好三支试管。"
              }
            ]
          }
        ]
      },
      {
        "id": "salts",
        "type": "stage",
        "title": "分别加入三种盐溶液",
        "progress": 28,
        "shelf": [
          "cuso4",
          "fecl3",
          "na2co3"
        ],
        "desc": "从左到右依次是硫酸铜（蓝）、氯化铁（棕黄）、碳酸钠（无色）。",
        "help": "把三种溶液分别拖到三支试管里。先记住它们各自的颜色：蓝色来自 Cu²⁺，棕黄色来自 Fe³⁺，碳酸钠溶液是无色的。",
        "zones": [
          "zoneA",
          "zoneB",
          "zoneC"
        ],
        "drop": [
          {
            "equip": "cuso4",
            "zone": "zoneA",
            "do": [
              {
                "do": "set",
                "k": "saltA",
                "v": true
              },
              {
                "do": "tip",
                "text": "蓝色硫酸铜溶液已加入 ✓"
              },
              {
                "do": "if",
                "cond": "stage.saltA && stage.saltB && stage.saltC",
                "then": [
                  {
                    "do": "score",
                    "key": "salts"
                  },
                  {
                    "do": "goto",
                    "id": "alkali",
                    "delay": 900
                  }
                ]
              }
            ]
          },
          {
            "equip": "fecl3",
            "zone": "zoneB",
            "do": [
              {
                "do": "set",
                "k": "saltB",
                "v": true
              },
              {
                "do": "tip",
                "text": "棕黄色氯化铁溶液已加入 ✓"
              },
              {
                "do": "if",
                "cond": "stage.saltA && stage.saltB && stage.saltC",
                "then": [
                  {
                    "do": "score",
                    "key": "salts"
                  },
                  {
                    "do": "goto",
                    "id": "alkali",
                    "delay": 900
                  }
                ]
              }
            ]
          },
          {
            "equip": "na2co3",
            "zone": "zoneC",
            "do": [
              {
                "do": "set",
                "k": "saltC",
                "v": true
              },
              {
                "do": "tip",
                "text": "碳酸钠溶液已加入 ✓"
              },
              {
                "do": "if",
                "cond": "stage.saltA && stage.saltB && stage.saltC",
                "then": [
                  {
                    "do": "score",
                    "key": "salts"
                  },
                  {
                    "do": "goto",
                    "id": "alkali",
                    "delay": 900
                  }
                ]
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要加入的是三种盐溶液，注意各自对应的试管。"
              }
            ]
          }
        ]
      },
      {
        "id": "alkali",
        "type": "stage",
        "title": "分别加入对应的碱",
        "progress": 42,
        "shelf": [
          "naoh",
          "limewater"
        ],
        "desc": "前两支试管加氢氧化钠溶液，第三支要加澄清石灰水（提供钙离子）。",
        "help": "把氢氧化钠溶液拖到左边两支试管区域，把澄清石灰水拖到最右边那支。第三支要生成碳酸钙，必须提供 Ca²⁺。",
        "zones": [
          "zoneAB",
          "zoneC"
        ],
        "drop": [
          {
            "equip": "naoh",
            "zone": "zoneAB",
            "do": [
              {
                "do": "set",
                "k": "naohIn",
                "v": true
              },
              {
                "do": "tip",
                "text": "已向左两支试管加入 NaOH 溶液 ✓"
              },
              {
                "do": "if",
                "cond": "stage.limeIn",
                "then": [
                  {
                    "do": "score",
                    "key": "alkali"
                  },
                  {
                    "do": "set",
                    "k": "react",
                    "v": 1,
                    "delay": 700
                  },
                  {
                    "do": "set",
                    "k": "react",
                    "v": 2,
                    "delay": 1500
                  },
                  {
                    "do": "set",
                    "k": "react",
                    "v": 3,
                    "delay": 2400
                  },
                  {
                    "do": "goto",
                    "id": "observe",
                    "delay": 3000
                  }
                ]
              }
            ]
          },
          {
            "equip": "limewater",
            "zone": "zoneC",
            "do": [
              {
                "do": "set",
                "k": "limeIn",
                "v": true
              },
              {
                "do": "tip",
                "text": "已向第三支试管加入澄清石灰水 ✓"
              },
              {
                "do": "if",
                "cond": "stage.naohIn",
                "then": [
                  {
                    "do": "score",
                    "key": "alkali"
                  },
                  {
                    "do": "set",
                    "k": "react",
                    "v": 1,
                    "delay": 700
                  },
                  {
                    "do": "set",
                    "k": "react",
                    "v": 2,
                    "delay": 1500
                  },
                  {
                    "do": "set",
                    "k": "react",
                    "v": 3,
                    "delay": 2400
                  },
                  {
                    "do": "goto",
                    "id": "observe",
                    "delay": 3000
                  }
                ]
              }
            ]
          },
          {
            "equip": "limewater",
            "zone": "zoneAB",
            "do": [
              {
                "do": "err",
                "text": "石灰水是用来提供 Ca²⁺ 的，请加到最右边那支装有碳酸钠的试管里。"
              }
            ]
          },
          {
            "equip": "acid",
            "zone": "zoneAB",
            "do": [
              {
                "do": "set",
                "k": "wrongAcid",
                "v": true
              },
              {
                "do": "err",
                "text": "酸会把已经生成的氢氧化物沉淀溶解掉。这一步要加的是碱溶液。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要加入的是碱溶液。"
              }
            ]
          }
        ]
      },
      {
        "id": "observe",
        "type": "doc",
        "title": "三支试管各是什么颜色？",
        "progress": 56,
        "cols": [
          {
            "title": "观察结果",
            "lines": [
              "第一支：产生蓝色絮状沉淀",
              "第二支：产生红褐色沉淀",
              "第三支：产生白色沉淀",
              "上层溶液的颜色都比原来变浅了"
            ]
          },
          {
            "title": "想一想",
            "lines": [
              "为什么上层溶液会变浅？",
              "因为 Cu²⁺、Fe³⁺ 等离子进入沉淀被「带走」了，",
              "留在溶液里的已经不是原来的那种离子。"
            ]
          }
        ],
        "buttons": [
          {
            "t": "蓝色絮状 / 红褐色 / 白色",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "observe"
              },
              {
                "do": "tip",
                "text": "颜色全部对上了 ✓ 这是最常考的一组沉淀颜色"
              },
              {
                "do": "goto",
                "id": "judge",
                "delay": 1500
              }
            ]
          },
          {
            "t": "蓝色 / 黑色 / 白色",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "第二支是红褐色不是黑色。Fe(OH)₃ 是红褐色，Fe₃O₄ 和铁粉才是黑色。"
              }
            ]
          },
          {
            "t": "浅绿色 / 红褐色 / 无色透明",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "第一支沉淀是蓝色的（注意完全沉淀后上层液体也会变浅）；第三支明显有白色沉淀。"
              }
            ]
          }
        ]
      },
      {
        "id": "judge",
        "type": "doc",
        "title": "沉淀各是什么物质？",
        "progress": 68,
        "cols": [
          {
            "title": "反应①",
            "lines": [
              "CuSO₄ + 2NaOH = Cu(OH)₂↓ + Na₂SO₄",
              "交换离子：Cu²⁺ 与 OH⁻ 结合成沉淀"
            ]
          },
          {
            "title": "反应②③",
            "lines": [
              "FeCl₃ + 3NaOH = Fe(OH)₃↓ + 3NaCl",
              "Na₂CO₃ + Ca(OH)₂ = CaCO₃↓ + 2NaOH",
              "规律：互相交换成分，化合价不变"
            ]
          }
        ],
        "buttons": [
          {
            "t": "Cu(OH)₂ / Fe(OH)₃ / CaCO₃",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "judge"
              },
              {
                "do": "tip",
                "text": "正确 ✓ 三个沉淀对应的正是这三种难溶物"
              },
              {
                "do": "goto",
                "id": "rule",
                "delay": 1500
              }
            ]
          },
          {
            "t": "CuO / Fe₂O₃ / CaO",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "这三个是氧化物，不是氢氧化物沉淀。复分解反应中元素化合价不变，生成的是碱或盐。"
              }
            ]
          },
          {
            "t": "CuCO₃ / FeCO₃ / Ca(OH)₂",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "前两支加的是 NaOH，带来的是 OH⁻；第三支生成的沉淀才是含碳酸根的。"
              }
            ]
          }
        ]
      },
      {
        "id": "rule",
        "type": "doc",
        "title": "复分解反应什么时候能发生？",
        "progress": 80,
        "cols": [
          {
            "title": "发生条件",
            "lines": [
              "两种化合物互相交换成分，",
              "生成物中至少有一样满足：",
              "① 有沉淀生成",
              "② 有气体放出",
              "③ 有水（难电离物质）生成"
            ]
          },
          {
            "title": "举例对比",
            "lines": [
              "能发生：Na₂CO₃ + Ca(OH)₂ → CaCO₃↓",
              "能发生：NaOH + HCl → H₂O",
              "能发生：Na₂CO₃ + 2HCl → CO₂↑",
              "不能发生：NaOH + KCl → 什么都没有"
            ]
          }
        ],
        "buttons": [
          {
            "t": "生成物要有沉淀、气体或水",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "rule"
              },
              {
                "do": "tip",
                "text": "这是判断复分解能否发生的核心依据 ✓"
              },
              {
                "do": "goto",
                "id": "summary",
                "delay": 1500
              }
            ]
          },
          {
            "t": "只要两种化合物混合就行",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "如果混合后还是那些离子自由移动，等于什么都没发生。必须有沉淀、气体或水生成才算。"
              }
            ]
          },
          {
            "t": "只要生成物里有盐就行",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "NaOH + KCl 交换后同样得到盐，但它在水中完全电离、全都溶着，反应并不会发生。"
              }
            ]
          }
        ]
      },
      {
        "id": "summary",
        "type": "doc",
        "title": "把方程式写全",
        "progress": 90,
        "cols": [
          {
            "title": "第一支",
            "lines": [
              "CuSO₄ + 2NaOH = Na₂SO₄ + Cu(OH)₂↓",
              "注意配平：Cu²⁺ 需要 2 个 OH⁻",
              "沉淀符号不能漏"
            ]
          },
          {
            "title": "第二、三支",
            "lines": [
              "FeCl₃ + 3NaOH = 3NaCl + Fe(OH)₃↓",
              "Na₂CO₃ + Ca(OH)₂ = 2NaOH + CaCO₃↓",
              "口诀：双交换，价不变"
            ]
          }
        ],
        "buttons": [
          {
            "t": "CuSO₄+2NaOH=Na₂SO₄+Cu(OH)₂↓",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "summary"
              },
              {
                "do": "tip",
                "text": "写对了 ✓ 其余两个同理：FeCl₃+3NaOH、Na₂CO₃+Ca(OH)₂"
              },
              {
                "do": "goto",
                "id": "report",
                "delay": 1600
              }
            ]
          },
          {
            "t": "CuSO₄+NaOH=Na₂SO₄+CuOH↓",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "化学式 CuOH 不对，铜是 +2 价，需要 2 个 OH⁻，所以要写成 Cu(OH)₂ 且 NaOH 前配 2。"
              }
            ]
          },
          {
            "t": "CuSO₄+2NaOH=Cu(OH)₂↓+Na₂SO₄↑",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "↑ 标错了对象：气体符号给 CO₂，沉淀符号给 Cu(OH)₂，硫酸钠是溶解的盐，什么符号都不加。"
              }
            ]
          }
        ]
      },
      {
        "id": "report",
        "type": "report",
        "title": "实验报告",
        "progress": 95,
        "buttons": [
          {
            "t": "提交报告",
            "c": "primary",
            "do": [
              {
                "do": "finish"
              },
              {
                "do": "goto",
                "id": "score"
              }
            ]
          }
        ]
      },
      {
        "id": "score",
        "type": "score",
        "title": "实验评分",
        "progress": 100,
        "buttons": [
          {
            "t": "导出本次成绩",
            "c": "ghost",
            "do": [
              {
                "do": "export"
              }
            ]
          },
          {
            "t": "查看常见错误",
            "c": "ghost",
            "goto": "errtable"
          },
          {
            "t": "重做实验",
            "c": "primary",
            "do": [
              {
                "do": "reset"
              }
            ]
          }
        ]
      },
      {
        "id": "errtable",
        "type": "errors",
        "title": "常见错误与后果",
        "progress": 100,
        "buttons": [
          {
            "t": "返回评分",
            "c": "ghost",
            "goto": "score"
          },
          {
            "t": "重做实验",
            "c": "primary",
            "do": [
              {
                "do": "reset"
              }
            ]
          }
        ]
      }
    ]
  },
  "exp_cuso4water": {
    "id": "cuso4water",
    "title": "无水硫酸铜检验水",
    "subtitle": "初中化学虚拟实验 · 白色粉末遇水变蓝",
    "badges": [
      "白色 → 蓝色",
      "对照实验",
      "满分 100 分"
    ],
    "viewBox": "0 0 600 360",
    "equipments": [
      {
        "id": "tube",
        "name": "试管（2支）",
        "need": true
      },
      {
        "id": "cuso4a",
        "name": "无水硫酸铜粉末",
        "need": true
      },
      {
        "id": "water2",
        "name": "蒸馏水",
        "need": true
      },
      {
        "id": "alcohol",
        "name": "无水乙醇",
        "need": true
      },
      {
        "id": "spoon",
        "name": "药匙",
        "need": true
      },
      {
        "id": "dropper",
        "name": "胶头滴管",
        "need": true
      },
      {
        "id": "cuso4",
        "name": "硫酸铜溶液",
        "need": false
      },
      {
        "id": "acid",
        "name": "稀盐酸",
        "need": false
      }
    ],
    "dims": [
      {
        "key": "skill",
        "name": "操作规范"
      },
      {
        "key": "safety",
        "name": "安全意识"
      }
    ],
    "scoreItems": [
      {
        "key": "equip",
        "name": "器材选择",
        "max": 10,
        "dim": "skill"
      },
      {
        "key": "tube",
        "name": "准备两支试管",
        "max": 8,
        "dim": "skill"
      },
      {
        "key": "powder",
        "name": "各取白色粉末",
        "max": 12,
        "dim": "skill"
      },
      {
        "key": "water",
        "name": "向第一支加水",
        "max": 14,
        "dim": "skill"
      },
      {
        "key": "alcohol",
        "name": "向第二支加无水乙醇",
        "max": 12,
        "dim": "skill"
      },
      {
        "key": "observe",
        "name": "描述并解释现象",
        "max": 14,
        "dim": "skill"
      },
      {
        "key": "judge",
        "name": "判断产物与用途",
        "max": 16,
        "dim": "skill"
      },
      {
        "key": "summary",
        "name": "归纳检验水的思路",
        "max": 14,
        "dim": "skill"
      }
    ],
    "initialStage": {
      "tubeOn": false,
      "powderIn": false,
      "waterIn": false,
      "blue": 0,
      "alcoholIn": false,
      "stillWhite": false,
      "wrongSoln": false
    },
    "dropZones": {
      "bench": {
        "x": 130,
        "y": 210,
        "w": 340,
        "h": 112
      },
      "powderZn": {
        "x": 138,
        "y": 196,
        "w": 324,
        "h": 116
      },
      "zoneA": {
        "x": 150,
        "y": 126,
        "w": 106,
        "h": 192
      },
      "zoneB": {
        "x": 346,
        "y": 126,
        "w": 106,
        "h": 192
      }
    },
    "scene": [
      {
        "tag": "rect",
        "x": 30,
        "y": 322,
        "width": 540,
        "height": 14,
        "rx": 5,
        "fill": "url(#gMetal)"
      },
      {
        "tag": "rect",
        "x": 30,
        "y": 322,
        "width": 540,
        "height": 4,
        "rx": 2,
        "fill": "#e8eef2",
        "opacity": 0.75
      },
      {
        "tag": "g",
        "when": "stage.tubeOn",
        "children": [
          {
            "tag": "rect",
            "x": 138,
            "y": 292,
            "width": 324,
            "height": 12,
            "rx": 4,
            "fill": "url(#gMetal)"
          },
          {
            "tag": "rect",
            "x": 148,
            "y": 296,
            "width": 10,
            "height": 22,
            "fill": "url(#gMetalV)"
          },
          {
            "tag": "rect",
            "x": 442,
            "y": 296,
            "width": 10,
            "height": 22,
            "fill": "url(#gMetalV)"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.tubeOn",
        "children": [
          {
            "tag": "path",
            "d": "M172 152 L172 278 Q172 292 186 292 L218 292 Q232 292 232 278 L232 152 Z",
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.2
          },
          {
            "tag": "rect",
            "x": 168,
            "y": 144,
            "width": 68,
            "height": 10,
            "rx": 4,
            "fill": "url(#gGlassH)",
            "stroke": "#7ba7c7",
            "stroke-width": 1.6
          },
          {
            "tag": "path",
            "d": "M182 168 L182 280",
            "stroke": "#ffffff",
            "stroke-width": 2.2,
            "opacity": 0.8,
            "fill": "none"
          },
          {
            "tag": "g",
            "when": "stage.powderIn",
            "children": [
              {
                "tag": "path",
                "d": "M175 272 Q190 258 202 268 Q216 256 229 272 L229 284 Q229 290 223 290 L181 290 Q175 290 175 284 Z",
                "fill": "@ stage.blue>=3 ? '#1565c0' : (stage.blue>=2 ? '#5b9bd5' : (stage.blue>=1 ? '#a8cdf0' : '#ffffff'))"
              },
              {
                "tag": "circle",
                "cx": 188,
                "cy": 262,
                "r": 4.5,
                "fill": "@ stage.blue>=2 ? '#1976d2' : '#fafafa'",
                "stroke": "#e0e0e0",
                "stroke-width": 1
              },
              {
                "tag": "circle",
                "cx": 214,
                "cy": 265,
                "r": 4,
                "fill": "@ stage.blue>=2 ? '#1976d2' : '#fafafa'",
                "stroke": "#e0e0e0",
                "stroke-width": 1
              }
            ]
          },
          {
            "tag": "rect",
            "when": "stage.waterIn",
            "x": 175,
            "y": "@ 262 - 36*stage.blue/3",
            "width": 58,
            "height": "@ 36*stage.blue/3",
            "rx": 3,
            "fill": "@ stage.blue>=3 ? '#1565c0' : (stage.blue>=2 ? '#5b9bd5' : '#a8cdf0')",
            "opacity": 0.6
          },
          {
            "tag": "text",
            "when": "stage.powderIn && stage.blue===0",
            "x": 202,
            "y": 246,
            "font-size": 10.5,
            "text-anchor": "middle",
            "fill": "#455a64",
            "text": "白色粉末"
          },
          {
            "tag": "text",
            "when": "stage.blue>=3",
            "x": 202,
            "y": 232,
            "font-size": 10.5,
            "text-anchor": "middle",
            "fill": "#0d47a1",
            "font-weight": 700,
            "text": "变成蓝色！"
          },
          {
            "tag": "text",
            "x": 202,
            "y": 330,
            "font-size": 11.5,
            "text-anchor": "middle",
            "fill": "#455a64",
            "font-weight": 700,
            "text": "实验组：加水"
          }
        ]
      },
      {
        "tag": "g",
        "when": "stage.tubeOn",
        "children": [
          {
            "tag": "path",
            "d": "M368 152 L368 278 Q368 292 382 292 L414 292 Q428 292 428 278 L428 152 Z",
            "fill": "url(#gGlass)",
            "stroke": "#7ba7c7",
            "stroke-width": 2.2
          },
          {
            "tag": "rect",
            "x": 364,
            "y": 144,
            "width": 68,
            "height": 10,
            "rx": 4,
            "fill": "url(#gGlassH)",
            "stroke": "#7ba7c7",
            "stroke-width": 1.6
          },
          {
            "tag": "path",
            "d": "M378 168 L378 280",
            "stroke": "#ffffff",
            "stroke-width": 2.2,
            "opacity": 0.8,
            "fill": "none"
          },
          {
            "tag": "g",
            "when": "stage.powderIn",
            "children": [
              {
                "tag": "path",
                "d": "M371 272 Q386 258 398 268 Q412 256 425 272 L425 284 Q425 290 419 290 L377 290 Q371 290 371 284 Z",
                "fill": "#ffffff"
              },
              {
                "tag": "circle",
                "cx": 384,
                "cy": 262,
                "r": 4.5,
                "fill": "#fafafa",
                "stroke": "#e0e0e0",
                "stroke-width": 1
              },
              {
                "tag": "circle",
                "cx": 410,
                "cy": 265,
                "r": 4,
                "fill": "#fafafa",
                "stroke": "#e0e0e0",
                "stroke-width": 1
              }
            ]
          },
          {
            "tag": "rect",
            "when": "stage.alcoholIn",
            "x": 371,
            "y": 240,
            "width": 58,
            "height": 48,
            "rx": 3,
            "fill": "#f1ecf9",
            "opacity": 0.8
          },
          {
            "tag": "text",
            "when": "stage.stillWhite",
            "x": 398,
            "y": 246,
            "font-size": 10.5,
            "text-anchor": "middle",
            "fill": "#6a1b9a",
            "font-weight": 700,
            "text": "仍然白色"
          },
          {
            "tag": "text",
            "x": 398,
            "y": 330,
            "font-size": 11.5,
            "text-anchor": "middle",
            "fill": "#455a64",
            "font-weight": 700,
            "text": "对照组：加无水乙醇"
          }
        ]
      },
      {
        "tag": "text",
        "when": "stage.wrongSoln",
        "x": 300,
        "y": 116,
        "font-size": 11.5,
        "text-anchor": "middle",
        "fill": "#dc2626",
        "font-weight": 700,
        "text": "硫酸铜溶液本身就是蓝色的，看不出变化，无法作检验用"
      },
      {
        "tag": "text",
        "when": "stage.waterIn && stage.alcoholIn",
        "x": 300,
        "y": 116,
        "font-size": 11.5,
        "text-anchor": "middle",
        "fill": "#0277bd",
        "font-weight": 700,
        "text": "对比：只有含水的那一支变蓝"
      }
    ],
    "report": [
      {
        "title": "实验记录",
        "lines": [
          "实验名称：无水硫酸铜检验水的存在",
          "反应原理：CuSO₄（白） + 5H₂O = CuSO₄·5H₂O（蓝）",
          "操作：两支试管各取少量无水硫酸铜白色粉末，一支加水，另一支加无水乙醇作对照",
          "用途：检验某液体中是否含有水；也可放在干燥器中指示是否受潮"
        ]
      },
      {
        "title": "现象记录",
        "lines": [
          "1. 无水硫酸铜是白色粉末",
          "2. 加水后白色粉末迅速变成蓝色，溶液也呈蓝色",
          "3. 加无水乙醇的那一支始终保持白色，没有变化"
        ]
      },
      {
        "title": "实验结论",
        "lines": [
          "无水硫酸铜能与水结合生成蓝色的五水合硫酸铜，颜色变化非常明显。",
          "这个变化是水特有的，乙醇等不含水的液体不能使其变蓝。",
          "因此无水硫酸铜常用于检验水的存在，也可判断干燥剂是否失效。"
        ]
      }
    ],
    "errorTable": [
      {
        "op": "用硫酸铜溶液代替无水硫酸铜",
        "phen": "本身就是蓝色",
        "result": "没有颜色变化，无法检验",
        "score": 14
      },
      {
        "op": "只做加水不做对照组",
        "phen": "缺少对比",
        "result": "不能说明变化是水引起的",
        "score": 12
      },
      {
        "op": "取太多白色粉末",
        "phen": "药品浪费",
        "result": "现象反而不容易看清",
        "score": 12
      },
      {
        "op": "把变蓝说成潮解或变质",
        "phen": "概念混淆",
        "result": "应表述为与水结合生成结晶水合物",
        "score": 16
      },
      {
        "op": "误加稀盐酸",
        "phen": "酸中含大量水",
        "result": "同样变蓝，失去对照意义",
        "score": 14
      },
      {
        "op": "直接用手抓粉末",
        "phen": "药品受污染且伤皮肤",
        "result": "要用洁净药匙取用",
        "score": 12
      }
    ],
    "steps": [
      {
        "id": "cover",
        "type": "cover",
        "title": "准备开始",
        "progress": 0,
        "headline": "无水硫酸铜检验水",
        "subtitle": "一撮白粉，滴上一滴水就变蓝 —— 这是水的专属信号",
        "buttons": [
          {
            "t": "开始实验",
            "c": "primary",
            "goto": "goal"
          }
        ]
      },
      {
        "id": "goal",
        "type": "doc",
        "title": "实验目标",
        "progress": 6,
        "cols": [
          {
            "title": "实验目标",
            "lines": [
              "1. 知道无水硫酸铜是白色粉末，遇水变蓝",
              "2. 掌握用它检验某物质中是否含水的方法",
              "3. 通过设置对照组排除「液体本身导致变蓝」",
              "4. 认识结晶水合物 CuSO₄·5H₂O（胆矾）",
              "5. 记住CuSO₄+5H₂O=CuSO₄·5H₂O 属于化合反应"
            ]
          },
          {
            "title": "操作方式",
            "lines": [
              "● 拖拽药品到试管的高亮区域",
              "● 遇到思考题时点选项作答",
              "● 右侧显示当前实验阶段",
              "● 卡住时点右下角“？”获取提示"
            ]
          },
          {
            "title": "安全提示",
            "lines": [
              "⚠ 硫酸铜有毒，绝对不能入口",
              "⚠ 取用粉末要用洁净药匙，不要用手直接接触",
              "⚠ 无水乙醇易燃，使用时远离明火",
              "⚠ 药品取用量要少，铺满试管底部一小层即可"
            ]
          }
        ],
        "buttons": [
          {
            "t": "下一步",
            "c": "primary",
            "goto": "equip"
          },
          {
            "t": "返回封面",
            "c": "ghost",
            "goto": "cover"
          }
        ]
      },
      {
        "id": "equip",
        "type": "equip",
        "title": "选择实验器材",
        "progress": 12,
        "tip": "要用的是白色粉末而不是蓝色溶液，还得有一种「看起来像水但不是水」的液体来做对照",
        "buttons": [
          {
            "t": "确认器材",
            "c": "primary",
            "do": [
              {
                "do": "checkEquip",
                "key": "equip",
                "goto": "tubeStep"
              }
            ]
          }
        ]
      },
      {
        "id": "tubeStep",
        "type": "stage",
        "title": "准备两支试管",
        "progress": 18,
        "shelf": [
          "tube"
        ],
        "desc": "一支做实验组，另一支做对照组。只有两相对照，才能说明是水在起作用。",
        "help": "把试管拖到桌面上的高亮区域。左边加水做实验组，右边加无水乙醇做对照组。",
        "zones": [
          "bench"
        ],
        "drop": [
          {
            "equip": "tube",
            "zone": "bench",
            "do": [
              {
                "do": "set",
                "k": "tubeOn",
                "v": true
              },
              {
                "do": "score",
                "key": "tube"
              },
              {
                "do": "tip",
                "text": "两支试管已放好 ✓"
              },
              {
                "do": "goto",
                "id": "powder",
                "delay": 1100
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要准备好两支试管。"
              }
            ]
          }
        ]
      },
      {
        "id": "powder",
        "type": "stage",
        "title": "各取少量白色粉末",
        "progress": 26,
        "shelf": [
          "cuso4a",
          "spoon"
        ],
        "desc": "用药匙取少量无水硫酸铜，分别放入两支试管，铺满底部薄薄一层即可。",
        "help": "把无水硫酸铜拖到试管区域。注意要取白色粉末状的无水硫酸铜，不是蓝色的硫酸铜溶液或晶体。",
        "zones": [
          "powderZn"
        ],
        "drop": [
          {
            "equip": "cuso4a",
            "zone": "powderZn",
            "do": [
              {
                "do": "set",
                "k": "powderIn",
                "v": true
              },
              {
                "do": "score",
                "key": "powder"
              },
              {
                "do": "tip",
                "text": "两支试管都放入了白色粉末 ✓ 记住它现在的颜色"
              },
              {
                "do": "goto",
                "id": "water",
                "delay": 1200
              }
            ]
          },
          {
            "equip": "cuso4",
            "zone": "powderZn",
            "do": [
              {
                "do": "set",
                "k": "wrongSoln",
                "v": true
              },
              {
                "do": "err",
                "text": "硫酸铜溶液本来就是蓝色的，加再多也看不出变化。要取的是白色粉末。"
              }
            ]
          },
          {
            "equip": "spoon",
            "zone": "powderZn",
            "do": [
              {
                "do": "err",
                "text": "药匙是用来取药品的工具，本身不是药品。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要取的是白色粉末状固体。"
              }
            ]
          }
        ]
      },
      {
        "id": "water",
        "type": "stage",
        "title": "向第一支加水",
        "progress": 38,
        "shelf": [
          "water2"
        ],
        "desc": "用滴管向左边试管滴加几滴水，观察白色粉末的变化。",
        "help": "把蒸馏水拖到左边试管。滴的时候不要加太多，几滴就足够让白色粉末显现变化。",
        "zones": [
          "zoneA"
        ],
        "drop": [
          {
            "equip": "water2",
            "zone": "zoneA",
            "do": [
              {
                "do": "set",
                "k": "waterIn",
                "v": true
              },
              {
                "do": "set",
                "k": "blue",
                "v": 1,
                "delay": 500
              },
              {
                "do": "set",
                "k": "blue",
                "v": 2,
                "delay": 1200
              },
              {
                "do": "set",
                "k": "blue",
                "v": 3,
                "delay": 1900
              },
              {
                "do": "score",
                "key": "water"
              },
              {
                "do": "tip",
                "text": "白色粉末变成蓝色了！CuSO₄ + 5H₂O = CuSO₄·5H₂O ✓"
              },
              {
                "do": "goto",
                "id": "alcohol",
                "delay": 2600
              }
            ]
          },
          {
            "equip": "acid",
            "zone": "zoneA",
            "do": [
              {
                "do": "err",
                "text": "稀盐酸里含有大量水，会让它变蓝，但这样就分不清到底是酸还是水的作用了。这一步要用蒸馏水。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要加入的是水。"
              }
            ]
          }
        ]
      },
      {
        "id": "alcohol",
        "type": "stage",
        "title": "向第二支加无水乙醇",
        "progress": 50,
        "shelf": [
          "alcohol"
        ],
        "desc": "给右边试管加入同样几滴无水乙醇，作为对照。",
        "help": "把无水乙醇拖到右边试管。它也是一种无色液体，如果白粉不变蓝，就说明变蓝是水特有的现象。",
        "zones": [
          "zoneB"
        ],
        "drop": [
          {
            "equip": "alcohol",
            "zone": "zoneB",
            "do": [
              {
                "do": "set",
                "k": "alcoholIn",
                "v": true
              },
              {
                "do": "set",
                "k": "stillWhite",
                "v": true,
                "delay": 900
              },
              {
                "do": "score",
                "key": "alcohol"
              },
              {
                "do": "tip",
                "text": "对照组的白色粉末没有任何变化 ✓"
              },
              {
                "do": "goto",
                "id": "observe",
                "delay": 1600
              }
            ]
          },
          {
            "equip": "water2",
            "zone": "zoneB",
            "do": [
              {
                "do": "err",
                "text": "第二支要加无水乙醇做对照，加水就失去对照意义了。"
              }
            ]
          },
          {
            "do": [
              {
                "do": "err",
                "text": "这一步要加入不含水的无色液体作对照。"
              }
            ]
          }
        ]
      },
      {
        "id": "observe",
        "type": "doc",
        "title": "现象说明了什么？",
        "progress": 62,
        "cols": [
          {
            "title": "现象对比",
            "lines": [
              "加水的一支：白色粉末迅速变成蓝色",
              "加无水乙醇的一支：始终保持白色",
              "两者唯一的区别就是有没有水"
            ]
          },
          {
            "title": "结论",
            "lines": [
              "白色变蓝色，是水分子与硫酸铜结合的结果：",
              "CuSO₄ + 5H₂O = CuSO₄·5H₂O",
              "生成物叫五水合硫酸铜，俗称胆矾或蓝矾。"
            ]
          }
        ],
        "buttons": [
          {
            "t": "只有水才能使它变蓝，可用来检验水",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "observe"
              },
              {
                "do": "tip",
                "text": "正是这样 ✓ 对照组让这个结论变得可靠"
              },
              {
                "do": "goto",
                "id": "judge",
                "delay": 1500
              }
            ]
          },
          {
            "t": "任何无色液体都能使它变蓝",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "右边那支加了无水乙醇，完全没变色。所以变蓝是水独有的作用。"
              }
            ]
          },
          {
            "t": "白色粉末吸水潮解了",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "潮解是固体吸水后表面溶解形成溶液的现象。这里发生的是化学变化，生成了新的物质——蓝色的结晶水合物。"
              }
            ]
          }
        ]
      },
      {
        "id": "judge",
        "type": "doc",
        "title": "变蓝后的物质是什么？",
        "progress": 74,
        "cols": [
          {
            "title": "新物质",
            "lines": [
              "CuSO₄·5H₂O 五水合硫酸铜",
              "含有定量结合的结晶水，属于纯净物",
              "俗称胆矾、蓝矾，是蓝色晶体"
            ]
          },
          {
            "title": "反应类型",
            "lines": [
              "CuSO₄ + 5H₂O = CuSO₄·5H₂O",
              "多种物质生成一种物质 —— 化合反应",
              "结晶水合物中的水是结合进去的，不是简单混在一起"
            ]
          }
        ],
        "buttons": [
          {
            "t": "CuSO₄·5H₂O，属于化合反应生成的新物质",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "judge"
              },
              {
                "do": "tip",
                "text": "完全正确 ✓ 它和原来的白色粉末是两种不同的物质"
              },
              {
                "do": "goto",
                "id": "summary",
                "delay": 1500
              }
            ]
          },
          {
            "t": "只是硫酸铜被水溶解了",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "溶解得到的仍是 CuSO₄ 溶液；而这里水按 1:5 的比例结合进了晶体里，组成改变了，是化学变化。"
              }
            ]
          },
          {
            "t": "CuSO₄·H₂O",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "结晶水的数目是 5 而不是 1。胆矾的化学式要写成 CuSO₄·5H₂O。"
              }
            ]
          }
        ]
      },
      {
        "id": "summary",
        "type": "doc",
        "title": "检验水的通用思路",
        "progress": 86,
        "cols": [
          {
            "title": "检验方法",
            "lines": [
              "取少量待测液体（或气体）与白色无水硫酸铜接触，",
              "白色变蓝 → 其中含有水；",
              "始终保持白色 → 不含水。",
              "现象明显、操作简单，是初中最常用的检验方法之一。"
            ]
          },
          {
            "title": "常见用途",
            "lines": [
              "● 检验酒精中是否混有水",
              "● 判断干燥剂是否失效（放在干燥器里观察颜色）",
              "● 检验某反应是否有水生成（配合干燥装置）"
            ]
          }
        ],
        "buttons": [
          {
            "t": "取样 → 加无水CuSO₄ → 变蓝即含水",
            "c": "primary",
            "do": [
              {
                "do": "score",
                "key": "summary"
              },
              {
                "do": "tip",
                "text": "归纳得很清楚 ✓ 与之对应，检验水生成也可用白色的无水硫酸铜"
              },
              {
                "do": "goto",
                "id": "report",
                "delay": 1500
              }
            ]
          },
          {
            "t": "尝一下有没有味道就能判断",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "实验室的任何药品都严禁品尝，而且硫酸铜有毒。必须靠现象来判断。"
              }
            ]
          },
          {
            "t": "用天平称一下有没有增重",
            "c": "ghost",
            "do": [
              {
                "do": "err",
                "text": "增重确实说明吸收了东西，但分不清吸的是水还是别的。颜色变化才是又直观又专属的证据。"
              }
            ]
          }
        ]
      },
      {
        "id": "report",
        "type": "report",
        "title": "实验报告",
        "progress": 95,
        "buttons": [
          {
            "t": "提交报告",
            "c": "primary",
            "do": [
              {
                "do": "finish"
              },
              {
                "do": "goto",
                "id": "score"
              }
            ]
          }
        ]
      },
      {
        "id": "score",
        "type": "score",
        "title": "实验评分",
        "progress": 100,
        "buttons": [
          {
            "t": "导出本次成绩",
            "c": "ghost",
            "do": [
              {
                "do": "export"
              }
            ]
          },
          {
            "t": "查看常见错误",
            "c": "ghost",
            "goto": "errtable"
          },
          {
            "t": "重做实验",
            "c": "primary",
            "do": [
              {
                "do": "reset"
              }
            ]
          }
        ]
      },
      {
        "id": "errtable",
        "type": "errors",
        "title": "常见错误与后果",
        "progress": 100,
        "buttons": [
          {
            "t": "返回评分",
            "c": "ghost",
            "goto": "score"
          },
          {
            "t": "重做实验",
            "c": "primary",
            "do": [
              {
                "do": "reset"
              }
            ]
          }
        ]
      }
    ]
  }
};
