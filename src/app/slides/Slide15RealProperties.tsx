import { motion } from 'motion/react';
import { Globe, TrendingUp, Upload, DollarSign, Users, Search } from 'lucide-react';
import { IndianRupee } from "lucide-react";



export function Slide15RealProperties() {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-emerald-50 to-teal-50 p-16 overflow-auto">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* <div className="inline-block p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6">
            <Globe className="w-16 h-16 text-white" />
          </div> */}
          <h1 className="text-6xl font-bold text-gray-900 mb-4">RealProperties Website</h1>
          <p className="text-2xl text-gray-600 mb-6">Your Gateway to Property Listings</p>
          <motion.a
            href="https://realproperties.in"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-100 rounded-full text-emerald-700 font-bold text-xl border border-emerald-200 hover:bg-emerald-200 transition-colors cursor-pointer"
          >
            <Globe className="w-6 h-6" />
            realproperties.in
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 rounded-lg flex-shrink-0">
                    <Search className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Property Listing Platform</p>
                    <p className="text-sm text-gray-600">Comprehensive database of properties</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Lead Generation</p>
                    <p className="text-sm text-gray-600">Connect with potential buyers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Wide Reach</p>
                    <p className="text-sm text-gray-600">Access to thousands of users</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-4">Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Enhanced property visibility
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Professional listing presentation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Direct buyer communication
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Analytics and insights
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 h-10"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <div className="inline-block p-4 bg-orange-100 rounded-full mb-4">
                <IndianRupee className="w-12 h-12 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Paid Upload</h3>
              <div className="text-3xl font-bold text-orange-600 mb-2">₹3,650</div>
              <p className="text-xl text-gray-600 mb-6">/year</p>

              <div className="bg-orange-50 rounded-xl p-4 mb-4">
                <p className="text-gray-700 font-semibold mb-2">What You Get:</p>
                <ul className="text-sm text-gray-600 space-y-1 text-left">
                  <li>✓ Unlimited property uploads</li>
                  <li>✓ Premium listing placement</li>
                  <li>✓ Lead notifications</li>
                  <li>✓ Analytics dashboard</li>
                  <li>✓ 24/7 support</li>
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold"
              >
                Get Started Today
              </motion.button>
            </div>

            {/* <div className="bg-white rounded-2xl overflow-hidden shadow-xl h-64">
              <img
                src="https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjByZWFsJTIwZXN0YXRlJTIwcHJvcGVydHl8ZW58MXx8fHwxNzc2NDExMjk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Property"
                className="w-full h-full object-cover"
              />
            </div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
