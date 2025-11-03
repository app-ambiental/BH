import React, { useState, useEffect } from 'react';
import type { Page } from '../types';
import { Page as PageEnum } from '../types';
import Logo from './Logo';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  onNavigate: (page: Page) => void;
  children: React.ReactNode;
  isMobile?: boolean;
}> = ({ page, currentPage, onNavigate, children, isMobile = false }) => {
  const isActive = currentPage === page;
  
  if (isMobile) {
    return (
       <button
        onClick={() => onNavigate(page)}
        className={`w-full text-left px-4 py-3 text-lg transition-colors duration-300 ${
          isActive
            ? 'bg-brand-blue text-white'
            : 'text-neutral-dark hover:bg-neutral-light'
        }`}
      >
        {children}
      </button>
    )
  }

  return (
    <button
      onClick={() => onNavigate(page)}
      className={`animated-underline px-4 py-2 text-md font-medium transition-colors duration-300 ${
        isActive
          ? 'text-brand-blue'
          : 'text-neutral-dark hover:text-brand-blue'
      }`}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md bg-white/95 backdrop-blur-sm' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => onNavigate(PageEnum.Home)}>
            <Logo className="h-14"/>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <NavLink page={PageEnum.Home} currentPage={currentPage} onNavigate={onNavigate}>Início</NavLink>
            <NavLink page={PageEnum.Services} currentPage={currentPage} onNavigate={onNavigate}>Serviços</NavLink>
            <NavLink page={PageEnum.Portfolio} currentPage={currentPage} onNavigate={onNavigate}>Portfólio</NavLink>
            <NavLink page={PageEnum.Contact} currentPage={currentPage} onNavigate={onNavigate}>Contato</NavLink>
          </nav>
          <div className="hidden md:block">
            <button onClick={() => onNavigate(PageEnum.Contact)} className="bg-brand-blue text-white px-6 py-3 rounded-full text-sm font-bold tracking-wide uppercase hover:bg-brand-green-dark shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
              Pedir Cotação
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-neutral-dark hover:text-brand-blue focus:outline-none z-50 relative">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="pt-24 flex flex-col h-full">
            <NavLink isMobile page={PageEnum.Home} currentPage={currentPage} onNavigate={(p) => { onNavigate(p); setIsOpen(false); }}>Início</NavLink>
            <NavLink isMobile page={PageEnum.Services} currentPage={currentPage} onNavigate={(p) => { onNavigate(p); setIsOpen(false); }}>Serviços</NavLink>
            <NavLink isMobile page={PageEnum.Portfolio} currentPage={currentPage} onNavigate={(p) => { onNavigate(p); setIsOpen(false); }}>Portfólio</NavLink>
            <NavLink isMobile page={PageEnum.Contact} currentPage={currentPage} onNavigate={(p) => { onNavigate(p); setIsOpen(false); }}>Contato</NavLink>
            <div className="mt-auto p-4">
               <button onClick={() => { onNavigate(PageEnum.Contact); setIsOpen(false); }} className="bg-brand-blue text-white w-full my-2 px-5 py-4 rounded-lg text-md font-semibold hover:bg-opacity-90 transition-colors text-center">
                Pedir Cotação
              </button>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;