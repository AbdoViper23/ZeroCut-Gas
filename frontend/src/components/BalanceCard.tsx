import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, RefreshCw, ShoppingCart } from "lucide-react";

const BalanceCard = () => {
  return (
    <div className="bg-gradient-primary rounded-2xl p-8 shadow-elegant">
      <div className="text-center space-y-6">
        {/* Balance */}
        <div>
          <div className="text-5xl font-bold text-primary-foreground mb-2">
            $0.00
          </div>
          <p className="text-primary-foreground/80 text-lg">
            Top up your wallet to start using it!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <Button variant="secondary" className="flex-1 gap-2">
            <ArrowDownToLine size={18} />
            Receive
          </Button>
          <Button variant="secondary" className="flex-1 gap-2">
            <RefreshCw size={18} />
            Swap
          </Button>
          <Button variant="secondary" className="flex-1 gap-2">
            <ShoppingCart size={18} />
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;