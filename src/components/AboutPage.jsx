import { motion } from 'framer-motion'
import AIConcepts from './AIConcepts'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: .6, delay },
})

export default function AboutPage() {
  return (
    <div className="about-page" style={{ paddingTop: '80px' }}>
      <section className="section-pad">
        <div className="container">
          <motion.div className="section-header" {...fadeUp()}>
            <span className="section-tag">🌟 About The Project</span>
            <h2 className="section-title">Empowering Farmers with AI</h2>
            <p className="section-desc">
              CropGuard AI was built to address a critical challenge in modern agriculture: the rapid and devastating spread of crop diseases driven by shifting climate patterns.
            </p>
          </motion.div>
          
          <div className="about-content" style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginTop: '40px' }}>
            <motion.div className="glass-card" style={{ padding: '40px' }} {...fadeUp(0.1)}>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', color: 'var(--green-400)', fontFamily: 'var(--font-display)' }}>The Problem</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem' }}>
                Every year, up to 40% of global crop yields are lost to pests and diseases, heavily impacting food security and farmer livelihoods. Traditional disease identification is slow, relies heavily on scarce expert agronomists, and often happens too late to prevent large-scale damage. Smallholder farmers, who produce a third of the world's food, are particularly vulnerable.
              </p>
            </motion.div>
            
            <motion.div className="glass-card" style={{ padding: '40px' }} {...fadeUp(0.2)}>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', color: 'var(--amber-400)', fontFamily: 'var(--font-display)' }}>Our Solution</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem' }}>
                CropGuard fuses deep learning (CNNs), an expert rule-based knowledge base, probabilistic Bayesian weather modeling, and generative AI into a single, accessible web platform. Our goal is to democratize farm intelligence—providing instant diagnostics, tailored mitigation workflows, and environmental risk forecasting to anyone worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrate the existing AI Concepts component */}
      <AIConcepts />
    </div>
  )
}
