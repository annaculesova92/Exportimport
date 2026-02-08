import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import { Users, Award, TrendingUp, Shield } from 'lucide-react';

function AnimatedCounter({ target, suffix = '+' }: { target: number; suffix?: string }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => setDisplayValue(v));
    return unsubscribe;
  }, [rounded]);

  useEffect(() => {
    if (!ref.current || hasAnimated) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          animate(count, target, { duration: 2, ease: 'easeOut' });
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [count, target, hasAnimated]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
}

export function StatsSection() {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: 150, key: 'clients' },
    { icon: Award, value: 35, key: 'countries' },
    { icon: TrendingUp, value: 12, key: 'experience' },
    { icon: Shield, value: 500, key: 'deals' },
  ];

  return (
    <section className="py-0">
      <div className="bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.08) 0%, transparent 50%)'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group py-8 sm:py-10 px-4 sm:px-6 lg:px-8 text-center hover:bg-white/5 transition-colors duration-300 cursor-default"
              >
                <div className="flex items-center justify-center gap-3 mb-2">
                  <stat.icon className="w-5 h-5 text-teal-300 group-hover:text-yellow-400 transition-colors duration-300" strokeWidth={2} />
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                    <AnimatedCounter target={stat.value} />
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-teal-200/80 font-medium uppercase tracking-wider">
                  {t(`stats.${stat.key}`)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
