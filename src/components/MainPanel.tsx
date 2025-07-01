// components/MainPanel.tsx
import React from 'react';
import SectionTabs from './SectionTabs';
import TranscriptionCard from './TranscriptionCard';
import SummaryCard from './SummaryCard';
import { Download, Zap } from 'lucide-react';

const MainPanel: React.FC<{
  activeSection: 'transcription' | 'summary';
  setActiveSection: (section: 'transcription' | 'summary') => void;
  isDarkMode: boolean;
  cardClasses: string;
  status: string;
  isLoading: boolean;
  transcription: string;
  summary: string;
  onThemeToggle: () => void;
  onShowPricing: () => void;
}> = ({
  activeSection, setActiveSection, isDarkMode, cardClasses,
  status, isLoading, transcription, summary, onThemeToggle, onShowPricing,
}) => (
  <main className="flex-1 p-10 overflow-y-auto">
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
          Welcome back!
        </h1>
        <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Here's what's happening with your audio sessions today
        </p>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={onThemeToggle}
          className={`p-3 rounded-xl ${cardClasses} hover:scale-110 transition-all duration-300 shadow-lg`}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
        <button
          onClick={onShowPricing}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Export Data
        </button>
      </div>
    </div>

    <div className={`${cardClasses} p-6 rounded-2xl shadow-xl mb-8 border-l-4 border-l-green-500`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-green-500/20 rounded-xl">
            <Zap className="w-6 h-6 text-green-500" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">System Status</h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{status}</p>
          </div>
        </div>
        {isLoading && (
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-100" />
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-200" />
          </div>
        )}
      </div>
    </div>

    <SectionTabs
      activeSection={activeSection}
      setActiveSection={setActiveSection}
      cardClasses={cardClasses}
      isDarkMode={isDarkMode}
    />

    <div className="space-y-6">
      {activeSection === 'transcription' ? (
        <TranscriptionCard transcription={transcription} cardClasses={cardClasses} isDarkMode={isDarkMode} />
      ) : (
        <SummaryCard summary={summary} cardClasses={cardClasses} isDarkMode={isDarkMode} />
      )}
    </div>
  </main>
);

export default MainPanel;
