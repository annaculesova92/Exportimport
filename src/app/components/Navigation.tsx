import { useState, useEffect } from 'react';
import { Menu, X, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LanguageSwitcher } from '@/app/components/LanguageSwitcher';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface NavigationProps {
  onContactClick: () => void;
}

export function Navigation({ onContactClick }: NavigationProps) {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-effect shadow-lg'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 premium-gradient rounded-xl flex items-center justify-center shadow-lg">
              <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-foreground">{t('nav.companyName')}</div>
              <div className="text-xs text-muted-foreground">{t('nav.companyTagline')}</div>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-8">
            {['services', 'process', 'team'].map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item)}
                className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {t(`nav.${item}`)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <LanguageSwitcher />
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              onClick={onContactClick}
              className="px-4 py-2 sm:px-6 sm:py-2.5 premium-gradient text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-300"
            >
              {t('nav.contact')}
            </motion.button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-primary/10 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-effect border-t border-border"
          >
            <div className="px-4 py-4 space-y-2">
              {['services', 'process', 'team'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-5 py-3 rounded-xl hover:bg-primary/10 transition-colors text-foreground font-semibold"
                >
                  {t(`nav.${item}`)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
