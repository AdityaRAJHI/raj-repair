import { MapPin } from "lucide-react";

const majorCities = [
  "Delhi NCR",
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Chandigarh",
  "Indore",
];

const Coverage = () => {
  return (
    <section id="coverage" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Service Coverage</h2>
          <p className="section-subtitle">
            We provide our expert repair services across major cities in India
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {majorCities.map((city, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border bg-card hover:border-primary/50 transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-medium">{city}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coverage;