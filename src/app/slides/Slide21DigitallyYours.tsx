import { motion } from 'motion/react';
import { Megaphone, Headphones, UserCheck, Sparkles, Handshake, ShieldCheck, ArrowRight } from 'lucide-react';

export function Slide21DigitallyYours() {
  const team = [
    {
      role: "Digital Marketing Specialist",
      icon: Megaphone,
      color: "from-blue-500 to-indigo-600",
      accentColor: "text-blue-400",
      shadowColor: "shadow-blue-500/10",
      description: "Generates high-intent leads via hyper-targeted digital campaigns.",
      responsibilities: [
        "Google & Social Media Ads",
        "SEO & SEM Optimization",
        "Lead Capture & Funneling",
        "Brand Visibility campaigns"
      ]
    },
    {
      role: "Telecaller",
      icon: Headphones,
      color: "from-purple-500 to-pink-600",
      accentColor: "text-purple-400",
      shadowColor: "shadow-purple-500/10",
      description: "Nurtures and qualifies inbound leads with instant responses.",
      responsibilities: [
        "Instant lead response",
        "Prospect pre-qualification",
        "Pitching & project intros",
        "Scheduling site visits"
      ]
    },
    {
      role: "Project Head",
      icon: UserCheck,
      color: "from-emerald-500 to-teal-600",
      accentColor: "text-emerald-400",
      shadowColor: "shadow-emerald-500/10",
      description: "Coordinates strategies and aligns stakeholder expectations.",
      responsibilities: [
        "Strategic project planning",
        "Developer negotiations",
        "Pricing & policy finalization",
        "Team coordination & sync"
      ]
    },
    {
      role: "Sales Executive",
      icon: Handshake,
      color: "from-amber-500 to-orange-600",
      accentColor: "text-amber-400",
      shadowColor: "shadow-amber-500/10",
      description: "Handles physical visits and negotiates final property sales.",
      responsibilities: [
        "Guided site visits",
        "In-person negotiation",
        "Objection handling",
        "E-booking & final closing"
      ]
    }
  ];

  return (
    <div className="flex items-center justify-center min-h-full bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-8 py-6 overflow-y-auto">
      <div className="max-w-7xl w-full">
        {/* Header Section */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Assured Property Sale Guarantee
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-3">
            Digital <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Sales Force</span>
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
            A dedicated squad of 4 experts collaborating seamlessly to assure the sale of a particular property.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {team.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800/80 p-6 flex flex-col justify-between shadow-2xl ${member.shadowColor} hover:border-slate-700/80 transition-all`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${member.color} p-2.5 flex items-center justify-center text-white mb-5 shadow-lg`}>
                    <Icon className="w-full h-full" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                    {member.role}
                  </h3>
                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {member.description}
                  </p>
                </div>

                <div className="border-t border-slate-800/80 pt-4">
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-2.5 block">Key Responsibilities</span>
                  <ul className="space-y-2">
                    {member.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs">
                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-gradient-to-r ${member.color}`} />
                        <span className="text-slate-300 font-medium">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process Flow Banner */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-950/40 via-indigo-950/40 to-purple-950/40 border border-slate-800 rounded-2xl p-5"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Property Sale Assured</h4>
                <p className="text-xs text-slate-400">Our structured workflow ensures rapid and certified property liquidation.</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 text-slate-400 text-xs font-semibold">
              <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-blue-400">Campaign Launch</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden sm:inline" />
              <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-purple-400">Lead Nurturing</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden sm:inline" />
              <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-emerald-400">Strategy Sync</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden sm:inline" />
              <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-amber-400">Closing Site Visits</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}





