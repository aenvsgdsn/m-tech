import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import TabSwitcher from '../components/TabSwitcher';
import webinars from '../data/webinars.json';
import opportunities from '../data/opportunities.json';
import { sendToWhatsApp } from '../utils/whatsapp';
import './Explore.css';

const WEBINAR_CATS = ['All', 'AI & ML', 'Cybersecurity', 'Data Science', 'Web Dev', 'App Dev', 'Design', 'Marketing', 'Special'];
const OPP_TYPES = ['All', 'National', 'International'];

const CAT_COLORS = {
  'AI & ML': '#8B5CF6',
  'Cybersecurity': '#EF4444',
  'Data Science': '#3B82F6',
  'Web Dev': '#10B981',
  'App Dev': '#06B6D4',
  'Design': '#F59E0B',
  'Marketing': '#EC4899',
  'Special': '#6366F1',
};

export default function Explore() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const tabName = query.get('tab');
  let initialTab = 0;
  if (tabName === 'collaborate') initialTab = 1;

  const [catFilter, setCatFilter] = useState('All');
  const [oppType, setOppType] = useState('All');
  const [collab, setCollab] = useState({ name: '', org: '', idea: '', contact: '' });
  const [collabSent, setCollabSent] = useState(false);

  const filteredWebinars = webinars.filter(w =>
    catFilter === 'All' || w.category === catFilter
  );

  const filteredOpps = opportunities.filter(o =>
    oppType === 'All' || o.type === oppType
  );

  const handleCollab = (e) => {
    e.preventDefault();
    sendToWhatsApp('🤝 Collaboration Proposal', {
      'Name': collab.name,
      'Organization': collab.org,
      'Project / Idea': collab.idea,
      'Contact': collab.contact,
    });
    setCollabSent(true);
  };

  return (
    <>
      <section className="page-hero bg-dark page-hero-img hero-explore">
        <div className="container page-hero__inner">
          <div className="badge">Discover More</div>
          <h1>Explore <span className="text-teal">Opportunities</span></h1>
          <p>Weekly webinars, funding opportunities, and collaboration proposals — all in one place.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <TabSwitcher tabs={['Webinars', 'Collaborate']} initialTab={initialTab}>

            {/* Webinars */}
            <div>
              <div className="explore-toolbar">
                <div className="badge" style={{ marginBottom: 0 }}>📅 Sunday Webinar Schedule 2026–2027 (52 sessions)</div>
                <div className="cat-filters" style={{ flexWrap: 'wrap' }}>
                  {WEBINAR_CATS.map(c => (
                    <button key={c} className={`cat-btn${catFilter === c ? ' active' : ''}`} onClick={() => setCatFilter(c)}>{c}</button>
                  ))}
                </div>
              </div>

              <div className="webinars-table-wrap">
                <table className="webinars-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Session</th>
                      <th>Topic</th>
                      <th>Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredWebinars.map((w, i) => (
                      <tr key={i} className={w.week === 'Special' ? 'special-row' : ''}>
                        <td className="webinar-date">{w.date}</td>
                        <td className="webinar-week">{w.week}</td>
                        <td className="webinar-topic">{w.topic}</td>
                        <td>
                          <span className="webinar-cat-tag" style={{
                            background: `${CAT_COLORS[w.category] || '#1A3C6E'}18`,
                            color: CAT_COLORS[w.category] || '#1A3C6E'
                          }}>
                            {w.category}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="webinar-join-cta">
                <a href="https://whatsapp.com/channel/0029Vb7xfFhEFeXs3WWYni0e" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Join WhatsApp Channel for Webinar Links
                </a>
              </div>
            </div>

            {/* Collaborate */}
            <div>
              <div className="grid-2" style={{ gap: '32px', alignItems: 'start' }}>
                <div>
                  <div className="badge" style={{ marginBottom: '14px' }}>🤝 Partner With M-Tech</div>
                  <h3>Collaborate With Us</h3>
                  <p style={{ marginBottom: '20px' }}>We're open to collaborations with universities, companies, NGOs, and individual researchers. Share your idea and let's build something together.</p>
                  <div className="collab-points">
                    {['University Partnerships', 'Corporate Training Programs', 'Joint Research Projects', 'Event Co-hosting', 'Sponsorships & Grants', 'Guest Mentoring'].map((p, i) => (
                      <div key={i} className="collab-point">
                        <span className="check-icon">✓</span> {p}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="card" style={{ padding: '32px' }}>
                  <h4 style={{ marginBottom: '20px' }}>Submit a Collaboration Proposal</h4>
                  {!collabSent ? (
                    <form onSubmit={handleCollab}>
                      <div className="form-group">
                        <label>Your Name *</label>
                        <input value={collab.name} onChange={e => setCollab({ ...collab, name: e.target.value })} placeholder="Full name" required />
                      </div>
                      <div className="form-group">
                        <label>Organization / University</label>
                        <input value={collab.org} onChange={e => setCollab({ ...collab, org: e.target.value })} placeholder="Your organization" />
                      </div>
                      <div className="form-group">
                        <label>Project / Collaboration Idea *</label>
                        <textarea value={collab.idea} onChange={e => setCollab({ ...collab, idea: e.target.value })} placeholder="Describe your idea..." required style={{ minHeight: '100px' }} />
                      </div>
                      <div className="form-group">
                        <label>WhatsApp / Email *</label>
                        <input value={collab.contact} onChange={e => setCollab({ ...collab, contact: e.target.value })} placeholder="+92 or email" required />
                      </div>
                      <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                        Send via WhatsApp
                      </button>
                    </form>
                  ) : (
                    <div style={{ textAlign: 'center', padding: '32px 0' }}>
                      <div style={{ fontSize: '3rem', marginBottom: '12px' }}>✅</div>
                      <h4>Proposal Sent!</h4>
                      <p>We'll review your collaboration idea and get back to you soon.</p>
                      <button className="btn btn-outline" style={{ marginTop: '16px' }} onClick={() => setCollabSent(false)}>Submit Another</button>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </TabSwitcher>
        </div>
      </section>
    </>
  );
}
