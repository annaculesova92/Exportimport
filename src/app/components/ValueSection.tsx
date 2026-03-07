import { motion } from 'motion/react';
import { Contact, FileCheck, Ship, UserCheck } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export function ValueSection() {
  const { t } = useLanguage();

  const solutions = [
    { icon: Contact, key: 'directContacts', num: '01' },
    { icon: FileCheck, key: 'certification', num: '02' },
    { icon: Ship, key: 'customs', num: '03' },
    { icon: UserCheck, key: 'personalApproach', num: '04' },
  ];

  return (
    <section id="value" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-400 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-300 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              {t('value.title')}
            </h2>
            <p className="text-base text-teal-200/70">
              {t('value.subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative"
            >
              <div className="relative rounded-2xl p-6 sm:p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.1] hover:bg-white/[0.12] hover:border-white/[0.2] transition-all duration-400 overflow-hidden h-full">
                <div className="absolute top-5 right-6 text-4xl sm:text-5xl font-black text-white/[0.04] group-hover:text-white/[0.08] transition-all duration-500 select-none">
                  {solution.num}
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center mb-5 shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 group-hover:scale-110 transition-all duration-300">
                    <solution.icon className="w-6 h-6 text-teal-900" strokeWidth={2} />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-100 transition-colors duration-300">
                    {t(`value.${solution.key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-teal-100/60 group-hover:text-teal-100/80 transition-colors duration-300">
                    {t(`value.${solution.key}.description`)}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-400/0 via-amber-400 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
