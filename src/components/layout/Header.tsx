import React, { useState } from 'react';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="nav-button relative text-standard-gray text-[1.5em] no-underline cursor-pointer transition-colors duration-300 ease-linear hover:text-it-blue desktop:text-[1em] desktop:after:content-[''] desktop:after:absolute desktop:after:w-full desktop:after:h-underline desktop:after:bg-it-blue desktop:after:bottom-[-0.5rem] desktop:after:left-0 desktop:after:scale-x-0 desktop:after:origin-center desktop:after:transition-transform desktop:after:duration-[400ms] desktop:after:ease-in-out hover:desktop:after:scale-x-100"
  >
    {children}
  </a>
);

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-10">
      <nav className="bg-background p-[3.5vh_2vh_3vh] desktop:p-[3.5vh_14vh] flex items-center justify-between border-b border-border-color">
        <a href="#" id="name" className="text-2xl font-bold">
          Luiz F.
        </a>

        {/* Desktop Menu */}
        <div className="hidden desktop:flex items-center gap-8">
          <NavLink href="#about">Sobre</NavLink>
          <NavLink href="#projects">Projetos</NavLink>
          <NavLink href="#contact">Contato</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="burger-menu"
          className="desktop:hidden p-[0.5vh] rounded-full transition-colors duration-300 ease-linear hover:bg-accent/20 cursor-pointer border-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-4 w-[150px] bg-accent/20 border border-t-0 border-border-color flex flex-col gap-4 p-4 z-[5] rounded-[5%] desktop:hidden">
          <NavLink href="#about">Sobre</NavLink>
          <NavLink href="#projects">Projetos</NavLink>
          <NavLink href="#contact">Contato</NavLink>
        </div>
      )}
    </header>
  );
}

export default Header;