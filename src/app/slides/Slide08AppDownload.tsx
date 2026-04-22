import { motion } from 'motion/react';
import { QrCode, Smartphone, Apple, Play } from 'lucide-react';
import playstore from '../../assests/playstore.jpeg';
import appstore from '../../assests/appstore.jpeg';

export function Slide08AppDownload() {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 p-8 overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col items-center">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Seamless Mobile Experience
          </h1>
          <p className="text-xl text-indigo-200 opacity-90 max-w-2xl mx-auto font-medium">
            Scan to download our app and manage your real estate investments on the go.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 w-full max-w-4xl">
          {/* Play Store */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-colors duration-500 rounded-full" />
            <div className="relative bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/10 shadow-2xl flex flex-col items-center border-b-blue-500/30 ring-1 ring-white/10">
              <div className="bg-white p-6 rounded-3xl shadow-[0_0_50px_rgba(59,130,246,0.3)] mb-8 transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src={playstore}
                />
              </div>

              <div className="flex items-center gap-4 bg-slate-900 px-6 py-3 rounded-2xl border border-white/5 hover:bg-slate-800 transition-colors cursor-pointer shadow-xl ring-1 ring-white/10">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest leading-none mb-1">Get it on</p>
                  <p className="text-xl text-white font-bold leading-none">Google Play</p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-blue-400">
                <Smartphone className="w-4 h-4 ml-1" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Android App</span>
              </div>
            </div>
          </motion.div>

          {/* App Store */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-purple-500/10 blur-3xl group-hover:bg-purple-500/20 transition-colors duration-500 rounded-full" />
            <div className="relative bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/10 shadow-2xl flex flex-col items-center border-b-purple-500/30 ring-1 ring-white/10">
              <div className="bg-white p-6 rounded-3xl shadow-[0_0_50px_rgba(168,85,247,0.3)] mb-8 transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src={appstore}
                />
              </div>

              <div className="flex items-center gap-4 bg-slate-900 px-6 py-3 rounded-2xl border border-white/5 hover:bg-slate-800 transition-colors cursor-pointer shadow-xl ring-1 ring-white/10">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Apple className="w-6 h-6 text-white fill-white" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest leading-none mb-1">Download on the</p>
                  <p className="text-xl text-white font-bold leading-none">App Store</p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-purple-400">
                <Smartphone className="w-4 h-4 ml-1" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">iOS App</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 flex items-center gap-6 px-8 py-3 bg-white/5 rounded-full border border-white/10"
        >
          <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">Scanning is the fastest way to start</p>
        </motion.div>
      </div>
    </div>
  );
}
