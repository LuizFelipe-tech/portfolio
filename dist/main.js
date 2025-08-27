class ProximityEffect {
    selector;
    text;
    elements;
    mousePosition = { x: 0, y: 0 };
    constructor(selector, text) {
        this.selector = selector;
        this.text = text;
        this.createElements();
        this.elements = document.querySelectorAll(`${this.selector} span`);
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
    setupListeners() {
        window.addEventListener('mousemove', (event) => {
            this.mousePosition.x = event.clientX;
            this.mousePosition.y = event.clientY;
        });
    }
    updateStyles() {
        this.elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const deltaX = this.mousePosition.x - centerX;
            const deltaY = rect.top + rect.height / 2;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const percentageDistance = distance;
        });
    }
}
export {};
//# sourceMappingURL=main.js.map