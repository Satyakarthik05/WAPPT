import { motion } from 'motion/react';
import { Package, DollarSign, MapPin, Megaphone, Eye, ShieldCheck, Users } from 'lucide-react';

export function Slide06Marketing() {
  const fourPs = [
    { icon: Package, label: "Product", color: "from-blue-500 to-blue-600" },
    { icon: DollarSign, label: "Price", color: "from-green-500 to-green-600" },
    { icon: MapPin, label: "Place", color: "from-purple-500 to-purple-600" },
    { icon: Megaphone, label: "Promotion", color: "from-pink-500 to-pink-600" }
  ];

  const marketingTypes = [
    { name: "Conventional Marketing", desc: "Traditional advertising methods" },
    { name: "Agent Marketing", desc: "Network-based promotions" },
    { name: "Direct Marketing", desc: "Targeted customer outreach" },
    { name: "Referral Marketing", desc: "Word-of-mouth growth" },
    { name: "Digital Marketing", desc: "Online and social media" }
  ];

  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-slate-50 to-purple-50 p-16">
      <div className="max-w-6xl w-full">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold text-gray-900 text-center mb-8"
        >
          Marketing Strategy
        </motion.h1>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-center mb-8"
        >
          <div className="flex items-center justify-center gap-4 text-white text-2xl font-semibold">
            <Eye className="w-8 h-8" />
            <span>Visibility</span>
            <span>+</span>
            <ShieldCheck className="w-8 h-8" />
            <span>Trust</span>
            <span>+</span>
            <Users className="w-8 h-8" />
            <span>Leads</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Four P's</h3>
            <div className="grid grid-cols-2 gap-4">
              {fourPs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className={`bg-gradient-to-br ${item.color} rounded-xl p-6 text-center text-white`}
                >
                  <item.icon className="w-10 h-10 mx-auto mb-2" />
                  <p className="font-semibold">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Marketing Types</h3>
            <div className="space-y-3">
              {marketingTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="bg-white rounded-lg p-4 shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-all"
                >
                  <p className="font-semibold text-gray-900">{type.name}</p>
                  <p className="text-sm text-gray-600">{type.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="rounded-2xl overflow-hidden h-64"
        >
          <img
            src="https://images.unsplash.com/photo-1769798643630-194a0fcfa367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3klMjBidXNpbmVzc3xlbnwxfHx8fDE3NzY0MTEyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Marketing Strategy"
            className="w-full h-full object-cover"
          />
        </motion.div> */}
      </div>
    </div>
  );
}
