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
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="group"
            >
              <div className="bg-slate-50 rounded-2xl p-6 h-full border border-transparent hover:border-teal-200 hover:bg-white hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-400">
                <div className="w-12 h-12 bg-teal-100 border border-teal-200/50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-teal-600 group-hover:to-teal-700 group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-teal-600/25 transition-all duration-400">
                  <service.icon className="w-6 h-6 text-teal-700 group-hover:text-white transition-colors duration-400" strokeWidth={2} />
                </div>
                <h3 className="text-base font-bold text-teal-900 mb-2 group-hover:text-teal-700 transition-colors">
                  {t(`services.${service.key}.title`)}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {t(`services.${service.key}.description`)}
                </p>
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
          <motion.button
            onClick={onContactClick}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 bg-gradient-to-r from-teal-700 to-teal-800 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-teal-800/20 transition-all duration-300 text-sm"
          >
            {t('services.cta')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
