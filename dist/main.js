document.addEventListener('DOMContentLoaded', () => {
    class DynamicTextEffect {
        //Propriedades e construção básica da classe
        dynamicText;
        isIntervalRunning = false;
        wordsArray;
        currentWordIndex;
        loopDelayTime;
        constructor() {
            this.dynamicText = document.querySelector('#dynamic-text');
            this.wordsArray = ['Soluções.', 'Futuro.', 'Sistemas.', 'Código.', 'Inovação.', 'Resultados.'];
            this.loopDelayTime = 0;
            this.currentWordIndex = 0;
        }
        //Apaga o texto caractere por caractere
        eraseTextGradually() {
            let deleteCharIndex = this.dynamicText.innerText.length - 1;
            let intervalID = setInterval(() => {
                this.isIntervalRunning = true;
                this.dynamicText.innerHTML = this.dynamicText.innerHTML.slice(0, deleteCharIndex);
                deleteCharIndex--;
                if (this.dynamicText.innerText.length === 0) {
                    this.isIntervalRunning = false;
                    clearInterval(intervalID);
                    this.displayNextWord();
                }
            }, 100);
        }
        //digita a nova palavra caractere por caractere, usando delay
        displayNextWord() {
            let insertCharIndex = 0;
            if (this.currentWordIndex == 5) {
                this.currentWordIndex = 0;
            }
            else {
                this.currentWordIndex++;
            }
            let intervalID = setInterval(() => {
                this.dynamicText.innerText = this.wordsArray[this.currentWordIndex].slice(0, insertCharIndex);
                insertCharIndex++;
                if (this.dynamicText.innerText.length == this.wordsArray[this.currentWordIndex].length) {
                    clearInterval(intervalID);
                    setTimeout(() => {
                        this.eraseTextGradually();
                    }, 3000);
                }
            }, 200);
        }
    }
    class BubblesEffect {
        canvas;
        xParticle;
        yParticle;
        xSpeed;
        ySpeed;
        particleSize;
        particleColor;
        constructor() {
            this.canvas = document.querySelector('canvas');
            this.canvas.getContext('2d');
            this.xParticle = 0;
            this.yParticle = 0;
            this.xSpeed = 0;
            this.ySpeed = 0;
            this.particleSize = 0;
            this.particleColor = 'white';
        }
        animate() {
        }
    }
    const heroTextEffect = new DynamicTextEffect();
    heroTextEffect.loopDelayTime;
    setTimeout(() => {
        heroTextEffect.eraseTextGradually();
    }, heroTextEffect.loopDelayTime);
});
export {};
//# sourceMappingURL=main.js.map