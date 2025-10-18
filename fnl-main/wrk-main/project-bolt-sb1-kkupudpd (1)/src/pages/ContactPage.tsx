import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card } from '../components/Card';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Contact Us</h1>
          <p className="text-lg text-neutral-600">
            We're here to help! Reach out to us anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Email Support</h3>
                <p className="text-neutral-600 mb-2">
                  Get in touch via email for any inquiries
                </p>
                <a href="mailto:support@internetpro.com" className="text-primary-600 hover:text-primary-700 font-medium">
                  support@internetpro.com
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-secondary-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Phone Support</h3>
                <p className="text-neutral-600 mb-2">
                  Speak with our team directly
                </p>
                <a href="tel:+18005551234" className="text-primary-600 hover:text-primary-700 font-medium">
                  1-800-555-1234
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Service Area</h3>
                <p className="text-neutral-600">
                  We provide services nationwide with local support in all major cities and regions.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-secondary-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Support Hours</h3>
                <p className="text-neutral-600 mb-1">
                  24/7 Customer Support
                </p>
                <p className="text-sm text-neutral-500">
                  Available every day of the year
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="How can we help you?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                placeholder="Tell us more about your inquiry..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Send Message
            </button>
          </form>
        </Card>
      </div>
    </div>
  );
};
