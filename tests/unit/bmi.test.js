const { calculateBMI, getBMICategory, calculateAndCategorize } = require('../../src/bmi');

describe('Юнит-тесты BMI калькулятора', () => {
    test('calculateBMI для 70кг, 170см', () => {
        expect(calculateBMI(70, 170)).toBeCloseTo(24.22, 2);
    });
    test('calculateBMI ошибка при неположительном весе', () => {
        expect(() => calculateBMI(0, 170)).toThrow('Invalid input');
    });
    test('getBMICategory: 18.4 -> Underweight', () => {
        expect(getBMICategory(18.4)).toBe('Underweight');
    });
    test('getBMICategory: 18.5 -> Normal weight', () => {
        expect(getBMICategory(18.5)).toBe('Normal weight');
    });
    test('getBMICategory: 25 -> Overweight', () => {
        expect(getBMICategory(25)).toBe('Overweight');
    });
    test('getBMICategory: 30 -> Obese', () => {
        expect(getBMICategory(30)).toBe('Obese');
    });
    test('calculateAndCategorize', () => {
        const res = calculateAndCategorize(70, 170);
        expect(res.bmi).toBeCloseTo(24.22, 2);
        expect(res.category).toBe('Normal weight');
    });
});
