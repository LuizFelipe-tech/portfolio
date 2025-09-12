import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import burgerMenuIcon from '../../assets/imgs/menu_24dp_38BDF8_FILL0_wght400_GRAD0_opsz24.svg';
import codeIcon from '../../assets/imgs/code_24dp_38BDF8_FILL0_wght400_GRAD0_opsz24.svg';

const DESKTOP_BREAKPOINT = 1000;

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= DESKTOP_BREAKPOINT) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    const navLinksClassName = isMenuOpen ? 'nav-menu' : 'navbuttons';

    return (
        <header>
            <nav>
                {}
                <button id="burger-menu" onClick={toggleMenu} aria-label="Abrir menu">
                    <img 
                        src={burgerMenuIcon} 
                        alt=""
                    />
                </button>

                {}
                <p id="name">Luiz Felipe</p>

                {}
                <Navigation className={navLinksClassName} />

                <img src={codeIcon} alt="Símbolo de código" />
            </nav>
        </header>
    );
};

export default Header;