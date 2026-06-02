import { useEffect, useRef, useState } from 'react';

function easeOutQuad(t) { return t * (2 - t); }

export default function StatsCounter({ stats }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const startTime = performance.now();
    const animate = (now) => {
      const elapsed = now - startTime;
      const p = Math.min(elapsed / duration, 1);
      const eased = easeOutQuad(p);
      setCounts(stats.map((s) => Math.floor(eased * s.value)));
      if (p < 1) requestAnimationFrame(animate);
      else setCounts(stats.map((s) => s.value));
    };
    requestAnimationFrame(animate);
  }, [started]);

  return (
    <div ref={ref} className="stats-grid">
      {stats.map((s, i) => (
        <div key={i} className="stat-card">
          <div className="stat-number">
            {counts[i].toLocaleString()}{s.suffix || ''}
          </div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
