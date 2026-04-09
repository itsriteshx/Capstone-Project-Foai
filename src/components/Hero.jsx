import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiActivity, FiShield, FiUsers } from 'react-icons/fi'
import './Hero.css'

function AnimatedCounter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      let start = 0, startTime = null
      const animate = ts => {
        if (!startTime) startTime = ts
        const progress = Math.min((ts - startTime) / duration, 1)
        setCount(Math.floor(progress * target))
        if (progress < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
      observer.disconnect()
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])
  return <span ref={ref}>{count}+</span>
}

export default function Hero() {
  return (
    <section id="home" className="hero section-pad">
      <div className="container">
        <div className="hero-grid">
          <motion.div className="hero-content" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <span className="hero-badge">🌿 AI-Powered Agricultural Technology</span>
            <h1 className="hero-title">
              Detect Crop Diseases<br />
              <span className="hero-gradient">Instantly with AI</span>
            </h1>
            <p className="hero-desc">
              Upload a leaf image and get instant disease diagnosis, severity assessment, 
              treatment recommendations, and prevention tips — powered by Computer Vision, 
              Rule-Based Systems, and Probabilistic Reasoning.
            </p>
            <div className="hero-actions">
              <a href="#detection" className="btn btn-primary btn-lg"><FiActivity /> Start Detection</a>
              <a href="#concepts" className="btn btn-outline btn-lg">Learn More <FiArrowRight /></a>
            </div>
          </motion.div>
          <motion.div className="hero-visual" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7, delay: .2 }}>
            <div className="hero-card-grid">
              <div className="hero-float-card hfc-1">
                <div className="hfc-icon" style={{ background: 'rgba(16,185,129,.12)' }}>🔬</div>
                <div><strong>10 Diseases</strong><br /><span>Classified by AI model</span></div>
              </div>
              <div className="hero-float-card hfc-2">
                <div className="hfc-icon" style={{ background: 'rgba(139,92,246,.12)' }}>🧠</div>
                <div><strong>4 AI Concepts</strong><br /><span>Vision, Rules, Probability, Gen AI</span></div>
              </div>
              <div className="hero-float-card hfc-3">
                <div className="hfc-icon" style={{ background: 'rgba(245,158,11,.12)' }}>🌦️</div>
                <div><strong>Weather Risk</strong><br /><span>Probabilistic outbreak prediction</span></div>
              </div>
              <div className="hero-float-card hfc-4">
                <div className="hfc-icon" style={{ background: 'rgba(6,182,212,.12)' }}>💊</div>
                <div><strong>Smart Advisory</strong><br /><span>Farmer-friendly treatment plan</span></div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div className="hero-stats" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .5 }}>
          <div className="stat-card">
            <FiActivity className="stat-icon" style={{ color: 'var(--green-400)' }} />
            <div className="stat-number"><AnimatedCounter target={100} /></div>
            <div className="stat-label">Training Images</div>
          </div>
          <div className="stat-card">
            <FiShield className="stat-icon" style={{ color: 'var(--amber-400)' }} />
            <div className="stat-number"><AnimatedCounter target={85} /></div>
            <div className="stat-label">Model Accuracy %</div>
          </div>
          <div className="stat-card">
            <FiUsers className="stat-icon" style={{ color: 'var(--cyan-400)' }} />
            <div className="stat-number"><AnimatedCounter target={247} /></div>
            <div className="stat-label">Scans Completed</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
