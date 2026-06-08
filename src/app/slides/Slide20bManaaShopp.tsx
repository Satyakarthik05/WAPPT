import { motion } from 'motion/react';
import { ShoppingCart, Store, CheckCircle, Package, ArrowRight, ShieldCheck, Star, Coins } from 'lucide-react';

export function Slide20bManaaShopp() {
  const shopProducts = [
    { name: "Organic Farm Basket (5kg)", price: "₹249", rating: "4.8", comm: "₹35" },
    { name: "Premium Sona Rice (25kg)", price: "₹1,450", rating: "4.9", comm: "₹120" },
    { name: "Fresh Dairy & Essentials Kit", price: "₹180", rating: "4.7", comm: "10%" }
  ];

  return (
    <div className="flex items-center justify-center min-h-full bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 p-6 overflow-y-auto md:overflow-hidden relative">
      <div className="max-w-[1400px] w-full h-full flex flex-col relative z-10">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-2xl md:text-4xl md:text-6xl font-bold text-white text-center mb-10"
        >
          Manaa Shopp E-commerce
        </motion.h1>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_1.1fr_1fr] gap-6 md:p-8 items-center min-h-0">
          
          {/* Left Column: Business Model & Revenue */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-7 border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3 border-b border-white/10 pb-3 uppercase tracking-wider relative z-10">
                <Store className="w-6 h-6 text-purple-400" />
                Daily Needs Storefront
              </h3>
              
              <div className="space-y-6 relative z-10">
                <div className="group/item">
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-1">Stock Model</p>
                  <p className="text-white text-sm font-bold">Zero Inventory Storefront</p>
                  <p className="text-xs text-slate-400 mt-1">Partners sell daily groceries directly from our digital supply network without storage worries.</p>
                </div>
                <div className="group/item">
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-1">Commission Structure</p>
                  <p className="text-white text-sm font-bold">Consistent Daily Revenue</p>
                  <p className="text-xs text-slate-400 mt-1">Earn commissions on high-frequency grocery baskets, fresh farm produce, and daily staples.</p>
                </div>
                <div className="bg-purple-500/10 rounded-2xl p-4 border border-purple-500/20 mt-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Coins className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Direct Wallet Sync</span>
                  </div>
                  <p className="text-[11px] text-purple-200 leading-relaxed font-medium">All commissions are instantly credited to the Partner's Franchise dashboard wallet.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center Column: Mobile App Interface Mockup */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative flex items-center justify-center p-4"
          >
            {/* Pulsing Aura */}
            <motion.div 
              animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 bg-indigo-500/20 rounded-[3.5rem] blur-3xl z-0"
            />

            {/* Smart Phone Shell */}
            <div className="w-[280px] aspect-[9/19.5] bg-slate-950 rounded-[3rem] p-3 shadow-[0_0_80px_rgba(99,102,241,0.3)] border-4 border-slate-800 relative z-10 flex flex-col overflow-hidden text-white font-sans ring-1 ring-white/10">
              
              {/* Phone Camera Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-800 rounded-full flex items-center justify-center z-20">
                <div className="w-2.5 h-2.5 bg-black rounded-full ml-auto mr-1"></div>
              </div>

              {/* App Internal Header */}
              <div className="bg-slate-900 pt-8 pb-3 px-4 border-b border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-[10px] text-indigo-400 font-black tracking-widest uppercase">Manaa Shopp</h4>
                  <p className="text-[8px] text-slate-400">Grocery & Daily Needs</p>
                </div>
                <div className="relative">
                  <ShoppingCart className="w-4 h-4 text-indigo-400" />
                  <span className="absolute -top-1.5 -right-1.5 bg-purple-500 text-[6px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center">2</span>
                </div>
              </div>

              {/* App Body / Product List */}
              <div className="flex-1 overflow-y-auto p-3 space-y-3">
                <p className="text-[8px] text-slate-400 uppercase tracking-widest font-bold">Daily Needs Catalog</p>
                
                {shopProducts.map((prod, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/5 p-2 rounded-xl flex flex-col justify-between hover:border-indigo-500/30 transition-all">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-[10px] font-bold text-white truncate max-w-[130px]">{prod.name}</span>
                      <span className="text-[9px] text-indigo-300 font-bold">{prod.price}</span>
                    </div>
                    <div className="flex justify-between items-center text-[8px] text-slate-400">
                      <div className="flex items-center gap-0.5">
                        <Star className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
                        <span>{prod.rating}</span>
                      </div>
                      <span className="text-[8px] text-green-400 bg-green-500/10 px-1 py-0.5 rounded font-medium">Partner Comm: {prod.comm}</span>
                    </div>
                  </div>
                ))}

                {/* Sales Analytics Chart Mini-Widget */}
                <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-indigo-500/10 p-2.5 rounded-xl mt-3">
                  <p className="text-[8px] text-indigo-300 font-bold uppercase tracking-wider mb-1 flex items-center justify-between">
                    <span>Daily Grocery Orders</span>
                    <span className="text-green-400 font-black">+142 Orders Today</span>
                  </p>
                  <div className="h-6 flex items-end gap-1 px-1 pt-1.5 border-b border-indigo-500/10">
                    <div className="bg-indigo-500/40 w-full h-3 rounded-t-sm"></div>
                    <div className="bg-indigo-500/40 w-full h-2 rounded-t-sm"></div>
                    <div className="bg-indigo-500/60 w-full h-4 rounded-t-sm"></div>
                    <div className="bg-purple-500 w-full h-6 rounded-t-sm"></div>
                  </div>
                </div>
              </div>

              {/* App Footer Actions */}
              <div className="bg-slate-900 p-2.5 border-t border-white/5 flex items-center justify-between gap-2">
                <div className="text-left">
                  <p className="text-[7px] text-slate-400">Earnings Wallet</p>
                  <p className="text-[11px] font-bold text-white">₹42,850</p>
                </div>
                <button className="bg-indigo-600 hover:bg-indigo-500 text-[8px] font-bold py-1.5 px-3 rounded-lg flex items-center gap-1 transition-all">
                  Withdraw to Bank
                  <ArrowRight className="w-2.5 h-2.5" />
                </button>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Supplier Network & Logistics */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-7 border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3 border-b border-white/10 pb-3 uppercase tracking-wider relative z-10">
                <Package className="w-6 h-6 text-indigo-400" />
                Logistics & Supply
              </h3>

              <div className="space-y-4 relative z-10">
                <div className="flex items-start gap-4 bg-white/5 rounded-2xl p-4 border border-white/5 group/link hover:bg-white/10 transition-all">
                  <ShieldCheck className="w-6 h-6 text-indigo-400 shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">Verified Brands</p>
                    <p className="text-[10px] text-slate-400 leading-relaxed font-medium">Direct partnerships with local farm aggregators, fresh dairies, and leading FMCG suppliers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/5 rounded-2xl p-4 border border-white/5 group/link hover:bg-white/10 transition-all">
                  <Package className="w-6 h-6 text-indigo-400 shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">Direct Doorstep Delivery</p>
                    <p className="text-[10px] text-slate-400 leading-relaxed font-medium">High speed fresh delivery logistics managed entirely by the main hub directly to customers.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
