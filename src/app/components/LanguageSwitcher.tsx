import { motion } from 'motion/react';
import { useLanguage, Language } from '@/app/contexts/LanguageContext';

const languages = [
  { code: 'ru' as Language, name: 'RU', flag: '🇷🇺' },
  { code: 'en' as Language, name: 'EN', flag: '🇬🇧' },
  { code: 'fr' as Language, name: 'FR', flag: '🇫🇷' },
  { code: 'it' as Language, name: 'IT', flag: '🇮🇹' },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang) => {
        const isActive = language === lang.code;
        return (
          <motion.button
            key={lang.code}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setLanguage(lang.code)}
            className={`relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
              isActive
                ? 'bg-primary/10 text-primary border border-primary/20'
                : 'text-muted-foreground hover:text-foreground hover:bg-slate-100'
            }`}
          >
            <span className="text-sm leading-none">{lang.flag}</span>
            <span className="hidden sm:inline">{lang.name}</span>
            {isActive && (
              <motion.div
                layoutId="activeLanguage"
                className="absolute inset-0 rounded-lg border border-primary/30"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
