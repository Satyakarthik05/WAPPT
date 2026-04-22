import { motion } from 'motion/react';
import myimage from "../../assests/image.png"

export function Slide02Leadership() {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-slate-50 to-blue-50 p-16">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl transform rotate-6"></div>
            <img
              src={myimage}
              alt="Naresh Paritala"
              className="relative rounded-3xl w-80 h-96 object-cover shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-2">Naresh Paritala</h2>
            <p className="text-2xl text-blue-600 font-semibold">Founder / Mentor ~ Wealth Associates</p>
          </div>

          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>

          <p className="text-lg text-gray-700 leading-relaxed">
            A visionary entrepreneur with 32 years of professional experience and 7 years in real estate and
            digital innovation. Naresh Paritala has pioneered the integration of technology
            with traditional real estate practices, creating comprehensive ecosystems that
            empower associates, investors, and customers alike. Currently he is serving as interim president of APARDA.

          </p>

          <div className="flex gap-4 pt-4">
            <div className="flex-1 bg-blue-50 p-4 rounded-xl">
              <p className="text-3xl font-bold text-blue-600">20+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            {/* <div className="flex-1 bg-purple-50 p-4 rounded-xl">
              <p className="text-3xl font-bold text-purple-600">5000+</p>
              <p className="text-sm text-gray-600">Happy Clients</p>
            </div> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
