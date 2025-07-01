// components/TranscriptionCard.tsx
import React from 'react';
import { PlayCircle } from 'lucide-react';

const TranscriptionCard: React.FC<{ transcription: string; cardClasses: string; isDarkMode: boolean }> = ({
  transcription, cardClasses, isDarkMode,
}) => (
  <div className={`${cardClasses} p-8 rounded-2xl shadow-xl transform transition-all duration-500`}>
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl">
        <PlayCircle className="w-6 h-6 text-white" />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-1">Live Transcription</h2>
        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Real-time audio-to-text conversion
        </p>
      </div>
    </div>
    <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-purple-50/50'} border-2 border-dashed ${isDarkMode ? 'border-gray-600' : 'border-purple-200'}`}>
      <p className={`whitespace-pre-wrap leading-relaxed ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
        {transcription || 'Transcription will appear here once processing begins...'}
      </p>
    </div>
  </div>
);

export default TranscriptionCard;