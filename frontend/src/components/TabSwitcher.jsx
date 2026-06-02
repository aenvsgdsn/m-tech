import { useState, useEffect } from 'react';
import './TabSwitcher.css';

export default function TabSwitcher({ tabs, children, initialTab = 0 }) {
  const [active, setActive] = useState(initialTab);

  useEffect(() => {
    setActive(initialTab);
  }, [initialTab]);

  return (
    <div className="tab-switcher">
      <div className="tab-bar">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            className={`tab-btn${active === i ? ' active' : ''}`}
            onClick={() => setActive(i)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content anim-fade-up" key={active}>
        {children[active]}
      </div>
    </div>
  );
}
