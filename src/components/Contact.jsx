import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Aurora from "./Aurora";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-aurora" aria-hidden="true">
        <Aurora
          colorStops={["#000000", "#7c6cf5", "#4c46b8"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <div className="container contact-inner">
        <Reveal variant="title">
          <SectionHeading
            index="04"
            label="GET IN TOUCH"
            title="开始一次对话"
          />
        </Reveal>

        <Reveal delay={80}>
          <p className="contact-lead">
            如果你在找一位能把数据问题从取数一路解决到落地的人，
            <br />
            欢迎随时联系我。
          </p>
        </Reveal>

        <Reveal delay={140}>
          <a className="contact-email" href="mailto:1457386897@qq.com">
            <span className="contact-email-label">EMAIL ME</span>
            1457386897@qq.com
            <span className="contact-email-arrow" aria-hidden="true">↗</span>
          </a>
        </Reveal>

        <Reveal delay={200}>
          <div className="contact-rows">
            <div className="contact-row">
              <span className="contact-row-key">电话</span>
              <a href="tel:+8615920984768">(+86) 159-2098-4768</a>
            </div>
            <div className="contact-row">
              <span className="contact-row-key">微信</span>
              <span>15920984768</span>
            </div>
          </div>
        </Reveal>
      </div>

      <footer className="site-footer">
        <div className="container site-footer-inner">
          <span>© 2026 何俊毅 · JUNYI HE</span>
          <span className="site-footer-mid">数据科学家 / AI 全栈工程师</span>
          <span>Built with React + Vite</span>
        </div>
      </footer>
    </section>
  );
}
