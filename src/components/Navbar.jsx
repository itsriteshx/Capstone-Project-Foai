import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { GiWheat } from 'react-icons/gi'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'react-i18next'

const NAV_ITEMS = [
  { id: 'home', labelKey: 'nav.home' },
  { id: 'concepts', labelKey: 'nav.aiConcepts' },
  { id: 'weather', labelKey: 'nav.weather' },
  { id: '/dashboard_page', labelKey: 'nav.dashboard' },
  { id: '/about_page', labelKey: 'nav.aboutAI' },
  { id: 'workflow', labelKey: 'nav.workflow' },
]

export default function Navbar({ activeSection, currentPage }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#home" className="nav-brand" onClick={() => setMenuOpen(false)}>
          <GiWheat style={{ fontSize: '1.5rem', color: 'var(--green-400)' }} />
          <span>CropGuard <span className="nav-brand-ai">AI</span></span>
        </a>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {NAV_ITEMS.map(n => {
            const isDashboard = n.id === '/dashboard_page';
            const isAbout = n.id === '/about_page';
            const isDetection = n.id === '/detection_page';
            
            let isActive = false;
            if (isDashboard) isActive = currentPage === 'dashboard';
            else if (isAbout) isActive = currentPage === 'about';
            else if (isDetection) isActive = currentPage === 'detection';
            else isActive = (currentPage === 'home' && activeSection === n.id);

            const href = `#${n.id}`;

            return (
              <li key={n.id}>
                <a href={href} className={isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>
                  {t(n.labelKey)}
                </a>
              </li>
            );
          })}
          <li style={{ display: 'flex', alignItems: 'center', marginLeft: '8px' }}>
            <LanguageSwitcher />
          </li>
        </ul>
        <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <FiX size={22} color="var(--text-primary)" /> : <><span /><span /><span /></>}
        </button>
      </div>
    </nav>
  )
}
