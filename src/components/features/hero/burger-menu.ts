export class BurgerMenu {
    private burgerMenu: HTMLImageElement;
    private navButtons: HTMLDivElement;
    private mediaQuery: MediaQueryList;

    constructor() {
        this.burgerMenu = document.querySelector<HTMLImageElement>('#burger-menu')!;
        this.navButtons = document.querySelector<HTMLDivElement>('.navbuttons')!;
        this.mediaQuery = matchMedia('(min-width: 1000px)');
    }

    private handleScreenChange = (): void => {
            this.navButtons.classList.remove('nav-menu');
            this.navButtons.classList.add('navbuttons');
    }

    private toggleMenu = (): void => {
        this.navButtons.classList.toggle('nav-menu');
        this.navButtons.classList.toggle('navbuttons');
    }
    public manageMenu(): void {
        this.mediaQuery.addEventListener('change', this.handleScreenChange);
        this.burgerMenu.addEventListener('click', this.toggleMenu);
    }
}