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
          <div className="brand" aria-label="VK Digital Marketing home">
            VK<span>Digital Marketing</span>
          </div>

          <nav className="main-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#booking" className="btn header-cta">
            Book a Consultation
          </a>
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
                <a href="#booking" className="btn">
                  Book a Consultation
                </a>
                <a href="#case-studies" className="btn btn-secondary">
                  View Case Studies
                </a>
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
              <a href="#case-studies" className="text-link-inline">
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

        <section className="section-spacing cta-banner" aria-labelledby="cta-banner-title">
          <div className="container cta-banner-inner">
            <div>
              <p className="eyebrow">Growth conversations</p>
              <h2 id="cta-banner-title">Ready to build a smarter marketing engine for your business?</h2>
            </div>

            <div className="cta-banner-actions">
              <a href="#booking" className="btn">
                Book a Consultation
              </a>
              <a href="#case-studies" className="btn btn-secondary">
                View Case Studies
              </a>
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

        <section className="section-spacing about-section" id="about">
          <div className="container about-grid">
            <div className="about-copy">
              <p className="eyebrow">About us</p>
              <h2>We help WA businesses turn marketing into measurable commercial momentum.</h2>
              <p>
                Northstar Marketing is a Perth-based growth partner for service businesses and ambitious local brands.
                We combine strategic clarity with practical execution to improve acquisition, strengthen positioning,
                and create more predictable pipeline growth.
              </p>
              <p>
                Our philosophy is simple: marketing should be clear, accountable, and built around the outcomes that matter
                most to your business. From positioning and campaigns to conversion optimisation, we focus on what moves the needle.
              </p>
              <a href="#booking" className="btn">
                Book a Consultation
              </a>
            </div>

            <div className="about-panel">
              <div className="about-stat">
                <strong>Local-first</strong>
                <span>Market insight built for Perth and WA.</span>
              </div>
              <div className="about-stat">
                <strong>Strategy-led</strong>
                <span>Clear priorities, measurable goals, and practical execution.</span>
              </div>
              <div className="about-stat">
                <strong>Results-focused</strong>
                <span>Every recommendation is tied to performance, efficiency, and ROI.</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="brand footer-brand" aria-label="VK Digital Marketing home">
              VK<span>Digital Marketing</span>
            </div>
            <p className="footer-text">
              Performance-focused marketing support for ambitious Perth and WA businesses.
            </p>
          </div>

          <div>
            <h3>Navigation</h3>
            <ul className="footer-links">
              <li><a href="#services">Services</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#case-studies">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h3>Services</h3>
            <ul className="footer-links">
              <li><a href="#services">SEO</a></li>
              <li><a href="#services">Paid Ads</a></li>
              <li><a href="#services">Social Media</a></li>
              <li><a href="#services">Lead Generation</a></li>
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <ul className="footer-links">
              <li><a href="#booking">Book a consultation</a></li>
              <li><a href="mailto:hello@vkdigitalmarketing.com.au">hello@northstarmarketing.com.au</a></li>
              <li><a href="tel:+61800000000">+61 8 0000 0000</a></li>
            </ul>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 VK Digital Marketing</span>
          <div className="legal-links">
            <a href="#about">Privacy</a>
            <a href="#about">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
