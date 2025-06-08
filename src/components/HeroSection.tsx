import React from 'react';
import { Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-100 via-amber-50 to-orange-100">
      {/* Background Images */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full opacity-20">
          <img 
            src="https://d64gsuwffb70l.cloudfront.net/684589ff0c2d9ba4cef1e71d_1749388744762_0e063d1b.png" 
            alt="Tanning 1" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-20">
          <img 
            src="https://d64gsuwffb70l.cloudfront.net/684589ff0c2d9ba4cef1e71d_1749388751160_73ad3b66.png" 
            alt="Tanning 2" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="flex items-center space-x-2 mb-4">
          <Sparkles className="h-8 w-8 text-amber-500" />
          <span className="text-2xl font-bold text-amber-600">RED CARPET LUXURY SPA</span>
          <Sparkles className="h-8 w-8 text-amber-500" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-amber-600 via-rose-500 to-orange-500 bg-clip-text text-transparent mb-6">
          UNLIMITED
        </h1>
        
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Spray Tanning
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-8">
          Get that perfect golden glow year-round with our premium spray tanning packages
        </p>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
          <p className="text-lg font-semibold text-gray-800">
            ✨ Professional • Safe • Natural-Looking Results ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;