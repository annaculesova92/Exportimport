import { useState, useEffect } from 'react';
import { Navigation } from '@/app/components/Navigation';
import { HeroSection } from '@/app/components/HeroSection';
import { SpecializationSection } from '@/app/components/SpecializationSection';
import { ValueSection } from '@/app/components/ValueSection';
import { ServicesSection } from '@/app/components/ServicesSection';
import { ProcessSection } from '@/app/components/ProcessSection';
import { StatsSection } from '@/app/components/StatsSection';
import { TrustBadges } from '@/app/components/TrustBadges';
import { TeamSection } from '@/app/components/TeamSection';
import { ContactSection } from '@/app/components/ContactSection';
import { ContactModal } from '@/app/components/ContactModal';
import { Footer } from '@/app/components/Footer';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Mail } from 'lucide-react';

export function AppContent() {
  const { t } = useLanguage();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background antialiased">
      {/* Navigation */}
      <Navigation onContactClick={() => setIsContactModalOpen(true)} />

      {/* Main Content */}
      <main>
        <HeroSection onContactClick={() => setIsContactModalOpen(true)} />
        <SpecializationSection />
        <ValueSection />
        <ServicesSection onContactClick={() => setIsContactModalOpen(true)} />
        <ProcessSection />
        <StatsSection />
        <TrustBadges />
        <TeamSection onContactClick={() => setIsContactModalOpen(true)} />
        <ContactSection onContactClick={() => setIsContactModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onContactClick={() => setIsContactModalOpen(true)} />

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />

      {/* Floating Action Buttons */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-4 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 premium-gradient text-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl hover:shadow-primary/25 hover:scale-110 transition-all duration-300 flex items-center justify-center"
          >
            <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Message Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => setIsContactModalOpen(true)}
        className="fixed bottom-6 left-4 sm:left-6 z-40 w-14 h-14 sm:w-16 sm:h-16 premium-gradient text-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl hover:shadow-primary/25 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      >
        <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
        <div className="absolute left-full ml-3 sm:ml-4 px-3 py-2 sm:px-4 sm:py-2 dark-gradient text-white rounded-lg sm:rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs sm:text-sm font-semibold pointer-events-none hidden sm:block">
          {t('contactUs')}
        </div>
      </motion.button>

      {/* Floating Contact Button - Mobile Only */}
      <motion.button
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        onClick={() => setIsContactModalOpen(true)}
        className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40 px-5 py-3 sm:px-6 sm:py-3 premium-gradient text-white rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/25 font-semibold text-sm md:hidden"
      >
        {t('writeUs')}
      </motion.button>
    </div>
  );
}