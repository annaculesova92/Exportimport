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
      accentFrom: 'from-teal-500',
      accentTo: 'to-emerald-400',
    },
    {
      key: 'beginner',
      icon: ShieldCheck,
      emoji: '🛡️',
      accentFrom: 'from-teal-600',
      accentTo: 'to-teal-400',
    },
    {
      key: 'investor',
      icon: BarChart3,
      emoji: '📊',
      accentFrom: 'from-emerald-500',
      accentTo: 'to-teal-500',
    },
  ];

  const activeReason = reasons[activeTab];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        <motion.div
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl"
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('whyThisWorks.title')}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t('whyThisWorks.subtitle')}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 w-full flex lg:flex-col gap-3"
          >
            {reasons.map((reason, index) => (
              <motion.button
                key={reason.key}
                onClick={() => setActiveTab(index)}
                className={`relative flex-1 lg:flex-none w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-400 ${
                  activeTab === index
                    ? `bg-white/10 backdrop-blur-sm border-white/30 shadow-lg`
                    : 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeTab === index && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full bg-gradient-to-b ${reason.accentFrom} ${reason.accentTo}`}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{reason.emoji}</span>
                  <div>
                    <p className={`text-sm font-bold transition-colors ${
                      activeTab === index ? 'text-white' : 'text-slate-400'
                    }`}>
                      {t(`whyThisWorks.${reason.key}.tabTitle`)}
                    </p>
                  </div>
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
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${activeReason.accentFrom} ${activeReason.accentTo}`} />

              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activeReason.accentFrom} ${activeReason.accentTo} flex items-center justify-center shadow-lg`}>
                    <activeReason.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {t(`whyThisWorks.${activeReason.key}.title`)}
                  </h3>
                </div>

                <p className="text-slate-300 leading-relaxed mb-8 text-base">
                  {t(`whyThisWorks.${activeReason.key}.description`)}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        className="flex items-start gap-3 p-3 rounded-lg bg-white/5"
                      >
                        <ChevronRight className="w-5 h-5 mt-0.5 flex-shrink-0 text-teal-400" />
                        <span className="text-sm text-slate-300">{pointText}</span>
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
