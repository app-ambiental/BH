import React, { useState, useCallback } from 'react';
import type { Page, Service, Project } from './types';
import { Page as PageEnum } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

const servicesData: Service[] = [
  {
    icon: <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'Licenciamento Ambiental',
    description: 'Conduzimos todo o processo de licenciamento ambiental (LP, LI, LO) para garantir a conformidade legal e viabilidade de seu empreendimento.',
  },
  {
    icon: <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>,
    title: 'Gestão de Resíduos Sólidos',
    description: 'Elaboramos e implementamos Planos de Gerenciamento de Resíduos Sólidos (PGRS) para indústrias, comércios e construção civil.',
  },
  {
    icon: <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
    title: 'Estudos de Impacto (EIA/RIMA)',
    description: 'Realizamos Estudos e Relatórios de Impacto Ambiental (EIA/RIMA) com precisão técnica para projetos de grande porte.',
  },
  {
    icon: <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.894 6.126l.416-.415a1.5 1.5 0 012.122 0l.415.416M16.106 6.126l-.416-.415a1.5 1.5 0 00-2.122 0l-.415.416" /></svg>,
    title: 'Recuperação de Áreas Degradadas',
    description: 'Desenvolvemos e executamos projetos de recuperação (PRAD) para áreas impactadas por mineração, desmatamento e outras atividades.',
  },
  {
    icon: <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    title: 'Consultoria e Auditoria Ambiental',
    description: 'Oferecemos suporte estratégico e auditorias para avaliar a performance ambiental e identificar oportunidades de melhoria e otimização de processos.',
  },
    {
    icon: <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" /></svg>,
    title: 'Geoprocessamento e Drones',
    description: 'Utilizamos tecnologias de geoprocessamento, sensoriamento remoto e VANTs (drones) para mapeamento preciso e monitoramento ambiental.',
  },
];

const projectsData: Project[] = [
    { image: 'https://picsum.photos/400/300?image=25', title: 'Projeto de Licenciamento Industrial', category: 'Licenciamento', description: 'Condução bem-sucedida do processo de licenciamento para um complexo industrial de grande porte.' },
    { image: 'https://picsum.photos/400/300?image=1043', title: 'Plano de Gestão de Resíduos', category: 'Resíduos Sólidos', description: 'Implementação de um PGRS para uma rede de supermercados, reduzindo custos e impacto ambiental.' },
    { image: 'https://picsum.photos/400/300?image=1015', title: 'Recuperação de Área de Mineração', category: 'Recuperação de Áreas', description: 'Projeto de reabilitação de uma antiga área de mineração, reintroduzindo flora nativa.' },
    { image: 'https://picsum.photos/400/300?image=1074', title: 'EIA/RIMA para Usina Hidrelétrica', category: 'Estudos de Impacto', description: 'Estudo de impacto detalhado para viabilizar a construção de uma PCH na região.' },
    { image: 'https://picsum.photos/400/300?image=53', title: 'Mapeamento com Drones', category: 'Geoprocessamento', description: 'Monitoramento de reserva florestal utilizando VANTs para detecção de desmatamento.' },
    { image: 'https://picsum.photos/400/300?image=65', title: 'Auditoria Ambiental em Indústria', category: 'Auditoria', description: 'Realização de auditoria completa para certificação ISO 14001 em uma planta fabril.' },
];

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(PageEnum.Home);

  const handleNavigate = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case PageEnum.Home:
        return <HomePage onNavigate={handleNavigate} services={servicesData} />;
      case PageEnum.Services:
        return <ServicesPage services={servicesData} onNavigate={handleNavigate} />;
      case PageEnum.Portfolio:
        return <PortfolioPage projects={projectsData} />;
      case PageEnum.Contact:
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} services={servicesData} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-neutral-dark">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <WhatsAppButton />
    </div>
  );
};

export default App;