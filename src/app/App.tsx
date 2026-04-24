import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { generatePPTX } from './utils/pptxExport';
import appIcon from '../assests/icon-512.png';

// Import all slides
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
import { Slide21DigitallyYours } from './slides/Slide21DigitallyYours';
import { Slide22Closing } from './slides/Slide22Closing';
import { Slide23ThankYou } from './slides/Slide23ThankYou';


const slides = [
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
  { component: Slide21DigitallyYours, title: 'Digitally Yours', isDark: true },
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
    <motion.div
      className="w-screen h-screen overflow-hidden bg-black relative outline-none touch-none"
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

      {/* Navigation Controls - Hidden on desktop unless hovered, visible on mobile */}
      <div className="absolute inset-y-0 left-0 flex items-center px-4 z-[70] group">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-white/30 active:scale-95 shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center px-4 z-[70] group">
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-white/30 active:scale-95 shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-800/30 z-[100]">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
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
          className="w-12 h-12 md:w-24 md:h-24 object-contain"
        />
      </div>

      {/* PPTX Export Button - Fixed position */}
      <div className="absolute bottom-4 right-4 z-[60]">
         <button
          onClick={() => {
            setIsDownloading(true);
            generatePPTX(slides).finally(() => setIsDownloading(false));
          }}
          disabled={isDownloading}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all disabled:opacity-50"
        >
          <Download className="w-4 h-4" />
          {isDownloading ? 'Exporting...' : 'PPTX'}
        </button>
      </div>

      {/* Slide Counter - Mobile Friendly */}
      <div className="absolute bottom-4 left-4 z-[60] bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-white/60 text-xs font-mono">
        {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </motion.div>
  );
}