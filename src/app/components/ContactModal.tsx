import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Lock, Shield, Check, Mail, Phone, User, Building, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    acceptPrivacy: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        acceptPrivacy: false
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-2xl bg-white rounded-xl sm:rounded-2xl shadow-2xl pointer-events-auto max-h-[90vh] overflow-y-auto"
            >
              {!isSubmitted ? (
                <>
                  {/* Header */}
                  <div className="sticky top-0 bg-white border-b border-border px-4 sm:px-6 md:px-8 py-4 sm:py-6 rounded-t-xl sm:rounded-t-2xl z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                          <div className="w-9 h-9 sm:w-10 sm:h-10 premium-gradient rounded-lg flex items-center justify-center">
                            <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                            {t('contact.title')}
                          </h2>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {t('contact.subtitle')}
                        </p>
                      </div>
                      <button
                        onClick={onClose}
                        className="ml-2 sm:ml-4 p-1.5 sm:p-2 hover:bg-muted rounded-lg transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 space-y-4 sm:space-y-6">
                    {/* Personal Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                          {t('contact.name')}
                        </label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2">
                            <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" />
                          </div>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={t('contact.namePlaceholder')}
                            className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-secondary/50 border border-border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                          {t('contact.email')}
                        </label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2">
                            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" />
                          </div>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={t('contact.emailPlaceholder')}
                            className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-secondary/50 border border-border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                          {t('contact.phone')}
                        </label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2">
                            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" />
                          </div>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={t('contact.phonePlaceholder')}
                            className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-secondary/50 border border-border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                          {t('contact.company')}
                        </label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2">
                            <Building className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" />
                          </div>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder={t('contact.companyPlaceholder')}
                            className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-secondary/50 border border-border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                        {t('contact.message')}
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-3">
                          <MessageSquare className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <textarea
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder={t('contact.messagePlaceholder')}
                          className="w-full pl-10 pr-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-sm sm:text-base"
                        />
                      </div>
                    </div>

                    {/* Privacy Agreement */}
                    <div className="bg-secondary/50 border border-primary/20 rounded-xl p-4">
                      <label className="flex items-start space-x-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          name="acceptPrivacy"
                          required
                          checked={formData.acceptPrivacy}
                          onChange={handleChange}
                          className="w-5 h-5 rounded border-2 border-primary text-primary focus:ring-2 focus:ring-primary focus:ring-offset-0 cursor-pointer mt-0.5"
                        />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-foreground">
                            {t('contact.privacy')}
                          </div>
                        </div>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        disabled={!formData.acceptPrivacy}
                        className="flex-1 px-6 py-4 premium-gradient text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
                      >
                        <Lock className="w-5 h-5" />
                        <span>{t('contact.submit')}</span>
                      </button>
                      <button
                        type="button"
                        onClick={onClose}
                        className="px-6 py-4 bg-white border-2 border-border text-foreground rounded-xl font-semibold hover:bg-secondary/50 transition-all duration-300"
                      >
                        {t('contact.close')}
                      </button>
                    </div>

                    {/* Privacy Note */}
                    <div className="flex items-start space-x-2 pt-2">
                      <Shield className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-muted-foreground">
                        {t('contact.secureNote')}
                      </p>
                    </div>
                  </form>
                </>
              ) : (
                /* Success State */
                <div className="px-6 sm:px-8 py-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', duration: 0.6 }}
                    className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center"
                  >
                    <Check className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {t('contact.sending')}
                  </h3>
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/50 rounded-lg">
                    <Lock className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">
                      {t('contact.secureNote')}
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}