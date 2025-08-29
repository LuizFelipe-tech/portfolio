document.addEventListener('DOMContentLoaded', () => {
    class DynamicTextEffect {
        dynamicText;
        wordsCount;
        exhibitedWord;
        constructor() {
            this.dynamicText = document.querySelector('#dynamic-text');
            this.wordsCount = ['Soluções.', 'Futuro.', 'Sistemas.', 'Código.', 'Inovação.', 'Resultados.'];
            this.exhibitedWord = 0;
        }
        DeleteWord() {
            let count = 0;
            console.log('1');
            let deleteCharacterAt = this.dynamicText.innerText.length - 1;
            console.log('2');
            console.log(this.dynamicText.innerHTML);
            var intervalID = setInterval(() => {
                console.log('3');
                count++;
                this.dynamicText.innerHTML = this.dynamicText.innerHTML.slice(0, deleteCharacterAt);
                console.log(this.dynamicText.innerText.slice(0, deleteCharacterAt));
                console.log(this.dynamicText.innerHTML);
                console.log('4');
                deleteCharacterAt--;
                if (this.wordsCount[this.exhibitedWord].length == 0) {
                    console.log('5');
                    clearInterval(intervalID);
                }
            }, 10000);
            return;
        }
        NewWord() {
            if (this.exhibitedWord > 5) {
                this.exhibitedWord = 0;
            }
            else {
                this.exhibitedWord++;
            }
            let characterIndex = this.wordsCount[this.exhibitedWord].length - 1;
            let count = 0;
            let intervalID = setInterval(() => {
                this.dynamicText.innerText = this.dynamicText.innerText.slice(0, characterIndex);
                if (count < this.wordsCount[this.exhibitedWord].length) {
                    count++;
                }
                else {
                    clearInterval(intervalID);
                }
            }, 100);
        }
    }
    const heroTextEffect = new DynamicTextEffect();
    console.log('0');
    console.log(heroTextEffect.dynamicText.innerHTML);
    heroTextEffect.DeleteWord();
    heroTextEffect.NewWord();
});
export {};
//# sourceMappingURL=main.js.map