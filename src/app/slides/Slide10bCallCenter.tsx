import { motion } from 'motion/react';
import { Headphones, Building2, PhoneCall, ShieldCheck, Zap } from 'lucide-react';

export function Slide10bCallCenter() {
  const franchises = [
    { name: "Franchise 01", location: "Regional South" },
    { name: "Franchise 02", location: "Regional North" },
    { name: "Franchise 03", location: "Regional West" },
    { name: "Franchise 04", location: "Regional East" }
  ];

  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 p-8 overflow-hidden relative">
      <div className="max-w-6xl w-full flex flex-col items-center relative z-10 h-full justify-between py-12">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Call Center</h1>
          <p className="text-indigo-300 text-sm font-medium uppercase tracking-[0.3em] opacity-80 font-bold">Unified Support Network</p>
        </motion.div>

        {/* Central Core Node */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 15 }}
          className="relative group mb-16"
        >
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-150 animate-pulse" />
          <div className="relative bg-white/10 backdrop-blur-2xl px-12 py-8 rounded-[2rem] border border-white/20 shadow-[-10px_-10px_30px_rgba(255,255,255,0.05),10px_10px_30px_rgba(0,0,0,0.5)] flex flex-col items-center">
            <div className="p-4 bg-indigo-500 rounded-2xl shadow-lg shadow-indigo-500/20 mb-4 ring-4 ring-indigo-500/20">
              <Headphones className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-2xl font-black text-white uppercase tracking-widest text-center">Core Call Center</h2>
            <div className="mt-4 flex gap-4">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span className="text-[10px] text-white font-bold tracking-tight">PRIMARY HUB</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                <Zap className="w-3 h-3 text-yellow-400" />
                <span className="text-[10px] text-white font-bold tracking-tight">24/7 COMMAND</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hierarchy SVG Lines */}
        <div className="absolute inset-0 pointer-events-none stroke-blue-500/20 fill-none overflow-visible">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            {/* Connector Path 1 */}
            <motion.path
              d="M500 450 L200 680"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
            {/* Connector Path 2 */}
            <motion.path
              d="M500 450 L400 680"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            />
            {/* Connector Path 3 */}
            <motion.path
              d="M500 450 L600 680"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            />
            {/* Connector Path 4 */}
            <motion.path
              d="M500 450 L800 680"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            />

            {/* Animated Pulse Points */}
            {[200, 400, 600, 800].map((x, i) => (
              <motion.circle
                key={i}
                r="4"
                fill="#6366f1"
                initial={{ opacity: 0 }}
                animate={{
                  cx: [500, x],
                  cy: [450, 680],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  delay: 1.5 + i * 0.2,
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </svg>
        </div>

        {/* Franchise Nodes */}
        <div className="grid grid-cols-4 gap-8 w-full relative z-20">
          {franchises.map((f, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 + i * 0.15 }}
              className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center hover:bg-white/10 transition-all hover:-translate-y-2 group ring-1 ring-white/5"
            >
              <div className="p-3 bg-blue-500/10 rounded-xl mb-4 group-hover:bg-blue-500/20 transition-colors shadow-inner">
                <Building2 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-[13px] font-black text-white uppercase tracking-widest text-center whitespace-nowrap">{f.name}</h3>
              <p className="text-[10px] text-indigo-300 font-bold uppercase tracking-widest opacity-70 mt-1">{f.location}</p>

              <div className="mt-4 pt-4 border-t border-white/5 w-full flex justify-center">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-3 h-3 text-emerald-400 animate-pulse" />
                  <span className="text-[9px] text-emerald-400/80 font-black uppercase tracking-tighter">Synced</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
