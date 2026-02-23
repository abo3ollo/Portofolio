// components/AOSProvider.tsx
'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AOSProviderProps {
  children: React.ReactNode;
}

const AOSProvider = ({ children }: AOSProviderProps) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);

  return <>{children}</>;
};

export default AOSProvider;