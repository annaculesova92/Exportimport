import { motion } from 'motion/react';
import { Mail, MapPin, Clock, Instagram, Send as TelegramIcon } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useState } from 'react';

interface ContactSectionProps {
  onContactClick: () => void;
}

export function ContactSection({ onContactClick }: ContactSectionProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => { setSubmitStatus('idle'); }, 3000);
    }, 1500);
  };

  const contactInfo = [
    { icon: Mail, title: t('contact.email'), value: 'info@exportimport.com' },
    { icon: MapPin, title: t('contact.location'), value: t('contact.address') },
    { icon: Clock, title: t('contact.hours'), value: t('contact.workingHours') },
  ];

  return (
    <section id="contact" className="py-14 sm:py-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-teal-900">
            {t('contact.title')}
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100"
          >
            <h3 className="text-lg font-bold text-slate-800 mb-5">
              {t('contact.formTitle')}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all outline-none text-sm text-slate-800"
                    placeholder={t('contact.namePlaceholder')}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all outline-none text-sm text-slate-800"
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  {t('contact.message')}
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all outline-none text-sm text-slate-800 resize-none"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full py-3 rounded-lg font-semibold text-sm text-white shadow-sm transition-all ${
                  submitStatus === 'success'
                    ? 'bg-green-600'
                    : 'bg-gradient-to-r from-teal-700 to-teal-600 hover:from-teal-800 hover:to-teal-700'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? t('contact.sending') : submitStatus === 'success' ? '✓ ' + t('contact.sent') : t('contact.submit')}
              </motion.button>

              <p className="text-[10px] text-slate-400 text-center">
                {t('contact.privacyNote')}
              </p>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 border border-slate-100 hover:border-teal-200 hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-teal-700" strokeWidth={2} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        {item.title}
                      </div>
                      <div className="text-sm font-semibold text-slate-700 truncate">
                        {item.value}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="bg-gradient-to-br from-teal-700 to-teal-800 rounded-xl p-5 text-white">
              <h3 className="text-sm font-bold mb-3">
                {t('contact.socialTitle')}
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                <motion.a
                  href="https://instagram.com/your_account"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-white/10 hover:bg-white/20 rounded-lg px-3 py-2.5 flex items-center gap-2 transition-all text-sm font-medium"
                >
                  <Instagram className="w-4 h-4" strokeWidth={2} />
                  Instagram
                </motion.a>
                <motion.a
                  href="https://t.me/your_channel"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-white/10 hover:bg-white/20 rounded-lg px-3 py-2.5 flex items-center gap-2 transition-all text-sm font-medium"
                >
                  <TelegramIcon className="w-4 h-4" strokeWidth={2} />
                  Telegram
                </motion.a>
              </div>
              <div className="mt-3.5 pt-3 border-t border-white/15 flex items-center justify-center gap-4 text-teal-200 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  <span>{t('contact.available')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                  <span>{t('contact.secure')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
