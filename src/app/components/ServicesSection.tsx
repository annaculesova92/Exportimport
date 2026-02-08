import { motion } from 'motion/react';
import { 
  Globe, 
  Package,
  FileText,
  TrendingUp,
  Users,
  BarChart
} from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface ServicesSectionProps {
  onContactClick: () => void;
}

export function ServicesSection({ onContactClick }: ServicesSectionProps) {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Globe,
      key: 'export'
    },
    {
      icon: Package,
      key: 'import'
    },
    {
      icon: FileText,
      key: 'compliance'
    },
    {
      icon: TrendingUp,
      key: 'logistics'
    },
    {
      icon: BarChart,
      key: 'analysis'
    },
    {
      icon: Users,
      key: 'risk'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-teal-900 mb-3 sm:mb-4">
              {t('services.title')}
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Simple Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 h-full border-2 border-transparent hover:border-teal-200 hover:shadow-lg transition-all duration-300">
                {/* Number Badge */}
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-teal-700 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" strokeWidth={2} />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-300 bg-slate-200 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-teal-900 mb-2 sm:mb-3">
                    {t(`services.${service.key}.title`)}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {t(`services.${service.key}.description`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <button
            onClick={onContactClick}
            className="px-8 py-3.5 sm:px-10 sm:py-4 bg-teal-700 text-white rounded-xl font-semibold hover:bg-teal-800 transition-colors duration-300 text-base"
          >
            {t('services.cta')}
          </button>
        </motion.div>
      </div>
    </section>
  );
}