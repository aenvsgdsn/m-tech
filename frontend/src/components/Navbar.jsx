import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import RegistrationModal from './RegistrationModal';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Programs', path: '/programs',
    children: [
      { label: 'Courses', path: '/programs?tab=courses' },
      { label: 'Internship', path: '/programs?tab=internship' },
      { label: 'Bootcamps', path: '/programs?tab=bootcamps' },
    ],
  },
  {
    label: 'Services', path: '/services',
    children: [
      { label: 'All Services', path: '/services' },
      { label: 'Web Development', path: '/services#web' },
      { label: 'App Development', path: '/services#app' },
      { label: 'Cybersecurity', path: '/services#cyber' },
      { label: 'AI & Automation', path: '/services#ai' },
      { label: 'Digital Marketing', path: '/services#marketing' },
    ],
  },
  { label: 'Marketing365', path: '/marketing365' },
  {
    label: 'Community', path: '/community',
    children: [
      { label: 'Interns', path: '/community?tab=interns' },
      { label: 'Mentors', path: '/community?tab=mentors' },
      { label: 'Ambassadors', path: '/community?tab=ambassadors' },
    ],
  },
  {
    label: 'Explore', path: '/explore',
    children: [
      { label: 'Webinars', path: '/explore?tab=webinars' },
      { label: 'Collaborate', path: '/explore?tab=collaborate' },
    ],
  },
  { label: 'Contact', path: '/contact' },
  { label: 'FAQ', path: '/faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const toggleDropdown = (e, label) => {
    e.preventDefault();
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <>
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          <Link to="/" className="navbar__brand">
            <div className="navbar__logo-wrapper">
              <img src="/assets/mtech-logo.jpeg" alt="M Tech Logo" className="navbar__logo-img" />
            </div>
            <div className="brand-text">
              <span className="brand-name">M Tech</span>
              <span className="brand-tagline">Production & Marketing</span>
            </div>
          </Link>

          <nav className="navbar__links">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="nav-item nav-item--dropdown"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <NavLink to={item.path} onClick={(e) => toggleDropdown(e, item.label)} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
                    {item.label}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{transform: openDropdown === item.label ? 'rotate(180deg)' : 'none', transition: '0.3s'}}>
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </NavLink>
                  {openDropdown === item.label && (
                    <div className="dropdown">
                      {item.children.map((child) => (
                        <Link key={child.label} to={child.path} className="dropdown__item">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="navbar__actions">
            <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
              Apply Now
            </button>
            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="mobile-menu">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <button className="mobile-link" style={{width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}>
                    {item.label}
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" style={{transform: openDropdown === item.label ? 'rotate(180deg)' : 'none', transition: '0.3s'}}>
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                ) : (
                  <NavLink to={item.path} className="mobile-link" onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </NavLink>
                )}
                {item.children && openDropdown === item.label && (
                  <div className="mobile-sub">
                    {item.children.map((child) => (
                      <Link key={child.label} to={child.path} className="mobile-sublink" onClick={() => setMenuOpen(false)}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="btn btn-primary" style={{margin:'16px'}} onClick={() => { setModalOpen(true); setMenuOpen(false); }}>
              Apply Now
            </button>
          </div>
        )}
      </header>

      <RegistrationModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
