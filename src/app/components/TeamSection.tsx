import { motion } from 'motion/react';
import { Linkedin, Mail, Quote, CheckCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useState } from 'react';

interface TeamSectionProps {
  onContactClick: () => void;
}

export function TeamSection({ onContactClick }: TeamSectionProps) {
  const { t } = useLanguage();
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: 'Anna',
      role: 'Founder & CEO',
      initials: 'AK',
      photo: '/anna-photo.jpg',
      gradient: 'from-teal-700 to-teal-800',
      key: 'anna',
      linkedin: 'https://www.linkedin.com/in/anna-culesova-7955ab26a/',
      email: 'anna.culesova@gmail.com'
    },
    {
      name: 'Marina',
      role: 'Co-Founder & COO',
      initials: 'MR',
      gradient: 'from-yellow-500 to-yellow-600',
      key: 'marina',
      linkedin: 'https://www.linkedin.com/in/marina-lobach-a1ab48176/',
      email: 'mary.lobach@gmail.com'
    }
  ];

  return (
    <section id="team" className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-15">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-yellow-100 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-teal-100 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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
            
            {/* Tagline */}
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

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-slate-200 hover:border-slate-300 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Header with Gradient */}
                <div className={`bg-gradient-to-br ${member.gradient} p-6 sm:p-8 text-white relative overflow-hidden`}>
                  {/* Decorative Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                  </div>

                  <div className="relative z-10">
                    {/* Avatar */}
                    {member.photo ? (
                      <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 border-4 border-white/30 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                        <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-[center_20%]" />
                      </div>
                    ) : (
                      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white/20 backdrop-blur-sm border-4 border-white/30 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                        {member.initials}
                      </div>
                    )}
                    
                    {/* Info */}
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-center">{member.name}</h3>
                    <div className="text-center mb-2">
                      <span className="inline-block px-3 py-1 sm:px-4 sm:py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold">
                        {member.role}
                      </span>
                    </div>

                    {/* Contact Icons */}
                    <div className="flex justify-center space-x-2 sm:space-x-3 mt-4 sm:mt-6">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl hover:bg-white hover:text-teal-700 transition-all flex items-center justify-center hover:scale-110"
                      >
                        <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                      <a 
                        href={`mailto:${member.email}`}
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl hover:bg-white hover:text-yellow-600 transition-all flex items-center justify-center hover:scale-110"
                      >
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 md:p-8">
                  {/* Bio */}
                  <p className="text-sm sm:text-base font-semibold text-slate-700 mb-4 sm:mb-6 leading-relaxed">
                    {t(`team.${member.key}.bio`)}
                  </p>

                  {/* Experience - Static list */}
                  <div className="space-y-4 mb-6">
                    {[0, 1, 2].map((expIndex) => {
                      const expKey = `team.${member.key}.experience${expIndex + 1}`;
                      const expText = t(expKey);
                      
                      // Only render if translation exists
                      if (!expText || expText === expKey) return null;
                      
                      return (
                        <motion.div
                          key={expIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.2 + expIndex * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircle className={`w-5 h-5 ${index === 0 ? 'text-teal-600' : 'text-yellow-600'}`} />
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {expText}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Quote */}
                  <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${index === 0 ? 'from-teal-50 to-teal-100/50' : 'from-yellow-50 to-yellow-100/50'} border-l-4 ${index === 0 ? 'border-teal-600' : 'border-yellow-600'}`}>
                    <Quote className={`absolute top-4 left-4 w-6 h-6 ${index === 0 ? 'text-teal-600/20' : 'text-yellow-600/20'}`} />
                    <p className="text-sm italic text-slate-700 pl-8">
                      {t(`team.${member.key}.quote`)}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
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
            
            {/* Animated background */}
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