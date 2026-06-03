import { useState } from 'react';
import services from '../data/services.json';
import './Services.css';

const SERVICE_MESSAGES = {
  'Web Development': "Hi M Tech! I'm interested in your Web Development services. Could you please share more details about pricing and timelines?",
  'App Development': "Hi M Tech! I'd like to inquire about your App Development services. Can you tell me more about the process and costs?",
  'Cybersecurity': "Hi M Tech! I'm looking for Cybersecurity services. Could you share details about your security solutions?",
  'AI & Automation': "Hi M Tech! I'm interested in your AI & Automation services. Can you share more about what you offer?",
  'Digital Marketing': "Hi M Tech! I'd like to learn about your Digital Marketing services. What packages do you have available?",
  'Design & Branding': "Hi M Tech! I'm interested in your Design & Branding services. Could you share your portfolio and pricing?",
  'DevOps & Cloud': "Hi M Tech! I need DevOps & Cloud services. Can you tell me more about your infrastructure solutions?",
  'Blockchain': "Hi M Tech! I'm interested in your Blockchain services. Could you share more details about smart contract development?",
  'Academic & Freelancing': "Hi M Tech! I'd like to know about your Academic & Freelancing support services. Can you help with my project?",
};

export default function Services() {
  const [openCategory, setOpenCategory] = useState(null);

  const handleContactClick = (category) => {
    const message = SERVICE_MESSAGES[category] || `Hi M Tech! I'm interested in your ${category} services. Could you please share more details?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/923362222480?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <section className="page-hero bg-dark page-hero-img hero-services">
        <div className="container page-hero__inner">
          <div className="badge">What We Offer</div>
          <h1>Our <span className="text-teal">Services</span></h1>
          <p>110+ professional digital services across 9 domains, delivered by a team of verified experts.</p>
        </div>
      </section>

      <section className="section">
        <div className="container services-layout">
          <div className="services-sidebar">
            <div className="card" style={{padding:'24px'}}>
              <h4 style={{marginBottom:'16px'}}>Service Domains</h4>
              <ul className="domain-list">
                {services.map((s, i) => (
                  <li key={i}>
                    <span className="domain-count">{s.services.length}</span>
                    {s.category}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card services-cta" style={{marginTop:'20px', padding:'24px', background:'var(--navy)', border:'none'}}>
              <h4 style={{color:'var(--white)', marginBottom:'8px'}}>Need a custom solution?</h4>
              <p style={{color:'rgba(255,255,255,0.7)', fontSize:'0.88rem', marginBottom:'16px'}}>
                Contact us to discuss your specific requirements.
              </p>
              <a href="https://wa.me/923362222480" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{width:'100%', justifyContent:'center'}}>
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="services-main">
            <div className="accordion">
              {services.map((cat, i) => {
                const isOpen = openCategory === i;
                return (
                  <div key={i} className={`accordion__item${isOpen ? ' open' : ''}`}>
                    <button className="accordion__trigger" onClick={() => setOpenCategory(isOpen ? null : i)}>
                      <span>{cat.category} ({cat.services.length} services)</span>
                      <span className="accordion__icon">{isOpen ? '−' : '+'}</span>
                    </button>
                    <div className="accordion__body" style={{ maxHeight: isOpen ? '600px' : '0' }}>
                      <div className="accordion__content">
                        <ul className="service-list">
                          {cat.services.map((s, j) => (
                            <li key={j}>{s}</li>
                          ))}
                        </ul>
                        <button 
                          className="btn btn-service-contact" 
                          onClick={() => handleContactClick(cat.category)}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          Contact for {cat.category}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
