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
    { icon: Globe, key: 'export' },
    { icon: Package, key: 'import' },
    { icon: FileText, key: 'compliance' },
    { icon: TrendingUp, key: 'logistics' },
    { icon: BarChart, key: 'analysis' },
    { icon: Users, key: 'risk' },
  ];

  return (
    <section id="services" className="py-14 sm:py-18 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-900 mb-3">
              {t('services.title')}
            </h2>
            <p className="text-base text-slate-500">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="bg-slate-50 rounded-xl p-5 sm:p-6 h-full border border-transparent hover:border-teal-200 hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-teal-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <service.icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-teal-900 mb-1.5">
                      {t(`services.${service.key}.title`)}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {t(`services.${service.key}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <button
            onClick={onContactClick}
            className="px-8 py-3 bg-teal-700 text-white rounded-xl font-semibold hover:bg-teal-800 transition-colors duration-300 text-sm"
          >
            {t('services.cta')}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
