import { motion } from 'motion/react';
import { Smartphone, Layout, ChevronRight, BarChart3, Globe, Shield } from 'lucide-react';

export function Slide08fAppIncome() {
  const options = [
    {
      title: "True Properties",
      desc: "Unlock exclusive revenue streams by facilitating verified property listings and digital transactions within the True Properties ecosystem.",
      icon: Smartphone,
      color: "from-blue-600 to-cyan-500",
      delay: 0.1
    },
    {
      title: "Real Sale",
      desc: "Maximize your sales velocity and earn high-tier rewards through the advanced Real Sale application's strategic matching system.",
      icon: Layout,
      color: "from-orange-600 to-red-500",
      delay: 0.2
    }
  ];

  return (
    <div className="flex items-center justify-center h-full bg-[#030211] p-12 overflow-hidden relative text-white">
      {/* Background Cinematic Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 blur-[150px] rounded-full" />
      
      <div className="max-w-5xl w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: option.delay }}
              className="group relative min-h-[600px]"
            >
              {/* Card Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-b ${option.color} rounded-[3rem] blur opacity-10 group-hover:opacity-40 transition duration-500`} />
              
              <div className="relative h-full bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 flex flex-col items-center text-center overflow-hidden hover:bg-slate-900/60 transition-all duration-500 hover:border-white/20 pb-12">
                
                {/* Top Icon Section */}
                <div className="relative mb-12 mt-4">
                  <div className={`absolute -inset-8 bg-gradient-to-br ${option.color} rounded-full blur-3xl opacity-20 animate-pulse`} />
                  <div className={`w-36 h-36 rounded-3xl bg-gradient-to-br ${option.color} flex items-center justify-center relative shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                    <option.icon className="w-16 h-16 text-white" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col items-center">
                  <h3 className="text-4xl font-black mb-8 leading-tight tracking-tighter uppercase whitespace-normal">
                    {option.title}
                  </h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10" />
                  <p className="text-slate-400 text-xl leading-relaxed font-medium px-6">
                    {option.desc}
                  </p>
                </div>

                {/* Bottom Interactive Element */}
                <div className="mt-10 pt-10 border-t border-white/5 w-full flex flex-col items-center gap-4">
                   <div className="flex items-center gap-2 text-[12px] font-black uppercase tracking-[0.4em] text-indigo-400 group-hover:text-white transition-colors whitespace-nowrap">
                      App Ecosystem Income
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                   </div>
                   <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-indigo-500 transition-colors" />
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimalist Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute -bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-10 text-slate-600 text-[11px] font-black uppercase tracking-[1.2em] whitespace-nowrap"
        >
          <div className="h-px w-24 bg-slate-800" />
          Digital Platform Revenue Protocols
          <div className="h-px w-24 bg-slate-800" />
        </motion.div>
      </div>
    </div>
  );
}
