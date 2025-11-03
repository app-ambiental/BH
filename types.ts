// Fix: Import React types and use React.ReactNode for the icon property to resolve JSX namespace error.
import type React from 'react';

export enum Page {
  Home = 'HOME',
  Services = 'SERVICES',
  Portfolio = 'PORTFOLIO',
  Contact = 'CONTACT',
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Project {
  image: string;
  title: string;
  category: string;
  description: string;
}
