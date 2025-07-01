// components/Sidebar.tsx
import React from 'react';
import {
  Home, PlayCircle, Archive, CreditCard, Settings,
} from 'lucide-react';
import NavButton from './NavButton';
import UserCard from './UserCard';

const Sidebar: React.FC<{
  userEmail: string | null;
  isDarkMode: boolean;
  cardClasses: string;
  sidebarClasses: string;
  navigate: any;
  setShowPricing: (show: boolean) => void;
}> = ({
  userEmail, isDarkMode, cardClasses, sidebarClasses, navigate, setShowPricing,
}) => (
  <aside className={`w-80 flex flex-col ${sidebarClasses} shadow-2xl h-screen`}>
    <div className="p-8 pb-6">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
        SpacesCoHost
      </h2>
      <p className="text-purple-300 text-sm">AI-Powered Audio Intelligence</p>
    </div>
    <nav className="px-6 space-y-2 flex-1 overflow-y-auto mt-2">
      <NavButton icon={Home} onClick={() => navigate('/')}>Dashboard</NavButton>
      <NavButton icon={PlayCircle}>Start Session</NavButton>
      <NavButton icon={Archive}>Archives</NavButton>
      <NavButton icon={CreditCard} onClick={() => setShowPricing(true)}>Free & Premium</NavButton>
      <NavButton icon={Settings}>Settings</NavButton>
    </nav>
    <div className="p-8 pt-6">
      <UserCard userEmail={userEmail} isDarkMode={isDarkMode} cardClasses={cardClasses} />
    </div>
  </aside>
);

export default Sidebar;
