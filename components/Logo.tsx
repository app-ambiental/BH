import React from 'react';
import { logoBase64 } from '../assets/logo';

const Logo: React.FC<{ className?: string }> = ({ className = 'h-12' }) => {
  return (
    <img
      src={logoBase64}
      alt="BH Engenharia Ambiental Logo"
      className={className}
    />
  );
};

export default Logo;
