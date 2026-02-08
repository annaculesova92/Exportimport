import { motion } from 'motion/react';
import { Shield, Lock, FileCheck, Award, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export function TrustBadges() {
  const { t } = useLanguage();

  const badges = [
    { icon: FileCheck, key: 'nda' },
    { icon: Lock, key: 'encryption' },
    { icon: Shield, key: 'compliance' },
    { icon: Award, key: 'insurance' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-5"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/30">
              <Shield className="w-6 h-6 text-white" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3"
          >
            {t('trust.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm sm:text-base text-slate-400 max-w-lg mx-auto"
          >
            {t('trust.subtitle') !== 'trust.subtitle' ? t('trust.subtitle') : ''}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group"
            >
              <div className="relative bg-white/[0.06] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.08] hover:border-yellow-400/30 hover:bg-white/[0.1] transition-all duration-400 h-full">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-teal-500/10 border border-teal-400/20 flex items-center justify-center mb-4 group-hover:bg-yellow-400 group-hover:border-yellow-400 group-hover:shadow-lg group-hover:shadow-yellow-400/30 transition-all duration-400"
                  >
                    <badge.icon className="w-7 h-7 text-teal-300 group-hover:text-teal-900 transition-colors duration-400" strokeWidth={2} />
                  </motion.div>

                  <h3 className="text-sm font-bold text-white mb-2 leading-tight">
                    {t(`trust.${badge.key}.title`)}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {t(`trust.${badge.key}.description`)}
                  </p>

                  <div className="mt-4 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CheckCircle className="w-3.5 h-3.5 text-yellow-400" />
                    <span className="text-[11px] text-yellow-400 font-semibold uppercase tracking-wider">Active</span>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-b-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
