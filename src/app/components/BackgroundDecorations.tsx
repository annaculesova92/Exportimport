import { motion } from 'motion/react';

function GlobeGrid({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" />
      <ellipse cx="50" cy="50" rx="25" ry="45" stroke="currentColor" strokeWidth="0.4" />
      <ellipse cx="50" cy="50" rx="12" ry="45" stroke="currentColor" strokeWidth="0.3" />
      <line x1="5" y1="30" x2="95" y2="30" stroke="currentColor" strokeWidth="0.3" />
      <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.4" />
      <line x1="5" y1="70" x2="95" y2="70" stroke="currentColor" strokeWidth="0.3" />
    </svg>
  );
}

function CompassRose({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="0.4" />
      <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth="0.3" />
      <line x1="30" y1="2" x2="30" y2="58" stroke="currentColor" strokeWidth="0.4" />
      <line x1="2" y1="30" x2="58" y2="30" stroke="currentColor" strokeWidth="0.4" />
      <line x1="10" y1="10" x2="50" y2="50" stroke="currentColor" strokeWidth="0.25" />
      <line x1="50" y1="10" x2="10" y2="50" stroke="currentColor" strokeWidth="0.25" />
      <polygon points="30,5 33,25 30,20 27,25" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function ShippingRoute({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,20 Q50,5 100,20 T200,20" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 3" />
      <circle cx="0" cy="20" r="2.5" fill="currentColor" opacity="0.4" />
      <circle cx="100" cy="20" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="200" cy="20" r="2.5" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

function NetworkDots({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="30" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="60" cy="15" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="100" cy="40" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="40" cy="70" r="1.5" fill="currentColor" opacity="0.3" />
      <circle cx="90" cy="80" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="70" cy="105" r="1.5" fill="currentColor" opacity="0.4" />
      <line x1="20" y1="30" x2="60" y2="15" stroke="currentColor" strokeWidth="0.3" />
      <line x1="60" y1="15" x2="100" y2="40" stroke="currentColor" strokeWidth="0.3" />
      <line x1="20" y1="30" x2="40" y2="70" stroke="currentColor" strokeWidth="0.3" />
      <line x1="100" y1="40" x2="90" y2="80" stroke="currentColor" strokeWidth="0.3" />
      <line x1="40" y1="70" x2="90" y2="80" stroke="currentColor" strokeWidth="0.3" />
      <line x1="40" y1="70" x2="70" y2="105" stroke="currentColor" strokeWidth="0.3" />
      <line x1="90" y1="80" x2="70" y2="105" stroke="currentColor" strokeWidth="0.3" />
    </svg>
  );
}

function UpwardArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="15" y1="55" x2="15" y2="10" stroke="currentColor" strokeWidth="0.6" />
      <polyline points="8,18 15,8 22,18" stroke="currentColor" strokeWidth="0.6" fill="none" />
    </svg>
  );
}

export function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        className="absolute top-[8%] left-[3%] hidden lg:block"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      >
        <GlobeGrid className="w-32 h-32 text-teal-300/[0.07]" />
      </motion.div>

      <motion.div
        className="absolute top-[35%] right-[2%] hidden lg:block"
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 150, repeat: Infinity, ease: 'linear' }}
      >
        <CompassRose className="w-24 h-24 text-emerald-400/[0.06]" />
      </motion.div>

      <motion.div
        className="absolute top-[22%] left-[15%] right-[15%] hidden xl:block"
        animate={{ opacity: [0.03, 0.07, 0.03] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ShippingRoute className="w-full h-8 text-teal-400/[0.08]" />
      </motion.div>

      <motion.div
        className="absolute top-[55%] left-[5%] hidden lg:block"
        animate={{ y: [0, -8, 0], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <NetworkDots className="w-28 h-28 text-teal-500/[0.07]" />
      </motion.div>

      <motion.div
        className="absolute top-[70%] right-[5%] hidden lg:block"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}
      >
        <GlobeGrid className="w-40 h-40 text-emerald-300/[0.05]" />
      </motion.div>

      <motion.div
        className="absolute top-[45%] right-[12%] hidden xl:block"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <UpwardArrow className="w-6 h-12 text-teal-400/[0.08]" />
      </motion.div>

      <motion.div
        className="absolute top-[48%] right-[14%] hidden xl:block"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <UpwardArrow className="w-5 h-10 text-emerald-400/[0.06]" />
      </motion.div>

      <motion.div
        className="absolute top-[80%] left-[20%] right-[20%] hidden xl:block"
        animate={{ opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      >
        <ShippingRoute className="w-full h-6 text-emerald-400/[0.06]" />
      </motion.div>

      <motion.div
        className="absolute top-[90%] right-[8%] hidden lg:block"
        animate={{ y: [0, -5, 0], opacity: [0.04, 0.07, 0.04] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        <NetworkDots className="w-20 h-20 text-teal-400/[0.06]" />
      </motion.div>

      <motion.div
        className="absolute top-[15%] right-[25%] hidden xl:block"
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 200, repeat: Infinity, ease: 'linear' }}
      >
        <CompassRose className="w-16 h-16 text-teal-300/[0.05]" />
      </motion.div>
    </div>
  );
}
