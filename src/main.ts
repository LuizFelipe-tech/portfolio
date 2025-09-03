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
    class Particles{
        private canvas:HTMLCanvasElement
        private ctx:CanvasRenderingContext2D
        private xParticle:number
        private yParticle:number
        private xSpeed:number
        private ySpeed:number
        private particleSize:number
        constructor(){
            this.canvas = document.querySelector('canvas')!
            this.ctx = this.canvas.getContext('2d')!
            this.canvas.width = this.canvas.clientWidth;
            this.canvas.height = this.canvas.clientHeight;
            this.xParticle = this.canvas.width/2
            this.yParticle = this.canvas.height/2
            this.xSpeed = Math.random() < 0.5? -1: 1
            this.ySpeed = Math.random() < 0.5? -1: 1
            this.particleSize = 3
            this.particleColor = 'gray'

        }
        renderParticle(){
            this.ctx.beginPath()
            this.ctx.arc(this.xParticle, this.yParticle, this.particleSize, 0, Math.PI * 2)
            this.ctx.fillStyle = this.particleColor
            this.ctx.fill()
        }
        animateParticle(){
            requestAnimationFrame(()=>{
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                if(this.xParticle >= this.canvas.width || this.xParticle <= 0 || this.yParticle >= this.canvas.height || this.yParticle <= 0){
                    this.xSpeed*= Math.random() < 0.5? -1: 1
                    this.ySpeed*= Math.random() < 0.5? -1: 1
            }
                this.xParticle+=this.xSpeed
                this.yParticle+=this.ySpeed
                this.renderParticle()
                this.animateParticle()
            })

            
        }
    }
    const particle = new Particles()
    particle.renderParticle()
    particle.animateParticle()
    const heroTextEffect: DynamicTextEffect = new DynamicTextEffect()
    heroTextEffect.loopDelayTime
    setTimeout(()=>{
        heroTextEffect.eraseTextGradually()
    }, heroTextEffect.loopDelayTime)
})