import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutPage from './components/AboutPage'
import AIConcepts from './components/AIConcepts'
import Detection from './components/Detection'
import KnowledgeBase from './components/KnowledgeBase'
import WeatherPredictor from './components/WeatherPredictor'
import Dashboard from './components/Dashboard'
import Workflow from './components/Workflow'
import Footer from './components/Footer'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [currentPage, setCurrentPage] = useState(() => {
    if (window.location.hash.includes('/knowledge_page')) return 'knowledge';
    if (window.location.hash.includes('/dashboard_page')) return 'dashboard';
    if (window.location.hash.includes('/about_page')) return 'about';
    if (window.location.hash.includes('/detection_page')) return 'detection';
    return 'home';
  })

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.includes('/knowledge_page')) {
        setCurrentPage('knowledge')
        window.scrollTo(0, 0)
      } else if (window.location.hash.includes('/dashboard_page')) {
        setCurrentPage('dashboard')
        window.scrollTo(0, 0)
      } else if (window.location.hash.includes('/about_page')) {
        setCurrentPage('about')
        window.scrollTo(0, 0)
      } else if (window.location.hash.includes('/detection_page')) {
        setCurrentPage('detection')
        window.scrollTo(0, 0)
      } else {
        setCurrentPage('home')
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (currentPage !== 'home') return;
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) })
    }, { rootMargin: '-30% 0px -60% 0px' })
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [currentPage])

  return (
    <>
      <div className="ambient-bg">
        <div className="ambient-orb orb-1" />
        <div className="ambient-orb orb-2" />
        <div className="ambient-orb orb-3" />
      </div>
      <Navbar activeSection={activeSection} currentPage={currentPage} />
      <main style={{ minHeight: '100vh', paddingTop: (currentPage !== 'home') ? '80px' : '0' }}>
        {currentPage === 'knowledge' ? (
          <KnowledgeBase />
        ) : currentPage === 'dashboard' ? (
          <Dashboard />
        ) : currentPage === 'about' ? (
          <AboutPage />
        ) : currentPage === 'detection' ? (
          <Detection />
        ) : (
          <>
            <Hero />
            <AIConcepts />
            <WeatherPredictor />
            <Workflow />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
