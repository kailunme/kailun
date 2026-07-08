export default function ProjectCard({ title, description, tags = [], github, demo, featured = false, index = 0 }) {
  const idx = String(index + 1).padStart(2, '0');

  return (
    <article className={`card${featured ? ' featured' : ''}`}>
      <div className="card-index">{idx}</div>
      <div className="card-body">
        <div className="card-head">
          <h3 className="card-title">{title}</h3>
          {featured && <span className="badge">featured</span>}
        </div>
        <p className="card-desc">{description}</p>
        <div className="card-tags">
          {tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
      <div className="card-footer">
        {github && (
          <a href={github} target="_blank" rel="noopener" className="card-link">
            <span className="link-arrow">→</span> source
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener" className="card-link">
            <span className="link-arrow">→</span> live
          </a>
        )}
      </div>
    </article>
  );
}
