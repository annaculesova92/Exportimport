import { motion } from 'motion/react';
import { Linkedin, Mail, Quote, Instagram, CheckCircle } from 'lucide-react';
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

  return (
    <section id="team" className="relative overflow-hidden">
      <div className="bg-gradient-to-b from-slate-50/40 via-teal-50/30 to-white relative">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-3xl -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-100/30 rounded-full blur-3xl translate-y-1/3" />

        <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-teal-700 via-teal-600 to-yellow-600 bg-clip-text text-transparent mb-3">
              {t('team.title')}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/70 backdrop-blur-sm rounded-3xl border border-white/80 shadow-xl shadow-teal-900/5 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">

              <div className="lg:col-span-4 bg-gradient-to-br from-teal-800 to-teal-900 p-6 sm:p-8 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative mb-5">
                    <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-white/15 shadow-xl">
                      <img src="/anna-photo.jpg" alt="Anna" className="w-full h-full object-cover object-[center_15%]" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg px-2 py-1 shadow-md">
                      <span className="text-teal-900 text-xs font-extrabold">12+</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-0.5">Anna Culesova</h3>
                  <span className="text-[11px] font-bold text-yellow-400 tracking-wider uppercase mb-5">Founder</span>
                  <div className="flex gap-2">
                    {[
                      { href: 'https://wa.me/393245436954', icon: <WhatsAppIcon className="w-3.5 h-3.5" />, ext: true },
                      { href: 'https://www.linkedin.com/in/anna-culesova-7955ab26a/', icon: <Linkedin className="w-3.5 h-3.5" />, ext: true },
                      { href: 'https://www.instagram.com/boutiquebusiness.consulting', icon: <Instagram className="w-3.5 h-3.5" />, ext: true },
                      { href: 'mailto:anna.culesova@gmail.com', icon: <Mail className="w-3.5 h-3.5" />, ext: false },
                    ].map((s, i) => (
                      <motion.a
                        key={i}
                        href={s.href}
                        target={s.ext ? '_blank' : undefined}
                        rel={s.ext ? 'noopener noreferrer' : undefined}
                        whileHover={{ scale: 1.15, y: -2 }}
                        className="w-9 h-9 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:bg-yellow-400 hover:text-teal-900 hover:border-yellow-400 transition-colors duration-300"
                      >
                        {s.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10">
                <p className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed mb-6">
                  {t('team.anna.bio')}
                </p>

                <div className="space-y-2.5 mb-6">
                  {[0, 1, 2].map((i) => {
                    const expText = t(`team.anna.experience${i + 1}`);
                    if (!expText || expText === `team.anna.experience${i + 1}`) return null;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-teal-50/60 border border-teal-100/60 hover:bg-teal-50 hover:border-teal-200/60 transition-all duration-300"
                      >
                        <CheckCircle className="w-[18px] h-[18px] text-teal-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-slate-600 leading-relaxed">{expText}</p>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-yellow-50/80 to-teal-50/40 border border-yellow-200/40 mb-6">
                  <div className="flex items-start gap-3">
                    <Quote className="w-5 h-5 text-yellow-500/50 flex-shrink-0 mt-0.5" />
                    <p className="text-sm italic text-slate-500 leading-relaxed">
                      {t('team.anna.quote')}
                    </p>
                  </div>
                </div>

                <button
                  onClick={onContactClick}
                  className="group px-7 sm:px-9 py-3 sm:py-3.5 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-xl font-bold text-sm shadow-lg shadow-teal-700/15 hover:shadow-xl hover:shadow-teal-700/25 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  {t('team.cta')}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
