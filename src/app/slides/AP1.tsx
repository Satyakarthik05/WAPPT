import { motion, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";
import { MapPin, Users, Globe, Building2, Train } from "lucide-react";
import srikakulam from "../../assests/srikakulam.jpg";

export function AP1() {
  const [coords, setCoords] = useState({ x: 250, y: 150 });

  const x = useMotionValue(coords.x);
  const y = useMotionValue(coords.y);

  useEffect(() => {
    const saved = localStorage.getItem("ap1-position");
    if (saved) {
      const parsed = JSON.parse(saved);
      x.set(parsed.x);
      y.set(parsed.y);
      setCoords(parsed);
    }
  }, []);

  const handleDragEnd = () => {
    const newCoords = {
      x: Math.round(x.get()),
      y: Math.round(y.get())
    };
    setCoords(newCoords);
    localStorage.setItem("ap1-position", JSON.stringify(newCoords));
  };

  return (
    <div className="flex items-center justify-center h-full bg-[#030211] p-10 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative max-w-[1200px] w-full"
      >
        <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(30,58,138,0.3)]">
          <img
            src={srikakulam}
            alt="Srikakulam"
            className="w-full h-auto object-contain"
          />

          {/* ✅ Circular Draggable Overlay */}
          <motion.div
            drag
            dragMomentum={false}
            dragConstraints="parent"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              x,
              y
            }}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="z-50 bg-white/10 backdrop-blur-2xl border border-white/20 w-40 h-40 rounded-full flex flex-col items-center justify-center shadow-2xl cursor-grab active:cursor-grabbing"
          >
            <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-500 leading-none">
              10
            </span>
            <span className="text-indigo-300 font-bold tracking-[0.2em] uppercase text-xs mt-1">
              Local Franchises
            </span>
          </motion.div>
        </div>
      </motion.div>

      <div className="fixed bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm">
        X: {coords.x} | Y: {coords.y}
      </div>
    </div>
  );
}