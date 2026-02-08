import { motion } from 'motion/react';
import { Shield, Lock, FileCheck, Award } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export function TrustBadges() {
  const { t } = useLanguage();

  const badges = [
    { icon: FileCheck, key: 'nda', color: 'text-teal-700', bg: 'bg-teal-50', border: 'border-teal-100', hoverBorder: 'hover:border-teal-300' },
    { icon: Lock, key: 'encryption', color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-100', hoverBorder: 'hover:border-emerald-300' },
    { icon: Shield, key: 'compliance', color: 'text-teal-700', bg: 'bg-teal-50', border: 'border-teal-100', hoverBorder: 'hover:border-teal-300' },
    { icon: Award, key: 'insurance', color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-100', hoverBorder: 'hover:border-emerald-300' },
  ];

  return (
    <section className="py-14 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-900">
            {t('trust.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className={`relative bg-white rounded-xl p-5 border ${badge.border} ${badge.hoverBorder} hover:shadow-md transition-all duration-300 h-full`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 ${badge.bg} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <badge.icon className={`w-5 h-5 ${badge.color}`} strokeWidth={2} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 leading-tight">
                    {t(`trust.${badge.key}.title`)}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed pl-[52px]">
                  {t(`trust.${badge.key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
