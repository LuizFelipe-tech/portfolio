class ProximityEffect {
    selector;
    text;
    elements;
    mousePosition = { x: 0, y: 0 };
    constructor(selector, text) {
        this.selector = selector;
        this.text = text;
        this.createElements();
        this.elements = document.querySelectorAll(`{selector, span`);
    }
    createElements() {
        const container = document.querySelector(this.selector);
        if (container) {
            const charSpans = this.text
                .split('')
                .map(char => `<span class = "char-element">${char}</span>`)
                .join('');
            container.innerHTML = charSpans;
        }
    }
}
export {};
//# sourceMappingURL=main.js.map