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
        this.elements = document.querySelectorAll<HTMLSpanElement>(`{selector, span`)
    }
    private createElements(){
        const container = document.querySelector(this.selector)
        if(container){
            const charSpans = this.text
            .split('')
            .map(char => `<span class = "char-element">${char}</span>`)
            .join('')
            container.innerHTML = charSpans
        }
    }
}
export{}