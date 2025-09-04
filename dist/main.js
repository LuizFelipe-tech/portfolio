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
    class Particles {
        canvas;
        ctx;
        centerXParticle;
        centerYParticle;
        xSpeed;
        ySpeed;
        particleSize;
        particleColor;
        constructor() {
            this.canvas = document.querySelector('canvas');
            this.ctx = this.canvas.getContext('2d');
            this.canvas.width = this.canvas.clientWidth;
            this.canvas.height = this.canvas.clientHeight;
            this.centerXParticle = Math.random() * (this.canvas.width + 1);
            this.centerYParticle = Math.random() * (this.canvas.height + 1);
            this.xSpeed = Math.random() < 0.5 ? -1 : 1;
            this.ySpeed = Math.random() < 0.5 ? -1 : 1;
            this.particleSize = Math.random() * (4);
            this.particleColor = 'gray';
        }
        initParticle() {
            this.centerXParticle = Math.random() * (this.canvas.width + 1);
            this.centerYParticle = Math.random() * (this.canvas.height + 1);
            this.xSpeed = Math.random() < 0.5 ? -1 : 1;
            this.ySpeed = Math.random() < 0.5 ? -1 : 1;
            this.particleSize = Math.random() * (4);
            this.renderParticle();
            this.animateParticle();
        }
        renderParticle() {
            this.ctx.beginPath();
            this.ctx.arc(this.centerXParticle, this.centerYParticle, this.particleSize, 0, Math.PI * 2);
            this.ctx.fillStyle = this.particleColor;
            this.ctx.fill();
        }
        animateParticle() {
            requestAnimationFrame(() => {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                if (this.centerYParticle + 5 >= this.canvas.height || this.centerYParticle - 5 <= 0) {
                    this.ySpeed *= -1;
                }
                else if (this.centerXParticle + 5 >= this.canvas.width || this.centerXParticle - 5 <= 0) {
                    this.xSpeed *= -1;
                }
                this.centerXParticle += this.xSpeed;
                this.centerYParticle += this.ySpeed;
                this.renderParticle();
                this.animateParticle();
            });
        }
    }
    for (let i = 0; i <= 11; i++) {
        const particle = new Particles();
        particle.initParticle();
    }
    const heroTextEffect = new DynamicTextEffect();
    heroTextEffect.loopDelayTime;
    setTimeout(() => {
        heroTextEffect.eraseTextGradually();
    }, heroTextEffect.loopDelayTime);
});
export {};
//# sourceMappingURL=main.js.map