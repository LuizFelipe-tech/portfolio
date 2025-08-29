document.addEventListener('DOMContentLoaded', () => {
    class DynamicTextEffect{
        private dynamicText:HTMLParagraphElement
        public isIntervalRunning: boolean = false
        //private wordsCount: string[]
       // private exhibitedWord: number
        constructor(){
            this.dynamicText = document.querySelector('#dynamic-text')!
            //this.wordsCount = ['Soluções.', 'Futuro.', 'Sistemas.', 'Código.', 'Inovação.', 'Resultados.']
            //this.exhibitedWord = 0
        }
        eraseTextGradually(): void{
            let intervalCount: number = 0
            let deleteCharIndex: number = this.dynamicText.innerText.length - 1
            let intervalID = setInterval(()=>{
                this.isIntervalRunning = true
                intervalCount++
                this.dynamicText.innerHTML = this.dynamicText.innerHTML.slice(0, deleteCharIndex)
                deleteCharIndex--
                if(this.dynamicText.innerText!.length === 0 ){
                    this.isIntervalRunning = false
                    clearInterval(intervalID)                           
                }
            }, 100)

            return
        }
        /*NewWord(): void{
            if(this.exhibitedWord > 5){
                this.exhibitedWord = 0
            }else{
                this.exhibitedWord++  
            }
            let characterIndex: number = this.wordsCount[this.exhibitedWord]!.length - 1
                let count: number = 0
                let intervalID = setInterval(()=>{
                        this.dynamicText.innerText = this.dynamicText.innerText.slice(0, characterIndex)
                        if(count < this.wordsCount[this.exhibitedWord]!.length){
                            count++
                        }else{
                            clearInterval(intervalID)
                        }
                    }, 100)   
        }*/
        
    }
    const heroTextEffect: DynamicTextEffect = new DynamicTextEffect()
    setTimeout(()=>{
        heroTextEffect.eraseTextGradually()
    }, 1500)

    //heroTextEffect.NewWord()
})