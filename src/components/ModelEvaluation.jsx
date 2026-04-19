import { motion } from 'framer-motion'
import { FiTarget } from 'react-icons/fi'

export default function ModelEvaluation() {
  const confusionData = [
    { trueLabel: 'Early Blight', predicted: [112, 4, 1, 3] },
    { trueLabel: 'Late Blight', predicted: [2, 89, 0, 5] },
    { trueLabel: 'Powdery Mildew', predicted: [0, 1, 145, 2] },
    { trueLabel: 'Healthy', predicted: [1, 3, 2, 210] }
  ]
  const cols = ['Early Blight', 'Late Blight', 'Powdery Mild', 'Healthy']

  return (
    <div className="eval-panel-container glass-card section-pad" style={{ marginTop: '32px', padding: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}>
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>
            <FiTarget style={{color:'var(--amber-400)'}}/> Model Evaluation & Accuracy
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: 8 }}>
            Performance metrics based on our 2026 validation dataset.
          </p>
        </div>
        <div style={{ textAlign: 'right', background: 'rgba(16,185,129,0.1)', padding: '12px 24px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(16,185,129,0.2)' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--green-400)', fontWeight: 700, marginBotto: 4 }}>OVERALL ACCURACY</div>
          <div style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>96.4%</div>
        </div>
      </div>

      <div className="eval-grid">
        <motion.div className="eval-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h4 style={{ fontSize: '0.9rem', marginBottom: 16, color: 'var(--text-muted)' }}>Test Results Summary</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div className="eval-stat-row">
              <span>Total Test Images</span>
              <strong>5,420</strong>
            </div>
            <div className="eval-stat-row">
              <span>Correct Predictions</span>
              <strong style={{color:'var(--green-400)'}}>5,225</strong>
            </div>
            <div className="eval-stat-row">
              <span>False Positives</span>
              <strong style={{color:'var(--red-400)'}}>195</strong>
            </div>
          </div>
          
          <div style={{ marginTop: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: 8 }}>
              <span>Accuracy Progress Goal</span>
              <span style={{color:'var(--cyan-400)', fontWeight:700}}>96.4% / 98.0%</span>
            </div>
            <div style={{ height: 8, background: 'var(--bg-tertiary)', borderRadius: 4, overflow: 'hidden' }}>
              <motion.div initial={{ width: 0 }} whileInView={{ width: '96.4%' }} viewport={{ once:true }} transition={{ duration: 1 }} style={{ height: '100%', background: 'var(--cyan-400)', borderRadius: 4 }} />
            </div>
          </div>
        </motion.div>

        <motion.div className="eval-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <h4 style={{ fontSize: '0.9rem', marginBottom: 16, color: 'var(--text-muted)' }}>Confusion Matrix (Sample 580)</h4>
          <div className="matrix-wrapper">
            <table className="confusion-matrix">
              <thead>
                <tr>
                  <th>True \\ Pred</th>
                  {cols.map(c => <th key={c} title={c}>{c.substring(0,3)}</th>)}
                </tr>
              </thead>
              <tbody>
                {confusionData.map((row, i) => (
                  <tr key={i}>
                    <th>{row.trueLabel}</th>
                    {row.predicted.map((val, j) => (
                      <td key={j} className={i === j ? 'correct-cell' : val > 0 ? 'error-cell' : 'zero-cell'}>
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ display: 'flex', gap: 16, marginTop: 12, fontSize: '0.75rem', justifyContent: 'center' }}>
            <span style={{ display:'flex', alignItems:'center', gap:4 }}><div style={{width:10,height:10,background:'rgba(16,185,129,0.2)'}}/> Correct</span>
            <span style={{ display:'flex', alignItems:'center', gap:4 }}><div style={{width:10,height:10,background:'rgba(239,68,68,0.2)'}}/> Incorrect</span>
          </div>
        </motion.div>
      </div>

      <style>{`
        .eval-panel-container { border-color: rgba(56, 189, 248, 0.2); }
        .eval-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 24px; }
        .eval-card { padding: 20px; background: var(--bg-secondary); border-radius: var(--radius-md); border: 1px solid var(--border-color); }
        .eval-stat-row { display: flex; justify-content: space-between; align-items: center; padding-bottom: 8px; border-bottom: 1px solid var(--border-color); font-size: 0.9rem; }
        .eval-stat-row:last-child { border-bottom: none; padding-bottom: 0; }
        .matrix-wrapper { overflow-x: auto; }
        .confusion-matrix { width: 100%; border-collapse: collapse; font-size: 0.8rem; text-align: center; }
        .confusion-matrix th, .confusion-matrix td { padding: 10px; border: 1px solid var(--border-color); }
        .confusion-matrix th { background: var(--bg-tertiary); color: var(--text-muted); font-weight: 600; white-space: nowrap; }
        .confusion-matrix th:first-child { text-align: left; }
        .correct-cell { background: rgba(16,185,129,0.15); color: var(--green-400); font-weight: 700; }
        .error-cell { background: rgba(239,68,68,0.15); color: var(--red-400); font-weight: 700; }
        .zero-cell { color: var(--text-muted); opacity: 0.5; }
        @media(max-width: 800px) { .eval-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  )
}
