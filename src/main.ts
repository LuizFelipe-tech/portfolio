document.addEventListener('DOMContentLoaded', () => {
    class DynamicTextEffect{
        //Propriedades e construção básica da classe
        private dynamicText:HTMLParagraphElement            
        public isIntervalRunning: boolean = false
        private wordsArray: string[]
        private currentWordIndex: number
        public loopDelayTime: number
        constructor(){
            this.dynamicText = document.querySelector('#dynamic-text')!
            this.wordsArray = ['Soluções.', 'Futuro.', 'Sistemas.', 'Código.', 'Inovação.', 'Resultados.']
            this.loopDelayTime  = 0
            this.currentWordIndex = 0
        }
        //Apaga o texto caractere por caractere
        eraseTextGradually(): void{

            let deleteCharIndex: number = this.dynamicText.innerText.length - 1
            let intervalID = setInterval(()=>{
                this.isIntervalRunning = true
                this.dynamicText.innerHTML = this.dynamicText.innerHTML.slice(0, deleteCharIndex)
                deleteCharIndex--
                if(this.dynamicText.innerText!.length === 0 ){
                    this.isIntervalRunning = false
                    clearInterval(intervalID)
                    this.displayNextWord()                           
                }
            }, 100)
        }
        //digita a nova palavra caractere por caractere, usando delay
        displayNextWord(): void{
            let insertCharIndex: number = 0
                if(this.currentWordIndex == 5){
                    this.currentWordIndex = 0
                } else{
                    this.currentWordIndex++
                }
                let intervalID = setInterval(() => {
                this.dynamicText.innerText = this.wordsArray[this.currentWordIndex]!.slice(0, insertCharIndex)
                insertCharIndex++
                if(this.dynamicText.innerText.length == this.wordsArray[this.currentWordIndex]!.length){
                    clearInterval(intervalID)
                    setTimeout(()=>{
                        this.eraseTextGradually()
                    }, 3000)
                    
                }
            }, 200);
            
        }
        
    }
    class BubblesEffect{
        private canvas:HTMLCanvasElement
        private xParticle:number
        private yParticle:number
        private xSpeed:number
        private ySpeed:number
        private particleSize:number
        private particleColor:string
        constructor(){
            this.canvas = document.querySelector('canvas')!
            this.canvas.getContext('2d')
            this.xParticle = 0
            this.yParticle = 0
            this.xSpeed = 0
            this.ySpeed = 0
            this.particleSize = 0
            this.particleColor = 'white'
            }
        animate(){

        }
    }
    const heroTextEffect: DynamicTextEffect = new DynamicTextEffect()
    heroTextEffect.loopDelayTime
    setTimeout(()=>{
        heroTextEffect.eraseTextGradually()
    }, heroTextEffect.loopDelayTime)  
})