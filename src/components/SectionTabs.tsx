// components/SectionTabs.tsx
import React from 'react';

const SectionTabs: React.FC<{
  activeSection: 'transcription' | 'summary';
  setActiveSection: (section: 'transcription' | 'summary') => void;
  cardClasses: string;
  isDarkMode: boolean;
}> = ({ activeSection, setActiveSection, cardClasses }) => (
  <div className="mb-6">
    <div className="flex gap-4">
      {['transcription', 'summary'].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveSection(tab as 'transcription' | 'summary')}
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            activeSection === tab
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
              : `${cardClasses} hover:scale-105`
          }`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  </div>
);

export default SectionTabs;
