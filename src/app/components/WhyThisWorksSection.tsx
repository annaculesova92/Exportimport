import { motion } from 'motion/react';
import { Gem, ShieldCheck, BarChart3, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useState } from 'react';

export function WhyThisWorksSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const reasons = [
    {
      key: 'distributor',
      icon: Gem,
      emoji: '💎',
    },
    {
      key: 'beginner',
      icon: ShieldCheck,
      emoji: '🛡️',
    },
    {
      key: 'investor',
      icon: BarChart3,
      emoji: '📊',
    },
  ];

  const activeReason = reasons[activeTab];

  return (
    <section className="py-16 sm:py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-teal-800 via-teal-900 to-teal-800">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.12) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        <motion.div
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-amber-400/8 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            {t('whyThisWorks.title')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-teal-200/70 max-w-2xl mx-auto">
            {t('whyThisWorks.subtitle')}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 w-full flex flex-row lg:flex-col gap-2 sm:gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0"
          >
            {reasons.map((reason, index) => (
              <motion.button
                key={reason.key}
                onClick={() => setActiveTab(index)}
                className={`relative flex-1 lg:flex-none w-full min-w-[120px] sm:min-w-[140px] lg:min-w-0 text-left p-3 sm:p-4 lg:p-5 rounded-xl border transition-all duration-400 ${
                  activeTab === index
                    ? 'bg-white/15 backdrop-blur-sm border-white/30 shadow-lg'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeTab === index && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 sm:h-8 rounded-r-full bg-gradient-to-b from-amber-400 to-amber-500"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-lg sm:text-2xl">{reason.emoji}</span>
                  <p className={`text-xs sm:text-sm font-bold transition-colors ${
                    activeTab === index ? 'text-white' : 'text-teal-300/60'
                  }`}>
                    {t(`whyThisWorks.${reason.key}.tabTitle`)}
                  </p>
                </div>
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 w-full"
          >
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-500" />

              <div className="p-5 sm:p-6 md:p-8 lg:p-10">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shadow-lg flex-shrink-0">
                    <activeReason.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                    {t(`whyThisWorks.${activeReason.key}.title`)}
                  </h3>
                </div>

                <p className="text-teal-100/80 leading-relaxed mb-5 sm:mb-8 text-sm sm:text-base">
                  {t(`whyThisWorks.${activeReason.key}.description`)}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[1, 2, 3, 4].map((i) => {
                    const pointKey = `whyThisWorks.${activeReason.key}.point${i}`;
                    const pointText = t(pointKey);
                    if (pointText === pointKey) return null;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-white/5"
                      >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0 text-amber-400" />
                        <span className="text-xs sm:text-sm text-teal-100/80">{pointText}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
