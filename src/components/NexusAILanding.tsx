import React, { useState } from 'react';
import { Clock, Zap } from 'lucide-react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import LoginModal from '../components/LoginModal';
import SignupModal from '../components/SignupModal';
import FeaturesModal from '../components/FeaturesModal';
import PricingModal from '../components/PricingModal';
import FaqSection from '../components/FaqSection';
import logo from '../assets/logo.png';

const NexusAILanding: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: loginEmail,
      password: loginPassword,
    });
    if (error) alert('Login failed: ' + error.message);
    else {
      alert('Logged in!');
      navigate('/dashboard');
    }
  };

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({
      email: signupEmail,
      password: signupPassword,
    });
    if (error) alert('Signup failed: ' + error.message);
    else alert('Signup successful! Please check your email.');
  };

  const themeClasses = isDarkMode
    ? 'bg-gray-900 text-white'
    : 'bg-white text-gray-900';

  const cardClasses = isDarkMode
    ? 'bg-gray-800 border-gray-700 text-white'
    : 'bg-white border-gray-200 text-gray-900';

  return (
    <div className={`min-h-screen ${themeClasses} transition-colors duration-300`}>
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
         <img
  src={logo}
  alt="SpacesCoHost Logo"
  className="w-10 h-10 rounded-lg object-cover"
/>
          <div className="flex flex-col">
            <span className="text-xl font-bold">SpacesCoHost</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">by NexusVoidAI</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => setShowFeatures(true)} className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Features</button>
            <button onClick={() => setShowPricing(true)} className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Pricing</button>
          </nav>
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <button onClick={() => setShowLogin(true)} className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">Login</button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left flex flex-col justify-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-purple-600">Your AI Co-Host</span>
              <br />
              <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>for Twitter Spaces</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl leading-relaxed">
              Transcribe, summarize, and generate content from Twitter Spaces in real-time.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <button onClick={() => setShowLogin(true)} className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold text-lg">Get Started</button>
              <button onClick={() => setShowFeatures(true)} className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900 transition-colors font-semibold text-lg">View Features</button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-center">
            <div className="relative">
              <div className="w-72 h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-2xl">
                <Clock className="w-24 h-24 lg:w-28 lg:h-28 text-white" />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full opacity-70"></div>
              <div className="absolute top-8 -left-8 w-4 h-4 bg-purple-400 rounded-full opacity-60"></div>
              <div className="absolute bottom-8 -right-8 w-5 h-5 bg-purple-400 rounded-full opacity-75"></div>
            </div>
          </div>
        </div>

        <FaqSection cardClasses={cardClasses} />
      </main>

      {showLogin && (
        <LoginModal
          email={loginEmail}
          setEmail={setLoginEmail}
          password={loginPassword}
          setPassword={setLoginPassword}
          onClose={() => setShowLogin(false)}
          onLogin={handleLogin}
          onSwitchToSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}

      {showSignup && (
        <SignupModal
          email={signupEmail}
          setEmail={setSignupEmail}
          password={signupPassword}
          setPassword={setSignupPassword}
          onClose={() => setShowSignup(false)}
          onSignup={handleSignup}
          onSwitchToLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}

      {showPricing && <PricingModal onClose={() => setShowPricing(false)} />}
      {showFeatures && <FeaturesModal onClose={() => setShowFeatures(false)} cardClasses={cardClasses} />}
    </div>
  );
};

export default NexusAILanding;
