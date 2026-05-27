const STORAGE_KEY = 'bmi_history';

function getHistory() {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
}

function saveRecord(record) {
    const history = getHistory();
    const newRecord = { id: Date.now(), ...record, timestamp: new Date().toISOString() };
    history.push(newRecord);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    return newRecord;
}

function clearHistory() {
    localStorage.removeItem(STORAGE_KEY);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getHistory, saveRecord, clearHistory };
}
