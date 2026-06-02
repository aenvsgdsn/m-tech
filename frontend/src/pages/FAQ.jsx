import Accordion from '../components/Accordion';
import faqs from '../data/faqs.json';
import './FAQ.css';

export default function FAQ() {
  return (
    <>
      <section className="page-hero bg-dark page-hero-img hero-faq">
        <div className="container page-hero__inner">
          <div className="badge">Common Questions</div>
          <h1>Frequently Asked <span className="text-teal">Questions</span></h1>
          <p>Everything you need to know about our programs, applications, and how M-Tech works.</p>
        </div>
      </section>

      <section className="section">
        <div className="container faq-layout">
          <div className="faq-main">
            <Accordion items={faqs} />
          </div>
          <div className="faq-sidebar">
            <div className="card faq-cta">
              <h4>Still have questions?</h4>
              <p>Our team is available on WhatsApp. Reach out and we'll respond quickly.</p>
              <a href="https://wa.me/923362222480" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{width:'100%', justifyContent:'center', marginTop:'16px'}}>
                Message on WhatsApp
              </a>
            </div>
            <div className="card" style={{padding:'24px', marginTop:'20px'}}>
              <h4 style={{marginBottom:'14px'}}>Join Our Community</h4>
              <p style={{fontSize:'0.88rem', marginBottom:'16px'}}>Get updates on new batches, webinars, and opportunities directly on WhatsApp.</p>
              <a href="https://chat.whatsapp.com/LatEiu6TOh5FuQP6LryrI5" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{width:'100%', justifyContent:'center'}}>
                Join Community
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
