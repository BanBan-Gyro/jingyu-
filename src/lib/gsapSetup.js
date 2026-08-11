import gsap from "gsap";

export { gsap };

/**
 * 轻量视差：元素滚过视口时，内部目标做 ±amount% 的位移
 * 用 gsap.ticker（rAF）驱动，只读 getBoundingClientRect，远离视口时跳过。
 */
export function createParallax({ trigger, target, amount = 7 }) {
  let active = false;
  let lastY = null;
  const update = () => {
    const rect = trigger.getBoundingClientRect();
    const vh = window.innerHeight || 1;
    if (rect.top > vh || rect.bottom < 0) return;
    const progress = (vh / 2 - (rect.top + rect.height / 2)) / (vh / 2 + rect.height / 2);
    const clamped = Math.max(-1, Math.min(1, progress));
    const y = clamped * amount;
    if (lastY !== y) {
      lastY = y;
      gsap.set(target, { yPercent: y });
    }
  };
  const io = new IntersectionObserver(
    ([entry]) => {
      const was = active;
      active = entry.isIntersecting;
      if (active && !was) {
        gsap.ticker.add(update);
        update();
      } else if (!active && was) {
        gsap.ticker.remove(update);
      }
    },
    { rootMargin: "25% 0px 25% 0px" }
  );
  io.observe(trigger);
  update();
  return () => {
    io.disconnect();
    gsap.ticker.remove(update);
  };
}
