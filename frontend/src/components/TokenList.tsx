import React from "react";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

interface Token {
  id: string;
  name: string;
  symbol: string;
  network: string;
  balance: string;
  value: string;
  icon: string;
  color: string;
}

// Networks tokens mapping
const networkTokens: Record<number, Token[]> = {
  // Ethereum
  0: [
    {
      id: "usdt-eth",
      name: "Tether USD",
      symbol: "USDT",
      network: "Ethereum",
      balance: "0",
      value: "$0.00",
      icon: "₮",
      color: "bg-green-500"
    },
    {
      id: "usdc-eth",
      name: "USDC",
      symbol: "USDC",
      network: "Ethereum",
      balance: "0",
      value: "$0.00",
      icon: "$",
      color: "bg-blue-600"
    },
    {
      id: "eth",
      name: "Ethereum",
      symbol: "ETH",
      network: "Ethereum",
      balance: "0",
      value: "$0.00",
      icon: "◊",
      color: "bg-blue-500"
    }
  ],
  // Base
  1: [
    {
      id: "eth-base",
      name: "Ethereum",
      symbol: "ETH",
      network: "Base",
      balance: "0",
      value: "$0.00",
      icon: "◊",
      color: "bg-blue-500"
    }
  ],
  // Bitcoin
  2: [
    {
      id: "btc",
      name: "Bitcoin",
      symbol: "BTC",
      network: "Bitcoin",
      balance: "0",
      value: "$0.00",
      icon: "₿",
      color: "bg-orange-500"
    }
  ],
  // Arbitrum
  3: [
    {
      id: "eth-arbitrum",
      name: "Ethereum",
      symbol: "ETH",
      network: "Arbitrum",
      balance: "0",
      value: "$0.00",
      icon: "◊",
      color: "bg-blue-500"
    }
  ],
  // ICP
  4: [
    {
      id: "cketh",
      name: "Chain Key Ethereum",
      symbol: "ckETH",
      network: "Internet Computer",
      balance: "0",
      value: "$0.00",
      icon: "◊",
      color: "bg-blue-500"
    },
    {
      id: "ckusdt",
      name: "Chain Key USDT",
      symbol: "ckUSDT",
      network: "Internet Computer",
      balance: "0",
      value: "$0.00",
      icon: "₮",
      color: "bg-green-500"
    },
    {
      id: "ckusdc",
      name: "Chain Key USDC",
      symbol: "ckUSDC",
      network: "Internet Computer",
      balance: "0",
      value: "$0.00",
      icon: "$",
      color: "bg-blue-600"
    },
    {
      id: "ckbtc",
      name: "Chain Key Bitcoin",
      symbol: "ckBTC",
      network: "Internet Computer",
      balance: "0",
      value: "$0.00",
      icon: "₿",
      color: "bg-orange-500"
    }
  ]
};

interface TokenListProps {
  selectedNetwork?: number;
}

const TokenList = ({ selectedNetwork = 0 }: TokenListProps) => {
  // Get tokens for the selected network
  const tokens = networkTokens[selectedNetwork] || networkTokens[0];
  
  // Network names
  const networkNames = ["Ethereum", "Base", "Bitcoin", "Arbitrum", "ICP"];
  const currentNetwork = networkNames[selectedNetwork] || "Ethereum";
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Tokens</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Network: <span className="text-primary font-medium">{currentNetwork}</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            Search
          </Button>
          <Button variant="ghost" size="sm">
            Filter
          </Button>
        </div>
      </div>

      {/* Token List */}
      <div className="space-y-2">
        {tokens.map((token) => (
          <div
            key={token.id}
            className="bg-gradient-surface border border-border/20 rounded-xl p-4 hover:bg-surface/50 transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Token Icon */}
                <div className={`w-10 h-10 ${token.color} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-soft`}>
                  {token.icon}
                </div>
                
                {/* Token Info */}
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">{token.symbol}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{token.name}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {token.network}
                  </p>
                </div>
              </div>

              {/* Balance */}
              <div className="text-right">
                <div className="font-semibold text-foreground">{token.balance}</div>
                <div className="text-sm text-muted-foreground">{token.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Manage Tokens Button */}
      <div className="flex justify-center pt-4">
        <Button variant="outline" className="gap-2">
          <Settings size={16} />
          Manage tokens
        </Button>
      </div>
    </div>
  );
};

export default TokenList;