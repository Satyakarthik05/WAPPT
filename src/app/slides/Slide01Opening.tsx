import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import luxurySkyscraper from '../../assests/luxury_skyscraper.png';
import luxuryVillas from '../../assests/luxury_villas.png';
import luxuryCommercial from '../../assests/luxury_commercial.png';
import luxuryWaterfront from '../../assests/luxury_waterfront.png';
import appIcon from '../../assests/app_icon.png';

const BACKGROUND_IMAGES = [luxurySkyscraper, luxuryVillas, luxuryCommercial, luxuryWaterfront];

export function Slide01Opening() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-full h-auto bg-black overflow-y-auto md:overflow-hidden">
      {/* Background Image Slideshow Layer */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIdx}
            src={BACKGROUND_IMAGES[currentIdx]}
            alt="Building background"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.75, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35 pointer-events-none" />
      </div>

      {/* Content Layer - Force to front */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end text-center p-6 pb-[10vh] md:pb-[12vh]" style={{ zIndex: 50 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-4xl flex flex-col items-center gap-6"
        >
          {/* Wealth Associates Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1, type: "spring", stiffness: 80 }}
            className="w-28 h-28 md:w-40 md:h-40 rounded-3xl bg-white p-3 shadow-2xl border border-white/10 flex items-center justify-center overflow-hidden"
          >
            <img src={appIcon} alt="Wealth Associates Logo" className="w-full h-full object-contain" />
          </motion.div>

          {/* Taglines */}
          <div className="space-y-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.5,
                  },
                },
              }}
              className="flex justify-center items-center flex-nowrap gap-x-[0.6em] whitespace-nowrap overflow-visible"
            >
              {"Your Wealth journey begins".split(" ").map((word, wordIdx) => (
                <span key={wordIdx} className="inline-block whitespace-nowrap">
                  {word.split("").map((letter, charIdx) => (
                    <motion.span
                      key={charIdx}
                      variants={{
                        visible: {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        },
                        hidden: {
                          opacity: 0,
                          y: 20,
                          scale: 1.2,
                        },
                      }}
                      transition={{
                        duration: 1,
                        ease: [0.2, 0.65, 0.3, 0.9],
                      }}
                      className="inline-block text-2xl sm:text-3xl md:text-2xl md:text-4xl md:text-6xl lg:text-4xl md:text-7xl text-white font-bold tracking-[0.05em] uppercase"
                      style={{
                        textShadow: '0 0 20px rgba(255,255,255,0.5), 0 4px 15px rgba(0,0,0,0.6)'
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 2, duration: 1.5 }}
              className="h-[3px] bg-gradient-to-r from-transparent via-blue-400 to-transparent w-full max-w-xl mx-auto shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8, duration: 1 }}
              className="text-xl md:text-3xl text-white font-light tracking-[0.2em] italic opacity-80"
              style={{ textShadow: '0 0 10px rgba(255,255,255,0.2)' }}
            >
              Create* Improve* Protect*
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}




