document.addEventListener('DOMContentLoaded', () => {
    class DynamicTextEffect {
        // --- Propriedades de Estado e Configuração ---
        dynamicText;
        wordsArray;
        currentWordIndex;
        // --- Propriedades para Controle da Animação ---
        animationFrameId = 0;
        lastUpdateTimestamp = 0;
        isTyping = true; // Controla se a ação atual é digitar ou apagar
        // --- Configurações de Tempo (em milissegundos) ---
        typingInterval = 200; // Intervalo entre cada letra digitada
        deletingInterval = 100; // Intervalo entre cada letra apagada
        wordStayTime = 3000; // Tempo que a palavra fica na tela antes de apagar
        constructor() {
            this.dynamicText = document.querySelector('#dynamic-text');
            this.wordsArray = ['Soluções.', 'Futuro.', 'Sistemas.', 'Código.', 'Inovação.', 'Resultados.'];
            this.currentWordIndex = 0;
        }
        /**
         * O loop principal da animação, que decide se deve digitar ou apagar.
         * @param timestamp O tempo fornecido por requestAnimationFrame.
         */
        animationLoop(timestamp) {
            // Inicializa o timestamp na primeira execução do loop
            if (this.lastUpdateTimestamp === 0) {
                this.lastUpdateTimestamp = timestamp;
            }
            const elapsedTime = timestamp - this.lastUpdateTimestamp;
            if (this.isTyping) {
                // --- LÓGICA DE DIGITAÇÃO ---
                const currentWord = this.wordsArray[this.currentWordIndex];
                const currentTextLength = this.dynamicText.innerText.length;
                // Se a palavra ainda não foi totalmente digitada e o tempo passou
                if (currentTextLength < currentWord.length && elapsedTime > this.typingInterval) {
                    this.dynamicText.innerText = currentWord.slice(0, currentTextLength + 1);
                    this.lastUpdateTimestamp = timestamp; // Reseta o cronômetro
                }
                // Se a palavra terminou de ser digitada
                if (this.dynamicText.innerText.length === currentWord.length && elapsedTime > this.wordStayTime) {
                    this.isTyping = false; // Muda o estado para apagar
                    this.lastUpdateTimestamp = 0; // Reseta o tempo para o próximo estado
                }
            }
            else {
                // --- LÓGICA DE APAGAR ---
                // Se o texto ainda não foi totalmente apagado e o tempo passou
                if (this.dynamicText.innerText.length > 0 && elapsedTime > this.deletingInterval) {
                    this.dynamicText.innerText = this.dynamicText.innerText.slice(0, -1);
                    this.lastUpdateTimestamp = timestamp; // Reseta o cronômetro
                }
                // Se o texto terminou de ser apagado
                if (this.dynamicText.innerText.length === 0) {
                    this.isTyping = true; // Muda o estado para digitar
                    this.lastUpdateTimestamp = 0; // Reseta o tempo para o próximo estado
                    // Passa para a próxima palavra
                    this.currentWordIndex++;
                    if (this.currentWordIndex >= this.wordsArray.length) {
                        this.currentWordIndex = 0;
                    }
                }
            }
            // Continua o loop para o próximo quadro
            this.animationFrameId = requestAnimationFrame(this.animationLoop.bind(this));
        }
        /**
         * Inicia todo o ciclo de animação.
         */
        start() {
            // Cancela qualquer animação anterior para evitar loops duplicados
            cancelAnimationFrame(this.animationFrameId);
            // Inicia o loop
            this.animationFrameId = requestAnimationFrame(this.animationLoop.bind(this));
        }
    }
    class DynamicParticle {
        particleSize;
        particleColor;
        centerXParticle;
        centerYParticle;
        xSpeed;
        ySpeed;
        canvaWidth;
        canvaHeight;
        constructor(canvaWidth, canvaHeight) {
            this.canvaWidth = canvaWidth;
            this.canvaHeight = canvaHeight;
            this.particleSize = Math.random() * 4;
            this.centerXParticle = Math.random() * (canvaWidth + 1);
            this.centerYParticle = Math.random() * (canvaHeight + 1);
            this.xSpeed = Math.random() < 0.5 ? -1 : 1;
            this.ySpeed = Math.random() < 0.5 ? -1 : 1;
            this.particleColor = 'gray';
        }
        renderParticle(ctx) {
            ctx.beginPath();
            ctx.arc(this.centerXParticle, this.centerYParticle, this.particleSize, 0, Math.PI * 2);
            ctx.fillStyle = this.particleColor;
            ctx.fill();
        }
        moveParticle() {
            if (this.centerYParticle + 5 >= this.canvaHeight || this.centerYParticle - 5 <= 0) {
                this.ySpeed *= -1;
            }
            else if (this.centerXParticle + 5 >= this.canvaWidth || this.centerXParticle - 5 <= 0) {
                this.xSpeed *= -1;
            }
            this.centerXParticle += this.xSpeed;
            this.centerYParticle += this.ySpeed;
        }
    }
    class ParticleAnimationSystem {
        canvas;
        ctx;
        particles;
        constructor() {
            this.canvas = document.querySelector('canvas');
            this.ctx = this.canvas.getContext('2d');
            this.canvas.width = this.canvas.clientWidth;
            this.canvas.height = this.canvas.clientHeight;
            this.particles = [];
            this.initParticles();
        }
        initParticles() {
            for (let i = 0; i < 50; i++) {
                this.particles.push(new DynamicParticle(this.canvas.width, this.canvas.height));
            }
            this.framingManagement();
        }
        renderAllParticles() {
            this.particles.forEach((particle) => {
                particle.renderParticle(this.ctx);
            });
        }
        startParticleAnimation() {
            this.particles.forEach((particle) => {
                particle.moveParticle();
            });
        }
        framingManagement() {
            requestAnimationFrame(() => {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.renderAllParticles();
                this.startParticleAnimation();
                this.framingManagement();
            });
        }
    }
    const particle = new ParticleAnimationSystem();
    const heroTextEffect = new DynamicTextEffect();
    // Começa a animação do texto
    heroTextEffect.start();
});
export {};
//# sourceMappingURL=main.js.map