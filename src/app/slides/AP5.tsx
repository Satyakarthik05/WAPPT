import { motion, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";
import westgodavari from "../../assests/westgodavari.jpg";

export function AP5() {
  const [coords, setCoords] = useState({ x: 250, y: 150 });

  const x = useMotionValue(coords.x);
  const y = useMotionValue(coords.y);

  useEffect(() => {
    const saved = localStorage.getItem("ap5-position");
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
    localStorage.setItem("ap5-position", JSON.stringify(newCoords));
  };

  return (
    <div className="flex items-center justify-center h-full bg-[#030211] p-4 md:p-10 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 blur-[80px] md:blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/10 blur-[80px] md:blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative max-w-full md:max-w-[1200px] w-full flex items-center justify-center"
      >
        <div className="relative rounded-2xl md:rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(30,58,138,0.2)] md:shadow-[0_0_80px_rgba(30,58,138,0.3)] w-full max-h-[70vh] md:max-h-none flex items-center justify-center">
          <img
            src={westgodavari}
            alt="West Godavari"
            className="w-full h-full object-contain"
          />

          {/* ✅ Draggable Circular Card */}
          <motion.div
            drag
            dragMomentum={false}
            dragConstraints="parent"
            style={{
              position: "absolute",
              top: "10%",
              left: "10%",
              x,
              y
            }}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="z-50 w-24 h-24 md:w-40 md:h-40 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 flex flex-col items-center justify-center shadow-2xl cursor-grab active:cursor-grabbing"
          >
            <span className="text-2xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-500 leading-none">
              15
            </span>
            <span className="text-indigo-300 font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase text-[8px] md:text-xs mt-1 text-center px-2">
              Local Franchises
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Debug Coordinates */}
      <div className="fixed bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-[10px] md:text-sm z-[80]">
        X: {coords.x} | Y: {coords.y}
      </div>
    </div>
  );
}