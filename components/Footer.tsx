import React from 'react';
import Logo from './Logo';
import type { Page } from '../types';
import { Page as PageEnum } from '../types';

interface FooterProps {
    onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-brand-green-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-1">
            <div className="bg-white/10 p-4 rounded-lg inline-block">
              <Logo className="h-12"/>
            </div>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              Soluções inovadoras em engenharia ambiental para um desenvolvimento sustentável e responsável.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold tracking-wider text-brand-light-blue uppercase">Navegação</h3>
            <ul className="mt-4 space-y-3">
              <li><button onClick={() => onNavigate(PageEnum.Home)} className="text-gray-300 hover:text-white transition-colors duration-300">Início</button></li>
              <li><button onClick={() => onNavigate(PageEnum.Services)} className="text-gray-300 hover:text-white transition-colors duration-300">Serviços</button></li>
              <li><button onClick={() => onNavigate(PageEnum.Portfolio)} className="text-gray-300 hover:text-white transition-colors duration-300">Portfólio</button></li>
              <li><button onClick={() => onNavigate(PageEnum.Contact)} className="text-gray-300 hover:text-white transition-colors duration-300">Contato</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold tracking-wider text-brand-light-blue uppercase">Contato</h3>
            <ul className="mt-4 space-y-4 text-gray-300">
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-3 mt-1 text-brand-light-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Av. Principal, 123, Sala 45<br/>Belo Horizonte, MG - Brasil</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 mr-3 text-brand-light-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>+55 (31) 99999-8888</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 mr-3 text-brand-light-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>contato@bhengenharia.com.br</span>
              </li>
            </ul>
          </div>
          
          <div>
             <h3 className="text-lg font-heading font-semibold tracking-wider text-brand-light-blue uppercase">Siga-nos</h3>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-transform transform hover:scale-110"><span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-transform transform hover:scale-110"><span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} BH Engenharia Ambiental. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;