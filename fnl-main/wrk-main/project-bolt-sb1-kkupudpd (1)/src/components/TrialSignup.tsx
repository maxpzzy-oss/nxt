import React, { useState } from 'react';
import { CheckCircle, Gift, Users as UsersIcon, AlertCircle } from 'lucide-react';
import { Card } from './Card';
import { Input } from './Input';
import { Button } from './Button';

export const TrialSignup: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [discordJoined, setDiscordJoined] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      setIsSuccess(true);
    } catch (err) {
      setError('Failed to submit trial request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Trial Request Submitted!
            </h2>
            <p className="text-lg text-neutral-600 mb-6">
              Thank you for signing up! Check your email for setup instructions and connection details.
            </p>
            <div className="bg-secondary-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-neutral-900 mb-3">Next Steps:</h3>
              <ul className="text-left space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary-600 mt-0.5 flex-shrink-0" />
                  <span>Check your email for connection details</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary-600 mt-0.5 flex-shrink-0" />
                  <span>Join our Discord for priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary-600 mt-0.5 flex-shrink-0" />
                  <span>Your trial will be activated within minutes</span>
                </li>
              </ul>
            </div>
            <Button variant="primary" onClick={() => window.location.href = '/'}>
              Return to Home
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full mb-6">
            <Gift className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Start Your Free 1-Day Trial
          </h2>
          <p className="text-lg text-neutral-600">
            Experience our lightning-fast 1 Gigabit internet with a 1-day free trial
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-xl font-semibold text-neutral-900 mb-6">Sign Up for Trial</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Full Name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                required
              />

              <Input
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
              />

              <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-4">
                <p className="text-sm font-semibold text-neutral-900 mb-1">Trial Plan</p>
                <p className="text-lg font-bold text-secondary-600">1-Day Free Trial</p>
                <p className="text-sm text-neutral-600 mt-1">Full access to 1 Gigabit internet speed</p>
              </div>

              {error && (
                <div className="bg-primary-50 border border-primary-200 rounded-lg p-3 flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-primary-700">{error}</p>
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting || !fullName || !email}
              >
                {isSubmitting ? 'Submitting...' : 'Start 1-Day Free Trial'}
              </Button>

              <p className="text-xs text-neutral-600 text-center">
                By signing up, you agree to our terms and conditions
              </p>
            </form>
          </Card>

          <Card className="bg-gradient-to-br from-secondary-50 to-primary-50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary-600 rounded-full flex items-center justify-center">
                <UsersIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">Join Our Community</h3>
            </div>

            <p className="text-neutral-700 mb-6">
              Get exclusive benefits by joining our Discord community:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-secondary-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-neutral-700">Priority 24/7 technical support</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-secondary-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-neutral-700">Exclusive discount codes for future orders</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-secondary-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-neutral-700">Early access to new features and plans</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-secondary-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-neutral-700">Direct communication with our team</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-secondary-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-neutral-700">Community tips and best practices</span>
              </li>
            </ul>

            <div className="bg-white rounded-lg p-4 mb-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={discordJoined}
                  onChange={(e) => setDiscordJoined(e.target.checked)}
                  className="w-5 h-5 text-secondary-600 rounded border-neutral-300 focus:ring-2 focus:ring-secondary-500"
                />
                <span className="text-sm text-neutral-700">I joined the Discord community</span>
              </label>
            </div>

            <Button
              variant="secondary"
              className="w-full"
              onClick={() => window.open('https://discord.gg/your-server', '_blank')}
            >
              Join Discord Now
            </Button>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-white rounded-card shadow-card p-6 max-w-2xl mx-auto">
            <h4 className="font-semibold text-neutral-900 mb-3">What happens after signup?</h4>
            <div className="grid sm:grid-cols-3 gap-4 text-sm text-neutral-600">
              <div>
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2 text-primary-600 font-bold">
                  1
                </div>
                <p>Receive connection details via email instantly</p>
              </div>
              <div>
                <div className="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-2 text-secondary-600 font-bold">
                  2
                </div>
                <p>Set up your device with our easy guide</p>
              </div>
              <div>
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2 text-primary-600 font-bold">
                  3
                </div>
                <p>Start enjoying high-speed internet immediately</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
