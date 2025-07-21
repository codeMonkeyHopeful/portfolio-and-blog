'use client';
import { useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const BootstrapClientInit = () => {
  useEffect(() => {
    // Import Bootstrap JS only on the client side
    const loadBootstrap = async () => {
      try {
        // Import the main bootstrap module instead of the specific bundle
        await import('bootstrap');
        console.log('Bootstrap JS loaded successfully');
      } catch (error) {
        console.error('Failed to load Bootstrap JS:', error);
      }
    };
    loadBootstrap();
    return;
  }, []);

  return null;
};
