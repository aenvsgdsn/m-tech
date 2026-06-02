import { useState, useEffect } from 'react';
import { sendToWhatsApp } from '../utils/whatsapp';
import './RegistrationModal.css';

const TRACKS = [
  'Web Development', 'App Development', 'Cybersecurity',
  'AI & Machine Learning', 'Digital Marketing', 'UI/UX Design',
  'DevOps & Cloud', 'Blockchain',
];
const PROGRAMS = ['Internship', 'Training + Internship', 'Course', 'Bootcamp'];
const SEMESTERS = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', 'Graduated', 'School Student'];

export default function RegistrationModal({ open, onClose, defaultProgram = '', defaultTrack = '' }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', city: '',
    program: '', track: '', semester: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Pre-fill program & track when modal opens with defaults
  useEffect(() => {
    if (open) {
      setForm(prev => ({
        ...prev,
        program: defaultProgram || prev.program,
        track: defaultTrack || prev.track,
      }));
    }
  }, [open, defaultProgram, defaultTrack]);

  if (!open) return null;

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    sendToWhatsApp('🎓 Internship / Program Application', {
      'Full Name': form.name,
      'Email': form.email,
      'Phone': form.phone,
      'City': form.city,
      'Program Type': form.program,
      'Track / Field': form.track,
      'Semester / Level': form.semester,
      'Message': form.message,
    });
    setSubmitted(true);
  };

  const reset = () => {
    setStep(1);
    setSubmitted(false);
    setForm({ name:'', email:'', phone:'', city:'', program:'', track:'', semester:'', message:'' });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close">&#x2715;</button>

        {!submitted ? (
          <>
            <h3 className="modal-title">Apply for Internship</h3>
            <p className="modal-sub">Join our Summer 2026 batch — limited seats available.</p>

            {/* Step indicator */}
            <div className="steps-indicator" style={{marginTop:'20px'}}>
              {[1,2,3].map(s => (
                <div key={s} className={`step-dot${step >= s ? ' active' : ''}`} />
              ))}
            </div>
            <p className="step-label">Step {step} of 3</p>

            <form
              name="application"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="application" />
              <input type="hidden" name="bot-field" />

              {step === 1 && (
                <div className="anim-fade-up">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input name="name" value={form.name} onChange={update} placeholder="Your full name" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input name="phone" value={form.phone} onChange={update} placeholder="+92 3XX XXXXXXX" required />
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input name="city" value={form.city} onChange={update} placeholder="Your city" />
                  </div>
                  <button type="button" className="btn btn-primary" style={{width:'100%'}}
                    onClick={() => form.name && form.email && form.phone && setStep(2)}>
                    Next
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="anim-fade-up">
                  <div className="form-group">
                    <label>Program Type *</label>
                    <select name="program" value={form.program} onChange={update} required>
                      <option value="">Select program</option>
                      {PROGRAMS.map(p => <option key={p}>{p}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Track / Field of Interest *</label>
                    <select name="track" value={form.track} onChange={update} required>
                      <option value="">Select track</option>
                      {TRACKS.map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Current Semester / Level</label>
                    <select name="semester" value={form.semester} onChange={update}>
                      <option value="">Select semester</option>
                      {SEMESTERS.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div style={{display:'flex', gap:'12px'}}>
                    <button type="button" className="btn btn-outline" style={{flex:1}} onClick={() => setStep(1)}>Back</button>
                    <button type="button" className="btn btn-primary" style={{flex:2}}
                      onClick={() => form.program && form.track && setStep(3)}>Next</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="anim-fade-up">
                  <div className="confirm-box">
                    <div className="confirm-row"><span>Name</span><strong>{form.name}</strong></div>
                    <div className="confirm-row"><span>Email</span><strong>{form.email}</strong></div>
                    <div className="confirm-row"><span>Program</span><strong>{form.program}</strong></div>
                    <div className="confirm-row"><span>Track</span><strong>{form.track}</strong></div>
                  </div>
                  <div className="form-group" style={{marginTop:'16px'}}>
                    <label>Additional Message (optional)</label>
                    <textarea name="message" value={form.message} onChange={update} placeholder="Anything you'd like us to know..." />
                  </div>
                  <div style={{display:'flex', gap:'12px'}}>
                    <button type="button" className="btn btn-outline" style={{flex:1}} onClick={() => setStep(2)}>Back</button>
                    <button type="submit" className="btn btn-primary" style={{flex:2}}>Submit Application</button>
                  </div>
                </div>
              )}
            </form>
          </>
        ) : (
          <div className="success-screen anim-scale-in">
            <div className="success-icon">&#10003;</div>
            <h3>Application Submitted!</h3>
            <p>Thank you, {form.name}. We'll review your application and contact you within 48 hours.</p>
            <button className="btn btn-primary" style={{marginTop:'24px', width:'100%'}} onClick={reset}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}
