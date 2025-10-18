import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export const DiscordButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-100">
      <a
        href="https://discord.gg/your-server"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div className="w-14 h-14 bg-[#5865F2] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-glow-discord transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer">
          <MessageCircle className="w-7 h-7" />
        </div>

        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-neutral-900 text-white text-sm rounded-lg whitespace-nowrap shadow-lg animate-float">
            Join our Discord
            <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-900"></div>
          </div>
        )}

        <div className="absolute inset-0 bg-[#5865F2] rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
      </a>
    </div>
  );
};
