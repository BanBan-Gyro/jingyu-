import { useLayoutEffect, useRef } from "react";
import { gsap, createParallax } from "../lib/gsapSetup";

const REDUCED =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/**
 * 滚动进场动画（IntersectionObserver 触发，GSAP 驱动）
 * - title：区块大标题蒙版揭示（meta → 标题 → 副标题）
 * - image：图片 clip 揭示 + 内部视差
 * - fade：轻量上移淡入
 * - card（默认）：卡片大幅上移 + 微缩放，若含项目预览则叠加图片揭示与视差
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  variant = "card",
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || REDUCED) return;

    /* 初始隐藏态：挂载时立即设置，避免触发瞬间闪跳 */
    if (variant === "title") {
      const meta = el.querySelector(".section-head-meta");
      const inner = el.querySelector(".title-inner");
      const sub = el.querySelector(".section-sub");
      if (meta) gsap.set(meta, { opacity: 0, y: 28 });
      if (inner) gsap.set(inner, { yPercent: 118 });
      if (sub) gsap.set(sub, { opacity: 0, y: 24 });
    } else if (variant === "image") {
      gsap.set(el, { clipPath: "inset(0 0 100% 0)" });
    } else if (variant === "fade") {
      gsap.set(el, { opacity: 0, y: 36 });
    } else {
      gsap.set(el, { opacity: 0, y: 96, scale: 0.97 });
      const preview = el.querySelector(".project-preview, .work-thumb");
      if (preview) gsap.set(preview, { clipPath: "inset(0 0 100% 0)" });
    }

    const play = () => {
      if (variant === "title") {
        const meta = el.querySelector(".section-head-meta");
        const inner = el.querySelector(".title-inner");
        const sub = el.querySelector(".section-sub");
        const tl = gsap.timeline();
        if (meta) {
          tl.to(meta, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0);
        }
        if (inner) {
          tl.to(inner, { yPercent: 0, duration: 1.2, ease: "expo.out" }, 0.08);
        }
        if (sub) {
          tl.to(sub, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.45");
        }
      } else if (variant === "image") {
        gsap.to(el, {
          clipPath: "inset(0 0 0% 0)",
          duration: 1.3,
          ease: "expo.out",
          delay: delay / 1000,
        });
        const inner = el.querySelector("[data-parallax]");
        if (inner) createParallax({ trigger: el, target: inner });
      } else if (variant === "fade") {
        gsap.to(el, { opacity: 1, y: 0, duration: 1.0, ease: "power3.out", delay: delay / 1000 });
      } else {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.15,
          ease: "power4.out",
          delay: delay / 1000,
        });

        const preview = el.querySelector(".project-preview, .work-thumb");
        if (preview) {
          gsap.to(preview, {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.25,
            ease: "expo.out",
            delay: delay / 1000 + 0.18,
          });
          const cover = preview.querySelector(".project-cover");
          if (cover) createParallax({ trigger: preview, target: cover });
        }
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        play();
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);

    return () => io.disconnect();
  }, [variant, delay]);

  return (
    <Tag ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
