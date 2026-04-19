import { motion } from 'framer-motion'
import { DIAGNOSIS_RULES } from '../data/diseaseData'

export default function DiagnosisRules() {
  return (
    <div className="rules-panel-container glass-card section-pad" style={{ marginTop: '40px', padding: '32px' }}>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: '16px', fontWeight: 700 }}>
        🧠 AI Diagnosis Logic (IF-THEN Rules)
      </h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>
        Our inference engine evaluates these 20 expert rules against visual and environmental data to produce a diagnosis.
      </p>
      
      <div className="rules-scroll-area">
        {DIAGNOSIS_RULES.map((rule, idx) => (
          <motion.div key={rule.id} className="rule-card"
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: (idx % 10) * 0.05, duration: 0.3 }}>
            <div className="rule-number">Rule #{rule.id}</div>
            <div className="rule-content">
              <span className="rule-keyword">IF</span>
              <div className="rule-conditions">
                {rule.if.map((cond, i) => (
                  <span key={i} className="rule-condition-tag">
                    {cond}
                    {i < rule.if.length - 1 && <span className="rule-and">AND</span>}
                  </span>
                ))}
              </div>
              <span className="rule-keyword then">THEN</span>
              <span className="rule-outcome tag tag-cyan">{rule.then}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .rules-panel-container {
          border-color: rgba(99, 102, 241, 0.2);
        }
        .rules-scroll-area {
          max-height: 480px;
          overflow-y: auto;
          padding-right: 12px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .rules-scroll-area::-webkit-scrollbar {
          width: 6px;
        }
        .rules-scroll-area::-webkit-scrollbar-thumb {
          background: var(--bg-tertiary);
          border-radius: 3px;
        }
        .rule-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 16px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .rule-number {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          background: var(--bg-tertiary);
          padding: 4px 8px;
          border-radius: var(--radius-sm);
          white-space: nowrap;
        }
        .rule-content {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          font-family: monospace;
          font-size: 0.85rem;
        }
        .rule-keyword {
          font-weight: 800;
          color: var(--purple-400);
        }
        .rule-keyword.then {
          color: var(--green-400);
        }
        .rule-conditions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }
        .rule-condition-tag {
          background: rgba(139, 92, 246, 0.1);
          color: var(--text-secondary);
          padding: 4px 10px;
          border-radius: 100px;
          border: 1px solid rgba(139, 92, 246, 0.2);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .rule-and {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--purple-400);
          margin-left: 4px;
        }
        .rule-outcome {
          font-family: var(--font-body);
          font-weight: 600;
          letter-spacing: 0.02em;
        }
        @media(max-width: 640px) {
          .rule-card { flex-direction: column; gap: 8px; }
        }
      `}</style>
    </div>
  )
}
