import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutPage from './components/AboutPage'
import Detection from './components/Detection'
import KnowledgeBase from './components/KnowledgeBase'
import WeatherPredictor from './components/WeatherPredictor'
import Dashboard from './components/Dashboard'
import Workflow from './components/Workflow'
import Footer from './components/Footer'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [currentPage, setCurrentPage] = useState('home')

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
      <Navbar activeSection={activeSection} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Detection />
            <KnowledgeBase />
            <WeatherPredictor />
            <Dashboard />
            <Workflow />
          </>
        ) : (
          <AboutPage />
        )}
      </main>
      <Footer />
    </>
  )
}
