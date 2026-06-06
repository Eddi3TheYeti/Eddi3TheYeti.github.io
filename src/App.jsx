const PHONE_DISPLAY = '617-634-4480'
const PHONE_TEL = '+16176344480'
const EMAIL = 'eddiedupere@gmail.com'

const services = [
  {
    icon: '📶',
    title: 'Network & WiFi',
    question: 'Network / WiFi not connecting?',
    description:
      'Slow speeds, dropped connections, or devices that won\'t join your network — Eddie can diagnose and fix WiFi and home network issues so you stay connected.',
  },
  {
    icon: '💻',
    title: 'Computer Repair',
    question: 'Computer / PC acting up?',
    description:
      'From sluggish performance and strange errors to software glitches and hardware hiccups, get your desktop or laptop running smoothly again.',
  },
  {
    icon: '📱',
    title: 'New Device Setup',
    question: 'New device setup?',
    description:
      'Just got a new phone, tablet, or computer? Eddie will help you set it up, transfer your data, and make sure everything works the way you need.',
  },
]

const whyItems = [
  {
    title: 'Local & Personal',
    description:
      'One-on-one support from Eddie — not a call center. Friendly, patient help right here in Springfield.',
  },
  {
    title: 'Honest Service',
    description:
      'Straightforward advice and fair pricing. No upsells, no jargon — just solutions that make sense.',
  },
  {
    title: 'Fast Response',
    description:
      'When your tech isn\'t working, you need help now. Call Eddie and get back up and running quickly.',
  },
  {
    title: 'All Skill Levels',
    description:
      'Whether you\'re tech-savvy or just need someone patient, Eddie meets you where you are.',
  },
]

function App() {
  return (
    <>
      <header className="header">
        <div className="header-inner">
          <a href="#" className="logo">
            Eddie Dupere <span>Tech Support</span>
          </a>
          <a href={`tel:${PHONE_TEL}`} className="header-cta">
            Call Eddie! {PHONE_DISPLAY}
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="hero-badge">Springfield, MO &amp; Surrounding Areas</span>
            <h1>Your Local Tech Support Pro</h1>
            <p className="hero-subtitle">
              Personal computer repair, WiFi troubleshooting, and new device setup —
              trusted help when your technology lets you down.
            </p>
            <div className="hero-cta-group">
              <a href={`tel:${PHONE_TEL}`} className="btn-primary">
                Call Eddie!
              </a>
              <p className="hero-phone">
                <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
              </p>
            </div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="section-inner">
            <span className="section-label">Services</span>
            <h2 className="section-title">How Can Eddie Help?</h2>
            <p className="section-desc">
              From everyday frustrations to full device setup — get reliable tech support
              without the hassle.
            </p>
            <div className="services-grid">
              {services.map((service) => (
                <article key={service.title} className="service-card">
                  <div className="service-icon" aria-hidden="true">
                    {service.icon}
                  </div>
                  <h3>{service.question}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-inner">
            <span className="section-label">Why Eddie</span>
            <h2 className="section-title">Trusted Tech Support in Springfield</h2>
            <p className="section-desc">
              Assisting Springfield, Missouri and surrounding areas with friendly,
              expert help you can count on.
            </p>
            <div className="why-grid">
              {whyItems.map((item) => (
                <div key={item.title} className="why-item">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta-band" id="contact">
          <div className="section-inner">
            <span className="section-label">Get Help Today</span>
            <h2 className="section-title">Computer Problems? Call Eddie!</h2>
            <a href={`tel:${PHONE_TEL}`} className="btn-primary">
              Call Now — {PHONE_DISPLAY}
            </a>
            <div className="contact-links">
              <a href={`tel:${PHONE_TEL}`} className="contact-link">
                <span>Phone</span>
                <strong>{PHONE_DISPLAY}</strong>
              </a>
              <a href={`mailto:${EMAIL}`} className="contact-link">
                <span>Email</span>
                <strong>{EMAIL}</strong>
              </a>
              <div className="contact-link">
                <span>Service Area</span>
                <strong>Springfield, MO &amp; surrounding areas</strong>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <p>
            &copy; {new Date().getFullYear()} Eddie Dupere Tech Support &mdash; Springfield,
            Missouri
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
