import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  ChevronDown, 
  Settings, 
  HelpCircle, 
  User,
  Network
} from "lucide-react";

const WalletTopBar = () => {
  return (
    <div className="h-16 bg-gradient-surface border-b border-border/20 flex items-center justify-end px-6 gap-4">
      {/* Network Selector */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            <Network size={16} />
            All networks
            <ChevronDown size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem>All networks</DropdownMenuItem>
          <DropdownMenuItem>Ethereum</DropdownMenuItem>
          <DropdownMenuItem>Bitcoin</DropdownMenuItem>
          <DropdownMenuItem>Solana</DropdownMenuItem>
          <DropdownMenuItem>Internet Computer</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Quick Actions */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <HelpCircle size={18} />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings size={18} />
        </Button>
        <Button variant="ghost" size="icon">
          <User size={18} />
        </Button>
      </div>
    </div>
  );
};

export default WalletTopBar;