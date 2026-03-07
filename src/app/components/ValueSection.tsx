import { motion } from 'motion/react';
import { Contact, FileCheck, Ship, UserCheck } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useState, useEffect } from 'react';

export function ValueSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const solutions = [
    { icon: Contact, key: 'directContacts', color: '#d97706' },
    { icon: FileCheck, key: 'certification', color: '#0d9488' },
    { icon: Ship, key: 'customs', color: '#2563eb' },
    { icon: UserCheck, key: 'personalApproach', color: '#7c3aed' },
  ];

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setActiveIndex(i => (i + 1) % solutions.length);
          return 0;
        }
        return prev + 0.5;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const ActiveIcon = solutions[activeIndex].icon;
  const ringRadius = 90;
  const circumference = 2 * Math.PI * ringRadius;

  const labelPositions = [
    { x: 100, y: -18, anchor: 'middle' },
    { x: 218, y: 100, anchor: 'start', rotate: 90 },
    { x: 100, y: 220, anchor: 'middle' },
    { x: -18, y: 100, anchor: 'end', rotate: -90 },
  ];

  return (
    <section id="value" className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-teal-50/30">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-teal-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-amber-400 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <svg className="w-full h-full" viewBox="-30 -30 260 260">
                <circle cx="100" cy="100" r={ringRadius} fill="none" stroke="#e2e8f0" strokeWidth="2" />

                {solutions.map((sol, i) => {
                  const segmentLen = circumference / solutions.length;
                  const gap = 10;
                  const dash = segmentLen - gap;
                  const offset = circumference / 4 - i * segmentLen;
                  const isActive = i === activeIndex;

                  return (
                    <circle
                      key={`seg-${i}`}
                      cx="100" cy="100" r={ringRadius}
                      fill="none"
                      stroke={isActive ? sol.color : '#cbd5e1'}
                      strokeWidth={isActive ? "4" : "2.5"}
                      strokeDasharray={isActive ? `${dash * progress / 100} ${circumference - dash * progress / 100}` : `${dash} ${gap}`}
                      strokeDashoffset={offset}
                      strokeLinecap="round"
                      className="transition-colors duration-300"
                      style={isActive ? { filter: `drop-shadow(0 0 4px ${sol.color}40)` } : {}}
                    />
                  );
                })}

                {solutions.map((sol, i) => {
                  const angle = (i * 360 / solutions.length) - 90;
                  const rad = angle * Math.PI / 180;
                  const bx = 100 + ringRadius * Math.cos(rad);
                  const by = 100 + ringRadius * Math.sin(rad);
                  const isActive = i === activeIndex;
                  const lp = labelPositions[i];

                  return (
                    <g key={`node-${i}`}>
                      <circle
                        cx={bx} cy={by} r={isActive ? 20 : 16}
                        fill={isActive ? sol.color : 'white'}
                        stroke={isActive ? sol.color : '#e2e8f0'}
                        strokeWidth={isActive ? 0 : 1.5}
                        className="cursor-pointer transition-all duration-300"
                        onClick={() => { setActiveIndex(i); setProgress(0); }}
                        style={isActive ? { filter: `drop-shadow(0 2px 8px ${sol.color}50)` } : {}}
                      />
                      <g
                        className="cursor-pointer"
                        onClick={() => { setActiveIndex(i); setProgress(0); }}
                      >
                        <sol.icon
                          x={bx - (isActive ? 10 : 8)} y={by - (isActive ? 10 : 8)}
                          width={isActive ? 20 : 16} height={isActive ? 20 : 16}
                          color={isActive ? 'white' : sol.color}
                          strokeWidth={2}
                        />
                      </g>

                      <text
                        x={lp.x}
                        y={lp.y}
                        textAnchor={lp.anchor}
                        fill={isActive ? sol.color : '#94a3b8'}
                        fontSize="8"
                        fontWeight={isActive ? "700" : "500"}
                        className="transition-all duration-300 select-none cursor-pointer uppercase tracking-wider"
                        onClick={() => { setActiveIndex(i); setProgress(0); }}
                        transform={lp.rotate ? `rotate(${lp.rotate}, ${lp.x}, ${lp.y})` : undefined}
                      >
                        {t(`value.${sol.key}.title`)}
                      </text>
                    </g>
                  );
                })}
              </svg>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  key={activeIndex}
                  initial={{ scale: 0.5, opacity: 0, rotate: -15 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 250, damping: 18 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: solutions[activeIndex].color + '12' }}
                >
                  <ActiveIcon
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    style={{ color: solutions[activeIndex].color }}
                    strokeWidth={1.5}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div className="flex-1 min-w-0">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center lg:text-left"
            >
              <div className="flex items-center gap-3 mb-5 justify-center lg:justify-start">
                <span
                  className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
                  style={{
                    color: solutions[activeIndex].color,
                    backgroundColor: solutions[activeIndex].color + '10',
                    border: `1px solid ${solutions[activeIndex].color}25`,
                  }}
                >
                  0{activeIndex + 1} / 0{solutions.length}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                {t(`value.${solutions[activeIndex].key}.title`)}
              </h3>
              <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {t(`value.${solutions[activeIndex].key}.description`)}
              </p>

              <div className="flex gap-2 mt-8 justify-center lg:justify-start">
                {solutions.map((sol, i) => (
                  <button
                    key={i}
                    onClick={() => { setActiveIndex(i); setProgress(0); }}
                    className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
                    style={{
                      width: i === activeIndex ? '48px' : '12px',
                      backgroundColor: i === activeIndex ? solutions[activeIndex].color + '20' : '#e2e8f0',
                    }}
                  >
                    {i === activeIndex && (
                      <div
                        className="absolute inset-y-0 left-0 rounded-full transition-none"
                        style={{
                          width: `${progress}%`,
                          backgroundColor: sol.color,
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
