import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Zap, Shield, Clock, CheckCircle2, MessageCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';

export const FreeTrialPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Free trial signup:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center px-4">
        <Card className="max-w-2xl w-full text-center p-8 sm:p-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">
            Welcome to Your Free Trial!
          </h1>
          <p className="text-lg text-neutral-600 mb-6">
            Check your email for setup instructions and your trial activation link.
          </p>
          <div className="bg-neutral-50 rounded-lg p-6 mb-6 text-left">
            <h3 className="font-semibold text-neutral-900 mb-3">Next Steps:</h3>
            <ol className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="font-semibold">1.</span>
                <span>Check your email inbox for activation instructions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">2.</span>
                <span>Download our connection guide</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">3.</span>
                <span>Start enjoying lightning-fast internet</span>
              </li>
            </ol>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/">
              <Button variant="primary">Back to Home</Button>
            </Link>
            <a href="https://discord.gg/your-server" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Join Discord Community
              </Button>
            </a>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-4">
            <Wifi className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
            Start Your Free 1-Day Trial
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Experience lightning-fast 1 Gigabit internet with no commitment. Cancel anytime during your trial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Sign Up for Free Trial</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
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
              <Button
                type="submit"
                variant="primary"
                className="w-full hover:shadow-glow-primary transition-all duration-300 animate-pulse-glow"
              >
                Start Free Trial
              </Button>
              <a
                href="https://discord.gg/your-server"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  type="button"
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2 border-[#5865F2] text-[#5865F2] hover:bg-[#5865F2] hover:text-white transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  Join Discord First
                </Button>
              </a>
            </form>
            <p className="text-sm text-neutral-500 mt-4 text-center">
              No credit card required. Cancel anytime during your trial.
            </p>
          </Card>

          <div>
            <Card className="p-8 mb-6 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
              <h3 className="text-2xl font-bold mb-4">Skip the Trial - Get 40% Off!</h3>
              <p className="text-lg mb-6 text-white/90">
                Purchase any plan now and get an instant 40% discount on your first month.
              </p>
              <Link to="/internet-plans">
                <Button
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-primary-600 transition-all duration-300"
                >
                  View All Plans
                </Button>
              </Link>
            </Card>

            <div className="space-y-4">
              {[
                { icon: Zap, title: '1 Gigabit Speed', description: 'Lightning-fast downloads and streaming' },
                { icon: Shield, title: 'Secure Connection', description: 'Enterprise-grade security included' },
                { icon: Clock, title: '24/7 Support', description: 'Round-the-clock customer assistance' },
              ].map((feature, index) => (
                <Card key={index} className="p-4 flex items-start gap-4 hover:shadow-hover transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-neutral-600">{feature.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-card p-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
            What You Get With Your Trial
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Full 1 Gigabit speed access',
              'Unlimited data usage',
              'All premium features unlocked',
              'Priority customer support',
              'No installation fees',
              'Easy setup in minutes',
              'Compatible with all devices',
              'Cancel anytime, no questions asked',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
