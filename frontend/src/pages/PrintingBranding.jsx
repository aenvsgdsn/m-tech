import { sendToWhatsApp } from '../utils/whatsapp';
import './PrintingBranding.css';

const GREETING = 'Hello M-Tech Production & Marketing! I am interested in your Printing & Branding Services.';
const PLACEHOLDER = '[Please specify]';

/**
 * Opens the existing M-Tech WhatsApp contact (via the shared helper) with a
 * pre-filled, product-specific message. No form, no registration.
 */
function requestQuote({ category, product, request }) {
  sendToWhatsApp(GREETING, {
    Category: category,
    'Product/Service': product,
    Request: request,
    Quantity: PLACEHOLDER,
    Budget: PLACEHOLDER,
    'Required Delivery Date': PLACEHOLDER,
    'Additional Requirements': PLACEHOLDER,
    Note: 'Please guide me regarding the available options. Thank you.',
  });
}

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* Feather-style icon bodies (same stroke style used across the site) */
const ICONS = {
  award: <><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></>,
  display: <><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></>,
  card: <><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></>,
  gift: <><polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" /></>,
  printer: <><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" /><rect x="6" y="14" width="12" height="8" /></>,
  tag: <><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></>,
  book: <><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></>,
  box: <><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></>,
};

const Icon = ({ name, size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {ICONS[name]}
  </svg>
);

/* `request` is the category-specific ask; {p} is replaced by the product name. */
const CATEGORIES = [
  {
    id: 'awards', letter: 'A', icon: 'award',
    title: 'Awards, Shields & Recognition Products',
    desc: 'Honour achievements with customized shields, trophies and recognition products.',
    request: 'Please share available designs, materials, pricing and customization options for {p}.',
    items: ['Customized shields', 'Acrylic shields', 'Wooden shields', 'Trophies', 'Medals', 'Award plaques', 'Appreciation awards', 'Achievement awards', 'Corporate recognition products'],
  },
  {
    id: 'event-branding', letter: 'B', icon: 'display',
    title: 'Event Branding & Display Solutions',
    desc: 'Banners, standees, flags and backdrops that make your event stand out.',
    request: 'Please share available sizes, materials, pricing and branding options for {p}.',
    items: ['Roll-up standees', 'Promotional flags', 'Feather flags', 'Event banners', 'Flex and panaflex', 'Stage backdrops', 'Exhibition displays', 'Directional signage', 'Event branding materials'],
  },
  {
    id: 'cards-badges', letter: 'C', icon: 'card',
    title: 'Cards, Badges & Accessories',
    desc: 'ID cards, badges, lanyards and access solutions for institutions and events.',
    request: 'Please share available card/badge options, printing details and pricing for {p}.',
    items: ['PVC cards', 'Student ID cards', 'Employee ID cards', 'Event badges', 'ID card holders', 'Customized lanyards', 'Printed ribbons', 'Name tags', 'Access cards'],
  },
  {
    id: 'merchandise', letter: 'D', icon: 'gift',
    title: 'Customized Corporate Merchandise',
    desc: 'Logo-printed merchandise and gifts that keep your brand in sight.',
    request: 'Please share available designs, branding options and bulk pricing for {p}.',
    items: ['Logo-printed pens', 'Customized notebooks', 'Diaries and planners', 'Customized mugs', 'Keychains', 'Corporate gift sets', 'Customized bags', 'Promotional merchandise', 'Branded stationery'],
  },
  {
    id: 'printing', letter: 'E', icon: 'printer',
    title: 'Professional Printing & Documentation',
    desc: 'Everyday and professional printing, from documents to invitations and brochures.',
    request: 'Please share available paper/print options, turnaround options and pricing for {p}.',
    items: ['Photostat and photocopy', 'Black and white printing', 'Color printing', 'Business cards', 'Wedding cards', 'Invitation cards', 'Brochures', 'Pamphlets', 'Flyers', 'Posters', 'Certificates', 'Letterheads', 'Stamp-paper printing (where legally permitted)', 'Document scanning', 'Lamination'],
  },
  {
    id: 'apparel', letter: 'F', icon: 'tag',
    title: 'Apparel & Promotional Branding',
    desc: 'Customized clothing for teams, events and campaigns.',
    request: 'Please share available fabrics, sizes, printing/embroidery options and pricing for {p}.',
    items: ['Customized T-shirts', 'Event shirts', 'Corporate uniforms', 'Caps', 'Jackets', 'Logo-printed clothing', 'Customized apparel'],
  },
  {
    id: 'books-binding', letter: 'G', icon: 'book',
    title: 'Books, Binding & Educational Materials',
    desc: 'Printing and binding for books, reports, theses and training material.',
    request: 'Please share available binding/printing options, page requirements and pricing for {p}.',
    items: ['Book printing', 'Spiral binding', 'Hardcover binding', 'Project reports', 'Thesis binding', 'Training manuals', 'Educational stationery', 'Customized folders'],
  },
  {
    id: 'packages', letter: 'H', icon: 'box',
    title: 'Corporate & Event Packages',
    desc: 'Ready-to-coordinate kits and packages built around your event or campaign.',
    request: 'Please share what can be included, available customization and pricing for {p}.',
    items: ['University event packages', 'Seminar kits', 'Conference kits', 'Student orientation kits', 'Welcome kits', 'Corporate gift packages', 'Exhibition packages', 'Promotional campaign materials', 'Customized packaging'],
  },
];

const PRICING_POINTS = [
  { title: 'Contact for Pricing', desc: 'Every requirement is different, so we share pricing based on what you actually need.' },
  { title: 'Customized Pricing', desc: 'Quotes are tailored to your products, quantity and budget.' },
  { title: 'Bulk Order Discounts', desc: 'Planning a larger order? Ask us about bulk order discounts.' },
  { title: 'Request a Quote', desc: 'One tap on WhatsApp is all it takes. No forms, no registration.' },
];

const AUDIENCES = [
  { title: 'Universities & Higher Education Institutions', desc: 'Orientations, convocations, award ceremonies, ID cards and complete event branding.' },
  { title: 'Colleges & Schools', desc: 'Student ID cards, certificates, awards, uniforms and annual-function materials.' },
  { title: 'University Students', desc: 'Project reports, thesis binding, society events, and custom shirts and merchandise.' },
  { title: 'Corporate Organizations', desc: 'Employee IDs, branded stationery, corporate gifts, uniforms and recognition products.' },
  { title: 'Small & Medium Businesses', desc: 'Business cards, flyers, banners, signage and promotional merchandise for growth.' },
  { title: 'Event Organizers', desc: 'Backdrops, standees, flags, badges, lanyards and event kits, coordinated in one place.' },
  { title: 'NGOs & Development Organizations', desc: 'Campaign materials, training manuals, banners, certificates and visibility items.' },
  { title: 'General Customers', desc: 'Invitation and wedding cards, gifts, printing, lamination and everyday documentation.' },
];

const EVENT_TYPES = [
  'University orientations', 'Student competitions', 'Award ceremonies', 'Seminars and conferences',
  'Workshops and training sessions', 'Technology festivals', 'Corporate events', 'Exhibitions and promotional campaigns',
];

const EVENT_MATERIALS = [
  'Shields', 'Trophies', 'Certificates', 'Standees', 'Flags', 'Lanyards',
  'Badges', 'Folders', 'Branded pens', 'Banners', 'Backdrops', 'Gift kits',
];

export default function PrintingBranding() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const askCategory = (cat) =>
    requestQuote({
      category: cat.title,
      product: `${cat.title} (general inquiry)`,
      request: `Please share available options, designs, pricing and customization details for ${cat.title}.`,
    });

  const askEvent = () =>
    requestQuote({
      category: 'University & Event Branding Solutions',
      product: 'Complete University & Event Branding Package',
      request: 'Please share how you can coordinate shields, trophies, certificates, standees, flags, lanyards, badges, folders, pens and other event materials for our event, along with pricing and customization options.',
    });

  const askCustom = () =>
    requestQuote({
      category: 'Custom Requirement',
      product: 'Custom requirement (details below)',
      request: 'I have a specific requirement and would like to discuss products, quantity and budget with your team.',
    });

  return (
    <>
      {/* ---- Hero ---- */}
      <section className="page-hero bg-dark page-hero-img hero-printing">
        <div className="container page-hero__inner">
          <div className="badge">Print &amp; Promote</div>
          <h1>Printing, Branding &amp; <span className="text-teal">Promotional Solutions</span></h1>
          <p className="pb-tagline">Your Brand. Your Vision. Our Complete Solutions.</p>
          <p>
            From professional printing and customized promotional products to university events and corporate
            branding, M-Tech provides comprehensive solutions tailored to your requirements, quantity and budget.
          </p>
          <div className="pb-hero__actions">
            <button className="btn btn-primary" onClick={askCustom}>
              <WhatsAppIcon /> Get a Quote
            </button>
            <button className="btn btn-white" onClick={() => scrollTo('pb-categories')}>
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* ---- Pricing approach ---- */}
      <section className="section-sm">
        <div className="container">
          <div className="grid-4">
            {PRICING_POINTS.map((p, i) => (
              <div key={p.title} className={`card pb-point anim-fade-up anim-delay-${(i % 4) + 1}`}>
                <div className="pb-point__check">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Category quick links ---- */}
      <section className="pb-nav-section" id="pb-categories">
        <div className="container">
          <div className="section-label" style={{ marginBottom: 24 }}>
            <div className="badge">8 Categories</div>
            <h2>Everything Customized to Your Requirements</h2>
            <p>All products are customizable according to your requirements and available production options.</p>
          </div>
          <div className="pb-chips">
            {CATEGORIES.map((c) => (
              <button key={c.id} className="pb-chip" onClick={() => scrollTo(c.id)}>
                <span className="pb-chip__letter">{c.letter}</span>
                {c.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Categories ---- */}
      {CATEGORIES.map((cat, idx) => (
        <section key={cat.id} id={cat.id} className={`section pb-category${idx % 2 === 1 ? ' bg-surface' : ''}`}>
          <div className="container">
            <div className="pb-category__head">
              <div className="pb-category__icon"><Icon name={cat.icon} size={30} /></div>
              <div>
                <div className="badge">Category {cat.letter}</div>
                <h2>{cat.title}</h2>
                <p>{cat.desc}</p>
              </div>
              <button className="btn btn-outline pb-category__ask" onClick={() => askCategory(cat)}>
                Ask about this category
              </button>
            </div>

            <div className="grid-3 pb-products">
              {cat.items.map((item) => (
                <div key={item} className="card pb-product">
                  <div className="pb-product__top">
                    <h4>{item}</h4>
                    <span className="tag">Customizable</span>
                  </div>
                  <p className="pb-product__price">Contact for Pricing</p>
                  <button
                    className="pb-quote-btn"
                    onClick={() => requestQuote({
                      category: cat.title,
                      product: item,
                      request: cat.request.replace('{p}', item),
                    })}
                  >
                    <WhatsAppIcon /> Get a Quote
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ---- Who we serve ---- */}
      <section className="section bg-surface" id="pb-who">
        <div className="container">
          <div className="section-label">
            <div className="badge">Who We Serve</div>
            <h2>Solutions for Every Customer</h2>
            <p>Whether you need a single item or a complete order, we tailor the solution to your needs.</p>
          </div>
          <div className="grid-4 pb-audience">
            {AUDIENCES.map((a, i) => (
              <div key={a.title} className="card pb-audience__card">
                <div className="pb-audience__num">{String(i + 1).padStart(2, '0')}</div>
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- University & event ---- */}
      <section className="section bg-navy pb-event" id="pb-event">
        <div className="container">
          <div className="section-label">
            <div className="badge">University &amp; Events</div>
            <h2>Complete University &amp; Event Branding Solutions</h2>
            <p>
              M-Tech can coordinate customized products and event materials for your event, so you can deal
              with one team instead of many suppliers.
            </p>
          </div>

          <div className="pb-event__grid">
            <div className="pb-event__panel">
              <h4>Events we support</h4>
              <ul className="pb-event__list">
                {EVENT_TYPES.map((e) => (
                  <li key={e}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pb-event__panel">
              <h4>Materials we can coordinate</h4>
              <div className="pb-event__tags">
                {EVENT_MATERIALS.map((m) => (
                  <span key={m} className="pb-event__tag">{m}</span>
                ))}
                <span className="pb-event__tag pb-event__tag--more">and more</span>
              </div>
              <p className="pb-event__note">Customized to your event theme, quantity and budget.</p>
              <button className="btn btn-primary" onClick={askEvent}>
                <WhatsAppIcon /> Get an Event Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Final CTA ---- */}
      <section className="section">
        <div className="container">
          <div className="pb-cta card">
            <div className="badge">Request a Quote</div>
            <h2>Have a Custom Requirement?</h2>
            <p>
              Looking for something specific? Share your product requirements, quantity and budget with us.
              Our team will help you find a suitable solution.
            </p>
            <button className="btn btn-primary" onClick={askCustom}>
              <WhatsAppIcon /> Discuss Your Requirements on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
