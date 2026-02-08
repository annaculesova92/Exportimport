import { motion } from 'motion/react';
import { CheckCircle, Target, TrendingUp, Shield, Users, Sparkles, Clock, Award } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useState } from 'react';

export function ValueSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const solutions = [
    {
      icon: Shield,
      key: 'confidentiality',
      gradient: 'from-teal-600 via-teal-700 to-teal-800'
    },
    {
      icon: Clock,
      key: 'speed',
      gradient: 'from-teal-700 via-teal-800 to-emerald-900'
    },
    {
      icon: Award,
      key: 'professionalism',
      gradient: 'from-emerald-700 via-teal-700 to-teal-800'
    },
    {
      icon: Users,
      key: 'support',
      gradient: 'from-teal-600 via-emerald-700 to-teal-700'
    }
  ];

  return (
    <section id="value" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-white via-teal-50/30 to-white relative overflow-hidden">
      {/* Animated Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-400 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-400 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
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
              {t('value.title')}
            </h2>
            <p className="text-lg text-slate-600">
              {t('value.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Staggered Cards Layout - NOT grid columns */}
        <div className="max-w-5xl mx-auto space-y-6">
          {solutions.map((solution, index) => {
            const isEven = index % 2 === 0;
            const isActive = activeIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onHoverStart={() => setActiveIndex(index)}
                onHoverEnd={() => setActiveIndex(null)}
                className={`group relative ${isEven ? 'mr-auto' : 'ml-auto'} max-w-2xl`}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.03,
                    x: isEven ? 10 : -10,
                    transition: { duration: 0.4 }
                  }}
                  className={`relative bg-white/95 backdrop-blur-xl rounded-3xl border-2 ${
                    isActive ? 'border-teal-400 shadow-2xl shadow-teal-500/30' : 'border-teal-100 shadow-lg'
                  } transition-all duration-500 overflow-hidden`}
                >
                  {/* Gradient Background on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0`}
                    animate={{ opacity: isActive ? 0.08 : 0 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Animated glow effect */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl blur-xl opacity-0"
                    animate={{ opacity: isActive ? 0.3 : 0 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Content Container */}
                  <div className={`relative z-10 p-8 flex items-center gap-6 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Icon Section */}
                    <motion.div 
                      className={`flex-shrink-0 w-24 h-24 bg-gradient-to-br ${solution.gradient} rounded-2xl flex items-center justify-center shadow-2xl relative`}
                      whileHover={{ 
                        rotate: [0, -8, 8, -8, 0],
                        scale: 1.1,
                        transition: { duration: 0.6 }
                      }}
                    >
                      {/* Glow ring */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-400"
                        animate={{
                          scale: isActive ? [1, 1.15, 1] : 1,
                          opacity: isActive ? [0.5, 0, 0.5] : 0
                        }}
                        transition={{
                          duration: 2,
                          repeat: isActive ? Infinity : 0,
                          ease: "easeInOut"
                        }}
                      />
                      <solution.icon className="w-12 h-12 text-white relative z-10" strokeWidth={2} />
                    </motion.div>

                    {/* Text Content */}
                    <div className={`flex-1 ${isEven ? 'text-left' : 'text-right'}`}>
                      <h3 className="text-2xl font-bold text-teal-900 mb-3 group-hover:text-teal-700 transition-colors">
                        {t(`value.${solution.key}.title`)}
                      </h3>
                      <p className="text-base text-slate-600 leading-relaxed">
                        {t(`value.${solution.key}.description`)}
                      </p>
                    </div>

                    {/* Checkmark Badge - appears on hover */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1 : 0,
                        rotate: isActive ? 0 : -180
                      }}
                      transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                      className={`absolute ${isEven ? 'right-8' : 'left-8'} top-8`}
                    >
                      <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                        <CheckCircle className="w-6 h-6 text-white fill-white" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    className={`absolute bottom-0 ${isEven ? 'left-0' : 'right-0'} h-1.5 bg-gradient-to-r ${solution.gradient}`}
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? '100%' : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}