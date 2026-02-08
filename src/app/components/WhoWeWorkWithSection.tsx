import { motion } from 'motion/react';
import { Store, Rocket, TrendingUp, ArrowDown } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useState } from 'react';

export function WhoWeWorkWithSection() {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const audiences = [
    {
      key: 'distributors',
      icon: Store,
      number: '01',
      gradient: 'from-teal-700 to-emerald-600',
      lightGradient: 'from-teal-50 to-emerald-50',
      iconColor: 'text-teal-700',
    },
    {
      key: 'smallBusiness',
      icon: Rocket,
      number: '02',
      gradient: 'from-teal-700 to-teal-600',
      lightGradient: 'from-teal-50 to-teal-100',
      iconColor: 'text-teal-700',
    },
    {
      key: 'investors',
      icon: TrendingUp,
      number: '03',
      gradient: 'from-emerald-700 to-teal-700',
      lightGradient: 'from-emerald-50 to-teal-50',
      iconColor: 'text-emerald-700',
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-300/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-300/50 to-transparent" />
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-teal-100/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
            {t('whoWeWorkWith.title')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-500 max-w-2xl mx-auto px-2">
            {t('whoWeWorkWith.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={audience.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                <div className={`relative h-full rounded-2xl border transition-all duration-500 overflow-hidden ${
                  isHovered
                    ? 'border-transparent shadow-2xl scale-[1.02]'
                    : 'border-slate-200 shadow-sm hover:shadow-lg'
                }`}>
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${audience.gradient} opacity-0 transition-opacity duration-500`}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                  />

                  <div className="relative z-10 p-5 sm:p-6 md:p-8">
                    <div className="flex items-start justify-between mb-4 sm:mb-6">
                      <motion.div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
                          isHovered
                            ? 'bg-white/20 backdrop-blur-sm'
                            : `bg-gradient-to-br ${audience.lightGradient}`
                        }`}
                        animate={isHovered ? { rotate: [0, -10, 10, 0] } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className={`w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-500 ${
                          isHovered ? 'text-white' : audience.iconColor
                        }`} />
                      </motion.div>

                      <span className={`text-4xl sm:text-5xl font-black transition-colors duration-500 ${
                        isHovered ? 'text-white/20' : 'text-slate-100'
                      }`}>
                        {audience.number}
                      </span>
                    </div>

                    <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 transition-colors duration-500 ${
                      isHovered ? 'text-white' : 'text-slate-900'
                    }`}>
                      {t(`whoWeWorkWith.${audience.key}.title`)}
                    </h3>

                    <p className={`text-xs sm:text-sm leading-relaxed transition-colors duration-500 ${
                      isHovered ? 'text-white/85' : 'text-slate-500'
                    }`}>
                      {t(`whoWeWorkWith.${audience.key}.description`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10 sm:mt-14"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-800 hover:to-teal-900 text-white font-semibold text-sm sm:text-base rounded-xl shadow-lg shadow-teal-800/25 hover:shadow-xl hover:shadow-teal-800/35 transition-all duration-300"
          >
            {t('contactUs')}
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
