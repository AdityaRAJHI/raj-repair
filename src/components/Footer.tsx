import { Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Raj Auto Repairs</h3>
            <p className="text-sm text-muted-foreground">
              Professional appliance repair services you can trust
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#coverage" className="hover:text-primary transition-colors">Coverage</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>AC Repair</li>
              <li>TV Repair</li>
              <li>Refrigerator Repair</li>
              <li>Washing Machine Repair</li>
              <li>Microwave/Oven Repair</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Contact Info</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +91 8302311436
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +91 8058389271
              </li>
              <li className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp: +91 8559940369
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Raj Auto Repairs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;