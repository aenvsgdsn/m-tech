import { useState } from 'react';
import RegistrationModal from '../components/RegistrationModal';
import './Marketing365.css';

const PILLARS = [
  { title: 'Brand Strategy', desc: 'Define your positioning, voice, and visual identity from scratch.' },
  { title: 'SEO & SEM', desc: 'Rank on Google organically and dominate paid search results.' },
  { title: 'Social Media Management', desc: 'Consistent posting, community engagement, and growth across all platforms.' },
  { title: 'Content Marketing', desc: 'Blogs, videos, and graphics that attract and convert your audience.' },
  { title: 'Lead Generation', desc: 'Funnels, ads, and landing pages designed to capture and convert leads.' },
  { title: 'Email Marketing', desc: 'Automated campaigns that nurture your audience and drive repeat sales.' },
  { title: 'Influencer Outreach', desc: 'Connect with relevant creators to expand your brand reach.' },
  { title: 'Analytics & Reporting', desc: 'Monthly reports with actionable recommendations.' },
  { title: 'Reputation Management', desc: 'Monitor and manage your online presence and reviews.' },
];

const PLANS = [
  {
    name: 'Starter',
    price: 'Contact for Pricing',
    features: ['Brand Strategy', 'Social Media (2 platforms)', 'Monthly Report', 'Email Support'],
    highlight: false,
  },
  {
    name: 'Growth',
    price: 'Contact for Pricing',
    features: ['All Starter features', 'SEO + Google Ads', 'Content Creation (8 posts/mo)', 'Lead Generation Funnel', 'Weekly Report'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact for Pricing',
    features: ['All Growth features', 'Influencer Outreach', 'Email Automation', 'Reputation Management', 'Analytics Dashboard', 'Dedicated Manager'],
    highlight: false,
  },
];

export default function Marketing365() {
  const [modalOpen, setModalOpen] = useState(false);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  
  const handleGetStarted = (e) => {
    e.preventDefault();
    setInquiryModalOpen(true);
  };

  return (
    <>
      <section className="page-hero bg-dark page-hero-img hero-marketing">
        <div className="container page-hero__inner">
          <div className="badge">All-in-One Marketing</div>
          <h1>Marketing<span className="text-teal">365</span></h1>
          <p>A unified, year-round marketing bundle for startups and businesses that want consistent digital growth.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-label">
            <div className="badge">9 Pillars</div>
            <h2>Everything You Need in One Package</h2>
            <p>Marketing365 covers every aspect of your digital presence so you can focus on running your business.</p>
          </div>
          <div className="grid-3">
            {PILLARS.map((p, i) => (
              <div key={i} className={`card pillar-card anim-fade-up anim-delay-${(i % 4) + 1}`}>
                <div className="pillar-num">{String(i + 1).padStart(2, '0')}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="section-label">
            <div className="badge">Plans</div>
            <h2>Choose Your Package</h2>
            <p>All plans include a dedicated point of contact and monthly performance review.</p>
          </div>
          <div className="grid-3">
            {PLANS.map((plan, i) => (
              <div key={i} className={`card plan-card${plan.highlight ? ' plan-card--highlight' : ''}`}>
                {plan.highlight && <div className="plan-badge">Most Popular</div>}
                <h3>{plan.name}</h3>
                <div className="plan-price">{plan.price}</div>
                <ul className="plan-features">
                  {plan.features.map((f, j) => (
                    <li key={j}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#" onClick={handleGetStarted}
                   className={`btn ${plan.highlight ? 'btn-primary' : 'btn-outline'}`} style={{width:'100%', justifyContent:'center', marginTop:'auto'}}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RegistrationModal open={modalOpen} onClose={() => setModalOpen(false)} />
      
      {/* Marketing 365 Inquiry Modal */}
      {inquiryModalOpen && (
        <div className="modal-overlay" onClick={() => setInquiryModalOpen(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()} style={{maxWidth: '700px'}}>
            <button className="modal-close" onClick={() => setInquiryModalOpen(false)}>&times;</button>
            <h2 style={{marginBottom: '24px'}}>Marketing365 Inquiry</h2>
            <form className="inquiry-form">
              <div className="grid-2" style={{marginBottom: '0'}}>
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label>Phone / WhatsApp *</label>
                  <input type="tel" placeholder="+92 3XX XXXXXXX" required />
                </div>
                <div className="form-group">
                  <label>Company / Organization</label>
                  <input type="text" placeholder="Optional" />
                </div>
                <div className="form-group">
                  <label>Service Category *</label>
                  <select required>
                    <option value="">Select category</option>
                    <option>Brand Strategy</option>
                    <option>Social Media</option>
                    <option>SEO & Ads</option>
                    <option>Full Marketing365 Bundle</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Budget Range</label>
                  <select>
                    <option value="">Select range</option>
                    <option>Under 50k PKR</option>
                    <option>50k - 100k PKR</option>
                    <option>100k+ PKR</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Specific Service Needed *</label>
                <input type="text" placeholder="e.g. Social Media Management for E-commerce" required />
              </div>
              <div className="form-group">
                <label>Project Description *</label>
                <textarea placeholder="Describe your project requirements..." required></textarea>
              </div>
              <div className="form-group" style={{borderTop: '1px dashed var(--border)', paddingTop: '16px'}}>
                <label>Attach Brief (optional — .pdf/.docx/.txt, max 5MB)</label>
                <input type="file" style={{border: 'none', padding: '0'}} />
              </div>
              <button type="submit" className="btn btn-primary" style={{width: '100%', justifyContent: 'center', marginTop: '16px'}}>Submit Inquiry</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
