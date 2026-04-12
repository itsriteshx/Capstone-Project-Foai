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
  },
  tomato_early_blight: {
    name: 'Tomato Early Blight', type: 'Fungal', crop: 'Tomato',
    icon: '🍅', confidence: 93.4, color: '#f59e0b',
    cause: 'Alternaria solani fungus — thrives in warm (24-29°C), humid conditions',
    symptoms: ['Brown concentric spots on lower leaves', 'Yellowing around spots (chlorosis)', 'Lower leaf defoliation', 'Dark stem lesions'],
    treatment: ['Remove & destroy infected leaves', 'Apply Copper oxychloride 50% WP', 'Ensure proper plant spacing', 'Spray Mancozeb as backup'],
    prevention: ['Practice crop rotation', 'Use drip irrigation', 'Clean plant debris post-harvest', 'Apply mulch'],
    severity: 'medium', urgency: '2-3 days',
  },
  tomato_yellow_curl: {
    name: 'Tomato Yellow Leaf Curl', type: 'Viral', crop: 'Tomato',
    icon: '🍅', confidence: 95.1, color: '#eab308',
    cause: 'Tomato yellow leaf curl virus (TYLCV) — transmitted by whiteflies',
    symptoms: ['Upward curling of leaf margins', 'Pronounced yellowing around edges', 'Stunted plant growth', 'Severe flower drop'],
    treatment: ['No cure once infected', 'Remove and destroy virus-infected plants immediately', 'Control vector whitefly populations'],
    prevention: ['Use fine insect screens', 'Spray neem oil or insecticidal soap', 'Plant resistant tomato varieties', 'Remove surrounding weeds'],
    severity: 'high', urgency: 'Immediate',
  },
  potato_late_blight: {
    name: 'Potato Late Blight', type: 'Fungal', crop: 'Potato',
    icon: '🥔', confidence: 91.2, color: '#ef4444',
    cause: 'Phytophthora infestans oomycete — favored by cool, wet weather',
    symptoms: ['Water-soaked dark lesions on leaves', 'White cottony growth on leaf undersides', 'Rapid wilting of foliage', 'Tubers rot quickly'],
    treatment: ['Apply systemic fungicides like Metalaxyl immediately', 'Destroy heavily infected potato plants', 'Keep foliage as dry as possible'],
    prevention: ['Plant certified disease-free tubers', 'Destroy volunteer potatoes', 'Avoid overhead irrigation', 'Ensure good field drainage'],
    severity: 'high', urgency: '24 hours',
  },
  potato_healthy: {
    name: 'Potato Healthy', type: 'None', crop: 'Potato',
    icon: '🥔', confidence: 98.5, color: '#10b981',
    cause: 'No disease detected — tuber and plant show normal healthy growth',
    symptoms: ['Uniform green foliage', 'Sturdy stems', 'Normal growth rate', 'No visible spotting'],
    treatment: ['Maintain good care practices', 'Keep monitoring crop health', 'Continue normal nutrient schedule'],
    prevention: ['Continue regular watering and fertilization', 'Watch for potential pests or signs of stress', 'Keep field weed-free'],
    severity: 'none', urgency: 'No action needed',
  },
  apple_scab: {
    name: 'Apple Scab', type: 'Fungal', crop: 'Apple',
    icon: '🍎', confidence: 88.7, color: '#78716c',
    cause: 'Venturia inaequalis fungus — spreads during wet spring weather',
    symptoms: ['Olive-green to black velvety spots on leaves', 'Cork-like scabs on fruit surface', 'Premature leaf drop', 'Deformed or cracking fruit'],
    treatment: ['Apply recommended fungicides early in the season', 'Prune trees to improve air circulation', 'Remove severely infected foliage'],
    prevention: ['Plant scab-resistant apple varieties', 'Clean up and destroy fallen leaves in autumn', 'Ensure proper tree spacing'],
    severity: 'medium', urgency: '3-5 days',
  },
  apple_black_rot: {
    name: 'Apple Black Rot', type: 'Fungal', crop: 'Apple',
    icon: '🍏', confidence: 89.2, color: '#1c1917',
    cause: 'Botryosphaeria obtusa fungus — attacks stressed or injured trees',
    symptoms: ['Purple spots on leaves turning into frog-eye lesions', 'Black, rotting, mummified rings on fruit', 'Sunken bark cankers on branches'],
    treatment: ['Prune out infected branches and cankers', 'Apply Captan or other approved fungicides', 'Discard infected fruit promptly'],
    prevention: ['Remove dead wood from the tree', 'Avoid unnecessary wounding of the tree bark', 'Keep trees healthy with proper care and pruning'],
    severity: 'high', urgency: '2-4 days',
  },
  corn_rust: {
    name: 'Corn Rust', type: 'Fungal', crop: 'Corn',
    icon: '🌽', confidence: 87.9, color: '#d97706',
    cause: 'Puccinia sorghi fungus — favored by moderate temperatures and high humidity',
    symptoms: ['Small rust-colored pustules on upper and lower leaf surfaces', 'Pustules rupture releasing powdery spores', 'Leaves may dry and die prematurely'],
    treatment: ['Apply foliar fungicides if severe infection occurs early', 'Monitor progression, mild infections may not need treatment'],
    prevention: ['Plant rust-resistant corn hybrids', 'Ensure adequate air circulation within the field', 'Avoid very late-season planting'],
    severity: 'medium', urgency: '3-7 days',
  },
  corn_leaf_spot: {
    name: 'Corn Leaf Spot', type: 'Fungal', crop: 'Corn',
    icon: '🌽', confidence: 86.5, color: '#65a30d',
    cause: 'Bipolaris maydis / Exserohilum turcicum — warm, wet environmental conditions',
    symptoms: ['Tan, elongated lesions on leaves', 'Lesions join together to kill large leaf areas', 'Lower leaves typically infected first'],
    treatment: ['Fungicide application at early silking stage if necessary', 'Destroy infected crop debris post-harvest'],
    prevention: ['Use resistant or tolerant corn hybrids', 'Practice crop rotation for a minimum of 1-2 years', 'Manage crop residue through proper tillage'],
    severity: 'medium', urgency: '5-7 days',
  },
  grape_black_rot: {
    name: 'Grape Black Rot', type: 'Fungal', crop: 'Grape',
    icon: '🍇', confidence: 90.3, color: '#4c1d95',
    cause: 'Guignardia bidwellii fungus — thrives in warm, humid/rainy weather',
    symptoms: ['Light brown leaf patches with dark borders', 'Grapes rapidly turn brown and rot', 'Berries shrink into hard black mummies'],
    treatment: ['Apply Myclobutanil or Captan fungicides per local guidelines', 'Remove infected mummy berries from vines entirely', 'Prune out infected canes'],
    prevention: ['Increase air circulation through strategic pruning', 'Destroy infected mummies during winter dormant season', 'Maintain proper canopy management'],
    severity: 'high', urgency: '2-3 days',
  },
  pepper_bacterial_spot: {
    name: 'Pepper Bacterial Spot', type: 'Bacterial', crop: 'Pepper',
    icon: '🌶️', confidence: 91.8, color: '#059669',
    cause: 'Xanthomonas campestris pv. vesicatoria — spread by splashing rain and tools',
    symptoms: ['Small brown raised spots on leaves', 'Spots quickly develop yellow halos', 'Leaves turn yellow and drop prematurely', 'Scab-like, rough spots on peppers'],
    treatment: ['Spray copper-based bactericides early in infection', 'Remove and destroy severely infected plants', 'Strictly avoid overhead watering'],
    prevention: ['Use certified disease-free seed and transplants', 'Rotate with non-susceptible crops for at least 2 years', 'Disinfect gardening tools frequently'],
    severity: 'medium', urgency: '3-5 days',
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
