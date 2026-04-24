import { motion } from 'motion/react';
import { Users, Megaphone, Share2 } from 'lucide-react';
import customerimage from "../../assests/customers.jpg"
import realtorimage from "../../assests/realtors.png"

export function Slide05RealtorsCustomers() {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 p-8 overflow-hidden">
      <div className="max-w-[1200px] w-full h-[650px] flex flex-col relative">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl font-bold text-white text-center mb-12"
        >
          Our Business Ecosystem
        </motion.h1>

        {/* The Diagram Container */}
        <div className="flex-1 relative mt-10">

          {/* Central Connecting Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full z-0 opacity-40 pointer-events-none" viewBox="0 0 1000 500">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#818cf8" />
              </marker>
            </defs>
            {/* Realtors to Marketing */}
            <motion.path
              d="M 280 350 L 450 150"
              stroke="#818cf8"
              strokeWidth="4"
              fill="none"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
            />
            {/* Marketing to Customers */}
            <motion.path
              d="M 550 150 L 720 350"
              stroke="#818cf8"
              strokeWidth="4"
              fill="none"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 1.5, repeat: Infinity, repeatDelay: 3 }}
            />
            {/* Customers back to Realtors */}
            <motion.path
              d="M 680 430 L 320 430"
              stroke="#818cf8"
              strokeWidth="4"
              fill="none"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 2.2, repeat: Infinity, repeatDelay: 3 }}
            />
          </svg>

          {/* Node 1: Marketing (Top Center) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-72">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-2xl rounded-3xl p-6 border border-white/20 shadow-[0_0_50px_rgba(99,102,241,0.2)] text-center group hover:bg-white/15 transition-all"
            >
              <div className="inline-flex p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-4 shadow-lg shadow-indigo-500/40 group-hover:scale-110 transition-transform">
                <Megaphone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Integrated Marketing</h3>
              <p className="text-indigo-200 text-sm font-medium">Digital Reach & Lead Gen</p>
            </motion.div>
          </div>

          {/* Node 2: Realtors/Investors (Bottom Left) */}
          <div className="absolute bottom-10 left-10 z-10 w-80">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-2xl rounded-3xl p-5 border border-white/20 shadow-xl group hover:bg-white/15 transition-all"
            >
              <div className="h-44 w-full mb-4 rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={realtorimage}
                  alt="Realtors"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-blue-500 rounded-xl shadow-lg">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Realtors/Investors</h3>
                  <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest">The Catalyst</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Node 3: Customers (Bottom Right) */}
          <div className="absolute bottom-10 right-10 z-10 w-80">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-2xl rounded-3xl p-5 border border-white/20 shadow-xl group hover:bg-white/15 transition-all"
            >
              <div className="h-44 w-full mb-4 rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={customerimage}
                  alt="Customers"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-emerald-500 rounded-xl shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Target Customers</h3>
                  <p className="text-emerald-200 text-xs font-semibold uppercase tracking-widest">The Growth</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Footer Statistics/Value Prop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-6 text-center"
        >
          <div className="inline-block px-8 py-3 bg-white/5 rounded-full border border-white/10">
            <p className="text-white font-medium">A self-sustaining loop of growth, trust, and premium service.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
