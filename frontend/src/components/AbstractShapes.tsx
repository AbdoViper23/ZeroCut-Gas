import React from "react";

const AbstractShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary gradient orb */}
      <div 
        className="absolute top-20 right-20 w-80 h-80 rounded-full opacity-30 animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, hsl(217 91% 70% / 0.4) 0%, hsl(217 91% 59% / 0.2) 40%, transparent 70%)",
          filter: "blur(40px)"
        }}
      />
      
      {/* Secondary purple orb */}
      <div 
        className="absolute bottom-40 right-40 w-60 h-60 rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, hsl(260 91% 60% / 0.3) 0%, hsl(260 91% 45% / 0.15) 50%, transparent 70%)",
          filter: "blur(30px)",
          animation: "pulse-glow 3s ease-in-out infinite alternate"
        }}
      />
      
      {/* Subtle accent orbs */}
      <div 
        className="absolute top-1/3 right-10 w-32 h-32 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(217 91% 80% / 0.3) 0%, transparent 60%)",
          filter: "blur(20px)"
        }}
      />
      
      <div 
        className="absolute bottom-20 right-1/4 w-24 h-24 rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(180 91% 60% / 0.4) 0%, transparent 50%)",
          filter: "blur(15px)"
        }}
      />
      
      {/* Geometric lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 400 600" fill="none">
          <path
            d="M350 100 L380 200 L320 250 L340 350"
            stroke="url(#gradient1)"
            strokeWidth="1"
            opacity="0.3"
          />
          <path
            d="M300 400 L350 450 L290 500"
            stroke="url(#gradient2)"
            strokeWidth="1"
            opacity="0.2"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(217 91% 70%)" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="hsl(217 91% 70%)" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(260 91% 60%)" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="hsl(260 91% 60%)" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default AbstractShapes;