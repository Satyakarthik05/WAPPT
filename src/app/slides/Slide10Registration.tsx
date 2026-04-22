import { motion } from 'motion/react';
import { UserPlus, TrendingUp, Globe, User, Briefcase, CheckCircle2 } from 'lucide-react';
import registervideo from '../../assests/registervideo.mp4'

export function Slide10Registration() {
  const categories = [
    { icon: UserPlus, title: "Wealth Associate", color: "text-blue-400", bg: "bg-blue-500/10", desc: "Join as a strategic partner" },
    { icon: TrendingUp, title: "Wealth Investor", color: "text-emerald-400", bg: "bg-emerald-500/10", desc: "Unlock growth opportunities" },
    { icon: Globe, title: "Wealth NRI", color: "text-purple-400", bg: "bg-purple-500/10", desc: "Tailored for NRI clients" },
    { icon: User, title: "Wealth Customer", color: "text-orange-400", bg: "bg-orange-500/10", desc: "Find your dream property" },
    { icon: Briefcase, title: "Skilled Resource", color: "text-pink-400", bg: "bg-pink-500/10", desc: "Register as an expert" }
  ];

  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 p-6 overflow-hidden">
      <div className="max-w-[1400px] w-full h-full flex flex-col">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold text-white text-center mb-8"
        >
          Registration Categories
        </motion.h1>

        <div className="flex-1 grid md:grid-cols-2 gap-12 items-center min-h-0">
          {/* Left: Phone Frame with Registration Video */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex justify-center h-full min-h-0 py-4"
          >
            <div className="h-full max-h-[580px] aspect-[9/19.5] bg-slate-800 rounded-[2.5rem] p-2 border-4 border-slate-700 shadow-[0_0_50px_rgba(79,70,229,0.2)] relative group">
              <div className="w-full h-full bg-black rounded-[2.1rem] overflow-hidden relative">
                <video
                  src={registervideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Phone Notch/Speaker Area */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-slate-700/50 rounded-full blur-[1px]"></div>
            </div>
          </motion.div>

          {/* Right: Registration Content */}
          <div className="space-y-4 flex flex-col justify-center h-full min-h-0">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl overflow-y-auto max-h-full scrollbar-hide"
            >
              <div className="flex items-center gap-4 mb-6 sticky top-0 bg-white/5 backdrop-blur-md p-2 rounded-xl border border-white/10 z-10 shadow-sm">
                <div className="p-3 bg-indigo-500 rounded-2xl shadow-lg shadow-indigo-500/20">
                  <UserPlus className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">Onboarding Process</h3>
                  <p className="text-indigo-300 text-xs font-medium">Simple 3-Step Registration</p>
                </div>
              </div>

              <div className="space-y-3">
                {categories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className={`bg-white/5 border border-white/10 rounded-2xl p-3 flex items-center gap-4 hover:bg-white/10 transition-all group cursor-default shadow-sm hover:shadow-indigo-500/10`}
                  >
                    <div className={`${category.bg} p-2.5 rounded-xl group-hover:scale-110 transition-transform shadow-inner`}>
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider">{category.title}</h3>
                      <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">{category.desc}</p>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500/40 group-hover:text-emerald-500 transition-colors" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-center px-6 py-3 bg-white/5 rounded-full border border-white/10"
            >
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Select your path to wealth creation</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
