import React from 'react';
import { LanguageProvider } from '@/app/contexts/LanguageContext';
import { AppContent } from '@/app/components/AppContent';

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}