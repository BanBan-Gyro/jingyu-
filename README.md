# 何俊毅 · 个人作品集

基于 React + Vite 的个人作品集网站，暗色科技风，PC 端优先，版心 1700px。

## 本地运行

```bash
npm install
npm run dev        # 开发预览：http://localhost:5173
npm run build      # 生产构建，输出到 dist/
npm run preview    # 预览生产构建
```

## 部署上线

站点为纯静态输出（`dist/`），支持任意静态托管。

**GitHub Pages（推荐）**：仓库已配好 GitHub Actions 工作流，推送 `main` 分支后自动构建部署：

```bash
cd /Users/hejunyi/Desktop/快手/portfolio
gh auth login                          # 登录 GitHub
gh repo create junyi-he-portfolio --public --source . --push
```

推送后在仓库 Settings → Pages 将 Source 设为 GitHub Actions 即可。

**Vercel / Netlify**：导入本目录或直接拖拽 `dist/` 文件夹，配置已内置
（`vercel.json` / `netlify.toml`），零配置即可上线。

> 提示：`public/projects/dealer-monitor.html` 约 22MB（内嵌 ECharts），
> 上线后建议开启 gzip/压缩以减少访客流量。

## 项目结构

```
portfolio/
├── public/
│   ├── avatar.jpg              # 个人头像（来自简历照片）
│   ├── favicon.svg
│   └── projects/               # 真实交付物（单文件 HTML 看板/报告）
│       ├── dealer-monitor.html
│       ├── annual-frame-dashboard.html
│       ├── ab-test-report.html
│       ├── car-yoy-report.html
│       ├── q2-client-investment-review.html
│       ├── q2-auto-brand-visit.html
│       ├── cost-dashboard.html
│       ├── monthly-marketing.html
│       ├── business-monitor.png
└── src/
    ├── components/             # 各区块组件 + Plasma（首页）/ Grainient（精选项目）WebGL 背景
    └── styles/global.css       # 全部样式（暗色设计系统）
```

## 区块背景

- 首页 Hero：Plasma WebGL 等离子流体背景（紫色调、鼠标交互）
- 个人优势：Grainient WebGL 动态颗粒渐变背景（按官方示例配置：紫罗兰 × 靛蓝 × 黑）
- 联系部分：Aurora WebGL 极光背景（按官方示例配置：黑 × 紫 × 靛蓝）

两组件的参数（颜色/速度/强度等）分别在
[HeroBackground.jsx](src/components/HeroBackground.jsx) 与
[Projects.jsx](src/components/Projects.jsx) 中配置。

## 动效体系

使用 GSAP + IntersectionObserver（依赖 `gsap`）：
- 首屏 Opening：遮罩揭开 → 标题蒙版位移 + 压缩归位 → 内容依次进场
- 模块标题：蒙版大幅揭示进场
- 卡片：依次 stagger 上移进场，图片叠加 clip 揭示与轻微视差
- 尊重 `prefers-reduced-motion`，减少动态时自动关闭全部动画

## 首页背景

Hero 默认使用 React Bits 的 Plasma WebGL 流体背景（紫色调、支持鼠标交互），
参数（颜色/速度/透明度等）可在 [HeroBackground.jsx](src/components/HeroBackground.jsx) 中调整。
如需真实视频背景，将任意 MP4 重命名为 `hero-bg.mp4` 放入 `public/` 目录即可自动切换。

## 待优化（等你提供参考）

- 项目卡片实拍/截图替换当前 SVG 数据可视化占位图
- 更精确的配色与字体参考
- 移动端适配深度优化
