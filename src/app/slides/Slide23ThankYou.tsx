import { motion } from 'motion/react';
import { Heart, Sparkles, TrendingUp, Wallet, Star, ShieldCheck } from 'lucide-react';
import handshakeImg from '../../assests/handshake_final.png';

export function Slide23ThankYou() {
  return (
    <div className="flex items-center justify-center min-h-full h-auto bg-[#030211] p-6 md:p-12 overflow-y-auto md:overflow-y-auto md:overflow-hidden relative text-white">
      {/* Background Handshake Image */}
      <div className="absolute inset-0 z-0 text-center">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.25 }}
          transition={{ duration: 2 }}
          src={handshakeImg} 
          className="w-full h-full object-cover" 
          alt="Partnership" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030211] via-transparent to-[#030211]" />
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1200px] h-[600px] md:h-[1200px] bg-amber-500/10 blur-[200px] rounded-full" />
      
      <div className="max-w-6xl w-full relative z-10 flex flex-col items-center text-center py-20 md:py-0">
        
        {/* Top Minimalist Badge */}
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5 }}
           className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8 md:mb-6 md:mb-12"
        >
           <ShieldCheck className="w-5 h-5 text-amber-500" />
           <span className="text-[10px] md:text-[12px] font-black text-amber-500 uppercase tracking-[0.3em] md:tracking-[0.5em] leading-none">Partnership Ecosystem</span>
        </motion.div>

        {/* Single-line Gradient Master Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="mb-8 md:mb-6 md:mb-12 w-full text-center"
        >
          <h1 className="text-2xl md:text-4xl md:text-6xl sm:text-4xl md:text-7xl md:text-[140px] font-black leading-none tracking-tighter uppercase">
            THANK <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-700 animate-pulse">YOU</span>
          </h1>
          <div className="h-1 md:h-2 w-32 md:w-64 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mt-6 md:mt-8" />
        </motion.div>

        {/* Wealth Concept Message - Refined Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="space-y-6 md:space-y-8 px-4"
        >
          <h2 className="text-2xl md:text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
            JOIN THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">WEALTH LEGACY</span>
          </h2>
          <p className="text-slate-400 text-base md:text-2xl font-light max-w-3xl mx-auto leading-relaxed md:border-l md:border-amber-500/30 md:pl-8 text-center md:text-left">
            Thank you for exploring the vision of Wealth Associates.
            We are redefining the landscape of prosperity through
            innovation, integrity, and strategic partnership.
          </p>
        </motion.div>

        {/* Final Connectivity Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="mt-12 md:mt-20 flex flex-col md:flex-row items-center gap-6 md:gap-6 md:p-12"
        >
           <div className="flex flex-col items-center">
              <span className="text-amber-500 font-black text-[9px] md:text-[11px] uppercase tracking-[0.5em] md:tracking-[0.8em] mb-2 opacity-60">Status</span>
              <span className="text-white font-black text-xs md:text-sm uppercase tracking-widest">Connect Established</span>
           </div>
           <div className="hidden md:block h-8 w-px bg-white/10" />
           <div className="flex flex-col items-center">
              <span className="text-amber-500 font-black text-[9px] md:text-[11px] uppercase tracking-[0.5em] md:tracking-[0.8em] mb-2 opacity-60">Engine</span>
              <span className="text-white font-black text-xs md:text-sm uppercase tracking-widest">Wealth Protocol 4.0</span>
           </div>
        </motion.div>

      </div>

      {/* Signature Bar */}
      <div className="absolute bottom-12 left-12 flex items-center gap-6 text-slate-800 text-[11px] font-black uppercase tracking-[1em]">
         Wealth Associates © 2026
         <div className="h-px w-32 bg-slate-900" />
      </div>
    </div>
  );
}




