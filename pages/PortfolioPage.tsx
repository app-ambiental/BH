import React, { useState, useMemo } from 'react';
import type { Project } from '../types';

interface PortfolioPageProps {
  projects: Project[];
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const categories = useMemo(() => {
    const allCategories = projects.map(p => p.category);
    return ['Todos', ...Array.from(new Set(allCategories))];
  }, [projects]);
  
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Todos') {
      return projects;
    }
    return projects.filter(p => p.category === activeFilter);
  }, [activeFilter, projects]);

  return (
    <div className="bg-neutral-light animate-fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-brand-green tracking-tight">Nosso Portfólio de Projetos</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Conheça alguns dos projetos que desenvolvemos, aplicando as melhores práticas de engenharia e sustentabilidade.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                activeFilter === category
                  ? 'bg-brand-blue text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="relative h-64">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                 <div className="absolute bottom-0 left-0 p-6">
                   <p className="text-sm font-semibold text-brand-light-blue uppercase tracking-wider">{project.category}</p>
                   <h3 className="mt-1 text-xl font-heading font-bold text-white">{project.title}</h3>
                 </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;