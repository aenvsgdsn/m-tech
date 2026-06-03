import './About.css';
import mentors from '../data/mentors.json';

const TIMELINE = [
  { year: '2021', title: 'Founded', desc: 'Mohazin Zahid started M Tech as an independent freelancing initiative while studying Cybersecurity at PAF IAST.' },
  { year: '2022', title: 'First Cohort', desc: 'Launched the first internship cohort with 12 students and 3 mentors, fully online.' },
  { year: '2023', title: 'Office Opened', desc: 'Established a physical office in Haripur, KPK, expanding to on site programs and team growth.' },
  { year: '2024', title: 'Scaling Up', desc: 'Crossed 500+ students trained, expanded to 75 courses and introduced the Bootcamp format.' },
  { year: '2025', title: 'Community Launch', desc: 'Launched the M Tech Community with mentors, ambassadors, and a WhatsApp channel of 1000+ members.' },
  { year: '2026', title: 'Today', desc: 'Over 1,000 students trained, 21 mentors, 75+ courses, and growing digital services with 110+ offerings.' },
];

export default function About() {
  return (
    <>
      <section className="page-hero bg-dark page-hero-img hero-about">
        <div className="container page-hero__inner">
          <div className="badge">Our Story</div>
          <h1>Building <span className="text-teal">Pakistan's</span> Tech Future</h1>
          <p>Started by a single student with a vision, now a community of creators, engineers, and mentors.</p>
        </div>
      </section>

      {/* Founder */}
      <section className="section">
        <div className="container about-founder">
          <div className="founder-card card">
            <img src="/assets/founder.jpeg" alt="Mohazin Zahid" className="founder-avatar" />
            <div className="founder-info">
              <div className="badge">Founder & CEO</div>
              <h2>Mohazin Zahid</h2>
              <p>
                Mohazin Zahid is an entrepreneur, technology enthusiast, and cybersecurity student dedicated to 
                bridging the gap between academic learning and industry requirements. Currently pursuing a BS in 
                Cybersecurity at Pak Austria Fachhochschule: Institute of Applied Sciences and Technology (PAF IAST), 
                Haripur, he combines technical knowledge with leadership, entrepreneurship, and project management 
                experience. As the Founder and CEO of M Tech Production & Marketing, he is committed to creating 
                opportunities for students, startups, and professionals through practical learning, industry exposure, 
                and technology driven solutions. Under his leadership, M Tech has grown into a digital ecosystem 
                providing technology services, training programs, mentorship opportunities, and industry collaborations 
                across emerging fields including AI, Cybersecurity, Data Science, Software Development, Digital Marketing, 
                and Entrepreneurship.
              </p>
              <p className="founder-philosophy">
                <em>"Your Success Is Our Mission."</em> He strongly believes that consistency is more valuable than 
                talent alone, that learning by doing is the most effective form of education, and that sustainable 
                success comes from helping others grow alongside you.
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
              { title: 'Mentorship', desc: 'One on one guidance from professionals who are active in the industry.' },
              { title: 'Community', desc: 'A growing network of learners, mentors, and alumni who support each other.' },
              { title: 'Integrity', desc: 'Honest pricing, transparent timelines, and verified certificates.' },
              { title: 'Innovation', desc: 'Curriculum that evolves with the industry including AI, blockchain, and beyond.' },
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

      {/* Mentor List */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-label">
            <div className="badge">Our Team</div>
            <h2>Meet Our Mentors</h2>
            <p>Industry professionals and experts guiding the next generation of tech leaders.</p>
          </div>
          <div className="grid-3 mentor-grid">
                    {(() => {
                      const orderMentors = (list) => {
                        const copy = Array.from(list);
                        const omamaIndex = copy.findIndex(m => m.name.toLowerCase().startsWith('omama'));
                        if (omamaIndex > -1) {
                          const [omama] = copy.splice(omamaIndex, 1);
                          copy.unshift(omama);
                        }
                        const salehaIndex = copy.findIndex(m => m.name.toLowerCase().includes('saleha'));
                        if (salehaIndex > -1) {
                          const [saleha] = copy.splice(salehaIndex, 1);
                          copy.push(saleha);
                        }
                        return copy;
                      };
                      return orderMentors(mentors).map((mentor) => (
                        <div key={mentor.id} className="card mentor-card anim-fade-up">
                <div className="mentor-avatar-placeholder">
                  {mentor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div className="mentor-details">
                  <h4>{mentor.name}</h4>
                  <p className="mentor-role">{mentor.role}</p>
                  <p className="mentor-spec">{mentor.specialization}</p>
                  <span className="mentor-type-badge">{mentor.type}</span>
                  <a 
                    href={mentor.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline mentor-linkedin"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
