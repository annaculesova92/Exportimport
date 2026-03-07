import { motion } from 'motion/react';
import {
  Globe,
  Package,
  FileText,
  TrendingUp,
  BarChart,
  ShieldCheck,
  MessageSquareMore
} from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useState } from 'react';

interface ServicesSectionProps {
  onContactClick: () => void;
}

export function ServicesSection({ onContactClick }: ServicesSectionProps) {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    { icon: Globe, key: 'export', num: '01' },
    { icon: Package, key: 'import', num: '02' },
    { icon: FileText, key: 'compliance', num: '03' },
    { icon: TrendingUp, key: 'logistics', num: '04' },
    { icon: BarChart, key: 'analysis', num: '05' },
    { icon: ShieldCheck, key: 'risk', num: '06' },
  ];

  return (
    <section id="services" className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-white via-white to-slate-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-900 mb-3">
              {t('services.title')}
            </h2>
            <p className="text-base text-slate-500">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="hidden lg:flex items-start gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 relative"
            style={{ width: '300px', marginTop: '60px' }}
          >
            <a
              href="https://wa.me/393245436954"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-[280px] h-[280px] rounded-full bg-gradient-to-br from-teal-700 via-teal-800 to-emerald-900 shadow-2xl shadow-teal-900/30 flex flex-col items-center justify-center p-8 relative cursor-pointer hover:shadow-3xl hover:shadow-teal-900/40 hover:scale-[1.03] transition-all duration-300"
            >
              <div className="absolute inset-[6px] rounded-full border-2 border-dashed border-teal-400/30" />

              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/30">
                  <MessageSquareMore className="w-8 h-8 text-teal-900" strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  {t('services.consultation.title')}
                </h3>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto my-2" />
                <p className="text-[11px] text-teal-100/80 leading-relaxed">
                  {t('services.consultation.description')}
                </p>
              </div>
            </a>
          </motion.div>

          <div className="flex-1 flex flex-col gap-3 relative pt-0">
            <svg className="absolute left-0 top-0 w-16 h-full pointer-events-none" style={{ zIndex: 0 }}>
              {services.map((_, i) => {
                const itemY = i * 76 + 38;
                const circleCenter = 140 + 38;
                return (
                  <g key={i}>
                    <path
                      d={`M 0 ${itemY} Q -30 ${itemY} -60 ${circleCenter}`}
                      fill="none"
                      stroke={hoveredIndex === i ? '#0d9488' : '#e2e8f0'}
                      strokeWidth="1.5"
                      className="transition-colors duration-300"
                    />
                  </g>
                );
              })}
            </svg>

            {services.map((service, index) => {
              const isHovered = hoveredIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="group cursor-pointer relative"
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex-shrink-0 w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all duration-300 z-10 ${
                      isHovered
                        ? 'bg-teal-600 border-teal-600 shadow-lg shadow-teal-600/25 scale-110'
                        : 'bg-white border-slate-200'
                    }`}>
                      <service.icon className={`w-5 h-5 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-teal-600'}`} strokeWidth={2} />
                    </div>

                    <div className={`flex-1 rounded-xl px-5 py-3.5 flex items-center gap-4 transition-all duration-300 ${
                      isHovered
                        ? 'bg-gradient-to-r from-teal-700 to-teal-800 shadow-lg shadow-teal-800/15'
                        : 'bg-slate-50 border border-slate-100'
                    }`}>
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-sm font-bold transition-colors duration-300 ${isHovered ? 'text-white' : 'text-slate-800'}`}>
                          {t(`services.${service.key}.title`)}
                        </h3>
                        <p className={`text-xs leading-relaxed mt-0.5 transition-colors duration-300 ${isHovered ? 'text-teal-100/80' : 'text-slate-500'}`}>
                          {t(`services.${service.key}.description`)}
                        </p>
                      </div>

                      <span className={`flex-shrink-0 w-7 h-7 rounded-full text-[10px] font-bold flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? 'bg-white/20 text-white'
                          : 'bg-teal-100 text-teal-700'
                      }`}>
                        {service.num}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <a
              href="https://wa.me/393245436954"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative bg-gradient-to-br from-teal-700 via-teal-800 to-emerald-800 rounded-2xl p-6 shadow-xl shadow-teal-900/10 overflow-hidden active:scale-[0.98] transition-transform"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/30">
                  <MessageSquareMore className="w-6 h-6 text-teal-900" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="text-base font-bold text-white">
                      {t('services.consultation.title')}
                    </h3>
                    <span className="px-2 py-0.5 bg-yellow-400/20 text-yellow-300 text-[10px] font-bold rounded-full uppercase tracking-wider">
                      Key
                    </span>
                  </div>
                  <p className="text-sm text-teal-100/80 leading-relaxed">
                    {t('services.consultation.description')}
                  </p>
                </div>
              </div>
            </a>
          </motion.div>

          <div className="flex flex-col gap-2.5">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group"
              >
                <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all duration-300">
                  <div className="w-9 h-9 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-600 group-hover:border-teal-600 transition-all duration-300">
                    <service.icon className="w-4 h-4 text-teal-600 group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-slate-800">{t(`services.${service.key}.title`)}</h3>
                    <p className="text-xs text-slate-500 line-clamp-1">{t(`services.${service.key}.description`)}</p>
                  </div>
                  <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 text-[9px] font-bold flex items-center justify-center flex-shrink-0">
                    {service.num}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-10"
        >
          <motion.button
            onClick={onContactClick}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 bg-gradient-to-r from-teal-700 to-teal-800 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-teal-800/20 transition-all duration-300 text-sm"
          >
            {t('services.cta')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
