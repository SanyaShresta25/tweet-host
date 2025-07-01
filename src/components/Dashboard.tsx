import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import MainPanel from './MainPanel';
import PricingModal from './PricingModal';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState('Checking API...');
  const [transcription, setTranscription] = useState('');
  const [summary, setSummary] = useState('');
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [activeSection, setActiveSection] = useState<'transcription' | 'summary'>('transcription');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUserEmail(user?.email || 'User');
    };

    const fetchData = async () => {
      setIsLoading(true);
      try {
        setStatus('🔄 Connecting to Twitter Space...');
        const res = await fetch('http://localhost:5000/api/download');
        if (!res.ok) throw new Error(`API Error ${res.status}`);
        const data = await res.json();
        setStatus('✅ Twitter Space download completed successfully!');
        setTranscription(data.transcription || 'No transcription received.');
        setSummary(data.summary || 'No summary available.');
        setIsLoading(false);
      } catch (err) {
        let errorMsg = "Unknown error";
        if (err instanceof Error) {
          errorMsg = err.message;
        } else if (typeof err === "string") {
          errorMsg = err;
        }
        setStatus(`❌ API Error: ${errorMsg}`);
        setIsLoading(false);
      }
    };

    getUser();
    fetchData();
  }, []);

  const themeClasses = isDarkMode
    ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white'
    : 'bg-gradient-to-br from-purple-50 via-white to-purple-100 text-gray-900';

  const cardClasses = isDarkMode
    ? 'bg-white/10 backdrop-blur-xl border border-white/20'
    : 'bg-white/80 backdrop-blur-xl border border-purple-200/50';

  const sidebarClasses = isDarkMode
    ? 'bg-gradient-to-b from-purple-900/90 to-gray-900/90 backdrop-blur-xl border-r border-white/10'
    : 'bg-gradient-to-b from-purple-800/90 to-purple-900/90 backdrop-blur-xl border-r border-purple-300/30';

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses} relative overflow-hidden`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="flex relative z-10 h-screen">
        <Sidebar
          userEmail={userEmail}
          isDarkMode={isDarkMode}
          cardClasses={cardClasses}
          sidebarClasses={sidebarClasses}
          navigate={navigate}
          setShowPricing={setShowPricing}
        />

        <MainPanel
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isDarkMode={isDarkMode}
          cardClasses={cardClasses}
          status={status}
          isLoading={isLoading}
          transcription={transcription}
          summary={summary}
          onThemeToggle={() => setIsDarkMode((v) => !v)}
          onShowPricing={() => setShowPricing(true)}
        />
      </div>

      {showPricing && <PricingModal onClose={() => setShowPricing(false)} />}
    </div>
  );
};

export default Dashboard;
