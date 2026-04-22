import { motion } from 'motion/react';
import { Database, LineChart, CheckCircle } from 'lucide-react';
import trueanalysis from '../../assests/trueanalysis.mp4';
import trueproperty from '../../assests/trueproperty.mp4';

export function TrueSlide() {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 p-6 overflow-hidden relative">
      <div className="max-w-[1400px] w-full h-full flex flex-col relative z-10">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold text-white text-center mb-8 uppercase tracking-widest"
        >
          True Perspective
        </motion.h1>

        <div className="flex-1 grid grid-cols-[1fr_2fr_1fr] gap-12 items-center min-h-0 relative">

          {/* Connection Lines (SVG) */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg width="100%" height="100%" viewBox="0 0 1400 800" fill="none" preserveAspectRatio="none" className="opacity-80">
              {/* Line: Property -> Left Phone */}
              <motion.path
                d="M400 300 C300 300, 250 400, 200 400"
                stroke="url(#grad1)"
                strokeWidth="3"
                strokeDasharray="8 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              <motion.circle r="5" fill="#3b82f6" className="shadow-[0_0_15px_rgba(59,130,246,1)]">
                <animateMotion
                  path="M400 300 C300 300, 250 400, 200 400"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </motion.circle>

              {/* Line: Analysis -> Right Phone */}
              <motion.path
                d="M1000 500 C1100 500, 1150 400, 1200 400"
                stroke="url(#grad2)"
                strokeWidth="3"
                strokeDasharray="8 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.7 }}
              />
              <motion.circle r="5" fill="#6366f1" className="shadow-[0_0_15px_rgba(99,102,241,1)]">
                <animateMotion
                  path="M1000 500 C1100 500, 1150 400, 1200 400"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </motion.circle>

              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="1" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Left: Phone Preview 1 */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="h-full flex items-center justify-center min-h-0 py-4 relative z-10"
          >
            <div className="h-full max-h-[580px] aspect-[9/19.5] bg-slate-800 rounded-[2.5rem] p-2 border-4 border-slate-700 shadow-[0_0_50px_rgba(59,130,246,0.3)] relative group">
              <div className="w-full h-full bg-black rounded-[2.1rem] overflow-hidden relative">
                <video src={trueproperty} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-slate-700/50 rounded-full blur-[1px]"></div>
            </div>
          </motion.div>

          {/* Center: Analysis Cards */}
          <div className="flex flex-col gap-12 h-full justify-center relative z-10">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl hover:bg-white/15 transition-all group max-w-sm self-start"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-500 rounded-2xl shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl font-bold text-white uppercase tracking-wider">True Property</h2>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Verified property data engine that ensures every listing meets the highest standards of accuracy and legal compliance.
              </p>
              <div className="flex items-center gap-2 text-blue-400">
                <CheckCircle className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Dataset Verified</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl hover:bg-white/15 transition-all group max-w-sm self-end"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-indigo-500 rounded-2xl shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
                  <LineChart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl font-bold text-white uppercase tracking-wider">True Analysis</h2>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Advanced market analysis tools that provide real-time investment insights and future valuation forecasting.
              </p>
              <div className="flex items-center gap-2 text-indigo-400">
                <CheckCircle className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">AI-Powered Insights</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Phone Preview 2 */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="h-full flex items-center justify-center min-h-0 py-4 relative z-10"
          >
            <div className="h-full max-h-[580px] aspect-[9/19.5] bg-slate-800 rounded-[2.5rem] p-2 border-4 border-slate-700 shadow-[0_0_50px_rgba(79,70,229,0.3)] relative group">
              <div className="w-full h-full bg-black rounded-[2.1rem] overflow-hidden relative">
                <video src={trueanalysis} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-slate-700/50 rounded-full blur-[1px]"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
