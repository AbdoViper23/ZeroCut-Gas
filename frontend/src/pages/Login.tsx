import React from "react";
import { Button } from "@/components/ui/button";
import ZeroCutLogo from "@/components/ZeroCutLogo";
import AbstractShapes from "@/components/AbstractShapes";
import { ArrowRight } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-background flex">
      {/* Left Section - Login Content */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-2xl">
        {/* Header with Logo */}
        <header className="absolute top-8 left-8 md:left-16 lg:left-24">
          <ZeroCutLogo />
        </header>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Title Section */}
          <div className="space-y-6">
            
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
                ZeroCut Gas
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary">
                100% Decentralized
              </h2>
            </div>
          </div>

          {/* Feature List */}
          <div className="space-y-4 text-foreground">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-gradient-surface rounded-lg flex items-center justify-center mt-0.5 border border-border/30">
                <div className="w-3 h-3 bg-gradient-primary rounded-sm"></div>
              </div>
              <div>
                <p className="font-medium">Bitcoin, Solana, Ethereum, ICP, and more</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-gradient-surface rounded-lg flex items-center justify-center mt-0.5 border border-border/30">
                <div className="w-3 h-3 bg-gradient-primary rounded-sm"></div>
              </div>
              <div>
                <p className="font-medium">Instant and private access anywhere</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-gradient-surface rounded-lg flex items-center justify-center mt-0.5 border border-border/30">
                <div className="w-3 h-3 bg-gradient-primary rounded-sm"></div>
              </div>
              <div>
                <p className="font-medium">100% onchain: peace of mind through advanced cryptography</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-4 pt-4">
            <Button variant="hero" size="xl" className="group">
              Open or Create
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="text-sm text-muted-foreground">
              By clicking this button, you agree to the{" "}
              <button className="text-primary hover:text-primary/80 transition-colors underline underline-offset-2">
                License Agreement
              </button>
            </div>
            
            <div className="pt-2">
              <Button variant="minimal" className="text-sm">
                Need help signing in?
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-8 left-8 md:left-16 lg:left-24 flex items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-sm">Incubated with ❤️ by</span>
            <span className="text-primary font-medium">AbdoViper</span>
            <span className="text-sm">© 2025</span>
          </div>
        </footer>
      </div>

      {/* Right Section - Abstract Shapes */}
      <div className="hidden lg:block flex-1 relative">
        <AbstractShapes />
        
        {/* Subtle overlay grid */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "30px 30px"
          }}
        />
      </div>
    </div>
  );
};

export default Login;