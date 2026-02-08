import { motion } from 'motion/react';
import { Shield, Lock, FileCheck, Award } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export function TrustBadges() {
  const { t } = useLanguage();

  const badges = [
    { icon: FileCheck, key: 'nda', color: 'from-teal-500 to-teal-600' },
    { icon: Lock, key: 'encryption', color: 'from-emerald-500 to-emerald-600' },
    { icon: Shield, key: 'compliance', color: 'from-teal-600 to-teal-700' },
    { icon: Award, key: 'insurance', color: 'from-emerald-600 to-emerald-700' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-teal-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-emerald-100/20 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-5"
          >
            <div className="w-11 h-11 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl flex items-center justify-center shadow-lg shadow-teal-600/20">
              <Shield className="w-5.5 h-5.5 text-white" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-900 mb-3"
          >
            {t('trust.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto"
          >
            {t('trust.subtitle') !== 'trust.subtitle' ? t('trust.subtitle') : ''}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-100/50 transition-all duration-400 h-full text-center">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br group-hover:from-teal-600 group-hover:to-teal-700 group-hover:border-teal-600 group-hover:shadow-lg group-hover:shadow-teal-600/20 transition-all duration-400"
                >
                  <badge.icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors duration-400" strokeWidth={1.8} />
                </motion.div>

                <h3 className="text-sm font-bold text-slate-800 mb-1.5 leading-tight">
                  {t(`trust.${badge.key}.title`)}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {t(`trust.${badge.key}.description`)}
                </p>

                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-b-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
