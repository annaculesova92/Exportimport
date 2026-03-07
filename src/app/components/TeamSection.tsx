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
      external: true,
    },
    {
      href: 'mailto:anna.culesova@gmail.com',
      label: 'Email',
      value: 'anna.culesova@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      gradient: 'from-teal-600 to-teal-700',
      external: false,
    },
    {
      href: 'https://www.linkedin.com/in/anna-culesova-7955ab26a/',
      label: 'LinkedIn',
      value: 'Anna Culesova',
      icon: <Linkedin className="w-5 h-5" />,
      gradient: 'from-blue-600 to-blue-700',
      external: true,
    },
    {
      href: 'https://www.instagram.com/boutiquebusiness.consulting',
      label: 'Instagram',
      value: '@boutiquebusiness.consulting',
      icon: <Instagram className="w-5 h-5" />,
      gradient: 'from-purple-500 via-pink-500 to-orange-400',
      external: true,
    },
  ];

  return (
    <section id="team" className="relative overflow-hidden">
      <div className="bg-gradient-to-br from-teal-800 via-teal-900 to-teal-950 relative">
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-yellow-300 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-300 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">

            <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end justify-center py-12 sm:py-16 lg:py-20 px-6 sm:px-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border-4 border-white/15 shadow-2xl shadow-black/30">
                  <img src="/anna-photo.jpg" alt="Anna" className="w-full h-full object-cover object-[center_20%]" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl px-4 py-2 shadow-lg shadow-yellow-500/30">
                  <span className="text-teal-900 text-sm font-extrabold">12+ years</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 text-center lg:text-right"
              >
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-1">Anna</h3>
                <span className="text-sm font-semibold text-yellow-400/90">Founder & Business Developer</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex gap-2 mt-5"
              >
                {[
                  { href: 'https://wa.me/393245436954', icon: <WhatsAppIcon className="w-4 h-4" />, ext: true },
                  { href: 'https://www.linkedin.com/in/anna-culesova-7955ab26a/', icon: <Linkedin className="w-4 h-4" />, ext: true },
                  { href: 'https://www.instagram.com/boutiquebusiness.consulting', icon: <Instagram className="w-4 h-4" />, ext: true },
                  { href: 'mailto:anna.culesova@gmail.com', icon: <Mail className="w-4 h-4" />, ext: false },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target={s.ext ? '_blank' : undefined}
                    rel={s.ext ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-teal-800 transition-all duration-300 hover:scale-110"
                  >
                    {s.icon}
                  </a>
                ))}
              </motion.div>
            </div>

            <div className="lg:col-span-7 py-12 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-14 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                  {t('team.title')}
                </h2>
                <p className="text-sm sm:text-base text-teal-300/60 mb-8">
                  {t('team.subtitle')}
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="text-sm sm:text-base font-medium text-white/90 mb-6 leading-relaxed"
              >
                {t('team.anna.bio')}
              </motion.p>

              <div className="space-y-3 mb-8">
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
                      <CheckCircle className="w-[18px] h-[18px] text-yellow-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-white/70 leading-relaxed">{expText}</p>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative p-5 rounded-xl bg-white/5 border border-white/10 mb-8"
              >
                <Quote className="absolute top-3 left-4 w-5 h-5 text-yellow-400/30" />
                <p className="text-sm italic text-white/60 pl-7 leading-relaxed">
                  {t('team.anna.quote')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-yellow-400" />
                  {t('team.contactMe')}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {contactLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                    >
                      <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${link.gradient} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform shadow-lg`}>
                        {link.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] font-semibold text-white/30 uppercase tracking-wider">{link.label}</div>
                        <div className="text-xs sm:text-sm font-semibold text-white/80 truncate">{link.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <button
                  onClick={onContactClick}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-teal-900 rounded-xl font-bold text-sm sm:text-base shadow-xl shadow-yellow-500/20 hover:shadow-2xl hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-300"
                >
                  {t('team.cta')}
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
