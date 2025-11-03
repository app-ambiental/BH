import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = 'h-12' }) => {
  const logoUrl = 'https://storage.googleapis.com/aistudio-hub-generative-ai/e8983e20-54b9-4601-9f5b-6c0b02445b23/image_0.png';
  
  return (
    <img 
      src={logoUrl} 
      alt="BH Engenharia Ambiental Logo" 
      className={`${className} w-auto`} 
    />
  );
};

export default Logo;
