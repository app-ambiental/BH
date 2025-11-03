import React from 'react';
import type { Page, Service } from '../types';
import { Page as PageEnum } from '../types';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  services: Service[];
}

const whyChooseUsData = [
  {
    icon: <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    title: 'Tecnologia de Ponta',
    description: 'Utilizamos as mais recentes tecnologias e equipamentos para garantir precisão e eficiência.'
  },
  {
    icon: <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a3.004 3.004 0 014.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    title: 'Equipe Especializada',
    description: 'Nossos profissionais multidisciplinares são altamente qualificados e experientes.'
  },
  {
    icon: <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: 'Soluções Personalizadas',
    description: 'Desenvolvemos projetos sob medida para atender as necessidades específicas de cada cliente.'
  }
]

const HomePage: React.FC<HomePageProps> = ({ onNavigate, services }) => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[90vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/8292798/pexels-photo-8292798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
        <div className="absolute inset-0 bg-neutral-dark/60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight leading-tight max-w-4xl">
            Engenharia Ambiental para um <span className="text-brand-light-blue">Futuro Sustentável</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200">
            Combinamos inovação, tecnologia e expertise para oferecer soluções ambientais eficientes e responsáveis.
          </p>
          <button
            onClick={() => onNavigate(PageEnum.Contact)}
            className="mt-10 bg-brand-blue text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-green-dark shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Solicite uma Proposta
          </button>
        </div>
      </section>

      {/* Why Choose Us Section */}
       <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-green">Por que escolher a BH Engenharia?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Nosso compromisso é com a excelência, a inovação e a sustentabilidade em cada projeto que realizamos.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {whyChooseUsData.map((item, index) => (
              <div key={index} className="text-center p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-xl hover:border-brand-blue transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                 <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-blue mx-auto">
                  {item.icon}
                </div>
                <h3 className="mt-6 text-xl font-heading font-semibold text-neutral-dark">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 lg:py-32 bg-neutral-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-green">Nossos Serviços</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Oferecemos um portfólio completo de soluções para atender às demandas ambientais do seu negócio.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg group">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-blue text-white mx-auto transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-xl font-heading font-semibold text-neutral-dark text-center">{service.title}</h3>
                <p className="mt-2 text-gray-600 text-center">{service.description.substring(0, 100)}...</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button
              onClick={() => onNavigate(PageEnum.Services)}
              className="bg-brand-green text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-green-dark shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Ver Todos os Serviços
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;