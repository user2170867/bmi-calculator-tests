function calculateBMI(weightKg, heightCm) {
    const heightM = heightCm / 100;
    if (weightKg <= 0 || heightM <= 0) throw new Error('Invalid input');
    return weightKg / (heightM * heightM);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
}

function calculateAndCategorize(weightKg, heightCm) {
    const bmi = calculateBMI(weightKg, heightCm);
    const category = getBMICategory(bmi);
    return { bmi: parseFloat(bmi.toFixed(2)), category };
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculateBMI, getBMICategory, calculateAndCategorize };
}
