import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { GiWheat } from 'react-icons/gi'

const HOME_NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'knowledge', label: 'Knowledge' },
  { id: 'weather', label: 'Weather' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'workflow', label: 'Workflow' },
]

export default function Navbar({ activeSection, currentPage, setCurrentPage }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a 
          href="#home" 
          className="nav-brand" 
          onClick={(e) => {
            e.preventDefault()
            if (currentPage !== 'home') setCurrentPage('home')
            setMenuOpen(false)
            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50)
          }}
        >
          <GiWheat style={{ fontSize: '1.5rem', color: 'var(--green-400)' }} />
          <span>CropGuard <span className="nav-brand-ai">AI</span></span>
        </a>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {HOME_NAV_ITEMS.map(n => (
            <li key={n.id}>
              <a 
                href={`#${n.id}`} 
                className={currentPage === 'home' && activeSection === n.id ? 'active' : ''} 
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage !== 'home') setCurrentPage('home');
                  setMenuOpen(false);
                  setTimeout(() => {
                    const el = document.getElementById(n.id);
                    if (el) {
                       const top = el.getBoundingClientRect().top + window.scrollY - 80;
                       window.scrollTo({ top, behavior: 'smooth' });
                    }
                  }, 50);
                }}
              >
                {n.label}
              </a>
            </li>
          ))}
          <li>
            <a 
               href="#about"
               className={currentPage === 'about' ? 'active' : ''}
               onClick={(e) => {
                  e.preventDefault();
                  if (currentPage !== 'about') setCurrentPage('about');
                  setMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
               }}
            >
              About AI
            </a>
          </li>
        </ul>
        <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <FiX size={22} color="var(--text-primary)" /> : <><span /><span /><span /></>}
        </button>
      </div>
    </nav>
  )
}
