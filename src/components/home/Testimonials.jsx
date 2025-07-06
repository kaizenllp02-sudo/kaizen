import React, { useState, useEffect, useRef } from 'react'
import '../../styles/testimonials.css'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(5) // Start from middle set
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const carouselRef = useRef(null)
  const intervalRef = useRef(null)
  const trackRef = useRef(null)
  const testimonials = [
    {
      id: 1,
      name: "FMCG Brand Manager",
      position: "Marketing Director",
      company: "TechFlow Solutions",
      image: "/api/placeholder/60/60",
      rating: 5,
      content: "Kaizen is one of the few agencies that truly links insights to action."
    },
    {
      id: 2,
      name: "Healthcare Client",
      position: "CEO",
      company: "Innovation Labs",
      image: "/api/placeholder/60/60",
      rating: 5,
      content: "Our campaign ROI tripled due to their hybrid offline + digital execution."
    }
    // {
    //   id: 3,
    //   name: "Emma Rodriguez",
    //   position: "Brand Manager",
    //   company: "Global Retail Co",
    //   image: "/api/placeholder/60/60",
    //   rating: 5,
    //   content: "The team at Kaizen brought fresh perspectives and innovative solutions. Their campaigns significantly boosted our brand engagement and sales."
    // },
    // {
    //   id: 4,
    //   name: "David Kumar",
    //   position: "VP Marketing",
    //   company: "StartUp Inc",
    //   image: "/api/placeholder/60/60",
    //   rating: 5,
    //   content: "Outstanding results! Kaizen's creative team delivered campaigns that perfectly captured our brand essence and drove incredible engagement."
    // },
    // {
    //   id: 5,
    //   name: "Lisa Zhang",
    //   position: "Creative Director",
    //   company: "Design Studio",
    //   image: "/api/placeholder/60/60",
    //   rating: 5,
    //   content: "Professional, innovative, and results-driven. Kaizen exceeded our expectations and delivered campaigns that truly resonated with our audience."
    // }
  ]

  // Duplicate testimonials for infinite scroll
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      if (!isHovered && !isDragging) {
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prevIndex) => prevIndex + 1)
        }, 3000)
      } else {
        clearInterval(intervalRef.current)
      }
    }

    // Start auto-scroll immediately
    startAutoScroll()

    return () => clearInterval(intervalRef.current)
  }, [isHovered, isDragging])

  // Handle infinite scroll reset
  useEffect(() => {
    if (trackRef.current) {
      const handleTransitionEnd = () => {
        if (currentIndex >= testimonials.length * 2) {
          // Reset to middle set without transition
          trackRef.current.style.transition = 'none'
          setCurrentIndex(testimonials.length)
          setTimeout(() => {
            trackRef.current.style.transition = 'transform 0.5s ease-in-out'
          }, 50)
        } else if (currentIndex <= 0) {
          // Reset to middle set without transition
          trackRef.current.style.transition = 'none'
          setCurrentIndex(testimonials.length)
          setTimeout(() => {
            trackRef.current.style.transition = 'transform 0.5s ease-in-out'
          }, 50)
        }
      }

      trackRef.current.addEventListener('transitionend', handleTransitionEnd)
      return () => {
        if (trackRef.current) {
          trackRef.current.removeEventListener('transitionend', handleTransitionEnd)
        }
      }
    }
  }, [currentIndex, testimonials.length])

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setDragStart(e.clientX)
    setDragOffset(0)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    const offset = e.clientX - dragStart
    setDragOffset(offset)
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    setIsDragging(false)
    
    if (Math.abs(dragOffset) > 100) {
      if (dragOffset > 0) {
        setCurrentIndex((prevIndex) => prevIndex - 1)
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }
    }
    setDragOffset(0)
  }

  // Touch drag handlers
  const handleTouchStart = (e) => {
    setIsDragging(true)
    setDragStart(e.touches[0].clientX)
    setDragOffset(0)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const offset = e.touches[0].clientX - dragStart
    setDragOffset(offset)
  }

  const handleTouchEnd = () => {
    handleMouseUp()
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ))
  }

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-heading">What Our Clients Say</h2>
          <p className="testimonials-description">
            Hear from brands that have transformed their market presence with our expertise
          </p>
        </div>
        
        <div 
          className="testimonials-carousel"
          ref={carouselRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false)
            handleMouseUp()
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="testimonials-track"
            ref={trackRef}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isDragging ? 'none' : 'transform 0.5s ease-in-out',
              ...(isDragging && { transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))` })
            }}
          >
            {extendedTestimonials.map((testimonial, index) => (
              <div key={`${testimonial.id}-${Math.floor(index / testimonials.length)}`} className="testimonial-card">
                <div className="testimonial-content-vertical">
                  <div className="testimonial-text">
                    <p>"{testimonial.content}"</p>
                  </div>
                  <div className="testimonial-client-name">
                    <h4 className="client-name">{testimonial.name}</h4>
                  </div>
                  <div className="testimonial-rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials