import { motion } from 'motion/react';
import { Sparkles, TrendingUp, Crown } from 'lucide-react';

export function Slide21DigitallyYours() {
  const plans = [
    {
      name: "Silver",
      price: "7,999",
      icon: Sparkles,
      color: "from-gray-400 to-gray-600",
      features: [
        "Website Development",
        "Basic SEO Setup",
        "Social Media Posts (10/month)",
        "Email Support",
        "Monthly Analytics Report"
      ]
    },
    {
      name: "Gold",
      price: "15,999",
      icon: TrendingUp,
      color: "from-yellow-400 to-yellow-600",
      popular: true,
      features: [
        "Everything in Silver",
        "SEO, SMM, SEM Services",
        "Daily Social Posts",
        "Video Content (4/month)",
        "Google My Business",
        "Bi-weekly Analytics",
        "WhatsApp Support"
      ]
    },
    {
      name: "Platinum",
      price: "24,999",
      icon: Crown,
      color: "from-purple-400 to-purple-600",
      features: [
        "Everything in Gold",
        "Full SEO, SMM, SEM Suite",
        "Premium Content Creation",
        "Dedicated Account Manager",
        "Real-time Analytics",
        "Paid Ad Management",
        "Custom Campaigns",
        "Brand Strategy Consulting"
      ]
    }
  ];

  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-slate-900 to-purple-900 px-12 py-6 overflow-hidden">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Digitally Yours</h1>
          <p className="text-xl text-blue-200">Premium Digital Marketing Plans</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`bg-white rounded-xl overflow-hidden shadow-2xl ${
                plan.popular ? 'ring-4 ring-yellow-400 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-center py-1">
                  <p className="text-xs font-bold text-gray-900">MOST POPULAR</p>
                </div>
              )}

              <div className={`bg-gradient-to-br ${plan.color} p-4 text-white text-center`}>
                <div className="inline-block p-2 bg-white/20 rounded-full mb-2">
                  <plan.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-xl">₹</span>
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm opacity-90">/month</span>
                </div>
              </div>

              <div className="p-4">
                <ul className="space-y-2">
                  {plan.features.slice(0, 6).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-2.5 h-2.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-xs font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full mt-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 shadow-lg'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Choose {plan.name}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 text-center"
        >
          <h3 className="text-xl font-bold text-white mb-3">Why Choose Digitally Yours?</h3>
          <div className="grid md:grid-cols-3 gap-4 text-white">
            <div>
              <p className="text-2xl mb-1">🎯</p>
              <p className="font-semibold text-sm mb-0.5">Targeted Marketing</p>
              <p className="text-xs text-blue-200 line-clamp-1">Reach the right audience</p>
            </div>
            <div>
              <p className="text-2xl mb-1">📈</p>
              <p className="font-semibold text-sm mb-0.5">Proven Results</p>
              <p className="text-xs text-blue-200 line-clamp-1">Track your growth</p>
            </div>
            <div>
              <p className="text-2xl mb-1">💼</p>
              <p className="font-semibold text-sm mb-0.5">Expert Team</p>
              <p className="text-xs text-blue-200 line-clamp-1">Professional support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
