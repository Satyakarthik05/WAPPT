import { motion } from 'motion/react';
import { FilePlus, MessageSquare, Home, TrendingUp, ChevronRight } from 'lucide-react';

export function Slide08dOtherIncome() {
  const options = [
    {
      title: "Property Posting",
      desc: "Earn high-value commissions by listing and verifying premium properties.",
      icon: FilePlus,
      color: "from-blue-600 to-indigo-600",
      delay: 0.1
    },
    {
      title: "Property Request",
      desc: "Help customers find their perfect match by fulfilling specific search requests.",
      icon: MessageSquare,
      color: "from-purple-600 to-pink-600",
      delay: 0.2
    },
    {
      title: "Rental Income",
      desc: "Facilitate long and short-term rental transactions for monthly earnings.",
      icon: Home,
      color: "from-emerald-600 to-teal-600",
      delay: 0.3
    },
    {
      title: "Investment & Holding",
      desc: "Build wealth through strategic property appreciation and asset holding.",
      icon: TrendingUp,
      color: "from-orange-600 to-amber-600",
      delay: 0.4
    }
  ];

  return (
    <div className="flex items-center justify-center h-full bg-[#030211] p-12 overflow-hidden relative text-white">
      {/* Background Cinematic Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 blur-[150px] rounded-full" />
      
      <div className="max-w-7xl w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: option.delay }}
              className="group relative h-[620px]"
            >
              {/* Card Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-b ${option.color} rounded-[2.5rem] blur opacity-10 group-hover:opacity-40 transition duration-500`} />
              
              <div className="relative h-full bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 flex flex-col items-center text-center overflow-hidden hover:bg-slate-900/60 transition-all duration-500 hover:border-white/20">
                
                {/* Top Icon Section */}
                <div className="relative mb-12 mt-4">
                  <div className={`absolute -inset-4 bg-gradient-to-br ${option.color} rounded-3xl blur-xl opacity-20 animate-pulse`} />
                  <div className={`w-28 h-28 rounded-3xl bg-gradient-to-br ${option.color} flex items-center justify-center relative shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                    <option.icon className="w-14 h-14 text-white" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col items-center">
                  <h3 className="text-3xl font-black mb-8 leading-tight tracking-tighter uppercase">
                    {option.title}
                  </h3>
                  <div className="h-1 w-12 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />
                  <p className="text-slate-400 text-lg leading-relaxed font-medium px-4">
                    {option.desc}
                  </p>
                </div>

                {/* Bottom Interactive Element */}
                <div className="mt-8 pt-8 border-t border-white/5 w-full flex flex-col items-center gap-4">
                   <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.4em] text-indigo-400 group-hover:text-white transition-colors">
                      Earning Model 
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   </div>
                   <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-indigo-500 transition-colors" />
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
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-6 text-slate-600 text-[10px] font-black uppercase tracking-[0.8em] whitespace-nowrap"
        >
          <div className="h-px w-16 bg-slate-800" />
          Income Streams Professional Protocol
          <div className="h-px w-16 bg-slate-800" />
        </motion.div>
      </div>
    </div>
  );
}



