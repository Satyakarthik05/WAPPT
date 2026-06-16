import { motion } from 'motion/react';
import jsraminfra from '../../assests/jsraminfra.jpeg';

export function Slide00Intro() {
  return (
    <div className="relative w-full h-full min-h-full bg-white overflow-hidden flex items-center justify-center p-4">
      {/* Background Fullscreen Image */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={jsraminfra}
          alt="JS RAM Infra Fullscreen"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
}
