import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiTrendingUp, FiAlertCircle } from 'react-icons/fi'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, Sector,
} from 'recharts'
import { SAMPLE_RECORDS, MONTHLY_CHART_DATA, DISEASE_DISTRIBUTION } from '../data/diseaseData'

const STATUS_TAG = {
  Healthy: 'tag-green', Recovered: 'tag-green',
  Treated: 'tag-cyan', Monitoring: 'tag-cyan', Treating: 'tag-cyan',
  Critical: 'tag-red', Failed: 'tag-red',
}

const STATS = [
  { label: 'Total Scans', value: '247', icon: '🔬', color: 'var(--green-400)' },
  { label: 'Diseases Caught', value: '144', icon: '⚠️', color: 'var(--amber-400)' },
  { label: 'Healthy Crops', value: '103', icon: '✅', color: 'var(--cyan-400)' },
  { label: 'Farmers Helped', value: '89', icon: '👨‍🌾', color: 'var(--purple-400)' },
]

function ActiveShape({ cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload }) {
  return (
    <g>
      <text x={cx} y={cy - 14} textAnchor="middle" fill="var(--text-primary)" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16 }}>{payload.value}</text>
      <text x={cx} y={cy + 10} textAnchor="middle" fill="var(--text-muted)" style={{ fontSize: 11 }}>{payload.name}</text>
      <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius + 8} startAngle={startAngle} endAngle={endAngle} fill={fill} />
      <Sector cx={cx} cy={cy} innerRadius={innerRadius - 4} outerRadius={innerRadius - 1} startAngle={startAngle} endAngle={endAngle} fill={fill} />
    </g>
  )
}

const AI_SUMMARY = `Based on the last 6 months of scan data, our AI analysis reveals that Powdery Mildew is the most prevalent disease (60 cases), peaking in February during dry-moderate humidity conditions. Late Blight shows a concerning spike in October that correlates with the monsoon season rainfall data (>100mm/month). Overall farm health has improved by 23% since November — attributed to increased awareness and early treatment adoption. Recommendation: Pre-apply Sulfur WP before March as temperatures enter the 20-28°C Powdery Mildew risk window.`

export default function Dashboard() {
  const [activePie, setActivePie] = useState(0)
  const [searchRec, setSearchRec] = useState('')

  const filteredRecords = SAMPLE_RECORDS.filter(r =>
    r.farmer.toLowerCase().includes(searchRec.toLowerCase()) ||
    r.disease.toLowerCase().includes(searchRec.toLowerCase()) ||
    r.crop.toLowerCase().includes(searchRec.toLowerCase())
  )

  return (
    <section id="dashboard" className="section-pad">
      <div className="container">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .6 }}>
          <span className="section-tag">📊 Analytics Dashboard</span>
          <h2 className="section-title">Farm Intelligence Overview</h2>
          <p className="section-desc">
            AI-generated analytics synthesizing detection history, disease trends,
            and actionable insights across all monitoring sessions.
          </p>
        </motion.div>

        {/* Stat Row */}
        <div className="dash-stats">
          {STATS.map((s, i) => (
            <motion.div key={s.label} className="dash-stat-card glass-card"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: .5, delay: i * .08 }}>
              <div className="dash-stat-icon" style={{ background: s.color + '18' }}>{s.icon}</div>
              <div>
                <div className="dash-stat-val" style={{ color: s.color }}>{s.value}</div>
                <div className="dash-stat-label">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="dash-charts-row">
          {/* Bar Chart */}
          <motion.div className="glass-card dash-chart-card"
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: .6 }}>
            <div className="dash-chart-head">
              <h3 className="dash-chart-title"><FiTrendingUp style={{ color: 'var(--green-400)' }} /> Monthly Disease Trends</h3>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={MONTHLY_CHART_DATA} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(52,211,153,.06)" />
                <XAxis dataKey="month" tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'var(--text-muted)', fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 8, color: 'var(--text-primary)', fontSize: 12 }} />
                <Legend wrapperStyle={{ fontSize: 11, color: 'var(--text-muted)' }} />
                <Bar dataKey="earlyBlight"    name="Early Blight"    fill="#f59e0b" radius={[3,3,0,0]} />
                <Bar dataKey="lateBlight"     name="Late Blight"     fill="#ef4444" radius={[3,3,0,0]} />
                <Bar dataKey="powderyMildew"  name="Powdery Mildew"  fill="#8b5cf6" radius={[3,3,0,0]} />
                <Bar dataKey="leafSpot"       name="Leaf Spot"       fill="#6366f1" radius={[3,3,0,0]} />
                <Bar dataKey="healthy"        name="Healthy"         fill="#10b981" radius={[3,3,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Donut + legend */}
          <motion.div className="glass-card dash-chart-card"
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: .6, delay: .1 }}>
            <div className="dash-chart-head">
              <h3 className="dash-chart-title">🍩 Disease Distribution</h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <ResponsiveContainer width={180} height={180}>
                <PieChart>
                  <Pie data={DISEASE_DISTRIBUTION} cx="50%" cy="50%" innerRadius={50} outerRadius={80}
                    dataKey="value" activeIndex={activePie} activeShape={<ActiveShape />}
                    onMouseEnter={(_, i) => setActivePie(i)}>
                    {DISEASE_DISTRIBUTION.map((d, i) => <Cell key={i} fill={d.color} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="donut-legend">
                {DISEASE_DISTRIBUTION.map((d, i) => (
                  <div key={i} className="donut-legend-item" onMouseEnter={() => setActivePie(i)}>
                    <span className="donut-dot" style={{ background: d.color }} />
                    <span className="donut-name">{d.name}</span>
                    <span className="donut-count" style={{ color: d.color }}>{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* AI Insight Box */}
        <motion.div className="ai-insight glass-card"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .6 }}>
          <div className="ai-insight-head">
            <div className="ai-badge">🤖 AI</div>
            <h3 className="ai-insight-title">AI-Generated Farm Health Summary</h3>
            <span className="tag tag-green" style={{ fontSize: '.72rem' }}>Auto-generated</span>
          </div>
          <p className="ai-insight-body">{AI_SUMMARY}</p>
          <div className="ai-insight-footer">
            <FiAlertCircle size={13} style={{ color: 'var(--text-muted)' }} />
            <span>Generated using GPT-4o with historical scan context — for demonstration purposes</span>
          </div>
        </motion.div>

        {/* History Table */}
        <motion.div className="glass-card dash-table-card"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .6, delay: .1 }}>
          <div className="dash-table-head">
            <h3 className="dash-chart-title">📋 Detection History</h3>
            <div style={{ display: 'flex', gap: 10 }}>
              <input className="form-input" style={{ width: 200, padding: '8px 12px', fontSize: '.82rem' }}
                placeholder="Search records…" value={searchRec} onChange={e => setSearchRec(e.target.value)} />
              <button className="btn btn-outline" style={{ padding: '8px 14px', fontSize: '.78rem' }}>
                <FiDownload size={14} /> Export
              </button>
            </div>
          </div>
          <div className="dash-table-wrap">
            <table className="dash-table">
              <thead>
                <tr>
                  {['Date','Farmer','Crop','Disease','Confidence','Severity','Status'].map(h => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredRecords.map((r, i) => (
                  <tr key={i}>
                    <td>{r.date}</td>
                    <td>{r.farmer}</td>
                    <td>{r.crop}</td>
                    <td style={{ fontWeight: 600 }}>{r.disease}</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <div style={{ width: 50, height: 4, background: 'var(--bg-tertiary)', borderRadius: 2, overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${r.confidence}%`, background: 'var(--green-400)', borderRadius: 2 }} />
                        </div>
                        <span style={{ fontSize: '.75rem', color: 'var(--green-400)', fontWeight: 700 }}>{r.confidence}%</span>
                      </div>
                    </td>
                    <td><span className={`tag ${r.severity === 'High' ? 'tag-red' : r.severity === 'Medium' ? 'tag-amber' : r.severity === 'Low' ? 'tag-cyan' : 'tag-green'}`}>{r.severity}</span></td>
                    <td><span className={`tag ${STATUS_TAG[r.status] || 'tag-cyan'}`}>{r.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      <style>{`
        .dash-stats { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; margin-bottom: 28px; }
        .dash-stat-card { padding: 20px 24px; display: flex; align-items: center; gap: 16px; }
        .dash-stat-icon { width: 48px; height: 48px; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; flex-shrink: 0; }
        .dash-stat-val { font-family: var(--font-display); font-size: 1.6rem; font-weight: 800; line-height: 1; }
        .dash-stat-label { font-size: .75rem; color: var(--text-muted); font-weight: 500; margin-top: 4px; }
        .dash-charts-row { display: grid; grid-template-columns: 1.4fr 1fr; gap: 20px; margin-bottom: 20px; }
        .dash-chart-card { padding: 24px; }
        .dash-chart-head { margin-bottom: 16px; }
        .dash-chart-title { font-family: var(--font-display); font-size: .95rem; font-weight: 700; display: flex; align-items: center; gap: 8px; }
        .donut-legend { display: flex; flex-direction: column; gap: 8px; flex: 1; }
        .donut-legend-item { display: flex; align-items: center; gap: 8px; cursor: pointer; padding: 4px 6px; border-radius: var(--radius-sm); transition: background .2s; }
        .donut-legend-item:hover { background: var(--bg-tertiary); }
        .donut-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
        .donut-name { font-size: .78rem; color: var(--text-secondary); flex: 1; }
        .donut-count { font-size: .78rem; font-weight: 700; }
        .ai-insight { padding: 28px 32px; margin-bottom: 20px; border-color: rgba(16,185,129,.2); }
        .ai-insight-head { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; flex-wrap: wrap; }
        .ai-badge { background: var(--gradient-green); color: #000; font-size: .72rem; font-weight: 800; padding: 4px 12px; border-radius: 100px; }
        .ai-insight-title { font-family: var(--font-display); font-size: 1rem; font-weight: 700; flex: 1; }
        .ai-insight-body { font-size: .9rem; color: var(--text-secondary); line-height: 1.8; margin-bottom: 14px; }
        .ai-insight-footer { display: flex; align-items: center; gap: 6px; font-size: .72rem; color: var(--text-muted); }
        .dash-table-card { padding: 24px; }
        .dash-table-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 12px; }
        .dash-table-wrap { overflow-x: auto; }
        .dash-table { width: 100%; border-collapse: collapse; font-size: .82rem; }
        .dash-table th { text-align: left; padding: 10px 12px; color: var(--text-muted); font-weight: 600; font-size: .72rem; text-transform: uppercase; letter-spacing: .05em; border-bottom: 1px solid var(--border-color); white-space: nowrap; }
        .dash-table td { padding: 12px 12px; color: var(--text-secondary); border-bottom: 1px solid rgba(52,211,153,.04); white-space: nowrap; }
        .dash-table tr:hover td { background: rgba(16,185,129,.03); }
        @media(max-width:1000px) { .dash-charts-row { grid-template-columns: 1fr; } .dash-stats { grid-template-columns: repeat(2,1fr); } }
        @media(max-width:560px) { .dash-stats { grid-template-columns: 1fr; } .ai-insight { padding: 20px; } }
      `}</style>
    </section>
  )
}
