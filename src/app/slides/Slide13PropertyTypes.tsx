import { motion } from 'motion/react';
import { Clock, CheckCircle, Star, List, Key } from 'lucide-react';

export function Slide13PropertyTypes() {
  const propertyTypes = [
    {
      icon: Clock,
      title: "Regular Properties",
      subtitle: "0–3 Days Phase",
      visibility: "MARKETING ONLY",
      color: "from-blue-600 to-indigo-700",
      features: [
        "Internal verification",
        "Initial data gathering",
        "Marketing person review",
        "Private database listing"
      ]
    },
    {
      icon: CheckCircle,
      title: "Approved Properties",
      subtitle: "4–17 Days Phase",
      visibility: "CUSTOMERS & STAFF",
      color: "from-emerald-600 to-teal-700",
      features: [
        "Fully verified & ready",
        "Legal clearance check",
        "Visible to public/customers",
        "Ready for transactions"
      ]
    },
    {
      icon: Star,
      title: "Wealth Properties",
      subtitle: "18–25 Days Phase",
      visibility: "INVESTORS, NRIs & SKILLED",
      color: "from-purple-600 to-indigo-800",
      features: [
        "Premium portfolio access",
        "NRIs & Investor matching",
        "Skilled partner review",
        "High-yield potential"
      ]
    },
    {
      icon: List,
      title: "Listed Properties",
      subtitle: "Active Marketplace",
      visibility: "OPEN TO ALL",
      color: "from-orange-600 to-red-700",
      features: [
        "Co-investment opportunities",
        "Active marketplace",
        "Community investment",
        "Investor partnership focus"
      ]
    },
    {
      icon: Key,
      title: "Rental Properties",
      subtitle: "Management & Yield",
      visibility: "REGISTERED MEMBERS",
      color: "from-rose-600 to-pink-700",
      features: [
        "Short & long term rentals",
        "Tenant auto-verification",
        "Yield management",
        "Full property handling"
      ]
    }
  ];

  return (
    <div className="h-full bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <div className="h-full flex flex-col items-center justify-center p-4 md:p-6 lg:p-8">
        <div className="w-full max-w-[1600px]">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6 md:mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Property <span className="text-blue-600">Lifecycles</span> & Visibility
            </h1>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {propertyTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full sm:w-[calc(48%-1rem)] lg:w-[calc(32%-1rem)] xl:w-[calc(31%-1.5rem)] bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden flex flex-col hover:shadow-blue-200/50 transition-all"
              >
                <div className={`bg-gradient-to-br ${type.color} p-5 md:p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <type.icon size={100} />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                       <div className="p-2 bg-white/20 rounded-xl">
                         <type.icon className="w-5 h-5 md:w-6 md:h-6" />
                       </div>
                       <div>
                         <h3 className="text-lg md:text-xl font-extrabold leading-tight">{type.title}</h3>
                         <div className="bg-black/20 backdrop-blur-md rounded-full px-3 py-0.5 mt-1 inline-block text-[10px] md:text-xs font-black uppercase tracking-widest border border-white/10">
                           {type.subtitle}
                         </div>
                       </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 md:p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="mb-3">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Visibility</span>
                      <span className="text-[11px] font-black text-blue-600 uppercase bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100 inline-block">
                        {type.visibility}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                          <p className="text-xs md:text-sm text-slate-600 font-bold leading-snug">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
}
