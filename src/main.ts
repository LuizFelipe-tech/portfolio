    interface MouseCoordinates{
    x: number;
    y: number
}
class ProximityEffect{
  private readonly selector: string;
  private readonly text: string;

  private elements: NodeListOf<HTMLSpanElement>;
  private mousePosition: MouseCoordinates = { x: 0, y: 0 };
    constructor(selector: string, text: string){
        this.selector = selector
        this.text = text
        this.createElements()
        this.elements = document.querySelectorAll<HTMLSpanElement>(`${this.selector} span`)
    }
    private createElements(): void{
        const container = document.querySelector(this.selector)
        if(container){
            const charSpans = this.text
            .split('')
            .map(char => `<span class = "char-element">${char}</span>`)
            .join('')
            container.innerHTML = charSpans
        }
    }
    private setupListeners(): void{
        window.addEventListener('mousemove', (event) => {
            this.mousePosition.x = event.clientX
            this.mousePosition.y = event.clientY
        })
    }
    private updateStyles(): void{
        this.elements.forEach(element => {
            const rect = element.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height /2
            const deltaX = this.mousePosition.x - centerX
            const deltaY = rect.top + rect.height / 2
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            const percentageDistance = distance;
        })
    }
    /*private updateStyles(): void {
    // 1. Itera sobre cada elemento <span> que a gente selecionou no construtor.
    this.elements.forEach(element => {
        // 2. Obtém a posição e as dimensões exatas do <span> na tela.
        const rect = element.getBoundingClientRect();
        
        // 3. Calcula as coordenadas do centro do <span>.
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // 4. Calcula a distância euclidiana entre o mouse e o centro do <span>.
        const deltaX = this.mousePosition.x - centerX;
        const deltaY = this.mousePosition.y - centerY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        // 5. Mapeia a distância para os valores de desfoque e brilho.
        // O desfoque diminui conforme a distância diminui.
        const blurValue = Math.min(distance / 20, 20); 
        // O brilho aumenta conforme a distância diminui.
        const glowValue = Math.max(100 - distance / 1.5, 0); 
        
        // 6. Atualiza as variáveis CSS para cada elemento.
        element.style.setProperty('--distance', `${blurValue}px`);
        element.style.setProperty('--glow', `${glowValue}`);
    });

    // 7. Pede ao navegador para chamar este método novamente no próximo quadro.
    requestAnimationFrame(() => this.updateStyles());
}*/
}
export{}



