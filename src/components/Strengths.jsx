import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Grainient from "./Grainient";
import BorderGlow from "./BorderGlow";

const ICONS = {
  pipeline: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M4 7h9a3 3 0 0 1 3 3v4a3 3 0 0 0 3 3h1" />
      <circle cx="4" cy="7" r="1.6" />
      <circle cx="20" cy="17" r="1.6" />
      <path d="M6 7h2M6 17h2" />
    </svg>
  ),
  flask: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M9 3h6M10 3v5.5L5.5 18a2 2 0 0 0 1.8 3h9.4a2 2 0 0 0 1.8-3L14 8.5V3" />
      <path d="M7.5 15h9" />
    </svg>
  ),
  model: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="12" cy="12" r="3" />
      <circle cx="8" cy="8" r="1" />
      <circle cx="16" cy="8" r="1" />
      <circle cx="8" cy="16" r="1" />
      <circle cx="16" cy="16" r="1" />
      <path d="M12 9v6M9 12h6" />
    </svg>
  ),
  compass: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2.2 4.8-4.8 2.2 2.2-4.8z" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" />
    </svg>
  ),
  bot: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="5" y="8" width="14" height="11" rx="3" />
      <path d="M12 8V5M9 3h6" />
      <circle cx="9.5" cy="13.5" r="0.6" fill="currentColor" />
      <circle cx="14.5" cy="13.5" r="0.6" fill="currentColor" />
      <path d="M5 12H2M22 12h-3" />
    </svg>
  ),
};

const STRENGTHS = [
  {
    icon: "pipeline",
    title: "端到端数据工程",
    desc: "ETL Skill 化、Agent Loop 编排、SQL + Cron + CDN + 消息推送，把分析流程变成 7×24 自运行的工程系统。",
    tags: ["Python", "SQL", "自动化"],
  },
  {
    icon: "flask",
    title: "统计与实验设计",
    desc: "A/B 实验、功效分析、SRM 熔断、Bootstrap 与因果推断（DID / PSM），用统计防线保证结论可信。",
    tags: ["A/B Testing", "因果推断", "假设检验"],
  },
  {
    icon: "model",
    title: "机器学习建模",
    desc: "XGBoost 时序预测、分阶段评分体系、SHAP 可解释性，模型不只在论文里跑分，更要贴合业务口径。",
    tags: ["XGBoost", "特征工程", "模型校准"],
  },
  {
    icon: "compass",
    title: "业务分析与归因",
    desc: "贡献度拆解、渗透×留存、渗透×拜访等分析框架，把波动拆成可执行的分级机会，驱动资源调整。",
    tags: ["异动归因", "指标体系", "机会洞察"],
  },
  {
    icon: "chart",
    title: "可视化与报告工程化",
    desc: "ECharts 交互看板、单文件 HTML 报告、设计系统沉淀，让结论能直接面向决策者交付。",
    tags: ["ECharts", "Tableau", "设计系统"],
  },
  {
    icon: "bot",
    title: "AI 原生工作流",
    desc: "熟练使用 Claude Code / Codex 等 Agent 工具，Vibe Coding 驱动，把想法快速变成生产可用的系统。",
    tags: ["Vibe Coding", "Agent", "AI 工程"],
  },
];

export default function Strengths() {
  return (
    <section id="strengths" className="section strengths">
      <div className="strengths-featured">
        <Grainient
          color1="#5b4ad4"
          color2="#000000"
          color3="#3d379f"
          timeSpeed={0.25}
          colorBalance={0.0}
          warpStrength={1.0}
          warpFrequency={5.0}
          warpSpeed={2.0}
          warpAmplitude={50.0}
          blendAngle={0.0}
          blendSoftness={0.05}
          rotationAmount={500.0}
          noiseScale={2.0}
          grainAmount={0.06}
          grainScale={2.0}
          grainAnimated={false}
          contrast={1.0}
          gamma={0.88}
          saturation={0.85}
          centerX={0.0}
          centerY={0.0}
          zoom={0.9}
        />
        <div className="container">
          <Reveal variant="title">
            <SectionHeading
              index="03"
              label="CAPABILITIES"
              title="个人优势"
              sub="数据科学家的严谨 + 工程师的交付能力"
            />
          </Reveal>

          <div className="strengths-grid">
            {STRENGTHS.map((s, i) => (
              <Reveal key={s.title} delay={Math.min(i * 80, 320)}>
                <BorderGlow
                  className="strength-card"
                  backgroundColor="rgba(12, 14, 20, 0.72)"
                  borderRadius={16}
                  glowColor="270 82 72"
                  colors={["#a78bfa", "#8b6cf5", "#c4b5fd"]}
                  edgeSensitivity={24}
                  glowRadius={30}
                  glowIntensity={0.85}
                  coneSpread={22}
                >
                  <div className="strength-top">
                    <span className="strength-icon">{ICONS[s.icon]}</span>
                    <span className="strength-index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="strength-tags">
                    {s.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </BorderGlow>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
