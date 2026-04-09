import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiChevronDown, FiChevronUp, FiFilter } from 'react-icons/fi'
import { DISEASE_DATABASE } from '../data/diseaseData'

const SEVERITY_COLOR = { none: 'tag-green', low: 'tag-cyan', medium: 'tag-amber', high: 'tag-red' }
const TYPE_COLOR = { Fungal: 'tag-amber', Bacterial: 'tag-cyan', None: 'tag-green' }

export default function KnowledgeBase() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')
  const [expanded, setExpanded] = useState(null)

  const diseases = Object.entries(DISEASE_DATABASE)
  const types = ['All', 'Fungal', 'Bacterial', 'None']

  const filtered = diseases.filter(([, d]) => {
    const matchSearch = search === '' || d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.crop.toLowerCase().includes(search.toLowerCase())
    const matchType = filter === 'All' || d.type === filter
    return matchSearch && matchType
  })

  return (
    <section id="knowledge" className="section-pad">
      <div className="container">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .6 }}>
          <span className="section-tag">📚 Rule-Based System</span>
          <h2 className="section-title">Expert Knowledge Base</h2>
          <p className="section-desc">
            Our IF-THEN rule engine encodes agricultural expert knowledge for each
            disease — covering causes, symptoms, treatments, and prevention protocols.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div className="kb-controls"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .5, delay: .1 }}>
          <div className="kb-search-wrap">
            <FiSearch style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
            <input className="kb-search" placeholder="Search disease or crop…" value={search}
              onChange={e => setSearch(e.target.value)} />
          </div>
          <div className="kb-filter-row">
            <FiFilter size={14} style={{ color: 'var(--text-muted)' }} />
            {types.map(t => (
              <button key={t} className={`kb-filter-btn${filter === t ? ' active' : ''}`}
                onClick={() => setFilter(t)}>{t}</button>
            ))}
          </div>
        </motion.div>

        {/* Disease Cards */}
        <div className="kb-list">
          {filtered.map(([key, d], i) => (
            <motion.div key={key}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: .5, delay: i * .07 }}>
              <div className={`kb-card glass-card${expanded === key ? ' expanded' : ''}`}
                style={{ borderColor: expanded === key ? d.color + '44' : undefined }}>
                <div className="kb-card-head" onClick={() => setExpanded(expanded === key ? null : key)}>
                  <div className="kb-card-icon" style={{ background: d.color + '18', fontSize: '1.6rem' }}>{d.icon}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="kb-row-top">
                      <h3 className="kb-name">{d.name}</h3>
                      <span className={`tag ${TYPE_COLOR[d.type]}`}>{d.type}</span>
                      <span className={`tag ${SEVERITY_COLOR[d.severity]}`} style={{ textTransform: 'capitalize' }}>
                        {d.severity === 'none' ? 'Safe' : d.severity}
                      </span>
                    </div>
                    <p className="kb-crop">Affects: {d.crop}</p>
                    <div className="kb-conf-row">
                      <div className="kb-conf-bar">
                        <div className="kb-conf-fill" style={{ width: `${d.confidence}%`, background: d.color }} />
                      </div>
                      <span style={{ fontSize: '.75rem', color: d.color, fontWeight: 700 }}>{d.confidence}% accuracy</span>
                    </div>
                  </div>
                  <div className="kb-chevron">
                    {expanded === key ? <FiChevronUp /> : <FiChevronDown />}
                  </div>
                </div>

                <AnimatePresence>
                  {expanded === key && (
                    <motion.div className="kb-body"
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: .35 }}>
                      <div className="kb-body-inner">
                        <div className="kb-cause">
                          <span className="kb-cause-label">🔍 Cause</span>
                          <span>{d.cause}</span>
                        </div>
                        <div className="kb-sections">
                          {[
                            { title: '⚠️ Symptoms', items: d.symptoms, color: 'var(--amber-400)' },
                            { title: '💊 Treatment', items: d.treatment, color: 'var(--cyan-400)' },
                            { title: '🛡️ Prevention', items: d.prevention, color: 'var(--green-400)' },
                          ].map(sec => (
                            <div key={sec.title} className="kb-sec">
                              <p className="kb-sec-title" style={{ color: sec.color }}>{sec.title}</p>
                              <ul className="kb-sec-list">
                                {sec.items.map((item, j) => (
                                  <li key={j}>
                                    <span className="kb-bullet" style={{ background: sec.color }} />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="kb-urgency">
                          <span>⏰ Urgency:</span>
                          <strong style={{ color: d.severity === 'high' ? 'var(--red-400)' : d.severity === 'medium' ? 'var(--amber-400)' : 'var(--green-400)' }}>
                            {d.urgency}
                          </strong>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '48px 0', color: 'var(--text-muted)' }}>No diseases match your search.</div>
          )}
        </div>
      </div>

      <style>{`
        .kb-controls { display: flex; gap: 16px; margin-bottom: 32px; flex-wrap: wrap; align-items: center; }
        .kb-search-wrap { flex: 1; min-width: 220px; display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); backdrop-filter: blur(12px); }
        .kb-search { background: none; border: none; outline: none; color: var(--text-primary); font-size: .92rem; width: 100%; font-family: var(--font-body); }
        .kb-search::placeholder { color: var(--text-muted); }
        .kb-filter-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .kb-filter-btn { background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 8px 16px; font-size: .8rem; font-weight: 600; color: var(--text-muted); cursor: pointer; transition: all .25s; }
        .kb-filter-btn.active, .kb-filter-btn:hover { background: rgba(16,185,129,.1); border-color: var(--border-hover); color: var(--green-400); }
        .kb-list { display: flex; flex-direction: column; gap: 12px; }
        .kb-card { overflow: hidden; }
        .kb-card-head { display: flex; align-items: flex-start; gap: 16px; padding: 20px 24px; cursor: pointer; }
        .kb-card-icon { width: 52px; height: 52px; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .kb-row-top { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 4px; }
        .kb-name { font-family: var(--font-display); font-size: 1rem; font-weight: 700; }
        .kb-crop { font-size: .78rem; color: var(--text-muted); margin-bottom: 8px; }
        .kb-conf-row { display: flex; align-items: center; gap: 10px; }
        .kb-conf-bar { flex: 1; height: 4px; background: var(--bg-tertiary); border-radius: 2px; overflow: hidden; max-width: 180px; }
        .kb-conf-fill { height: 100%; border-radius: 2px; }
        .kb-chevron { color: var(--text-muted); flex-shrink: 0; padding-top: 2px; }
        .kb-body { overflow: hidden; }
        .kb-body-inner { padding: 0 24px 24px; border-top: 1px solid var(--border-color); padding-top: 20px; }
        .kb-cause { font-size: .85rem; color: var(--text-secondary); margin-bottom: 20px; display: flex; gap: 10px; line-height: 1.6; }
        .kb-cause-label { color: var(--text-muted); font-weight: 600; white-space: nowrap; }
        .kb-sections { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 16px; }
        .kb-sec-title { font-size: .8rem; font-weight: 700; margin-bottom: 10px; }
        .kb-sec-list { list-style: none; display: flex; flex-direction: column; gap: 6px; }
        .kb-sec-list li { display: flex; align-items: flex-start; gap: 8px; font-size: .8rem; color: var(--text-secondary); line-height: 1.5; }
        .kb-bullet { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; margin-top: 6px; }
        .kb-urgency { font-size: .82rem; color: var(--text-muted); display: flex; align-items: center; gap: 8px; padding-top: 12px; border-top: 1px solid var(--border-color); }
        @media(max-width:768px) { .kb-sections { grid-template-columns: 1fr; } }
        @media(max-width:480px) { .kb-card-head { flex-direction: column; } .kb-row-top { flex-wrap: wrap; } }
      `}</style>
    </section>
  )
}
