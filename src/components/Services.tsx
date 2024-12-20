import { AirVent, Tv, Refrigerator, Waves, Microwave } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: AirVent,
    title: "AC Repair",
    description: "Expert AC repair services for all brands including split, window, and central air conditioning units.",
    brands: "Daikin, Voltas, LG, Samsung, Carrier",
  },
  {
    icon: Tv,
    title: "TV Repair",
    description: "Professional TV repair services for LED, LCD, OLED, and Smart TVs of all major brands.",
    brands: "Samsung, LG, Sony, Mi, OnePlus",
  },
  {
    icon: Refrigerator,
    title: "Refrigerator Repair",
    description: "Comprehensive refrigerator repair services for single-door, double-door, and side-by-side models.",
    brands: "LG, Samsung, Whirlpool, Godrej, Haier",
  },
  {
    icon: Waves,
    title: "Washing Machine Repair",
    description: "Reliable repair services for top load, front load, and semi-automatic washing machines.",
    brands: "IFB, LG, Samsung, Whirlpool, Bosch",
  },
  {
    icon: Microwave,
    title: "Microwave/Oven Repair",
    description: "Expert repair services for all types of microwaves and ovens, including OTG and convection models.",
    brands: "IFB, Samsung, LG, Whirlpool, Bajaj",
  },
];

const Services = () => {
  const handleCall = () => {
    window.location.href = "tel:918302311436";
  };

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Professional repair services for all major home appliances with experienced technicians
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <div className="text-sm text-muted-foreground mb-6">
                <strong>Brands:</strong> {service.brands}
              </div>
              <Button
                className="w-full cta-primary"
                onClick={handleCall}
              >
                Book Service
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;