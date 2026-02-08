import { motion } from 'motion/react';
import { Mail, Instagram, Linkedin, Send, MapPin, Clock } from 'lucide-react';
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

  const socials = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@exportimport.com',
      href: 'mailto:info@exportimport.com',
      color: 'bg-teal-50 text-teal-700 hover:bg-teal-100',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@exportimport',
      href: 'https://instagram.com/your_account',
      color: 'bg-pink-50 text-pink-600 hover:bg-pink-100',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Export & Import',
      href: 'https://linkedin.com/company/your_company',
      color: 'bg-blue-50 text-blue-600 hover:bg-blue-100',
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
            {t('contact.title')}
          </h2>
          <p className="text-sm sm:text-base text-slate-500">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 items-start">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all outline-none text-sm text-slate-800 placeholder:text-slate-400"
                placeholder={t('contact.namePlaceholder')}
              />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all outline-none text-sm text-slate-800 placeholder:text-slate-400"
                placeholder={t('contact.emailPlaceholder')}
              />
            </div>

            <textarea
              required
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all outline-none text-sm text-slate-800 resize-none placeholder:text-slate-400"
              placeholder={t('contact.messagePlaceholder')}
            />

            <motion.button
              type="submit"
              disabled={isSubmitting || submitStatus === 'success'}
              whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`w-full py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all ${
                submitStatus === 'success'
                  ? 'bg-green-600'
                  : 'bg-teal-700 hover:bg-teal-800'
              } disabled:opacity-60 disabled:cursor-not-allowed`}
            >
              {isSubmitting ? (
                t('contact.sending')
              ) : submitStatus === 'success' ? (
                <>✓ {t('contact.sent')}</>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  {t('contact.submit')}
                </>
              )}
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-3"
          >
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className={`flex items-center gap-4 p-4 rounded-xl border border-slate-100 transition-all duration-200 group ${social.color}`}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white shadow-sm">
                  <social.icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold uppercase tracking-wider opacity-60">{social.label}</div>
                  <div className="text-sm font-semibold truncate">{social.value}</div>
                </div>
              </motion.a>
            ))}

            <div className="flex gap-3 pt-1">
              <div className="flex-1 bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-teal-600" />
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{t('contact.location')}</span>
                </div>
                <span className="text-sm font-semibold text-slate-700">{t('contact.address')}</span>
              </div>
              <div className="flex-1 bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-3.5 h-3.5 text-teal-600" />
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{t('contact.hours')}</span>
                </div>
                <span className="text-sm font-semibold text-slate-700">{t('contact.workingHours')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
