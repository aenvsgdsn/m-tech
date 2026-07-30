import { Link } from 'react-router-dom';
import './Careers.css';

const STACKS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Full Stack Developer',
    tags: ['React', 'Node.js', 'MongoDB'],
    desc: 'Build end-to-end web solutions — from pixel-perfect UIs to scalable server-side logic.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/>
      </svg>
    ),
    title: 'Mobile App Developer',
    tags: ['Flutter', 'React Native', 'Dart'],
    desc: 'Create smooth, cross-platform mobile apps that deliver exceptional user experiences.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'AI Automation Engineer',
    tags: ['Python', 'LangChain', 'OpenAI'],
    desc: 'Design intelligent systems and automate complex workflows using cutting-edge AI tools.',
  },
];

const PERKS = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5"/></svg>,
    title: 'Industry Mentorship',
    desc: 'Learn from working professionals on real client projects.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    title: 'Real-World Experience',
    desc: 'Ship actual products used by businesses across Pakistan.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
    title: 'Verified Certificate',
    desc: 'Earn a recognized certificate with a LinkedIn recommendation.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
    title: 'Growing Network',
    desc: 'Join 109+ interns and 21 mentors building solutions together.',
  },
];
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSemliER29yPDA3QxXJbQWSAyERaihbag3Gv6HbO81E6SRZHVw/viewform?usp=preview';
export default function Careers() {
  return (
    <div className="careers-page">

      {/* ---- Hero ---- */}
      <section className="page-hero-img hero-careers">
        <div className="container">
          <div className="careers-hero__content anim-fade-up">
            <div className="badge">We Are Hiring</div>
            <h1>Launch Your Career in <span className="text-teal">Tech</span></h1>
            <p>
              Internships across the most in-demand stacks — full stack, mobile, and AI.
              Real projects. Real mentors. Real growth.
            </p>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary careers-hero-btn anim-fade-up anim-delay-2"
            >
              Join Us
            </a>
          </div>
        </div>
      </section>

      {/* ---- Open Positions ---- */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="section-label">
            <div className="badge">Open Positions</div>
            <h2>Choose Your Stack</h2>
            <p>Hands-on internships tailored to your field of passion and expertise.</p>
          </div>
          <div className="grid-3">
            {STACKS.map((s, i) => (
              <div key={i} className={`card careers-stack-card anim-fade-up anim-delay-${i + 1}`}>
                <div className="careers-stack-icon">{s.icon}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
                <div className="careers-tags">
                  {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ marginTop: '16px', width: '100%', justifyContent: 'center' }}
                >
                  Join Us
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Why Join Us / Apply ---- */}
      <section className="section bg-white">
        <div className="container">
          <div className="careers-grid">
            
            <div className="careers-info anim-fade-up anim-delay-1">
              <div className="badge">Why Join M-Tech?</div>
              <h2>Grow Fast. Build Real. Get Certified.</h2>
              <p>
                M Tech Production &amp; Marketing gives you more than an internship — you get a launchpad.
                Work on live projects, receive expert mentorship, and walk away with a verified portfolio
                that employers actually notice.
              </p>
              
              <div className="careers-perks-grid">
                {PERKS.map((p, i) => (
                  <div key={i} className="careers-perk-item">
                    <div className="careers-perk-icon">{p.icon}</div>
                    <div>
                      <h4>{p.title}</h4>
                      <p>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="careers-form-wrap anim-scale-in anim-delay-2">
              <div className="careers-form card" style={{ textAlign: 'center', padding: '60px 40px' }}>
                <h3>Ready to Apply?</h3>
                <p className="form-sub" style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>
                  Click the button below to fill out our official application form on Google Forms.
                </p>
                <a 
                  href={GOOGLE_FORM_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary" 
                  style={{ display: 'inline-block', width: '100%', padding: '16px', fontSize: '1.1rem' }}
                >
                  Join Us
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---- Apply CTA ---- */}
      <section className="cta-strip bg-navy">
        <div className="container cta-strip__inner">
          <div>
            <h2>Ready to Start?</h2>
            <p>Limited seats available — Summer 2026 batch now open.</p>
          </div>
          <div className="cta-strip__btns">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Join Us
            </a>
            <Link to="/contact" className="btn btn-white">Contact Us</Link>
          </div>
        </div>
      </section>

    </div>
  );
}