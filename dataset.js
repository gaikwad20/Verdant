// dataset.js - Our dataset for crop disease prediction
const diseaseDatabase = [
    {
      id: 1,
      crop: "Rice",
      disease: "Blast",
      symptoms: ["Leaf lesions", "Diamond-shaped spots", "Gray center with brown border"],
      environmentalConditions: ["High humidity", "Temperature 24-28°C", "Cloudy days"],
      history: ["Previously affected fields", "Monoculture", "High nitrogen fertilizer"],
      treatment: "Apply fungicides containing tricyclazole or azoxystrobin. Reduce nitrogen fertilization and improve drainage in fields.",
      prevention: "Use resistant varieties, balanced fertilization, proper spacing between plants, and crop rotation."
    },
    {
      id: 2,
      crop: "Wheat",
      disease: "Rust",
      symptoms: ["Rusty-orange pustules", "Powdery spots on leaves and stems", "Chlorotic areas around pustules"],
      environmentalConditions: ["High humidity", "Temperature 15-22°C", "Wet weather"],
      history: ["Volunteer wheat nearby", "Wheat after wheat planting", "Late planting"],
      treatment: "Apply fungicides containing propiconazole or tebuconazole early in disease development.",
      prevention: "Plant resistant varieties, early planting, eliminate volunteer wheat, and crop rotation."
    },
    {
      id: 3,
      crop: "Corn",
      disease: "Northern Leaf Blight",
      symptoms: ["Long, cigar-shaped lesions", "Gray-green to tan color", "Lesions parallel to leaf margins"],
      environmentalConditions: ["Moderate temperatures", "Prolonged leaf wetness", "Heavy dew"],
      history: ["Corn debris on surface", "Continuous corn planting", "Previous infection"],
      treatment: "Apply fungicides containing pyraclostrobin, azoxystrobin, or propiconazole.",
      prevention: "Crop rotation, tillage to bury residue, resistant hybrids, and proper plant spacing."
    },
    {
      id: 4,
      crop: "Tomato",
      disease: "Early Blight",
      symptoms: ["Dark brown spots with concentric rings", "Yellow area around spots", "Lower leaves affected first"],
      environmentalConditions: ["Warm temperatures", "Humid conditions", "Wet leaves"],
      history: ["Poor soil drainage", "Previous tomato planting", "Stressed plants"],
      treatment: "Apply fungicides containing chlorothalonil or copper-based products.",
      prevention: "Crop rotation, stake plants for better air circulation, mulch around plants, water at base."
    },
    {
      id: 5,
      crop: "Potato",
      disease: "Late Blight",
      symptoms: ["Water-soaked spots", "White fuzzy growth on leaf undersides", "Dark brown lesions"],
      environmentalConditions: ["Cool temperatures", "High humidity", "Wet weather"],
      history: ["Previous infection in area", "Volunteer potatoes", "Nearby infected tomatoes"],
      treatment: "Apply fungicides containing chlorothalonil, mancozeb, or copper-based products.",
      prevention: "Destroy volunteer potatoes, use certified seed, proper hilling, and crop rotation."
    },
    {
      id: 6,
      crop: "Soybean",
      disease: "Soybean Rust",
      symptoms: ["Small yellow spots on leaves", "Rust-colored pustules on lower leaf surface", "Premature defoliation"],
      environmentalConditions: ["Prolonged leaf wetness", "Temperature 15-28°C", "High humidity"],
      history: ["Late planting", "Previous infection in region", "Extended wet periods"],
      treatment: "Apply fungicides containing triazoles or strobilurins at first signs of disease.",
      prevention: "Plant early, use resistant varieties, and maintain proper row spacing."
    },
    {
      id: 7,
      crop: "Cotton",
      disease: "Bacterial Blight",
      symptoms: ["Angular leaf spots", "Water-soaked lesions", "Dark veins"],
      environmentalConditions: ["Warm temperatures", "High humidity", "Rain or overhead irrigation"],
      history: ["Infected seeds", "Previous infection", "Continuous cotton"],
      treatment: "No effective chemical control once infected. Remove infected plants.",
      prevention: "Use resistant varieties, certified seed, crop rotation, and avoid working in field when wet."
    },
    {
      id: 8,
      crop: "Apple",
      disease: "Apple Scab",
      symptoms: ["Olive-green to brown spots on leaves", "Scabby spots on fruit", "Deformed fruit"],
      environmentalConditions: ["Cool, wet spring weather", "Prolonged leaf wetness", "High humidity"],
      history: ["Previous infection", "Fallen leaves left on ground", "Susceptible varieties"],
      treatment: "Apply fungicides containing captan or myclobutanil from green tip through fruit development.",
      prevention: "Remove and destroy fallen leaves, prune for air circulation, and resistant varieties."
    },
    {
      id: 9,
      crop: "Grape",
      disease: "Powdery Mildew",
      symptoms: ["White powdery spots on leaves and fruit", "Distorted leaf growth", "Cracked fruit"],
      environmentalConditions: ["Moderate temperatures", "High humidity but dry leaves", "Dense canopy"],
      history: ["Previous infection", "Susceptible varieties", "Poor air circulation"],
      treatment: "Apply fungicides containing sulfur, myclobutanil, or potassium bicarbonate.",
      prevention: "Proper pruning for air circulation, resistant varieties, and avoid excessive nitrogen."
    },
    {
      id: 10,
      crop: "Banana",
      disease: "Panama Disease (Fusarium Wilt)",
      symptoms: ["Yellowing of older leaves", "Splitting of pseudostem", "Wilting"],
      environmentalConditions: ["Warm temperatures", "Wet soil conditions", "Acidic soil"],
      history: ["Previously infected area", "Susceptible varieties", "Poor drainage"],
      treatment: "No effective treatment once infected. Remove and destroy infected plants.",
      prevention: "Use resistant varieties, plant in disease-free soil, and improve drainage."
    }
  ];
  
  // Save this dataset in a JSON file if preferred
  // export { diseaseDatabase };