// components/UserCard.tsx
import React from 'react';
import { Activity } from 'lucide-react';

const UserCard: React.FC<{ userEmail: string | null; isDarkMode: boolean; cardClasses: string }> = ({
  userEmail, isDarkMode, cardClasses,
}) => (
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
);

export default UserCard;
