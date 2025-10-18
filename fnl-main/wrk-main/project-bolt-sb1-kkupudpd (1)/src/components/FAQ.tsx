import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What is the connection speed?',
    answer: 'All our internet plans come with a blazing-fast 1 Gigabit connection speed, perfect for streaming, gaming, remote work, and multiple device usage.',
  },
  {
    question: 'How does the free trial work?',
    answer: 'Sign up for any internet plan and get a 1-day free trial to test our service. No payment required upfront. After the trial, you can choose to continue with your selected plan.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major cryptocurrencies for payment. Our checkout process is secure and payments are processed instantly through our WHMCS payment gateway.',
  },
  {
    question: 'Can I combine internet and streaming packages?',
    answer: 'Yes! Use our Bundle Builder to create custom packages combining internet and IPTV streaming. You\'ll save 10% when you bundle services together.',
  },
  {
    question: 'What devices support IPTV streaming?',
    answer: 'Our IPTV service works on Smart TVs, mobile phones, tablets, desktops, and any device with internet connectivity. We provide easy setup instructions for all platforms.',
  },
  {
    question: 'Is there a data cap on internet plans?',
    answer: 'No! All our internet plans come with unlimited data. Stream, download, and browse as much as you want without worrying about data limits.',
  },
  {
    question: 'How quickly is service activated?',
    answer: 'Service activation is instant after payment confirmation. You\'ll receive your connection details and setup instructions via email immediately.',
  },
  {
    question: 'What if I need technical support?',
    answer: 'We offer 24/7 customer support through our Discord community and email. Join our Discord server for priority support, exclusive discounts, and community updates.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-primary-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600">
            Everything you need to know about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-card shadow-soft border border-neutral-200 overflow-hidden transition-all hover:shadow-card"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
              >
                <span className="font-semibold text-neutral-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-600 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </div>
  );
};
