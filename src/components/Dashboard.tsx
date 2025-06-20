import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import {
  Home, PlayCircle, Archive, CreditCard, Settings, Zap, TrendingUp,
  Download, Sparkles, ChevronRight, Activity
} from 'lucide-react';
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

        const res = await fetch('http://52.65.50.48:3000/download', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'yaml123456789',
          },
          body: JSON.stringify({}),
        });

        if (!res.ok) throw new Error(`API Error ${res.status}`);
        const data = await res.json();

        setStatus('✅ Twitter Space download completed successfully!');
        setTranscription(data.transcription || 'No transcription received.');
        setSummary(data.summary || 'No summary available.');
        setIsLoading(false);
      } catch (err: any) {
        setStatus(`❌ API Error: ${err.message}`);
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

  const StatCard = ({
    icon: Icon,
    title,
    value,
    trend,
    color,
  }: {
    icon: React.ElementType;
    title: string;
    value: string;
    trend: string;
    color: string;
  }) => (
    <div className={`${cardClasses} p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group cursor-pointer`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl bg-gradient-to-r ${color} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="text-green-500 flex items-center text-sm font-semibold">
          <TrendingUp className="w-4 h-4 mr-1" />
          {trend}
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-1">{value}</h3>
      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{title}</p>
    </div>
  );

  const NavButton = ({
    icon: Icon,
    children,
    active = false,
    onClick,
  }: {
    icon: React.ElementType;
    children: React.ReactNode;
    active?: boolean;
    onClick?: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`flex items-center justify-between w-full p-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${
        active
          ? 'bg-white/20 text-white shadow-lg scale-105'
          : 'text-purple-200 hover:text-white hover:bg-white/10'
      }`}
    >
      <div className="flex items-center gap-3">
        <Icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
        <span className="font-medium">{children}</span>
      </div>
      <ChevronRight size={16} className={`transition-transform duration-300 ${active ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
      {active && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-xl" />
      )}
    </button>
  );

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses} relative overflow-hidden`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="flex relative z-10 h-screen">
        {/* Sidebar */}
        <aside className={`w-80 flex flex-col ${sidebarClasses} shadow-2xl h-screen`}>
          <div className="p-8 pb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              SpacesCoHost
            </h2>
            <p className="text-purple-300 text-sm">AI-Powered Audio Intelligence</p>
          </div>

          <nav className="px-8 space-y-3 flex-1 overflow-y-auto">
            <NavButton icon={Home} onClick={() => navigate('/')}>Dashboard</NavButton>
            <NavButton icon={PlayCircle}>Start Session</NavButton>
            <NavButton icon={Archive}>Archives</NavButton>
            <NavButton icon={CreditCard} onClick={() => setShowPricing(true)}>Billing</NavButton>
            <NavButton icon={Settings}>Settings</NavButton>
          </nav>

          <div className="p-8 pt-6">
            <div className={`p-4 rounded-2xl ${cardClasses}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {userEmail ? userEmail.charAt(0).toUpperCase() : 'U'}
                </div>
                <div>
                  <p className="font-semibold text-sm">{userEmail ? userEmail.split('@')[0] : 'User'}</p>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Pro Member</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                <Activity className="w-3 h-3" />
                Online
              </div>
            </div>
          </div>
        </aside>

        {/* Main */}
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
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-3 rounded-xl ${cardClasses} hover:scale-110 transition-all duration-300 shadow-lg`}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
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

          <div className="space-y-6">
            {activeSection === 'transcription' && (
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
            )}

            {activeSection === 'summary' && (
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
            )}
          </div>
        </main>
      </div>

      {/* Pricing Modal */}
      {showPricing && <PricingModal onClose={() => setShowPricing(false)} />}
    </div>
  );
};

export default Dashboard;
