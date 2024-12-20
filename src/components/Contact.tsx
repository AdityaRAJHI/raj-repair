import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  const handleWhatsApp = () => {
    window.location.href = "https://wa.me/918559940369";
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Get in touch with us for quick and reliable appliance repair services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 rounded-lg bg-card shadow-lg animate-fade-in">
            <Phone className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
            <div className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => handleCall("918302311436")}
              >
                +91 8302311436
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => handleCall("918058389271")}
              >
                +91 8058389271
              </Button>
            </div>
          </div>
          <div className="p-6 rounded-lg bg-card shadow-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <MessageCircle className="w-8 h-8 text-secondary mb-4" />
            <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
            <Button
              className="w-full bg-secondary hover:bg-secondary/90"
              onClick={handleWhatsApp}
            >
              Chat with Us
            </Button>
          </div>
          <div className="p-6 rounded-lg bg-card shadow-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <MapPin className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-lg font-semibold mb-2">Service Areas</h3>
            <p className="text-muted-foreground">
              Available in all major cities across India. Contact us to check availability in your area.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;