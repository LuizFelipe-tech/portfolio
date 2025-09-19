import React, { useState } from 'react';
import Navigation from './Navigation';

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
  const ToggleMenu = () => {isMenuOpen!}

  return (
    <header className="relative z-10">
      <nav className="border-b border-slate-700 h-15 flex items-center justify-between p-5">
        <a href="#" id="name" className="text-2xl font-bold text-white">
          Luiz Felipe
        </a>
        <Navigation className='text-white flex gap-10'/>
        <img src="./src/assets/imgs/code_24dp_38BDF8_FILL0_wght400_GRAD0_opsz24.svg" />
      </nav>
    </header>
  );
}

export default Header;