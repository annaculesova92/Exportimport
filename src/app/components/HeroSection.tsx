import { motion } from 'motion/react';
import { ArrowRight, Shield, Globe, Ship, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface HeroSectionProps {
  onContactClick: () => void;
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-50 via-white to-teal-50/30 pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-[5%] w-[400px] h-[400px] bg-emerald-100/30 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-50/50 rounded-full blur-[120px]" />
      </div>

      <motion.div
        className="absolute top-32 right-[15%] hidden lg:block"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-teal-100 flex items-center justify-center">
          <Globe className="w-8 h-8 text-teal-600" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-[25%] hidden lg:block"
        animate={{ y: [0, 12, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <div className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-100 flex items-center justify-center">
          <Ship className="w-7 h-7 text-emerald-600" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-48 right-[35%] hidden lg:block"
        animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-teal-100 flex items-center justify-center">
          <TrendingUp className="w-6 h-6 text-teal-500" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[60%] right-[8%] hidden xl:block opacity-60"
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-3 h-3 bg-teal-400 rounded-full" />
      </motion.div>
      <motion.div
        className="absolute top-[30%] right-[45%] hidden xl:block opacity-40"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      >
        <div className="w-2 h-2 bg-emerald-400 rounded-full" />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-200/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-8 sm:mb-10 border border-teal-200/60 shadow-sm"
          >
            <Shield className="w-4 h-4 text-teal-600" />
            <span className="text-xs sm:text-sm font-semibold text-teal-700">
              {t('hero.trusted')}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 sm:mb-10"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 sm:mb-8">
              {t('hero.title')}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-2xl">
              {t('hero.subtitle')}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg text-slate-500 leading-relaxed mb-10 sm:mb-12 max-w-2xl"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-14 sm:mb-16"
          >
            <button
              onClick={onContactClick}
              className="group px-8 py-4 sm:px-10 sm:py-5 bg-teal-700 text-white rounded-2xl font-semibold text-base sm:text-lg hover:bg-teal-800 hover:shadow-xl hover:shadow-teal-700/20 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <span>{t('hero.cta')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('value');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 sm:px-10 sm:py-5 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-semibold text-base sm:text-lg hover:border-teal-300 hover:text-teal-700 hover:bg-teal-50/50 transition-all duration-300"
            >
              {t('hero.learnMore')}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-8 sm:gap-12"
          >
            {[
              { value: '150+', key: 'clients' },
              { value: '35+', key: 'countries' },
              { value: '12+', key: 'experience' },
            ].map((stat, i) => (
              <div key={i} className="relative">
                <span className="text-3xl sm:text-4xl font-bold text-teal-700">{stat.value}</span>
                <span className="block text-xs sm:text-sm text-slate-400 font-medium mt-1">{t(`stats.${stat.key}`)}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
