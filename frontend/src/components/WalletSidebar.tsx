import React from "react";
import { cn } from "@/lib/utils";
import ZeroCutLogo from "./ZeroCutLogo";
import { 
  Wallet, 
  Activity, 
  Compass, 
  Gift, 
  Settings,
  LucideIcon
} from "lucide-react";

interface SidebarItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

const sidebarItems: SidebarItem[] = [
  { id: "assets", label: "Assets", icon: Wallet },
  { id: "activity", label: "Activity", icon: Activity },
  { id: "explore", label: "Explore", icon: Compass },
  { id: "rewards", label: "Rewards", icon: Gift },
  { id: "settings", label: "Settings", icon: Settings },
];

interface WalletSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const WalletSidebar: React.FC<WalletSidebarProps> = ({ activeSection, onSectionChange }) => {
  return (
    <div className="w-64 bg-gradient-surface border-r border-border/20 flex flex-col">
      {/* Header with Logo */}
      <div className="p-6 border-b border-border/20">
        <ZeroCutLogo />
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                  "hover:bg-surface/50 text-left",
                  isActive && "bg-gradient-primary text-primary-foreground shadow-soft"
                )}
              >
                <Icon 
                  size={20} 
                  className={cn(
                    "transition-colors",
                    isActive ? "text-primary-foreground" : "text-muted-foreground"
                  )} 
                />
                <span className={cn(
                  "font-medium transition-colors",
                  isActive ? "text-primary-foreground" : "text-foreground"
                )}>
                  {item.label}
                </span>
                {item.id === "rewards" && (
                  <span className="ml-auto bg-destructive text-destructive-foreground text-xs px-2 py-0.5 rounded-full">
                    NEW
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default WalletSidebar;