import React from 'react';
import HeroSection from './HeroSection';
import PackagesSection from './PackagesSection';
import { Phone, MapPin, Clock, Star } from 'lucide-react';

const SprayTanLanding: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PackagesSection />
      
      {/* Footer CTA Section */}
      <div className="bg-gradient-to-r from-amber-600 via-rose-500 to-orange-500 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Ready to Glow?</h3>
          <p className="text-xl mb-8 opacity-90">
            Book your appointment today and experience the Red Carpet difference
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 mb-2" />
              <span className="font-semibold">(555) 123-GLOW</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 mb-2" />
              <span className="font-semibold">Downtown Luxury District</span>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 mb-2" />
              <span className="font-semibold">Mon-Sun 9AM-8PM</span>
            </div>
          </div>
          
          <div className="flex justify-center items-center space-x-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-current" />
            ))}
            <span className="ml-2 text-lg font-semibold">5.0 Rating • 500+ Happy Clients</span>
          </div>
          
          <button className="bg-white text-gray-800 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
            Book Your Session Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SprayTanLanding;