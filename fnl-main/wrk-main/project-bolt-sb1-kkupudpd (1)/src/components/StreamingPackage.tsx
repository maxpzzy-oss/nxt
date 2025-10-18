import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tv, CheckCircle, Smartphone, Monitor, Tablet } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';
import { ChannelListModal } from './ChannelListModal';

export const StreamingPackage: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    'Thousands of Live Channels',
    'HD & 4K Quality Streaming',
    'Sports, Movies & Entertainment',
    'Multi-Device Support',
    'On-Demand Content Library',
    'Electronic Program Guide (EPG)',
    'No Buffering - Smooth Playback',
    '24/7 Customer Support',
  ];

  const devices = [
    { icon: Tv, label: 'Smart TV' },
    { icon: Smartphone, label: 'Mobile' },
    { icon: Monitor, label: 'Desktop' },
    { icon: Tablet, label: 'Tablet' },
  ];

  return (
    <div className="bg-gradient-to-br from-secondary-50 to-primary-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full mb-6">
            <Tv className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Premium IPTV Streaming
          </h2>
          <p className="text-lg text-neutral-600">
            Access thousands of channels and endless entertainment
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-white transition-all duration-300 hover:shadow-glow-secondary">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-neutral-900 mb-2">1-Month Package</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-5xl font-bold text-primary-600">$29.99</span>
                    <span className="text-lg text-neutral-600">/month</span>
                  </div>
                  <div className="inline-block bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Premium Quality Streaming
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-4">All Features Included</h4>
                <ul className="space-y-3 mb-6">
                  {features.slice(4).map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-secondary-600 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-neutral-50 rounded-lg p-4 mb-6">
                  <h4 className="text-sm font-semibold text-neutral-900 mb-3">Watch On Any Device</h4>
                  <div className="grid grid-cols-4 gap-2">
                    {devices.map((device, index) => {
                      const Icon = device.icon;
                      return (
                        <div key={index} className="flex flex-col items-center">
                          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-1 shadow-soft">
                            <Icon className="w-6 h-6 text-secondary-600" />
                          </div>
                          <span className="text-xs text-neutral-600">{device.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-6 mt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="primary"
                  className="flex-1 text-lg"
                  size="lg"
                  onClick={() => navigate('/streaming')}
                >
                  Purchase Now
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                >
                  View Channel List
                </Button>
              </div>
              <p className="text-xs text-center text-neutral-500 mt-4">
                Accepts Crypto Payments • Instant Activation
              </p>
            </div>
          </Card>
        </div>
      </div>
      <ChannelListModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
