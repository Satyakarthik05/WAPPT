import { motion } from 'motion/react';
import { ShieldCheck, Zap, Users, CreditCard, ChevronRight } from 'lucide-react';

export function Slide10cAgentPricing() {
  const benefits = [
    { icon: Zap, text: "Instant Lead Access" },
    { icon: ShieldCheck, text: "Verified Partner Status" },
    { icon: Users, text: "Team Management Tools" },
    { icon: CreditCard, text: "Direct Payout Systems" }
  ];

  return (
    <div className="flex items-center justify-center h-full bg-[#030211] p-10 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
      
      <div className="max-w-[1200px] w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Value Proposition */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-4 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-bold uppercase tracking-widest"
            >
              Exclusive Agent Network
            </motion.span>
            <h1 className="text-6xl font-black text-white mt-4 leading-[1.1]">
              Wealth <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                Associates
              </span>
            </h1>
          </div>

          <p className="text-xl text-slate-400 leading-relaxed max-w-md">
            Join our professional network and unlock the full potential of the Wealth Associates Ecosystem.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 + (i * 0.1) }}
                className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl"
              >
                <div className="p-2 bg-indigo-500/20 rounded-lg">
                  <benefit.icon className="w-5 h-5 text-indigo-400" />
                </div>
                <span className="text-white font-medium text-sm">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Pricing Card */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-slate-900/80 backdrop-blur-3xl border border-white/20 rounded-[2.5rem] p-10 shadow-2-xl">
            <div className="text-center space-y-6">
              <h3 className="text-slate-400 font-bold uppercase tracking-widest text-sm">Agent Registration</h3>
              
              <div className="flex flex-col items-center">
                <div className="flex items-start">
                  <span className="text-4xl font-bold text-white mt-1 mr-1">₹</span>
                  <span className="text-9xl font-black text-white leading-none tracking-tighter">399</span>
                </div>
                <span className="text-indigo-400 font-bold text-xl mt-4">Per Year</span>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full" />

              <div className="space-y-4">
                <p className="text-slate-400 text-sm italic">
                  * Minimal verification fee for lifetime platform eligibility
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-[#030211] py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-4 group"
                >
                  START NOW
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-indigo-500 text-white px-6 py-2 rounded-full font-bold shadow-lg shadow-indigo-500/50"
            >
              Bestseller
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
