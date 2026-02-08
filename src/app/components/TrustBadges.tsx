import { motion } from 'motion/react';
import { Shield, Lock, FileCheck, Award } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export function TrustBadges() {
  const { t } = useLanguage();
  
  const badges = [
    {
      icon: FileCheck,
      key: 'nda'
    },
    {
      icon: Lock,
      key: 'encryption'
    },
    {
      icon: Shield,
      key: 'compliance'
    },
    {
      icon: Award,
      key: 'insurance'
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-900">
            {t('trust.title')}
          </h2>
        </motion.div>

        {/* Simple 2x2 or 4 columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 border-2 border-transparent hover:border-teal-200 hover:shadow-lg transition-all duration-300 h-full">
                {/* Number Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-teal-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <badge.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  <span className="text-sm font-bold text-white bg-teal-600 w-8 h-8 rounded-full flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-teal-900 mb-3">
                    {t(`trust.${badge.key}.title`)}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t(`trust.${badge.key}.description`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}