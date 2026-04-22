import { motion } from 'motion/react';
import { Home, Building2, TrendingUp, DollarSign, PieChart as PieIcon } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export function Slide07Properties() {
  const data = [
    { name: 'Local/Individual', value: 70, color: '#6366f1' },
    { name: 'Commercial/Corporate', value: 30, color: '#a855f7' }
  ];

  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 p-6 overflow-hidden">
      <div className="max-w-[1400px] w-full h-full flex flex-col">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold text-white text-center mb-6"
        >
          Real Estate Properties Portfolio
        </motion.h1>

        <div className="flex-1 grid md:grid-cols-[1.6fr_1fr] gap-6 min-h-0">
          {/* Left Column: Property Type Cards */}
          <div className="grid grid-rows-2 gap-4 h-full">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 flex gap-6 hover:bg-white/15 transition-all shadow-2xl"
            >
              <div className="w-56 h-full rounded-xl overflow-hidden shadow-2xl border border-white/10 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Residential Property"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-indigo-500/20 rounded-xl">
                      <Home className="w-6 h-6 text-indigo-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Local/Individual</h3>
                  </div>
                  <span className="text-3xl font-extrabold text-indigo-400">70%</span>
                </div>
                <div className="space-y-2">
                  {[
                    "Residential homes & high-end apartments",
                    "Individual plots & luxury villas",
                    "Agricultural Lands & Individual Estates"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,1)]"></div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 flex gap-6 hover:bg-white/15 transition-all shadow-2xl"
            >
              <div className="w-56 h-full rounded-xl overflow-hidden shadow-2xl border border-white/10 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Commercial Property"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-purple-500/20 rounded-xl">
                      <Building2 className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Commercial/Corporate</h3>
                  </div>
                  <span className="text-3xl font-extrabold text-purple-400">30%</span>
                </div>
                <div className="space-y-2">
                  {[
                    "Modern Office buildings & complexes",
                    "Retail markets & shopping centers",
                    "Integrated Community projects & layouts"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,1)]"></div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Chart & Economic Impact */}
          <div className="flex flex-col gap-4 h-full">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 flex-1 flex flex-col justify-center shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-6 justify-center">
                 <PieIcon className="w-5 h-5 text-indigo-400" />
                 <h3 className="text-xl font-bold text-white uppercase tracking-widest text-center">Market Distribution</h3>
              </div>
              <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="45%"
                      innerRadius="65%"
                      outerRadius="85%"
                      paddingAngle={8}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-8 mt-4 pt-4 border-t border-white/5">
                 {data.map((d, i) => (
                    <div key={i} className="flex items-center gap-2">
                       <div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }}></div>
                       <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">{d.name}</span>
                    </div>
                 ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-br from-indigo-600 to-purple-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden group"
            >
              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <h3 className="text-xl font-bold text-white mb-5 uppercase tracking-tighter relative z-10">Strategic Impact</h3>
              <div className="grid grid-cols-1 gap-4 relative z-10">
                {[
                  { icon: TrendingUp, label: "GDP Contribution", desc: "National economic engine" },
                  { icon: DollarSign, label: "Rental Stability", desc: "Reliable passive yield" },
                  { icon: Home, label: "Wealth Compounding", desc: "Long-term value growth" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/10 p-2.5 rounded-xl border border-white/10 hover:bg-white/20 transition-colors cursor-default">
                    <div className="p-2 bg-white/15 rounded-lg">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold leading-tight">{item.label}</p>
                      <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
