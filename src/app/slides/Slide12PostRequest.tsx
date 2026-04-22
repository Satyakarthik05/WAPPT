import { motion } from 'motion/react';
import { Upload, Search, CheckCircle, MessageSquare } from 'lucide-react';
import { VideoPlaceholder } from '../components/VideoPlaceholder';

export function Slide12PostRequest() {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-50 to-indigo-50 p-16 overflow-auto">
      <div className="max-w-6xl w-full">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold text-gray-900 text-center mb-12"
        >
          Post & Request Property
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-blue-100 rounded-xl">
                <Upload className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Post Property</h2>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Upload Details</p>
                  <p className="text-sm text-gray-600">Add property information and photos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Set Pricing</p>
                  <p className="text-sm text-gray-600">Define your asking price</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Publish</p>
                  <p className="text-sm text-gray-600">Make it visible to buyers</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 inline text-green-600 mr-2" />
                Properties go live after approval
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-purple-100 rounded-xl">
                <Search className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Request Property</h2>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Specify Requirements</p>
                  <p className="text-sm text-gray-600">Location, budget, property type</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Submit Request</p>
                  <p className="text-sm text-gray-600">Our team will search for you</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Get Matches</p>
                  <p className="text-sm text-gray-600">Receive suitable options</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-4">
              <p className="text-sm text-gray-700">
                <MessageSquare className="w-4 h-4 inline text-purple-600 mr-2" />
                Direct communication with agents
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* <VideoPlaceholder title="How to Post & Request Properties" className="h-[300px] rounded-2xl" /> */}
        </motion.div>
      </div>
    </div>
  );
}
