import { motion } from 'motion/react';
import { Wine, Salad, Gem, Crown } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export function SpecializationSection() {
  const { t } = useLanguage();

  const items = [
    { key: 'item1', icon: Wine, emoji: '🍷' },
    { key: 'item2', icon: Salad, emoji: '🍅' },
    { key: 'item3', icon: Gem, emoji: '💎' },
    { key: 'item4', icon: Crown, emoji: '✨' },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            {t('specialization.title')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full mb-4" />
          <p className="text-base md:text-lg text-teal-100/80 font-medium max-w-2xl mx-auto">
            {t('specialization.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="group"
              >
                <div className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-white/[0.08] hover:bg-white/[0.12] hover:border-yellow-400/30 transition-all duration-400 h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 border border-yellow-400/20 rounded-xl flex items-center justify-center group-hover:from-yellow-400 group-hover:to-amber-500 group-hover:border-transparent transition-all duration-400">
                      <Icon className="w-7 h-7 text-yellow-400 group-hover:text-teal-900 transition-colors duration-400" strokeWidth={2} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {t(`specialization.${item.key}.title`)}
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed">
                        {t(`specialization.${item.key}.description`)}
                      </p>
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
