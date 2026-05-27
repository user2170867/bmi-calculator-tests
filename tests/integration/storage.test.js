/**
 * @jest-environment jsdom
 */
const { getHistory, saveRecord, clearHistory } = require('../../src/storage');

describe('Интеграционные тесты storage (localStorage)', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('saveRecord сохраняет запись', () => {
        const record = { weight: 70, height: 170, bmi: 24.22, category: 'Normal' };
        const saved = saveRecord(record);
        expect(saved.id).toBeDefined();
        expect(saved.timestamp).toBeDefined();
        const history = getHistory();
        expect(history.length).toBe(1);
        expect(history[0].bmi).toBe(24.22);
    });

    test('getHistory пустая', () => {
        expect(getHistory()).toEqual([]);
    });

    test('clearHistory очищает', () => {
        saveRecord({ test: true });
        clearHistory();
        expect(getHistory()).toEqual([]);
    });
});
