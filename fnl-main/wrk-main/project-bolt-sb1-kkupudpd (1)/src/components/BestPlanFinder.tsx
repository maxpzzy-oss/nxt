import React, { useState, useEffect } from 'react';
import { Users, Wifi, CheckCircle } from 'lucide-react';
import { Dropdown } from './Dropdown';
import { Card } from './Card';
import { Button } from './Button';

interface PlanRecommendation {
  name: string;
  duration: string;
  price: string;
  speed: string;
  features: string[];
  description: string;
}

const userOptions = [
  { value: '1', label: '1 User' },
  { value: '2-3', label: '2-3 Users' },
  { value: '4-5', label: '4-5 Users' },
  { value: '5+', label: '5+ Users' },
];

const usageOptions = [
  { value: 'browsing', label: 'Browsing & Social Media' },
  { value: 'streaming', label: 'Streaming & Entertainment' },
  { value: 'work', label: 'Remote Work' },
  { value: 'gaming', label: 'Gaming' },
  { value: 'all', label: 'All of the Above' },
];

const getRecommendation = (users: string, usage: string): PlanRecommendation | null => {
  if (!users || !usage) return null;

  if (users === '1' && (usage === 'browsing' || usage === 'work')) {
    return {
      name: '3-Day Plan',
      duration: '3 Days',
      price: '$9.99',
      speed: '1 Gigabit',
      features: ['Unlimited Data', 'Perfect for light usage', 'Social media included'],
      description: 'Ideal for single users with basic needs'
    };
  }

  if (users === '1' || users === '2-3') {
    if (usage === 'streaming' || usage === 'gaming') {
      return {
        name: '7-Day Plan',
        duration: '7 Days',
        price: '$19.99',
        speed: '1 Gigabit',
        features: ['Unlimited Data', 'HD Streaming Ready', 'Low Latency Gaming'],
        description: 'Great for entertainment enthusiasts'
      };
    }
  }

  if (users === '2-3' || users === '4-5') {
    if (usage === 'all' || usage === 'streaming') {
      return {
        name: '14-Day Plan',
        duration: '14 Days',
        price: '$34.99',
        speed: '1 Gigabit',
        features: ['Unlimited Data', 'Multiple Device Support', 'Best Value'],
        description: 'Perfect for small families or roommates'
      };
    }
  }

  return {
    name: '30-Day Plan',
    duration: '30 Days',
    price: '$59.99',
    speed: '1 Gigabit',
    features: ['Unlimited Data', 'Maximum Flexibility', 'All Features Included'],
    description: 'Best for heavy users and large households'
  };
};

export const BestPlanFinder: React.FC = () => {
  const [selectedUsers, setSelectedUsers] = useState('');
  const [selectedUsage, setSelectedUsage] = useState('');
  const [recommendation, setRecommendation] = useState<PlanRecommendation | null>(null);

  useEffect(() => {
    const result = getRecommendation(selectedUsers, selectedUsage);
    setRecommendation(result);
  }, [selectedUsers, selectedUsage]);

  return (
    <div className="bg-neutral-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Find Your Perfect Plan
          </h2>
          <p className="text-lg text-neutral-600">
            Tell us about your needs and we'll recommend the best option
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-secondary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-neutral-900">How many users?</h3>
            <Dropdown
              options={userOptions}
              value={selectedUsers}
              onChange={setSelectedUsers}
              placeholder="Select number of users"
              className="w-full"
            />
          </Card>

          <Card className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <Wifi className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-neutral-900">What will you use it for?</h3>
            <Dropdown
              options={usageOptions}
              value={selectedUsage}
              onChange={setSelectedUsage}
              placeholder="Select primary usage"
              className="w-full"
            />
          </Card>

          <Card className={`flex flex-col items-center text-center transition-all ${recommendation ? 'bg-gradient-to-br from-primary-50 to-secondary-50 border-2 border-primary-200' : ''}`}>
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-neutral-900">Recommended Plan</h3>

            {recommendation ? (
              <div className="w-full">
                <div className="mb-4">
                  <h4 className="text-2xl font-bold text-primary-600 mb-1">{recommendation.name}</h4>
                  <p className="text-sm text-neutral-600 mb-3">{recommendation.description}</p>
                  <div className="text-3xl font-bold text-neutral-900 mb-1">{recommendation.price}</div>
                  <p className="text-sm text-neutral-600 mb-2">{recommendation.duration}</p>
                  <div className="inline-block bg-secondary-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {recommendation.speed} Speed
                  </div>
                </div>

                <ul className="space-y-2 mb-6 text-left">
                  {recommendation.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="primary" className="w-full">
                  Get This Plan
                </Button>
              </div>
            ) : (
              <p className="text-neutral-500 text-sm">
                Select options above to see your recommendation
              </p>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};
