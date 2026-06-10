import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Segmentos from "./pages/Segmentos";
import Funcionalidades from "./pages/Funcionalidades";
import Contato from "./pages/Contato";
import SegmentoComercio from "./pages/segmentos/Comercio";
import SegmentoCorretoras from "./pages/segmentos/Corretoras";
import SegmentoClinicas from "./pages/segmentos/Clinicas";
import SegmentoSgcom from "./pages/segmentos/Sgcom";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/segmentos" element={<Segmentos />} />
          <Route path="/segmentos/comercio" element={<SegmentoComercio />} />
          <Route path="/segmentos/corretoras" element={<SegmentoCorretoras />} />
          <Route path="/segmentos/clinicas" element={<SegmentoClinicas />} />
          <Route path="/segmentos/sgcom" element={<SegmentoSgcom />} />
          <Route path="/funcionalidades" element={<Funcionalidades />} />
          <Route path="/contato" element={<Contato />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
