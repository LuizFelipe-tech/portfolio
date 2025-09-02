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
        xParticle;
        yParticle;
        xSpeed;
        ySpeed;
        particleSize;
        particleColor;
        constructor() {
            this.canvas = document.querySelector('canvas');
            this.ctx = this.canvas.getContext('2d');
            this.canvas.width = this.canvas.clientWidth;
            this.canvas.height = this.canvas.clientHeight;
            this.xParticle = this.canvas.width / 2;
            this.yParticle = this.canvas.height / 2;
            this.xSpeed = 0;
            this.ySpeed = 0;
            this.particleSize = 0;
            this.particleColor = 'white';
            this.renderParticle();
            requestAnimationFrame(this.animateParticle);
        }
        renderParticle() {
            this.ctx.beginPath();
            console.log(0);
            this.ctx.arc(this.xParticle, this.yParticle, 10, 0, Math.PI * 2);
            this.ctx.fillStyle = 'white';
            this.ctx.fill();
            console.log(1);
        }
        animateParticle() {
            console.log(2);
            this.ctx.clearRect(this.xParticle, this.yParticle, 20, 20);
            this.xParticle++;
            this.yParticle++;
            console.log(`x2: ${this.xParticle}, y2: ${this.yParticle}`);
            this.renderParticle();
            requestAnimationFrame(this.animateParticle);
        }
    }
    /*class BubblesEffect{
        private canvas:HTMLCanvasElement
        private ctx:CanvasRenderingContext2D
        constructor(){
            this.canvas = document.querySelector('canvas')!

            this.ctx = this.canvas.getContext('2d')!
            this.canvas.width = this.canvas.clientWidth;
            this.canvas.height = this.canvas.clientHeight;
            }
            renderParticles(){
                this.ctx.beginPath()
                //this.ctx.arc(this.xParticle, this.yParticle, 10, 0, Math.PI * 2)
                this.ctx.fillStyle = 'white'
                this.ctx.fill()
                //this.particles.push(this.ctx)
                console.log(this.particles[0])
            }
            moveParticles(){
                this.ctx
            }
    }
    const particlesByTheScreen: BubblesEffect = new BubblesEffect()
    particlesByTheScreen.renderParticles()*/
    const particle = new Particles();
    const heroTextEffect = new DynamicTextEffect();
    heroTextEffect.loopDelayTime;
    setTimeout(() => {
        heroTextEffect.eraseTextGradually();
    }, heroTextEffect.loopDelayTime);
});
export {};
//# sourceMappingURL=main.js.map