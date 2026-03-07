import { motion } from 'motion/react';
import { ArrowRight, Shield, Globe, Ship, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface HeroSectionProps {
  onContactClick: () => void;
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-white via-slate-50/50 to-teal-50/40 pt-10 pb-32 sm:pt-14 sm:pb-40 lg:pt-20 lg:pb-48 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] right-[5%] w-[600px] h-[600px] bg-teal-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[2%] w-[500px] h-[500px] bg-emerald-100/20 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] left-[30%] w-[700px] h-[700px] bg-teal-50/40 rounded-full blur-[150px]" />
        <div className="absolute top-[10%] left-[60%] w-[300px] h-[300px] bg-yellow-50/30 rounded-full blur-[80px]" />
      </div>

      <motion.div
        className="absolute top-[20%] right-[12%] hidden lg:block"
        animate={{ y: [0, -18, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-teal-100/60 flex items-center justify-center">
          <Globe className="w-8 h-8 text-teal-600" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[55%] right-[20%] hidden lg:block"
        animate={{ y: [0, 14, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <div className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-100/60 flex items-center justify-center">
          <Ship className="w-7 h-7 text-emerald-600" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[35%] right-[30%] hidden lg:block"
        animate={{ y: [0, -12, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        <div className="w-12 h-12 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-teal-100/50 flex items-center justify-center">
          <TrendingUp className="w-6 h-6 text-teal-500" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[65%] right-[6%] hidden xl:block"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-3 h-3 bg-teal-400 rounded-full" />
      </motion.div>
      <motion.div
        className="absolute top-[25%] right-[42%] hidden xl:block"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      >
        <div className="w-2.5 h-2.5 bg-emerald-300 rounded-full" />
      </motion.div>
      <motion.div
        className="absolute top-[45%] right-[8%] hidden xl:block"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      >
        <div className="w-2 h-2 bg-yellow-400/60 rounded-full" />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-56 bg-gradient-to-b from-transparent via-teal-900/30 to-teal-900 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/70 backdrop-blur-sm rounded-full mb-8 sm:mb-10 border border-teal-200/50 shadow-sm"
          >
            <Shield className="w-4 h-4 text-teal-600" />
            <span className="text-xs sm:text-sm font-semibold text-teal-700 tracking-wide">
              {t('hero.trusted')}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-8 sm:mb-10"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.08] tracking-tight mb-6 sm:mb-8">
              {t('hero.title')}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl font-light">
              {t('hero.subtitle')}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-base sm:text-lg text-slate-500 leading-relaxed mb-10 sm:mb-12 max-w-2xl"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={onContactClick}
              className="group px-8 py-4 sm:px-10 sm:py-5 bg-teal-700 text-white rounded-2xl font-semibold text-base sm:text-lg hover:bg-teal-800 hover:shadow-2xl hover:shadow-teal-700/25 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <span>{t('hero.cta')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('value');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 sm:px-10 sm:py-5 bg-white/80 backdrop-blur-sm border-2 border-slate-200/80 text-slate-700 rounded-2xl font-semibold text-base sm:text-lg hover:border-teal-300 hover:text-teal-700 hover:bg-teal-50/50 transition-all duration-300"
            >
              {t('hero.learnMore')}
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
