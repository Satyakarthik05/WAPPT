import { motion } from 'motion/react';
import { Building2, Home, Users, Laptop } from 'lucide-react';

export function Slide14Ecosystem() {
  // Layout constants (all in px, matching the 600px-tall container below)
  const W = 700;   // SVG / container width  (matches max-w content)
  const H = 600;   // SVG / container height

  const cx = W / 2;   // center X
  const cy = H / 2;   // center Y

  // Partner box centres (approximate, based on absolute positioning)
  const boxW = 192; // w-48 = 12rem = 192px
  const boxH = 110; // rough height of each partner card

  const partners = [
    {
      icon: Building2,
      name: "Kriya IT tools",
      description: "IT solutions",
      color: "from-blue-500 to-blue-600",
      // top-0, left-1/2 -translate-x-1/2  → centre X = cx, centre Y = boxH/2
      bx: cx,
      by: boxH / 2,
      position: "top-0 left-1/2 -translate-x-1/2",
    },
    {
      icon: Home,
      name: "Real Properties",
      description: "Property listings",
      color: "from-green-500 to-emerald-600",
      // top-1/2 left-0 -translate-y-1/2  → centre X = boxW/2, centre Y = cy
      bx: boxW / 2,
      by: cy,
      position: "top-1/2 left-0 -translate-y-1/2",
    },
    {
      icon: Users,
      name: "Digitally Yours",
      description: "Digital marketing",
      color: "from-purple-500 to-purple-600",
      // bottom-0 left-1/2 -translate-x-1/2  → centre X = cx, centre Y = H - boxH/2
      bx: cx,
      by: H - boxH / 2,
      position: "bottom-0 left-1/2 -translate-x-1/2",
    },
    {
      icon: Laptop,
      name: "Lokal Buddy",
      description: "Service marketplace",
      color: "from-orange-500 to-orange-600",
      // top-1/2 right-0 -translate-y-1/2  → centre X = W - boxW/2, centre Y = cy
      bx: W - boxW / 2,
      by: cy,
      position: "top-1/2 right-0 -translate-y-1/2",
    },
  ];

  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8">
      <div className="max-w-4xl w-full">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-white text-center mb-8"
        >
          Ecosystem Network
        </motion.h1>

        {/* Diagram */}
        <div className="relative w-full" style={{ height: H }}>

          {/* SVG connection lines — rendered BELOW cards */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox={`0 0 ${W} ${H}`}
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="rgba(255,255,255,0.6)" />
              </marker>
            </defs>
            {partners.map((partner, index) => {
              const lineLen = Math.hypot(cx - partner.bx, cy - partner.by);
              return (
                <motion.line
                  key={index}
                  x1={partner.bx}
                  y1={partner.by}
                  x2={cx}
                  y2={cy}
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="2.5"
                  strokeDasharray={lineLen}
                  strokeDashoffset={lineLen}
                  markerEnd="url(#arrowhead)"
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 0.9, delay: 0.8 + index * 0.2, ease: "easeInOut" }}
                />
              );
            })}
          </svg>

          {/* Center Circle — Wealth Associates */}
          <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-48 h-48 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <Building2 className="w-10 h-10 text-white mx-auto mb-2" />
                  <h2 className="text-xl font-bold text-white leading-tight">Wealth<br />Associates</h2>
                </div>
              </div>
            </motion.div>
          </div>


          {/* Partner Cards */}
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
              className={`absolute z-10 ${partner.position}`}
            >
              <div className={`bg-gradient-to-br ${partner.color} rounded-2xl p-5 w-48 text-center shadow-xl`}>
                <partner.icon className="w-10 h-10 text-white mx-auto mb-2" />
                <h3 className="text-base font-bold text-white">{partner.name}</h3>
                <p className="text-white mt-2 text-sm font-semibold text-center">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
