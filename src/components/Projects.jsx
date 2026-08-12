import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import BorderGlow from "./BorderGlow";

/* ---------- 项目封面：非数据化呈现 ---------- */
function ProjectCover({ index, label, title, tags, accentA, accentB, art }) {
  const artEl = {
    arcs: (
      <svg className="cover-art" viewBox="0 0 400 400" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M40,360 A320,320 0 0 1 360,40" />
        <path d="M100,360 A260,260 0 0 1 360,100" opacity="0.6" />
        <path d="M160,360 A200,200 0 0 1 360,160" opacity="0.35" />
      </svg>
    ),
    rings: (
      <svg className="cover-art" viewBox="0 0 400 400" fill="none" stroke="currentColor" aria-hidden="true">
        <circle cx="300" cy="100" r="30" />
        <circle cx="300" cy="100" r="72" opacity="0.7" />
        <circle cx="300" cy="100" r="118" opacity="0.45" />
        <circle cx="300" cy="100" r="168" opacity="0.25" />
        <line x1="132" y1="100" x2="468" y2="100" opacity="0.35" />
        <line x1="300" y1="-68" x2="300" y2="268" opacity="0.35" />
      </svg>
    ),
    diag: (
      <svg className="cover-art" viewBox="0 0 400 400" fill="none" stroke="currentColor" aria-hidden="true">
        <line x1="0" y1="280" x2="400" y2="-120" />
        <line x1="0" y1="350" x2="400" y2="-50" opacity="0.5" />
        <line x1="0" y1="420" x2="400" y2="20" opacity="0.28" />
      </svg>
    ),
    dots: (
      <svg className="cover-art" viewBox="0 0 400 400" fill="currentColor" aria-hidden="true">
        {Array.from({ length: 64 }, (_, i) => {
          const x = (i % 8) * 46 + 24;
          const y = Math.floor(i / 8) * 46 + 20;
          return <circle key={i} cx={x} cy={y} r="2" opacity={0.22 + ((i * 37) % 55) / 100} />;
        })}
      </svg>
    ),
    wave: (
      <svg className="cover-art" viewBox="0 0 400 400" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M0,240 C60,180 120,300 180,240 S300,180 400,240" />
        <path d="M0,290 C60,230 120,350 180,290 S300,230 400,290" opacity="0.55" />
        <path d="M0,340 C60,280 120,400 180,340 S300,280 400,340" opacity="0.28" />
      </svg>
    ),
    cross: (
      <svg className="cover-art" viewBox="0 0 400 400" fill="none" stroke="currentColor" aria-hidden="true">
        <line x1="0" y1="200" x2="400" y2="200" />
        <line x1="200" y1="0" x2="200" y2="400" />
        <circle cx="200" cy="200" r="42" opacity="0.7" />
        <circle cx="200" cy="200" r="86" opacity="0.35" />
      </svg>
    ),
  }[art];

  return (
    <div
      className="project-cover"
      style={{ "--cover-a": accentA, "--cover-b": accentB }}
    >
      <span className="cover-index">{index}</span>
      {artEl}
      <div className="cover-copy">
        <span className="cover-label">{label}</span>
        <h4 className="cover-title">{title}</h4>
        <span className="cover-tags">{tags}</span>
      </div>
    </div>
  );
}

const PROJECTS = [
  {
    id: "dealer",
    period: "2026.06 — 2026.07",
    company: "个人项目",
    title: "经销商经营监控模型",
    desc: "面向 2700+ 家活跃经销商的经营健康度评分与预警系统：按新客 / 成长 / 成熟分阶段训练 XGBoost 评分模型，用 Bootstrap 拐点法确定统计显著的预警阈值，全自动日运营链路每天输出约 270 家预警账户的销售干预清单。",
    tags: ["XGBoost", "Bootstrap", "SHAP", "ECharts", "Agent 自动化"],
    metrics: [
      { value: "2700+", label: "覆盖经销商" },
      { value: "5度16项", label: "指标体系" },
      { value: "≈270 家", label: "每日预警清单" },
    ],
    cover: (
      <ProjectCover
        index="01"
        label="DEALER HEALTH MONITOR · 2026"
        title="经销商经营监控模型"
        tags="XGBoost · Bootstrap · SHAP · 全自动日运营"
        accentA="#b9a2ff"
        accentB="#4c3a8f"
        art="arcs"
      />
    ),
    href: "/projects/dealer-monitor.html",
    cta: "打开实时看板",
  },
  {
    id: "annual",
    period: "2026.03 — 2026.07",
    company: "快手 · 生活服务",
    title: "年框消耗监控体系",
    desc: "Agent Loop 架构的年度框架消耗监控：4 页交互看板、三级达成预警（绿 / 黄 / 红）、季度结算自动识别，业务规则外置 MD 配置，SQL + Cron 调度 + CDN 部署 + KIM 推送全栈交付。",
    tags: ["Agent Loop", "SQL", "Cron", "CDN", "消息推送"],
    metrics: [
      { value: "10+", label: "核心监控指标" },
      { value: "4 页", label: "交互看板" },
      { value: "9 类", label: "外置业务规则" },
    ],
    cover: (
      <ProjectCover
        index="02"
        label="ANNUAL FRAME MONITOR · 2026"
        title="年框消耗监控体系"
        tags="Agent Loop · SQL · Cron · CDN · KIM 推送"
        accentA="#a78bfa"
        accentB="#5b3fd4"
        art="rings"
      />
    ),
    href: "/projects/annual-frame-dashboard.html",
    cta: "打开监控看板",
  },
  {
    id: "abtest",
    period: "2026.06 — 2026.07",
    company: "快手 · 生活服务",
    title: "落地页转化率 A/B 实验",
    desc: "生产级实验设计与分析：双比例 z 检验 + Bootstrap 2000 次（95% CI [+5.6, +6.5]pp）+ 逐日 SRM 熔断与累计 p 值轨迹监控；新页转化率 11.87% → 17.95%，18 个分群全部正向，建议全量上线。",
    tags: ["A/B Testing", "功效分析", "Bootstrap", "SRM 熔断"],
    metrics: [
      { value: "+6.1pp", label: "转化率提升" },
      { value: "z=46.3", label: "双比例检验" },
      { value: "18 个", label: "分群全部正向" },
    ],
    cover: (
      <ProjectCover
        index="03"
        label="A/B TEST · CONVERSION · 2026"
        title="落地页转化率 A/B 实验"
        tags="功效分析 · Bootstrap · SRM 熔断"
        accentA="#8b6cf5"
        accentB="#3a2a7d"
        art="diag"
      />
    ),
    href: "/projects/ab-test-report.html",
    cta: "查看实验报告",
  },
  {
    id: "etl",
    period: "2026.03 — 2026.07",
    company: "快手 · 生活服务",
    title: "端到端 ETL Skill",
    desc: "把「取数 → 清洗 → 标签 → 输出」完整链路封装为可复用 Skill：SKILL.md 定义触发词与执行逻辑，references 沉淀 70+ 车系映射规则，scripts 封装 SQL 与 Python，example 沉淀可复用案例；每次 3000+ 客户标签任务从小时级降至分钟级。",
    tags: ["Skill 工程", "SQL", "Python", "Agent"],
    metrics: [
      { value: "3000+", label: "客户标签 / 次" },
      { value: "70+", label: "映射规则沉淀" },
      { value: "分钟级", label: "端到端交付" },
    ],
    cover: (
      <ProjectCover
        index="04"
        label="ETL SKILL · AUTOMATION · 2026"
        title="端到端 ETL Skill"
        tags="SKILL.md · references · scripts"
        accentA="#c4b5fd"
        accentB="#57469e"
        art="dots"
      />
    ),
  },
  {
    id: "flower",
    period: "2025.10 — 2026.01",
    company: "个人项目",
    title: "结合迁移学习的花卉图像识别",
    desc: "102 类细粒度花卉分类任务：构建端到端数据增强流程（随机旋转 / 色彩扰动 / 中心裁剪），对比自定义 CNN 与 ImageNet 预训练 ResNet-18，经全模型微调后验证集准确率提升至 67%。",
    tags: ["迁移学习", "ResNet-18", "PyTorch", "数据增强"],
    metrics: [
      { value: "6600+", label: "高多样性图像" },
      { value: "102 类", label: "细粒度分类" },
      { value: "67%", label: "验证集准确率" },
    ],
    cover: (
      <ProjectCover
        index="05"
        label="FLOWER RECOGNITION · TRANSFER LEARNING"
        title="结合迁移学习的花卉图像识别"
        tags="ResNet-18 · 迁移学习 · PyTorch"
        accentA="#b48aff"
        accentB="#5e2f8f"
        art="wave"
      />
    ),
  },
  {
    id: "challenge",
    period: "2022.09 — 2023.02",
    company: "校级一等奖",
    title: "「挑战杯」供应链数字化研究",
    desc: "基于 2012–2023 年 A 股上市企业与供应链创新试点名单匹配，构建 PSM-DID 双重差分模型，研究供应链数字化对企业出口提质增效的影响；通过安慰剂、平行趋势等 4 种稳健性检验，并用中介效应模型揭示管理效能与创新活力两条作用路径。",
    tags: ["DID", "PSM", "因果推断", "Stata"],
    metrics: [
      { value: "校级一等奖", label: "全国大学生科技学术竞赛" },
      { value: "2012–2023", label: "A 股上市企业样本" },
      { value: "4 种", label: "稳健性检验" },
    ],
    cover: (
      <ProjectCover
        index="06"
        label="CHALLENGE CUP · PSM-DID"
        title="「挑战杯」供应链数字化研究"
        tags="DID · PSM · Stata"
        accentA="#7c5cff"
        accentB="#2d2270"
        art="cross"
      />
    ),
  },
];

const WORKS = [
  {
    title: "车系 YoY 增长分析",
    cat: "业务复盘 · 汽车",
    year: "2026",
    desc: "分车系年度同比增长拆解，定位增长与下滑来源，支撑车型资源调整。",
    href: "/projects/car-yoy-report.html",
    cover: (
      <ProjectCover
        index="05"
        label="CAR LINE YOY · REVIEW"
        title="车系 YoY 增长分析"
        tags="YoY · 归因拆解 · 复盘"
        accentA="#b9a2ff"
        accentB="#4c3a8f"
        art="wave"
      />
    ),
  },
  {
    title: "Q2 客户业务投放复盘",
    cat: "业务复盘 · 投放分析",
    year: "2026",
    desc: "季度客户投放全景复盘：消耗结构、效果指标与策略优化建议。",
    href: "/projects/q2-client-investment-review.html",
    cover: (
      <ProjectCover
        index="06"
        label="Q2 CLIENT INVESTMENT · REVIEW"
        title="Q2 客户业务投放复盘"
        tags="消耗结构 · 效果指标 · 策略建议"
        accentA="#a78bfa"
        accentB="#5b3fd4"
        art="rings"
      />
    ),
  },
  {
    title: "Q2 品牌自然到店监控",
    cat: "监控看板 · 汽车品牌",
    year: "2026",
    desc: "品牌自然到店量监控看板，多品牌、多维度追踪到店趋势与异常波动。",
    href: "/projects/q2-auto-brand-visit.html",
    cover: (
      <ProjectCover
        index="07"
        label="Q2 BRAND VISIT · MONITOR"
        title="Q2 品牌自然到店监控"
        tags="多品牌 · 趋势追踪 · 异常波动"
        accentA="#9d8cff"
        accentB="#4437a0"
        art="diag"
      />
    ),
  },
  {
    title: "拜访周边监控看板",
    cat: "监控看板 · 拜访",
    year: "2026",
    desc: "拜访周边监控看板：走访进度、经营表现与异常预警的持续追踪。",
    href: "/projects/monthly-marketing.html",
    cover: (
      <ProjectCover
        index="08"
        label="VISIT WEEKLY · MONITOR"
        title="拜访周边监控看板"
        tags="走访进度 · 经营表现 · 预警"
        accentA="#b48aff"
        accentB="#5e2f8f"
        art="dots"
      />
    ),
  },
  {
    title: "经营情况监控",
    cat: "监控看板",
    year: "2026",
    desc: "经营情况监控看板，持续跟踪核心经营指标与预警信号。",
    href: "/projects/business-monitor.html",
    cover: (
      <ProjectCover
        index="09"
        label="BUSINESS MONITOR"
        title="经营情况监控"
        tags="经营指标 · 持续跟踪 · 预警"
        accentA="#8b6cf5"
        accentB="#3a2a7d"
        art="cross"
      />
    ),
  },
  {
    title: "成本看板 26H1",
    cat: "监控看板 · 成本",
    year: "2026",
    desc: "26H1 成本结构监控看板：成本拆解、趋势变化与异常预警。",
    href: "/projects/cost-dashboard.html",
    cover: (
      <ProjectCover
        index="10"
        label="COST DASHBOARD · 26H1"
        title="成本看板 26H1"
        tags="成本拆解 · 趋势 · 异常预警"
        accentA="#c4b5fd"
        accentB="#57469e"
        art="arcs"
      />
    ),
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal variant="title">
          <SectionHeading
            index="02"
            label="SELECTED WORK"
            title="精选项目"
            sub="每个项目都从问题定义走到工程化落地，附真实交付物"
          />
        </Reveal>

          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.id} delay={Math.min(i * 90, 270)} className={p.wide ? "is-wide" : ""}>
                <BorderGlow
                  className="project-card"
                  backgroundColor="#0c0f14"
                  borderRadius={20}
                  glowColor="270 82 72"
                  colors={["#a78bfa", "#8b6cf5", "#c4b5fd"]}
                  edgeSensitivity={26}
                  glowRadius={36}
                  glowIntensity={0.9}
                  coneSpread={24}
                >
                  {p.href ? (
                    <a
                      className="project-preview"
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {p.cover}
                      <span className="preview-cta">
                        {p.cta} <span aria-hidden="true">↗</span>
                      </span>
                    </a>
                  ) : (
                    <div className="project-preview">{p.cover}</div>
                  )}

                  <div className="project-body">
                    <div className="project-meta">
                      <span className="project-period">{p.period}</span>
                      <span className="project-company">{p.company}</span>
                    </div>
                    <h3 className="project-title">{p.title}</h3>
                    <p className="project-desc">{p.desc}</p>
                    <div className="project-tags">
                      {p.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <div className="project-foot">
                      <div className="project-metrics">
                        {p.metrics.map((m) => (
                          <div className="project-metric" key={m.label}>
                            <b>{m.value}</b>
                            <span>{m.label}</span>
                          </div>
                        ))}
                      </div>
                      {p.href && (
                        <a
                          className="project-link"
                          href={p.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {p.cta} <span aria-hidden="true">→</span>
                        </a>
                      )}
                    </div>
                  </div>
                </BorderGlow>
              </Reveal>
            ))}
        </div>

        <Reveal className="works-head" variant="title">
          <SectionHeading
            index="02"
            label="ALL WORKS"
            title="全部作品"
            sub="你提供过的所有报告、看板与经营分析截图，共 9 件作品"
          />
        </Reveal>

        <div className="works-grid">
          {WORKS.map((w, i) => (
            <Reveal key={w.title} delay={Math.min(i * 80, 320)}>
              <BorderGlow
                className="work-card"
                backgroundColor="#0b0e13"
                borderRadius={16}
                glowColor="270 82 72"
                colors={["#a78bfa", "#8b6cf5", "#c4b5fd"]}
                edgeSensitivity={24}
                glowRadius={28}
                glowIntensity={0.85}
                coneSpread={22}
              >
                <a className="work-thumb" href={w.href} target="_blank" rel="noreferrer">
                  {w.cover}
                  <span className="work-open">
                    打开 <span aria-hidden="true">↗</span>
                  </span>
                </a>
                <div className="work-body">
                  <div className="work-meta">
                    <span className="work-cat">{w.cat}</span>
                    <span className="work-year">{w.year}</span>
                  </div>
                  <h3 className="work-title">{w.title}</h3>
                  <p className="work-desc">{w.desc}</p>
                  <a className="work-link" href={w.href} target="_blank" rel="noreferrer">
                    查看作品 <span aria-hidden="true">→</span>
                  </a>
                </div>
              </BorderGlow>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
