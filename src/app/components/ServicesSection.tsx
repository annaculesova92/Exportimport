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

  const segmentColors = [
    '#0f766e',
    '#0d9488',
    '#14b8a6',
    '#2dd4bf',
    '#5eead4',
    '#99f6e4',
  ];

  const cx = 200;
  const cy = 200;
  const outerR = 170;
  const innerR = 80;
  const startAngle = -180;
  const totalSpan = 180;
  const gap = 2;
  const segAngle = (totalSpan - gap * (services.length - 1)) / services.length;

  function polarToCart(angleDeg: number, r: number) {
    const rad = (angleDeg * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  function arcPath(a1: number, a2: number, r1: number, r2: number) {
    const p1 = polarToCart(a1, r1);
    const p2 = polarToCart(a2, r1);
    const p3 = polarToCart(a2, r2);
    const p4 = polarToCart(a1, r2);
    const large = a2 - a1 > 180 ? 1 : 0;
    return `M${p1.x},${p1.y} A${r1},${r1} 0 ${large} 1 ${p2.x},${p2.y} L${p3.x},${p3.y} A${r2},${r2} 0 ${large} 0 ${p4.x},${p4.y} Z`;
  }

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

        <div className="hidden lg:block">
          <div className="flex flex-col items-center">
            <div className="flex items-start justify-center gap-6 mb-6 max-w-4xl mx-auto">
              {services.map((service, i) => {
                const isHovered = hoveredIndex === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: -15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    onHoverStart={() => setHoveredIndex(i)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    className="flex-1 text-center cursor-pointer group"
                  >
                    <div className="flex flex-col items-center">
                      <h4 className={`text-xs font-bold uppercase tracking-wider mb-1.5 transition-colors duration-300 ${isHovered ? 'text-teal-700' : 'text-slate-700'}`}>
                        {t(`services.${service.key}.title`)}
                      </h4>
                      <p className="text-[10px] text-slate-400 leading-snug mb-3 line-clamp-2 px-1">
                        {t(`services.${service.key}.description`)}
                      </p>
                      <div className="flex flex-col items-center gap-1">
                        <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${isHovered ? 'border-teal-500 bg-teal-500 scale-125' : 'border-slate-300 bg-white'}`} />
                        <div className="w-px h-4 bg-slate-200" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
              style={{ width: 400, height: 220 }}
            >
              <svg viewBox="0 0 400 200" className="w-full h-full overflow-visible">
                <defs>
                  <filter id="semiShadow">
                    <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.08" />
                  </filter>
                  <linearGradient id="whiteGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f8fafc" />
                    <stop offset="100%" stopColor="#e2e8f0" />
                  </linearGradient>
                </defs>

                <path
                  d={`M${cx - outerR},${cy} A${outerR},${outerR} 0 0 0 ${cx + outerR},${cy} L${cx + outerR},${cy + 15} A${outerR},${outerR} 0 0 1 ${cx - outerR},${cy + 15} Z`}
                  fill="url(#whiteGrad)"
                  filter="url(#semiShadow)"
                />

                {services.map((service, i) => {
                  const a1 = startAngle + i * (segAngle + gap);
                  const a2 = a1 + segAngle;
                  const isHovered = hoveredIndex === i;
                  const midAngle = (a1 + a2) / 2;
                  const iconPos = polarToCart(midAngle, (outerR + innerR) / 2);

                  return (
                    <g
                      key={i}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <path
                        d={arcPath(a1, a2, isHovered ? outerR + 6 : outerR, innerR)}
                        fill={segmentColors[i]}
                        opacity={isHovered ? 1 : 0.85}
                        className="transition-all duration-300"
                        style={isHovered ? { filter: `drop-shadow(0 4px 12px ${segmentColors[i]}50)` } : {}}
                      />
                      <service.icon
                        x={iconPos.x - 10}
                        y={iconPos.y - 10}
                        width={20}
                        height={20}
                        color="white"
                        strokeWidth={2}
                        className="pointer-events-none"
                        style={{ opacity: isHovered ? 1 : 0.7 }}
                      />
                    </g>
                  );
                })}

                <circle cx={cx} cy={cy} r={innerR} fill="white" filter="url(#semiShadow)" />

                <g>
                  <MessageSquareMore
                    x={cx - 14}
                    y={cy - 28}
                    width={28}
                    height={28}
                    color="#0d9488"
                    strokeWidth={1.8}
                  />
                  <text x={cx} y={cy + 12} textAnchor="middle" fill="#0f766e" fontSize="9" fontWeight="800" fontFamily="system-ui, sans-serif" className="uppercase tracking-wider select-none">
                    {t('services.consultation.title')}
                  </text>
                  <text x={cx} y={cy + 24} textAnchor="middle" fill="#d97706" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" className="uppercase tracking-widest select-none">
                    KEY
                  </text>
                </g>
              </svg>
            </motion.div>
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
