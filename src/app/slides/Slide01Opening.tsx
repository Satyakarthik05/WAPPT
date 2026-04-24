import { motion } from 'motion/react';
import { VideoPlaceholder } from '../components/VideoPlaceholder';
import slide1video from '../../assests/slidevideo.mp4'

export function Slide01Opening() {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* Background Video Layer - Force to back */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <VideoPlaceholder
          title="Full-screen Background Video"
          className="w-full h-full object-cover opacity-100"
          src={slide1video}
        />
      </div>

      {/* Content Layer - Force to front */}
      <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-6 pb-[15vh]" style={{ zIndex: 50 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Taglines */}
          <div className="space-y-10">
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
                      className="inline-block text-3xl md:text-6xl lg:text-7xl text-white font-bold tracking-[0.05em] uppercase"
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
