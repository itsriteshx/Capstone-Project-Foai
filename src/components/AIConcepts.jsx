import { motion } from 'framer-motion'
import { FiEye, FiBook, FiPercent, FiCpu, FiCloudDrizzle, FiZap } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

export default function AIConcepts() {
  const { t } = useTranslation()

  const CONCEPTS = [
    {
      icon: <FiEye size={28} />,
      tagKey: 'Milestone 1',
      titleKey: 'aiConcepts.m1.title',
      subtitleKey: 'aiConcepts.m1.subtitle',
      color: 'var(--green-400)',
      bg: 'rgba(16,185,129,.08)',
      border: 'rgba(16,185,129,.15)',
      descKey: 'aiConcepts.m1.desc',
      points: [
          t('aiConcepts.m1.p1'),
          t('aiConcepts.m1.p2'),
          t('aiConcepts.m1.p3'),
          t('aiConcepts.m1.p4')
      ],
      tech: ['CNN', 'MobileNetV2', 'Transfer Learning', 'PlantVillage'],
    },
    {
      icon: <FiBook size={28} />,
      tagKey: 'Milestone 2',
      titleKey: 'aiConcepts.m2.title',
      subtitleKey: 'aiConcepts.m2.subtitle',
      color: 'var(--amber-400)',
      bg: 'rgba(251,191,36,.08)',
      border: 'rgba(251,191,36,.15)',
      descKey: 'aiConcepts.m2.desc',
      points: [
          t('aiConcepts.m2.p1'),
          t('aiConcepts.m2.p2'),
          t('aiConcepts.m2.p3'),
          t('aiConcepts.m2.p4')
      ],
      tech: ['Expert System', 'IF-THEN Rules', 'Knowledge Base', 'Advisory Engine'],
    },
    {
      icon: <FiPercent size={28} />,
      tagKey: 'Milestone 3',
      titleKey: 'aiConcepts.m3.title',
      subtitleKey: 'aiConcepts.m3.subtitle',
      color: 'var(--cyan-400)',
      bg: 'rgba(6,182,212,.08)',
      border: 'rgba(6,182,212,.15)',
      descKey: 'aiConcepts.m3.desc',
      points: [
          t('aiConcepts.m3.p1'),
          t('aiConcepts.m3.p2'),
          t('aiConcepts.m3.p3'),
          t('aiConcepts.m3.p4')
      ],
      tech: ['Bayesian Net', 'Probability', 'Weather API', 'Risk Scoring'],
    },
    {
      icon: <FiCpu size={28} />,
      tagKey: 'Milestone 4',
      titleKey: 'aiConcepts.m4.title',
      subtitleKey: 'aiConcepts.m4.subtitle',
      color: 'var(--purple-400)',
      bg: 'rgba(168,85,247,.08)',
      border: 'rgba(168,85,247,.15)',
      descKey: 'aiConcepts.m4.desc',
      points: [
          t('aiConcepts.m4.p1'),
          t('aiConcepts.m4.p2'),
          t('aiConcepts.m4.p3'),
          t('aiConcepts.m4.p4')
      ],
      tech: ['Dashboard', 'Recharts', 'Gen AI', 'Data Analytics'],
    },
  ]

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: .6, delay },
  })

  return (
    <section id="concepts" className="section-pad">
      <div className="container">
        <motion.div className="section-header" {...fadeUp()}>
          <span className="section-tag">🧠 {t('features.aiConcepts')}</span>
          <h2 className="section-title">{t('aiConcepts.title')}</h2>
          <p className="section-desc">
            {t('aiConcepts.subtitle')}
          </p>
        </motion.div>

        <div className="concepts-grid">
          {CONCEPTS.map((c, i) => (
            <motion.div key={c.titleKey} className="concept-card glass-card" {...fadeUp(i * 0.1)}>
              <div className="concept-icon-wrap" style={{ background: c.bg, border: `1px solid ${c.border}` }}>
                <span style={{ color: c.color }}>{c.icon}</span>
              </div>
              <div className="concept-tag-row">
                <span className="concept-milestone" style={{ color: c.color, background: c.bg, border: `1px solid ${c.border}` }}>{c.tagKey}</span>
              </div>
              <h3 className="concept-title">{t(c.titleKey)}</h3>
              <p className="concept-subtitle">{t(c.subtitleKey)}</p>
              <p className="concept-desc">{t(c.descKey)}</p>
              <ul className="concept-points">
                {c.points.map(pt => (
                  <li key={pt}><span className="concept-bullet" style={{ background: c.color }} />  {pt}</li>
                ))}
              </ul>
              <div className="concept-tech-row">
                {c.tech.map(techItem => <span key={techItem} className="concept-tech-pill" style={{ color: c.color, background: c.bg, border: `1px solid ${c.border}` }}>{techItem}</span>)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pipeline diagram */}
        <motion.div className="pipeline-row" {...fadeUp(0.3)}>
          {[
            { key: 'aiConcepts.pipeline.step1', icon: '📸' },
            { key: 'aiConcepts.pipeline.step2', icon: '🔬' },
            { key: 'aiConcepts.pipeline.step3', icon: '📚' },
            { key: 'aiConcepts.pipeline.step4', icon: '🌦️' },
            { key: 'aiConcepts.pipeline.step5', icon: '📊' }
          ].map((step, i, arr) => (
            <div key={step.key} className="pipeline-step-wrap">
              <div className="pipeline-step">{step.icon} {t(step.key)}</div>
              {i < arr.length - 1 && <div className="pipeline-arrow">→</div>}
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .concepts-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-bottom: 48px; }
        .concept-card { padding: 32px; display: flex; flex-direction: column; gap: 0; }
        .concept-icon-wrap { width: 56px; height: 56px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
        .concept-tag-row { margin-bottom: 8px; }
        .concept-milestone { font-size: .72rem; font-weight: 700; padding: 4px 14px; border-radius: 100px; letter-spacing: .04em; }
        .concept-title { font-family: var(--font-display); font-size: 1.35rem; font-weight: 700; margin-bottom: 4px; margin-top: 12px; }
        .concept-subtitle { font-size: .82rem; color: var(--text-muted); font-weight: 500; margin-bottom: 14px; }
        .concept-desc { font-size: .92rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 18px; }
        .concept-points { list-style: none; display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; }
        .concept-points li { display: flex; align-items: flex-start; gap: 10px; font-size: .85rem; color: var(--text-secondary); line-height: 1.5; }
        .concept-bullet { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; margin-top: 6px; }
        .concept-tech-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: auto; padding-top: 16px; border-top: 1px solid var(--border-color); }
        .concept-tech-pill { font-size: .7rem; font-weight: 600; padding: 4px 12px; border-radius: 100px; }
        .pipeline-row { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 0; padding: 28px 40px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-xl); backdrop-filter: blur(16px); }
        .pipeline-step-wrap { display: flex; align-items: center; gap: 0; }
        .pipeline-step { font-size: .85rem; font-weight: 600; color: var(--text-secondary); padding: 10px 18px; border-radius: var(--radius-md); background: var(--bg-tertiary); border: 1px solid var(--border-color); white-space: nowrap; }
        .pipeline-arrow { font-size: 1.1rem; color: var(--green-500); padding: 0 12px; }
        @media(max-width:900px) { .concepts-grid { grid-template-columns: 1fr; } }
        @media(max-width:600px) { .pipeline-row { flex-direction: column; } .pipeline-arrow { transform: rotate(90deg); } .pipeline-step { width: 100%; text-align: center; } }
      `}</style>
    </section>
  )
}
