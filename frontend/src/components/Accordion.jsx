import { useState } from 'react';
import './Accordion.css';

export default function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="accordion">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={`accordion__item${isOpen ? ' open' : ''}`}>
            <button className="accordion__trigger" onClick={() => setOpen(isOpen ? null : i)}>
              <span>{item.q || item.title}</span>
              <span className="accordion__icon">{isOpen ? '−' : '+'}</span>
            </button>
            <div className="accordion__body" style={{ maxHeight: isOpen ? '400px' : '0' }}>
              <div className="accordion__content">
                {item.a || item.content}
                {item.services && (
                  <ul className="service-list">
                    {item.services.map((s, j) => <li key={j}>{s}</li>)}
                  </ul>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
