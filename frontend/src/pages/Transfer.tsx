import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Send, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Hyperspeed from "@/components/Hyperspeed";

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

// Mock tokens data (same as TokenList)
const allTokens: Record<string, Token> = {
  "usdt-eth": {
    id: "usdt-eth",
    name: "Tether USD",
    symbol: "USDT",
    network: "Ethereum",
    balance: "1,250.50",
    value: "$1,250.50",
    icon: "₮",
    color: "bg-green-500"
  },
  "usdc-eth": {
    id: "usdc-eth",
    name: "USDC",
    symbol: "USDC",
    network: "Ethereum",
    balance: "500.00",
    value: "$500.00",
    icon: "$",
    color: "bg-blue-600"
  },
  "eth": {
    id: "eth",
    name: "Ethereum",
    symbol: "ETH",
    network: "Ethereum",
    balance: "2.5",
    value: "$8,750.00",
    icon: "◊",
    color: "bg-blue-500"
  },
  "btc": {
    id: "btc",
    name: "Bitcoin",
    symbol: "BTC",
    network: "Bitcoin",
    balance: "0.15",
    value: "$15,750.00",
    icon: "₿",
    color: "bg-orange-500"
  },
  "cketh": {
    id: "cketh",
    name: "Chain Key Ethereum",
    symbol: "ckETH",
    network: "Internet Computer",
    balance: "1.8",
    value: "$6,300.00",
    icon: "◊",
    color: "bg-blue-500"
  },
  "ckusdt": {
    id: "ckusdt",
    name: "Chain Key USDT",
    symbol: "ckUSDT",
    network: "Internet Computer",
    balance: "2,000.00",
    value: "$2,000.00",
    icon: "₮",
    color: "bg-green-500"
  }
};

const Transfer = () => {
  const navigate = useNavigate();
  const { tokenId } = useParams<{ tokenId: string }>();
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Get token information
  const token = tokenId ? allTokens[tokenId] : null;

  if (!token) {
    return (
      <div className="min-h-screen bg-gradient-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Token Not Found</h2>
          <Button onClick={() => navigate("/wallet")} variant="outline">
            <ArrowLeft size={16} className="mr-2" />
            Back to Wallet
          </Button>
        </div>
      </div>
    );
  }

  const handleSend = async () => {
    if (!amount || !recipient) return;
    
    setIsLoading(true);
    // Simulate transfer process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    
    navigate("/wallet?section=activity");
  };

  const handleMaxAmount = () => {
    setAmount(token.balance.replace(/,/g, ''));
  };

  const isValidAmount = amount && parseFloat(amount) > 0 && parseFloat(amount.replace(/,/g, '')) <= parseFloat(token.balance.replace(/,/g, ''));
  const isValidRecipient = recipient.length >= 10; // Basic validation

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hyperspeed Background - Fixed behind content */}
      <div className="fixed inset-0 z-0">
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => { },
            onSlowDown: () => { },
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xFFFFFF,
              brokenLines: 0xFFFFFF,
              leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
              rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
              sticks: 0x03B3C3,
            }
          }}
        />
      </div>

      {/* Subtle overlay for better contrast - allows pointer events through */}
      <div className="fixed inset-0 z-10 bg-black/10 pointer-events-none"></div>

      {/* Main Content - Above background */}
      <div className="relative z-20 pointer-events-none">

      <div className="container mx-auto px-6 py-8 max-w-2xl pointer-events-none">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8 pointer-events-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/wallet")}
            className="p-2 text-white hover:bg-white/20"
          >
            <ArrowLeft size={20} />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-white">Send {token.symbol}</h1>
            <p className="text-gray-300">Transfer tokens to another address</p>
          </div>
        </div>

        {/* Token Info Card */}
        <Card className="mb-6 bg-background/60 backdrop-blur-md border-white/20 pointer-events-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className={`w-12 h-12 ${token.color} rounded-xl flex items-center justify-center text-white font-bold text-xl`}>
                {token.icon}
              </div>
              <div>
                <div className="text-xl font-semibold text-white">{token.name}</div>
                <div className="text-sm text-gray-300">{token.network}</div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Available Balance</span>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">{token.balance} {token.symbol}</div>
                <div className="text-sm text-gray-300">{token.value}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transfer Form */}
        <Card className="bg-background/60 backdrop-blur-md border-white/20 pointer-events-auto">
          <CardHeader>
            <CardTitle className="text-white">Transfer Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Amount Input */}
            <div className="space-y-2">
              <Label htmlFor="amount" className="text-white">Amount to Send</Label>
              <div className="flex gap-2">
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                />
                <Button
                  variant="outline"
                  onClick={handleMaxAmount}
                  className="px-4 border-white/30 text-white hover:bg-white/20"
                >
                  MAX
                </Button>
              </div>
              {amount && (
                <p className="text-sm text-gray-300">
                  ≈ ${(parseFloat(amount) * parseFloat(token.value.replace(/[$,]/g, '')) / parseFloat(token.balance.replace(/,/g, ''))).toFixed(2)}
                </p>
              )}
            </div>

            <Separator className="border-white/20" />

            {/* Recipient Input */}
            <div className="space-y-2">
              <Label htmlFor="recipient" className="text-white">Recipient Address</Label>
              <Input
                id="recipient"
                placeholder="Enter wallet address or ENS name"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
              />
              <p className="text-xs text-gray-300">
                Make sure the address is correct. Transactions cannot be reversed.
              </p>
            </div>

            <Separator className="border-white/20" />

            {/* Transaction Summary */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white">Transaction Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Amount:</span>
                  <span className="text-white">{amount || "0"} {token.symbol}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Network Fee:</span>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500 line-through opacity-50">~$2.50</span>
                    <span className="text-green-500 font-semibold">Free</span>
                  </div>
                </div>
                <Separator className="border-white/20" />
                <div className="flex justify-between font-semibold">
                  <span className="text-white">Total Cost:</span>
                  <span className="text-white">{amount || "0"} {token.symbol} </span>
                </div>
              </div>
            </div>

            {/* Warning Alert */}
            <Alert className="bg-yellow-500/20 border-yellow-500/30 backdrop-blur-sm">
              <AlertCircle className="h-4 w-4 text-yellow-300" />
              <AlertDescription className="text-yellow-100">
                Double-check the recipient address. Transactions on blockchain networks are irreversible.
              </AlertDescription>
            </Alert>

            {/* Send Button */}
            <Button
              onClick={handleSend}
              disabled={!isValidAmount || !isValidRecipient || isLoading}
              className="w-full gap-2 bg-blue-600/80 hover:bg-blue-600 backdrop-blur-sm border-blue-500/30"
              size="lg"
            >
              {isLoading ? (
                "Processing..."
              ) : (
                <>
                  <Send size={16} />
                  Send {token.symbol}
                </>
              )}
            </Button>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
