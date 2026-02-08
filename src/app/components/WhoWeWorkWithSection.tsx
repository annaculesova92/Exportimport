import { motion } from 'motion/react';
import { Store, Rocket, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
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
      gradient: 'from-teal-600 to-emerald-500',
      lightGradient: 'from-teal-50 to-emerald-50',
      iconColor: 'text-teal-600',
      ctaColor: 'text-teal-600',
    },
    {
      key: 'smallBusiness',
      icon: Rocket,
      number: '02',
      gradient: 'from-amber-500 to-orange-500',
      lightGradient: 'from-amber-50 to-orange-50',
      iconColor: 'text-amber-600',
      ctaColor: 'text-amber-600',
    },
    {
      key: 'investors',
      icon: TrendingUp,
      number: '03',
      gradient: 'from-indigo-600 to-purple-500',
      lightGradient: 'from-indigo-50 to-purple-50',
      iconColor: 'text-indigo-600',
      ctaColor: 'text-indigo-600',
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-300/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-300/50 to-transparent" />
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-teal-100/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl"
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
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200/60 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-semibold text-teal-700 tracking-wide uppercase">
              {t('whoWeWorkWith.badge')}
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {t('whoWeWorkWith.title')}
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            {t('whoWeWorkWith.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
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

                  <div className="relative z-10 p-8">
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
                          isHovered
                            ? 'bg-white/20 backdrop-blur-sm'
                            : `bg-gradient-to-br ${audience.lightGradient}`
                        }`}
                        animate={isHovered ? { rotate: [0, -10, 10, 0] } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className={`w-7 h-7 transition-colors duration-500 ${
                          isHovered ? 'text-white' : audience.iconColor
                        }`} />
                      </motion.div>

                      <span className={`text-5xl font-black transition-colors duration-500 ${
                        isHovered ? 'text-white/20' : 'text-slate-100'
                      }`}>
                        {audience.number}
                      </span>
                    </div>

                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-500 ${
                      isHovered ? 'text-white' : 'text-slate-900'
                    }`}>
                      {t(`whoWeWorkWith.${audience.key}.title`)}
                    </h3>

                    <p className={`text-sm leading-relaxed mb-6 transition-colors duration-500 ${
                      isHovered ? 'text-white/85' : 'text-slate-500'
                    }`}>
                      {t(`whoWeWorkWith.${audience.key}.description`)}
                    </p>

                    <motion.div
                      className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-500 ${
                        isHovered ? 'text-white' : audience.ctaColor
                      }`}
                      animate={isHovered ? { x: [0, 5, 0] } : {}}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    >
                      {t(`whoWeWorkWith.${audience.key}.cta`)}
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
