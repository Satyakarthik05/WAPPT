import { motion } from 'motion/react';
import { TrendingUp, Shield, Users, DollarSign, ArrowUpRight } from 'lucide-react';
import growthImg from '../../assests/real_estate_growth.png';
import stabilityImg from '../../assests/real_estate_stability.png';
import demandImg from '../../assests/real_estate_demand.png';
import incomeImg from '../../assests/real_estate_income.png';

export function Slide03AboutRealEstate() {
  const highlights = [
    {
      image: growthImg,
      icon: TrendingUp,
      title: "Long-term Growth",
      description: "Consistent appreciation over time",
      color: "from-blue-500/80 to-indigo-600/80"
    },
    {
      image: stabilityImg,
      icon: Shield,
      title: "Stable Asset",
      description: "Tangible and secure investment",
      color: "from-indigo-600/80 to-purple-600/80"
    },
    {
      image: demandImg,
      icon: Users,
      title: "Increasing Demand",
      description: "Growing population and urbanization",
      color: "from-purple-600/80 to-pink-600/80"
    }
  ];

  const incomeOps = [
    "Rental income generation",
    "Property value appreciation",
    "Commercial development returns",
    "Long-term wealth building"
  ];

  return (
    <div className="relative h-full bg-[#030213] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-600/10 blur-[120px] rounded-full" />

      <div className="relative h-full flex flex-col p-8 lg:p-12">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="h-[2px] w-12 bg-blue-500" />
            <span className="text-blue-400 font-medium tracking-[0.3em] uppercase text-xs">Strategic Engine</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Real Estate – A <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">Wealth Engine</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-4xl leading-relaxed">
            Real estate is more than property—it's a pathway to sustainable wealth creation 
            through strategic investment and long-term value appreciation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8 flex-grow overflow-hidden">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="relative group overflow-hidden rounded-[2rem] h-full"
            >
              {/* Image Background */}
              <div className="absolute inset-0">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-t ${item.color} mix-blend-multiply opacity-60`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030213] via-transparent to-transparent" />
              </div>

              <div className="relative h-full flex flex-col justify-end p-6">
                <div className="mb-3 w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-snug">{item.description}</p>
                <motion.div 
                  className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between group-hover:text-blue-400 transition-colors"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400 group-hover:text-inherit">Key Driver</span>
                  <ArrowUpRight className="w-3 h-3 translate-y-1 group-hover:translate-y-0 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.02] max-h-[30%]"
        >
          <div className="grid md:grid-cols-5 h-full">
            <div className="md:col-span-2 relative h-32 md:h-full overflow-hidden">
              <img src={incomeImg} alt="Income" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#030213]/80" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-12 h-12 bg-blue-500/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-blue-400/30">
                    <DollarSign className="w-6 h-6 text-blue-400" />
                 </div>
              </div>
            </div>
            <div className="md:col-span-3 p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                Multiple Income Opportunities
                <div className="h-[1px] flex-grow bg-slate-800" />
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {incomeOps.map((op, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 group cursor-default text-sm lg:text-base"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500 transition-all duration-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-white" />
                    </div>
                    <span className="text-slate-300 group-hover:text-white transition-colors">{op}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

