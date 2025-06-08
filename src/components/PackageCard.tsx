import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

interface PackageCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  gradient: string;
}

const PackageCard: React.FC<PackageCardProps> = ({
  title,
  price,
  originalPrice,
  features,
  isPopular,
  buttonText,
  gradient
}) => {
  return (
    <Card className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${isPopular ? 'ring-2 ring-amber-400 shadow-xl' : ''}`}>
      {isPopular && (
        <Badge className="absolute top-4 right-4 bg-amber-400 text-black font-bold px-3 py-1">
          MOST POPULAR
        </Badge>
      )}
      <div className={`h-2 ${gradient}`} />
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold text-gray-800">{title}</CardTitle>
        <div className="mt-4">
          {originalPrice && (
            <span className="text-lg text-gray-500 line-through mr-2">{originalPrice}</span>
          )}
          <span className="text-4xl font-bold text-gray-900">{price}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <Button className={`w-full py-3 text-lg font-semibold ${gradient} hover:opacity-90 transition-opacity`}>
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PackageCard;