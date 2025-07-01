import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import LoginModal from '../components/LoginModal';
import SignupModal from '../components/SignupModal';
import FeaturesModal from '../components/FeaturesModal';
import PricingModal from '../components/PricingModal';
import FaqSection from '../components/FaqSection';
import logo from '../assets/logo.png';
import OnboardingSteps from '../components/OnboardingSteps';
import HeroSection from "../components/HeroSection";
import TestimonialSection from '../components/TestimonialSection';
import Footer from '../components/Footer';


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

 <HeroSection
  isDarkMode={isDarkMode}
  onGetStarted={() => setShowLogin(true)}
  onViewFeatures={() => setShowFeatures(true)}
/>
<div className="h-32 md:h-48"></div>

  <OnboardingSteps isDarkMode={isDarkMode} />
  <TestimonialSection isDarkMode={isDarkMode} />
  <FaqSection cardClasses={cardClasses} />
  <Footer isDarkMode={isDarkMode} />

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
