import { motion } from 'motion/react';
import { Contact, FileCheck, Ship, UserCheck } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useState, useEffect } from 'react';

export function ValueSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const solutions = [
    { icon: Contact, key: 'directContacts', color: '#f59e0b' },
    { icon: FileCheck, key: 'certification', color: '#14b8a6' },
    { icon: Ship, key: 'customs', color: '#3b82f6' },
    { icon: UserCheck, key: 'personalApproach', color: '#a855f7' },
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

  return (
    <section id="value" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-400 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-300 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              {t('value.title')}
            </h2>
            <p className="text-base text-teal-200/70">
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
            <div className="relative w-52 h-52 sm:w-64 sm:h-64">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
                {solutions.map((sol, i) => {
                  const segmentLength = (2 * Math.PI * 90) / solutions.length;
                  const gap = 8;
                  const dashLength = segmentLength - gap;
                  const offset = -i * segmentLength;
                  const isActive = i === activeIndex;
                  const isPast = i < activeIndex || (i === activeIndex && progress > 0);

                  return (
                    <circle
                      key={i}
                      cx="100" cy="100" r="90"
                      fill="none"
                      stroke={isActive ? sol.color : isPast ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.08)'}
                      strokeWidth={isActive ? "4" : "3"}
                      strokeDasharray={isActive ? `${dashLength * progress / 100} ${2 * Math.PI * 90 - dashLength * progress / 100}` : `${dashLength} ${gap}`}
                      strokeDashoffset={offset}
                      strokeLinecap="round"
                      className="transition-colors duration-500"
                      style={{ filter: isActive ? `drop-shadow(0 0 6px ${sol.color}50)` : 'none' }}
                    />
                  );
                })}
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  key={activeIndex}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: solutions[activeIndex].color + '20' }}
                >
                  <ActiveIcon className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: solutions[activeIndex].color }} strokeWidth={1.5} />
                </motion.div>
              </div>

              {solutions.map((sol, i) => {
                const angle = (i * 360 / solutions.length) - 90;
                const rad = angle * Math.PI / 180;
                const r = 115;
                const x = 50 + r / 2 * Math.cos(rad);
                const y = 50 + r / 2 * Math.sin(rad);

                return (
                  <button
                    key={i}
                    onClick={() => { setActiveIndex(i); setProgress(0); }}
                    className="absolute w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      backgroundColor: i === activeIndex ? sol.color : 'rgba(255,255,255,0.1)',
                      boxShadow: i === activeIndex ? `0 0 20px ${sol.color}40` : 'none',
                    }}
                  >
                    <sol.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: i === activeIndex ? 'white' : 'rgba(255,255,255,0.5)' }} strokeWidth={2} />
                  </button>
                );
              })}
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
              <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                <span
                  className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{
                    color: solutions[activeIndex].color,
                    backgroundColor: solutions[activeIndex].color + '15',
                    border: `1px solid ${solutions[activeIndex].color}30`,
                  }}
                >
                  0{activeIndex + 1} / 0{solutions.length}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                {t(`value.${solutions[activeIndex].key}.title`)}
              </h3>
              <p className="text-base sm:text-lg text-teal-100/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {t(`value.${solutions[activeIndex].key}.description`)}
              </p>

              <div className="flex gap-2 mt-8 justify-center lg:justify-start">
                {solutions.map((sol, i) => (
                  <button
                    key={i}
                    onClick={() => { setActiveIndex(i); setProgress(0); }}
                    className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
                    style={{ width: i === activeIndex ? '48px' : '12px', backgroundColor: 'rgba(255,255,255,0.1)' }}
                  >
                    {i === activeIndex && (
                      <div
                        className="absolute inset-y-0 left-0 rounded-full"
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
