import { motion } from 'motion/react';
import { Crown, Store, ChevronRight, Share2, Network, Globe, MapPin, Building, ShieldCheck, Zap, Briefcase } from 'lucide-react';
import franchiseImg from '../../assests/real_estate_franchise_mockup_1776770096362.png';


export function Slide08hFranchiseIncome() {
  return (
    <div className="flex items-center justify-center h-full bg-[#030211] p-12 overflow-hidden relative text-white">
      {/* Background Luxury Branding Layer */}
      <div className="absolute inset-0 opacity-20 transition-opacity duration-1000 group-hover:opacity-30">
        <img src={franchiseImg} className="w-full h-full object-cover" alt="Luxury Background" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030211] via-transparent to-[#030211]" />
      </div>

      {/* Decorative Cinematic Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-blue-600/5 blur-[180px] rounded-full" />

      <div className="max-w-7xl w-full flex flex-col items-center relative z-10 h-full">

        {/* Highlighted Master Heading */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-8 relative z-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-3 mx-auto">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.3em] leading-none">Global Partnership Ecosystem</span>
          </div>
          <h1 className="text-7xl font-black text-white leading-tight tracking-tighter">
            FRANCHISE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600 animate-pulse">MODEL</span>
          </h1>
        </motion.div>

        {/* Side-by-Side Layout to prevent overlapping */}
        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 items-center relative z-10 px-4">

          {/* Left: Ecosystem Diagram (Scaled for Column) */}
          <div className="relative flex items-center justify-center min-h-[500px]">
            {/* Central Hub: Wealth Associates */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="relative z-30 group"
            >
              <div className="absolute -inset-10 bg-blue-600/20 rounded-full blur-2xl animate-pulse" />
              <div className="w-40 h-40 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded-full border-2 border-white/20 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.3)] relative overflow-hidden">
                <Globe className="w-12 h-12 text-white mb-2" />
                <span className="text-center text-[9px] font-black uppercase tracking-[0.2em] px-2 leading-tight">
                  Wealth Associates<br /><span className="text-white/60 text-[8px]">Franchisor</span>
                </span>
                <div className="absolute inset-0 border-t-2 border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
              </div>
            </motion.div>

            {/* Radiating Spokes - Increased Radius (220px) */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[
                { icon: ShieldCheck, label: "Brand", angle: 0, delay: 1.2 },
                { icon: Zap, label: "Leads", angle: 51, delay: 1.4 },
                { icon: Globe, label: "Inventory", angle: 102, delay: 1.6 },
                { icon: Briefcase, label: "Legal", angle: 153, delay: 1.8 },
                { icon: Network, label: "Tech", angle: 204, delay: 2.0 },
                { icon: Share2, label: "Marketing", angle: 255, delay: 2.2 },
                { icon: MapPin, label: "Territory", angle: 306, delay: 2.4 }
              ].map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: 1,
                    x: Math.cos((pillar.angle * Math.PI) / 180) * 230,
                    y: Math.sin((pillar.angle * Math.PI) / 180) * 230
                  }}
                  transition={{ delay: pillar.delay, duration: 0.8, type: "spring" }}
                  className="absolute flex flex-col items-center gap-2 group"
                >
                  <div className="relative">
                    <div className="absolute -inset-4 bg-indigo-500/10 rounded-full blur-xl group-hover:bg-indigo-500/30 transition-all" />
                    <div className="w-16 h-16 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center shadow-xl group-hover:border-blue-500/50 transition-all hover:scale-110">
                      <pillar.icon className="w-8 h-8 text-indigo-400 group-hover:text-blue-400" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-black text-white/80 uppercase tracking-widest leading-none">{pillar.label}</p>
                  </div>

                  {/* Connecting Line to Center */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: pillar.delay, duration: 1 }}
                    style={{
                      width: '160px',
                      height: '1px',
                      background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.15))',
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transformOrigin: 'left',
                      transform: `rotate(${pillar.angle + 180}deg) translateX(60px)`,
                      zIndex: -1
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Info Column */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.8, duration: 0.8 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl -z-10 group-hover:bg-blue-600/20 transition-all" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                  <Building className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-black text-white uppercase tracking-tighter leading-tight">Shared Success<br />Ecosystem</h2>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-6 font-medium">
                Franchising means leveraging a proven global engine. Gain immediate access to brand authority, tech infrastructure, and exclusive property inventories to dominate your territory.
              </p>
              <div className="inline-flex items-center gap-3 text-blue-400 font-black text-[10px] uppercase tracking-[0.3em] bg-blue-400/5 px-4 py-2 rounded-xl">
                <span>Revenue Stream Active</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5 }}
              className="flex items-center gap-4 px-6 py-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl"
            >
              <Share2 className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 text-[10px] uppercase font-black tracking-widest leading-none">Franchise Override Protocol Enabled</span>
            </motion.div>
          </div>

        </div>

        {/* High-impact Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          className="mt-16 flex items-center gap-8"
        >
          <div className="h-px w-32 bg-slate-800" />
          <div className="flex items-center gap-3">
            <Share2 className="w-5 h-5 text-indigo-400" />
            <span className="text-slate-500 text-[11px] font-bold uppercase tracking-[1em]">Scalable Business Infrastructure</span>
          </div>
          <div className="h-px w-32 bg-slate-800" />
        </motion.div>
      </div>

      {/* Minimalism Side Marker */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute bottom-12 left-12 flex items-center gap-4 text-slate-800 text-[9px] font-black uppercase tracking-[1.5em] rotate-0"
      >
        Strategic Franchise Protocols
      </motion.div>
    </div>
  );
}
