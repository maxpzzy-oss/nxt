import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wifi, Zap, Infinity, Users, CheckCircle } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';

const plans = [
  {
    name: '3-Day Plan',
    duration: '3 Days',
    price: '$9.99',
    popular: false,
    features: [
      'Unlimited Data',
      'Unlimited Social Media',
      'Perfect for Streaming',
      'Ideal for Remote Workers',
      '1 Gigabit Speed',
    ],
  },
  {
    name: '7-Day Plan',
    duration: '7 Days',
    price: '$19.99',
    popular: true,
    features: [
      'Unlimited Data',
      'Unlimited Social Media',
      'Perfect for Streaming',
      'Ideal for Remote Workers',
      '1 Gigabit Speed',
    ],
  },
  {
    name: '14-Day Plan',
    duration: '14 Days',
    price: '$34.99',
    popular: false,
    features: [
      'Unlimited Data',
      'Unlimited Social Media',
      'Perfect for Streaming',
      'Ideal for Remote Workers',
      '1 Gigabit Speed',
    ],
  },
  {
    name: '30-Day Plan',
    duration: '30 Days',
    price: '$59.99',
    popular: false,
    features: [
      'Unlimited Data',
      'Unlimited Social Media',
      'Perfect for Streaming',
      'Ideal for Remote Workers',
      '1 Gigabit Speed',
    ],
  },
];

const featureIcons = [
  { icon: Infinity, color: 'text-secondary-600' },
  { icon: Users, color: 'text-primary-600' },
  { icon: Wifi, color: 'text-secondary-600' },
  { icon: Users, color: 'text-primary-600' },
  { icon: Zap, color: 'text-secondary-600' },
];

export const InternetPlans: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            High-Speed Internet Plans
          </h2>
          <p className="text-lg text-neutral-600">
            Lightning-fast 1 Gigabit connection with unlimited data
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              hover
              className={`relative transition-all duration-300 hover:shadow-glow-primary ${plan.popular ? 'ring-2 ring-primary-500 shadow-hover' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-primary-600 mb-1">{plan.price}</div>
                <p className="text-sm text-neutral-600">{plan.duration}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-center gap-2 bg-secondary-50 rounded-lg py-2 px-3">
                  <Zap className="w-5 h-5 text-secondary-600" />
                  <span className="text-sm font-semibold text-secondary-900">1 Gigabit Speed</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => {
                  const IconComponent = featureIcons[index].icon;
                  return (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <IconComponent className={`w-4 h-4 mt-0.5 flex-shrink-0 ${featureIcons[index].color}`} />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  );
                })}
              </ul>

              <div className="space-y-2">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => navigate('/internet-plans', { state: { plan: {
                    name: plan.name,
                    speed: '1 Gigabit',
                    price: plan.price,
                    duration: plan.duration,
                    features: plan.features
                  }}})}
                >
                  Get Started
                </Button>
                <p className="text-xs text-center text-neutral-500">
                  Accepts Crypto Payments
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-600">
            All plans include unlimited data and are perfect for streaming, gaming, and remote work
          </p>
        </div>
      </div>
    </div>
  );
};
