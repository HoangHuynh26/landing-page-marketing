function CaseStudyCard({ item }) {
  return (
    <article className="case-study-card" aria-label={item.title}>
      <div className="case-study-media">
        <span className="case-study-badge">{item.category}</span>
        <div className="case-study-visual" aria-hidden="true">
          {item.visual}
        </div>
      </div>

      <div className="case-study-content">
        <p className="case-study-client">{item.client}</p>
        <h3>{item.title}</h3>

        <div className="case-study-metrics">
          {item.metrics.map((metric) => (
            <div key={metric.label} className="case-metric">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>

        <p>{item.summary}</p>

        <a href="#" className="card-link">
          Read Full Case Study
        </a>
      </div>
    </article>
  )
}

export default CaseStudyCard
