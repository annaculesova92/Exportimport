import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Lock, Linkedin, MessageCircle, Heart } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface FooterProps {
  onContactClick: () => void;
}

export function Footer({ onContactClick }: FooterProps) {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark-gradient text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent rounded-full blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-3 sm:mb-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              </div>
              <div>
                <div className="font-bold text-base sm:text-lg">{t('nav.companyName')}</div>
                <div className="text-xs text-white/60">{t('nav.companyTagline')}</div>
              </div>
            </div>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
              {t('footer.companyDescription')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-3 sm:mb-4 text-xs sm:text-sm text-accent">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              {[
                { label: t('footer.services'), id: 'services' },
                { label: t('footer.process'), id: 'process' },
                { label: t('footer.team'), id: 'team' },
                { label: t('footer.contact'), id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      if (item.id === 'contact') {
                        onContactClick();
                      } else {
                        const element = document.getElementById(item.id);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-3 sm:mb-4 text-xs sm:text-sm text-accent">{t('footer.contactsTitle')}</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li>
                <a href="mailto:info@exportimport.eu" className="text-white/70 hover:text-accent transition-colors flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">info@exportimport.eu</span>
                </a>
              </li>
              <li>
                <a href="tel:+390123456789" className="text-white/70 hover:text-accent transition-colors flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">+39 012 345 6789</span>
                </a>
              </li>
              <li className="text-white/70 flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">{t('footer.officeMilan')}</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center space-x-2 sm:space-x-3 mt-4 sm:mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-accent transition-colors flex items-center justify-center"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:info@exportimport.eu"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-accent transition-colors flex items-center justify-center"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-accent transition-colors flex items-center justify-center"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-white/60">
              © {currentYear} Export & Import Business Consulting. {t('footer.allRightsFull')}
            </div>
            <button 
              onClick={onContactClick}
              className="text-white/60 hover:text-accent transition-colors flex items-center space-x-2"
            >
              <Lock className="w-4 h-4" />
              <span>{t('footer.privacy')}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}