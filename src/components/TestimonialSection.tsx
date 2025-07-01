import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Tech Influencer",
    emoji: "🦉", 
    text: "SpacesCoHost has completely transformed how I run my weekly tech spaces. The real-time transcription and summaries are game-changers!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Consultant",
    emoji: "🦊", 
    text: "The tweet thread generation feature alone is worth the subscription. It saves me hours of work after each Space session.",
    rating: 5,
  },
  {
    name: "Alex Rivera",
    role: "Community Manager",
    emoji: "🐼", 
    text: "As someone with hearing difficulties, the transcription feature makes Twitter Spaces accessible to me for the first time. Thank you!",
    rating: 5,
  },
];

const stars = "✦✦✦✦✦";

const TestimonialSection: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => (
  <section className="py-32 px-3 relative bg-transparent" id="testimonials">
    <h2 className="text-4xl lg:text-5xl font-bold text-center mb-3">
      <span className={isDarkMode ? "text-white" : "text-gray-900"}>
        Loved by <span className="underline decoration-purple-400">Content Creators</span>
      </span>
    </h2>
    <p className="text-center text-lg mb-14 text-gray-400 max-w-3xl mx-auto">
      See what our users are saying about how SpacesCoHost has transformed their Twitter Spaces experience.
    </p>
    <div className="flex flex-col lg:flex-row justify-center gap-10 max-w-6xl mx-auto">
      {testimonials.map((t, i) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.15, duration: 0.65, type: "spring" }}
          viewport={{ once: true }}
          className={`flex-1 min-w-[320px] rounded-2xl border-2 p-8 shadow-lg transition 
            ${isDarkMode
              ? "bg-gradient-to-br from-white/5 via-purple-900/20 to-black/40 border-purple-700 text-white"
              : "bg-gradient-to-br from-purple-50/70 to-white border-purple-200 text-gray-800"
            }`}
        >
          <div className="flex items-center mb-3">
            <span className="text-purple-400 text-xl mr-1">{stars}</span>
          </div>
          <blockquote className="text-lg mb-7 italic">{`"${t.text}"`}</blockquote>
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-purple-400 bg-white text-2xl"
              style={{ boxShadow: "0 0 0 4px #f3e8ff" }}
              aria-label={t.name + " avatar"}
            >
              {t.emoji}
            </div>
            <div>
              <span className="font-semibold">{t.name}</span>
              <div className="text-xs text-purple-400">{t.role}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TestimonialSection;
