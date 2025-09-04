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
    class DynamicParticle{
        private particleSize:number
        private particleColor:string
        private centerXParticle: number
        private centerYParticle: number
        private xSpeed: number
        private ySpeed: number
        private canvaWidth: number
        private canvaHeight: number
        constructor(canvaWidth: number, canvaHeight: number){
            this.canvaWidth = canvaWidth
            this.canvaHeight = canvaHeight
            this.particleSize = Math.random() * 4
            this.centerXParticle = Math.random() * (canvaWidth + 1)
            this.centerYParticle = Math.random() * (canvaHeight + 1)
            this.xSpeed = Math.random() < 0.5? -1: 1
            this.ySpeed = Math.random() < 0.5? -1: 1
            this.particleColor = 'gray'
        }
        renderParticle(ctx: CanvasRenderingContext2D){
            ctx.beginPath()
            ctx.arc(this.centerXParticle, this.centerYParticle, this.particleSize, 0, Math.PI * 2)
            ctx.fillStyle = this.particleColor
            ctx.fill()
        }
        moveParticle(){
            if(this.centerYParticle + 5 >= this.canvaHeight || this.centerYParticle! - 5 <= 0){
                this.ySpeed! *= -1
            } 
            else if(this.centerXParticle! + 5 >= this.canvaWidth || this.centerXParticle! - 5 <= 0){
                this.xSpeed! *= -1
            }
            this.centerXParticle! += this.xSpeed!
            this.centerYParticle! += this.ySpeed!
        }
    }
    class ParticleAnimationSystem{
        private canvas:HTMLCanvasElement
        private ctx:CanvasRenderingContext2D
        private particles: DynamicParticle[]
        constructor(){
            this.canvas = document.querySelector('canvas')!
            this.ctx = this.canvas.getContext('2d')!            
            this.canvas.width = this.canvas.clientWidth;
            this.canvas.height = this.canvas.clientHeight;
            this.particles = []
            this.initParticles()
        }
        initParticles(){
            for(let i = 0; i<50; i++){
                this.particles.push(new DynamicParticle(this.canvas.width, this.canvas.height))
            }
            this.framingManagement()
        }
        renderAllParticles(){
            this.particles.forEach((particle) => {
                particle.renderParticle(this.ctx)
            });
        }
        startParticleAnimation(){
                this.particles.forEach((particle) => {
                    particle.moveParticle()
                });
        }
        framingManagement(){
        requestAnimationFrame(()=>{
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                this.renderAllParticles()
                this.startParticleAnimation()
                this.framingManagement()
        })

        }
    }
    const particle = new ParticleAnimationSystem
    const heroTextEffect: DynamicTextEffect = new DynamicTextEffect()
    heroTextEffect.loopDelayTime
    setTimeout(()=>{
        heroTextEffect.eraseTextGradually()
    }, heroTextEffect.loopDelayTime)
})