import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    title: "Connect Your Space",
    desc: "Paste your Twitter Space URL or upload an audio file to get started.",
  },
  {
    title: "Configure Settings",
    desc: "Choose your summary interval and other preferences.",
  },
  {
    title: "Go Live",
    desc: "Start your Space and let SpacesCoHost work its magic.",
  },
];

const OnboardingSteps: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  return (
    <section className="py-24 bg-transparent" ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <span className={isDarkMode ? "text-white" : "text-gray-900"}>
            Simple <span className="underline decoration-purple-400">3-Step Process</span>
          </span>
        </motion.h2>
        <motion.p
          className="text-center text-lg mb-16 text-gray-400"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          Getting started with SpacesCoHost is quick and easy. Follow these simple steps to enhance your Twitter Spaces.
        </motion.p>
        <div className="flex flex-col md:flex-row justify-center gap-16">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              className="flex flex-col items-center flex-1"
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.4 + idx * 0.18,
                ease: "easeOut",
              }}
            >
              {/* Step Circle */}
              <div className="mb-6 flex flex-col items-center">
                <motion.div
                  className={`
                    w-20 h-20 rounded-full flex items-center justify-center
                    text-3xl font-bold
                    shadow-xl
                    relative
                    z-10
                    ${
                      isDarkMode
                        ? "bg-gradient-to-br from-purple-700 to-purple-900 text-white"
                        : "bg-gradient-to-br from-purple-400 to-purple-600 text-white"
                    }
                    before:content-[''] before:absolute before:inset-0 before:rounded-full
                    before:-z-10 before:blur-xl before:opacity-70
                    ${
                      isDarkMode
                        ? "before:bg-purple-800/80"
                        : "before:bg-purple-400/70"
                    }
                  `}
                  style={{
                    boxShadow: isDarkMode
                      ? "0 0 32px 0 #a78bfa, 0 0 48px 8px #a21caf33"
                      : "0 0 32px 0 #c4b5fd, 0 0 48px 8px #f472b633",
                  }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.55 + idx * 0.2,
                    type: "spring",
                    stiffness: 280,
                  }}
                >
                  {`0${idx + 1}`}
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">{step.title}</h3>
              <p className="text-center text-lg text-gray-400 max-w-xs">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnboardingSteps;
