# 🌿 CropGuard AI — Crop Disease Detector and Farm Advisor

> AI-powered no-code system for crop disease detection, treatment advisory, and outbreak prediction.

---

## 🎯 Project Overview

CropGuard AI enables farmers to upload leaf images and receive instant AI-powered disease diagnosis, severity assessment, treatment recommendations, and prevention tips — all built using no-code tools.

### AI Concepts Implemented
| Concept | Implementation |
|---------|---------------|
| **Computer Vision** | Teachable Machine image classification |
| **Rule-Based System** | IF-THEN disease diagnosis engine (15 rules) |
| **Probabilistic Reasoning** | Weather-based outbreak prediction |
| **Generative AI** | ChatGPT advisory generation |
| **Supervised Learning** | Labeled image training (100+ images, 10 classes) |
| **AI Agent** | End-to-end Input → Process → Output pipeline |

### Tools Used
Google Forms · Google Sheets · Teachable Machine · ChatGPT Vision · Canva · Chart.js

---

## 📁 Project Structure

```
foai/
├── index.html                          # Web application (main page)
├── styles.css                          # Premium dark-mode styling
├── app.js                              # Application logic
├── data.js                             # Disease knowledge base & rules
├── README.md                           # This file
│
├── documentation.md                    # Complete system documentation
├── milestone_2_analysis_knowledge.md   # M2: Analysis & Knowledge Map
├── milestone_3_prediction_advisory.md  # M3: Prediction & Advisory
├── milestone_4_dashboard_ethics.md     # M4: Dashboard, Ethics & Demo
│
├── knowledge_base.csv                  # 10-disease knowledge map (Google Sheets ready)
├── disease_history.csv                 # 36 sample detection records
└── model_evaluation.csv                # 30-sample model test results
```

---

## 🚀 Running the Demo

```bash
cd foai
python3 -m http.server 8080
# Open http://localhost:8080
```

---

## 📊 Milestone Progress

| Milestone | Coverage | Key Deliverables |
|:---------:|:--------:|------------------|
| **M1** (25%) | ✅ Complete | Image pipeline, Teachable Machine setup, Google Forms |
| **M2** (50%) | ✅ Complete | ChatGPT prompts, model evaluation, knowledge map, 15 rules, AI concepts |
| **M3** (75%) | ✅ Complete | Weather prediction, advisory system, severity assessment, historical analysis |
| **M4** (100%) | ✅ Complete | Dashboard, Canva report, ethics, testing plan, demo script, presentation |

---

## 📋 Quick Links to Documentation

- **[Full Documentation](documentation.md)** — System overview, setup guides, dataset plan
- **[Milestone 2](milestone_2_analysis_knowledge.md)** — ChatGPT prompts, evaluation framework, knowledge map, rule engine
- **[Milestone 3](milestone_3_prediction_advisory.md)** — Prediction model, advisory templates, severity system
- **[Milestone 4](milestone_4_dashboard_ethics.md)** — Dashboard design, ethics, testing, demo script

---

## 🧠 Disease Categories (10)

1. Early Blight · 2. Late Blight · 3. Leaf Spot · 4. Powdery Mildew · 5. Bacterial Spot
6. Downy Mildew · 7. Rust Disease · 8. Mosaic Virus · 9. Leaf Curl · 10. Anthracnose

---

*© 2026 CropGuard AI — College Project | Built for Sustainable Agriculture 🌱*
