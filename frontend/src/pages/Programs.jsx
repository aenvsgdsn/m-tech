import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import TabSwitcher from '../components/TabSwitcher';
import RegistrationModal from '../components/RegistrationModal';
import courses from '../data/courses.json';
import './Programs.css';

const CATEGORIES = ['All', 'Web Development', 'App Development', 'Cybersecurity', 'AI & Machine Learning', 'Marketing', 'Design', 'DevOps & Cloud', 'Blockchain'];

const INTERNSHIP_TRACKS = [
  { name: 'Web Development', duration: '6 weeks', mode: 'Remote / On-site', seats: 'Limited', desc: 'Master front-end and back-end web technologies.', icon: '&#60;/&#62;' },
  { name: 'App Development', duration: '6 weeks', mode: 'Remote / On-site', seats: 'Limited', desc: 'Build scalable cross-platform mobile apps.', icon: '&#128241;' },
  { name: 'Cybersecurity', duration: '6 weeks', mode: 'Remote / On-site', seats: 'Limited', desc: 'Learn ethical hacking and secure network systems.', icon: '&#128737;' },
  { name: 'AI & Machine Learning', duration: '6 weeks', mode: 'Remote', seats: 'Limited', desc: 'Train intelligent models and generative AI systems.', icon: '&#129302;' },
  { name: 'Digital Marketing', duration: '6 weeks', mode: 'Remote / On-site', seats: 'Limited', desc: 'Grow brands through SEO, ads, and social media.', icon: '&#128200;' },
  { name: 'UI/UX Design', duration: '6 weeks', mode: 'Remote', seats: 'Limited', desc: 'Design stunning and intuitive user experiences.', icon: '&#127912;' },
  { name: 'DevOps & Cloud', duration: '6 weeks', mode: 'Remote', seats: 'Limited', desc: 'Deploy and scale modern cloud infrastructure.', icon: '&#9729;' },
  { name: 'Blockchain', duration: '6 weeks', mode: 'Remote', seats: 'Limited', desc: 'Develop decentralized applications and smart apps.', icon: '&#9939;' },
];

const BOOTCAMPS = [
  { name: 'AI & Generative AI', duration: '2 weeks', level: 'Intermediate' },
  { name: 'Ethical Hacking Bootcamp', duration: '2 weeks', level: 'Intermediate' },
  { name: 'Full Stack Sprint', duration: '3 weeks', level: 'Intermediate' },
  { name: 'Machine Learning Crash Course', duration: '2 weeks', level: 'Beginner' },
  { name: 'NLP & LLMs Intensive', duration: '2 weeks', level: 'Advanced' },
  { name: 'Flutter Dev Bootcamp', duration: '2 weeks', level: 'Intermediate' },
  { name: 'Cloud Deployment Sprint', duration: '1 week', level: 'Intermediate' },
  { name: 'Digital Marketing Bootcamp', duration: '2 weeks', level: 'Beginner' },
];

const LEVEL_COLORS = { Beginner: '#27AE60', Intermediate: '#F5A623', Advanced: '#E74C3C' };

export default function Programs() {
  const [modalState, setModalState] = useState({ open: false, program: '', track: '' });

  const openModal = (program = '', track = '') => {
    setModalState({ open: true, program, track });
  };
  const closeModal = () => setModalState({ open: false, program: '', track: '' });
  const [catFilter, setCatFilter] = useState('All');
  const [search, setSearch] = useState('');

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const tabName = query.get('tab');
  let initialTab = 0;
  if (tabName === 'internship') initialTab = 1;
  else if (tabName === 'training') initialTab = 2;
  else if (tabName === 'bootcamps') initialTab = 3;

  const filtered = courses.filter(c =>
    (catFilter === 'All' || c.category === catFilter) &&
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className="page-hero programs-hero">
        <div className="programs-hero__bg" />
        <div className="container page-hero__inner" style={{position: 'relative', zIndex: 1}}>
          <div className="badge">Learning Paths</div>
          <h1>Our <span className="text-teal">Programs</span></h1>
          <p>From beginner courses to advanced bootcamps — find the path that fits your goals.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <TabSwitcher tabs={['Courses', 'Internship', 'Training + Internship', 'Bootcamps']} initialTab={initialTab}>

            {/* Courses Tab */}
            <div>
              <div className="programs-toolbar">
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search courses..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                <div className="cat-filters">
                  {CATEGORIES.map(c => (
                    <button key={c} className={`cat-btn${catFilter === c ? ' active' : ''}`} onClick={() => setCatFilter(c)}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>
              <div className="courses-grid">
                {filtered.map((c, i) => (
                  <div key={i} className="course-card card">
                    <div className="course-header">
                      <span className="tag">{c.category}</span>
                      <span className="level-dot" style={{ background: LEVEL_COLORS[c.level] || '#888' }} title={c.level} />
                    </div>
                    <h4>{c.title}</h4>
                    <p style={{fontSize: '0.85rem', color: 'var(--text-mid)', marginBottom: '16px', lineHeight: '1.4'}}>
                      Comprehensive training in {c.title.toLowerCase()} covering essential concepts, industry-standard tools, and real-world applications.
                    </p>
                    <div className="course-meta">
                      <span>{c.duration}</span>
                      <span>{c.level}</span>
                    </div>
                    <button className="btn btn-outline btn-sm" onClick={() => openModal('Course', c.category)}>Apply</button>
                  </div>
                ))}
                {filtered.length === 0 && <p className="no-results">No courses match your search.</p>}
              </div>
            </div>

            {/* Internship Tab */}
            <div>
              <div className="section-label" style={{marginBottom:'32px'}}>
                <h3>Project-Based Internship Program</h3>
                <p>6-week hands-on internship where you build real projects under expert mentorship. Open to university students and fresh graduates.</p>
              </div>
              <div className="internship-info card" style={{marginBottom:'32px'}}>
                <div className="info-grid">
                  <div><strong>Duration</strong><span>6 Weeks (1.5 Months)</span></div>
                  <div><strong>Mode</strong><span>Remote & On-site (Haripur)</span></div>
                  <div><strong>Certificate</strong><span>Verified Completion + LinkedIn</span></div>
                  <div><strong>Fee</strong><span>Free for selected candidates</span></div>
                </div>
              </div>
              <div className="grid-3">
                {INTERNSHIP_TRACKS.map((t, i) => (
                  <div key={i} className="intern-track-card card anim-scale-in" style={{animationDelay: `${i * 0.05}s`}}>
                    <div className="intern-track-header">
                      <div className="intern-track-icon" dangerouslySetInnerHTML={{__html: t.icon}} />
                      <h4>{t.name}</h4>
                    </div>
                    <p className="intern-track-desc">{t.desc}</p>
                    <div className="intern-track-meta">
                      <span>{t.duration}</span>
                      <span className="dot">•</span>
                      <span>{t.mode}</span>
                    </div>
                    <button className="btn btn-outline btn-sm intern-apply-btn" onClick={() => openModal('Internship', t.name)}>Apply for {t.name}</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Training + Internship */}
            <div>
              <div className="two-phase card" style={{marginBottom:'32px'}}>
                <div className="phase">
                  <div className="phase-num">01</div>
                  <h4>Training Phase</h4>
                  <p>Structured learning with a mentor-led curriculum covering your chosen domain from foundations to intermediate level.</p>
                  <span className="tag">6 Weeks</span>
                </div>
                <div className="phase-divider">&#8594;</div>
                <div className="phase">
                  <div className="phase-num">02</div>
                  <h4>Internship Phase</h4>
                  <p>Apply your skills in a real project environment alongside a team, culminating in a portfolio-ready deliverable.</p>
                  <span className="tag">6 Weeks</span>
                </div>
              </div>
              <div className="text-center">
                <p style={{marginBottom:'24px', maxWidth:'500px', margin:'0 auto 24px'}}>
                  Ideal for beginners who need structured training before jumping into project work. Full mentorship throughout both phases.
                </p>
                <button className="btn btn-primary" onClick={() => openModal('Training + Internship')}>Apply for Training + Internship</button>
              </div>
            </div>

            {/* Bootcamps */}
            <div>
              <div className="section-label" style={{marginBottom:'32px', textAlign:'left', alignItems:'flex-start'}}>
                <h3>Intensive Bootcamps</h3>
                <p>Short, focused sessions covering high-demand skills in 1–3 weeks. Ideal for upskilling quickly.</p>
              </div>
              <div className="grid-2">
                {BOOTCAMPS.map((b, i) => (
                  <div key={i} className="bootcamp-card card">
                    <div>
                      <h4 style={{marginBottom:'8px'}}>{b.name}</h4>
                      <p style={{marginBottom:'12px', lineHeight:'1.4'}}>Intensive, hands-on sessions focusing on core {b.name.replace(' Bootcamp', '').replace(' Sprint', '').replace(' Intensive', '')} skills.</p>
                      <p style={{fontWeight:'500'}}>{b.duration} &bull; <span style={{color: LEVEL_COLORS[b.level]}}>{b.level}</span></p>
                    </div>
                    <button className="btn btn-outline btn-sm" onClick={() => openModal('Bootcamp', b.name)} style={{alignSelf: 'flex-start'}}>Enroll</button>
                  </div>
                ))}
              </div>
            </div>

          </TabSwitcher>
        </div>
      </section>

      <RegistrationModal open={modalState.open} onClose={closeModal} defaultProgram={modalState.program} defaultTrack={modalState.track} />
    </>
  );
}
