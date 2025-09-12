import React from 'react';
interface NavItem {
    href: string;
    label: string;
}

const navItens: NavItem[] = [
    {href: '#', label: 'Sobre'},
    {href: '#', label: 'Projetos'},
    {href: '#', label: 'Painel'},
    {href: '#', label: 'Contato'}
]

interface NavigationProps {
    className: string;
}

const Navigation: React.FC<NavigationProps> = ({className}) => {
    return (
        <div className = {className}>
            {
                navItens.map(
                    (item) => (
                        <a href={item.href} key = {item.label} className = "nav-button">
                            {item.label}
                        </a>
                    )
                )
            }
        </div>
    )
}

export default Navigation