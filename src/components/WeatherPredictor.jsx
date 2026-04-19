import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiThermometer, FiDroplet, FiCloudRain, FiAlertTriangle } from 'react-icons/fi'
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts'
import { calculateDiseaseRisks } from '../data/diseaseData'
import { useTranslation } from 'react-i18next'

export default function WeatherPredictor() {
  const { t } = useTranslation()

  const RISK_LEVEL = (v) => {
    if (v >= 75) return { label: t('weather.r2', 'Critical'), color: 'var(--red-400)', tag: 'tag-red' }
    if (v >= 55) return { label: t('weather.r1', 'High'),     color: 'var(--amber-400)', tag: 'tag-amber' }
    if (v >= 35) return { label: t('weather.r3', 'Moderate'), color: 'var(--cyan-400)', tag: 'tag-cyan' }
    return               { label: t('weather.r4', 'Low'),     color: 'var(--green-400)', tag: 'tag-green' }
  }

  const PRESETS = [
    { labelKey: 'weather.p1', label: '🌧️ Monsoon',    temp: 22, humidity: 88, rainfall: 120 },
    { labelKey: 'weather.p2', label: '☀️ Dry Summer', temp: 36, humidity: 35, rainfall: 8  },
    { labelKey: 'weather.p3', label: '🌤️ Spring',     temp: 24, humidity: 62, rainfall: 45 },
    { labelKey: 'weather.p4', label: '❄️ Winter',     temp: 12, humidity: 70, rainfall: 30 },
  ]

  const [temp, setTemp]         = useState(24)
  const [humidity, setHumidity] = useState(65)
  const [rainfall, setRainfall] = useState(60)

  const risks = calculateDiseaseRisks(temp, humidity, rainfall)
  
  const isHighRiskOutbreak = humidity > 80 && temp >= 24 && temp <= 30;
  
  const overallRisk = Math.round(risks.reduce((a, r) => a + r.risk, 0) / risks.length)
  const finalRiskDisplay = isHighRiskOutbreak ? Math.max(overallRisk, 85) : overallRisk;

  // Disease mapping for radar chart labels
  const getTranslatedDisease = (name) => {
    if (name.includes('Early Blight')) return t('weather.d1');
    if (name.includes('Late Blight')) return t('weather.d2');
    if (name.includes('Powdery Mildew')) return t('weather.d3');
    if (name.includes('Bacterial Spot')) return t('weather.d4');
    if (name.includes('Viral')) return t('weather.d5');
    return name;
  }

  const radarData = risks.map(r => ({ subject: getTranslatedDisease(r.name), risk: r.risk }))

  const applyPreset = (p) => { setTemp(p.temp); setHumidity(p.humidity); setRainfall(p.rainfall) }

  const Slider = ({ tKey, icon, value, setValue, min, max, unit, color }) => (
    <div className="wp-slider-item">
      <div className="wp-slider-label">
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ color }}>{icon}</span> {t(tKey)}
        </span>
        <span className="wp-slider-val" style={{ color }}>{value}{unit}</span>
      </div>
      <input type="range" min={min} max={max} value={value}
        onChange={e => setValue(Number(e.target.value))}
        className="wp-range"
        style={{ '--thumb-color': color, '--track-color': color }}
      />
      <div className="wp-slider-ends">
        <span>{min}{unit}</span><span>{max}{unit}</span>
      </div>
    </div>
  )

  return (
    <section id="weather" className="section-pad">
      <div className="container">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .6 }}>
          <span className="section-tag">🌦️ {t('features.weatherRisk')}</span>
          <h2 className="section-title">{t('weather.title')}</h2>
          <p className="section-desc">
            {t('weather.subtitle')}
          </p>
        </motion.div>

        <div className="wp-grid">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: .6 }}>
            <p style={{ fontSize: '.78rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: 10 }}>{t('weather.presets')}</p>
            <div className="wp-presets">
              {PRESETS.map(p => (
                <button key={p.labelKey} className="wp-preset-btn" onClick={() => applyPreset(p)}>{t(p.labelKey)}</button>
              ))}
            </div>

            <div className="wp-sliders glass-card">
              <h3 className="wp-sliders-title">🌡️ {t('weather.params')}</h3>
              <Slider tKey="weather.temp" icon={<FiThermometer />} value={temp} setValue={setTemp} min={5} max={45} unit="°C" color="var(--amber-400)" />
              <Slider tKey="weather.humidity" icon={<FiDroplet />}     value={humidity} setValue={setHumidity} min={10} max={100} unit="%" color="var(--cyan-400)" />
              <Slider tKey="weather.rainfall" icon={<FiCloudRain />}   value={rainfall} setValue={setRainfall} min={0} max={200} unit="mm" color="var(--purple-400)" />
            </div>

            <div className="wp-gauge glass-card">
              <div className="wp-gauge-inner">
                <div className="wp-gauge-ring" style={{ '--risk': finalRiskDisplay }}>
                  <div className="wp-gauge-num">
                    <span className="wp-gauge-val" style={{ color: RISK_LEVEL(finalRiskDisplay).color }}>{finalRiskDisplay}%</span>
                    <span className="wp-gauge-sub">{t('weather.outbreakRisk')}</span>
                  </div>
                </div>
                <div>
                  <span className={`tag ${RISK_LEVEL(finalRiskDisplay).tag}`} style={{ fontSize: '.85rem', padding: '6px 18px' }}>
                    {RISK_LEVEL(finalRiskDisplay).label} {t('weather.outbreakRisk')}
                  </span>
                  {isHighRiskOutbreak ? (
                    <p style={{ fontSize: '.78rem', color: 'var(--red-400)', marginTop: 8, fontWeight: 700 }}>
                      ⚠️ {t('weather.highRisk')}
                    </p>
                  ) : (
                    <p style={{ fontSize: '.78rem', color: 'var(--text-muted)', marginTop: 8 }}>
                      {t('weather.basedOn')}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: .6, delay: .15 }}>
            <div className="glass-card wp-radar-card">
              <h3 className="wp-section-head">{t('weather.riskRadar')}</h3>
              <ResponsiveContainer width="100%" height={220}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="rgba(52,211,153,.1)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--text-muted)', fontSize: 11 }} />
                  <Radar dataKey="risk" stroke="var(--green-400)" fill="var(--green-400)" fillOpacity={0.18} strokeWidth={2} dot={{ fill: 'var(--green-400)', r: 4 }} />
                  <Tooltip contentStyle={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 8, color: 'var(--text-primary)' }} formatter={(v) => [`${v}%`, t('weather.outbreakRisk')]} />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="wp-risk-list glass-card">
              <h3 className="wp-section-head">{t('weather.outbreakRisk')}</h3>
              {risks.map(r => {
                const lvl = RISK_LEVEL(r.risk)
                return (
                  <div key={r.name} className="wp-risk-item">
                    <div className="wp-risk-top">
                      <span className="wp-risk-name">{r.icon} {getTranslatedDisease(r.name)}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span className={`tag ${lvl.tag}`}>{lvl.label}</span>
                        <span style={{ fontSize: '.82rem', fontWeight: 700, color: lvl.color, minWidth: 38, textAlign: 'right' }}>{r.risk}%</span>
                      </div>
                    </div>
                    <div className="wp-risk-bar-bg">
                      <motion.div className="wp-risk-bar-fill"
                        initial={{ width: 0 }} animate={{ width: `${r.risk}%` }}
                        transition={{ duration: .6, ease: 'easeOut' }}
                        style={{ background: r.color }} />
                    </div>
                    {r.risk >= 55 && (
                      <div className="wp-risk-alert">
                        <FiAlertTriangle size={12} style={{ color: lvl.color }} />
                        <span style={{ color: lvl.color }}>
                          {r.risk >= 75 ? t('weather.msg2') : t('weather.msg1')}
                        </span>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>

        <motion.div className="wp-explain glass-card"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .6, delay: .2 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', marginBottom: 16 }}>🧮 {t('weather.bayesian')}</h3>
          <div className="wp-explain-grid">
            {[
              { label: `P(${t('weather.d2')} | ${t('weather.humidity')})`, formula: 'H > 80% → +35 points', color: 'var(--cyan-400)' },
              { label: `P(${t('weather.d2')} | ${t('weather.temp')})`, formula: '15–25°C → +30 points', color: 'var(--amber-400)' },
              { label: `P(${t('weather.d2')} | ${t('weather.rainfall')})`, formula: '> 100mm → +25 points', color: 'var(--purple-400)' },
              { label: t('dashboard.recentActivity', 'Final Risk Score'), formula: 'Sum(factors) + Base → min(100)', color: 'var(--green-400)' },
            ].map(b => (
              <div key={b.label} className="wp-bayes-item" style={{ borderColor: b.color + '30' }}>
                <p style={{ fontSize: '.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>{b.label}</p>
                <code style={{ fontSize: '.82rem', color: b.color, fontFamily: 'monospace' }}>{b.formula}</code>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .wp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-bottom: 32px; }
        .wp-presets { display: grid; grid-template-columns: repeat(2,1fr); gap: 8px; margin-bottom: 20px; }
        .wp-preset-btn { background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 8px 12px; font-size: .78rem; font-weight: 600; color: var(--text-secondary); cursor: pointer; transition: all .25s; text-align: left; }
        .wp-preset-btn:hover { border-color: var(--border-hover); color: var(--green-400); background: rgba(16,185,129,.06); }
        .wp-sliders { padding: 24px; margin-bottom: 16px; }
        .wp-sliders-title { font-family: var(--font-display); font-size: .95rem; font-weight: 700; margin-bottom: 20px; }
        .wp-slider-item { margin-bottom: 20px; }
        .wp-slider-item:last-child { margin-bottom: 0; }
        .wp-slider-label { display: flex; justify-content: space-between; align-items: center; font-size: .82rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 8px; }
        .wp-slider-val { font-family: var(--font-display); font-size: 1rem; font-weight: 700; }
        .wp-range { width: 100%; -webkit-appearance: none; height: 6px; border-radius: 3px; background: var(--bg-tertiary); outline: none; }
        .wp-range::-webkit-slider-thumb { -webkit-appearance: none; width: 18px; height: 18px; border-radius: 50%; background: var(--thumb-color, var(--green-400)); cursor: pointer; box-shadow: 0 0 8px var(--thumb-color, var(--green-400)); transition: transform .2s; }
        .wp-range::-webkit-slider-thumb:hover { transform: scale(1.2); }
        .wp-slider-ends { display: flex; justify-content: space-between; font-size: .68rem; color: var(--text-muted); margin-top: 4px; }
        .wp-gauge { padding: 24px; }
        .wp-gauge-inner { display: flex; align-items: center; gap: 24px; }
        .wp-gauge-ring { width: 90px; height: 90px; border-radius: 50%; background: conic-gradient(var(--green-500) calc(var(--risk, 0) * 1%), var(--bg-tertiary) 0); display: flex; align-items: center; justify-content: center; flex-shrink: 0; position: relative; }
        .wp-gauge-ring::before { content: ''; position: absolute; inset: 8px; background: var(--bg-secondary); border-radius: 50%; }
        .wp-gauge-num { position: relative; z-index: 1; text-align: center; }
        .wp-gauge-val { display: block; font-family: var(--font-display); font-size: 1.2rem; font-weight: 800; line-height: 1.1; }
        .wp-gauge-sub { display: block; font-size: .6rem; color: var(--text-muted); font-weight: 600; margin-top: 2px; }
        .wp-radar-card { padding: 24px; margin-bottom: 16px; }
        .wp-section-head { font-family: var(--font-display); font-size: .88rem; font-weight: 700; margin-bottom: 16px; }
        .wp-risk-list { padding: 24px; }
        .wp-risk-item { margin-bottom: 16px; }
        .wp-risk-item:last-child { margin-bottom: 0; }
        .wp-risk-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
        .wp-risk-name { font-size: .82rem; font-weight: 600; color: var(--text-secondary); }
        .wp-risk-bar-bg { height: 8px; background: var(--bg-tertiary); border-radius: 4px; overflow: hidden; margin-bottom: 4px; }
        .wp-risk-bar-fill { height: 100%; border-radius: 4px; }
        .wp-risk-alert { display: flex; align-items: center; gap: 6px; font-size: .72rem; font-weight: 600; }
        .wp-explain { padding: 28px 32px; }
        .wp-explain-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
        .wp-bayes-item { background: var(--bg-tertiary); border: 1px solid; border-radius: var(--radius-md); padding: 14px 16px; display: flex; flex-direction: column; gap: 6px; }
        @media(max-width:1000px) { .wp-grid { grid-template-columns: 1fr; } .wp-explain-grid { grid-template-columns: repeat(2,1fr); } }
        @media(max-width:560px) { .wp-presets { grid-template-columns: 1fr; } .wp-explain-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
