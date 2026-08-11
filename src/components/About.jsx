import { useLayoutEffect, useRef } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import BorderGlow from "./BorderGlow";
import { createParallax } from "../lib/gsapSetup";

const EXPERIENCES = [
  {
    company: "快手",
    role: "数据分析 · 生活服务",
    date: "2026.03 — 2026.07",
    points: [
      <>端到端 ETL Skill：把「取数 → 清洗 → 标签 → 输出」封装为可复用 Skill（SKILL.md + references + example），<b>3000+ 客户标签任务从小时级降至分钟级</b></>,
      <>年框监控体系：Agent Loop 架构 + 10+ 指标 + 三级达成预警（绿/黄/红），<b>SQL 调度 + CDN 部署 + KIM 推送</b>全栈交付</>,
      <>消耗预测：XGBoost 时序模型 + 五因子校准，<b>MAPE 8%（旧基线 16%）</b></>,
      <>异动归因：贡献度拆解 / 渗透×留存 / 渗透×拜访三类框架，定位 <b>-17.5% 消耗波动异常来源</b>，输出 58 个分级机会</>,
    ],
  },
  {
    company: "广东砹脉数字营销",
    role: "数据分析 · 汽车效果项目组",
    date: "2025.05 — 2025.08",
    points: [
      <>全链路指标体系：覆盖 <b>12 个投放账户、10万+ 条线索</b>「留资-到店-锁单」数据集</>,
      <>自动化数据看板：多维透视逻辑 + Index/Match + Pivot，驱动 <b>到店率 +38.1%、交车率 +16.1%</b></>,
      <>投放策略实验：直播「讲车 vs 抽奖留咨」双模式对比，<b>消耗 +141%、表单 +224.5%、CPL 81→67 元</b></>,
    ],
  },
];

const NUMBERS = [
  { value: "10万+", label: "线索全链路数据" },
  { value: "8", label: "AI 数据项目" },
  { value: "+38.1%", label: "到店率环比提升" },
  { value: "8+", label: "搭建看板数" },
];

export default function About() {
  const portraitRef = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const frame = portraitRef.current;
    const img = frame?.querySelector("img");
    if (!frame || !img) return;
    return createParallax({ trigger: frame, target: img, amount: 6 });
  }, []);

  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal variant="title">
          <SectionHeading
            index="01"
            label="PROFILE"
            title="个人经历"
            sub="数据科学硕士在读 · 一年完整的数据到决策实战"
          />
        </Reveal>

        <div className="about-grid">
          <div className="about-left">
            <Reveal delay={60}>
              <BorderGlow
                className="portrait-glow"
                backgroundColor="#0c0f14"
                borderRadius={18}
                glowColor="270 82 72"
                colors={["#a78bfa", "#8b6cf5", "#c4b5fd"]}
                edgeSensitivity={28}
                glowRadius={38}
                glowIntensity={1.0}
                coneSpread={25}
              >
                <div className="portrait-frame" ref={portraitRef}>
                  <img src="/avatar.jpg" alt="何俊毅" loading="lazy" decoding="async" />
                  <span className="portrait-status">
                    <span className="pulse-dot" /> AVAILABLE
                  </span>
                </div>
                <h3 className="portrait-name">何俊毅</h3>
                <p className="portrait-role">数据科学家 / AI 全栈工程师</p>

                <ul className="contact-list">
                  <li>
                    <span className="contact-key">电话</span>
                    <a href="tel:+8615920984768">(+86) 159-2098-4768</a>
                  </li>
                  <li>
                    <span className="contact-key">邮箱</span>
                    <a href="mailto:1457386897@qq.com">1457386897@qq.com</a>
                  </li>
                  <li>
                    <span className="contact-key">微信</span>
                    <span>15920984768</span>
                  </li>
                  <li>
                    <span className="contact-key">城市</span>
                    <span>北京</span>
                  </li>
                </ul>

                <div className="education">
                  <div className="education-item">
                    <b>北京师范大学</b>
                    <span>应用统计 · 硕士（2025 – 2027）</span>
                    <em>GPA 3.6 / 4.0</em>
                  </div>
                  <div className="education-item">
                    <b>广东外语外贸大学</b>
                    <span>国际经济与贸易 · 学士（2021 – 2025）</span>
                    <em>GPA 3.78 / 4.0</em>
                  </div>
                </div>
              </BorderGlow>
            </Reveal>
          </div>

          <div className="about-right">
            <div className="timeline">
              {EXPERIENCES.map((exp, i) => (
                <Reveal
                  key={exp.company}
                  delay={120 + i * 80}
                  className="timeline-item"
                >
                  <div className="timeline-head">
                    <span className="timeline-dot" aria-hidden="true" />
                    <div className="timeline-head-text">
                      <h3>
                        {exp.company}
                        <span className="tag">{exp.role}</span>
                      </h3>
                      <span className="timeline-date">{exp.date}</span>
                    </div>
                  </div>
                  <ul className="timeline-points">
                    {exp.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>

            <div className="numbers-band">
              {NUMBERS.map((n, i) => (
                <Reveal key={n.label} delay={i * 90} className="number-reveal">
                  <BorderGlow
                    className="number-card"
                    backgroundColor="#0b0e13"
                    borderRadius={14}
                    glowColor="270 82 72"
                    colors={["#a78bfa", "#8b6cf5", "#c4b5fd"]}
                    edgeSensitivity={26}
                    glowRadius={30}
                    glowIntensity={0.9}
                    coneSpread={22}
                  >
                    <span className="number-card-value">{n.value}</span>
                    <span className="number-card-label">{n.label}</span>
                  </BorderGlow>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
