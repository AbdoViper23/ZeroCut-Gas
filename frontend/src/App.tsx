import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DotGrid from "@/components/DotGrid";
import MagnetLines from './components/MagnetLines';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Notifications */}
      <Toaster />
      <Sonner />

      <div style={{ position: "relative", width: "100%", minHeight: "100vh" }}>
        {/* background */}
        <div
          style={{
            position: "absolute",
            inset: 0, // top/right/bottom/left = 0
            zIndex: -1,
          }}
        >
          <DotGrid
            dotSize={5}
            gap={10}
            baseColor="#5227FF"
            activeColor="#ff4800"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        {/* الـ Routes */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
