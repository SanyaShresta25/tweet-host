import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  cardClasses: string;
}

const faqs: FaqItem[] = [
  {
    question: 'How does SpacesCoHost work with Twitter Spaces?',
    answer:
      'SpacesCoHost connects to Twitter Spaces in real-time and uses advanced AI to transcribe conversations as they happen. You can then generate summaries, extract key insights, and create content from the transcribed material.',
  },
  {
    question: 'Is the transcription accurate?',
    answer:
      'Our AI-powered transcription achieves 95%+ accuracy for clear audio. The system continuously learns and improves, and works best with good audio quality and minimal background noise.',
  },
  {
    question: 'Can I use this for private Twitter Spaces?',
    answer:
      'SpacesCoHost only works with public Twitter Spaces that you host or have been invited to as a speaker. We respect Twitter\'s privacy settings and cannot access private or restricted Spaces.',
  },
  {
    question: 'What types of content can I generate?',
    answer:
      'You can generate tweet threads, blog post drafts, newsletter content, key quotes, speaker highlights, and custom summaries. Our AI adapts to your preferred writing style and audience.',
  },
  {
    question: 'Do you store my Twitter Spaces data?',
    answer:
      'We temporarily process audio for transcription but don\'t permanently store your Twitter Spaces recordings. Transcripts and generated content are saved to your account and can be deleted anytime.',
  },
  {
    question: 'Is there a free trial available?',
    answer:
      'Yes! Our free plan includes 10 minutes of transcription per month, perfect for trying out the service. You can upgrade anytime to access more minutes and advanced features.',
  },
];

const FaqSection: React.FC<FaqSectionProps> = ({ cardClasses }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.15, once: true });

  return (
    <section className="mt-64" ref={ref}>
      <motion.h2
        className="text-4xl font-bold text-center text-purple-600 mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={`${cardClasses} p-6 rounded-lg border shadow-lg`}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.18 + index * 0.15,
              ease: "easeOut",
            }}
          >
            <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
            <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
