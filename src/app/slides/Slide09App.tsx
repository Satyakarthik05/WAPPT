import { motion } from 'motion/react';
import { Smartphone, Globe, Users, Headphones, TrendingUp, CheckCircle } from 'lucide-react';
import appIntroVideo from '../../assests/introvideo.mp4'

export function Slide09App() {
  const features = [
    { icon: Globe, title: "360° Services", desc: "Real estate solutions" },
    { icon: Users, title: "Integrated Marketing Network", desc: "Connected pros" },
    { icon: Headphones, title: "Call Center", desc: "24/7 support" },
    { icon: TrendingUp, title: "Investments", desc: "Growth ops" }
  ];

  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 p-6 overflow-hidden">
      <div className="max-w-[1400px] w-full h-full flex flex-col">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold text-white text-center mb-8"
        >
          Wealth Associates Mobile App
        </motion.h1>

        <div className="flex-1 grid md:grid-cols-2 gap-12 items-center min-h-0">
          {/* Left: Phone Frame with Video */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex justify-center h-full min-h-0 py-4"
          >
            <div className="h-full max-h-[580px] aspect-[9/19.5] bg-slate-800 rounded-[2.5rem] p-2 border-4 border-slate-700 shadow-[0_0_50px_rgba(59,130,246,0.2)] relative group">
              <div className="w-full h-full bg-black rounded-[2.1rem] overflow-hidden relative">
                <video
                  src={appIntroVideo}
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

          {/* Right: Feature Content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-6 flex flex-col justify-center h-full"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500 rounded-2xl shadow-lg shadow-blue-500/20">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tight leading-tight">Full Ecosystem Platform</h3>
                  <p className="text-blue-300 text-sm font-medium">Powering Your Real Estate Journey</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="bg-white/5 rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all group"
                  >
                    <feature.icon className="w-6 h-6 mb-2 text-blue-400 group-hover:scale-110 transition-transform" />
                    <p className="text-white font-bold text-xs mb-1 uppercase tracking-wider">{feature.title}</p>
                    <p className="text-blue-200/60 text-[10px] leading-tight font-medium uppercase">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl p-6 border border-white/10 backdrop-blur-sm"
            >
              <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-tighter">Core App Capabilities</h4>
              <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                {[
                  "Smart Property Listing",
                  "Verified Agent Connect",
                  "Investment Portfolio",
                  "Digital Documentation",
                  "24/7 Priority Support",
                  "Real-time Notifications"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-white/80 text-xs font-semibold uppercase tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
