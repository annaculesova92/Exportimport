import { motion } from 'motion/react';
import { Linkedin, Mail, Quote, CheckCircle, Instagram } from 'lucide-react';
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
    <section id="team" className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-yellow-100 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-teal-100 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-teal-700 via-teal-600 to-yellow-600 bg-clip-text text-transparent">
              {t('team.title')}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium mb-3 sm:mb-4">
              {t('team.subtitle')}
            </p>
            
            <motion.div 
              className="relative inline-block mt-4 sm:mt-6 bg-gradient-to-br from-teal-50 to-yellow-50 rounded-xl p-3 sm:p-4 border border-yellow-200 shadow-md"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Quote className="absolute -top-2 -left-2 w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
              <p className="text-xs sm:text-sm italic text-slate-700 px-4 sm:px-6">
                {t('team.tagline')}
              </p>
              <Quote className="absolute -bottom-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 text-teal-500 rotate-180" />
            </motion.div>
          </motion.div>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative"
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-slate-200 hover:border-slate-300 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="bg-gradient-to-br from-teal-700 to-teal-800 p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                </div>

                <div className="relative z-10">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 border-4 border-white/30 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <img src="/anna-photo.jpg" alt="Anna" className="w-full h-full object-cover object-[center_20%]" />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-center">Anna</h3>
                  <div className="text-center mb-2">
                    <span className="inline-block px-3 py-1 sm:px-4 sm:py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold">
                      Founder
                    </span>
                  </div>

                  <div className="flex justify-center space-x-2 sm:space-x-3 mt-4 sm:mt-6">
                    <a
                      href="https://wa.me/393245436954"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl hover:bg-white hover:text-green-600 transition-all flex items-center justify-center hover:scale-110"
                    >
                      <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/anna-culesova-7955ab26a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl hover:bg-white hover:text-teal-700 transition-all flex items-center justify-center hover:scale-110"
                    >
                      <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/boutiquebusiness.consulting"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl hover:bg-white hover:text-pink-600 transition-all flex items-center justify-center hover:scale-110"
                    >
                      <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a 
                      href="mailto:anna.culesova@gmail.com"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl hover:bg-white hover:text-yellow-600 transition-all flex items-center justify-center hover:scale-110"
                    >
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 md:p-8">
                <p className="text-sm sm:text-base font-semibold text-slate-700 mb-4 sm:mb-6 leading-relaxed">
                  {t('team.anna.bio')}
                </p>

                <div className="space-y-4 mb-6">
                  {[0, 1, 2].map((expIndex) => {
                    const expKey = `team.anna.experience${expIndex + 1}`;
                    const expText = t(expKey);
                    if (!expText || expText === expKey) return null;
                    return (
                      <motion.div
                        key={expIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: expIndex * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <CheckCircle className="w-5 h-5 text-teal-600" />
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {expText}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100/50 border-l-4 border-teal-600">
                  <Quote className="absolute top-4 left-4 w-6 h-6 text-teal-600/20" />
                  <p className="text-sm italic text-slate-700 pl-8">
                    {t('team.anna.quote')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button
            onClick={onContactClick}
            className="group relative px-10 py-5 bg-gradient-to-r from-teal-600 to-yellow-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">{t('team.cta')}</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-teal-600"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
