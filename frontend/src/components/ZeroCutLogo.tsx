import React from "react";

const ZeroCutLogo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        {/* Logo Icon - Modern geometric design */}
        <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
          <div className="w-6 h-6 relative">
            {/* Stylized "Z" symbol */}
            <div className="absolute inset-0 flex flex-col justify-between">
              <div className="h-0.5 w-full bg-primary-foreground rounded-full"></div>
              <div className="h-0.5 w-3/4 bg-primary-foreground rounded-full self-end transform rotate-45 origin-right"></div>
              <div className="h-0.5 w-full bg-primary-foreground rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-foreground tracking-tight">
          ZeroCut Gas
        </h1>
        <p className="text-xs text-muted-foreground -mt-0.5">
          Smart Gas Optimization
        </p>
      </div>
    </div>
  );
};

export default ZeroCutLogo;