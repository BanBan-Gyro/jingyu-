import { useEffect, useLayoutEffect, useState } from "react";
import { gsap } from "../lib/gsapSetup";

const LINKS = [
  { id: "about", label: "经历" },
  { id: "projects", label: "项目" },
  { id: "strengths", label: "优势" },
  { id: "contact", label: "联系" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".navbar-inner", {
        y: -28,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 1.25,
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const sections = ["home", ...LINKS.map((l) => l.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-38% 0px -55% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <a href="#home" className="brand">
          <span className="brand-mark">HY</span>
          <span className="brand-name">
            何俊毅 <em>JUNYI HE</em>
          </span>
        </a>

        <nav className="nav-links" aria-label="主导航">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? "is-active" : ""}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav-cta">
          联系我
        </a>
      </div>
    </header>
  );
}
