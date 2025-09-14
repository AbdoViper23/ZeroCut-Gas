import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import WalletSidebar from "@/components/WalletSidebar";
import WalletTopBar from "@/components/WalletTopBar";
import BalanceCard from "@/components/BalanceCard";
import TokenList from "@/components/TokenList";
import Orb from '@/components/Orb';
import InfiniteMenu from '@/components/InfiniteMenu';
import RippleGrid from '@/components/RippleGrid';

const items = [
  {
    image: '/Ethereum-logo.png',
    title: 'Ethereum',
    description: 'Smart contracts and DeFi ecosystem'
  },
  {
    image: '/base-logo.jpg',
    title: 'Base',
    description: 'Layer 2 solution built on Ethereum'
  },
  {
    image: '/BTC-logo.png',
    title: 'Bitcoin',
    description: 'The original cryptocurrency'
  },
  {
    image: '/arbitrum-logo.png',
    title: 'Arbitrum',
    description: 'Optimistic rollup for Ethereum'
  },
  {
    image: '/ICP-logo.jpeg',
    title: 'ICP',
    description: 'Internet Computer'
  }
];

// Content components for different sections  
const AssetsContent = ({ onActiveItemChange, activeInfiniteMenuItem }: { 
  onActiveItemChange: (index: number) => void, 
  activeInfiniteMenuItem: number 
}) => (
  <div className="space-y-6">
    <div style={{ 
      height: '350px', 
      width: '150%',
      position: 'relative',
      margin: '0 -15rem', // Extend much further beyond the container
      borderRadius: '0.75rem',
      overflow: 'hidden'
    }}>
      <InfiniteMenu 
        items={items}
        onActiveItemChange={onActiveItemChange}
      />
    </div>
    
    <BalanceCard />
    <TokenList selectedNetwork={activeInfiniteMenuItem} />
  </div>
);

const ActivityContent = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const fromTransfer = params.get('section') === 'activity';

  return (
    <div className="space-y-6">
      {fromTransfer && (
        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">✓</span>
            </div>
            <div>
              <h4 className="font-semibold text-green-400">Transaction Successful!</h4>
              <p className="text-sm text-muted-foreground">Your transfer has been completed successfully.</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="bg-gradient-surface border border-border/20 rounded-2xl p-8 shadow-soft text-center">
        <div className="space-y-4">
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center">
            <div className="w-8 h-8 bg-primary-foreground rounded-lg"></div>
          </div>
          <h3 className="text-xl font-semibold text-foreground">
            {fromTransfer ? "Transaction History" : "No Activity Yet"}
          </h3>
          <p className="text-muted-foreground">
            {fromTransfer 
              ? "Your recent transaction and history will appear here." 
              : "Your transaction history will appear here."
            }
          </p>
        </div>
      </div>
    </div>
  );
};

const ExploreContent = () => (
  <div className="bg-gradient-surface border border-border/20 rounded-2xl p-8 shadow-soft text-center">
    <div className="space-y-4">
      <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center">
        <div className="w-8 h-8 bg-primary-foreground rounded-lg"></div>
      </div>
      <h3 className="text-xl font-semibold text-foreground">Discover DeFi</h3>
      <p className="text-muted-foreground">Explore decentralized applications and services.</p>
    </div>
  </div>
);

const RewardsContent = () => (
  <div className="bg-gradient-surface border border-border/20 rounded-2xl p-8 shadow-soft text-center">
    <div className="space-y-4">
      <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center">
        <div className="w-8 h-8 bg-primary-foreground rounded-lg"></div>
      </div>
      <h3 className="text-xl font-semibold text-foreground">Daily Rewards</h3>
      <p className="text-muted-foreground">Complete tasks and earn ZeroCut Sprinkles daily.</p>
    </div>
  </div>
);

const SettingsContent = () => (
  <div className="bg-gradient-surface border border-border/20 rounded-2xl p-8 shadow-soft text-center">
    <div className="space-y-4">
      <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center">
        <div className="w-8 h-8 bg-primary-foreground rounded-lg"></div>
      </div>
      <h3 className="text-xl font-semibold text-foreground">Wallet Settings</h3>
      <p className="text-muted-foreground">Manage your wallet preferences and security.</p>
    </div>
  </div>
);

const Wallet = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("assets");
  const [activeInfiniteMenuItem, setActiveInfiniteMenuItem] = useState(0);

  // Check for section parameter in URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    if (section) {
      setActiveSection(section);
    }
  }, [location.search]);

  // Function to handle active item change
  const handleActiveItemChange = (itemIndex: number) => {
    setActiveInfiniteMenuItem(itemIndex);
    console.log('Active item changed to:', itemIndex, items[itemIndex]);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "assets":
        return <AssetsContent 
          onActiveItemChange={handleActiveItemChange}
          activeInfiniteMenuItem={activeInfiniteMenuItem}
        />;
      case "activity":
        return <ActivityContent />;
      case "explore":
        return <ExploreContent />;
      case "rewards":
        return <RewardsContent />;
      case "settings":
        return <SettingsContent />;
      default:
        return <AssetsContent 
          onActiveItemChange={handleActiveItemChange}
          activeInfiniteMenuItem={activeInfiniteMenuItem}
        />;
    }
  };

  return (
      <div className="min-h-screen bg-gradient-background flex" style={{ position: "relative" }}>
        {/* Background */}
        <div style={{ 
          position: "fixed", 
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: -1, 
          overflow: "hidden",
          width: "60%", 
          height: "60%",
          minWidth: "400px", 
          minHeight: "400px",
          pointerEvents: "none"
        }}>
          <RippleGrid
            enableRainbow={false}
            gridColor="#00ffe1"
            rippleIntensity={0.05}
            gridSize={10}
            gridThickness={15}
            mouseInteraction={true}
            mouseInteractionRadius={1.2}
            opacity={0.8}
          />
        
         {/* <Orb
          hoverIntensity={2}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        /> */}

        </div>
        {/* Sidebar */}
      <WalletSidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <WalletTopBar />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Wallet;