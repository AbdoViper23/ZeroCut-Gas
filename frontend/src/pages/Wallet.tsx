import React, { useState } from "react";
import WalletSidebar from "@/components/WalletSidebar";
import WalletTopBar from "@/components/WalletTopBar";
import BalanceCard from "@/components/BalanceCard";
import PromoCard from "@/components/PromoCard";
import TokenList from "@/components/TokenList";

// Content components for different sections
const AssetsContent = () => (
  <div className="space-y-6">
    <BalanceCard />
    <PromoCard />
    <TokenList />
  </div>
);

const ActivityContent = () => (
  <div className="bg-gradient-surface border border-border/20 rounded-2xl p-8 shadow-soft text-center">
    <div className="space-y-4">
      <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center">
        <div className="w-8 h-8 bg-primary-foreground rounded-lg"></div>
      </div>
      <h3 className="text-xl font-semibold text-foreground">No Activity Yet</h3>
      <p className="text-muted-foreground">Your transaction history will appear here.</p>
    </div>
  </div>
);

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
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/20 text-destructive rounded-full">
        <span className="text-sm font-medium">NEW</span>
      </div>
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
  const [activeSection, setActiveSection] = useState("assets");

  const renderContent = () => {
    switch (activeSection) {
      case "assets":
        return <AssetsContent />;
      case "activity":
        return <ActivityContent />;
      case "explore":
        return <ExploreContent />;
      case "rewards":
        return <RewardsContent />;
      case "settings":
        return <SettingsContent />;
      default:
        return <AssetsContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-background flex">
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