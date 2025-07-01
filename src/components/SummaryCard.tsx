// components/SummaryCard.tsx
import React from 'react';
import { Sparkles } from 'lucide-react';

const SummaryCard: React.FC<{ summary: string; cardClasses: string; isDarkMode: boolean }> = ({
  summary, cardClasses, isDarkMode,
}) => (
  <div className={`${cardClasses} p-8 rounded-2xl shadow-xl transform transition-all duration-500`}>
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl">
        <Sparkles className="w-6 h-6 text-white" />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-1">AI Summary</h2>
        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Intelligent content analysis and key points
        </p>
      </div>
    </div>
    <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-pink-50/50'} border-2 border-dashed ${isDarkMode ? 'border-gray-600' : 'border-pink-200'}`}>
      <p className={`whitespace-pre-wrap leading-relaxed ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
        {summary || 'AI-generated summary will appear here after transcription completes...'}
      </p>
    </div>
  </div>
);

export default SummaryCard;