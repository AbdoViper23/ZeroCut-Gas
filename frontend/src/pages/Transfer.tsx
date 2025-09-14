import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Send, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import WalletTopBar from "@/components/WalletTopBar";

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
    <div className="min-h-screen bg-gradient-background">
      {/* Top Bar */}
      <WalletTopBar />

      <div className="container mx-auto px-6 py-8 max-w-2xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/wallet")}
            className="p-2"
          >
            <ArrowLeft size={20} />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Send {token.symbol}</h1>
            <p className="text-muted-foreground">Transfer tokens to another address</p>
          </div>
        </div>

        {/* Token Info Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className={`w-12 h-12 ${token.color} rounded-xl flex items-center justify-center text-white font-bold text-xl`}>
                {token.icon}
              </div>
              <div>
                <div className="text-xl font-semibold">{token.name}</div>
                <div className="text-sm text-muted-foreground">{token.network}</div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Available Balance</span>
              <div className="text-right">
                <div className="text-2xl font-bold text-foreground">{token.balance} {token.symbol}</div>
                <div className="text-sm text-muted-foreground">{token.value}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transfer Form */}
        <Card>
          <CardHeader>
            <CardTitle>Transfer Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Amount Input */}
            <div className="space-y-2">
              <Label htmlFor="amount">Amount to Send</Label>
              <div className="flex gap-2">
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1"
                />
                <Button
                  variant="outline"
                  onClick={handleMaxAmount}
                  className="px-4"
                >
                  MAX
                </Button>
              </div>
              {amount && (
                <p className="text-sm text-muted-foreground">
                  ≈ ${(parseFloat(amount) * parseFloat(token.value.replace(/[$,]/g, '')) / parseFloat(token.balance.replace(/,/g, ''))).toFixed(2)}
                </p>
              )}
            </div>

            <Separator />

            {/* Recipient Input */}
            <div className="space-y-2">
              <Label htmlFor="recipient">Recipient Address</Label>
              <Input
                id="recipient"
                placeholder="Enter wallet address or ENS name"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Make sure the address is correct. Transactions cannot be reversed.
              </p>
            </div>

            <Separator />

            {/* Transaction Summary */}
            <div className="space-y-3">
              <h4 className="font-semibold">Transaction Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount:</span>
                  <span>{amount || "0"} {token.symbol}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Network Fee:</span>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500 line-through opacity-50">~$2.50</span>
                    <span className="text-green-500 font-semibold">Free</span>
                  </div>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total Cost:</span>
                  <span>{amount || "0"} {token.symbol} </span>
                </div>
              </div>
            </div>

            {/* Warning Alert */}
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Double-check the recipient address. Transactions on blockchain networks are irreversible.
              </AlertDescription>
            </Alert>

            {/* Send Button */}
            <Button
              onClick={handleSend}
              disabled={!isValidAmount || !isValidRecipient || isLoading}
              className="w-full gap-2"
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
  );
};

export default Transfer;
