import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Search, FileCheck, Rocket, CheckCircle, Zap, ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useState } from 'react';

export function ProcessSection() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      icon: MessageSquare,
      key: 'step1',
      gradient: 'from-teal-600 via-teal-700 to-teal-800'
    },
    {
      icon: Search,
      key: 'step2',
      gradient: 'from-emerald-600 via-teal-700 to-teal-800'
    },
    {
      icon: FileCheck,
      key: 'step3',
      gradient: 'from-teal-700 via-emerald-700 to-teal-900'
    },
    {
      icon: Rocket,
      key: 'step4',
      gradient: 'from-teal-600 via-emerald-700 to-emerald-800'
    }
  ];

  return (
    <section id="process" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Animated Dots Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #0f766e 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-900 mb-4">
              {t('process.title')}
            </h2>
            <p className="text-lg text-slate-600">
              {t('process.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Interactive Process Flow - Horizontal with connecting lines */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop: Horizontal Flow */}
          <div className="hidden md:block mb-16">
            {/* Progress Line */}
            <div className="relative mb-16">
              <div className="absolute top-1/2 left-0 w-full h-2 bg-teal-100 -translate-y-1/2 rounded-full" />
              <motion.div 
                className="absolute top-1/2 left-0 h-2 bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 -translate-y-1/2 rounded-full shadow-lg shadow-teal-500/30"
                initial={{ width: '0%' }}
                animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              
              {/* Step Circles */}
              <div className="relative flex justify-between">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = activeStep === index;
                  const isPast = index < activeStep;
                  
                  return (
                    <motion.button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15, type: "spring" }}
                      className="relative z-10 group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl ${
                        isActive 
                          ? `bg-gradient-to-br ${step.gradient} shadow-teal-500/50 border-4 border-yellow-400` 
                          : isPast
                          ? `bg-gradient-to-br ${step.gradient}`
                          : 'bg-white border-4 border-teal-200'
                      }`}>
                        <Icon className={`w-9 h-9 transition-colors ${
                          isActive || isPast ? 'text-white' : 'text-teal-600'
                        }`} strokeWidth={2.5} />
                        
                        {/* Pulse for active */}
                        {isActive && (
                          <motion.div
                            className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.gradient}`}
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.6, 0, 0.6]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        )}

                        {/* Checkmark for completed */}
                        {isPast && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-1 -right-1 w-7 h-7 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg"
                          >
                            <CheckCircle className="w-4 h-4 text-white fill-white" />
                          </motion.div>
                        )}
                      </div>

                      {/* Step number */}
                      <motion.div
                        className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-bold whitespace-nowrap ${
                          isActive ? 'text-teal-700' : 'text-slate-400'
                        }`}
                      >
                        {t('process_ui.step')} {index + 1}
                      </motion.div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Content Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white rounded-3xl border-2 border-teal-200 p-12 shadow-2xl overflow-hidden"
              >
                {/* Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${steps[activeStep].gradient} opacity-5`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.05 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Animated corner decoration */}
                <motion.div
                  className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-teal-200 to-emerald-200 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <div className="relative z-10 flex items-start gap-8">
                  {/* Large Icon */}
                  <motion.div
                    className={`flex-shrink-0 w-28 h-28 bg-gradient-to-br ${steps[activeStep].gradient} rounded-3xl flex items-center justify-center shadow-2xl`}
                    initial={{ rotate: 0, scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{ duration: 0.7, type: "spring" }}
                  >
                    {(() => {
                      const Icon = steps[activeStep].icon;
                      return <Icon className="w-14 h-14 text-white" strokeWidth={2.5} />;
                    })()}
                  </motion.div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-white text-xl font-bold">{activeStep + 1}</span>
                      </motion.div>
                      <h3 className="text-3xl font-bold text-teal-900">
                        {t(`process.${steps[activeStep].key}.title`)}
                      </h3>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      {t(`process.${steps[activeStep].key}.description`)}
                    </p>

                    {/* Navigation Buttons */}
                    <div className="flex gap-3">
                      {activeStep > 0 && (
                        <motion.button
                          onClick={() => setActiveStep(activeStep - 1)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 bg-slate-100 text-teal-700 rounded-xl font-semibold hover:bg-slate-200 transition-colors inline-flex items-center gap-2"
                        >
                          <ArrowRight className="w-5 h-5 rotate-180" />
                          {t('process_ui.back')}
                        </motion.button>
                      )}
                      {activeStep < steps.length - 1 && (
                        <motion.button
                          onClick={() => setActiveStep(activeStep + 1)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg shadow-teal-500/30 hover:shadow-xl transition-all inline-flex items-center gap-2"
                        >
                          {t('process_ui.next')}
                          <ArrowRight className="w-5 h-5" />
                        </motion.button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile: Vertical Stack */}
          <div className="md:hidden space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setActiveStep(index)}
                  className={`relative bg-white rounded-2xl border-2 p-6 shadow-lg transition-all duration-300 ${
                    isActive ? 'border-teal-400 shadow-2xl shadow-teal-500/20' : 'border-teal-100'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg ${
                      isActive ? `bg-gradient-to-br ${step.gradient}` : 'bg-teal-100'
                    }`}>
                      <Icon className={`w-8 h-8 ${isActive ? 'text-white' : 'text-teal-700'}`} strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-teal-900 mb-2">
                        {t(`process.${step.key}.title`)}
                      </h4>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-sm text-slate-600"
                        >
                          {t(`process.${step.key}.description`)}
                        </motion.p>
                      )}
                    </div>
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}