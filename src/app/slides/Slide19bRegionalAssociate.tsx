import { motion } from 'motion/react';
import { Building2, MapPin, BadgeCheck, Users2, ShieldCheck, Wallet, Trophy } from 'lucide-react';
import regionalHubImg from '../../assests/regional_hub.png';

export function Slide19bRegionalAssociate() {
  return (
    <div className="flex items-center justify-center h-full bg-slate-950 p-6 overflow-hidden relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={regionalHubImg} className="w-full h-full object-cover opacity-20 scale-105" alt="Background" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/90 to-slate-950/80"></div>
      </div>

      <div className="max-w-[1400px] w-full h-full flex flex-col relative z-10">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl font-bold text-white text-center mb-10"
        >
          Regional Associate Franchise
        </motion.h1>

        <div className="flex-1 grid grid-cols-[1fr_1.2fr_1fr] gap-8 items-center min-h-0">

          {/* Left: Requirements */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-7 border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3 border-b border-white/10 pb-3 uppercase tracking-wider relative z-10">
                <ShieldCheck className="w-6 h-6 text-green-400" />
                Requirements
              </h3>
              <div className="space-y-6 relative z-10">
                <div className="group/item">
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-1 group-hover/item:text-green-400 transition-colors">Infrastructure</p>
                  <p className="text-white text-base font-bold">Min 750 Sq. Ft Office</p>
                </div>
                <div className="group/item">
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-1 group-hover/item:text-green-400 transition-colors">Human Resource</p>
                  <p className="text-white text-base font-bold">Dedicated Telecallers</p>
                </div>
                <div className="group/item">
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-1 group-hover/item:text-green-400 transition-colors">Governance</p>
                  <p className="text-white text-base font-bold">Verified Background</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Middle: THE HUB HERO */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative h-full flex items-center justify-center p-4"
          >
            {/* Pulsing Glow Effect */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 bg-blue-500/20 rounded-[3.5rem] blur-3xl z-0"
            />

            <div className="w-full bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-2xl rounded-[3.5rem] p-10 border border-white/30 shadow-[0_0_80px_rgba(59,130,246,0.4)] relative z-10 overflow-hidden text-center group">
              {/* Decorative Gradient Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500"></div>

              <div className="inline-flex p-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-[2rem] shadow-xl shadow-blue-500/20 mb-8 group-hover:scale-110 transition-transform duration-500">
                <Building2 className="w-16 h-16 text-white" />
              </div>

              <h2 className="text-4xl font-black text-white uppercase tracking-wider mb-2">District Hub</h2>
              <p className="text-blue-400 font-bold text-sm tracking-[0.2em] uppercase mb-10">Regional Strategic Partner</p>

              <div className="bg-white/10 rounded-3xl p-8 border border-white/20 shadow-inner group-hover:border-blue-400/50 transition-all duration-300">
                <p className="text-slate-300 text-[10px] uppercase font-black tracking-[0.3em] mb-3 opacity-80">Initial Investment</p>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="relative"
                >
                  <p className="text-6xl font-bold text-white tracking-tighter drop-shadow-2xl">
                    ₹2,00,000
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right: Exclusivity */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-7 border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3 border-b border-white/10 pb-3 uppercase tracking-wider relative z-10">
                <BadgeCheck className="w-6 h-6 text-indigo-400" />
                Exclusivity
              </h3>
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4 bg-white/5 rounded-2xl p-4 border border-white/5 group/link hover:bg-white/10 transition-all">
                  <MapPin className="w-6 h-6 text-indigo-400 shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">Regional Rights</p>
                    <p className="text-[10px] text-slate-400 leading-relaxed font-medium">Exclusive operational rights for 13 Districts of Andhra Pradesh.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/5 rounded-2xl p-4 border border-white/5 group/link hover:bg-white/10 transition-all">
                  <Trophy className="w-6 h-6 text-indigo-400 shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">Sole Governance</p>
                    <p className="text-[10px] text-slate-400 leading-relaxed font-medium">Authority to appoint and manage Level 2 Channel Partners locally.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
