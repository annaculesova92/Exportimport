import { motion } from 'motion/react';
import { Contact, FileCheck, Ship, UserCheck } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useState, useEffect } from 'react';

export function ValueSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const solutions = [
    { icon: Contact, key: 'directContacts' },
    { icon: FileCheck, key: 'certification' },
    { icon: Ship, key: 'customs' },
    { icon: UserCheck, key: 'personalApproach' },
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
  const accentColor = '#0d9488';

  return (
    <section id="value" className="py-20 sm:py-24 md:py-28 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-600 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-700 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              {t('value.title')}
            </h2>
            <p className="text-base text-slate-400">
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
          <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] mb-12">
            <div className="absolute inset-[40px] sm:inset-[50px] rounded-full border border-white/[0.06]" />
            <div className="absolute inset-[60px] sm:inset-[75px] rounded-full border border-dashed border-white/[0.04]" />

            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              <circle cx="200" cy="200" r="160" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />

              {solutions.map((_, i) => {
                const segLen = (2 * Math.PI * 160) / 4;
                const gap = 12;
                const dash = segLen - gap;
                const offset = (2 * Math.PI * 160) / 4 - i * segLen;
                const isActive = i === activeIndex;

                return (
                  <circle
                    key={i}
                    cx="200" cy="200" r="160"
                    fill="none"
                    stroke={isActive ? accentColor : 'transparent'}
                    strokeWidth="3"
                    strokeDasharray={`${dash * progress / 100} ${2 * Math.PI * 160 - dash * progress / 100}`}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    style={isActive ? { filter: `drop-shadow(0 0 8px ${accentColor}60)` } : {}}
                  />
                );
              })}
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                key={activeIndex}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 16 }}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-teal-500/10 border border-teal-400/20 flex items-center justify-center"
              >
                <ActiveIcon className="w-9 h-9 sm:w-11 sm:h-11 text-teal-400" strokeWidth={1.5} />
              </motion.div>
            </div>

            {solutions.map((sol, i) => {
              const positions = [
                { top: '0%', left: '50%', tx: '-50%', ty: '0', labelY: -32, labelAnchor: 'center' as const },
                { top: '50%', left: '100%', tx: '-100%', ty: '-50%', labelX: 36, labelAnchor: 'left' as const },
                { top: '100%', left: '50%', tx: '-50%', ty: '-100%', labelY: 32, labelAnchor: 'center' as const },
                { top: '50%', left: '0%', tx: '0%', ty: '-50%', labelX: -36, labelAnchor: 'right' as const },
              ];
              const pos = positions[i];
              const isActive = i === activeIndex;

              return (
                <div key={i} className="absolute" style={{ top: pos.top, left: pos.left, transform: `translate(${pos.tx}, ${pos.ty})` }}>
                  <div className="relative">
                    <button
                      onClick={() => { setActiveIndex(i); setProgress(0); }}
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-400 ${
                        isActive
                          ? 'bg-teal-500 shadow-lg shadow-teal-500/30 scale-110'
                          : 'bg-slate-800 border border-white/10 hover:border-white/20 hover:bg-slate-700'
                      }`}
                    >
                      <sol.icon className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-400'}`} strokeWidth={2} />
                    </button>

                    <div
                      className="absolute whitespace-nowrap"
                      style={{
                        ...(pos.labelAnchor === 'center' ? {
                          left: '50%',
                          transform: 'translateX(-50%)',
                          ...(pos.labelY! < 0 ? { bottom: `${-pos.labelY!}px` } : { top: `${pos.labelY!}px` }),
                          textAlign: 'center' as const,
                        } : pos.labelAnchor === 'left' ? {
                          left: `${pos.labelX!}px`,
                          top: '50%',
                          transform: 'translateY(-50%)',
                        } : {
                          right: `${-pos.labelX!}px`,
                          top: '50%',
                          transform: 'translateY(-50%)',
                        }),
                      }}
                    >
                      <span className={`text-xs sm:text-sm font-semibold transition-colors duration-300 ${isActive ? 'text-teal-300' : 'text-slate-500'}`}>
                        {t(`value.${sol.key}.title`)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-center max-w-lg"
          >
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {t(`value.${solutions[activeIndex].key}.description`)}
            </p>
          </motion.div>

          <div className="flex gap-3 mt-8">
            {solutions.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActiveIndex(i); setProgress(0); }}
                className="relative h-1 rounded-full overflow-hidden transition-all duration-300"
                style={{
                  width: i === activeIndex ? '40px' : '10px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                }}
              >
                {i === activeIndex && (
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-teal-400"
                    style={{ width: `${progress}%` }}
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
