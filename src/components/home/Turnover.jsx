import React, { useState, useEffect, useRef } from 'react'
import '../../styles/turnover.css'

const Turnover = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedNumbers, setAnimatedNumbers] = useState([0, 0, 0, 0])
  const sectionRef = useRef(null)
  const stats = [
    {
      number: "300+",
      label: "Cities",
      targetNumber: 10
    },
    {
      number: "75+",
      label: "Years Combined Experience",
      targetNumber: 30
    },
    {
      number: "300+",
      label: "Successful Campaigns",
      targetNumber: 100
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      targetNumber: 98
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 2000 // 2 seconds
        const startTime = Date.now()
        const startValue = 0
        const endValue = stat.targetNumber

        const animate = () => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / duration, 1)
          
          const easeOutQuart = 1 - Math.pow(1 - progress, 4)
          const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart)

          setAnimatedNumbers(prev => {
            const newNumbers = [...prev]
            newNumbers[index] = currentValue
            return newNumbers
          })

          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }

        setTimeout(() => {
          animate()
        }, index * 200)
      })
    }
  }, [isVisible])

  const formatNumber = (value, index) => {
    if (index === 3) return `${value}%`
    return `${value}+`
  }

  return (
    <section className="turnover-section" ref={sectionRef}>
      <div className="turnover-container">
        <div className="turnover-header">
          <h2 className="turnover-heading">Our Impact</h2>
          <p className="turnover-description">
            Building success stories across markets with proven expertise and innovative campaigns
          </p>
        </div>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">
                <span>{stat.icon}</span>
              </div>
              <div className="stat-content">
                <div className="stat-number">
                  {isVisible ? formatNumber(animatedNumbers[index], index) : "0"}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Turnover