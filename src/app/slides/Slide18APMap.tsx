import { motion } from 'motion/react';
import { MapPin, Building2 } from 'lucide-react';
import district from '../../assests/districts.jpeg'

export function Slide18APMap() {
  const districts = [
    "Srikakulam", "west godavari", "Vizianagaram", "Visakhapatnam",
    "nellore", "chittoor", "kadapa", "East Godavari",
    "kurnool", "Krishna", "anantapuram", "Guntur", "prakasam"
  ];

  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-orange-50 to-red-50 p-6 overflow-hidden">
      <div className="max-w-6xl w-full">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-gray-900 text-center mb-6"
        >
          Andhra Pradesh Coverage
        </motion.h1>

        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl text-gray-600 text-center mb-12"
        >
          Serving All 13 Districts (2026)
        </motion.p> */}

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-2xl overflow-hidden shadow-xl h-[400px]"
          >
            <img
              src={district}
              alt="Andhra Pradesh Map"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-4 text-white mb-4">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-10 h-10" />
                <div>
                  <h2 className="text-xl font-bold">Statewide Presence</h2>
                  <p className="text-sm opacity-90">Complete coverage across AP</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-white/20 rounded-lg p-3">
                  <p className="text-3xl font-bold">13</p>
                  <p className="text-xs">Combined Districts</p>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <p className="text-3xl font-bold">175</p>
                  <p className="text-xs">Constituencies</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-orange-600" />
                All Districts Covered
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {districts.map((district, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                    className="flex items-center gap-2 bg-orange-50 rounded-lg p-2 hover:bg-orange-100 transition-all"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-800 font-medium text-sm">{district}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-4 text-white text-center"
        >
          <p className="text-lg">
            <strong>Expanding Our Reach:</strong> serving every corner of AP with quality real estate services
          </p>
        </motion.div>
      </div>
    </div>
  );
}
