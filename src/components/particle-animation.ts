// Classe para uma única partícula
class DynamicParticle {
    private particleSize: number;
    private particleColor: string;
    private centerXParticle: number;
    private centerYParticle: number;
    private xSpeed: number;
    private ySpeed: number;
    private canvasWidth: number;
    private canvasHeight: number;

    constructor(canvasWidth: number, canvasHeight: number) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.particleSize = Math.random() * 2 + 0.5; // Tamanho entre 0.5 e 2.5
        this.centerXParticle = Math.random() * canvasWidth;
        this.centerYParticle = Math.random() * canvasHeight;
        this.xSpeed = (Math.random() - 0.5) * 0.5; // Velocidade aleatória entre -0.25 e 0.25
        this.ySpeed = (Math.random() - 0.5) * 0.5;
        this.particleColor = '#8B949E'; // Usando a variável de cor
    }

    // Desenha a partícula na tela
    renderParticle(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.centerXParticle, this.centerYParticle, this.particleSize, 0, Math.PI * 2);
        ctx.fillStyle = this.particleColor;
        ctx.fill();
    }

    // Atualiza a posição da partícula
    moveParticle() {
        if (this.centerYParticle + this.particleSize >= this.canvasHeight || this.centerYParticle - this.particleSize <= 0) {
            this.ySpeed *= -1;
        }
        if (this.centerXParticle + this.particleSize >= this.canvasWidth || this.centerXParticle - this.particleSize <= 0) {
            this.xSpeed *= -1;
        }
        this.centerXParticle += this.xSpeed;
        this.centerYParticle += this.ySpeed;
    }
}

// Classe que gerencia todo o sistema de animação
export class ParticleAnimationSystem {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private particles: DynamicParticle[];

    constructor() {
        this.canvas = document.querySelector('canvas')!;
        this.ctx = this.canvas.getContext('2d')!;
        this.particles = [];
        this.setupCanvas();
        this.initParticles();
        this.animationLoop(); // Inicia o loop de animação
    }

    // Configura o tamanho inicial do canvas
    private setupCanvas() {
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;
        // Adicionar um listener para redimensionar o canvas com a janela
        window.addEventListener('resize', () => {
            this.canvas.width = this.canvas.clientWidth;
            this.canvas.height = this.canvas.clientHeight;
        });
    }

    // Cria as partículas iniciais
    private initParticles() {
        const numberOfParticles = 100;
        for (let i = 0; i < numberOfParticles; i++) {
            this.particles.push(new DynamicParticle(this.canvas.width, this.canvas.height));
        }
    }

    // O loop de animação principal
    private animationLoop() {
        // Limpa a tela
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Move e desenha cada partícula
        this.particles.forEach((particle) => {
            particle.moveParticle();
            particle.renderParticle(this.ctx);
        });

        // Chama o próximo frame
        requestAnimationFrame(this.animationLoop.bind(this));
    }
}