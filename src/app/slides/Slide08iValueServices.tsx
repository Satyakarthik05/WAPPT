import { motion } from 'motion/react';
import { LifeBuoy, Sparkles, ChevronRight, Tool, Home, ShieldCheck, Zap, HeartHandshake, Briefcase } from 'lucide-react';

export function Slide08iValueServices() {
  const serviceCategories = [
    {
      title: "Additional Services",
      desc: "Comprehensive suite of support services including legal assistance, mortgage facilitation, and insurance protocols.",
      icon: LifeBuoy,
      color: "from-indigo-600 to-blue-700",
      delay: 0.1,
      features: ["Legal Advisory", "Financial Sourcing", "Risk Management"]
    },
    {
      title: "Value-Add Services",
      desc: "Transforming assets through professional interior design, architectural renovation, and property management.",
      icon: Sparkles,
      color: "from-purple-600 to-pink-600",
      delay: 0.3,
      features: ["Interior Staging", "Renovation Logic", "Asset Management"]
    }
  ];

  return (
    <div className="flex items-center justify-center h-full bg-[#030211] p-12 overflow-hidden relative text-white">
      {/* Background Cinematic Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] bg-indigo-600/5 blur-[160px] rounded-full" />
      
      <div className="max-w-6xl w-full relative z-10 flex flex-col items-center">
        
        {/* Top Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
           <h1 className="text-7xl font-black text-white uppercase tracking-tighter mb-4">
             Value-Added <span className="text-indigo-400">Services</span>
           </h1>
           <div className="h-1.5 w-32 bg-indigo-500/50 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          {serviceCategories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: cat.delay }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-b ${cat.color} rounded-[3rem] blur opacity-10 group-hover:opacity-40 transition duration-500`} />
              
              <div className="relative h-full bg-slate-900/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-12 flex flex-col items-center text-center hover:bg-slate-900/60 transition-all duration-500 hover:border-white/20 pb-12">
                
                {/* Top Icon Section */}
                <div className="relative mb-12 mt-4">
                  <div className={`absolute -inset-8 bg-gradient-to-br ${cat.color} rounded-full blur-3xl opacity-20 animate-pulse`} />
                  <div className={`w-36 h-36 rounded-3xl bg-gradient-to-br ${cat.color} flex items-center justify-center relative shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                    <cat.icon className="w-16 h-16 text-white" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col items-center">
                  <h3 className="text-4xl font-black mb-8 leading-tight tracking-tighter uppercase whitespace-normal">
                    {cat.title}
                  </h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10" />
                  <p className="text-slate-400 text-lg leading-relaxed font-medium px-6 mb-10 italic">
                    {cat.desc}
                  </p>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap justify-center gap-3">
                     {cat.features.map((feat, i) => (
                       <div key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-indigo-300">
                         {feat}
                       </div>
                     ))}
                  </div>
                </div>

                {/* Bottom Interactive Element */}
                <div className="mt-12 pt-8 border-t border-white/5 w-full flex flex-col items-center gap-4">
                   <div className="flex items-center gap-2 text-[12px] font-black uppercase tracking-[0.4em] text-indigo-400 group-hover:text-white transition-colors whitespace-nowrap">
                      Value Extraction active
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
           className="mt-20 flex items-center gap-6"
        >
           <div className="h-px w-24 bg-slate-800" />
           <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-indigo-400" />
              <span className="text-slate-500 text-[11px] font-black uppercase tracking-[1em]">Strategic Service Ecosystem</span>
           </div>
           <div className="h-px w-24 bg-slate-800" />
        </motion.div>
      </div>
    </div>
  );
}
