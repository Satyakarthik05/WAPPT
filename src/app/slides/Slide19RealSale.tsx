import { motion } from 'motion/react';
import { FileText, Layout, CheckSquare, DollarSign, Layers, PenTool, IndianRupee } from 'lucide-react';

export function Slide19RealSale() {
  const features = [
    { icon: Layout, title: "2D Layouts", desc: "Detailed floor plans" },
    { icon: Layers, title: "3D Visualization", desc: "Realistic property views" },
    { icon: PenTool, title: "Booking System", desc: "Online reservations" },
    { icon: CheckSquare, title: "Agreement", desc: "Digital documentation" },
    { icon: FileText, title: "Registration", desc: "Legal processing" }
  ];

  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-900 to-cyan-900 p-6 overflow-hidden">
      <div className="max-w-6xl w-full">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-white text-center mb-6"
        >
          Real Sale Application
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
                  <IndianRupee className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Value Associate Subscription</h2>
                  <p className="text-cyan-200 text-sm">Annual membership</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-4 text-center mb-4">
                <div className="text-3xl font-bold text-white mb-1">₹10,000</div>
                <p className="text-lg text-white opacity-90">/year</p>
              </div>

              <div className="bg-white/10 rounded-xl p-3 mb-3">
                <h3 className="text-lg font-bold text-white mb-2">Pricing Structure</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-cyan-200">Per Square Yard  After sale</span>
                  <span className="text-xl font-bold text-white">₹4</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-4 text-white">
              <h3 className="text-lg font-bold mb-3">Benefits</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Complete transaction management
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Legal documentation support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Digital agreement generation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Registration assistance
                </li>
                {/* <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Transparent pricing
                </li> */}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 h-130 ">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Key Features</h3>
              <div className="space-y-2">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3 bg-white/10 rounded-xl p-2 hover:bg-white/20 transition-all h-20"
                  >
                    <div className="p-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-bold">{feature.title}</h4>
                      <p className="text-cyan-200 text-xs">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* 
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Complete Solution</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-1">📐 Design & Planning</p>
                  <p className="text-sm text-gray-600">Professional 2D/3D layouts</p>
                </div>
                <div className="bg-cyan-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-1">📝 Documentation</p>
                  <p className="text-sm text-gray-600">All legal paperwork handled</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-1">✅ Registration</p>
                  <p className="text-sm text-gray-600">End-to-end support</p>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
