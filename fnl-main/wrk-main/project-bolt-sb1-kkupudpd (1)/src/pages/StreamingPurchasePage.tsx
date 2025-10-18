import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Tv, CheckCircle2, CreditCard, Bitcoin, Smartphone, Monitor, Tablet } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';

const channels = [
  { category: 'Sports', count: 150, examples: ['ESPN', 'FOX Sports', 'NBA TV', 'NFL Network'] },
  { category: 'Movies & Entertainment', count: 200, examples: ['HBO', 'Showtime', 'AMC', 'FX'] },
  { category: 'News', count: 50, examples: ['CNN', 'FOX News', 'MSNBC', 'BBC'] },
  { category: 'Kids & Family', count: 80, examples: ['Disney', 'Nickelodeon', 'Cartoon Network', 'PBS Kids'] },
  { category: 'Lifestyle', count: 100, examples: ['HGTV', 'Food Network', 'Travel Channel', 'TLC'] },
  { category: 'International', count: 120, examples: ['Various Languages', 'Global Content'] },
];

export const StreamingPurchasePage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    paymentMethod: 'crypto',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Streaming purchase:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-primary-50 flex items-center justify-center px-4 py-12">
        <Card className="max-w-2xl w-full text-center p-8 sm:p-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">Welcome to Premium IPTV!</h1>
          <p className="text-lg text-neutral-600 mb-6">
            Your streaming service is now active. Check your email for setup instructions.
          </p>
          <div className="bg-neutral-50 rounded-lg p-6 mb-6 text-left">
            <h3 className="font-semibold text-neutral-900 mb-3">Getting Started:</h3>
            <ol className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="font-semibold">1.</span>
                <span>Check your email for login credentials and setup guide</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">2.</span>
                <span>Download our app or configure your device</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">3.</span>
                <span>Login and start streaming 700+ channels instantly</span>
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
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-primary-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="text-secondary-600 hover:text-secondary-700 mb-6 flex items-center gap-2"
        >
          ← Back
        </button>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <Card className="p-8 mb-6">
              <div className="bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-xl p-6 text-white mb-6">
                <h2 className="text-3xl font-bold mb-2">Premium IPTV Package</h2>
                <p className="text-4xl font-bold mb-4">$79<span className="text-xl font-normal">/month</span></p>
                <div className="flex items-center gap-2 text-white/90">
                  <Tv className="w-5 h-5" />
                  <span className="text-lg">700+ HD Channels</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">All major sports, movies, and entertainment channels</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">Full HD and 4K quality streaming</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">Compatible with all devices</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">Watch on up to 3 devices simultaneously</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">24/7 customer support</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">No contracts - cancel anytime</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">Compatible Devices</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Smartphone className="w-6 h-6 text-secondary-600" />
                  </div>
                  <p className="text-sm text-neutral-700">Mobile</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Tablet className="w-6 h-6 text-secondary-600" />
                  </div>
                  <p className="text-sm text-neutral-700">Tablet</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Monitor className="w-6 h-6 text-secondary-600" />
                  </div>
                  <p className="text-sm text-neutral-700">Smart TV</p>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <Card className="p-8 mb-6">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Complete Your Purchase</h2>
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
                        className="w-4 h-4 text-secondary-600"
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
                    <label className="flex items-center gap-3 p-4 border-2 border-secondary-500 bg-secondary-50 rounded-lg cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        value="crypto"
                        checked={formData.paymentMethod === 'crypto'}
                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                        className="w-4 h-4 text-secondary-600"
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
                  className="w-full hover:shadow-glow-secondary transition-all duration-300 animate-pulse-glow"
                >
                  Start Streaming Now - $79/mo
                </Button>

                <p className="text-xs text-center text-neutral-500">
                  By completing this purchase, you agree to our Terms of Service.
                  No commitment - cancel anytime.
                </p>
              </form>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">Channel Categories</h3>
              <div className="space-y-3">
                {channels.map((channel, index) => (
                  <div key={index} className="flex justify-between items-center pb-3 border-b border-neutral-100 last:border-0">
                    <div>
                      <p className="font-semibold text-neutral-900">{channel.category}</p>
                      <p className="text-xs text-neutral-500">{channel.examples.join(', ')}</p>
                    </div>
                    <span className="text-sm font-bold text-secondary-600">{channel.count}+</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
