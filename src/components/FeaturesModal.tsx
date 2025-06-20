import React from 'react';
import { Music, Zap, Bot, X } from 'lucide-react';

interface FeaturesModalProps {
  onClose: () => void;
  cardClasses: string;
}

const FeaturesModal: React.FC<FeaturesModalProps> = ({ onClose, cardClasses }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 w-full max-w-6xl max-h-[90vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Powerful Features</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X size={24} />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className={`${cardClasses} p-8 rounded-lg border shadow-lg`}>
          <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
            <Music className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Real-time Transcription</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Get live transcriptions of Twitter Spaces as they happen. Never miss important conversations or insights.
          </p>
        </div>

        <div className={`${cardClasses} p-8 rounded-lg border shadow-lg`}>
          <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Smart Summaries</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Generate concise summaries of long Twitter Spaces sessions. Perfect for sharing key takeaways with your audience.
          </p>
        </div>

        <div className={`${cardClasses} p-8 rounded-lg border shadow-lg`}>
          <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Content Generation</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Transform your Twitter Spaces into blog posts, social media content, and newsletters automatically.
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <button onClick={onClose} className="text-purple-600 hover:underline">
          ← Back to Home
        </button>
      </div>
    </div>
  </div>
);

export default FeaturesModal;
