document.addEventListener('DOMContentLoaded', () => {
    class DynamicTextEffect {
        dynamicText;
        isIntervalRunning = false;
        //private wordsCount: string[]
        // private exhibitedWord: number
        constructor() {
            this.dynamicText = document.querySelector('#dynamic-text');
            //this.wordsCount = ['Soluções.', 'Futuro.', 'Sistemas.', 'Código.', 'Inovação.', 'Resultados.']
            //this.exhibitedWord = 0
        }
        eraseTextGradually() {
            let intervalCount = 0;
            let deleteCharIndex = this.dynamicText.innerText.length - 1;
            let intervalID = setInterval(() => {
                this.isIntervalRunning = true;
                intervalCount++;
                this.dynamicText.innerHTML = this.dynamicText.innerHTML.slice(0, deleteCharIndex);
                deleteCharIndex--;
                if (this.dynamicText.innerText.length === 0) {
                    this.isIntervalRunning = false;
                    clearInterval(intervalID);
                }
            }, 100);
            return;
        }
    }
    const heroTextEffect = new DynamicTextEffect();
    setTimeout(() => {
        heroTextEffect.eraseTextGradually();
    }, 1500);
    //heroTextEffect.NewWord()
});
export {};
//# sourceMappingURL=main.js.map