import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  const handleWhatsApp = () => {
    window.location.href = "https://wa.me/918559940369";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold">Raj Auto Repairs</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
              <a href="#coverage" className="text-sm font-medium hover:text-primary transition-colors">Coverage</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:inline-flex"
              onClick={() => handleCall("918302311436")}
            >
              <Phone className="w-4 h-4 mr-2" />
              +91 8302311436
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hidden md:inline-flex"
              onClick={() => handleCall("918058389271")}
            >
              <Phone className="w-4 h-4 mr-2" />
              +91 8058389271
            </Button>
            <Button
              className="bg-secondary hover:bg-secondary/90"
              size="sm"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;