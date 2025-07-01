// components/NavButton.tsx
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface NavButtonProps {
  icon: React.ElementType;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ icon: Icon, children, active = false, onClick }) => (
  <button
    onClick={onClick}
    className={`
      group flex items-center gap-4 w-full px-4 py-3 my-1 rounded-xl font-semibold
      transition-all duration-200 relative overflow-hidden
      shadow-none hover:shadow-xl focus:outline-none
      ${active
        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-xl scale-[1.04]'
        : 'bg-white/10 text-purple-200 hover:bg-gradient-to-r hover:from-purple-500/70 hover:to-pink-500/60 hover:text-white'}
    `}
    style={{
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
    }}
  >
    <span className={`flex items-center justify-center w-9 h-9 rounded-lg transition-all
      ${active
        ? 'bg-white/20 shadow-lg'
        : 'bg-gradient-to-br from-purple-400/40 to-pink-400/30 group-hover:bg-white/20'
      }
    `}>
      <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
    </span>
    <span className="z-10">{children}</span>
    <ChevronRight
      size={16}
      className={`ml-auto transition-all duration-300 
        ${active ? 'rotate-90 text-white' : 'group-hover:translate-x-1 group-hover:text-white text-purple-200'}
      `}
    />
    {active && (
      <span
        className="absolute -inset-1 z-0 rounded-xl bg-gradient-to-r from-purple-400/40 to-pink-400/40 blur-2xl opacity-50"
        aria-hidden="true"
      />
    )}
  </button>
);

export default NavButton;
