import React from 'react';

const navItems = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#painel', label: 'Painel' },
    { href: '#contato', label: 'Contato' },
];

interface NavigationProps {
    className: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
    return (
        <div className={className}>
            {navItems.map((item) => (
                <a key={item.label} href={item.href} className="nav-button">
                    {item.label}
                </a>
            ))}
        </div>
    );
};

export default Navigation;