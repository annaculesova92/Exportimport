import { motion } from 'motion/react';
import { Contact, FileCheck, Ship, UserCheck } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useState } from 'react';

export function ValueSection() {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const solutions = [
    { icon: Ship, key: 'customs', num: '01' },
    { icon: FileCheck, key: 'certification', num: '02' },
    { icon: Contact, key: 'directContacts', num: '03' },
    { icon: UserCheck, key: 'personalApproach', num: '04' },
  ];

  const layerColors = [
    { bg: 'from-teal-700 to-teal-800', text: 'text-white', desc: 'text-teal-100/80', numColor: 'text-teal-300/40', iconBg: 'bg-white', iconColor: 'text-teal-700' },
    { bg: 'from-teal-600 to-teal-700', text: 'text-white', desc: 'text-teal-100/80', numColor: 'text-teal-200/30', iconBg: 'bg-white', iconColor: 'text-teal-600' },
    { bg: 'from-slate-600 to-slate-700', text: 'text-white', desc: 'text-slate-200/80', numColor: 'text-slate-400/30', iconBg: 'bg-white', iconColor: 'text-slate-600' },
    { bg: 'from-slate-400 to-slate-500', text: 'text-white', desc: 'text-slate-100/80', numColor: 'text-slate-300/30', iconBg: 'bg-white', iconColor: 'text-slate-500' },
  ];

  const widths = ['100%', '82%', '64%', '46%'];
  const maxWidths = ['720px', '590px', '460px', '330px'];

  return (
    <section id="value" className="py-12 sm:py-14 md:py-16 relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
              {t('value.title')}
            </h2>
            <p className="text-base text-slate-500">
              {t('value.subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col items-center gap-3 sm:gap-4">
          {solutions.map((solution, index) => {
            const style = layerColors[index];
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ scale: 1.03, y: -4, transition: { duration: 0.25 } }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative cursor-pointer"
                style={{ width: widths[index], maxWidth: maxWidths[index] }}
              >
                <div
                  className={`relative bg-gradient-to-r ${style.bg} rounded-xl sm:rounded-2xl overflow-hidden transition-shadow duration-300 ${
                    isHovered ? 'shadow-2xl shadow-slate-900/20' : 'shadow-lg shadow-slate-900/10'
                  }`}
                  style={{
                    clipPath: index === solutions.length - 1
                      ? 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)'
                      : 'polygon(4% 0%, 96% 0%, 100% 100%, 0% 100%)',
                  }}
                >
                  <div className="flex items-center gap-3 sm:gap-5 px-5 sm:px-8 py-4 sm:py-5">
                    <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full ${style.iconBg} flex items-center justify-center shadow-md`}>
                      <solution.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${style.iconColor}`} strokeWidth={2} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className={`text-sm sm:text-base font-bold ${style.text} leading-tight`}>
                        {t(`value.${solution.key}.title`)}
                      </h3>
                      <p className={`text-xs sm:text-sm ${style.desc} leading-snug mt-0.5 line-clamp-2`}>
                        {t(`value.${solution.key}.description`)}
                      </p>
                    </div>

                    <div className={`flex-shrink-0 text-2xl sm:text-3xl font-black ${style.numColor} select-none`}>
                      {solution.num}
                    </div>
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
