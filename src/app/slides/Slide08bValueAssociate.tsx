import { motion } from 'motion/react';
import { Users, Megaphone, Smartphone, Network, Layers, Gem } from 'lucide-react';

export function Slide08bValueAssociate() {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 p-6 overflow-hidden relative">
      <div className="max-w-[1400px] w-full h-full flex flex-col relative z-10">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl font-bold text-white text-center mb-10"
        >
          Value Associate Program
        </motion.h1>

        <div className="flex-1 grid grid-cols-[1fr_1.2fr_1fr] gap-8 items-center min-h-0">
          
          {/* Left: Ecosystem & Marketing */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-7 border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3 border-b border-white/10 pb-3 uppercase tracking-wider relative z-10">
                <Megaphone className="w-6 h-6 text-blue-400" />
                Marketing & Tools
              </h3>
              <div className="space-y-6 relative z-10">
                <div className="group/item">
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-1 group-hover/item:text-blue-400 transition-colors">Participation</p>
                  <p className="text-white text-sm font-bold">Collaborative Marketing Support</p>
                </div>
                <div className="group/item">
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-1 group-hover/item:text-blue-400 transition-colors">Digital Suites</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-[10px] text-blue-300 font-bold uppercase">Real Sale</span>
                    <span className="px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-[10px] text-indigo-300 font-bold uppercase">True Property</span>
                  </div>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5 mt-4">
                  <p className="text-[10px] text-slate-300 leading-relaxed">Access premium internal applications designed specifically for lead tracking and property analytics.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Middle: THE VALUE ASSOCIATE HERO */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative h-full flex items-center justify-center p-4"
          >
            {/* Pulsing Glow Effect */}
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 bg-cyan-500/20 rounded-[3.5rem] blur-3xl z-0"
            />

            <div className="w-full bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-2xl rounded-[3.5rem] p-10 border border-white/30 shadow-[0_0_80px_rgba(34,211,238,0.4)] relative z-10 overflow-hidden text-center group">
               {/* Decorative Gradient Line */}
               <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500"></div>
               
               <div className="inline-flex p-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-[2rem] shadow-xl shadow-cyan-500/20 mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Gem className="w-16 h-16 text-white" />
               </div>

               <h2 className="text-4xl font-black text-white uppercase tracking-wider mb-2">Value Associate</h2>
               <p className="text-cyan-400 font-bold text-sm tracking-[0.2em] uppercase mb-10">Strategic Entry Partner</p>

               <div className="bg-white/10 rounded-3xl p-8 border border-white/20 shadow-inner group-hover:border-cyan-400/50 transition-all duration-300 text-center">
                  <Smartphone className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                  <p className="text-slate-300 text-[10px] uppercase font-black tracking-[0.3em] mb-3 opacity-80">Registration Gateway</p>
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <p className="text-white text-lg font-bold leading-tight">Register in our App to Activate Your Network</p>
                  </motion.div>
               </div>
            </div>
          </motion.div>

          {/* Right: Team Hierarchy */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-7 border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3 border-b border-white/10 pb-3 uppercase tracking-wider relative z-10">
                <Layers className="w-6 h-6 text-cyan-400" />
                Team Hierarchy
              </h3>
              <div className="space-y-4 relative z-10">
                <div className="flex items-start gap-4 bg-white/5 rounded-2xl p-4 border border-white/5 group/link hover:bg-white/10 transition-all">
                  <Network className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">Agent Levels</p>
                    <p className="text-[10px] text-slate-400 leading-relaxed font-medium">Structure and manage your agents in hierarchical levels for better control.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/5 rounded-2xl p-4 border border-white/5 group/link hover:bg-white/10 transition-all">
                  <Users className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">Lead Generation</p>
                    <p className="text-[10px] text-slate-400 leading-relaxed font-medium">Simplified network lead flow with direct leads from our listing platform realproperties.in for rapid growth.</p>
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
