import { motion } from 'motion/react';
import { Wine, Salad, Gem, Crown } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useState, useEffect, useCallback } from 'react';

const galleryImages = [
  { src: '/gallery-wine.jpg', alt: 'Italian Wine' },
  { src: '/gallery-oil.jpg', alt: 'Olive Oil' },
  { src: '/gallery-food.jpg', alt: 'Italian Food' },
  { src: '/gallery-jewelry.jpg', alt: 'Italian Jewelry' },
  { src: '/gallery-luxury.jpg', alt: 'Luxury Goods' },
];

export function SpecializationSection() {
  const { t } = useLanguage();
  const [activeImage, setActiveImage] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [resetKey]);

  const selectImage = useCallback((index: number) => {
    setActiveImage(index);
    setResetKey((k) => k + 1);
  }, []);

  const items = [
    { key: 'item1', icon: Wine },
    { key: 'item2', icon: Salad },
    { key: 'item3', icon: Gem },
    { key: 'item4', icon: Crown },
  ];

  return (
    <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-teal-900/0 to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
            {t('specialization.title')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full mb-4" />
          <p className="text-sm md:text-base text-teal-100/80 font-medium max-w-2xl mx-auto">
            {t('specialization.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className="group"
                >
                  <div className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/[0.08] hover:bg-white/[0.12] hover:border-yellow-400/30 transition-all duration-400 h-full">
                    <div className="flex items-start gap-3.5">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 border border-yellow-400/20 rounded-xl flex items-center justify-center group-hover:from-yellow-400 group-hover:to-amber-500 group-hover:border-transparent transition-all duration-400">
                        <Icon className="w-6 h-6 text-yellow-400 group-hover:text-teal-900 transition-colors duration-400" strokeWidth={2} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-white mb-1.5">
                          {t(`specialization.${item.key}.title`)}
                        </h3>
                        <p className="text-xs sm:text-sm text-white/55 leading-relaxed">
                          {t(`specialization.${item.key}.description`)}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/30">
              <div className="aspect-[4/3] relative">
                {galleryImages.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={false}
                    animate={{ opacity: activeImage === i ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-transparent to-teal-900/20" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex justify-center gap-2">
                  {galleryImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => selectImage(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeImage === i
                          ? 'w-8 bg-yellow-400'
                          : 'w-4 bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-3">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => selectImage(i)}
                  className={`flex-1 h-14 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    activeImage === i
                      ? 'border-yellow-400 shadow-lg shadow-yellow-400/20'
                      : 'border-white/10 opacity-50 hover:opacity-80'
                  }`}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
}
