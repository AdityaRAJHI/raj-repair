import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingContact = () => {
  const handleCall = () => {
    window.location.href = "tel:918302311436";
  };

  const handleWhatsApp = () => {
    window.location.href = "https://wa.me/918559940369";
  };

  return (
    <div className="floating-contact animate-slide-up">
      <Button
        size="lg"
        className="cta-primary shadow-lg"
        onClick={handleCall}
      >
        <Phone className="w-5 h-5 mr-2" />
        Call Now
      </Button>
      <Button
        size="lg"
        className="cta-secondary shadow-lg"
        onClick={handleWhatsApp}
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        WhatsApp
      </Button>
    </div>
  );
};

export default FloatingContact;