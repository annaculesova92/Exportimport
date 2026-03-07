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

interface ServicesSectionProps {
  onContactClick: () => void;
}

export function ServicesSection({ onContactClick }: ServicesSectionProps) {
  const { t } = useLanguage();

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

        <div className="hidden lg:flex items-start gap-0 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 relative z-10"
            style={{ width: '320px' }}
          >
            <div className="w-[280px] h-[280px] rounded-full bg-gradient-to-br from-teal-700 via-teal-800 to-emerald-800 shadow-2xl shadow-teal-900/20 flex flex-col items-center justify-center p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-400/10 rounded-full blur-2xl" />
              <div className="relative z-10 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-500/30">
                  <MessageSquareMore className="w-7 h-7 text-teal-900" strokeWidth={2} />
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white">
                    {t('services.consultation.title')}
                  </h3>
                  <span className="px-2 py-0.5 bg-yellow-400/20 text-yellow-300 text-[10px] font-bold rounded-full uppercase tracking-wider">
                    Key
                  </span>
                </div>
                <p className="text-xs text-teal-100/70 leading-relaxed">
                  {t('services.consultation.description')}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="flex-1 relative" style={{ marginLeft: '-40px' }}>
            <svg className="absolute left-0 top-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              {services.map((_, i) => {
                const itemY = i * 80 + 40;
                const startX = 0;
                const endX = 60;
                const circleX = -20;
                return (
                  <g key={i}>
                    <line
                      x1={circleX} y1={itemY}
                      x2={endX} y2={itemY}
                      stroke="#d1d5db" strokeWidth="1" strokeDasharray="4 3"
                    />
                    <circle cx={endX} cy={itemY} r="3" fill="#0d9488" opacity="0.4" />
                  </g>
                );
              })}
            </svg>

            <div className="flex flex-col gap-2 relative z-10 pl-20">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl px-5 py-3.5 border border-slate-100 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-900/5 transition-all duration-300 relative">
                    <div className="absolute -left-[52px] w-8 h-8 rounded-full bg-white border-2 border-teal-200 flex items-center justify-center shadow-sm group-hover:border-teal-400 group-hover:bg-teal-50 transition-all duration-300">
                      <service.icon className="w-4 h-4 text-teal-600" strokeWidth={2} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-slate-800 group-hover:text-teal-700 transition-colors">
                        {t(`services.${service.key}.title`)}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mt-0.5 line-clamp-1">
                        {t(`services.${service.key}.description`)}
                      </p>
                    </div>

                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-teal-600 text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                      {service.num}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="relative bg-gradient-to-br from-teal-700 via-teal-800 to-emerald-800 rounded-2xl p-6 shadow-xl shadow-teal-900/10 overflow-hidden">
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
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                  <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-600 group-hover:border-teal-600 transition-all duration-300">
                    <service.icon className="w-4 h-4 text-teal-600 group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-slate-800">{t(`services.${service.key}.title`)}</h3>
                    <p className="text-xs text-slate-500 line-clamp-1">{t(`services.${service.key}.description`)}</p>
                  </div>
                  <span className="w-6 h-6 rounded-full bg-teal-600 text-white text-[9px] font-bold flex items-center justify-center flex-shrink-0">
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
