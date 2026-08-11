import { useEffect, useState } from "react";
import Plasma from "./Plasma";

/**
 * Hero 背景：
 * - 默认渲染 React Bits 的 Plasma（WebGL 等离子流体），支持鼠标交互
 * - 如需真实视频背景，将任意 MP4 放到 public/hero-bg.mp4，会自动切换为视频
 */
export default function HeroBackground() {
  const [hasVideo, setHasVideo] = useState(false);

  useEffect(() => {
    fetch("/hero-bg.mp4", { method: "HEAD" })
      .then((res) => {
        const type = res.headers.get("content-type") || "";
        if (res.ok && type.startsWith("video/")) setHasVideo(true);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="hero-bg" aria-hidden="true">
      {hasVideo ? (
        <video
          className="hero-video"
          src="/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <div className="hero-plasma">
          <Plasma
            color="#8b6cf5"
            speed={0.6}
            direction="pingpong"
            scale={1.15}
            opacity={0.75}
            mouseInteractive
            renderScale={0.45}
            maxDpr={1.5}
            targetFps={24}
            iterations={44}
          />
        </div>
      )}
      <div className="hero-grid" />
      <div className="hero-vignette" />
    </div>
  );
}
