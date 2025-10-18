import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, CheckCircle, Tv, Wifi } from 'lucide-react';
import { Card } from './Card';
import { Dropdown } from './Dropdown';
import { Button } from './Button';

const internetPlans = [
  { value: '3day', label: '3-Day Internet', price: 9.99, duration: '3 Days' },
  { value: '7day', label: '7-Day Internet', price: 19.99, duration: '7 Days' },
  { value: '14day', label: '14-Day Internet', price: 34.99, duration: '14 Days' },
  { value: '30day', label: '30-Day Internet', price: 59.99, duration: '30 Days' },
];

const STREAMING_PRICE = 29.99;

export const BundleBuilder: React.FC = () => {
  const navigate = useNavigate();
  const [selectedInternet, setSelectedInternet] = useState('');
  const [includeStreaming, setIncludeStreaming] = useState(false);

  const handleCheckout = () => {
    const bundle = {
      internet: selectedPlan?.label || '',
      streaming: includeStreaming,
      internetPrice: selectedPlan?.price || 0,
      streamingPrice: includeStreaming ? STREAMING_PRICE : 0,
      total: finalPrice,
      savings: savings,
    };
    navigate('/bundle', { state: { bundle } });
  };

  const selectedPlan = useMemo(() => {
    return internetPlans.find(plan => plan.value === selectedInternet);
  }, [selectedInternet]);

  const totalPrice = useMemo(() => {
    let total = 0;
    if (selectedPlan) total += selectedPlan.price;
    if (includeStreaming) total += STREAMING_PRICE;
    return total;
  }, [selectedPlan, includeStreaming]);

  const savings = useMemo(() => {
    if (selectedPlan && includeStreaming) {
      const regularPrice = selectedPlan.price + STREAMING_PRICE;
      const discount = regularPrice * 0.1;
      return discount;
    }
    return 0;
  }, [selectedPlan, includeStreaming]);

  const finalPrice = totalPrice - savings;

  const hasSelection = selectedPlan || includeStreaming;

  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full mb-6">
            <Package className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Build Your Custom Bundle
          </h2>
          <p className="text-lg text-neutral-600">
            Combine internet and streaming for maximum value and save 10%
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-neutral-50 to-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-6">Select Your Services</h3>

                <div className="space-y-6">
                  <div>
                    <label className="flex items-center gap-2 mb-3 text-sm font-medium text-neutral-700">
                      <Wifi className="w-5 h-5 text-primary-600" />
                      Internet Plan
                    </label>
                    <Dropdown
                      options={internetPlans}
                      value={selectedInternet}
                      onChange={setSelectedInternet}
                      placeholder="Choose internet duration"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 mb-3 text-sm font-medium text-neutral-700">
                      <Tv className="w-5 h-5 text-secondary-600" />
                      Streaming Package
                    </label>
                    <button
                      onClick={() => setIncludeStreaming(!includeStreaming)}
                      className={`w-full px-4 py-3 border-2 rounded-button text-left transition-all duration-300 hover:shadow-card hover:scale-105 ${
                        includeStreaming
                          ? 'border-secondary-500 bg-secondary-50 shadow-glow-secondary'
                          : 'border-neutral-300 bg-white hover:border-neutral-400'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-neutral-900">1-Month IPTV Streaming</div>
                          <div className="text-sm text-neutral-600">${STREAMING_PRICE.toFixed(2)}/month</div>
                        </div>
                        <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                          includeStreaming
                            ? 'border-secondary-600 bg-secondary-600'
                            : 'border-neutral-400'
                        }`}>
                          {includeStreaming && <CheckCircle className="w-5 h-5 text-white" />}
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-6">Bundle Summary</h3>

                {!hasSelection ? (
                  <div className="h-full flex items-center justify-center text-center p-8">
                    <div>
                      <Package className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
                      <p className="text-neutral-500">Select services to see your bundle</p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-lg p-6 border-2 border-primary-200">
                    <div className="space-y-3 mb-4 pb-4 border-b border-neutral-200">
                      {selectedPlan && (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Wifi className="w-4 h-4 text-primary-600" />
                            <span className="text-sm text-neutral-700">{selectedPlan.label}</span>
                          </div>
                          <span className="text-sm font-semibold text-neutral-900">
                            ${selectedPlan.price.toFixed(2)}
                          </span>
                        </div>
                      )}
                      {includeStreaming && (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Tv className="w-4 h-4 text-secondary-600" />
                            <span className="text-sm text-neutral-700">IPTV Streaming</span>
                          </div>
                          <span className="text-sm font-semibold text-neutral-900">
                            ${STREAMING_PRICE.toFixed(2)}
                          </span>
                        </div>
                      )}
                    </div>

                    {savings > 0 && (
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-primary-600 font-medium">Bundle Savings (10%)</span>
                        <span className="text-sm font-semibold text-primary-600">
                          -${savings.toFixed(2)}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-6 pt-4 border-t border-neutral-200">
                      <span className="text-lg font-semibold text-neutral-900">Total</span>
                      <div className="text-right">
                        {savings > 0 && (
                          <div className="text-sm text-neutral-500 line-through">
                            ${totalPrice.toFixed(2)}
                          </div>
                        )}
                        <div className="text-2xl font-bold text-primary-600">
                          ${finalPrice.toFixed(2)}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-start gap-2 text-xs text-neutral-600">
                        <CheckCircle className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                        <span>Instant activation after payment</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-neutral-600">
                        <CheckCircle className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                        <span>Crypto payments accepted</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-neutral-600">
                        <CheckCircle className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                        <span>24/7 customer support included</span>
                      </div>
                    </div>

                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full"
                      onClick={handleCheckout}
                    >
                      Checkout Bundle
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {savings > 0 && (
              <div className="mt-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-4 border border-primary-200">
                <p className="text-center text-sm font-semibold text-primary-700">
                  You're saving ${savings.toFixed(2)} with this bundle!
                </p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};
