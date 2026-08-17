import './App.css'
import { useState } from 'react'
import BookingWizard from './components/BookingWizard'
import Button from './components/Button'
import CaseStudyCard from './components/CaseStudyCard'
import SectionHeader from './components/SectionHeader'
import ServiceCard from './components/ServiceCard'
import TestimonialCard from './components/TestimonialCard'
import {
  heroMetrics,
  navLinks,
  processSteps,
  resultMetrics,
  services,
  whyChooseUs,
} from './data/siteContent'
import { caseStudies, clientLogos, faqs, testimonials } from './data/trustContent'

function App() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="page-shell">
      <header className="topbar" aria-label="Main header">
        <div className="container nav-wrap">
          <div className="brand" aria-label="Northstar Marketing home">
            Northstar<span>Marketing</span>
          </div>

          <nav className="main-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <Button>Book a Consultation</Button>
        </div>
      </header>

      <main>
        <section className="hero-section section-spacing">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">PERTH DIGITAL MARKETING EXPERTS</p>
              <h1>Grow your business with data-driven marketing.</h1>
              <p className="lead">
                We help Perth and Western Australia businesses turn marketing spend into measurable growth,
                qualified leads, and smarter customer acquisition.
              </p>

              <div className="cta-row" aria-label="Call to action buttons">
                <Button>Book a Consultation</Button>
                <Button variant="secondary">View Case Studies</Button>
              </div>

              <div className="trust-row" aria-label="Trust indicators">
                <span className="stars" aria-label="Five star rating">★★★★★</span>
                <span>Trusted by 50+ WA businesses</span>
              </div>

              <div className="hero-metrics" aria-label="Key business metrics">
                {heroMetrics.map((metric) => (
                  <div key={metric.label} className="metric-pill">
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual" aria-label="Performance dashboard preview">
              <div className="visual-card visual-card-primary">
                <p className="visual-label">Quarterly growth</p>
                <strong>+142%</strong>
                <span>Qualified leads</span>
              </div>

              <div className="visual-card visual-card-secondary">
                <p className="visual-label">Campaign ROAS</p>
                <strong>5.8x</strong>
                <span>Avg. performance</span>
              </div>

              <div className="chart-bars" aria-hidden="true">
                <span style={{ height: '34%' }}></span>
                <span style={{ height: '50%' }}></span>
                <span style={{ height: '62%' }}></span>
                <span style={{ height: '82%' }}></span>
                <span style={{ height: '100%' }}></span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing section-surface" id="services">
          <div className="container">
            <SectionHeader
              eyebrow="Marketing services"
              title="Strategy, execution, and measurable growth for WA businesses."
            />

            <div className="service-grid">
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing" id="why-us">
          <div className="container">
            <SectionHeader
              eyebrow="Why choose us"
              title="Local insight, accountable execution, and growth that earns trust."
            />

            <div className="why-grid">
              {whyChooseUs.map((item) => (
                <article key={item.title} className="info-card">
                  <div className="info-icon" aria-hidden="true">
                    ✓
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing section-surface" id="process">
          <div className="container">
            <SectionHeader
              eyebrow="Marketing process"
              title="A practical framework built to create momentum and improve ROI."
            />

            <div className="process-grid">
              {processSteps.map((step) => (
                <article key={step.number} className="process-card">
                  <span className="process-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing" id="results">
          <div className="container">
            <SectionHeader
              eyebrow="Results"
              title="Campaign performance that turns marketing into tangible business momentum."
            />

            <div className="results-grid">
              {resultMetrics.map((result) => (
                <article key={result.label} className="result-card">
                  <strong>{result.value}</strong>
                  <h3>{result.label}</h3>
                  <p>{result.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing section-surface" aria-labelledby="client-logos-title">
          <div className="container">
            <SectionHeader
              eyebrow="Trusted by growing businesses"
              title="Brands that needed sharper marketing and better commercial clarity."
            />

            <div className="logo-grid" aria-label="Client logos">
              {clientLogos.map((client) => (
                <div key={client} className="logo-pill">
                  {client}
                </div>
              ))}
            </div>

            <div className="logo-link-row">
              <a href="#" className="text-link-inline">
                View More Clients
              </a>
            </div>
          </div>
        </section>

        <section className="section-spacing" id="case-studies">
          <div className="container">
            <SectionHeader
              eyebrow="Case studies"
              title="Proof that strategy, execution, and conversion optimisation can compound growth."
            />

            <div className="case-study-list">
              {caseStudies.map((item) => (
                <CaseStudyCard key={item.client} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing section-surface" id="testimonials">
          <div className="container">
            <SectionHeader
              eyebrow="Testimonials"
              title="Working with business owners who want clarity, accountability, and momentum."
            />

            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <TestimonialCard key={item.name} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing faq-section" id="faq">
          <div className="container faq-shell">
            <SectionHeader
              eyebrow="FAQ"
              title="Frequently asked questions about growth strategy and marketing support."
            />

            <div className="faq-list" aria-label="Frequently asked questions">
              {faqs.map((item, index) => {
                const isOpen = openFaq === index

                return (
                  <div key={item.question} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                    <button
                      type="button"
                      className="faq-question"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span>{item.question}</span>
                      <span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                    </button>

                    {isOpen && <div className="faq-answer">{item.answer}</div>}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <BookingWizard />
      </main>
    </div>
  )
}

export default App
