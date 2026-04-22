import { motion } from 'motion/react';
import { Plus, TrendingUp, Shield, Map, Palette, Target, Users } from 'lucide-react';

export function Slide08WealthAssociates() {
  const functions = [
    { icon: Map, title: "Land Acquisition", desc: "Strategic property sourcing" },
    { icon: Palette, title: "Project Designing", desc: "Innovative layouts & planning" },
    { icon: Target, title: "Marketing Execution", desc: "Comprehensive campaigns" }
  ];

  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-16 overflow-auto">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-bold text-white mb-4">Wealth Associates Ecosystem</h1>
          <p className="text-2xl text-blue-200">Organized Marketing Platform for Real Estate Excellence</p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-white/20"
        >
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-3">
                <Plus className="w-12 h-12 text-white" strokeWidth={3} />
              </div>
              <h3 className="text-3xl font-bold text-white">CREATE</h3>
            </div>

            <div className="text-6xl text-white/30">•</div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-3">
                <TrendingUp className="w-12 h-12 text-white" strokeWidth={3} />
              </div>
              <h3 className="text-3xl font-bold text-white">IMPROVE</h3>
            </div>

            <div className="text-6xl text-white/30">•</div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mb-3">
                <Shield className="w-12 h-12 text-white" strokeWidth={3} />
              </div>
              <h3 className="text-3xl font-bold text-white">PROTECT</h3>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {functions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="inline-block p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-4">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-blue-200">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
        >
          <div className="flex items-center gap-4 mb-4">
            <Users className="w-8 h-8 text-white" />
            <h3 className="text-2xl font-bold text-white">Complete Support System</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-blue-100">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              End-to-end project management
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              Legal & documentation support
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              Financial planning assistance
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              Customer relationship management
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
