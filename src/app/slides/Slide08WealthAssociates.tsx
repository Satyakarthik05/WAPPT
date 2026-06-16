import { motion } from 'motion/react';
import { Plus, TrendingUp, Shield, Map, Palette, Target, Users } from 'lucide-react';

export function Slide08WealthAssociates() {
  const functions = [
    { icon: Map, title: "Land Acquisition", desc: "Strategic property sourcing" },
    { icon: Palette, title: "Project Designing", desc: "Innovative layouts & planning" },
    { icon: Target, title: "Marketing Execution", desc: "Comprehensive campaigns" }
  ];

  return (
    <div className="flex items-center justify-center h-full min-h-full w-full bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-4 md:p-6 overflow-y-auto md:overflow-hidden">
      <div className="max-w-5xl w-full py-2 flex flex-col justify-between h-full max-h-full">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-3 md:mb-5"
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1">Wealth Associates Ecosystem</h1>
          <p className="text-xs md:text-base text-blue-200">Organized Marketing Platform for Real Estate Excellence</p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-4 md:p-6 mb-4 border border-white/20 relative overflow-hidden"
        >
          <div className="relative w-full h-[220px] md:h-[260px] mx-auto max-w-md">
            {/* SVG Background Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" fill="none">
              <defs>
                <linearGradient id="line-top" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4ADE80" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="line-left" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="line-right" x1="1" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#EC4899" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Connecting outer triangle dash lines */}
              <line x1="50%" y1="15%" x2="15%" y2="80%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 3" />
              <line x1="50%" y1="15%" x2="85%" y2="80%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 3" />
              <line x1="15%" y1="80%" x2="85%" y2="80%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 3" />

              {/* Solid gradient lines to center CIP logo */}
              <line x1="50%" y1="15%" x2="50%" y2="50%" stroke="url(#line-top)" strokeWidth="3" />
              <line x1="15%" y1="80%" x2="50%" y2="50%" stroke="url(#line-left)" strokeWidth="3" />
              <line x1="85%" y1="80%" x2="50%" y2="50%" stroke="url(#line-right)" strokeWidth="3" />
            </svg>

            {/* Top Node: CREATE */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="absolute top-[2%] left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/20 border border-white/20">
                <Plus className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={3} />
              </div>
              <span className="mt-1 text-[10px] md:text-xs font-black text-white tracking-wider">CREATE</span>
            </motion.div>

            {/* Bottom Left Node: IMPROVE */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="absolute bottom-[2%] left-[2%] flex flex-col items-center z-10"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20 border border-white/20">
                <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={3} />
              </div>
              <span className="mt-1 text-[10px] md:text-xs font-black text-white tracking-wider">IMPROVE</span>
            </motion.div>

            {/* Bottom Right Node: PROTECT */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="absolute bottom-[2%] right-[2%] flex flex-col items-center z-10"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/20 border border-white/20">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={3} />
              </div>
              <span className="mt-1 text-[10px] md:text-xs font-black text-white tracking-wider">PROTECT</span>
            </motion.div>

            {/* Center Node: CIP Logo */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
            >
              <div className="relative group">
                {/* Glowing glow ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 rounded-xl blur-sm opacity-80 group-hover:opacity-100 transition duration-500"></div>
                {/* Logo Box */}
                <div className="relative w-14 h-14 md:w-18 md:h-18 rounded-xl bg-slate-950 border border-white/30 flex flex-col items-center justify-center shadow-2xl">
                  <span className="text-lg md:text-xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent tracking-tighter">
                    CIP
                  </span>
                  <span className="text-[7px] md:text-[8px] text-slate-400 font-extrabold tracking-widest uppercase mt-0.5">
                    CONCEPT
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {functions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-3 md:p-4 border border-white/20 hover:bg-white/20 transition-all flex items-center md:flex-col md:text-center gap-3"
            >
              <div className="inline-block p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shrink-0">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-bold text-white mb-0.5">{item.title}</h3>
                <p className="text-[11px] md:text-xs text-blue-200 leading-tight">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-4 border border-white/20"
        >
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-5 h-5 text-white" />
            <h3 className="text-sm md:text-base font-bold text-white">Complete Support System</h3>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[11px] md:text-xs text-blue-100">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
              End-to-end project management
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
              Legal & documentation support
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
              Financial planning assistance
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
              Customer relationship management
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
