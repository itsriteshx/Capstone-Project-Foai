export const DISEASE_DATABASE = {
  early_blight: {
    name: 'Early Blight', type: 'Fungal', crop: 'Tomato, Potato',
    icon: '🍂', confidence: 94.2, color: '#f59e0b',
    cause: 'Alternaria solani fungus — thrives in warm (24-29°C), humid conditions',
    symptoms: ['Brown concentric spots (bull\'s-eye pattern)','Yellowing around spots (chlorosis)','Lower leaf defoliation progressing upward','Dark lesions may appear on stems'],
    treatment: ['Remove & destroy all infected leaves immediately','Apply Copper oxychloride 50% WP — 3g per liter of water','Spray Mancozeb 75% WP at 2.5g/L as backup every 7-10 days','Ensure proper plant spacing for air circulation'],
    prevention: ['Practice crop rotation every 2-3 years','Use drip irrigation — avoid wetting leaves','Plant certified disease-free seeds','Clean plant debris after harvest season','Apply mulch around plant base'],
    severity: 'medium', urgency: '2-3 days',
  },
  late_blight: {
    name: 'Late Blight', type: 'Fungal', crop: 'Tomato, Potato',
    icon: '☠️', confidence: 91.7, color: '#ef4444',
    cause: 'Phytophthora infestans oomycete — favored by cool (10-25°C) wet weather',
    symptoms: ['Water-soaked dark lesions spreading rapidly','White cottony mold on leaf undersides','Rapid wilting and plant collapse','Brown to black stem lesions'],
    treatment: ['Apply Metalaxyl + Mancozeb (Ridomil Gold) at 2.5g/L IMMEDIATELY','Remove and BURN severely wilted plants','Spray all neighboring healthy plants preventively','Repeat fungicide application after 7 days'],
    prevention: ['Plant resistant varieties verified for your region','Monitor weather — act before heavy rain periods','Avoid overhead irrigation at all costs','Ensure good field drainage','Space plants 60cm+ apart'],
    severity: 'high', urgency: '24-48 hours',
  },
  leaf_spot: {
    name: 'Leaf Spot', type: 'Fungal', crop: 'Various',
    icon: '🔵', confidence: 87.5, color: '#6366f1',
    cause: 'Septoria or Cercospora fungi — warm humid conditions with prolonged leaf wetness',
    symptoms: ['Small circular spots with dark borders','Yellow halos surrounding each spot','Spots may merge into larger patches','Premature leaf drop in advanced cases'],
    treatment: ['Apply Chlorothalonil fungicide at standard rate','Supplement with neem oil spray at 5ml/L','Remove heavily infected leaves','Spray every 10-14 days until resolved'],
    prevention: ['Water at plant base — never on leaves','Maintain proper spacing between plants','Rotate crops annually','Remove all plant debris after harvest'],
    severity: 'low', urgency: '5-7 days',
  },
  powdery_mildew: {
    name: 'Powdery Mildew', type: 'Fungal', crop: 'Grape, Wheat, Cucurbit',
    icon: '🌫️', confidence: 92.1, color: '#8b5cf6',
    cause: 'Erysiphe / Podosphaera fungi — dry conditions with moderate humidity (40-70%)',
    symptoms: ['White powdery coating on leaf surface','Leaf curling and distortion','Premature yellowing and leaf drop','May spread to stems and fruit'],
    treatment: ['Apply Sulfur 80% WP at 3g/L — full leaf coverage','Alternative: Potassium bicarbonate at 3g/L','Spray early morning when leaves are dry','Repeat every 10 days during infection'],
    prevention: ['Ensure adequate sunlight reaches all leaves','Prune plants for maximum air circulation','Choose resistant varieties when available','Avoid excessive nitrogen fertilization'],
    severity: 'medium', urgency: '3-5 days',
  },
  bacterial_spot: {
    name: 'Bacterial Spot', type: 'Bacterial', crop: 'Tomato, Pepper',
    icon: '🦠', confidence: 88.9, color: '#14b8a6',
    cause: 'Xanthomonas bacteria — spread by rain splash and contaminated tools',
    symptoms: ['Water-soaked angular spots on leaves','Spots turn brown-black over time','Scab-like spots on fruit surface','Progressive defoliation'],
    treatment: ['Apply Copper hydroxide at 2g/L when leaves are dry','Combine with Streptocycline at 0.5g/L','Avoid handling plants when wet','Spray every 7 days during wet periods'],
    prevention: ['Start with disease-free transplants always','Disinfect tools between plants with bleach','Rotate crops for minimum 2 years','Remove volunteer plants and weeds'],
    severity: 'medium', urgency: '2-3 days',
  },
  healthy: {
    name: 'Healthy', type: 'None', crop: 'All',
    icon: '✅', confidence: 97.8, color: '#10b981',
    cause: 'No disease detected — plant shows normal healthy growth patterns',
    symptoms: ['Uniform green coloring throughout','No visible spots or discoloration','Normal leaf shape and turgor pressure','Healthy stem and growth pattern'],
    treatment: ['Continue your current watering schedule','Apply balanced NPK fertilizer as planned','Monitor weekly for any changes','Enjoy your healthy crops! 🌱'],
    prevention: ['Maintain regular watering schedule','Apply neem oil preventively every 2 weeks','Keep planting area clean and weed-free','Inspect plants weekly for early detection'],
    severity: 'none', urgency: 'No action needed',
  }
};

export const SAMPLE_RECORDS = [
  { date: '2026-03-28', farmer: 'Ramesh Patel', crop: 'Tomato', disease: 'Early Blight', confidence: 94.2, severity: 'Medium', status: 'Treated' },
  { date: '2026-03-27', farmer: 'Sunita Devi', crop: 'Potato', disease: 'Late Blight', confidence: 91.7, severity: 'High', status: 'Critical' },
  { date: '2026-03-26', farmer: 'Arun Kumar', crop: 'Wheat', disease: 'Rust Disease', confidence: 93.5, severity: 'Medium', status: 'Monitoring' },
  { date: '2026-03-25', farmer: 'Priya Singh', crop: 'Tomato', disease: 'Healthy', confidence: 97.8, severity: 'None', status: 'Healthy' },
  { date: '2026-03-24', farmer: 'Mohan Lal', crop: 'Grape', disease: 'Powdery Mildew', confidence: 92.1, severity: 'Medium', status: 'Treated' },
  { date: '2026-03-23', farmer: 'Kavita Sharma', crop: 'Tomato', disease: 'Bacterial Spot', confidence: 88.9, severity: 'Medium', status: 'Treated' },
  { date: '2026-03-22', farmer: 'Dinesh Yadav', crop: 'Chili', disease: 'Leaf Curl', confidence: 89.6, severity: 'High', status: 'Critical' },
  { date: '2026-03-21', farmer: 'Anjali Mishra', crop: 'Cucumber', disease: 'Mosaic Virus', confidence: 86.4, severity: 'High', status: 'Failed' },
  { date: '2026-03-20', farmer: 'Vikram Reddy', crop: 'Tomato', disease: 'Leaf Spot', confidence: 87.5, severity: 'Low', status: 'Recovered' },
  { date: '2026-03-19', farmer: 'Lakshmi Nair', crop: 'Grape', disease: 'Downy Mildew', confidence: 90.3, severity: 'High', status: 'Treating' },
];

export const MONTHLY_CHART_DATA = [
  { month: 'Oct', earlyBlight: 14, lateBlight: 10, powderyMildew: 5, leafSpot: 6, healthy: 12 },
  { month: 'Nov', earlyBlight: 8, lateBlight: 5, powderyMildew: 8, leafSpot: 4, healthy: 15 },
  { month: 'Dec', earlyBlight: 6, lateBlight: 3, powderyMildew: 10, leafSpot: 3, healthy: 18 },
  { month: 'Jan', earlyBlight: 5, lateBlight: 2, powderyMildew: 12, leafSpot: 2, healthy: 20 },
  { month: 'Feb', earlyBlight: 4, lateBlight: 1, powderyMildew: 15, leafSpot: 3, healthy: 22 },
  { month: 'Mar', earlyBlight: 8, lateBlight: 3, powderyMildew: 10, leafSpot: 5, healthy: 16 },
];

export const DISEASE_DISTRIBUTION = [
  { name: 'Early Blight', value: 45, color: '#f59e0b' },
  { name: 'Late Blight', value: 24, color: '#ef4444' },
  { name: 'Powdery Mildew', value: 60, color: '#8b5cf6' },
  { name: 'Leaf Spot', value: 23, color: '#6366f1' },
  { name: 'Bacterial Spot', value: 18, color: '#14b8a6' },
  { name: 'Healthy', value: 103, color: '#10b981' },
];

export function calculateDiseaseRisks(temp, humidity, rainfall) {
  const calc = (hRule, tRule, rRule, base) => {
    let h = 0, t = 0, r = 0;
    for (const [cond, pts] of hRule) if (cond(humidity)) { h = pts; break; }
    for (const [cond, pts] of tRule) if (cond(temp)) { t = pts; break; }
    for (const [cond, pts] of rRule) if (cond(rainfall)) { r = pts; break; }
    return Math.min(100, h + t + r + base);
  };
  return [
    { name: 'Late Blight / Downy Mildew', risk: calc(
        [[v=>v>80,35],[v=>v>=60,20],[v=>v>=40,10],[()=>true,0]],
        [[v=>v>=15&&v<=25,30],[v=>v>=10&&v<=30,15],[()=>true,5]],
        [[v=>v>100,25],[v=>v>=50,15],[v=>v>=20,5],[()=>true,0]], 10),
      color: '#ef4444', icon: '🍄' },
    { name: 'Powdery Mildew', risk: calc(
        [[v=>v>=40&&v<=70,30],[v=>v>70,15],[()=>true,10]],
        [[v=>v>=20&&v<=30,30],[v=>v>=15&&v<=35,15],[()=>true,5]],
        [[v=>v<30,20],[v=>v<=60,10],[()=>true,5]], 10),
      color: '#8b5cf6', icon: '🌫️' },
    { name: 'Bacterial Spot', risk: calc(
        [[v=>v>85,30],[v=>v>=70,20],[()=>true,5]],
        [[v=>v>=25&&v<=35,30],[v=>v>=20&&v<=40,15],[()=>true,5]],
        [[v=>v>80,25],[v=>v>=40,10],[()=>true,5]], 5),
      color: '#14b8a6', icon: '🦠' },
    { name: 'Rust Disease', risk: calc(
        [[v=>v>70,25],[v=>v>=50,15],[()=>true,5]],
        [[v=>v>=15&&v<=28,30],[v=>v>=10&&v<=32,15],[()=>true,5]],
        [[v=>v>60,20],[v=>v>=30,10],[()=>true,5]], 10),
      color: '#f59e0b', icon: '🟠' },
    { name: 'Viral (Whitefly)', risk: calc(
        [[v=>v>=50&&v<=80,20],[v=>v>80,10],[()=>true,15]],
        [[v=>v>=28&&v<=40,35],[v=>v>=22,20],[()=>true,5]],
        [[v=>v<40,15],[v=>v<=80,5],[()=>true,0]], 10),
      color: '#ec4899', icon: '🪲' },
  ];
}
