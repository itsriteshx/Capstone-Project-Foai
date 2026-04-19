export const DISEASE_DATABASE = {
  early_blight: {
    name: 'Early Blight', type: 'Fungal', crop: 'Tomato, Potato',
    icon: '🍂', confidence: 94.2, color: '#f59e0b',
    cause: 'Alternaria solani fungus — thrives in warm (24-29°C), humid conditions',
    symptoms: ['Brown concentric spots (bull\'s-eye pattern)','Yellowing around spots (chlorosis)','Lower leaf defoliation progressing upward','Dark lesions may appear on stems'],
    treatment: ['Remove & destroy all infected leaves immediately','Apply Copper oxychloride 50% WP — 3g per liter of water','Spray Mancozeb 75% WP as backup every 7-10 days'],
    prevention: ['Practice crop rotation every 2-3 years','Use drip irrigation — avoid wetting leaves','Clean plant debris after harvest season'],
    severity: 'medium', urgency: '2-3 days',
  },
  late_blight: {
    name: 'Late Blight', type: 'Fungal', crop: 'Tomato, Potato',
    icon: '☠️', confidence: 91.7, color: '#ef4444',
    cause: 'Phytophthora infestans oomycete — favored by cool (10-25°C) wet weather',
    symptoms: ['Water-soaked dark lesions spreading rapidly','White cottony mold on leaf undersides','Rapid wilting and plant collapse'],
    treatment: ['Apply Metalaxyl + Mancozeb IMMEDIATELY','Remove and BURN severely wilted plants','Spray all neighboring healthy plants preventively'],
    prevention: ['Plant resistant varieties','Avoid overhead irrigation at all costs','Ensure good field drainage'],
    severity: 'high', urgency: '24-48 hours',
  },
  leaf_spot: {
    name: 'Leaf Spot', type: 'Fungal', crop: 'Various',
    icon: '🔵', confidence: 87.5, color: '#6366f1',
    cause: 'Septoria or Cercospora fungi — warm humid conditions with prolonged leaf wetness',
    symptoms: ['Small circular spots with dark borders','Yellow halos surrounding each spot','Premature leaf drop in advanced cases'],
    treatment: ['Apply Chlorothalonil fungicide','Supplement with neem oil spray at 5ml/L','Remove heavily infected leaves'],
    prevention: ['Water at plant base — never on leaves','Maintain proper spacing between plants','Rotate crops annually'],
    severity: 'low', urgency: '5-7 days',
  },
  powdery_mildew: {
    name: 'Powdery Mildew', type: 'Fungal', crop: 'Grape, Wheat, Cucurbit',
    icon: '🌫️', confidence: 92.1, color: '#8b5cf6',
    cause: 'Erysiphe / Podosphaera fungi — dry conditions with moderate humidity (40-70%)',
    symptoms: ['White powdery coating on leaf surface','Leaf curling and distortion','Premature yellowing and leaf drop'],
    treatment: ['Apply Sulfur 80% WP at 3g/L','Alternative: Potassium bicarbonate at 3g/L','Spray early morning when leaves are dry'],
    prevention: ['Ensure adequate sunlight reaches all leaves','Prune plants for maximum air circulation','Avoid excessive nitrogen fertilization'],
    severity: 'medium', urgency: '3-5 days',
  },
  downy_mildew: {
    name: 'Downy Mildew', type: 'Fungal', crop: 'Grape, Cucumber',
    icon: '🌧️', confidence: 90.5, color: '#3b82f6',
    cause: 'Plasmopara or Pseudoperonospora oomycetes — wet, cool conditions',
    symptoms: ['Yellow to pale green angular spots on upper leaves','Fluffy purplish-gray mildew on undersides','Leaves eventually turning brown and dying dying'],
    treatment: ['Apply copper-based fungicides or Mancozeb','Improve drainage and reduce leaf wetness','Remove infected plant parts immediately'],
    prevention: ['Water plants at ground level','Space plants properly to increase air circulation','Apply preventative fungicides before rainy season'],
    severity: 'high', urgency: '1-2 days',
  },
  bacterial_spot: {
    name: 'Bacterial Spot', type: 'Bacterial', crop: 'Tomato, Pepper',
    icon: '🦠', confidence: 88.9, color: '#14b8a6',
    cause: 'Xanthomonas bacteria — spread by rain splash and contaminated tools',
    symptoms: ['Water-soaked angular spots on leaves','Spots turn brown-black over time','Scab-like spots on fruit surface'],
    treatment: ['Apply Copper hydroxide at 2g/L','Combine with Streptocycline at 0.5g/L','Avoid handling plants when wet'],
    prevention: ['Start with disease-free transplants always','Disinfect tools between plants with bleach','Remove volunteer plants and weeds'],
    severity: 'medium', urgency: '2-3 days',
  },
  mosaic_virus: {
    name: 'Mosaic Virus', type: 'Viral', crop: 'Tomato, Cucumber, Tobacco',
    icon: '🧬', confidence: 95.8, color: '#f43f5e',
    cause: 'Tobacco Mosaic Virus (TMV) / CMV — transmitted by sap, tools, or aphids',
    symptoms: ['Mottled light and dark green patterns on leaves','Stunted plant growth and reduced yield','Yellowing leaves and deformed fruit'],
    treatment: ['No chemical cure available','Uproot and burn infected plants immediately','Wash hands with soap and water after handling'],
    prevention: ['Control aphid populations using neem oil','Plant mosaic-resistant varieties','Do not use tobacco products near plants'],
    severity: 'high', urgency: 'Immediate',
  },
  yellow_leaf_curl: {
    name: 'Yellow Leaf Curl', type: 'Viral', crop: 'Tomato, Pepper',
    icon: '🍅', confidence: 95.1, color: '#eab308',
    cause: 'Begomovirus — transmitted by whiteflies',
    symptoms: ['Upward curling of leaf margins', 'Pronounced yellowing around edges', 'Stunted plant growth', 'Severe flower drop'],
    treatment: ['No cure once infected', 'Remove and destroy virus-infected plants immediately', 'Control vector whitefly populations'],
    prevention: ['Use fine insect screens', 'Spray neem oil or insecticidal soap', 'Plant resistant tomato varieties'],
    severity: 'high', urgency: 'Immediate',
  },
  anthracnose: {
    name: 'Anthracnose', type: 'Fungal', crop: 'Mango, Bean, Tomato',
    icon: '⚫', confidence: 86.4, color: '#57534e',
    cause: 'Colletotrichum fungi — thrives in warm and humid/rainy weather',
    symptoms: ['Dark, sunken lesions on leaves, stems, or fruit','Pinkish spore masses visible in wet weather','Shoot dieback and premature fruit drop'],
    treatment: ['Spray Chlorothalonil or Copper-based fungicides','Prune infected stems and branches below lesions','Destroy fallen infected fruits'],
    prevention: ['Harvest fruits gently to prevent bruising','Perform post-harvest hot water treatment (for mangoes)','Ensure good plant canopy aeration'],
    severity: 'medium', urgency: '3-5 days',
  },
  rust_disease: {
    name: 'Rust Disease', type: 'Fungal', crop: 'Corn, Wheat, Soybean',
    icon: '🟠', confidence: 87.9, color: '#d97706',
    cause: 'Puccinia species — favored by moderate temperatures and high humidity',
    symptoms: ['Small rust-colored or orange pustules on leaves', 'Pustules rupture releasing powdery spores', 'Leaves may dry and die prematurely'],
    treatment: ['Apply foliar fungicides early in the infection cycle','Remove severely rusted leaves manually if localized'],
    prevention: ['Plant rust-resistant crop hybrids', 'Ensure adequate air circulation within the field', 'Avoid very late-season planting'],
    severity: 'medium', urgency: '3-7 days',
  },
  healthy: {
    name: 'Healthy', type: 'None', crop: 'All',
    icon: '✅', confidence: 97.8, color: '#10b981',
    cause: 'No disease detected — plant shows normal healthy growth patterns',
    symptoms: ['Uniform green coloring throughout','No visible spots or discoloration','Normal leaf shape and turgor pressure'],
    treatment: ['Continue your current watering schedule','Apply balanced NPK fertilizer as planned','Enjoy your healthy crops! 🌱'],
    prevention: ['Maintain regular watering schedule','Apply neem oil preventively every 2 weeks','Inspect plants weekly for early detection'],
    severity: 'none', urgency: 'No action needed',
  }
};

export const DIAGNOSIS_RULES = [
  { id: 1, if: ['leaf_color = yellow', 'spots_color = brown', 'spot_pattern = concentric'], then: 'Early Blight' },
  { id: 2, if: ['lesion_type = water-soaked', 'mold_present_under = true', 'weather = cool/wet'], then: 'Late Blight' },
  { id: 3, if: ['spot_shape = circular', 'spot_border = dark', 'halo = yellow'], then: 'Leaf Spot' },
  { id: 4, if: ['coating = white/powdery', 'weather = dry', 'leaf_shape = curled'], then: 'Powdery Mildew' },
  { id: 5, if: ['spot_shape = angular', 'mildew_color = purplish-gray', 'weather = cool/wet'], then: 'Downy Mildew' },
  { id: 6, if: ['spot_shape = angular', 'spot_color = black', 'fruit_marked = scab-like'], then: 'Bacterial Spot' },
  { id: 7, if: ['leaf_pattern = mottled', 'growth = stunted', 'pest_present = aphids'], then: 'Mosaic Virus' },
  { id: 8, if: ['margin = curled upward', 'margin_color = yellow', 'pest_present = whitefly'], then: 'Yellow Leaf Curl' },
  { id: 9, if: ['lesion_type = sunken', 'lesion_color = dark', 'spore_mass = pink'], then: 'Anthracnose' },
  { id: 10, if: ['pustules = orange/rust', 'leaf_surface = ruptured', 'crop = grain/soy'], then: 'Rust Disease' },
  { id: 11, if: ['humidity > 80%', 'temp = 24-30C', 'spots_color = brown'], then: 'Early Blight (High Risk)' },
  { id: 12, if: ['humidity > 90%', 'temp = 10-25C', 'lesions = rapidly spreading'], then: 'Late Blight (Critical)' },
  { id: 13, if: ['vector_present = whitefly', 'leaf_margin = curled', 'growth = stunted'], then: 'Yellow Leaf Curl' },
  { id: 14, if: ['vector_present = aphids', 'leaf_color = mottled green'], then: 'Mosaic Virus' },
  { id: 15, if: ['weather = prolonged leaf wetness', 'spots = circular'], then: 'Leaf Spot' },
  { id: 16, if: ['lesion = sunken', 'crop = mango/tomato', 'weather = rainy'], then: 'Anthracnose' },
  { id: 17, if: ['pustules = powdery orange', 'crop = corn'], then: 'Rust Disease' },
  { id: 18, if: ['leaf = white coating', 'humidity < 70%'], then: 'Powdery Mildew' },
  { id: 19, if: ['spots = angular', 'mold = underside', 'weather = cool'], then: 'Downy Mildew' },
  { id: 20, if: ['lesion = brown/black', 'spread = splashing rain', 'tool_disinfected = false'], then: 'Bacterial Spot' }
];

export const SAMPLE_RECORDS = [
  { date: '2026-03-28', farmer: 'Ramesh Patel', crop: 'Tomato', disease: 'Early Blight', confidence: 94.2, severity: 'Medium', status: 'Treated', weather: '28°C, 82%', treatment: 'Copper Oxychloride' },
  { date: '2026-03-27', farmer: 'Sunita Devi', crop: 'Potato', disease: 'Late Blight', confidence: 91.7, severity: 'High', status: 'Critical', weather: '18°C, 95%', treatment: 'Metalaxyl' },
  { date: '2026-03-26', farmer: 'Arun Kumar', crop: 'Wheat', disease: 'Rust Disease', confidence: 93.5, severity: 'Medium', status: 'Monitoring', weather: '25°C, 75%', treatment: 'Foliar Fungicide' },
  { date: '2026-03-25', farmer: 'Priya Singh', crop: 'Tomato', disease: 'Healthy', confidence: 97.8, severity: 'None', status: 'Healthy', weather: '26°C, 60%', treatment: 'None' },
  { date: '2026-03-24', farmer: 'Mohan Lal', crop: 'Grape', disease: 'Powdery Mildew', confidence: 92.1, severity: 'Medium', status: 'Treated', weather: '30°C, 50%', treatment: 'Sulfur WP' },
  { date: '2026-03-23', farmer: 'Kavita Sharma', crop: 'Tomato', disease: 'Bacterial Spot', confidence: 88.9, severity: 'Medium', status: 'Treated', weather: '24°C, 88%', treatment: 'Copper Hydroxide' },
  { date: '2026-03-22', farmer: 'Dinesh Yadav', crop: 'Chili', disease: 'Yellow Leaf Curl', confidence: 89.6, severity: 'High', status: 'Critical', weather: '32°C, 65%', treatment: 'Vector Control' },
  { date: '2026-03-21', farmer: 'Anjali Mishra', crop: 'Cucumber', disease: 'Mosaic Virus', confidence: 86.4, severity: 'High', status: 'Failed', weather: '29°C, 70%', treatment: 'Uprooted' },
  { date: '2026-03-20', farmer: 'Vikram Reddy', crop: 'Tomato', disease: 'Leaf Spot', confidence: 87.5, severity: 'Low', status: 'Recovered', weather: '27°C, 80%', treatment: 'Chlorothalonil' },
  { date: '2026-03-19', farmer: 'Lakshmi Nair', crop: 'Grape', disease: 'Downy Mildew', confidence: 90.3, severity: 'High', status: 'Treating', weather: '19°C, 92%', treatment: 'Mancozeb' },
];

export const MONTHLY_CHART_DATA = [
  { month: 'Oct', totalCases: 45, severityScore: 2.1 },
  { month: 'Nov', totalCases: 25, severityScore: 1.4 },
  { month: 'Dec', totalCases: 22, severityScore: 1.2 },
  { month: 'Jan', totalCases: 21, severityScore: 1.5 },
  { month: 'Feb', totalCases: 23, severityScore: 1.8 },
  { month: 'Mar', totalCases: 36, severityScore: 2.5 },
];

export const DISEASE_DISTRIBUTION = [
  { name: 'Early Blight', value: 45, color: '#f59e0b' },
  { name: 'Late Blight', value: 24, color: '#ef4444' },
  { name: 'Powdery Mildew', value: 60, color: '#8b5cf6' },
  { name: 'Leaf Spot', value: 23, color: '#6366f1' },
  { name: 'Downy Mildew', value: 31, color: '#3b82f6' },
  { name: 'Mosaic Virus', value: 12, color: '#f43f5e' },
  { name: 'Bacterial Spot', value: 18, color: '#14b8a6' },
];

export function calculateDiseaseRisks(temp, humidity, rainfall) {
  const calc = (hRule, tRule, rRule, base) => {
    let h = 0, t = 0, r = 0;
    for (const [cond, pts] of hRule) if (cond(humidity)) { h = pts; break; }
    for (const [cond, pts] of tRule) if (cond(temp)) { t = pts; break; }
    for (const [cond, pts] of rRule) if (cond(rainfall)) { r = pts; break; }
    return Math.min(100, h + t + r + base);
  };
  
  // Custom exact logic implementation requested: Humidity > 80% & Temp 24-30C -> > 75 (High Risk)
  let exactRiskBase = 0;
  if (humidity > 80 && temp >= 24 && temp <= 30) {
     // This guarantees the sum will cross 80 making it HIGH/CRITICAL natively
     exactRiskBase = 50; 
  }

  return [
    { name: 'Early Blight / Leaf Spot', risk: Math.min(100, exactRiskBase + calc(
        [[v=>v>80,25],[v=>v>=60,10],[()=>true,0]],
        [[v=>v>=24&&v<=30,30],[v=>v>=15&&v<=35,15],[()=>true,5]],
        [[v=>v>50,15],[v=>v>=20,5],[()=>true,0]], 10)),
      color: '#f59e0b', icon: '🍂' },
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
    { name: 'Viral Diseases', risk: calc(
        [[v=>v>=50&&v<=80,20],[v=>v>80,10],[()=>true,15]],
        [[v=>v>=28&&v<=40,35],[v=>v>=22,20],[()=>true,5]],
        [[v=>v<40,15],[v=>v<=80,5],[()=>true,0]], 10),
      color: '#f43f5e', icon: '🪲' },
  ];
}

