import React from 'react';
import { HelpCircle, Zap, CreditCard, Tv, Settings, WifiOff } from 'lucide-react';
import { Card } from '../components/Card';

export const HelpPage: React.FC = () => {
  const faqs = [
    {
      icon: Zap,
      question: 'How fast is the internet service?',
      answer: 'Our standard plans offer speeds up to 1 Gbps (1000 Mbps) download and upload. Actual speeds may vary based on your location and network conditions.',
    },
    {
      icon: CreditCard,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), debit cards, and PayPal. All payments are processed securely.',
    },
    {
      icon: Tv,
      question: 'How many devices can stream IPTV simultaneously?',
      answer: 'The number of simultaneous streams depends on your package. Base allows 1 device, Ascend allows 2 devices, and Peak allows 3 devices at the same time.',
    },
    {
      icon: Settings,
      question: 'How do I set up my service?',
      answer: 'After purchase, you will receive setup instructions via email within 24 hours. Our support team is available 24/7 to assist with installation and configuration.',
    },
    {
      icon: WifiOff,
      question: 'What if I experience connectivity issues?',
      answer: 'First, try restarting your router and device. If issues persist, contact our 24/7 support team at support@internetpro.com or call 1-800-555-1234.',
    },
    {
      icon: HelpCircle,
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel anytime. There are no long-term contracts or cancellation fees. Your service will remain active until the end of your billing period.',
    },
  ];

  const guides = [
    {
      title: 'Getting Started',
      description: 'Learn how to set up your internet and IPTV services',
      topics: ['Account setup', 'Device configuration', 'First login'],
    },
    {
      title: 'Troubleshooting',
      description: 'Common issues and how to resolve them',
      topics: ['Connection problems', 'Buffering issues', 'Login errors'],
    },
    {
      title: 'Billing & Payments',
      description: 'Manage your subscription and payment methods',
      topics: ['View invoices', 'Update payment info', 'Refund policy'],
    },
    {
      title: 'Account Management',
      description: 'Control your account settings and preferences',
      topics: ['Change password', 'Update profile', 'Manage devices'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Help Center</h1>
          <p className="text-lg text-neutral-600">
            Find answers to common questions and get support
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              return (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-neutral-600 text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Help Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.map((guide, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {guide.title}
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  {guide.description}
                </p>
                <ul className="space-y-2">
                  {guide.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="text-sm text-neutral-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-8 bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-100">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Still Need Help?</h2>
            <p className="text-neutral-600 mb-6">
              Our support team is available 24/7 to assist you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:support@internetpro.com"
                className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Email Support
              </a>
              <a
                href="tel:+18005551234"
                className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all"
              >
                Call Us: 1-800-555-1234
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
