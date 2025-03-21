// script.js
document.addEventListener('DOMContentLoaded', function() {
    const cropSelect = document.getElementById('crop-select');
    const symptomsChecklist = document.getElementById('symptoms-checklist');
    const envConditionsChecklist = document.getElementById('env-conditions-checklist');
    const historyChecklist = document.getElementById('history-checklist');
    const predictBtn = document.getElementById('predict-btn');
    const predictionResults = document.getElementById('prediction-results');

    // All unique symptoms, environmental conditions, and history factors across all crops
    let allSymptoms = [];
    let allEnvironmentalConditions = [];
    let allHistoryFactors = [];

    // Extract all unique symptoms, environmental conditions, and history factors
    diseaseDatabase.forEach(disease => {
        disease.symptoms.forEach(symptom => {
            if (!allSymptoms.includes(symptom)) {
                allSymptoms.push(symptom);
            }
        });

        disease.environmentalConditions.forEach(condition => {
            if (!allEnvironmentalConditions.includes(condition)) {
                allEnvironmentalConditions.push(condition);
            }
        });

        disease.history.forEach(factor => {
            if (!allHistoryFactors.includes(factor)) {
                allHistoryFactors.push(factor);
            }
        });
    });

    // Populate checklists based on selected crop
    cropSelect.addEventListener('change', function() {
        const selectedCrop = this.value;
        
        if (selectedCrop) {
            // Filter diseases for the selected crop
            const cropDiseases = diseaseDatabase.filter(disease => disease.crop === selectedCrop);
            
            // Get all symptoms, environmental conditions, and history factors for this crop
            let cropSymptoms = [];
            let cropEnvironmentalConditions = [];
            let cropHistoryFactors = [];
            
            cropDiseases.forEach(disease => {
                disease.symptoms.forEach(symptom => {
                    if (!cropSymptoms.includes(symptom)) {
                        cropSymptoms.push(symptom);
                    }
                });
                
                disease.environmentalConditions.forEach(condition => {
                    if (!cropEnvironmentalConditions.includes(condition)) {
                        cropEnvironmentalConditions.push(condition);
                    }
                });
                
                disease.history.forEach(factor => {
                    if (!cropHistoryFactors.includes(factor)) {
                        cropHistoryFactors.push(factor);
                    }
                });
            });
            
            // Populate checklists
            populateChecklist(symptomsChecklist, cropSymptoms, 'symptom');
            populateChecklist(envConditionsChecklist, cropEnvironmentalConditions, 'env-condition');
            populateChecklist(historyChecklist, cropHistoryFactors, 'history-factor');
        } else {
            // If no crop is selected, clear all checklists
            symptomsChecklist.innerHTML = '';
            envConditionsChecklist.innerHTML = '';
            historyChecklist.innerHTML = '';
        }
    });

    // Function to populate checklists
    function populateChecklist(container, items, prefix) {
        container.innerHTML = '';
        
        items.forEach((item, index) => {
            const id = `${prefix}-${index}`;
            const checkboxItem = document.createElement('div');
            checkboxItem.className = 'checkbox-item';
            
            checkboxItem.innerHTML = `
                <input type="checkbox" id="${id}" value="${item}">
                <label for="${id}">${item}</label>
            `;
            
            container.appendChild(checkboxItem);
        });
    }

    // Predict disease when the button is clicked
    predictBtn.addEventListener('click', function() {
        const selectedCrop = cropSelect.value;
        
        if (!selectedCrop) {
            predictionResults.innerHTML = '<p class="placeholder-text">Please select a crop first</p>';
            return;
        }
        
        // Get selected symptoms
        const selectedSymptoms = Array.from(document.querySelectorAll('#symptoms-checklist input:checked')).map(cb => cb.value);
        
        // Get selected environmental conditions
        const selectedConditions = Array.from(document.querySelectorAll('#env-conditions-checklist input:checked')).map(cb => cb.value);
        
        // Get selected history factors
        const selectedHistory = Array.from(document.querySelectorAll('#history-checklist input:checked')).map(cb => cb.value);
        
        if (selectedSymptoms.length === 0 && selectedConditions.length === 0 && selectedHistory.length === 0) {
            predictionResults.innerHTML = '<p class="placeholder-text">Please select at least one factor to make a prediction</p>';
            return;
        }
        
        // Filter diseases for the selected crop
        const cropDiseases = diseaseDatabase.filter(disease => disease.crop === selectedCrop);
        
        // Calculate match scores for each disease
        const matchScores = cropDiseases.map(disease => {
            const symptomMatches = selectedSymptoms.filter(symptom => disease.symptoms.includes(symptom)).length;
            const conditionMatches = selectedConditions.filter(condition => disease.environmentalConditions.includes(condition)).length;
            const historyMatches = selectedHistory.filter(factor => disease.history.includes(factor)).length;
            
            const totalMatches = symptomMatches + conditionMatches + historyMatches;
            const possibleMatches = selectedSymptoms.length + selectedConditions.length + selectedHistory.length;
            
            const matchScore = possibleMatches > 0 ? (totalMatches / possibleMatches) * 100 : 0;
            
            return {
                disease: disease,
                score: matchScore.toFixed(2),
                symptomMatches: symptomMatches,
                conditionMatches: conditionMatches,
                historyMatches: historyMatches
            };
        });
        
        // Sort by match score (highest first)
        matchScores.sort((a, b) => b.score - a.score);
        
        // Display results
        displayResults(matchScores, selectedSymptoms.length, selectedConditions.length, selectedHistory.length);
    });

    // Function to display prediction results
    function displayResults(matchScores, totalSymptoms, totalConditions, totalHistory) {
        predictionResults.innerHTML = '';
        
        if (matchScores.length === 0) {
            predictionResults.innerHTML = '<p class="placeholder-text">No diseases found for the selected crop</p>';
            return;
        }
        
        // Display top 3 matches or all if less than 3
        const topMatches = matchScores.slice(0, Math.min(3, matchScores.length));
        
        topMatches.forEach(match => {
            const predictionCard = document.createElement('div');
            predictionCard.className = 'prediction-card';
            
            const symptomMatchText = totalSymptoms > 0 ? 
                `Matching symptoms: ${match.symptomMatches}/${totalSymptoms}` : '';
                
            const conditionMatchText = totalConditions > 0 ? 
                `Matching environmental conditions: ${match.conditionMatches}/${totalConditions}` : '';
                
            const historyMatchText = totalHistory > 0 ? 
                `Matching history factors: ${match.historyMatches}/${totalHistory}` : '';
            
            predictionCard.innerHTML = `
                <h3>${match.disease.disease}</h3>
                <p class="confidence">Confidence: ${match.score}%</p>
                ${symptomMatchText ? `<p>${symptomMatchText}</p>` : ''}
                ${conditionMatchText ? `<p>${conditionMatchText}</p>` : ''}
                ${historyMatchText ? `<p>${historyMatchText}</p>` : ''}
                
                <div class="treatment-section">
                    <h4>Treatment:</h4>
                    <p>${match.disease.treatment}</p>
                </div>
                
                <div class="prevention-section">
                    <h4>Prevention:</h4>
                    <p>${match.disease.prevention}</p>
                </div>
            `;
            
            predictionResults.appendChild(predictionCard);
        });
    }
});