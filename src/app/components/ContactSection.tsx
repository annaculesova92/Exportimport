import { motion } from 'motion/react';
import { Mail, Instagram, Linkedin, Send, MapPin, Clock } from 'lucide-react';
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

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:info@exportimport.com',
      color: 'bg-teal-50 border-teal-100 hover:bg-teal-600 hover:border-teal-600',
      iconColor: 'text-teal-600 group-hover:text-white',
      labelColor: 'group-hover:text-teal-600',
    },
    {
      icon: WhatsAppIcon,
      label: 'WhatsApp',
      href: 'https://wa.me/391234567890',
      color: 'bg-green-50 border-green-100 hover:bg-green-500 hover:border-green-500',
      iconColor: 'text-green-600 group-hover:text-white',
      labelColor: 'group-hover:text-green-600',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/your_account',
      color: 'bg-pink-50 border-pink-100 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:border-pink-500',
      iconColor: 'text-pink-500 group-hover:text-white',
      labelColor: 'group-hover:text-pink-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/company/your_company',
      color: 'bg-blue-50 border-blue-100 hover:bg-blue-600 hover:border-blue-600',
      iconColor: 'text-blue-600 group-hover:text-white',
      labelColor: 'group-hover:text-blue-600',
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-teal-100/20 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 items-center sm:items-start justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full sm:max-w-md"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100">
              <div className="space-y-3 mb-4">
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
                <div>
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
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-row sm:flex-col items-center sm:items-start gap-5 sm:gap-5 sm:pt-4"
          >
            {contacts.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('mailto') ? undefined : '_blank'}
                rel={contact.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="group flex flex-col items-center gap-2.5"
              >
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shadow-sm ${contact.color} group-hover:shadow-lg transition-all duration-300`}>
                  <contact.icon className={`w-6 h-6 ${contact.iconColor} transition-colors duration-300`} strokeWidth={1.8} />
                </div>
                <span className={`text-xs font-semibold text-slate-400 ${contact.labelColor} transition-colors duration-300`}>
                  {contact.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-6 text-xs text-slate-400 mt-10"
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
