import { motion } from 'motion/react';
import { LayoutDashboard, BarChart3, FileText, Settings, Bell, Search } from 'lucide-react';
import dashboardvideo from '../../assests/dashboard.mp4'

export function Slide11Dashboard() {
  const features = [
    { icon: LayoutDashboard, title: "Dashboard Overview", desc: "Real-time analytics" },
    { icon: BarChart3, title: "Performance Metrics", desc: "Track your progress" },
    { icon: FileText, title: "Property Management", desc: "Manage listings" },
    { icon: Bell, title: "Notifications", desc: "Stay updated" },
    { icon: Search, title: "Advanced Search", desc: "Find properties" },
    { icon: Settings, title: "Settings & Controls", desc: "Customize experience" }
  ];

  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 p-6 overflow-hidden">
      <div className="max-w-[1400px] w-full h-full flex flex-col">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold text-white text-center mb-6"
        >
          Dashboard Features
        </motion.h1>

        <div className="flex-1 grid md:grid-cols-2 gap-12 items-center min-h-0">
          {/* Left: Phone Frame with Dashboard Video */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex flex-col items-center h-full min-h-0 py-4"
          >
            <div className="h-full max-h-[600px] aspect-[9/19.5] bg-slate-800 rounded-[2.5rem] p-2 border-4 border-slate-700 shadow-[0_0_50px_rgba(99,102,241,0.2)] relative group mb-6">
              <div className="w-full h-full bg-black rounded-[2.1rem] overflow-hidden relative">
                <video
                  src={dashboardvideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-slate-700/50 rounded-full blur-[1px]"></div>
            </div>

            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 text-center max-w-sm"
            >
              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tighter">User-Friendly Interface</h3>
              <p className="text-indigo-200 text-[11px] leading-snug font-medium">
                Our intuitive dashboard provides a comprehensive view of all your real estate
                activities. Monitor properties, track investments, manage leads, and access
                analytics—all from one powerful interface.
              </p>
            </motion.div> */}
          </motion.div>

          {/* Right: Feature Grid */}
          <div className="h-full flex flex-col justify-center min-h-0">
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-all group shadow-xl"
                >
                  <div className="inline-block p-2.5 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl mb-3 shadow-lg group-hover:scale-110 transition-transform">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wider">{feature.title}</h4>
                  <p className="text-indigo-200/60 text-[10px] uppercase font-bold tracking-tight">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
