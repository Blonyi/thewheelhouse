
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-12 md:h-16" }) => {
  return (
    <div className={`flex items-center gap-3 ${className} select-none cursor-pointer group active:scale-95 transition-transform`}>
      <div className="relative">
        <div className="absolute -inset-6 bg-cyan-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="absolute -inset-6 bg-pink-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
        
        <div className="relative flex flex-col items-start leading-[0.75]">
          <span className="text-[14px] font-black text-cyan-400 tracking-[0.8em] drop-shadow-[0_0_10px_#06b6d4] mb-[-4px]">
            THE
          </span>
          <div className="flex items-center relative">
            <span className="font-bungee text-4xl md:text-6xl tracking-tighter text-white drop-shadow-[0_0_20px_rgba(236,72,153,0.8)] transition-all group-hover:scale-105">
              WHEELHOUSE
            </span>
          </div>
          {/* Neon accent line */}
          <div className="w-full h-[4px] mt-3 relative overflow-hidden rounded-full shadow-[0_0_15px_rgba(6,182,212,0.6)] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400">
            <div className="absolute inset-0 bg-white/20 blur-[1px] animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
