import { useRef } from 'react';

export default function ProjectCard({ title, description, tags = [], github, demo, featured = false, index = 0 }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const idx = String(index + 1).padStart(2, '0');

  function handleMouseMove(e) {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glow.style.background = `radial-gradient(300px circle at ${x}px ${y}px, rgba(167,239,158,0.13), transparent 70%)`;
    glow.style.opacity = '1';
  }

  function handleMouseLeave() {
    if (glowRef.current) glowRef.current.style.opacity = '0';
  }

  return (
    <article
      ref={cardRef}
      className={`card${featured ? ' featured' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* mouse-follow glow layer */}
      <div ref={glowRef} className="card-glow" />

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
