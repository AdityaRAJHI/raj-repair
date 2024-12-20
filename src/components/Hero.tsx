import { Phone, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleCall = () => {
    window.location.href = "tel:918302311436";
  };

  const handleWhatsApp = () => {
    window.location.href = "https://wa.me/918559940369";
  };

  return (
    <section className="pt-24 pb-16 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-sm font-medium text-accent-foreground mb-8">
            <Star className="w-4 h-4 mr-2 text-accent" />
            Trusted by 10,000+ customers across India
          </div>
          <h1 className="section-title mb-6">
            Expert Appliance Repair Services at Your Doorstep
          </h1>
          <p className="section-subtitle max-w-2xl">
            Professional repair services for AC, TV, Refrigerator, Washing Machine, and more. 
            Get same-day service with experienced technicians.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <Button
              size="lg"
              className="cta-primary"
              onClick={handleCall}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button
              size="lg"
              className="cta-secondary"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;