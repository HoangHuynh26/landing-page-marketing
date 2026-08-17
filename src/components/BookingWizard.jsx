import { useMemo, useState } from 'react'

const SERVICE_OPTIONS = [
  'SEO',
  'Paid Advertising',
  'Social Media Marketing',
  'Content Marketing',
  'Lead Generation',
]

const VALID_TIME_SLOTS = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
]

const formatDate = (value) => {
  if (!value) return 'Not selected'

  const date = new Date(`${value}T00:00:00`)
  return new Intl.DateTimeFormat('en-AU', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date)
}

const isPastTimeForToday = (dateValue, slot) => {
  const today = new Date()
  const selectedDate = new Date(`${dateValue}T00:00:00`)

  if (selectedDate.toDateString() !== today.toDateString()) {
    return false
  }

  const [hours, minutes] = slot.split(':').map(Number)
  const slotDate = new Date()
  slotDate.setHours(hours, minutes, 0, 0)

  return slotDate.getTime() <= today.getTime()
}

const getAvailableTimeSlots = (dateValue) => {
  if (!dateValue) return []

  return VALID_TIME_SLOTS.filter((slot) => !isPastTimeForToday(dateValue, slot))
}

function BookingWizard() {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedService, setSelectedService] = useState('')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const availableTimes = useMemo(() => getAvailableTimeSlots(selectedDate), [selectedDate])

  const updateField = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: '' }))
  }

  const validateDateTime = () => {
    const nextErrors = {}

    if (!selectedDate) {
      nextErrors.date = 'Please choose a consultation date.'
    }

    if (!selectedTime) {
      nextErrors.time = 'Please choose an available time slot.'
    }

    if (selectedDate && selectedTime && !availableTimes.includes(selectedTime)) {
      nextErrors.time = 'That time is no longer available. Please choose another slot.'
    }

    setErrors((current) => ({ ...current, ...nextErrors }))
    return Object.keys(nextErrors).length === 0
  }

  const validateService = () => {
    const nextErrors = {}

    if (!selectedService) {
      nextErrors.service = 'Please choose a service.'
    }

    setErrors((current) => ({ ...current, ...nextErrors }))
    return Object.keys(nextErrors).length === 0
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!formData.fullName.trim()) {
      nextErrors.fullName = 'Full name is required.'
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = 'Phone number is required.'
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      nextErrors.phone = 'Please enter a valid phone number.'
    }

    if (!formData.businessName.trim()) {
      nextErrors.businessName = 'Business name is required.'
    }

    setErrors((current) => ({ ...current, ...nextErrors }))
    return Object.keys(nextErrors).length === 0
  }

  const handleNext = () => {
    if (step === 1 && validateDateTime()) {
      setStep(2)
      return
    }

    if (step === 2 && validateService()) {
      setStep(3)
      return
    }

    if (step === 3 && validateForm()) {
      setStep(4)
    }
  }

  const handleBack = () => {
    setErrors({})
    setStep((current) => Math.max(1, current - 1))
  }

  const handleConfirm = async () => {
    setIsSubmitting(true)
    setErrors({})

    await new Promise((resolve) => setTimeout(resolve, 900))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setStep(5)
  }

  const resetBooking = () => {
    setStep(1)
    setSelectedDate('')
    setSelectedTime('')
    setSelectedService('')
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      businessName: '',
      message: '',
    })
    setErrors({})
    setIsSubmitted(false)
    setIsSubmitting(false)
  }

  const renderStepHeader = () => {
    const stepLabels = [
      'Book a date',
      'Choose a service',
      'Your details',
      'Review',
      'Success',
    ]

    return (
      <div className="booking-steps" aria-label="Booking progress">
        {stepLabels.map((label, index) => (
          <div
            key={label}
            className={`booking-step ${step === index + 1 ? 'is-active' : ''} ${step > index + 1 ? 'is-complete' : ''}`}
          >
            <span>{index + 1}</span>
            <small>{label}</small>
          </div>
        ))}
      </div>
    )
  }

  if (isSubmitted && step === 5) {
    return (
      <section className="booking-section" aria-labelledby="booking-heading">
        <div className="container">
          <div className="booking-card success-state">
            <div className="success-badge">Confirmed</div>
            <h3>Thanks, {formData.fullName.split(' ')[0] || 'there'}.</h3>
            <p>
              Your consultation request for <strong>{selectedService}</strong> has been scheduled for{' '}
              <strong>{formatDate(selectedDate)}</strong> at <strong>{selectedTime}</strong>.
            </p>
            <p>
              We will send a confirmation to <strong>{formData.email}</strong> shortly.
            </p>
            <button type="button" className="btn" onClick={resetBooking}>
              Book another session
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="booking-section" aria-labelledby="booking-heading">
      <div className="container">
        <div className="booking-card">
          <div className="booking-header">
            <p className="eyebrow">Consultation booking</p>
            <h2 id="booking-heading">Tell us about your growth goals.</h2>
          </div>

          {renderStepHeader()}

          {step === 1 && (
            <div className="booking-panel">
              <div className="field-group">
                <label htmlFor="consultation-date">Select a date</label>
                <input
                  id="consultation-date"
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={selectedDate}
                  onChange={(event) => {
                    setSelectedDate(event.target.value)
                    setErrors((current) => ({ ...current, date: '', time: '' }))
                    setSelectedTime('')
                  }}
                />
                {errors.date && <span className="field-error">{errors.date}</span>}
              </div>

              <div className="field-group">
                <label>Choose a time</label>
                {selectedDate ? (
                  <div className="time-grid" aria-label="Available appointment times">
                    {availableTimes.length ? (
                      availableTimes.map((time) => (
                        <button
                          key={time}
                          type="button"
                          className={`time-slot ${selectedTime === time ? 'is-selected' : ''}`}
                          onClick={() => {
                            setSelectedTime(time)
                            setErrors((current) => ({ ...current, time: '' }))
                          }}
                        >
                          {time}
                        </button>
                      ))
                    ) : (
                      <p className="empty-state">No available slots for this date. Please select another day.</p>
                    )}
                  </div>
                ) : (
                  <p className="empty-state">Choose a date to see the available consultation slots.</p>
                )}
                {errors.time && <span className="field-error">{errors.time}</span>}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="booking-panel">
              <div className="field-group">
                <label>Select a marketing service</label>
                <div className="service-grid-booking">
                  {SERVICE_OPTIONS.map((service) => (
                    <button
                      key={service}
                      type="button"
                      className={`service-option ${selectedService === service ? 'is-selected' : ''}`}
                      onClick={() => {
                        setSelectedService(service)
                        setErrors((current) => ({ ...current, service: '' }))
                      }}
                    >
                      {service}
                    </button>
                  ))}
                </div>
                {errors.service && <span className="field-error">{errors.service}</span>}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="booking-panel form-grid">
              <div className="field-group">
                <label htmlFor="full-name">Full name</label>
                <input
                  id="full-name"
                  type="text"
                  value={formData.fullName}
                  onChange={(event) => updateField('fullName', event.target.value)}
                  placeholder="Jane Smith"
                />
                {errors.fullName && <span className="field-error">{errors.fullName}</span>}
              </div>

              <div className="field-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  placeholder="jane@company.com"
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>

              <div className="field-group">
                <label htmlFor="phone">Phone number</label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(event) => updateField('phone', event.target.value)}
                  placeholder="0400 123 456"
                />
                {errors.phone && <span className="field-error">{errors.phone}</span>}
              </div>

              <div className="field-group">
                <label htmlFor="business-name">Business name</label>
                <input
                  id="business-name"
                  type="text"
                  value={formData.businessName}
                  onChange={(event) => updateField('businessName', event.target.value)}
                  placeholder="Northline Co."
                />
                {errors.businessName && <span className="field-error">{errors.businessName}</span>}
              </div>

              <div className="field-group full-width">
                <label htmlFor="message">Optional message</label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={(event) => updateField('message', event.target.value)}
                  placeholder="Tell us a little about your goals, current challenges, or timeline."
                />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="booking-panel review-panel">
              <div className="review-block">
                <h3>Consultation summary</h3>
                <dl>
                  <div>
                    <dt>Date</dt>
                    <dd>{formatDate(selectedDate)}</dd>
                  </div>
                  <div>
                    <dt>Time</dt>
                    <dd>{selectedTime}</dd>
                  </div>
                  <div>
                    <dt>Service</dt>
                    <dd>{selectedService}</dd>
                  </div>
                  <div>
                    <dt>Name</dt>
                    <dd>{formData.fullName}</dd>
                  </div>
                  <div>
                    <dt>Email</dt>
                    <dd>{formData.email}</dd>
                  </div>
                  <div>
                    <dt>Phone</dt>
                    <dd>{formData.phone}</dd>
                  </div>
                  <div>
                    <dt>Business</dt>
                    <dd>{formData.businessName}</dd>
                  </div>
                  <div>
                    <dt>Message</dt>
                    <dd>{formData.message || 'No additional notes provided.'}</dd>
                  </div>
                </dl>
              </div>
            </div>
          )}

          {!isSubmitted && (
            <div className="booking-actions">
              {step > 1 && step < 5 && (
                <button type="button" className="btn btn-secondary" onClick={handleBack}>
                  Back
                </button>
              )}

              {step < 4 && (
                <button type="button" className="btn" onClick={handleNext}>
                  Continue
                </button>
              )}

              {step === 4 && (
                <button type="button" className="btn" onClick={handleConfirm} disabled={isSubmitting}>
                  {isSubmitting ? 'Confirming...' : 'Confirm booking'}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default BookingWizard
