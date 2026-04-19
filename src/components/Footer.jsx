import { GiWheat } from 'react-icons/gi'
import { FiGithub, FiMail, FiExternalLink } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  const NAV_GROUPS = [
    {
      title: t('footer.sections'),
      links: [
        { label: t('nav.home'),        href: '#home' },
        { label: t('nav.aiConcepts'), href: '#concepts' },
        { label: t('nav.dashboard'),   href: '#dashboard' },
        { label: t('nav.workflow'), href: '#workflow' },
      ],
    },
    {
      title: t('footer.more'),
      links: [
        { label: t('nav.weather'),  href: '#weather' },
        { label: t('nav.dashboard'),     href: '#dashboard' },
        { label: t('nav.workflow'),      href: '#workflow' },
      ],
    },
    {
      title: t('footer.resources'),
      links: [
        { label: 'PlantVillage Dataset', href: 'https://plantvillage.psu.edu/', external: true },
        { label: 'MobileNetV2 Paper',    href: 'https://arxiv.org/abs/1801.04381', external: true },
        { label: 'Recharts Docs',        href: 'https://recharts.org/', external: true },
      ],
    },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#home" className="nav-brand" style={{ marginBottom: 12 }}>
              <GiWheat style={{ fontSize: '1.4rem', color: 'var(--green-400)' }} />
              <span>CropGuard <span className="nav-brand-ai">AI</span></span>
            </a>
            <p className="footer-tagline">
              {t('footer.description')}
            </p>
            <div className="footer-badges">
              <span className="tag tag-green">🎓 College Project</span>
              <span className="tag tag-cyan">⚛️ React + Vite</span>
              <span className="tag tag-amber">📊 Recharts</span>
            </div>
            <div className="footer-socials">
              <a href="https://github.com" className="footer-social" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FiGithub size={18} />
              </a>
              <a href="mailto:cropguard@example.com" className="footer-social" aria-label="Email">
                <FiMail size={18} />
              </a>
              <a href="https://netlify.app" className="footer-social" target="_blank" rel="noreferrer" aria-label="Live Site">
                <FiExternalLink size={18} />
              </a>
            </div>
          </div>

          <div className="footer-cols">
            {NAV_GROUPS.map(g => (
              <div key={g.title} className="footer-col">
                <h4>{g.title}</h4>
                {g.links.map(l => (
                  <a key={l.label} href={l.href} target={l.external ? '_blank' : undefined} rel={l.external ? 'noreferrer' : undefined}>
                    {l.label} {l.external && <FiExternalLink size={10} style={{ opacity: .5 }} />}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack strip */}
        <div className="footer-tech-strip">
          <span style={{ fontSize: '.72rem', color: 'var(--text-muted)', marginRight: 16 }}>{t('footer.builtWith')}</span>
          {['React 19', 'Vite', 'Framer Motion', 'Recharts', 'MobileNetV2', 'PlantVillage'].map(techItem => (
            <span key={techItem} className="footer-tech-tag">{techItem}</span>
          ))}
        </div>

        <div className="footer-bottom">
          <span>{t('footer.copyright')}</span>
          <span>{t('footer.tagline')}</span>
        </div>
      </div>

      <style>{`
        .footer-badges { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 14px; margin-bottom: 14px; }
        .footer-socials { display: flex; gap: 10px; }
        .footer-social { width: 36px; height: 36px; border-radius: var(--radius-md); background: var(--bg-tertiary); border: 1px solid var(--border-color); display: flex; align-items: center; justify-content: center; color: var(--text-muted); text-decoration: none; transition: all .25s; }
        .footer-social:hover { border-color: var(--border-hover); color: var(--green-400); background: rgba(16,185,129,.08); transform: translateY(-2px); }
        .footer-tech-strip { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; padding: 16px 0; border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); margin-bottom: 16px; }
        .footer-tech-tag { font-size: .7rem; font-weight: 600; padding: 3px 10px; border-radius: 100px; background: var(--bg-tertiary); border: 1px solid var(--border-color); color: var(--text-muted); }
      `}</style>
    </footer>
  )
}
