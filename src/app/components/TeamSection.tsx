import { motion } from 'motion/react';
import { Linkedin, Mail, Quote, CheckCircle, Instagram, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

interface TeamSectionProps {
  onContactClick: () => void;
}

export function TeamSection({ onContactClick }: TeamSectionProps) {
  const { t } = useLanguage();

  const contactLinks = [
    {
      href: 'https://wa.me/393245436954',
      label: 'WhatsApp',
      value: '+39 324 543 6954',
      icon: <WhatsAppIcon className="w-5 h-5" />,
      gradient: 'from-green-500 to-green-600',
      shadow: 'shadow-green-500/20',
      hoverShadow: 'hover:shadow-green-500/30',
      external: true,
    },
    {
      href: 'mailto:anna.culesova@gmail.com',
      label: 'Email',
      value: 'anna.culesova@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      gradient: 'from-teal-600 to-teal-700',
      shadow: 'shadow-teal-600/20',
      hoverShadow: 'hover:shadow-teal-600/30',
      external: false,
    },
    {
      href: 'https://www.linkedin.com/in/anna-culesova-7955ab26a/',
      label: 'LinkedIn',
      value: 'Anna Culesova',
      icon: <Linkedin className="w-5 h-5" />,
      gradient: 'from-blue-600 to-blue-700',
      shadow: 'shadow-blue-600/20',
      hoverShadow: 'hover:shadow-blue-600/30',
      external: true,
    },
    {
      href: 'https://www.instagram.com/boutiquebusiness.consulting',
      label: 'Instagram',
      value: '@boutiquebusiness.consulting',
      icon: <Instagram className="w-5 h-5" />,
      gradient: 'from-purple-500 via-pink-500 to-orange-400',
      shadow: 'shadow-pink-500/20',
      hoverShadow: 'hover:shadow-pink-500/30',
      external: true,
    },
  ];

  return (
    <section id="team" className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white via-teal-50/20 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-1/4 left-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-teal-200 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] bg-yellow-100 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, -25, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-teal-700 via-teal-600 to-yellow-600 bg-clip-text text-transparent">
            {t('team.title')}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-md mx-auto">
            {t('team.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col items-center"
          >
            <div className="relative mb-6">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-4 border-white shadow-2xl shadow-teal-900/15">
                <img src="/anna-photo.jpg" alt="Anna" className="w-full h-full object-cover object-[center_20%]" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl flex items-center justify-center shadow-lg shadow-teal-700/30">
                <span className="text-white text-xs font-bold leading-tight text-center">12+<br /><span className="text-[9px] font-medium opacity-80">years</span></span>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-1">Anna</h3>
            <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full mb-4">Founder & Business Developer</span>

            <div className="relative p-4 sm:p-5 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100/40 border border-teal-200/50 max-w-sm">
              <Quote className="absolute top-3 left-3 w-4 h-4 text-teal-600/20" />
              <p className="text-xs sm:text-sm italic text-slate-600 pl-5 leading-relaxed">
                {t('team.anna.quote')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <p className="text-sm sm:text-base font-semibold text-slate-700 mb-5 leading-relaxed">
              {t('team.anna.bio')}
            </p>

            <div className="space-y-3 sm:space-y-4 mb-8">
              {[0, 1, 2].map((expIndex) => {
                const expKey = `team.anna.experience${expIndex + 1}`;
                const expText = t(expKey);
                if (!expText || expText === expKey) return null;
                return (
                  <motion.div
                    key={expIndex}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + expIndex * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-[18px] h-[18px] text-teal-600" />
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{expText}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="border-t border-slate-200/80 pt-6">
              <h4 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-teal-600" />
                {t('team.contactMe')}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {contactLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                    className={`flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm ${link.shadow} hover:shadow-md ${link.hoverShadow} hover:border-slate-200 transition-all duration-300 group`}
                  >
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${link.gradient} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform`}>
                      {link.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{link.label}</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-700 truncate">{link.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <button
            onClick={onContactClick}
            className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-2xl font-semibold text-base sm:text-lg shadow-xl shadow-teal-700/20 hover:shadow-2xl hover:shadow-teal-700/30 hover:scale-105 transition-all duration-300"
          >
            {t('team.cta')}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
