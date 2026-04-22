import { motion } from 'motion/react';
import { Users, ShieldCheck, DollarSign, Eye, Star, Globe } from 'lucide-react';
import lokalbuddy from "../../assests/lokalbuddy.jpeg"

export function Slide17LokalBuddy() {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-purple-50 to-pink-50 p-6 overflow-hidden">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          {/* <div className="flex justify-center">
            
          </div> */}
          <div className="inline-block p-3  from-purple-500  rounded-xl mb-4">

            <img src={lokalbuddy} alt="LokalBuddy Logo" className="w-30 h-15" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-2">LokalBuddy Platform</h1>
          <p className="text-xl text-gray-600 mb-4">Service Marketplace for Real Estate Professionals</p>
          <motion.a
            href="https://lokalbuddy.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-bold text-lg border border-purple-200 hover:bg-purple-200 transition-colors cursor-pointer"
          >
            <Globe className="w-5 h-5" />
            lokalbuddy.com
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-4 shadow-xl text-center"
          >
            <div className="inline-block p-3 bg-green-100 rounded-full mb-3">
              <Star className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">For App Users</h3>
            <div className="text-3xl font-bold text-green-600 mb-1">FREE</div>
            <p className="text-sm text-gray-600 mb-3">Access to service listings</p>
            <ul className="text-xs text-gray-600 space-y-1 text-left">
              <li>✓ Browse all services</li>
              <li>✓ View basic profiles</li>
              <li>✓ Read reviews</li>
              <li>✓ Compare providers</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-4 shadow-xl text-center text-white transform scale-105"
          >
            <div className="inline-block p-3 bg-white/20 rounded-full mb-3">
              <ShieldCheck className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-1">Verification</h3>
            <div className="text-3xl font-bold mb-1">₹499</div>
            <p className="text-sm mb-3 opacity-90">/year for professionals</p>
            <ul className="text-xs space-y-1 text-left opacity-90">
              <li>✓ Verified badge</li>
              <li>✓ Premium placement</li>
              <li>✓ Detailed profile</li>
              <li>✓ Lead generation</li>
              <li>✓ Analytics dashboard</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-4 shadow-xl text-center"
          >
            <div className="inline-block p-3 bg-blue-100 rounded-full mb-3">
              <Eye className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Customer Access</h3>
            <div className="text-3xl font-bold text-blue-600 mb-1">Pay</div>
            <p className="text-sm text-gray-600 mb-3">To view verified profiles</p>
            <ul className="text-xs text-gray-600 space-y-1 text-left">
              <li>✓ Full contact details</li>
              <li>✓ Verified credentials</li>
              <li>✓ Portfolio & work history</li>
              <li>✓ Direct communication</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl p-6 shadow-xl"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Service Categories</h3>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
            {[
              "Plumbers",
              "Electricians",
              "Carpenters",
              "Painters",
              "Architects",
              "Interior Designers",
              "Contractors",
              "Property Managers",
              "Legal Advisors",
              "Financial Planners",
              "Home Inspectors",
              "Landscapers"
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-2 text-center hover:shadow-md transition-all"
              >
                <p className="text-gray-800 font-medium text-xs">{service}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
