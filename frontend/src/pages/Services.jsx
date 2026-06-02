import Accordion from '../components/Accordion';
import services from '../data/services.json';
import './Services.css';

export default function Services() {
  const accordionItems = services.map(s => ({
    title: `${s.category} (${s.services.length} services)`,
    services: s.services,
  }));

  return (
    <>
      <section className="page-hero bg-dark page-hero-img hero-services">
        <div className="container page-hero__inner">
          <div className="badge">What We Offer</div>
          <h1>Our <span className="text-teal">Services</span></h1>
          <p>110+ professional digital services across 9 domains — delivered by a team of verified experts.</p>
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
            <Accordion items={accordionItems} />
          </div>
        </div>
      </section>
    </>
  );
}
