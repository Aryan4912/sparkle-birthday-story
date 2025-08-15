import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalEffects from "@/components/GlobalEffects";
import CakePage from "./pages/CakePage";
import MemoryPage from "./pages/MemoryPage";
import LetterPage from "./pages/LetterPage";
import ThankYouPage from "./pages/ThankYouPage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <GlobalEffects />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cake" element={<CakePage />} />
          <Route path="/memories" element={<MemoryPage />} />
          <Route path="/letter" element={<LetterPage />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
