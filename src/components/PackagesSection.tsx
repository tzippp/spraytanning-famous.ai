import React from 'react';
import PackageCard from './PackageCard';

const PackagesSection: React.FC = () => {
  const packages = [
    {
      title: "Bronze Glow",
      price: "$89",
      originalPrice: "$120",
      features: [
        "4 Spray Tan Sessions",
        "Basic Organic Solution",
        "30-Day Validity",
        "Free Consultation",
        "Aftercare Instructions"
      ],
      buttonText: "Get Bronze Glow",
      gradient: "bg-gradient-to-r from-amber-500 to-orange-500",
      isPopular: false
    },
    {
      title: "Golden Radiance",
      price: "$149",
      originalPrice: "$200",
      features: [
        "8 Spray Tan Sessions",
        "Premium Organic Solution",
        "60-Day Validity",
        "Free Touch-Up Session",
        "Exfoliation Treatment",
        "Priority Booking",
        "Mobile App Access"
      ],
      buttonText: "Choose Golden Radiance",
      gradient: "bg-gradient-to-r from-rose-500 to-pink-500",
      isPopular: true
    },
    {
      title: "Platinum Unlimited",
      price: "$249",
      originalPrice: "$350",
      features: [
        "Unlimited Sessions (90 Days)",
        "Luxury Organic Solution",
        "VIP Treatment Room",
        "Complimentary Moisturizer",
        "Weekly Touch-Ups",
        "24/7 Booking Access",
        "Personal Tanning Consultant",
        "Free Maintenance Kit"
      ],
      buttonText: "Go Platinum",
      gradient: "bg-gradient-to-r from-purple-600 to-indigo-600",
      isPopular: false
    }
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-rose-500 bg-clip-text text-transparent mb-4">
            Choose Your Glow
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect package for your tanning needs. All packages include our signature organic solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">All packages include:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Professional Application", "Organic Solutions", "Aftercare Support", "Satisfaction Guarantee"].map((item, index) => (
              <span key={index} className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesSection;