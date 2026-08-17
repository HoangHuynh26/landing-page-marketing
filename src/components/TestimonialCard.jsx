function TestimonialCard({ item }) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-stars" aria-label={`${item.rating} out of 5 stars`}>
        {'★'.repeat(item.rating)}
      </div>
      <p className="testimonial-quote">“{item.quote}”</p>
      <div className="testimonial-author">
        <div className="testimonial-avatar" aria-hidden="true">{item.name.slice(0, 1)}</div>
        <div>
          <strong>{item.name}</strong>
          <span>{item.role}</span>
          <span>{item.business}</span>
        </div>
      </div>
    </article>
  )
}

export default TestimonialCard
