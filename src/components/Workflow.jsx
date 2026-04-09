import { motion } from 'framer-motion'
import { FiUploadCloud, FiCpu, FiBook, FiCloudRain, FiBarChart2, FiCheckCircle } from 'react-icons/fi'

const STEPS = [
  {
    num: '01',
    icon: <FiUploadCloud size={26} />,
    title: 'Image Upload',
    color: 'var(--green-400)',
    bg: 'rgba(16,185,129,.1)',
    border: 'rgba(16,185,129,.2)',
    desc: 'Farmer uploads a leaf image via the web interface. The image is validated, resized to 224×224 px, and normalised for model input.',
    tech: ['React File API', 'JPEG / PNG / WEBP', 'Client-side preview'],
    milestone: 'Pre-processing',
  },
  {
    num: '02',
    icon: <FiCpu size={26} />,
    title: 'CNN Classification',
    color: 'var(--amber-400)',
    bg: 'rgba(251,191,36,.1)',
    border: 'rgba(251,191,36,.2)',
    desc: 'MobileNetV2 (fine-tuned on PlantVillage) performs inference. The softmax layer outputs a probability distribution across 10 disease classes.',
    tech: ['MobileNetV2', 'Transfer Learning', 'Softmax Output', 'Top-3 Confidence'],
    milestone: 'Milestone 1 — Vision',
  },
  {
    num: '03',
    icon: <FiBook size={26} />,
    title: 'Rule-Based Advisory',
    color: 'var(--cyan-400)',
    bg: 'rgba(6,182,212,.1)',
    border: 'rgba(6,182,212,.2)',
    desc: 'The top predicted class triggers a lookup in the expert knowledge base. IF-THEN rules map the disease to its cause, symptoms, treatment, and urgency.',
    tech: ['Expert System', 'IF-THEN Rules', 'Symptom Lookup', 'Treatment Plan'],
    milestone: 'Milestone 2 — Rules',
  },
  {
    num: '04',
    icon: <FiCloudRain size={26} />,
    title: 'Weather Risk Score',
    color: 'var(--purple-400)',
    bg: 'rgba(168,85,247,.1)',
    border: 'rgba(168,85,247,.2)',
    desc: 'Current weather parameters (temperature, humidity, rainfall) are fed into a Bayesian scoring engine that calculates outbreak probability for each disease.',
    tech: ['Bayesian Network', 'Weather Factors', 'Risk Scoring', 'Threshold Alerts'],
    milestone: 'Milestone 3 — Probability',
  },
  {
    num: '05',
    icon: <FiBarChart2 size={26} />,
    title: 'Analytics & Gen AI',
    color: 'var(--lime-400)',
    bg: 'rgba(163,230,53,.1)',
    border: 'rgba(163,230,53,.2)',
    desc: 'Detection data is logged to the dashboard. Recharts visualises disease trends. GPT-4o generates a natural-language farm health summary from historical context.',
    tech: ['Recharts', 'GPT-4o Summary', 'Trend Analysis', 'CSV Export'],
    milestone: 'Milestone 4 — Gen AI',
  },
  {
    num: '06',
    icon: <FiCheckCircle size={26} />,
    title: 'Farmer Advisory Output',
    color: 'var(--green-400)',
    bg: 'rgba(16,185,129,.1)',
    border: 'rgba(16,185,129,.2)',
    desc: 'A concise, farmer-friendly report is displayed: disease name, confidence, severity, root cause, step-by-step treatment, and weather-adjusted risk level.',
    tech: ['Clarity-first UX', 'Local Language Ready', 'Print / Share', 'History Log'],
    milestone: 'Output',
  },
]

const ETHICAL_POINTS = [
  { icon: '🔒', title: 'Data Privacy', desc: 'No images are stored on servers. All processing happens client-side or is discarded after inference.' },
  { icon: '⚖️', title: 'Fairness',     desc: 'Training data includes crop varieties from South Asia, Africa, and South America to reduce regional bias.' },
  { icon: '👁️', title: 'Transparency', desc: 'Confidence scores are always displayed. The system never hides uncertainty or fabricates diagnoses.' },
  { icon: '🤝', title: 'Human-in-Loop', desc: 'AI recommendations are advisory only. Farmers are encouraged to verify with local agronomists for high-severity cases.' },
]

export default function Workflow() {
  return (
    <section id="workflow" className="section-pad">
      <div className="container">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .6 }}>
          <span className="section-tag">⚙️ System Architecture</span>
          <h2 className="section-title">End-to-End AI Workflow</h2>
          <p className="section-desc">
            Six interconnected stages transform a raw leaf photo into a complete,
            actionable farm advisory — powered by four AI paradigms.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="wf-steps">
          {STEPS.map((s, i) => (
            <motion.div key={s.num}
              initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: .55, delay: i * .08 }}>
              <div className="wf-step glass-card">
                {/* Connector line */}
                {i < STEPS.length - 1 && <div className="wf-line" style={{ background: `linear-gradient(to bottom, ${s.color}, ${STEPS[i+1].color})` }} />}

                <div className="wf-step-left">
                  <div className="wf-icon-wrap" style={{ background: s.bg, border: `1px solid ${s.border}` }}>
                    <span style={{ color: s.color }}>{s.icon}</span>
                  </div>
                  <div className="wf-num-badge" style={{ color: s.color, background: s.bg, border: `1px solid ${s.border}` }}>{s.num}</div>
                </div>

                <div className="wf-step-body">
                  <div className="wf-step-top">
                    <h3 className="wf-title">{s.title}</h3>
                    <span className="wf-milestone" style={{ color: s.color, background: s.bg, border: `1px solid ${s.border}` }}>{s.milestone}</span>
                  </div>
                  <p className="wf-desc">{s.desc}</p>
                  <div className="wf-tech-row">
                    {s.tech.map(t => (
                      <span key={t} className="wf-tech-pill" style={{ color: s.color, background: s.bg, border: `1px solid ${s.border}` }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Data Flow diagram */}
        <motion.div className="wf-flow glass-card"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .6 }}>
          <h3 className="wf-flow-title">📐 Data Flow Summary</h3>
          <div className="wf-flow-blocks">
            {[
              { label: 'Input', icon: '🖼️', sub: 'Leaf image\n224×224 px', color: 'var(--green-400)' },
              { label: 'CNN', icon: '🧠', sub: 'Feature extraction\n+ classification', color: 'var(--amber-400)' },
              { label: 'Rules', icon: '📚', sub: 'Expert lookup\n+ advisory', color: 'var(--cyan-400)' },
              { label: 'Weather', icon: '🌦️', sub: 'Bayesian risk\nscoring', color: 'var(--purple-400)' },
              { label: 'Output', icon: '📋', sub: 'Farmer advisory\n+ dashboard', color: 'var(--lime-400)' },
            ].map((b, i, arr) => (
              <div key={b.label} className="wf-flow-item-wrap">
                <div className="wf-flow-block" style={{ '--accent': b.color, borderColor: b.color + '33' }}>
                  <span className="wf-flow-icon">{b.icon}</span>
                  <span className="wf-flow-label" style={{ color: b.color }}>{b.label}</span>
                  <span className="wf-flow-sub">{b.sub}</span>
                </div>
                {i < arr.length - 1 && <div className="wf-flow-arrow" style={{ color: b.color }}>→</div>}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Ethics */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .6, delay: .1 }}>
          <h3 className="wf-ethics-title">🌍 Ethical AI Considerations</h3>
          <div className="wf-ethics-grid">
            {ETHICAL_POINTS.map(e => (
              <div key={e.title} className="wf-ethics-card glass-card">
                <div className="wf-ethics-icon">{e.icon}</div>
                <h4 className="wf-ethics-name">{e.title}</h4>
                <p className="wf-ethics-desc">{e.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .wf-steps { display: flex; flex-direction: column; gap: 0; margin-bottom: 40px; position: relative; }
        .wf-step { display: flex; gap: 24px; padding: 28px 32px; margin-bottom: 12px; position: relative; overflow: visible; }
        .wf-line { position: absolute; left: 56px; bottom: -12px; width: 2px; height: 12px; z-index: 0; }
        .wf-step-left { display: flex; flex-direction: column; align-items: center; gap: 8px; flex-shrink: 0; }
        .wf-icon-wrap { width: 52px; height: 52px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .wf-num-badge { font-family: var(--font-display); font-size: .7rem; font-weight: 800; padding: 2px 10px; border-radius: 100px; }
        .wf-step-body { flex: 1; }
        .wf-step-top { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; flex-wrap: wrap; }
        .wf-title { font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; }
        .wf-milestone { font-size: .7rem; font-weight: 700; padding: 3px 12px; border-radius: 100px; white-space: nowrap; }
        .wf-desc { font-size: .88rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 14px; }
        .wf-tech-row { display: flex; flex-wrap: wrap; gap: 8px; }
        .wf-tech-pill { font-size: .72rem; font-weight: 600; padding: 4px 12px; border-radius: 100px; }
        .wf-flow { padding: 28px 32px; margin-bottom: 40px; }
        .wf-flow-title { font-family: var(--font-display); font-size: 1rem; font-weight: 700; margin-bottom: 20px; }
        .wf-flow-blocks { display: flex; align-items: center; flex-wrap: wrap; gap: 0; justify-content: center; }
        .wf-flow-item-wrap { display: flex; align-items: center; }
        .wf-flow-block { display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 18px 20px; background: var(--bg-tertiary); border: 1px solid; border-radius: var(--radius-lg); min-width: 110px; text-align: center; transition: transform .3s; }
        .wf-flow-block:hover { transform: translateY(-4px); }
        .wf-flow-icon { font-size: 1.6rem; }
        .wf-flow-label { font-family: var(--font-display); font-size: .82rem; font-weight: 700; }
        .wf-flow-sub { font-size: .67rem; color: var(--text-muted); white-space: pre-line; line-height: 1.4; }
        .wf-flow-arrow { font-size: 1.2rem; padding: 0 10px; flex-shrink: 0; }
        .wf-ethics-title { font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; margin-bottom: 20px; }
        .wf-ethics-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
        .wf-ethics-card { padding: 24px; }
        .wf-ethics-icon { font-size: 1.8rem; margin-bottom: 12px; }
        .wf-ethics-name { font-family: var(--font-display); font-size: .92rem; font-weight: 700; margin-bottom: 8px; }
        .wf-ethics-desc { font-size: .8rem; color: var(--text-secondary); line-height: 1.6; }
        @media(max-width:900px) { .wf-step { flex-direction: column; gap: 16px; } .wf-step-left { flex-direction: row; } .wf-ethics-grid { grid-template-columns: repeat(2,1fr); } }
        @media(max-width:600px) { .wf-flow-blocks { flex-direction: column; } .wf-flow-arrow { transform: rotate(90deg); } .wf-ethics-grid { grid-template-columns: 1fr; } .wf-step { padding: 20px; } }
      `}</style>
    </section>
  )
}
