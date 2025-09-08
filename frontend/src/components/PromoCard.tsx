import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";

const PromoCard = () => {
  return (
    <div className="bg-gradient-surface border border-border/20 rounded-2xl p-6 shadow-soft">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
            <div className="w-6 h-6 bg-primary-foreground rounded-lg"></div>
          </div>
          
          {/* Content */}
          <div>
            <h3 className="text-foreground font-semibold">
              OpenChat - where web3 communicates
            </h3>
            <Button variant="minimal" className="mt-1 p-0 h-auto text-primary hover:text-primary/80">
              Show more →
            </Button>
          </div>
        </div>

        {/* Close Button */}
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <X size={18} />
        </Button>
      </div>
    </div>
  );
};

export default PromoCard;