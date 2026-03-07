import { motion } from 'motion/react';
import { Mail, Instagram, Linkedin, Send, MapPin, Phone, Clock } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useState } from 'react';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-white via-slate-50/20 to-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-teal-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-emerald-50/30 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-900 mb-3">
            {t('contact.title')}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
            <div className="md:col-span-2 flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3">
                {t('contact.contactInfoTitle')}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                {t('contact.subtitle')}
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href="https://wa.me/393245436954"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 group"
                >
                  <div className="w-11 h-11 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-600 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-teal-700 group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-teal-700 group-hover:text-teal-800 transition-colors">+39 324 543 6954</div>
                    <div className="text-xs text-slate-400">WhatsApp</div>
                  </div>
                </a>

                <a
                  href="mailto:anna.culesova@gmail.com"
                  className="flex items-center gap-3.5 group"
                >
                  <div className="w-11 h-11 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-600 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-teal-700 group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-teal-700 group-hover:text-teal-800 transition-colors">anna.culesova@gmail.com</div>
                    <div className="text-xs text-slate-400">Email</div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-teal-700" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-700">{t('contact.address')}</div>
                    <div className="text-xs text-slate-400">{t('contact.location')}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 pt-2">
                  <a
                    href="https://www.instagram.com/boutiquebusiness.consulting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center hover:bg-teal-700 hover:scale-110 transition-all duration-300 shadow-md shadow-teal-600/25"
                    aria-label="Instagram Business"
                  >
                    <Instagram className="w-4.5 h-4.5 text-white" strokeWidth={1.8} />
                  </a>
                  <a
                    href="https://www.instagram.com/anny_in_italy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center hover:bg-teal-700 hover:scale-110 transition-all duration-300 shadow-md shadow-teal-600/25"
                    aria-label="Instagram Personal"
                  >
                    <Instagram className="w-4.5 h-4.5 text-white" strokeWidth={1.8} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anna-culesova-7955ab26a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center hover:bg-teal-700 hover:scale-110 transition-all duration-300 shadow-md shadow-teal-600/25"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4.5 h-4.5 text-white" strokeWidth={1.8} />
                  </a>
                  <a
                    href="https://wa.me/393245436954"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center hover:bg-teal-700 hover:scale-110 transition-all duration-300 shadow-md shadow-teal-600/25"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon className="w-4.5 h-4.5 text-white" />
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-200/60 border border-slate-100/80">
                <h4 className="text-base font-bold text-slate-700 mb-5">
                  {t('contact.formTitle')}
                </h4>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                        {t('contact.name')} <span className="text-teal-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 focus:border-teal-500 focus:ring-0 transition-all outline-none text-sm text-slate-800 placeholder:text-slate-400"
                        placeholder={t('contact.namePlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                        Email <span className="text-teal-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 focus:border-teal-500 focus:ring-0 transition-all outline-none text-sm text-slate-800 placeholder:text-slate-400"
                        placeholder={t('contact.emailPlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                      {t('contact.company')}
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 focus:border-teal-500 focus:ring-0 transition-all outline-none text-sm text-slate-800 placeholder:text-slate-400"
                      placeholder={t('contact.companyPlaceholder')}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                      {t('contact.message')} <span className="text-teal-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 focus:border-teal-500 focus:ring-0 transition-all outline-none text-sm text-slate-800 resize-none placeholder:text-slate-400"
                      placeholder={t('contact.messagePlaceholder')}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting || submitStatus === 'success'}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group px-8 py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2.5 transition-all duration-300 border ${
                      submitStatus === 'success'
                        ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                        : 'bg-white border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white shadow-sm hover:shadow-lg hover:shadow-teal-800/20'
                    } disabled:opacity-60 disabled:cursor-not-allowed`}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-teal-300 border-t-teal-700 rounded-full"
                      />
                    ) : submitStatus === 'success' ? (
                      <span className="text-white">{t('contact.sent')}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-teal-700 group-hover:text-white transition-colors" />
                        <span className="text-teal-700 group-hover:text-white transition-colors">{t('contact.submit')}</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="relative rounded-2xl overflow-hidden shadow-xl shadow-slate-200/60 border border-slate-100/80"
        >
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=10.95%2C45.42%2C11.02%2C45.45&layer=mapnik&marker=45.4384%2C10.9917"
            className="w-full h-[280px] sm:h-[320px] border-0 grayscale-[30%] contrast-[1.05]"
            loading="lazy"
            title="Verona, Italy"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent p-4 sm:p-5">
            <div className="flex flex-wrap items-center gap-4 sm:gap-8">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/10">
                  <MapPin className="w-4 h-4 text-white" strokeWidth={1.8} />
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">{t('contact.location')}</div>
                  <div className="text-sm font-bold text-white">{t('contact.address')}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/10">
                  <Clock className="w-4 h-4 text-white" strokeWidth={1.8} />
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">{t('contact.hours')}</div>
                  <div className="text-sm font-bold text-white">{t('contact.workingHours')}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
