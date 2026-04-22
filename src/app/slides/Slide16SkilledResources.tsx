import { motion } from 'motion/react';
import { ShoppingCart, CheckCircle, Star } from 'lucide-react';
import expert from '../../assests/expert.jpeg';
import suppliers from '../../assests/suppliers.jpeg';

export function Slide16SkilledResources() {
  const expertRoles = ["Architects", "Engineers", "Legal", "Finance"];
  const supplierRoles = ["Materials", "Interiors", "Logistics", "Tech"];

  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 p-6 overflow-hidden">
      <div className="max-w-[1400px] w-full h-full flex flex-col">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold text-white text-center mb-6"
        >
          Experts & Strategic Suppliers
        </motion.h1>

        <div className="flex-1 grid grid-cols-[1fr_1.5fr_1fr] gap-12 items-center min-h-0">
          {/* Left: Experts Screenshot */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="h-full flex items-center justify-center min-h-0"
          >
            <div className="h-full max-h-[600px] aspect-[9/19.5] bg-slate-800 rounded-[2.5rem] p-2.5 shadow-2xl border-4 border-slate-700 relative group">
               <img 
                 src={expert} 
                 className="w-full h-full object-cover object-top rounded-[2rem]" 
               />
               <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-slate-700 rounded-full opacity-50"></div>
            </div>
          </motion.div>

          {/* Center: Info Cards */}
          <div className="flex flex-col gap-6 h-full justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-indigo-500 rounded-xl shadow-lg shadow-indigo-500/20">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Expert Network</h2>
                </div>
                <div className="text-right">
                   <p className="text-3xl font-bold text-indigo-400">500+</p>
                   <p className="text-[10px] text-indigo-300 font-bold tracking-tighter">VERIFIED PROS</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {expertRoles.map((role, i) => (
                   <div key={i} className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-xl border border-white/10 group hover:bg-white/10 transition-colors">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white text-sm font-medium">{role}</span>
                   </div>
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed opacity-80">Direct access to vetted professionals for every construction, architectural, and legal requirement.</p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-500 rounded-xl shadow-lg shadow-blue-500/20">
                    <ShoppingCart className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Supplier Hub</h2>
                </div>
                <div className="text-right">
                   <p className="text-3xl font-bold text-blue-400">200+</p>
                   <p className="text-[10px] text-blue-300 font-bold tracking-tighter">TRUSTED VENDORS</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {supplierRoles.map((role, i) => (
                   <div key={i} className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-xl border border-white/10 group hover:bg-white/10 transition-colors">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-white text-sm font-medium">{role}</span>
                   </div>
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed opacity-80">Bulk procurement and quality-audited materials sourced from industry-leading manufacturers.</p>
            </motion.div>
          </div>

          {/* Right: Suppliers Screenshot */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="h-full flex items-center justify-center min-h-0"
          >
            <div className="h-full max-h-[600px] aspect-[9/19.5] bg-slate-800 rounded-[2.5rem] p-2.5 shadow-2xl border-4 border-slate-700 relative group">
               <img 
                 src={suppliers} 
                 className="w-full h-full object-cover object-top rounded-[2rem]" 
               />
               <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-slate-700 rounded-full opacity-50"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
