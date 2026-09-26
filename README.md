# 初中化学虚拟实验训练平台（virtual-lab）

不花钱、不用装软件的虚拟实验平台：一份代码跑所有实验，实验内容全部写在 JSON 里。
从「一个高锰酸钾 HTML 文件」升级成了「首页 + 通用实验页 + 教师端」的完整结构。

## 运行方式（二选一）

**方式 A：直接双击 `index.html`**
数据已内联在 `data-bundle.js`，双击就能玩（浏览器地址栏是 file:// 也能跑）。
改完 JSON 后记得重新打包：`node tools/build-bundle.js`

**方式 B：本地服务器（推荐，改 JSON 即时生效）**
```bash
# 在本文件夹里执行（任选其一）
python -m http.server 8000
npx serve .
```
然后访问 http://localhost:8000

## 目录结构

```
index.html            首页：实验列表 + 我的记录 + CSV 导出
                      （内置 window.LAB_LIST_FALLBACK 兜底清单，
                        即使 data/*.json 没同步也能显示全部实验卡片；
                        新增实验时请同时在这里加一行）
experiment.html       通用实验页（所有实验共用这一页）
drill.html            化学方程式记忆卡（默写/四选一/看图判断/补全/背卡）
teacher.html          教师查看端（拖入 CSV 即可统计，纯前端）
css-style.css         全部样式
js-icons.js           SVG 材质 + 器材图标（画新器材才需要改）
js-core.js            工具 + 学习记录存储（localStorage）
js-scene.js           数据驱动 SVG 场景渲染器
js-engine.js          实验引擎：步骤 / 拖拽 / 手势 / 评分 / 动作
js-home.js  js-app.js  js-teacher.js
data-experiments.json 实验清单（加实验先在这里登记）
── 气体制取与检验 ──
data-kmno4.json       高锰酸钾制取氧气（固体加热型 · 排水法）
data-h2o2.json        过氧化氢制取氧气（固液常温 · MnO₂ 催化 · 排水法）
data-co2.json         实验室制取二氧化碳（固液常温 · 向上排空气法）
data-h2.json          实验室制取氢气（锌+稀硫酸 · 验纯 · 点燃 · 烧杯验水）
data-o2air.json       测定空气里氧气含量（红磷燃烧 · 水倒吸约 1/5）
data-water.json       电解水（正氧负氢 · 体积比 1:2 · 水的组成）
── 性质探究 ──
data-co2naoh.json     二氧化碳与氢氧化钠反应（无明显现象 · 塑料瓶变瘪 · 对照实验）
data-cao.json         生石灰与水反应放热（温度计读数上升 · 干燥剂原理）
data-neutral.json     酸和碱的中和反应（酚酞显色 · 逐滴加酸 · H⁺+OH⁻=H₂O）
data-metalacid.json   金属与稀盐酸反应（三试管对比 Mg>Zn>Fe · 点燃验氢）
data-fecuso4.json     铁与硫酸铜反应（湿法炼铜 · 蓝变浅绿 · 红色析出）
data-ions.json        硫酸根与氯离子检验（BaSO₄/AgCl 不溶于稀硝酸 · 排除干扰）
data-precip.json      碱与盐的沉淀反应（蓝/红褐/白三种沉淀 · 复分解条件）
data-cuso4water.json  无水硫酸铜检验水（白色变蓝 · 无水乙醇对照）
── 记忆卡 ──
data-cards.json       34 条核心方程式记忆卡（燃烧/分解/置换还原/酸碱盐，
                      check-cards.js 会自动做配平检查）
data-bundle.js        自动生成的离线数据包（勿手改）
tools/check.js        数据自检：node tools/check.js
tools/check-cards.js  记忆卡自检（含方程式自动配平）：node tools/check-cards.js
tools/smoke.js        冒烟测试：node tools/smoke.js
tools/stage-sweep.js  状态扫描测试：node tools/stage-sweep.js
tools/test-drill.html 记忆卡断言测试（浏览器打开，需本地服务器）
tools/build-bundle.js 打包离线数据：node tools/build-bundle.js
```

## 记忆卡练习（drill.html）

- **5 种模式**：混合（推荐）、方程式默写（带化学符号键盘，手机也能打）、
  四选一、看图判断（7 种参数化 SVG 实验小图）、补化学式，另有「背卡片」翻面模式
- **智能判分**：输入 `O2`、`O₂`、`O₂→`、全角符号、带条件、物质顺序颠倒都算对；
  写错时给出具体诊断（"化学式都对，但没配平""生成物漏写了 H₂O""左右写反了"）
- **答题后自动展示**该反应的现象、考点和提醒，做一题复习一遍
- **支持直达链接**：`drill.html?mode=write&scope=酸碱盐&count=10&auto=1`
  （mode 可选 write/choice/pic/fill/browse/mix，scope 填分组名或 all）
- 成绩计入首页「我的记录」，可 CSV 导出、教师端汇总

## 加一个新实验 = 加一个 JSON 文件

1. 复制 `data-co2.json` 为 `data-xxx.json`，改内容
2. 在 `data-experiments.json` 里加一条
3. `node tools/check.js` 自检 → `node tools/build-bundle.js` 打包 → 完成

JSON 里的动作速查（写在步骤的 drop / buttons / gesture 分支里）：

| 动作 | 作用 |
|---|---|
| `{"do":"set","k":"flame","v":true,"delay":600}` | 改状态，delay 毫秒后生效（做过程动画） |
| `{"do":"score","key":"heat"}` | 给评分项加满/加分（取最高，不重复） |
| `{"do":"err","text":"……"}` | 记一次错误 + 红色提示（会进成绩单） |
| `{"do":"tip","text":"……"}` | 绿色提示 |
| `{"do":"goto","id":"heat","delay":900}` | 跳步骤 |
| `{"do":"if","cond":"stage.pipeOut","then":[…],"else":[…]}` | 条件分支 |
| `{"do":"checkEquip","key":"equip","goto":"assemble"}` | 器材选择判分 |
| `{"do":"finish"}` / `{"do":"reset"}` / `{"do":"export"}` | 存成绩 / 重做 / 导出 CSV |

表达式里可用：`stage.xxx`（状态）、`S.xxx`（得分）、`v`（手势当前值）。
场景零件支持 `when` 条件、`rotate` 动态旋转、属性值前缀 `@` 表示表达式。

## 部署上线（免费）

**GitHub Pages**
1. 注册/登录 github.com → 右上角 + → New repository → 命名 `virtual-lab`，Public
2. 仓库页点 "uploading an existing file"，把本文件夹所有文件拖进去 → Commit
   （工作电脑装不了 Git 就全程用网页上传，完全不用命令行）
3. 仓库 Settings → Pages → Source 选 `main` 分支 → Save
4. 1-2 分钟后得到 `https://你的用户名.github.io/virtual-lab/`

**Vercel（实验超过 3 个后建议迁移）**
1. vercel.com 用 GitHub 账号登录 → Add New Project → 选 virtual-lab 仓库
2. 框架选 Other → Deploy → 得到 `virtual-lab.vercel.app`

## 数据的边界（重要）

- 成绩存在**学生自己浏览器的 localStorage** 里，换设备就没了 —— 这是零成本方案的天花板
- 老师拿数据靠学生导出 CSV → 教师端导入，先验证「老师是否真的需要看数据」
- 等老师抱怨「不能自动汇总」时，再上 Supabase 免费版做云端同步，结构不用改

## 已实现的能力清单

- [x] 项目化拆分：index / experiment / teacher 三页 + 数据外置
- [x] JSON 配置化：加实验只写数据，不改代码（两个实验验证通过）
- [x] 拖拽阻尼跟随 + 吸附动画
- [x] 错误后果过程化：试管裂纹三段动画、水倒吸五段动画、CO₂ 液封失败气体逸出
- [x] 评分双维度（操作规范 / 安全意识）进度条
- [x] 语音指令（Chrome/Edge 可用：「移出导管」「熄灭」）
- [x] 学习记录：姓名记忆、历史成绩表、CSV 导出（Excel 中文不乱码）
- [x] 教师端：CSV 导入、班级统计、错误 TOP5 柱状图、打印
- [x] 支持 `experiment.html?id=kmno4&step=heat` 直达某一步（讲评用）
- [x] 记忆卡练习：34 条方程式 × 5 种模式，自动配平校验、错因诊断、成绩入档
