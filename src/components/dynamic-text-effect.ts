   export class DynamicTextEffect {
        // --- Propriedades de Estado e Configuração ---
        private dynamicText: HTMLParagraphElement;
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
                if (currentTextLength < currentWord!.length && elapsedTime > this.typingInterval) {
                    this.dynamicText.innerText = currentWord!.slice(0, currentTextLength + 1);
                    this.lastUpdateTimestamp = timestamp; // Reseta o cronômetro
                }

                // Se a palavra terminou de ser digitada
                if (this.dynamicText.innerText.length === currentWord!.length && elapsedTime > this.wordStayTime) {
                    this.isTyping = false; // Muda o estado para apagar
                    this.lastUpdateTimestamp = 0; // Reseta o tempo para o próximo estado
                }

            } else {
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
        public start(): void {
            // Cancela qualquer animação anterior para evitar loops duplicados
            cancelAnimationFrame(this.animationFrameId);
            // Inicia o loop
            this.animationFrameId = requestAnimationFrame(this.animationLoop.bind(this));
        }
    }