import { useLayoutEffect, useState } from "react";
import HeroBackground from "./HeroBackground";
import { gsap } from "../lib/gsapSetup";

export default function Hero() {
  const [animate] = useState(
    () => !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );

  useLayoutEffect(() => {
    if (!animate) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.to(".opening-panel", {
          yPercent: -101,
          duration: 1.15,
          ease: "power4.inOut",
          stagger: 0.12,
        }, 0.1)
        .fromTo(".hero-bg", { scale: 1.12 }, { scale: 1, duration: 2.4, ease: "power3.out" }, 0.15)
        .fromTo(
          ".hero-title-inner",
          { yPercent: 118 },
          { yPercent: 0, duration: 1.35, ease: "expo.out" },
          0.55
        )
        .fromTo(
          ".hero-title-line",
          { scaleY: 1.14, y: 26 },
          { scaleY: 1, y: 0, duration: 1.25, ease: "expo.out", transformOrigin: "50% 100%" },
          0.55
        )
        .fromTo(
          ".hero-title-en",
          { y: 48, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.95 },
          1.05
        )
        .fromTo(
          ".hero-eyebrow",
          { x: -28, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.75, ease: "power3.out" },
          0.42
        )
        .fromTo(
          ".hero-tagline",
          { y: 32, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, ease: "power3.out" },
          1.25
        )
        .fromTo(
          ".hero-actions",
          { y: 32, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, ease: "power3.out" },
          1.38
        );
    });
    return () => ctx.revert();
  }, [animate]);

  return (
    <section id="home" className="hero">
      {animate && (
        <div className="hero-opening" aria-hidden="true">
          <div className="opening-panel opening-left" />
          <div className="opening-panel opening-right" />
        </div>
      )}

      <HeroBackground />

      <div className="container hero-inner">
        <p className="hero-eyebrow">
          <span className="pulse-dot" />
          PORTFOLIO · 2026 · DATA SCIENCE / AI
        </p>

        <h1 className="hero-title">
          <span className="hero-title-line">
            <span className="hero-title-mask">
              <span className="hero-title-inner">何俊毅</span>
            </span>
          </span>
          <span className="hero-title-en">JUNYI HE</span>
        </h1>

        <p className="hero-tagline">
          把数据变成决策——从取数、建模、实验到工程化交付，端到端解决问题。
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            联系我 <span className="btn-arrow">→</span>
          </a>
          <a href="#projects" className="btn btn-ghost">
            查看精选项目
          </a>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span>SCROLL</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
}
