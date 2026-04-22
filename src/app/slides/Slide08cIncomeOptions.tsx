import { motion } from 'motion/react';
import { User, Users, ChevronRight, Share2, Network, GitGraph } from 'lucide-react';

export function Slide08cIncomeOptions() {
  return (
    <div className="flex items-center justify-center h-full bg-[#030211] p-12 overflow-hidden relative">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 blur-[150px] rounded-full" />

      <div className="max-w-7xl w-full flex flex-col relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <GitGraph className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest leading-none">Network Ecosystem</span>
          </div>
          <h1 className="text-7xl font-black text-white leading-tight tracking-tighter">
            NETWORK <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">BUILDING</span>
          </h1>
        </motion.div>

        {/* Side-by-Side Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Horizontal Network Visualization */}
          <div className="relative flex items-center justify-start py-10 h-[400px]">

            {/* YOU Node */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", delay: 0.3 }}
              className="relative z-20 shrink-0"
            >
              <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full border-4 border-white/20 flex flex-col items-center justify-center shadow-2xl relative">
                <User className="w-12 h-12 text-white" />
                <span className="text-[11px] font-black text-white uppercase tracking-widest mt-2">YOU</span>
              </div>
            </motion.div>

            {/* Dynamic Connectors to L1 */}
            <div className="relative w-24 flex items-center">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-blue-600/50 to-indigo-600/50"
              />
            </div>

            {/* L1 Agent Column */}
            <div className="flex flex-col gap-10">
              {[1, 2, 3].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.5 + (i * 0.2), duration: 0.6 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-20 h-20 bg-slate-800 border-2 border-white/10 rounded-2xl flex items-center justify-center shadow-xl group-hover:border-indigo-500 transition-colors shrink-0">
                    <Users className="w-8 h-8 text-indigo-400 group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Branching to L2 */}
                  <div className="w-12 h-0.5 bg-slate-700/50 relative">
                    <div className="absolute -right-8 top-1/2 -translate-y-1/2 flex gap-2">
                      {[1, 2].map((_, j) => (
                        <motion.div
                          key={j}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 2.2 + (i * 0.2) + (j * 0.1) }}
                          className="w-3 h-3 bg-indigo-500/40 rounded-full border border-white/10"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="hidden group-hover:block transition-all pl-2">
                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Growth Node</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Info Panel (Cards & Label) */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] relative group hover:bg-white/10 transition-all shadow-2xl"
            >
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-3xl flex items-center justify-center shadow-xl group-hover:rotate-12 transition-transform">
                <Network className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">Team Hierarchy</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Build a sustainable passive income ecosystem by scaling through multiple organizational levels. Every node in your network amplifies your potential.
              </p>

              <div className="flex items-center gap-3 text-blue-400 font-black text-xs uppercase tracking-widest">
                <span>View Full Model</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>

            {/* Growth Protocol Badge - No Overlap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2 }}
              className="inline-flex items-center gap-4 bg-emerald-500/10 border border-emerald-500/20 px-8 py-5 rounded-3xl shadow-[0_0_40px_rgba(16,185,129,0.1)] self-start"
            >
              <Share2 className="w-6 h-6 text-emerald-400" />
              <div>
                <span className="block text-emerald-400 font-black text-xs uppercase tracking-[0.2em] mb-1">Passive Growth Protocol</span>
                <span className="block text-emerald-400/60 text-[10px] uppercase font-bold tracking-widest">Multi-Tier Reward System Active</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Minimalist Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="mt-12 flex items-center gap-6 text-slate-700 text-[10px] font-black uppercase tracking-[1em]"
        >
          <div className="h-px w-24 bg-slate-800" />
          Professional Network Structure
          <div className="h-px w-24 bg-slate-800" />
        </motion.div>
      </div>
    </div>
  );
}
