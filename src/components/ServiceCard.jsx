function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-icon" aria-hidden="true">{service.icon}</div>
      <div className="service-meta">
        <span className="service-tag">{service.tag}</span>
        <h3>{service.title}</h3>
      </div>
      <p>{service.description}</p>
      <div className="service-benefit">
        <strong>{service.benefit}</strong>
      </div>
      <a href="#" className="card-link">
        Learn More
      </a>
    </article>
  )
}

export default ServiceCard
