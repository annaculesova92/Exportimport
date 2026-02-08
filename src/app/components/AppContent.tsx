import { useState, useEffect } from 'react';
import { Navigation } from '@/app/components/Navigation';
import { HeroSection } from '@/app/components/HeroSection';
import { SpecializationSection } from '@/app/components/SpecializationSection';
import { WhoWeWorkWithSection } from '@/app/components/WhoWeWorkWithSection';
import { WhyThisWorksSection } from '@/app/components/WhyThisWorksSection';
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
      <Navigation onContactClick={() => setIsContactModalOpen(true)} />

      <main className="pt-16 sm:pt-20">
        <HeroSection onContactClick={() => setIsContactModalOpen(true)} />
        <SpecializationSection />
        <WhoWeWorkWithSection />
        <WhyThisWorksSection />
        <ValueSection />
        <ServicesSection onContactClick={() => setIsContactModalOpen(true)} />
        <ProcessSection />
        <StatsSection />
        <TrustBadges />
        <TeamSection onContactClick={() => setIsContactModalOpen(true)} />
        <ContactSection />
      </main>

      <Footer onContactClick={() => setIsContactModalOpen(true)} />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-4 sm:right-6 z-40 w-12 h-12 premium-gradient text-white rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/25 hover:scale-110 transition-all duration-300 flex items-center justify-center"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => setIsContactModalOpen(true)}
        className="fixed bottom-6 left-4 sm:left-6 z-40 w-14 h-14 premium-gradient text-white rounded-2xl shadow-lg hover:shadow-xl hover:shadow-primary/25 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      >
        <Mail className="w-6 h-6" />
        <div className="absolute left-full ml-3 px-3 py-2 dark-gradient text-white rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs font-semibold pointer-events-none hidden sm:block">
          {t('contactUs')}
        </div>
      </motion.button>
    </div>
  );
}
