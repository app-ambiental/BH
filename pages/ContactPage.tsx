import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setSubmitted(true);
    // Here you would typically send the data to a server
  };

  return (
    <div className="bg-white animate-fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-brand-green tracking-tight">Entre em Contato</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Pronto para iniciar seu projeto? Preencha o formulário abaixo ou utilize nossos outros canais de contato. Estamos prontos para ajudar.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-0 shadow-2xl rounded-lg overflow-hidden">
          <div className="bg-brand-green p-8 md:p-12 text-white">
            <h2 className="text-3xl font-heading font-bold mb-6 text-brand-light-blue">Informações de Contato</h2>
            <div className="space-y-6 text-gray-200">
              <p className="flex items-start">
                <svg className="h-6 w-6 text-brand-light-blue mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-lg">Av. Principal, 123, Sala 45<br/>Belo Horizonte, MG - Brasil</span>
              </p>
              <p className="flex items-center">
                <svg className="h-6 w-6 text-brand-light-blue mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="text-lg">+55 (31) 99999-8888</span>
              </p>
              <p className="flex items-center">
                <svg className="h-6 w-6 text-brand-light-blue mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="text-lg">contato@bhengenharia.com.br</span>
              </p>
            </div>
            <div className="mt-8 rounded-lg overflow-hidden">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.211054942971!2d-43.93988368552191!3d-19.91550994347854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e0e0e0e0e1%3A0x0!2sBelo%20Horizonte%2C%20MG!5e0!3m2!1sen!2sbr!4v1620999000000" 
                    width="100%" 
                    height="250" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy"
                    title="Google Maps Location"
                ></iframe>
            </div>
          </div>

          <div className="p-8 md:p-12 bg-neutral-light">
            {submitted ? (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-800 p-6 rounded-lg text-center h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold font-heading">Obrigado!</h3>
                <p className="mt-2 text-lg">Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <input type="text" name="name" id="name" required onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" name="email" id="email" required onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <input type="tel" name="phone" id="phone" onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Serviço de Interesse</label>
                  <select id="service" name="service" onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue">
                    <option>Selecione um serviço</option>
                    <option>Licenciamento Ambiental</option>
                    <option>Gestão de Resíduos Sólidos</option>
                    <option>Estudos de Impacto Ambiental (EIA/RIMA)</option>
                    <option>Recuperação de Áreas Degradadas</option>
                    <option>Consultoria e Auditoria Ambiental</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea id="message" name="message" rows={5} required onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-lg text-lg font-medium text-white bg-brand-blue hover:bg-brand-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue transition-colors">
                    Enviar Solicitação
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;