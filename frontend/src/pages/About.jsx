import './About.css';

const TIMELINE = [
  { year: '2021', title: 'Founded', desc: 'Malik Mohazin Zahid started M-Tech as an independent freelancing initiative while studying Cybersecurity at PAF-IAST.' },
  { year: '2022', title: 'First Cohort', desc: 'Launched the first internship cohort with 12 students and 3 mentors, fully online.' },
  { year: '2023', title: 'Office Opened', desc: 'Established a physical office in Haripur, KPK, expanding to on-site programs and team growth.' },
  { year: '2024', title: 'Scaling Up', desc: 'Crossed 500+ students trained, expanded to 75 courses and introduced the Bootcamp format.' },
  { year: '2025', title: 'Community Launch', desc: 'Launched the M-Tech Community with mentors, ambassadors, and a WhatsApp channel of 1000+ members.' },
  { year: '2026', title: 'Today', desc: 'Over 1,000 students trained, 21 mentors, 75+ courses, and growing digital services with 110+ offerings.' },
];

export default function About() {
  return (
    <>
      <section className="page-hero bg-dark page-hero-img hero-about">
        <div className="container page-hero__inner">
          <div className="badge">Our Story</div>
          <h1>Building <span className="text-teal">Pakistan's</span> Tech Future</h1>
          <p>Started by a single student with a vision — now a community of creators, engineers, and mentors.</p>
        </div>
      </section>

      {/* Founder */}
      <section className="section">
        <div className="container about-founder">
          <div className="founder-card card">
            <img src="/assets/founder.jpeg" alt="Malik Mohazin Zahid" className="founder-avatar" />
            <div className="founder-info">
              <div className="badge">Founder & CEO</div>
              <h2>Malik Mohazin Zahid</h2>
              <p>
                A Cybersecurity student at PAF-IAST, Haripur — Malik founded M-Tech to bridge the gap between academic
                education and real-world technical skills in Pakistan. Starting with freelancing projects, he built a
                network of skilled mentors and a platform that has now trained over 1,000 students across the country.
              </p>
              <div className="founder-contact">
                <a href="https://wa.me/923362222480" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  WhatsApp
                </a>
                <a href="https://www.linkedin.com/in/m-tech-production-and-marketing-31282337b" target="_blank" rel="noopener noreferrer" className="btn btn-navy">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-label">
            <div className="badge">Our Values</div>
            <h2>What We Stand For</h2>
          </div>
          <div className="grid-3">
            {[
              { title: 'Practical Learning', desc: 'Every program is built around real projects, not just theory.' },
              { title: 'Accessibility', desc: 'Quality tech education for students across all cities of Pakistan.' },
              { title: 'Mentorship', desc: 'One-on-one guidance from professionals who are active in the industry.' },
              { title: 'Community', desc: 'A growing network of learners, mentors, and alumni who support each other.' },
              { title: 'Integrity', desc: 'Honest pricing, transparent timelines, and verified certificates.' },
              { title: 'Innovation', desc: 'Curriculum that evolves with the industry — AI, blockchain, and beyond.' },
            ].map((v, i) => (
              <div key={i} className="card value-card anim-fade-up">
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className="section-label">
            <div className="badge">History</div>
            <h2>Our Journey</h2>
          </div>
          <div className="timeline">
            {TIMELINE.map((t, i) => (
              <div key={i} className={`timeline-item${i % 2 === 0 ? '' : ' right'}`}>
                <div className="timeline-dot" />
                <div className="timeline-card card">
                  <span className="timeline-year">{t.year}</span>
                  <h4>{t.title}</h4>
                  <p>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
