import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import TabSwitcher from '../components/TabSwitcher';
import mentors from '../data/mentors.json';
import interns from '../data/interns.json';
import './Community.css';

const TRACKS = ['All', 'Web Development', 'AI/ML', 'Artificial Intelligence', 'Cybersecurity', 'Design', 'Graphic Designing', 'Digital Marketing', 'App Development'];
const MENTOR_TYPES = ['All', 'Roadmap Contributor + Mentor', 'Industry Expert / Mentor'];

const TRACK_COLORS = {
  'Web Development': '#3B82F6',
  'AI/ML': '#8B5CF6',
  'Artificial Intelligence': '#8B5CF6',
  'AI/ML & Web Development': '#6366F1',
  'Cybersecurity': '#EF4444',
  'Design': '#F59E0B',
  'Graphic Designing': '#EC4899',
  'Digital Marketing': '#10B981',
  'App Development': '#06B6D4',
  'DESIGN DEPARTMENT': '#F59E0B',
};

function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
}

function getTrackColor(track) {
  for (const key of Object.keys(TRACK_COLORS)) {
    if (track?.toUpperCase().includes(key.toUpperCase())) return TRACK_COLORS[key];
  }
  return '#1A3C6E';
}

export default function Community() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const tabName = query.get('tab');
  let initialTab = 0;
  if (tabName === 'mentors') initialTab = 1;
  else if (tabName === 'ambassadors') initialTab = 2;

  const [trackFilter, setTrackFilter] = useState('All');
  const [mentorTypeFilter, setMentorTypeFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredInterns = interns.filter(i =>
    (trackFilter === 'All' || i.track === trackFilter) &&
    (i.name.toLowerCase().includes(search.toLowerCase()))
  );

  function orderMentors(list) {
    const copy = Array.from(list);
    // bring Omama (match by first name) to front
    const omamaIndex = copy.findIndex(m => m.name.toLowerCase().startsWith('omama'));
    if (omamaIndex > -1) {
      const [omama] = copy.splice(omamaIndex, 1);
      copy.unshift(omama);
    }
    // move Saleha to the 5th position
    const salehaIndex = copy.findIndex(m => m.name.toLowerCase().includes('saleha'));
    if (salehaIndex > -1) {
      const [saleha] = copy.splice(salehaIndex, 1);
      copy.splice(4, 0, saleha);
    }
    return copy;
  }

  const filteredMentors = orderMentors(mentors.filter(m =>
    (mentorTypeFilter === 'All' || m.type === mentorTypeFilter) &&
    (m.name.toLowerCase().includes(search.toLowerCase()) || m.specialization.toLowerCase().includes(search.toLowerCase()))
  ));

  return (
    <>
      <section className="page-hero bg-navy page-hero-img hero-community">
        <div className="container page-hero__inner">
          <div className="badge">Join Us</div>
          <h1>The <span className="text-teal">M-Tech</span> Community</h1>
          <p>109+ interns, 21 mentors, and a growing network of tech builders across Pakistan.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <TabSwitcher tabs={['Interns (109+)', 'Mentors (21)', 'Ambassadors']} initialTab={initialTab}>

            {/* Interns Tab */}
            <div>
              <div className="community-toolbar">
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search interns..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                <div className="cat-filters" style={{flexWrap:'wrap'}}>
                  {TRACKS.map(t => (
                    <button key={t} className={`cat-btn${trackFilter === t ? ' active' : ''}`} onClick={() => setTrackFilter(t)}>{t}</button>
                  ))}
                </div>
              </div>

              <div className="interns-grid">
                {filteredInterns.map((intern) => (
                  <div key={intern.id} className="intern-card card">
                    <div className="intern-avatar" style={{background: getTrackColor(intern.track)}}>
                      {getInitials(intern.name)}
                    </div>
                    <div className="intern-info">
                      <h4>{intern.name}</h4>
                      <span className="intern-track tag" style={{background: `${getTrackColor(intern.track)}18`, color: getTrackColor(intern.track)}}>
                        {intern.track}
                      </span>
                      <p className="intern-dates">{intern.start} — {intern.end}</p>
                    </div>
                  </div>
                ))}
              </div>
              {filteredInterns.length === 0 && <p className="no-results">No interns found.</p>}
              <div className="community-stats">
                <span>Showing {filteredInterns.length} of {interns.length} interns</span>
              </div>
            </div>

            {/* Mentors Tab */}
            <div>
              <div className="community-toolbar">
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search mentors by name or skill..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                <div className="cat-filters">
                  {MENTOR_TYPES.map(t => (
                    <button key={t} className={`cat-btn${mentorTypeFilter === t ? ' active' : ''}`} onClick={() => setMentorTypeFilter(t)}>
                      {t === 'All' ? 'All' : t === 'Roadmap Contributor + Mentor' ? 'Roadmap Contributors' : 'Industry Experts'}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mentors-grid">
                {filteredMentors.map(mentor => (
                  <a key={mentor.id} href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="mentor-card card">
                    <div className="mentor-avatar">
                      {getInitials(mentor.name)}
                    </div>
                    <div className="mentor-info">
                      <h4>{mentor.name}</h4>
                      <p className="mentor-role">{mentor.role}</p>
                      <div className="mentor-skills">
                        {mentor.specialization.split(', ').slice(0, 3).map((s, i) => (
                          <span key={i} className="tag">{s}</span>
                        ))}
                      </div>
                      <span className={`mentor-type-badge ${mentor.type.includes('Roadmap') ? 'badge-teal' : 'badge-navy'}`}>
                        {mentor.type.includes('Roadmap') ? '⭐ Roadmap Contributor' : '🏢 Industry Expert'}
                      </span>
                    </div>
                    <div className="mentor-linkedin-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Ambassadors Tab */}
            <div>
              <div className="ambassador-info card" style={{textAlign:'center', padding:'48px 32px'}}>
                <div style={{fontSize:'3rem', marginBottom:'16px'}}>🌟</div>
                <h3>Ambassador Program Coming Soon</h3>
                <p style={{maxWidth:'480px', margin:'12px auto 24px'}}>
                  We're launching our Campus Ambassador Program — representing M-Tech at universities across Pakistan. Be the first to apply!
                </p>
                <a href="https://wa.me/923362222480?text=I%20want%20to%20apply%20for%20M-Tech%20Ambassador%20Program" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Apply to Be an Ambassador
                </a>
              </div>
            </div>

          </TabSwitcher>
        </div>
      </section>
    </>
  );
}
