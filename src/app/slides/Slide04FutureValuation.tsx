import { motion } from 'motion/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

export function Slide04FutureValuation() {
  const data = [
    { year: '2024', value: 35 },
    { year: '2025', value: 42 },
    { year: '2026', value: 51 },
    { year: '2027', value: 61 },
    { year: '2028', value: 72 },
    { year: '2029', value: 82 },
    { year: '2030', value: 88 }
  ];

  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-emerald-50 to-teal-50 p-8">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Market Growth & Future Potential
          </h1>
          <p className="text-lg text-gray-600">
            India's real estate market is poised for unprecedented growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 text-white text-center shadow-lg"
          >
            <p className="text-3xl font-bold mb-1">2x–3x</p>
            <p className="text-base opacity-90">Growth Potential</p>
            <p className="text-[10px] opacity-75">In 5–10 years</p>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: 1.1,
              y: [0, -10, 0]
            }}
            transition={{
              scale: { duration: 0.6, delay: 0.3 },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white text-center shadow-2xl z-10 transform"
          >
            <p className="text-8xl font-bold mb-1 tracking-tighter">88 lakh</p>
            <p className="text-3xl font-bold">Crores </p>
            <p className="text-lg opacity-90">Market Growth</p>
            <p className="text-xs opacity-75 mt-1">Expected by 2030</p>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-4 text-white text-center shadow-lg"
          >
            <p className="text-3xl font-bold mb-1">8%–11%</p>
            <p className="text-base opacity-90">Annual Growth</p>
            <p className="text-[10px] opacity-75">Average CAGR</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl p-6 shadow-xl"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            Projected Market Value (Lakh Crore)
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="year" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
}
