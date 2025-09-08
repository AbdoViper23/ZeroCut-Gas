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

const tokens: Token[] = [
  {
    id: "btc",
    name: "Bitcoin",
    symbol: "BTC",
    network: "Bitcoin • Internet Computer",
    balance: "0",
    value: "$0.00",
    icon: "₿",
    color: "bg-orange-500"
  },
  {
    id: "eth",
    name: "Ethereum",
    symbol: "ETH",
    network: "Ethereum • Internet Computer • Base • Arbitrum",
    balance: "0",
    value: "$0.00",
    icon: "◊",
    color: "bg-blue-500"
  },
  {
    id: "icp",
    name: "Internet Computer",
    symbol: "ICP",
    network: "Internet Computer",
    balance: "0",
    value: "$0.00",
    icon: "∞",
    color: "bg-purple-500"
  },
  {
    id: "sol",
    name: "Solana",
    symbol: "SOL",
    network: "Solana",
    balance: "0",
    value: "$0.00",
    icon: "◉",
    color: "bg-gradient-to-r from-purple-400 to-pink-400"
  },
  {
    id: "usdc",
    name: "USDC",
    symbol: "USDC",
    network: "Internet Computer • Ethereum",
    balance: "0",
    value: "$0.00",
    icon: "$",
    color: "bg-blue-600"
  },
  {
    id: "bnb",
    name: "BNB",
    symbol: "BNB",
    network: "BNB Smart Chain",
    balance: "0",
    value: "$0.00",
    icon: "◈",
    color: "bg-yellow-500"
  },
  {
    id: "pol",
    name: "POL (prev. MATIC)",
    symbol: "POL",
    network: "Polygon",
    balance: "0",
    value: "$0.00",
    icon: "⬟",
    color: "bg-purple-600"
  },
  {
    id: "usdt",
    name: "Tether USD",
    symbol: "USDT",
    network: "Internet Computer • Ethereum",
    balance: "0",
    value: "$0.00",
    icon: "₮",
    color: "bg-green-500"
  }
];

const TokenList = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">Tokens</h2>
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