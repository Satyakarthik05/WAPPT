import { motion } from 'motion/react';
import { DollarSign, Wallet, TrendingUp, Sparkles } from 'lucide-react';

export function Income() {
  return (
    <div className="flex items-center justify-center h-full bg-[#030211] p-10 overflow-hidden relative">
      {/* Background Cinematic Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.25, 0.1] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-600/10 blur-[180px] rounded-full" 
      />
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Top Decorative Line & Label */}
        <div className="flex flex-col items-center mb-12">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "240px", opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-4"
          />
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-blue-400 font-black text-xs uppercase tracking-[0.8em] pl-4"
          >
            EARNING MODEL
          </motion.p>
        </div>

        {/* Central Icon Section */}
        <div className="relative mb-16 px-20">
           <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-12"
          >
            <motion.div
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-3xl backdrop-blur-md"
            >
              <Wallet className="w-12 h-12 text-blue-400" />
            </motion.div>

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
              <div className="w-40 h-40 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(79,70,229,0.4)] border-2 border-white/20">
                <DollarSign className="w-20 h-20 text-white" strokeWidth={3} />
              </div>
            </motion.div>

            <motion.div
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl backdrop-blur-md"
            >
              <TrendingUp className="w-12 h-12 text-emerald-400" />
            </motion.div>
          </motion.div>
        </div>

        {/* Text Presentation */}
        <div className="text-center space-y-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative inline-block"
          >
            <h1 className="text-9xl font-black text-white tracking-tighter flex items-center gap-6">
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">INCOME</span>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">OPTIONS</span>
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 1 }}
              className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            />
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center pt-8"
          >
            <div className="flex items-center gap-4 text-4xl font-bold tracking-[0.2em] text-slate-400 uppercase">
              <Sparkles className="w-8 h-8 text-indigo-400 animate-pulse" />
              <span>via</span>
              <span className="text-white relative">
                Wealth Associates
                <motion.span 
                  className="absolute -inset-x-4 -inset-y-2 bg-white/5 rounded-lg -z-10"
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
              <Sparkles className="w-8 h-8 text-indigo-400 animate-pulse" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Important Tag */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 px-8 py-3 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-500/20 rounded-full border border-white/10 backdrop-blur-md"
        >
          <p className="text-indigo-300 font-black text-sm uppercase tracking-[0.5em]">
            Strategic Earning Systems
          </p>
        </motion.div>
      </div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [0, -150, 0],
            opacity: [0, 0.3, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{ 
            duration: 15 + i * 2,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear"
          }}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{ 
            top: `${10 + i * 12}%`,
            left: `${5 + i * 14}%` 
          }}
        />
      ))}
    </div>
  );
}

