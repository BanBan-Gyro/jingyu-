export default function SectionHeading({ index, label, title, sub }) {
  return (
    <div className="section-head">
      <div className="section-head-meta">
        <span className="section-index">{index}</span>
        <span className="section-label">{label}</span>
        <span className="section-head-line" aria-hidden="true" />
      </div>
      <h2 className="section-title">
        <span className="title-mask">
          <span className="title-inner">{title}</span>
        </span>
      </h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  );
}
