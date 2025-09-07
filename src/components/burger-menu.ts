export class BurgerMenu{
    private menu:HTMLImageElement
    constructor(){
        this.menu = document.querySelector('#burger-menu')!
    }
    manageMenu() {
        this.menu.addEventListener("click", ()=>{
            alert("clique")
        })
    }
}