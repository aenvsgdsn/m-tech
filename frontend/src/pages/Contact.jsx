import { useState } from 'react';
import { sendToWhatsApp } from '../utils/whatsapp';
import './Contact.css';

const SOCIAL_LINKS = [
  { name: 'WhatsApp Channel', href: 'https://whatsapp.com/channel/0029Vb7xfFhEFeXs3WWYni0e', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
  { name: 'WhatsApp Community', href: 'https://chat.whatsapp.com/LatEiu6TOh5FuQP6LryrI5', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
  { name: 'YouTube', href: 'https://youtube.com/shorts/4MjwrjIFS64?si=iZefJfu355IMJSw8', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
  { name: 'TikTok', href: 'https://vt.tiktok.com/ZSAMf8AAp/', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.64-.33 3.25-1.18 4.67-1.17 1.95-3.3 3.28-5.59 3.6-2.58.36-5.32-.2-7.24-1.95-1.93-1.74-2.88-4.38-2.51-6.94.34-2.33 1.83-4.4 3.96-5.37 1.61-.74 3.48-.86 5.16-.36v4.06c-.85-.14-1.76-.05-2.55.33-1.02.48-1.73 1.5-1.89 2.6-.14 1.05.21 2.15 1.02 2.87.82.72 1.97.94 3.01.6 1.01-.33 1.78-1.2 1.97-2.25.08-.43.11-.88.11-1.32V.02z"/></svg> },
  { name: 'Facebook', href: 'https://www.facebook.com/share/v/171W1zT2Cv/', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
  { name: 'Instagram', href: 'https://www.instagram.com/reel/DNoVD-AN3an/?igsh=NTY4dm40bXltZHFt', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/m-tech-production-and-marketing-31282337b', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    sendToWhatsApp('📩 Contact / General Inquiry', {
      'Name': form.name,
      'Email': form.email,
      'Subject': form.subject,
      'Message': form.message,
    });
    setSent(true);
  };

  return (
    <>
      <section className="page-hero bg-dark page-hero-img hero-contact">
        <div className="container page-hero__inner">
          <div className="badge">Get in Touch</div>
          <h1>Contact <span className="text-teal">Us</span></h1>
          <p>Have a question, project inquiry, or partnership idea? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">

          {/* Info column */}
          <div className="contact-info">
            <div className="card contact-info-card">
              <h3>Contact Details</h3>
              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <div>
                  <strong>Office</strong>
                  <p>Haripur, Khyber Pakhtunkhwa, Pakistan</p>
                </div>
              </div>
              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.76 19.79 19.79 0 01.09 1.1 2 2 0 012.07 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.6 7.4A16 16 0 0015 15.79l.77-.77a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                <div>
                  <strong>WhatsApp</strong>
                  <a href="https://wa.me/923362222480" target="_blank" rel="noopener noreferrer">+92 336 2222480</a>
                </div>
              </div>
              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <div>
                  <strong>Email</strong>
                  <p>mtechproductionandmarketing@gmail.com</p>
                </div>
              </div>

              <div className="divider" />

              <h4 style={{marginBottom:'16px'}}>Follow Us</h4>
              <div className="contact-social">
                {SOCIAL_LINKS.map((s) => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                     className="contact-social-btn" title={s.name}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="contact-form-wrap">
            <div className="card" style={{padding:'36px'}}>
              <h3 style={{marginBottom:'6px'}}>Send a Message</h3>
              <p style={{marginBottom:'28px', fontSize:'0.9rem'}}>We typically respond within 24 to 48 hours.</p>

              {!sent ? (
                <form onSubmit={handleSubmit}>
                  <div className="grid-2" style={{gap:'16px'}}>
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input name="name" value={form.name} onChange={update} placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                      <label>Email *</label>
                      <input type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input name="subject" value={form.subject} onChange={update} placeholder="How can we help?" />
                  </div>
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea name="message" value={form.message} onChange={update} placeholder="Describe your inquiry..." required style={{minHeight:'140px'}} />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{width:'100%', justifyContent:'center'}}>
                    Send via WhatsApp
                  </button>
                </form>
              ) : (
                <div className="contact-success anim-scale-in">
                  <div className="success-icon">&#10003;</div>
                  <h4>Message Sent!</h4>
                  <p>Thank you for reaching out. We'll get back to you within 24 to 48 hours.</p>
                  <button className="btn btn-outline" style={{marginTop:'16px'}} onClick={() => setSent(false)}>Send Another</button>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Google Maps */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-label">
            <div className="badge">Location</div>
            <h2>Find Us Here</h2>
            <p>Visit our office in Haripur, Khyber Pakhtunkhwa, Pakistan.</p>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106672.21497076596!2d72.8573!3d33.9946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9ae00be08573%3A0xc549c24f8a62e65c!2sHaripur%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{border: 0, borderRadius: '12px'}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="M Tech Office Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
