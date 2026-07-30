import { useState } from 'react';
import { Link } from 'react-router-dom';
import StatsCounter from '../components/StatsCounter';
import RegistrationModal from '../components/RegistrationModal';
import UpdatesSlider from '../components/UpdatesSlider';
import './Home.css';

const STATS = [
  { label: 'Students Trained', value: 1000, suffix: '+' },
  { label: 'Courses Available', value: 75, suffix: '+' },
  { label: 'Expert Mentors', value: 21, suffix: '' },
  { label: 'Projects Completed', value: 1000, suffix: '+' },
];

const HIGHLIGHTS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5"/></svg>
    ),
    title: 'Industry-Led Training',
    desc: 'Learn directly from working professionals through project-based internships and bootcamps.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
    ),
    title: 'Flexible Formats',
    desc: 'Remote and on-site programs to suit every student, from any city across Pakistan.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
    ),
    title: 'Growing Community',
    desc: 'Join 109+ active interns and 21 mentors building real-world solutions together.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
    ),
    title: 'Verified Certificates',
    desc: 'Earn a recognized completion certificate with a LinkedIn recommendation from your mentor.',
  },
];

const TRACKS = [
  { name: 'Web Development', icon: '&#60;/&#62;', desc: 'Master front-end and back-end web technologies.' },
  { name: 'App Development', icon: '&#128241;', desc: 'Build scalable cross-platform mobile apps.' },
  { name: 'Cybersecurity', icon: '&#128737;', desc: 'Learn ethical hacking and secure network systems.' },
  { name: 'AI & Machine Learning', icon: '&#129302;', desc: 'Train intelligent models and generative AI systems.' },
  { name: 'Digital Marketing', icon: '&#128200;', desc: 'Grow brands through SEO, ads, and social media.' },
  { name: 'UI/UX Design', icon: '&#127912;', desc: 'Design stunning and intuitive user experiences.' },
];

export default function Home() {
  const [modalState, setModalState] = useState({ open: false, program: '', track: '' });

  const openModal = (program = '', track = '') => {
    setModalState({ open: true, program, track });
  };
  const closeModal = () => setModalState({ open: false, program: '', track: '' });

  return (
    <>
      {/* ---- Hero ---- */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="container hero__content">
          <div className="badge anim-fade-up">Summer 2026 Internship Now Open</div>
          <h1 className="anim-fade-up anim-delay-1">
            Elevate Your <span className="text-teal">Digital Career</span><br />
            with M-Tech
          </h1>
          <p className="hero__sub anim-fade-up anim-delay-2">
            Pakistan's leading platform for tech internships, professional courses, and digital services.
            Based in Haripur, KPK. Accessible nationwide.
          </p>
          <div className="hero__actions anim-fade-up anim-delay-3">
            <button className="btn btn-primary" onClick={() => openModal('Internship')}>
              Apply for Internship
            </button>
            <Link to="/programs" className="btn btn-white">
              Browse Programs
            </Link>
          </div>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#F8F9FC"/>
          </svg>
        </div>
      </section>

      {/* ---- Stats ---- */}
      <section className="section-sm bg-off-white">
        <div className="container">
          <StatsCounter stats={STATS} />
        </div>
      </section>

      {/* ---- Why M-Tech ---- */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="section-label">
            <div className="badge">Why M-Tech</div>
            <h2>Built for Real-World Impact</h2>
            <p>We don't just teach. We mentor, build, and launch. Every program is designed to deliver practical results.</p>
          </div>
          <div className="grid-4">
            {HIGHLIGHTS.map((h, i) => (
              <div key={i} className={`card highlight-card anim-fade-up anim-delay-${i + 1}`}>
                <div className="highlight-icon">{h.icon}</div>
                <h4>{h.title}</h4>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- About Preview ---- */}
      <section className="section bg-white">
        <div className="container about-preview">
          <div className="about-preview-content">
            <div className="badge">About Us</div>
            <h2>Empowering the Next Generation of Tech Leaders</h2>
            <p>
              M Tech Production and Marketing is dedicated to bridging the gap between academic learning and industry requirements. 
              Based in Pakistan, we provide a dynamic platform for university students and fresh graduates to gain real world 
              experience through project based learning and expert mentorship.
            </p>
            <Link to="/about" className="btn btn-outline" style={{marginTop:'16px'}}>Know More About Us</Link>
          </div>
          <div className="about-preview-img-wrap anim-scale-in">
            <img src="/assets/home-about.jpeg" alt="About M-Tech" className="about-preview-img" />
            <div className="about-img-decor"></div>
          </div>
        </div>
      </section>

      <UpdatesSlider />

      {/* ---- Tracks ---- */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-label">
            <div className="badge">Internship Tracks</div>
            <h2>Choose Your Field</h2>
            <p>Hands-on, project-based internships across the most in-demand technology domains.</p>
          </div>
          <div className="grid-3">
            {TRACKS.map((t, i) => (
              <button key={i} onClick={() => openModal('Internship', t.name)} className={`track-card card anim-fade-up anim-delay-${(i % 4) + 1}`} style={{textAlign:'left', cursor:'pointer'}}>
                <div className="track-icon-wrap">
                  <span className="track-icon" dangerouslySetInnerHTML={{__html: t.icon}} />
                </div>
                <div className="track-info">
                  <h4>{t.name}</h4>
                  <p>{t.desc}</p>
                </div>
                <span className="track-arrow">&#8594;</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Careers Preview ---- */}
      <section className="section bg-white">
        <div className="container about-preview" style={{ gap: '60px' }}>
          <div className="about-preview-img-wrap anim-scale-in" style={{ order: 1 }}>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Join Our Team" className="about-preview-img" style={{ borderRadius: '16px' }} />
            <div className="about-img-decor" style={{ left: '-20px', right: 'auto', background: 'var(--teal)' }}></div>
          </div>
          <div className="about-preview-content" style={{ order: 2 }}>
            <div className="badge">We Are Hiring</div>
            <h2>Build Your Career with Us</h2>
            <p>
              Looking for an internship in your favorite tech stack? We are currently hiring passionate individuals for various roles including Full Stack Development, Mobile App Development, and AI Automation. Join our dynamic team and work on real-world projects.
            </p>
            <Link to="/careers" className="btn btn-primary" style={{marginTop:'16px'}}>Explore Opportunities</Link>
          </div>
        </div>
      </section>

      {/* ---- CTA Strip ---- */}
      <section className="cta-strip bg-navy">
        <div className="container cta-strip__inner">
          <div>
            <h2>Ready to Start Your Tech Career?</h2>
            <p>Join hundreds of students who transformed their skills through M-Tech programs.</p>
          </div>
          <div className="cta-strip__btns">
            <button className="btn btn-primary" onClick={() => openModal()}>Apply Now</button>
            <Link to="/contact" className="btn btn-white">Contact Us</Link>
          </div>
        </div>
      </section>

      <RegistrationModal open={modalState.open} onClose={closeModal} defaultProgram={modalState.program} defaultTrack={modalState.track} />
    </>
  );
}
