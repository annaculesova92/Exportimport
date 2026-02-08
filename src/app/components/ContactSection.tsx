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

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:info@exportimport.com',
      hoverBg: 'group-hover:bg-teal-600 group-hover:shadow-teal-600/25',
      hoverText: 'group-hover:text-white',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/your_account',
      hoverBg: 'group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-pink-500 group-hover:shadow-pink-500/25',
      hoverText: 'group-hover:text-white',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/company/your_company',
      hoverBg: 'group-hover:bg-blue-600 group-hover:shadow-blue-600/25',
      hoverText: 'group-hover:text-white',
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-teal-100/20 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-900 mb-3">
            {t('contact.title')}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-md mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg shadow-slate-200/50 border border-slate-100 mb-6"
        >
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
                  {t('contact.name') !== 'contact.name' ? t('contact.name') : 'Name'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-100 focus:bg-white transition-all outline-none text-sm text-slate-800 placeholder:text-slate-400"
                  placeholder={t('contact.namePlaceholder')}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
                  {t('contact.email') !== 'contact.email' ? t('contact.email') : 'Email'}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-100 focus:bg-white transition-all outline-none text-sm text-slate-800 placeholder:text-slate-400"
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
                {t('contact.message') !== 'contact.message' ? t('contact.message') : 'Message'}
              </label>
              <textarea
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-100 focus:bg-white transition-all outline-none text-sm text-slate-800 resize-none placeholder:text-slate-400"
                placeholder={t('contact.messagePlaceholder')}
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting || submitStatus === 'success'}
              whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`w-full py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2.5 transition-all duration-300 ${
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
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-center gap-5 sm:gap-8 mb-6"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              whileHover={{ y: -3 }}
              className="group flex flex-col items-center gap-2"
            >
              <div className={`w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-sm ${link.hoverBg} group-hover:border-transparent group-hover:shadow-lg transition-all duration-300`}>
                <link.icon className={`w-5 h-5 text-slate-500 ${link.hoverText} transition-colors duration-300`} strokeWidth={1.8} />
              </div>
              <span className="text-[11px] font-semibold text-slate-400 group-hover:text-slate-600 transition-colors">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex items-center justify-center gap-6 text-xs text-slate-400"
        >
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-teal-500" />
            <span>{t('contact.address')}</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-slate-300" />
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-teal-500" />
            <span>{t('contact.workingHours')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
