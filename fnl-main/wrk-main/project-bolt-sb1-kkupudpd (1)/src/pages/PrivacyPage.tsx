import React from 'react';
import { Card } from '../components/Card';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-neutral-600">
            Last Updated: October 2025
          </p>
        </div>

        <Card className="p-8">
          <div className="prose prose-neutral max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Information We Collect</h2>
              <p className="text-neutral-700 mb-4">
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                <li>Name, email address, and contact information</li>
                <li>Billing and payment information</li>
                <li>Service usage data and preferences</li>
                <li>Customer support communications</li>
                <li>Device information and IP addresses</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-neutral-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your transactions and send related information</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues and fraudulent activity</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Information Sharing</h2>
              <p className="text-neutral-700 mb-4">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                <li>With service providers who perform services on our behalf</li>
                <li>To comply with legal obligations or respond to lawful requests</li>
                <li>To protect the rights and safety of InternetPro and our users</li>
                <li>In connection with a merger, sale, or acquisition of our business</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Data Security</h2>
              <p className="text-neutral-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Data Retention</h2>
              <p className="text-neutral-700 mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Your Rights</h2>
              <p className="text-neutral-700 mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Objection to processing of your information</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Cookies and Tracking</h2>
              <p className="text-neutral-700 mb-4">
                We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings, though disabling cookies may affect your ability to use certain features of our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Children's Privacy</h2>
              <p className="text-neutral-700 mb-4">
                Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we learn we have collected personal information from a child under 13, we will delete that information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Changes to Privacy Policy</h2>
              <p className="text-neutral-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Contact Us</h2>
              <p className="text-neutral-700 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-neutral-700">
                Email: support@internetpro.com<br />
                Phone: 1-800-555-1234
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};
