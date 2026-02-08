import { motion, useScroll, useTransform } from 'motion/react';
import { Shield, TrendingUp, Users, Award, Zap } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useRef } from 'react';

export function StatsSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  
  const stats = [
    {
      icon: Users,
      value: '150+',
      key: 'clients',
      gradient: 'from-teal-400 to-emerald-500'
    },
    {
      icon: Award,
      value: '35+',
      key: 'countries',
      gradient: 'from-emerald-400 to-teal-500'
    },
    {
      icon: TrendingUp,
      value: '12+',
      key: 'experience',
      gradient: 'from-teal-500 to-emerald-600'
    },
    {
      icon: Shield,
      value: '500+',
      key: 'deals',
      gradient: 'from-emerald-500 to-teal-600'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-teal-800 via-emerald-800 to-teal-900 text-white relative overflow-hidden"
    >
      {/* Animated Wave Background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
          style={{ y: y1 }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute top-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-300 to-transparent"
          style={{ y: y2 }}
          animate={{
            x: ['100%', '-100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
          style={{ y: y1 }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 sm:w-32 sm:h-32 border-4 border-yellow-400 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-16 h-16 sm:w-24 sm:h-24 border-4 border-teal-300"
          animate={{
            rotate: [360, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats in Wave/Stagger Layout - NOT straight grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-5">
          {stats.map((stat, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                className={`group text-center ${isEven ? 'lg:mt-0' : 'lg:mt-12'}`}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    y: -8,
                    transition: { duration: 0.3, type: "spring", stiffness: 400 }
                  }}
                  className="relative"
                >
                  {/* Glowing Card - More compact */}
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 border-2 border-teal-400/30 shadow-2xl group-hover:border-yellow-400/50 transition-all duration-500 overflow-hidden">
                    {/* Gradient Glow */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20`}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10"
                      animate={{
                        x: ['-100%', '200%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    />

                    {/* Icon - Smaller and more refined */}
                    <motion.div 
                      className={`relative z-10 w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-5 bg-gradient-to-br ${stat.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl`}
                      whileHover={{
                        rotate: [0, -15, 15, -15, 0],
                        transition: { duration: 0.6 }
                      }}
                    >
                      {/* Icon glow ring */}
                      <motion.div
                        className="absolute inset-0 rounded-xl sm:rounded-2xl bg-yellow-400"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0, 0.3, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white relative z-10" strokeWidth={2.5} />
                    </motion.div>

                    {/* Value - Refined size */}
                    <motion.div 
                      className="relative z-10 text-4xl sm:text-5xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-white via-teal-100 to-white bg-clip-text text-transparent"
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        backgroundSize: '200% 200%'
                      }}
                    >
                      {stat.value}
                    </motion.div>

                    {/* Label - More compact */}
                    <div className="relative z-10 text-base sm:text-lg font-semibold text-teal-100 group-hover:text-white transition-colors">
                      {t(`stats.${stat.key}`)}
                    </div>

                    {/* Lightning indicator on hover - Smaller */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0, rotate: -45 }}
                      whileHover={{ opacity: 1, scale: 1, rotate: 0 }}
                      className="absolute top-3 right-3"
                    >
                      <div className="w-7 h-7 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                        <Zap className="w-4 h-4 text-teal-900 fill-teal-900" />
                      </div>
                    </motion.div>

                    {/* Bottom accent */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient}`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>

                  {/* Floating number badge - Smaller */}
                  <motion.div
                    className="absolute -top-3 -left-3 w-8 h-8 sm:w-9 sm:h-9 bg-yellow-500 rounded-full flex items-center justify-center text-teal-900 font-bold text-xs sm:text-sm shadow-xl border-2 border-white"
                    animate={{
                      y: [0, -8, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                  >
                    {index + 1}
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}