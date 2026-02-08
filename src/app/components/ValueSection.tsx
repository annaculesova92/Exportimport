import { motion } from 'motion/react';
import { Shield, Users, Clock, Award } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useState } from 'react';

export function ValueSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const solutions = [
    { icon: Shield, key: 'confidentiality' },
    { icon: Clock, key: 'speed' },
    { icon: Award, key: 'professionalism' },
    { icon: Users, key: 'support' },
  ];

  return (
    <section id="value" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-white via-teal-50/20 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-teal-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-900 mb-3">
              {t('value.title')}
            </h2>
            <p className="text-base text-slate-500">
              {t('value.subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {solutions.map((solution, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setActiveIndex(index)}
                onHoverEnd={() => setActiveIndex(null)}
                className="group cursor-pointer"
              >
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className={`relative rounded-2xl p-6 sm:p-7 transition-all duration-400 overflow-hidden ${
                    isActive
                      ? 'bg-gradient-to-br from-teal-700 via-teal-800 to-emerald-800 shadow-2xl shadow-teal-900/30'
                      : 'bg-white border border-slate-100 shadow-sm hover:shadow-lg'
                  }`}
                >
                  <div className="relative z-10 flex items-start gap-5">
                    <motion.div
                      animate={{
                        scale: isActive ? 1.1 : 1,
                        rotate: isActive ? 5 : 0,
                      }}
                      transition={{ duration: 0.3, type: 'spring' }}
                      className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-400 ${
                        isActive
                          ? 'bg-yellow-400 shadow-lg shadow-yellow-400/40'
                          : 'bg-teal-50 border border-teal-100'
                      }`}
                    >
                      <solution.icon
                        className={`w-7 h-7 transition-colors duration-400 ${
                          isActive ? 'text-teal-900' : 'text-teal-600'
                        }`}
                        strokeWidth={2}
                      />
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-lg font-bold mb-2 transition-colors duration-400 ${
                          isActive ? 'text-white' : 'text-teal-900'
                        }`}
                      >
                        {t(`value.${solution.key}.title`)}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed transition-colors duration-400 ${
                          isActive ? 'text-teal-100' : 'text-slate-500'
                        }`}
                      >
                        {t(`value.${solution.key}.description`)}
                      </p>
                    </div>
                  </div>

                  {isActive && (
                    <motion.div
                      className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                  )}

                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500"
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? '100%' : 0 }}
                    transition={{ duration: 0.35 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
