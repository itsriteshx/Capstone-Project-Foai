import { motion } from 'framer-motion'
import { FiEye, FiBook, FiPercent, FiCpu } from 'react-icons/fi'

const CONCEPTS = [
  {
    icon: <FiEye size={28} />,
    tag: 'Milestone 1',
    title: 'Computer Vision',
    subtitle: 'Image Classification',
    color: 'var(--green-400)',
    bg: 'rgba(16,185,129,.08)',
    border: 'rgba(16,185,129,.15)',
    desc: 'A CNN model (MobileNetV2 fine-tuned) classifies uploaded leaf images into 10 disease categories with confidence scoring and severity assessment.',
    points: [
      'MobileNetV2 backbone fine-tuned on PlantVillage dataset',
      'Simulated confidence scores per disease class',
      'Bounding-box overlay for affected leaf regions',
      'Severity heatmap (low / medium / high)',
    ],
    tech: ['CNN', 'MobileNetV2', 'Transfer Learning', 'PlantVillage'],
  },
  {
    icon: <FiBook size={28} />,
    tag: 'Milestone 2',
    title: 'Rule-Based System',
    subtitle: 'Knowledge Mapping',
    color: 'var(--amber-400)',
    bg: 'rgba(251,191,36,.08)',
    border: 'rgba(251,191,36,.15)',
    desc: 'An expert knowledge base maps each detected disease to structured IF-THEN rules covering causes, symptoms, treatment protocols, and prevention strategies.',
    points: [
      '50+ expert rules encoded per disease',
      'Symptom → diagnosis → treatment chain',
      'Farmer-friendly actionable advisory output',
      'Urgency classification for treatment timing',
    ],
    tech: ['Expert System', 'IF-THEN Rules', 'Knowledge Base', 'Advisory Engine'],
  },
  {
    icon: <FiPercent size={28} />,
    tag: 'Milestone 3',
    title: 'Probabilistic Reasoning',
    subtitle: 'Weather Risk Prediction',
    color: 'var(--cyan-400)',
    bg: 'rgba(6,182,212,.08)',
    border: 'rgba(6,182,212,.15)',
    desc: 'A Bayesian-inspired model calculates disease outbreak probability from real-time weather inputs (temperature, humidity, rainfall) and historical patterns.',
    points: [
      'Weighted rule scoring for 5 major diseases',
      'Temperature + Humidity + Rainfall factors',
      'Risk level: Low / Moderate / High / Critical',
      'Seasonal trend analysis from historical CSV data',
    ],
    tech: ['Bayesian Net', 'Probability', 'Weather API', 'Risk Scoring'],
  },
  {
    icon: <FiCpu size={28} />,
    tag: 'Milestone 4',
    title: 'Generative AI',
    subtitle: 'Analytics Dashboard',
    color: 'var(--purple-400)',
    bg: 'rgba(168,85,247,.08)',
    border: 'rgba(168,85,247,.15)',
    desc: 'An analytics dashboard synthesizes detection history, disease trends, and AI-generated insights using Recharts visualizations and LLM-style narrative summaries.',
    points: [
      'Monthly disease trend bar charts',
      'Disease distribution donut chart',
      'AI-generated farm health summary narrative',
      'Historical scan log with filter & export',
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

export default function AIConcepts() {
  return (
    <section id="concepts" className="section-pad">
      <div className="container">
        <motion.div className="section-header" {...fadeUp()}>
          <span className="section-tag">🧠 Four AI Pillars</span>
          <h2 className="section-title">How Our AI System Works</h2>
          <p className="section-desc">
            CropGuard combines four distinct AI techniques to deliver a complete
            farm intelligence pipeline — from image capture to actionable advice.
          </p>
        </motion.div>

        <div className="concepts-grid">
          {CONCEPTS.map((c, i) => (
            <motion.div key={c.title} className="concept-card glass-card" {...fadeUp(i * 0.1)}>
              <div className="concept-icon-wrap" style={{ background: c.bg, border: `1px solid ${c.border}` }}>
                <span style={{ color: c.color }}>{c.icon}</span>
              </div>
              <div className="concept-tag-row">
                <span className="concept-milestone" style={{ color: c.color, background: c.bg, border: `1px solid ${c.border}` }}>{c.tag}</span>
              </div>
              <h3 className="concept-title">{c.title}</h3>
              <p className="concept-subtitle">{c.subtitle}</p>
              <p className="concept-desc">{c.desc}</p>
              <ul className="concept-points">
                {c.points.map(pt => (
                  <li key={pt}><span className="concept-bullet" style={{ background: c.color }} />  {pt}</li>
                ))}
              </ul>
              <div className="concept-tech-row">
                {c.tech.map(t => <span key={t} className="concept-tech-pill" style={{ color: c.color, background: c.bg, border: `1px solid ${c.border}` }}>{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pipeline diagram */}
        <motion.div className="pipeline-row" {...fadeUp(0.3)}>
          {['📸 Image Upload', '🔬 CNN Detection', '📚 Rule Lookup', '🌦️ Weather Risk', '📊 Dashboard'].map((step, i, arr) => (
            <div key={step} className="pipeline-step-wrap">
              <div className="pipeline-step">{step}</div>
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
