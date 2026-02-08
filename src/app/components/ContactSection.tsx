import { motion } from 'motion/react';
import { Mail, Instagram, Linkedin, Send, MapPin, Clock, ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useState } from 'react';

export function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #0f766e 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-900 mb-3">
            {t('contact.title')}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg shadow-slate-200/50 border border-slate-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">
                    {t('contact.name') !== 'contact.name' ? t('contact.name') : 'Name'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-100 focus:bg-white transition-all outline-none text-sm text-slate-800 placeholder:text-slate-400"
                    placeholder={t('contact.namePlaceholder')}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">
                    {t('contact.email') !== 'contact.email' ? t('contact.email') : 'Email'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-100 focus:bg-white transition-all outline-none text-sm text-slate-800 placeholder:text-slate-400"
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">
                  {t('contact.message') !== 'contact.message' ? t('contact.message') : 'Message'}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-100 focus:bg-white transition-all outline-none text-sm text-slate-800 resize-none placeholder:text-slate-400"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2.5 transition-all duration-300 ${
                  submitStatus === 'success'
                    ? 'bg-emerald-500 shadow-lg shadow-emerald-500/25'
                    : 'bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-800 hover:to-teal-900 shadow-lg shadow-teal-700/20 hover:shadow-xl hover:shadow-teal-700/30'
                } disabled:opacity-60 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : submitStatus === 'success' ? (
                  <>{t('contact.sent')}</>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t('contact.submit')}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="bg-gradient-to-br from-teal-700 via-teal-800 to-emerald-800 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-teal-200" />
                </div>
                <div>
                  <div className="text-sm font-bold">{t('contact.available') !== 'contact.available' ? t('contact.available') : 'Online'}</div>
                  <div className="text-xs text-teal-200/70">{t('contact.secure') !== 'contact.secure' ? t('contact.secure') : 'Secure'}</div>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="mailto:info@exportimport.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.06] transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-yellow-400 group-hover:shadow-lg group-hover:shadow-yellow-400/20 transition-all duration-300">
                    <Mail className="w-4 h-4 text-teal-200 group-hover:text-teal-900 transition-colors duration-300" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-teal-200/60 font-semibold uppercase tracking-wider">Email</div>
                    <div className="text-sm font-semibold text-white truncate">info@exportimport.com</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-teal-300/50 ml-auto group-hover:text-yellow-400 group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="https://instagram.com/your_account"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.06] transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-pink-500 group-hover:shadow-lg transition-all duration-300">
                    <Instagram className="w-4 h-4 text-teal-200 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-teal-200/60 font-semibold uppercase tracking-wider">Instagram</div>
                    <div className="text-sm font-semibold text-white truncate">@exportimport</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-teal-300/50 ml-auto group-hover:text-pink-400 group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="https://linkedin.com/company/your_company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.06] transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:shadow-lg transition-all duration-300">
                    <Linkedin className="w-4 h-4 text-teal-200 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-teal-200/60 font-semibold uppercase tracking-wider">LinkedIn</div>
                    <div className="text-sm font-semibold text-white truncate">Export & Import</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-teal-300/50 ml-auto group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center mb-3">
                  <MapPin className="w-4.5 h-4.5 text-teal-600" />
                </div>
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  {t('contact.location')}
                </div>
                <div className="text-sm font-bold text-slate-800">
                  {t('contact.address')}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center mb-3">
                  <Clock className="w-4.5 h-4.5 text-teal-600" />
                </div>
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  {t('contact.hours')}
                </div>
                <div className="text-sm font-bold text-slate-800">
                  {t('contact.workingHours')}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
