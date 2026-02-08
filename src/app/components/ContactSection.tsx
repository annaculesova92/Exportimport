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
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.email'),
      value: 'info@exportimport.com',
      gradient: 'from-teal-700 to-teal-800'
    },
    {
      icon: MapPin,
      title: t('contact.location'),
      value: t('contact.address'),
      gradient: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Clock,
      title: t('contact.hours'),
      value: t('contact.workingHours'),
      gradient: 'from-teal-700 to-teal-800'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px]"
          animate={{
            background: [
              'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-800 via-teal-700 to-yellow-700 bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              {t('contact.formTitle')}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-600 focus:ring-4 focus:ring-teal-100 transition-all outline-none text-slate-800"
                  placeholder={t('contact.namePlaceholder')}
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-600 focus:ring-4 focus:ring-teal-100 transition-all outline-none text-slate-800"
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-600 focus:ring-4 focus:ring-teal-100 transition-all outline-none text-slate-800 resize-none"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-semibold text-white shadow-lg transition-all ${
                  submitStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-800 hover:to-teal-900'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? t('contact.sending') : submitStatus === 'success' ? '✓ ' + t('contact.sent') : t('contact.submit')}
              </motion.button>

              {/* Privacy Note */}
              <p className="text-xs text-slate-500 text-center">
                {t('contact.privacyNote')}
              </p>
            </form>
          </motion.div>

          {/* Right Side - Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Information Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="bg-white backdrop-blur-xl rounded-2xl p-6 shadow-md border border-slate-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-md`}>
                        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xs font-semibold text-slate-500 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm font-bold text-slate-800">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Media Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-teal-700 to-teal-800 rounded-3xl p-8 shadow-xl text-white"
            >
              <h3 className="text-xl font-bold mb-4">
                {t('contact.socialTitle')}
              </h3>
              <p className="text-teal-100 text-sm mb-6">
                {t('contact.socialSubtitle')}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {/* Instagram */}
                <motion.a
                  href="https://instagram.com/your_account"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-4 flex flex-col items-center justify-center gap-2 transition-all border border-white/10 hover:border-white/30"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Instagram className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <span className="text-sm font-semibold">Instagram</span>
                </motion.a>

                {/* Telegram */}
                <motion.a
                  href="https://t.me/your_channel"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-4 flex flex-col items-center justify-center gap-2 transition-all border border-white/10 hover:border-white/30"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <TelegramIcon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <span className="text-sm font-semibold">Telegram</span>
                </motion.a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-white/20 flex items-center justify-center gap-6 text-teal-100 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>{t('contact.available')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                  <span>{t('contact.secure')}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 h-px w-64 mx-auto bg-gradient-to-r from-transparent via-slate-300 to-transparent"
        />
      </div>
    </section>
  );
}