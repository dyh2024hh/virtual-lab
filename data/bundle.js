/* 自动生成文件，请勿手改。改完 data/*.json 后执行：node tools/build-bundle.js */
window.LAB_BUNDLE = {
  "experiments": [
    {
      "id": "kmno4",
      "name": "高锰酸钾制取氧气",
      "file": "data/kmno4.json",
      "iconEmoji": "🔥",
      "desc": "固体加热型发生装置，排水法收集，带火星木条检验。",
      "method": "排水法",
      "group": "氧气制取",
      "max": 100
    },
    {
      "id": "h2o2",
      "name": "过氧化氢制取氧气",
      "file": "data/h2o2.json",
      "iconEmoji": "💧",
      "desc": "固液常温型发生装置，MnO₂ 催化，排水法收集。",
      "method": "排水法",
      "group": "氧气制取",
      "max": 100
    },
    {
      "id": "co2",
      "name": "实验室制取二氧化碳",
      "file": "data/co2.json",
      "iconEmoji": "🫧",
      "desc": "固液常温型发生装置，向上排空气法收集，澄清石灰水检验。",
      "method": "向上排空气法",
      "group": "二氧化碳制取",
      "max": 100
    },
    {
      "id": "h2",
      "name": "实验室制取氢气",
      "file": "data/h2.json",
      "iconEmoji": "🎈",
      "desc": "锌粒与稀硫酸，向下排空气法收集，点燃前必须验纯。",
      "method": "向下排空气法",
      "group": "氢气制取",
      "max": 100
    },
    {
      "id": "o2air",
      "name": "测定空气里氧气的含量",
      "file": "data/o2air.json",
      "iconEmoji": "📏",
      "desc": "红磷燃烧消耗氧气，水倒吸入集气瓶，测得氧气约占 1/5。",
      "method": "压强法",
      "group": "空气中氧气含量",
      "max": 100
    },
    {
      "id": "water",
      "name": "水的组成 —— 电解水",
      "file": "data/water.json",
      "iconEmoji": "⚡",
      "desc": "通直流电分解水，正氧负氢、体积比 1:2，推出水的元素组成。",
      "method": "电解法",
      "group": "水的组成",
      "max": 100
    }
  ],
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
  }
};
