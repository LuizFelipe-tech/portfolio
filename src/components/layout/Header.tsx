import React, { useState, useEffect } from 'react';
import burgerMenuIcon from '../../assets/imgs/menu_24dp_38BDF8_FILL0_wght400_GRAD0_opsz24.svg';
import codeIcon from '../../assets/imgs/code_24dp_38BDF8_FILL0_wght400_GRAD0_opsz24.svg';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Este hook garante que o menu feche se a tela for redimensionada para o tamanho de desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1000) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        // Limpa o listener quando o componente é desmontado para evitar vazamentos de memória
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Determina a classe CSS a ser usada com base no estado do menu
    const navLinksClassName = isMenuOpen ? 'nav-menu' : 'navbuttons';

    return (
        <header>
            <nav>
                <img 
                    src={burgerMenuIcon} 
                    alt="Menu" 
                    id="burger-menu"
                    onClick={() => setIsMenuOpen(!isMenuOpen)} // Alterna o estado do menu ao clicar
                />
                <p id="name">Luiz Felipe</p>
                <div className={navLinksClassName}>
                    <p className="nav-button">Sobre</p>
                    <p className="nav-button">Projetos</p>
                    <p className="nav-button">Painel</p>
                    <p className="nav-button">Contato</p>
                </div>
                <img src={codeIcon} alt="Símbolo de código" />
            </nav>
        </header>
    );
};

export default Header;