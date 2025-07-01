import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock } from "lucide-react";

interface HeroSectionProps {
  isDarkMode: boolean;
  onGetStarted: () => void;
  onViewFeatures: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  isDarkMode,
  onGetStarted,
  onViewFeatures,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4, once: true });

  return (
    <section
      ref={ref}
      className="min-h-[70vh] flex flex-col justify-center relative overflow-visible pt-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-center gap-4 lg:gap-8 -mt-10"
      >
        {/* Left: Centered text/buttons, animated */}
        <motion.div
          className="lg:w-2/5 flex flex-col items-center lg:items-end text-center lg:text-right"
          initial={false}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-3 leading-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Your AI Co-Host
          </h1>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-5">
            for Twitter Spaces
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
            Transcribe, summarize, and generate content from Twitter Spaces in real-time.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-end">
            <button
              onClick={onGetStarted}
              className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all font-semibold text-lg shadow-lg"
            >
              Get Started
            </button>
            <button
              onClick={onViewFeatures}
              className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900 transition-all font-semibold text-lg"
            >
              View Features
            </button>
          </div>
        </motion.div>

        {/* Right: Animated circle */}
        <motion.div
          className="lg:w-2/5 flex justify-center relative"
          initial={false}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
          transition={{ delay: 0.25, duration: 0.9, type: "spring" }}
        >
          <motion.div
            className="w-72 h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-2xl relative"
            animate={{ y: [0, -12, 0, 12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
            style={{ boxShadow: "0 0 90px 0 #a78bfa44" }}
          >
            <Clock className="w-24 h-24 lg:w-28 lg:h-28 text-white" />
            {/* Decorative animated dots */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full opacity-80"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full opacity-70"
              animate={{ y: [0, 8, 0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
            />
            <motion.div
              className="absolute top-8 -left-8 w-4 h-4 bg-purple-400 rounded-full opacity-60"
              animate={{ y: [0, -6, 0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, delay: 0.8 }}
            />
            <motion.div
              className="absolute bottom-8 -right-8 w-5 h-5 bg-purple-400 rounded-full opacity-75"
              animate={{ x: [0, -6, 0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2.7, delay: 1 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
