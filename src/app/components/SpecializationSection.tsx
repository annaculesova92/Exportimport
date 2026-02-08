import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Target, Shield, TrendingUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useState } from 'react';

export function SpecializationSection() {
  const { t } = useLanguage();
  const [selectedItem, setSelectedItem] = useState(0);

  const items = [
    { 
      key: 'item1', 
      icon: CheckCircle,
      color: 'teal'
    },
    { 
      key: 'item2', 
      icon: Target,
      color: 'teal'
    },
    { 
      key: 'item3', 
      icon: Shield,
      color: 'emerald'
    },
    { 
      key: 'item4', 
      icon: TrendingUp,
      color: 'teal'
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 relative overflow-hidden">
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
          animate={{
            x: ['100%', '-100%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            {t('specialization.title')}
          </h2>
          
          <p className="text-base md:text-lg text-teal-100 font-medium">
            {t('specialization.subtitle')}
          </p>
        </motion.div>

        {/* Timeline-style Layout */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:block">
            {/* Timeline Line */}
            <div className="relative mb-12">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-teal-600/30 -translate-y-1/2" />
              <motion.div 
                className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-yellow-400 to-teal-400 -translate-y-1/2"
                initial={{ width: '0%' }}
                animate={{ width: `${((selectedItem + 1) / items.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Timeline Dots */}
              <div className="relative flex justify-between">
                {items.map((item, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedItem(index)}
                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                      selectedItem >= index 
                        ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-lg shadow-yellow-500/50' 
                        : 'bg-teal-700 border-2 border-teal-500'
                    }`}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className={`w-8 h-8 ${selectedItem >= index ? 'text-white' : 'text-teal-300'}`} strokeWidth={2.5} />
                    
                    {/* Pulse effect for selected */}
                    {selectedItem === index && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-yellow-400"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Content Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white/10 backdrop-blur-xl rounded-3xl border-2 border-teal-400/30 p-10 shadow-2xl"
              >
                <div className="flex items-start gap-8">
                  {/* Large Icon */}
                  <motion.div
                    className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-2xl"
                    initial={{ rotate: 0, scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                  >
                    {(() => {
                      const Icon = items[selectedItem].icon;
                      return <Icon className="w-14 h-14 text-white" strokeWidth={2.5} />;
                    })()}
                  </motion.div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-yellow-400 text-2xl font-bold">0{selectedItem + 1}</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-yellow-400/50 to-transparent" />
                    </div>
                    <p className="text-xl md:text-2xl text-white font-semibold leading-relaxed">
                      {t(`specialization.${items[selectedItem].key}`)}
                    </p>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex flex-col gap-3">
                    <motion.button
                      onClick={() => setSelectedItem(Math.max(0, selectedItem - 1))}
                      disabled={selectedItem === 0}
                      className={`p-3 rounded-xl ${selectedItem === 0 ? 'bg-teal-800/30 text-teal-600' : 'bg-teal-600 text-white hover:bg-teal-500'} transition-colors`}
                      whileHover={selectedItem !== 0 ? { scale: 1.1 } : {}}
                      whileTap={selectedItem !== 0 ? { scale: 0.95 } : {}}
                    >
                      <ArrowRight className="w-5 h-5 rotate-180" />
                    </motion.button>
                    <motion.button
                      onClick={() => setSelectedItem(Math.min(items.length - 1, selectedItem + 1))}
                      disabled={selectedItem === items.length - 1}
                      className={`p-3 rounded-xl ${selectedItem === items.length - 1 ? 'bg-teal-800/30 text-teal-600' : 'bg-teal-600 text-white hover:bg-teal-500'} transition-colors`}
                      whileHover={selectedItem !== items.length - 1 ? { scale: 1.1 } : {}}
                      whileTap={selectedItem !== items.length - 1 ? { scale: 0.95 } : {}}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile: Vertical Stack */}
          <div className="md:hidden space-y-4">
            {items.map((item, index) => {
              const Icon = item.icon;
              const isSelected = selectedItem === index;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedItem(index)}
                  className={`relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border-2 transition-all duration-300 ${
                    isSelected 
                      ? 'border-yellow-400 shadow-xl shadow-yellow-500/20' 
                      : 'border-teal-500/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-gradient-to-br from-yellow-400 to-yellow-500' : 'bg-teal-700'
                    }`}>
                      <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                    </div>
                    <p className="flex-1 text-base text-white font-semibold">
                      {t(`specialization.${item.key}`)}
                    </p>
                  </div>
                  
                  {isSelected && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}