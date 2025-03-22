
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PremiumCalculator from "./pages/PremiumCalculator";
import InsuranceCategory from "./pages/InsuranceCategory";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/premium-calculator" element={<PremiumCalculator />} />
          
          {/* Insurance Category Routes */}
          <Route path="/insurance/:category" element={<InsuranceCategory />} />
          
          {/* Future routes can be added here */}
          <Route path="/claims" element={<NotFound />} />
          <Route path="/about" element={<NotFound />} />
          <Route path="/contact" element={<NotFound />} />
          <Route path="/faq" element={<NotFound />} />
          <Route path="/blogs" element={<NotFound />} />
          <Route path="/guides" element={<NotFound />} />
          <Route path="/compare/*" element={<NotFound />} />
          <Route path="/get-quote" element={<NotFound />} />
          <Route path="/login" element={<NotFound />} />
          <Route path="/signup" element={<NotFound />} />
          <Route path="/policy-management" element={<NotFound />} />
          <Route path="/account/*" element={<NotFound />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
