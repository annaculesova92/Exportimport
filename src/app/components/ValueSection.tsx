import { motion } from 'motion/react';
import { Contact, FileCheck, Ship, UserCheck } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useState, useEffect } from 'react';

export function ValueSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const solutions = [
    { icon: Contact, key: 'directContacts', percent: 25 },
    { icon: FileCheck, key: 'certification', percent: 25 },
    { icon: Ship, key: 'customs', percent: 25 },
    { icon: UserCheck, key: 'personalApproach', percent: 25 },
  ];

  const colors = ['#0d9488', '#d97706', '#2563eb', '#059669'];

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setActiveIndex(i => (i + 1) % solutions.length);
          return 0;
        }
        return prev + 0.4;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const ActiveIcon = solutions[activeIndex].icon;
  const size = 280;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = 120;
  const innerR = 75;
  const gapAngle = 3;

  function describeArc(startAngle: number, endAngle: number, r1: number, r2: number) {
    const s1 = (startAngle - 90) * Math.PI / 180;
    const e1 = (endAngle - 90) * Math.PI / 180;
    const x1o = cx + r1 * Math.cos(s1);
    const y1o = cy + r1 * Math.sin(s1);
    const x2o = cx + r1 * Math.cos(e1);
    const y2o = cy + r1 * Math.sin(e1);
    const x1i = cx + r2 * Math.cos(e1);
    const y1i = cy + r2 * Math.sin(e1);
    const x2i = cx + r2 * Math.cos(s1);
    const y2i = cy + r2 * Math.sin(s1);
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    return `M ${x1o} ${y1o} A ${r1} ${r1} 0 ${largeArc} 1 ${x2o} ${y2o} L ${x1i} ${y1i} A ${r2} ${r2} 0 ${largeArc} 0 ${x2i} ${y2i} Z`;
  }

  const segmentAngle = 360 / solutions.length;

  const iconPositions = solutions.map((_, i) => {
    const midAngle = (i * segmentAngle + segmentAngle / 2 - 90) * Math.PI / 180;
    const midR = (outerR + innerR) / 2;
    return {
      x: cx + midR * Math.cos(midAngle),
      y: cy + midR * Math.sin(midAngle),
    };
  });

  const labelPositions = solutions.map((_, i) => {
    const midAngle = i * segmentAngle + segmentAngle / 2 - 90;
    const midRad = midAngle * Math.PI / 180;
    const labelR = outerR + 28;
    return {
      x: cx + labelR * Math.cos(midRad),
      y: cy + labelR * Math.sin(midRad),
      align: i === 0 ? 'center' : i === 1 ? 'left' : i === 2 ? 'center' : 'right',
    };
  });

  return (
    <section id="value" className="py-20 sm:py-24 md:py-28 relative overflow-hidden bg-gradient-to-b from-white via-teal-50/20 to-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
              {t('value.title')}
            </h2>
            <p className="text-base text-slate-500">
              {t('value.subtitle')}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="relative mb-10" style={{ width: size + 120, height: size + 60 }}>
            <svg
              viewBox={`-60 -30 ${size + 120} ${size + 60}`}
              className="w-full h-full"
            >
              {solutions.map((sol, i) => {
                const startA = i * segmentAngle + gapAngle / 2;
                const endA = (i + 1) * segmentAngle - gapAngle / 2;
                const isActive = i === activeIndex;
                const path = describeArc(startA, endA, outerR, innerR);

                return (
                  <g key={i}>
                    <path
                      d={path}
                      fill={isActive ? colors[i] : `${colors[i]}15`}
                      stroke={isActive ? colors[i] : `${colors[i]}30`}
                      strokeWidth="1"
                      className="cursor-pointer transition-all duration-400"
                      onClick={() => { setActiveIndex(i); setProgress(0); }}
                      style={isActive ? { filter: `drop-shadow(0 4px 12px ${colors[i]}30)` } : {}}
                    />

                    {isActive && (
                      <path
                        d={describeArc(startA, startA + (endA - startA) * progress / 100, outerR + 4, outerR)}
                        fill={`${colors[i]}60`}
                        className="pointer-events-none"
                      />
                    )}

                    <g
                      className="cursor-pointer"
                      onClick={() => { setActiveIndex(i); setProgress(0); }}
                    >
                      <sol.icon
                        x={iconPositions[i].x - 11}
                        y={iconPositions[i].y - 11}
                        width={22}
                        height={22}
                        color={isActive ? 'white' : colors[i]}
                        strokeWidth={2}
                      />
                    </g>

                    <text
                      x={labelPositions[i].x}
                      y={labelPositions[i].y}
                      textAnchor={labelPositions[i].align === 'center' ? 'middle' : labelPositions[i].align === 'left' ? 'start' : 'end'}
                      dominantBaseline="middle"
                      fill={isActive ? colors[i] : '#94a3b8'}
                      fontSize="10"
                      fontWeight={isActive ? '700' : '500'}
                      fontFamily="system-ui, sans-serif"
                      className="cursor-pointer select-none transition-all duration-300"
                      onClick={() => { setActiveIndex(i); setProgress(0); }}
                    >
                      {t(`value.${sol.key}.title`)}
                    </text>
                  </g>
                );
              })}

              <circle cx={cx} cy={cy} r={innerR - 8} fill="white" stroke="#f1f5f9" strokeWidth="1" />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center" style={{ paddingBottom: 30, paddingRight: 0 }}>
              <motion.div
                key={activeIndex}
                initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className="flex flex-col items-center gap-1"
              >
                <ActiveIcon
                  className="w-10 h-10 sm:w-12 sm:h-12"
                  style={{ color: colors[activeIndex] }}
                  strokeWidth={1.5}
                />
                <span className="text-xs font-bold" style={{ color: colors[activeIndex] }}>
                  0{activeIndex + 1}
                </span>
              </motion.div>
            </div>
          </div>

          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center max-w-lg"
          >
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
              {t(`value.${solutions[activeIndex].key}.title`)}
            </h3>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              {t(`value.${solutions[activeIndex].key}.description`)}
            </p>
          </motion.div>

          <div className="flex gap-2.5 mt-8">
            {solutions.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActiveIndex(i); setProgress(0); }}
                className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
                style={{
                  width: i === activeIndex ? '40px' : '10px',
                  backgroundColor: i === activeIndex ? `${colors[activeIndex]}20` : '#e2e8f0',
                }}
              >
                {i === activeIndex && (
                  <div
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{ width: `${progress}%`, backgroundColor: colors[activeIndex] }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
