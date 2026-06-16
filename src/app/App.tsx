import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Download, RotateCcw, Smartphone, Maximize } from 'lucide-react';
import { generatePPTX } from './utils/pptxExport';
import appIcon from '../assests/icon-512.png';

// Import all slides
// import { Slide00Intro } from './slides/Slide00Intro';
import { Slide01Opening } from './slides/Slide01Opening';
import { Slide02Leadership } from './slides/Slide02Leadership';
import { Slide03AboutRealEstate } from './slides/Slide03AboutRealEstate';
import { Slide04FutureValuation } from './slides/Slide04FutureValuation';
import { Slide05RealtorsCustomers } from './slides/Slide05RealtorsCustomers';
import { Slide06Marketing } from './slides/Slide06Marketing';
import { Slide07Properties } from './slides/Slide07Properties';
import { Slide08WealthAssociates } from './slides/Slide08WealthAssociates';
import { Slide08AppDownload } from './slides/Slide08AppDownload';
import { Slide08cIncomeOptions } from './slides/Slide08cIncomeOptions';
import { Slide08dOtherIncome } from './slides/Slide08dOtherIncome';
import { Slide08eServicesIncome } from './slides/Slide08eServicesIncome';
import { Slide08fAppIncome } from './slides/Slide08fAppIncome';
import { Slide08gProjectIncome } from './slides/Slide08gProjectIncome';
import { Slide08hFranchiseIncome } from './slides/Slide08hFranchiseIncome';
import { Slide08iValueServices } from './slides/Slide08iValueServices';
import { Income } from './slides/Income';
import { Slide08bValueAssociate } from './slides/Slide08bValueAssociate';
import { Slide09App } from './slides/Slide09App';
import { Slide10Registration } from './slides/Slide10Registration';
import { Slide10bCallCenter } from './slides/Slide10bCallCenter';
import { Slide10cAgentPricing } from './slides/Slide10cAgentPricing';
import { Slide11Dashboard } from './slides/Slide11Dashboard';
import { Slide12PostRequest } from './slides/Slide12PostRequest';
import { Slide13PropertyTypes } from './slides/Slide13PropertyTypes';
import { Slide14Ecosystem } from './slides/Slide14Ecosystem';
import { Slide15RealProperties } from './slides/Slide15RealProperties';
import { Slide16SkilledResources } from './slides/Slide16SkilledResources';
import { TrueSlide } from './slides/TrueSlide';
import { Slide17LokalBuddy } from './slides/Slide17LokalBuddy';
import { Slide18APMap } from './slides/Slide18APMap';
import { AP1 } from './slides/AP1';
import { AP2 } from './slides/AP2';
import { AP3 } from './slides/AP3';
import { AP4 } from './slides/AP4';
import { AP5 } from './slides/AP5';
import { AP6 } from './slides/AP6';
import { AP7 } from './slides/AP7';
import { AP8 } from './slides/AP8';
import { AP9 } from './slides/AP9';
import { AP10 } from './slides/AP10';
import { AP11 } from './slides/AP11';
import { AP12 } from './slides/AP12';
import { AP13 } from './slides/AP13';
import { Slide19RealSale } from './slides/Slide19RealSale';
import { Slide19bRegionalAssociate } from './slides/Slide19bRegionalAssociate';
import { Slide20Franchise } from './slides/Slide20Franchise';
import { Slide20bManaaShopp } from './slides/Slide20bManaaShopp';
import { Slide21DigitallyYours } from './slides/Slide21DigitallyYours';
import { Slide22Closing } from './slides/Slide22Closing';
import { Slide23ThankYou } from './slides/Slide23ThankYou';


const slides = [
  // { component: Slide00Intro, title: 'Intro', isDark: true },
  { component: Slide01Opening, title: 'Opening', isDark: true },
  { component: Slide02Leadership, title: 'Leadership', isDark: true },
  { component: Slide03AboutRealEstate, title: 'About Real Estate', isDark: true },
  { component: Slide04FutureValuation, title: 'Future Valuation', isDark: true },
  { component: Slide05RealtorsCustomers, title: 'Realtors & Customers', isDark: true },
  { component: Slide06Marketing, title: 'Marketing', isDark: true },
  { component: Slide07Properties, title: 'Properties', isDark: true },
  { component: Slide08WealthAssociates, title: 'Wealth Associates', isDark: true },
  { component: Slide08AppDownload, title: 'App Download', isDark: true },
  { component: Slide10cAgentPricing, title: 'Agent Pricing', isDark: true },


  { component: Slide09App, title: 'App', isDark: true },
  { component: Slide10Registration, title: 'Registration', isDark: true },
  { component: Slide10bCallCenter, title: 'Call Center', isDark: true },

  { component: Slide11Dashboard, title: 'Dashboard', isDark: true },
  { component: Slide12PostRequest, title: 'Post & Request', isDark: true },
  { component: Slide13PropertyTypes, title: 'Property Types', isDark: true },
  { component: Slide14Ecosystem, title: 'Ecosystem', isDark: true },
  { component: Slide15RealProperties, title: 'RealProperties', isDark: true },
  { component: TrueSlide, title: 'True Perspective', isDark: true },
  { component: Slide16SkilledResources, title: 'Skilled Resources', isDark: true },
  { component: Slide17LokalBuddy, title: 'LokalBuddy', isDark: true },
  { component: Slide08bValueAssociate, title: 'Value Associate', isDark: true },
  { component: Slide19RealSale, title: 'RealSale', isDark: true },
  { component: Slide21DigitallyYours, title: 'Digital Sales Force', isDark: true },
  { component: Slide19bRegionalAssociate, title: 'Regional Associate', isDark: true },
  { component: Slide18APMap, title: 'AP Map', isDark: true },
  { component: AP1, title: 'AP District 1', isDark: true },
  { component: AP2, title: 'AP District 2', isDark: true },
  { component: AP3, title: 'AP District 3', isDark: true },
  { component: AP4, title: 'AP District 4', isDark: true },
  { component: AP5, title: 'AP District 5', isDark: true },
  { component: AP6, title: 'AP District 6', isDark: true },
  { component: AP7, title: 'AP District 7', isDark: true },
  { component: AP8, title: 'AP District 8', isDark: true },
  { component: AP9, title: 'AP District 9', isDark: true },
  { component: AP10, title: 'AP District 10', isDark: true },
  { component: AP11, title: 'AP District 11', isDark: true },
  { component: AP12, title: 'AP District 12', isDark: true },
  { component: AP13, title: 'AP District 13', isDark: true },
  { component: Slide20Franchise, title: 'Franchise', isDark: true },
  { component: Slide20bManaaShopp, title: 'Manaa Shopp', isDark: true },
  { component: Slide22Closing, title: 'Closing', isDark: true },
  // { component: Slide22Closing, title: 'Closing', isDark: true },
  { component: Income, title: 'Income', isDark: true },
  { component: Slide08cIncomeOptions, title: 'Network Hierarchy', isDark: true },
  { component: Slide08dOtherIncome, title: 'Other Income', isDark: true },
  { component: Slide08eServicesIncome, title: 'Services Income', isDark: true },
  { component: Slide08fAppIncome, title: 'App Income', isDark: true },
  { component: Slide08gProjectIncome, title: 'Project Income', isDark: true },
  { component: Slide08hFranchiseIncome, title: 'Franchise Income', isDark: true },
  { component: Slide08iValueServices, title: 'Value Services', isDark: true },
  { component: Slide23ThankYou, title: 'Thank You', isDark: true },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const [forceLandscape, setForceLandscape] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  // Detect mobile and orientation
  useEffect(() => {
    const checkState = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768);
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    checkState();
    window.addEventListener('resize', checkState);
    return () => window.removeEventListener('resize', checkState);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  // Handle global keyboard navigation
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Use e.key instead of e.code for better compatibility
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(slides.length - 1);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [currentSlide]); // Re-bind if currentSlide changes to ensure latest state is captured if needed, 

  return (
    <div className={`w-screen h-screen overflow-hidden bg-black relative touch-none ${forceLandscape && isPortrait ? 'force-landscape-container' : ''}`}>
      <motion.div
        className="w-full h-full relative outline-none overflow-y-auto"
        onPanEnd={(_e, info) => {
          const threshold = 50;
          if (info.offset.x < -threshold) nextSlide();
          else if (info.offset.x > threshold) prevSlide();
        }}
      >
        {/* Main Slide Area */}
        <div className="w-full h-full">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <CurrentSlideComponent />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls - Mobile Optimized */}
        <div className="absolute inset-x-0 bottom-6 md:inset-y-0 md:left-0 md:right-0 flex justify-between md:flex-col md:justify-center px-4 md:px-8 z-[70] pointer-events-none">
          <button
            onClick={prevSlide}
            className="p-4 md:p-6 glass-button text-white shadow-2xl pointer-events-auto active:scale-95 transition-all bg-black/40 md:absolute md:left-8"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
          </button>
          <button
            onClick={nextSlide}
            className="p-4 md:p-6 glass-button text-white shadow-2xl pointer-events-auto active:scale-95 transition-all bg-black/40 md:absolute md:right-8"
            aria-label="Next slide"
          >
            <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
          </button>
        </div>

        {/* Top Left Controls: Rotate & Export */}
        <div className="absolute top-4 left-4 z-[80] flex gap-2">
          {isMobile && isPortrait && (
            <button
              onClick={() => setForceLandscape(!forceLandscape)}
              className={`flex items-center gap-2 px-3 py-2 glass-button text-white text-[10px] font-black uppercase tracking-widest ${forceLandscape ? 'bg-blue-600/40 border-blue-400' : ''}`}
            >
              <RotateCcw className={`w-4 h-4 transition-transform duration-500 ${forceLandscape ? 'rotate-180' : ''}`} />
              {forceLandscape ? 'Reset' : 'Rotate'}
            </button>
          )}

          <button
            onClick={() => {
              setIsDownloading(true);
              generatePPTX(slides).finally(() => setIsDownloading(false));
            }}
            disabled={isDownloading}
            className="flex items-center gap-2 px-3 py-2 glass-button text-white text-[10px] font-black uppercase tracking-widest disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            {isDownloading ? '...' : 'PPTX'}
          </button>
        </div>

        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-800/30 z-[100]">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-[0_0_15px_rgba(79,70,229,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Global App Icon */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 z-[60] pointer-events-none">
          <motion.img
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
              scale: [1, 1.05, 1],
              filter: slides[currentSlide].isDark
                ? 'brightness(1.2) drop-shadow(0 0 20px rgba(255,255,255,0.4))'
                : 'brightness(1) drop-shadow(0 0 10px rgba(0,0,0,0.2))'
            }}
            transition={{
              opacity: { duration: 2, ease: "easeOut" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              filter: { duration: 1 }
            }}
            src={appIcon}
            alt="App Icon"
            className="w-10 h-10 md:w-24 md:h-24 object-contain"
          />
        </div>

        {/* Slide Counter - Mobile Friendly */}
        <div className="absolute bottom-4 left-4 z-[60] bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-white/60 text-xs font-mono">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>

        {/* Orientation Overlay */}
        <AnimatePresence>
          {isMobile && isPortrait && !forceLandscape && showOverlay && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-[200] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center text-center p-8"
            >
              <motion.div
                animate={{ rotate: [0, 90, 90, 0] }}
                transition={{ duration: 2, repeat: Infinity, times: [0, 0.4, 0.6, 1] }}
                className="mb-8 p-8 rounded-[3rem] bg-white/5 border border-white/10 shadow-2xl shadow-blue-500/10"
              >
                <Smartphone className="w-20 h-20 text-blue-400" />
              </motion.div>
              <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">Landscape Recommended</h2>
              <p className="text-slate-400 mb-10 max-w-xs font-medium leading-relaxed">
                This presentation is optimized for landscape view. Please rotate your device or use the button below.
              </p>
              <div className="flex flex-col gap-4 w-full max-w-xs">
                <button
                  onClick={() => setForceLandscape(true)}
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 rounded-2xl text-white font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 active:scale-95"
                >
                  <RotateCcw className="w-6 h-6" />
                  Force Landscape
                </button>
                <button
                  onClick={() => setShowOverlay(false)}
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white/60 font-bold hover:bg-white/10 transition-all active:scale-95"
                >
                  Continue in Portrait
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
