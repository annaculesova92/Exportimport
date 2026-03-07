import { motion } from 'motion/react';
import { Linkedin, Mail, Quote, Instagram } from 'lucide-react';
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

  const experiences = [
    { key: 'experience1', icon: '📊', delay: 0.2 },
    { key: 'experience2', icon: '🌍', delay: 0.35 },
    { key: 'experience3', icon: '🤝', delay: 0.5 },
  ];

  return (
    <section id="team" className="relative overflow-hidden">
      <div className="bg-gradient-to-br from-teal-800 via-teal-900 to-teal-950 relative">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-400/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 sm:mb-18"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
              {t('team.title')}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center">

            <div className="lg:col-span-4 flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="absolute -inset-3 bg-gradient-to-br from-yellow-400/20 to-teal-400/20 rounded-[28px] blur-xl" />

                <div className="relative w-52 h-64 sm:w-60 sm:h-72 lg:w-64 lg:h-80 rounded-2xl overflow-hidden border-2 border-white/15 shadow-2xl shadow-black/40">
                  <img src="/anna-photo.jpg" alt="Anna" className="w-full h-full object-cover object-[center_15%]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">Anna</h3>
                    <span className="text-xs font-bold text-yellow-400 tracking-wide uppercase">Founder</span>
                  </div>
                </div>

                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg shadow-yellow-500/30 border border-yellow-300/30">
                  <span className="text-teal-900 text-xs sm:text-sm font-extrabold">12+</span>
                  <span className="text-teal-900/70 text-[9px] sm:text-[10px] font-bold block -mt-0.5 leading-tight">years in Italy</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex gap-3 mt-6"
              >
                {[
                  { href: 'https://wa.me/393245436954', icon: <WhatsAppIcon className="w-4 h-4" />, ext: true },
                  { href: 'https://www.linkedin.com/in/anna-culesova-7955ab26a/', icon: <Linkedin className="w-4 h-4" />, ext: true },
                  { href: 'https://www.instagram.com/boutiquebusiness.consulting', icon: <Instagram className="w-4 h-4" />, ext: true },
                  { href: 'mailto:anna.culesova@gmail.com', icon: <Mail className="w-4 h-4" />, ext: false },
                ].map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target={s.ext ? '_blank' : undefined}
                    rel={s.ext ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.15, y: -2 }}
                    className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 hover:bg-yellow-400 hover:text-teal-900 hover:border-yellow-400 transition-colors duration-300"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            <div className="lg:col-span-1 hidden lg:flex justify-center">
              <div className="w-px h-80 bg-gradient-to-b from-transparent via-yellow-400/30 to-transparent relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50" />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-base sm:text-lg font-semibold text-white/90 leading-relaxed pl-0 lg:pl-2"
              >
                {t('team.anna.bio')}
              </motion.p>

              <div className="space-y-4 pt-2">
                {experiences.map((exp, i) => {
                  const expKey = `team.anna.${exp.key}`;
                  const expText = t(expKey);
                  if (!expText || expText === expKey) return null;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: exp.delay }}
                      className="relative group"
                    >
                      <div className="flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-400">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-yellow-400/15 to-yellow-500/10 border border-yellow-400/20 flex items-center justify-center flex-shrink-0 group-hover:from-yellow-400/25 group-hover:to-yellow-500/15 transition-all">
                          <span className="text-base sm:text-lg">{exp.icon}</span>
                        </div>
                        <p className="text-sm text-white/65 leading-relaxed pt-1.5 group-hover:text-white/80 transition-colors">
                          {expText}
                        </p>
                      </div>
                      <div className="absolute left-5 -bottom-4 w-px h-4 bg-gradient-to-b from-white/10 to-transparent last:hidden" />
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="relative mt-6 pt-4"
              >
                <div className="p-5 sm:p-6 rounded-xl bg-gradient-to-r from-yellow-400/[0.06] to-teal-400/[0.04] border border-yellow-400/10">
                  <div className="flex items-start gap-3">
                    <Quote className="w-6 h-6 text-yellow-400/40 flex-shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base italic text-white/55 leading-relaxed">
                      {t('team.anna.quote')}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="pt-4"
              >
                <button
                  onClick={onContactClick}
                  className="group px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-teal-900 rounded-xl font-bold text-sm sm:text-base shadow-xl shadow-yellow-500/15 hover:shadow-2xl hover:shadow-yellow-500/25 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  {t('team.cta')}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
