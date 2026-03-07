import { motion, AnimatePresence } from 'motion/react';
import { Contact, FileCheck, Ship, UserCheck, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useState } from 'react';

export function ValueSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const solutions = [
    { icon: Contact, key: 'directContacts', accent: 'from-teal-500 to-emerald-500' },
    { icon: FileCheck, key: 'certification', accent: 'from-amber-500 to-orange-500' },
    { icon: Ship, key: 'customs', accent: 'from-sky-500 to-blue-500' },
    { icon: UserCheck, key: 'personalApproach', accent: 'from-violet-500 to-purple-500' },
  ];

  const accentBgs = [
    'bg-teal-50',
    'bg-amber-50',
    'bg-sky-50',
    'bg-violet-50',
  ];

  const accentTexts = [
    'text-teal-600',
    'text-amber-600',
    'text-sky-600',
    'text-violet-600',
  ];

  const accentBorders = [
    'border-teal-200',
    'border-amber-200',
    'border-sky-200',
    'border-violet-200',
  ];

  const accentBgActives = [
    'bg-teal-600',
    'bg-amber-600',
    'bg-sky-600',
    'bg-violet-600',
  ];

  return (
    <section id="value" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
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

        <div className="hidden lg:grid lg:grid-cols-[340px_1fr] gap-8 items-start">
          <div className="flex flex-col gap-2">
            {solutions.map((solution, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  onClick={() => setActiveIndex(index)}
                  className={`relative text-left px-5 py-4 rounded-xl transition-all duration-300 group ${
                    isActive
                      ? 'bg-white shadow-lg shadow-slate-200/60 border border-slate-100'
                      : 'hover:bg-white/60 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isActive ? accentBgActives[index] + ' shadow-md' : accentBgs[index]
                    }`}>
                      <solution.icon className={`w-5 h-5 transition-colors duration-300 ${
                        isActive ? 'text-white' : accentTexts[index]
                      }`} strokeWidth={2} />
                    </div>
                    <span className={`text-sm font-semibold transition-colors duration-300 flex-1 ${
                      isActive ? 'text-slate-900' : 'text-slate-600'
                    }`}>
                      {t(`value.${solution.key}.title`)}
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-all duration-300 ${
                      isActive ? accentTexts[index] + ' translate-x-0 opacity-100' : 'text-slate-300 -translate-x-1 opacity-0 group-hover:opacity-60 group-hover:translate-x-0'
                    }`} />
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={`absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-gradient-to-b ${solutions[index].accent}`}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className={`rounded-2xl p-8 sm:p-10 border ${accentBorders[activeIndex]} ${accentBgs[activeIndex]}/30 bg-white relative overflow-hidden`}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-80" style={{
                  backgroundImage: activeIndex === 0 ? 'linear-gradient(to right, #14b8a6, #10b981)' :
                    activeIndex === 1 ? 'linear-gradient(to right, #f59e0b, #f97316)' :
                    activeIndex === 2 ? 'linear-gradient(to right, #0ea5e9, #3b82f6)' :
                    'linear-gradient(to right, #8b5cf6, #a855f7)'
                }} />

                <div className="flex items-start gap-6">
                  <motion.div
                    initial={{ scale: 0.8, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.4, type: 'spring' }}
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${accentBgActives[activeIndex]} shadow-lg`}
                  >
                    {(() => {
                      const Icon = solutions[activeIndex].icon;
                      return <Icon className="w-8 h-8 text-white" strokeWidth={1.8} />;
                    })()}
                  </motion.div>

                  <div className="flex-1">
                    <motion.h3
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="text-xl sm:text-2xl font-bold text-slate-900 mb-4"
                    >
                      {t(`value.${solutions[activeIndex].key}.title`)}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.18 }}
                      className="text-base sm:text-lg text-slate-600 leading-relaxed"
                    >
                      {t(`value.${solutions[activeIndex].key}.description`)}
                    </motion.p>
                  </div>
                </div>

                <motion.div
                  className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-[0.06]"
                  style={{
                    background: activeIndex === 0 ? '#14b8a6' :
                      activeIndex === 1 ? '#f59e0b' :
                      activeIndex === 2 ? '#0ea5e9' : '#8b5cf6'
                  }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />

                <div className="flex items-center gap-3 mt-8 pt-6 border-t border-slate-100">
                  <span className={`text-3xl font-bold ${accentTexts[activeIndex]} opacity-60`}>
                    0{activeIndex + 1}
                  </span>
                  <div className="flex gap-1.5">
                    {solutions.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === activeIndex ? `w-8 ${accentBgActives[i]}` : 'w-1.5 bg-slate-200 hover:bg-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 ml-auto">/ 0{solutions.length}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="lg:hidden flex flex-col gap-3">
          {solutions.map((solution, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? -1 : index)}
                  className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 border ${
                    isOpen
                      ? `bg-white shadow-md ${accentBorders[index]}`
                      : 'bg-white/60 border-slate-100 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isOpen ? accentBgActives[index] : accentBgs[index]
                    }`}>
                      <solution.icon className={`w-5 h-5 ${isOpen ? 'text-white' : accentTexts[index]}`} strokeWidth={2} />
                    </div>
                    <span className={`text-sm font-semibold flex-1 ${isOpen ? 'text-slate-900' : 'text-slate-600'}`}>
                      {t(`value.${solution.key}.title`)}
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                      isOpen ? 'rotate-90 ' + accentTexts[index] : 'text-slate-400'
                    }`} />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className={`px-5 py-4 mt-1 rounded-xl ${accentBgs[index]}/40 border ${accentBorders[index]}`}>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {t(`value.${solution.key}.description`)}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
