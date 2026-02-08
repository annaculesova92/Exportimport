import { motion } from 'motion/react';
import { ArrowRight, Shield, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface HeroSectionProps {
  onContactClick: () => void;
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
  const { t } = useLanguage();
  
  return (
    <section className="relative bg-gradient-to-br from-white via-secondary/30 to-white pt-20 pb-16 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center space-x-2 px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mb-6 sm:mb-8 border border-primary/20"
          >
            <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-semibold text-primary">
              {t('hero.trusted')}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-4 sm:mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed mb-3 sm:mb-4 font-medium">
              {t('hero.subtitle')}
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t('hero.description')}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12"
          >
            <button
              onClick={onContactClick}
              className="group px-6 py-3.5 sm:px-8 sm:py-4 premium-gradient text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span className="text-base sm:text-base">{t('hero.cta')}</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => {
                const valueSection = document.getElementById('value');
                valueSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3.5 sm:px-8 sm:py-4 bg-white border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg text-base sm:text-base"
            >
              {t('hero.learnMore')}
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-8 pt-8 border-t border-border"
          >
            <div className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">150+</div>
              <div className="text-sm text-muted-foreground font-medium">{t('stats.clients')}</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">35+</div>
              <div className="text-sm text-muted-foreground font-medium">{t('stats.countries')}</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">12+</div>
              <div className="text-sm text-muted-foreground font-medium">{t('stats.experience')}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}