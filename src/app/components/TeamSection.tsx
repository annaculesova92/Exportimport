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
      <div className="bg-gradient-to-br from-teal-800 via-teal-900 to-teal-950 relative">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-400/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-8 order-2 lg:order-1"
            >
              <div className="mb-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                  {t('team.title')}
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full" />
              </div>

              <p className="text-base sm:text-lg text-white/85 font-medium leading-relaxed mb-7">
                {t('team.anna.bio')}
              </p>

              <div className="space-y-3 mb-7">
                {[0, 1, 2].map((i) => {
                  const expText = t(`team.anna.experience${i + 1}`);
                  if (!expText || expText === `team.anna.experience${i + 1}`) return null;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.12 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-300"
                    >
                      <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-white/65 leading-relaxed">{expText}</p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="p-5 rounded-xl bg-gradient-to-r from-yellow-400/[0.06] to-teal-400/[0.03] border border-yellow-400/10 mb-7">
                <div className="flex items-start gap-3">
                  <Quote className="w-5 h-5 text-yellow-400/40 flex-shrink-0 mt-0.5" />
                  <p className="text-sm italic text-white/55 leading-relaxed">
                    {t('team.anna.quote')}
                  </p>
                </div>
              </div>

              <button
                onClick={onContactClick}
                className="group self-start px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-teal-900 rounded-xl font-bold text-sm sm:text-base shadow-xl shadow-yellow-500/15 hover:shadow-2xl hover:shadow-yellow-500/25 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                {t('team.cta')}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-4 order-1 lg:order-2 flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-yellow-400/10 to-teal-400/10 rounded-3xl blur-2xl" />
                <div className="relative w-48 h-60 sm:w-56 sm:h-72 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-black/30">
                  <img src="/anna-photo.jpg" alt="Anna" className="w-full h-full object-cover object-[center_15%]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">Anna</h3>
                    <span className="text-[11px] font-bold text-yellow-400 tracking-wider uppercase">Founder</span>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg px-2.5 py-1.5 shadow-lg shadow-yellow-500/30">
                  <span className="text-teal-900 text-sm font-extrabold leading-none">12+</span>
                  <span className="text-teal-900/70 text-[9px] font-bold block leading-tight">years</span>
                </div>

                <div className="flex justify-center gap-2 mt-4">
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
                      className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 hover:bg-yellow-400 hover:text-teal-900 hover:border-yellow-400 transition-colors duration-300"
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
