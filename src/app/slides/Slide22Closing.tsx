import { motion } from 'motion/react';
import { Laptop, Code, Zap, Shield, Cpu, Layers, Activity, HardDrive, Terminal, Globe, Smartphone, Database } from 'lucide-react';
import kriyalogo from "../../assests/kriya.jpeg"

export function Slide22Closing() {
   const techStacks = [
      { icon: Smartphone, label: "Mobile Apps", color: "text-blue-400" },
      { icon: Globe, label: "Web Platforms", color: "text-purple-400" },
      { icon: Database, label: "Cloud Infra", color: "text-emerald-400" },
      { icon: Shield, label: "System Security", color: "text-red-400" }
   ];

   return (
      <div className="flex items-center justify-center min-h-full h-auto bg-[#030211] p-6 md:p-12 overflow-y-auto md:overflow-y-auto md:overflow-hidden relative text-white">
         {/* Background Animated Data Nodes (Decorative) */}
         <div className="absolute inset-0 opacity-10">
            <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1500px] h-[800px] md:h-[1500px] border border-blue-500/20 rounded-full border-dashed"
            />
         </div>

         <div className="max-w-7xl w-full relative z-10 flex flex-col items-center py-12 md:py-0">

            {/* Top Branding Section */}
            <div className="flex flex-col items-center mb-8 md:mb-6 md:mb-12">
               <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", bounce: 0.5, duration: 1 }}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-3xl p-5 mb-4 md:mb-6"
               >
                  <img src={kriyalogo} alt="Kriya Logo" className="w-full h-full object-contain filter " />
               </motion.div>
               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl md:text-2xl md:text-4xl md:text-6xl font-black tracking-tighter uppercase mb-2 text-center"
               >
                  KRIYA IT <span className="text-blue-500">SOLUTIONS</span>
               </motion.h1>
               <p className="text-blue-200 text-[10px] md:text-sm font-black uppercase tracking-[0.4em] md:tracking-[0.8em] opacity-60 text-center">Technology Ecosystem Partner</p>
            </div>

            {/* Main Tech Dashboard Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 md:p-8 w-full items-stretch">

               {/* Left: Core Capabilities */}
               <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-4 md:p-8 flex flex-col justify-between"
               >
                  <div>
                     <div className="flex items-center gap-3 mb-6">
                        <Terminal className="w-6 h-6 text-blue-400" />
                        <h3 className="text-xl font-black uppercase tracking-widest text-white">Full-Stack Core</h3>
                     </div>
                     <div className="space-y-4">
                        {["Proprietary Real Estate Logic", "Seamless Multi-App Sync", "Advanced Lead Algorithms", "Automated Revenue Streams"].map((item, i) => (
                           <div key={i} className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                              <span className="text-slate-400 text-[13px] font-bold uppercase tracking-wider">{item}</span>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/5">
                     <p className="text-slate-500 text-[10px] uppercase font-black leading-relaxed tracking-widest">
                        Building the digital foundation for the next generation of real estate.
                     </p>
                  </div>
               </motion.div>

               {/* Center: Hero Animation / Node Link */}
               <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="relative flex items-center justify-center min-h-[350px]"
               >
                  {/* Pulsing Core */}
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
                     <Cpu className="w-48 h-48 text-blue-500 opacity-20" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-8 relative z-10 w-full px-8">
                     {techStacks.map((tech, i) => (
                        <motion.div
                           key={i}
                           whileHover={{ scale: 1.1, y: -5 }}
                           className="bg-slate-900/80 border border-white/10 p-6 rounded-3xl flex flex-col items-center gap-3 text-center"
                        >
                           <tech.icon className={`w-8 h-8 ${tech.color}`} />
                           <span className="text-[10px] font-black uppercase tracking-widest text-white">{tech.label}</span>
                        </motion.div>
                     ))}
                  </div>
               </motion.div>

               {/* Right: Technical Stats / Infrastructure */}
               <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-4 md:p-8 flex flex-col justify-between"
               >
                  <div>
                     <div className="flex items-center gap-3 mb-6">
                        <Activity className="w-6 h-6 text-indigo-400" />
                        <h3 className="text-xl font-black uppercase tracking-widest text-white">System Health</h3>
                     </div>
                     <div className="space-y-6">
                        <div>
                           <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2">
                              <span>Architecture Stability</span>
                              <span className="text-emerald-400">99.9%</span>
                           </div>
                           <div className="h-1 w-full bg-white/5 rounded-full overflow-y-auto md:overflow-hidden">
                              <motion.div initial={{ width: 0 }} animate={{ width: "99.9%" }} transition={{ duration: 2 }} className="min-h-full h-auto bg-emerald-500" />
                           </div>
                        </div>
                        <div>
                           <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2">
                              <span>Security Protocol</span>
                              <span className="text-blue-400">Military Grade</span>
                           </div>
                           <div className="h-1 w-full bg-white/5 rounded-full overflow-y-auto md:overflow-hidden">
                              <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 2, delay: 0.5 }} className="min-h-full h-auto bg-blue-500" />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3">
                     <Shield className="w-5 h-5 text-emerald-400" />
                     <span className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">Enterprise Ready</span>
                  </div>
               </motion.div>

            </div>

            {/* Global Connectivity Footer (Replaces Thank You) */}
             <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-8 md:mt-16 w-full max-w-4xl bg-blue-600/5 border border-blue-600/20 rounded-[2.5rem] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 md:p-8"
             >
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
                   <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-2xl flex items-center justify-center">
                      <Layers className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                   </div>
                   <div>
                      <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter mb-1">Unified Infrastructure</h2>
                      <p className="text-slate-500 text-xs md:text-sm font-medium">Powering global transactions via Kriya IT.</p>
                   </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center md:text-right">
                   <div>
                      <p className="text-slate-600 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-1">Web Interface</p>
                      <a href="https://kriyaitsolutions.com/" target="_blank" className="text-white font-black text-base md:text-xl hover:text-blue-400 transition-colors">kriyaitsolutions.com</a>
                   </div>
                   <div className="hidden md:block h-12 w-px bg-white/10" />
                   <div>
                      <p className="text-slate-600 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-1">Direct Support</p>
                      <p className="text-white font-black text-base md:text-xl whitespace-nowrap">+91 7796356789</p>
                   </div>
                </div>
             </motion.div>

            {/* Bottom Bar */}
            <div className="mt-12 flex items-center gap-10 text-slate-800 text-[10px] font-black uppercase tracking-[1em]">
               <div className="h-px w-32 bg-slate-900" />
               Digital Core v4.0.0
               <div className="h-px w-32 bg-slate-900" />
            </div>
         </div>
      </div>
   );
}




