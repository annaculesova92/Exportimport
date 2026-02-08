import { motion } from 'motion/react';
import { CheckCircle, Shield, Users, Clock, Award } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useState } from 'react';

export function ValueSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const solutions = [
    { icon: Shield, key: 'confidentiality', gradient: 'from-teal-600 to-teal-700' },
    { icon: Clock, key: 'speed', gradient: 'from-teal-700 to-emerald-800' },
    { icon: Award, key: 'professionalism', gradient: 'from-emerald-700 to-teal-700' },
    { icon: Users, key: 'support', gradient: 'from-teal-600 to-emerald-700' },
  ];

  return (
    <section id="value" className="py-14 sm:py-18 md:py-20 bg-gradient-to-br from-white via-teal-50/20 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-teal-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                className="group"
              >
                <motion.div
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className={`relative bg-white rounded-xl border ${
                    isActive ? 'border-teal-300 shadow-lg' : 'border-slate-100 shadow-sm'
                  } transition-all duration-300 overflow-hidden`}
                >
                  <div className="relative z-10 p-6 flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${solution.gradient} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-teal-900 mb-1.5 group-hover:text-teal-700 transition-colors">
                        {t(`value.${solution.key}.title`)}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {t(`value.${solution.key}.description`)}
                      </p>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <div className="w-7 h-7 bg-teal-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-teal-600" />
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${solution.gradient}`}
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
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
