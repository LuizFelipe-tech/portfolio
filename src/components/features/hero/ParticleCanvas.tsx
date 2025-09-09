import React, { useRef, useEffect } from 'react';

// Classe para uma única partícula (mantida da sua implementação original)
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
        this.particleColor = '#8B949E';
    }
 
    // Desenha a partícula na tela
    public renderParticle(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.centerXParticle, this.centerYParticle, this.particleSize, 0, Math.PI * 2);
        ctx.fillStyle = this.particleColor;
        ctx.fill();
    }
 
    // Atualiza a posição da partícula
    public moveParticle(): void {
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
 
const ParticleCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
 
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
 
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
 
        let animationFrameId: number;
        const particles: DynamicParticle[] = [];
 
        const setupCanvas = () => {
            canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
            canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
            particles.length = 0; // Limpa as partículas ao redimensionar
            initParticles();
        };
 
        const initParticles = () => {
            const numberOfParticles = 100;
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new DynamicParticle(canvas.width, canvas.height));
            }
        };
 
        const animationLoop = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => {
                particle.moveParticle();
                particle.renderParticle(ctx);
            });
            animationFrameId = requestAnimationFrame(animationLoop);
        };
 
        setupCanvas();
        animationLoop();
 
        window.addEventListener('resize', setupCanvas);
 
        return () => {
            window.removeEventListener('resize', setupCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);
 
    return <canvas ref={canvasRef} id="minhaTela" />;
};
 
export default ParticleCanvas;