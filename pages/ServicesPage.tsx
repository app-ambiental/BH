import React from 'react';
import type { Page } from '../types';
import { Page as PageEnum } from '../types';
import type { Service } from '../types';

interface ServicesPageProps {
  services: Service[];
  onNavigate: (page: Page) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ services, onNavigate }) => {
  return (
    <div className="bg-white animate-fade-in-up">
      {/* Page Header */}
      <section className="bg-brand-green py-20 lg:py-24 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold">Nossas Soluções Ambientais</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-200">
            Oferecemos uma gama completa de serviços de engenharia e consultoria ambiental para garantir a sustentabilidade e conformidade do seu projeto.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div key={index} className="bg-neutral-light p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col transform hover:-translate-y-2 group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-brand-blue text-white transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <div className="mt-6 flex-grow">
                  <h3 className="text-xl font-heading font-semibold text-neutral-dark">{service.title}</h3>
                  <p className="mt-3 text-base text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-brand-blue py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-heading font-bold">Tem um projeto em mente?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
            Vamos conversar sobre como nossas soluções podem ajudar a alcançar seus objetivos de forma sustentável.
          </p>
          <button
            onClick={() => onNavigate(PageEnum.Contact)}
            className="mt-8 bg-white text-brand-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Entre em Contato
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;