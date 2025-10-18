import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Package, CheckCircle2, CreditCard, Bitcoin, TrendingDown } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';

interface BundleDetails {
  internet: string;
  streaming: boolean;
  internetPrice: number;
  streamingPrice: number;
  total: number;
  savings: number;
}

const defaultBundle: BundleDetails = {
  internet: 'Lightning 1GB',
  streaming: true,
  internetPrice: 99,
  streamingPrice: 79,
  total: 160,
  savings: 18,
};

export const BundlePurchasePage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bundle: BundleDetails = location.state?.bundle || defaultBundle;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'card',
  });
  const [submitted, setSubmitted] = useState(false);

  const regularTotal = bundle.internetPrice + bundle.streamingPrice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Bundle purchase:', { bundle, ...formData });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-primary-50 flex items-center justify-center px-4 py-12">
        <Card className="max-w-2xl w-full text-center p-8 sm:p-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">Bundle Order Confirmed!</h1>
          <p className="text-lg text-neutral-600 mb-6">
            You're saving ${bundle.savings}/month with your bundle package!
          </p>
          <div className="bg-neutral-50 rounded-lg p-6 mb-6 text-left">
            <h3 className="font-semibold text-neutral-900 mb-3">What Happens Next:</h3>
            <ol className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="font-semibold">1.</span>
                <span>Confirmation email sent with all details</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">2.</span>
                <span>Internet installation scheduled within 24-48 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">3.</span>
                <span>IPTV credentials sent immediately to your email</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">4.</span>
                <span>Start streaming while waiting for installation!</span>
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-primary-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="text-primary-600 hover:text-primary-700 mb-6 flex items-center gap-2"
        >
          ← Back
        </button>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <Card className="p-8 mb-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Package className="w-8 h-8 text-primary-600" />
                <h2 className="text-2xl font-bold text-neutral-900">Your Bundle Package</h2>
              </div>

              <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl p-6 text-white mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingDown className="w-6 h-6" />
                  <span className="text-lg font-semibold">Save ${bundle.savings}/month</span>
                </div>
                <p className="text-4xl font-bold mb-2">${bundle.total}<span className="text-xl font-normal">/month</span></p>
                <p className="text-white/80 line-through text-lg">Regular price: ${regularTotal}/month</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-neutral-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-neutral-900">{bundle.internet} Internet</span>
                    <span className="text-neutral-700">${bundle.internetPrice}</span>
                  </div>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>1 Gigabit download speed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Unlimited data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Free installation</span>
                    </li>
                  </ul>
                </div>

                {bundle.streaming && (
                  <div className="bg-neutral-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-neutral-900">Premium IPTV Streaming</span>
                      <span className="text-neutral-700">${bundle.streamingPrice}</span>
                    </div>
                    <ul className="space-y-1 text-sm text-neutral-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>700+ HD channels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>3 simultaneous streams</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>All devices supported</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="border-t border-neutral-200 pt-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">Subtotal</span>
                  <span className="font-semibold">${regularTotal}</span>
                </div>
                <div className="flex justify-between items-center text-green-600">
                  <span className="font-semibold">Bundle Savings (10%)</span>
                  <span className="font-semibold">-${bundle.savings}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">Installation</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-neutral-200">
                  <span className="text-lg font-bold">Total Due Today</span>
                  <span className="text-2xl font-bold text-primary-600">${bundle.total}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2 text-green-800">
                  <TrendingDown className="w-5 h-5" />
                  <p className="text-sm font-semibold">You're saving ${bundle.savings * 12}/year with this bundle!</p>
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
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">Installation Address</h3>
                  <div className="space-y-4">
                    <Input
                      label="Street Address"
                      type="text"
                      placeholder="123 Main St"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        label="City"
                        type="text"
                        placeholder="New York"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />
                      <Input
                        label="ZIP Code"
                        type="text"
                        placeholder="10001"
                        required
                        value={formData.zipCode}
                        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">Payment Method</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-4 border-2 border-neutral-200 rounded-lg cursor-pointer hover:border-primary-500 transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                        className="w-4 h-4 text-primary-600"
                      />
                      <CreditCard className="w-5 h-5 text-neutral-600" />
                      <div className="flex-1">
                        <span className="font-medium text-neutral-900">Credit/Debit Card</span>
                        <p className="text-sm text-neutral-500">Visa, Mastercard, Amex</p>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-4 border-2 border-neutral-200 rounded-lg cursor-pointer hover:border-primary-500 transition-colors">
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

                <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                  <p className="text-sm text-primary-900 font-semibold mb-1">Bundle Discount Applied!</p>
                  <p className="text-sm text-primary-700">You're saving 10% compared to purchasing services separately.</p>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full hover:shadow-glow-primary transition-all duration-300 animate-pulse-glow"
                >
                  Complete Bundle Purchase - ${bundle.total}/mo
                </Button>

                <p className="text-xs text-center text-neutral-500">
                  By completing this purchase, you agree to our Terms of Service and Privacy Policy.
                  No long-term commitment - cancel anytime.
                </p>
              </form>
            </Card>

            <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Why Bundle?</h3>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Save ${bundle.savings} every month</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>One bill for all services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Priority customer support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Guaranteed best pricing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
