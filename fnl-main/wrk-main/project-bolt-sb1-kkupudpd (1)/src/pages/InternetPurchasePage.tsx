import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Wifi, Zap, Shield, Users, CheckCircle2, CreditCard, Bitcoin, Infinity } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';

interface PlanDetails {
  name: string;
  speed: string;
  price: string;
  duration?: string;
  features: string[];
}

const allPlans: PlanDetails[] = [
  {
    name: '3-Day Plan',
    duration: '3 Days',
    price: '$9.99',
    speed: '1 Gigabit',
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
    speed: '1 Gigabit',
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
    speed: '1 Gigabit',
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
    speed: '1 Gigabit',
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

export const InternetPurchasePage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedPlanFromState = location.state?.plan;

  const [selectedPlan, setSelectedPlan] = useState<PlanDetails | null>(selectedPlanFromState || null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    paymentMethod: 'crypto',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Purchase data:', { plan: selectedPlan, ...formData });
    setSubmitted(true);
  };

  if (submitted && selectedPlan) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center px-4 py-12">
        <Card className="max-w-2xl w-full text-center p-8 sm:p-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">Order Confirmed!</h1>
          <p className="text-lg text-neutral-600 mb-6">
            Thank you for choosing {selectedPlan.name}. Your order has been received and is being processed.
          </p>
          <div className="bg-neutral-50 rounded-lg p-6 mb-6 text-left">
            <h3 className="font-semibold text-neutral-900 mb-3">What Happens Next:</h3>
            <ol className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="font-semibold">1.</span>
                <span>You'll receive a confirmation email within 5 minutes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">2.</span>
                <span>Our team will contact you with setup instructions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">3.</span>
                <span>Quick activation within 24 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">4.</span>
                <span>Start enjoying your lightning-fast internet!</span>
              </li>
            </ol>
          </div>
          <Link to="/">
            <Button variant="primary">Back to Home</Button>
          </Link>
        </Card>
      </div>
    );
  }

  if (!selectedPlan) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
              Choose Your Internet Plan
            </h1>
            <p className="text-xl text-neutral-600">
              Select the perfect plan for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allPlans.map((plan, idx) => (
              <Card
                key={plan.name}
                hover
                className={`relative transition-all duration-300 hover:shadow-glow-primary ${idx === 1 ? 'ring-2 ring-primary-500 shadow-hover' : ''}`}
              >
                {idx === 1 && (
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

                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => setSelectedPlan(plan)}
                >
                  Select Plan
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => setSelectedPlan(null)}
          className="text-primary-600 hover:text-primary-700 mb-6 flex items-center gap-2"
        >
          ← Back to Plans
        </button>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <Card className="p-8 mb-6 sticky top-24">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Your Selected Plan</h2>
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-6 text-white mb-6">
                <h3 className="text-3xl font-bold mb-2">{selectedPlan.name}</h3>
                <p className="text-4xl font-bold mb-4">{selectedPlan.price}<span className="text-xl font-normal">/{selectedPlan.duration || 'month'}</span></p>
                <div className="flex items-center gap-2 text-white/90">
                  <Zap className="w-5 h-5" />
                  <span className="text-lg">{selectedPlan.speed} Speed</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {selectedPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-neutral-200 pt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-neutral-600">Plan Fee</span>
                  <span className="font-semibold">{selectedPlan.price}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-neutral-600">Setup Fee</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-neutral-200">
                  <span className="text-lg font-bold">Total Due Today</span>
                  <span className="text-2xl font-bold text-primary-600">{selectedPlan.price}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-blue-900">Secure Payment</p>
                    <p className="text-xs text-blue-700">Your information is protected with enterprise-grade encryption</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Complete Your Order</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <Input
                      label="Full Name"
                      type="text"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">Payment Method</h3>
                  <div className="space-y-3">
                    <label className="relative flex items-center gap-3 p-4 border-2 border-neutral-200 rounded-lg opacity-50 cursor-not-allowed">
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        disabled
                        className="w-4 h-4 text-primary-600"
                      />
                      <CreditCard className="w-5 h-5 text-neutral-400" />
                      <div className="flex-1">
                        <span className="font-medium text-neutral-500">Credit/Debit Card</span>
                        <p className="text-sm text-neutral-400">Visa, Mastercard, Amex</p>
                      </div>
                      <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                        Coming Soon
                      </span>
                    </label>
                    <label className="flex items-center gap-3 p-4 border-2 border-primary-500 bg-primary-50 rounded-lg cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        value="crypto"
                        checked={formData.paymentMethod === 'crypto'}
                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                        className="w-4 h-4 text-primary-600"
                      />
                      <Bitcoin className="w-5 h-5 text-neutral-600" />
                      <div className="flex-1">
                        <span className="font-medium text-neutral-900">Cryptocurrency</span>
                        <p className="text-sm text-neutral-500">Bitcoin, Ethereum, USDT</p>
                      </div>
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full hover:shadow-glow-primary transition-all duration-300 animate-pulse-glow"
                >
                  Complete Purchase
                </Button>

                <p className="text-xs text-center text-neutral-500">
                  By completing this purchase, you agree to our Terms of Service and Privacy Policy.
                  No commitment required - cancel anytime.
                </p>
              </form>
            </Card>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <Card className="p-4 text-center hover:shadow-hover transition-all duration-300">
                <Zap className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <p className="text-xs font-semibold text-neutral-900">Fast Setup</p>
                <p className="text-xs text-neutral-600">24 hours</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-hover transition-all duration-300">
                <Shield className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <p className="text-xs font-semibold text-neutral-900">Secure</p>
                <p className="text-xs text-neutral-600">256-bit SSL</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-hover transition-all duration-300">
                <Users className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <p className="text-xs font-semibold text-neutral-900">24/7 Support</p>
                <p className="text-xs text-neutral-600">Always here</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
