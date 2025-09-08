export class DynamicTextEffect {
    // --- Propriedades de Estado e Configuração ---
    private dynamicText: HTMLElement;
    private wordsArray: string[];
    private currentWordIndex: number;

    // --- Propriedades para Controle da Animação ---
    private animationFrameId: number = 0;
    private lastUpdateTimestamp: number = 0;
    private isTyping: boolean = true; // Controla se a ação atual é digitar ou apagar

    // --- Configurações de Tempo (em milissegundos) ---
    private typingInterval: number = 200;   // Intervalo entre cada letra digitada
    private deletingInterval: number = 100; // Intervalo entre cada letra apagada
    private wordStayTime: number = 3000;    // Tempo que a palavra fica na tela antes de apagar

    constructor() {
        this.dynamicText = document.querySelector('#dynamic-text')!;
        this.wordsArray = ['Soluções.', 'Futuro.', 'Sistemas.', 'Código.', 'Inovação.', 'Resultados.'];
        this.currentWordIndex = 0;
    }

    /**
     * O loop principal da animação, que decide se deve digitar ou apagar.
     * @param timestamp O tempo fornecido por requestAnimationFrame.
     */
    private animationLoop(timestamp: number): void {
        if (this.lastUpdateTimestamp === 0) {
            this.lastUpdateTimestamp = timestamp;
        }

        const elapsedTime = timestamp - this.lastUpdateTimestamp;
        
        if (this.isTyping) {
            this.handleTyping(timestamp, elapsedTime);
        } else {
            this.handleDeleting(timestamp, elapsedTime);
        }

        this.animationFrameId = requestAnimationFrame(this.animationLoop.bind(this));
    }

    /**
     * Lógica para digitar o texto.
     */
    private handleTyping(timestamp: number, elapsedTime: number): void {
        const currentWord = this.wordsArray[this.currentWordIndex];
        const currentTextLength = this.dynamicText.innerText.length;

        if (currentTextLength < currentWord!.length && elapsedTime > this.typingInterval) {
            this.dynamicText.innerText = currentWord!.slice(0, currentTextLength + 1);
            this.lastUpdateTimestamp = timestamp;
        }

        if (this.dynamicText.innerText.length === currentWord!.length && elapsedTime > this.wordStayTime) {
            this.isTyping = false;
            this.lastUpdateTimestamp = 0;
        }
    }

    /**
     * Lógica para apagar o texto.
     */
    private handleDeleting(timestamp: number, elapsedTime: number): void {
        if (this.dynamicText.innerText.length > 0 && elapsedTime > this.deletingInterval) {
            this.dynamicText.innerText = this.dynamicText.innerText.slice(0, -1);
            this.lastUpdateTimestamp = timestamp;
        }

        if (this.dynamicText.innerText.length === 0) {
            this.isTyping = true;
            this.lastUpdateTimestamp = 0;
            this.currentWordIndex = (this.currentWordIndex + 1) % this.wordsArray.length;
        }
    }

    /**
     * Inicia todo o ciclo de animação.
     */
    public start(): void {
        cancelAnimationFrame(this.animationFrameId);
        this.animationFrameId = requestAnimationFrame(this.animationLoop.bind(this));
    }
}