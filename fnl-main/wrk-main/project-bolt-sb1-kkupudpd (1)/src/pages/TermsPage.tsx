import React from 'react';
import { Card } from '../components/Card';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-neutral-600">
            Last Updated: October 2025
          </p>
        </div>

        <Card className="p-8">
          <div className="prose prose-neutral max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-neutral-700 mb-4">
                By accessing and using InternetPro services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Service Description</h2>
              <p className="text-neutral-700 mb-4">
                InternetPro provides high-speed internet connectivity and IPTV streaming services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. User Obligations</h2>
              <p className="text-neutral-700 mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                <li>Provide accurate and complete information during registration</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use the service in compliance with all applicable laws and regulations</li>
                <li>Not share your account with unauthorized users</li>
                <li>Not use the service for any illegal or unauthorized purpose</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Payment Terms</h2>
              <p className="text-neutral-700 mb-4">
                All fees are stated in USD and are non-refundable unless otherwise specified. You agree to pay all charges incurred by you or on your behalf through the service, at the prices in effect when such charges are incurred.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Free Trial</h2>
              <p className="text-neutral-700 mb-4">
                Our 1-day free trial is available to new customers only. You may cancel at any time during the trial period without being charged. After the trial period, your subscription will automatically renew at the regular price unless cancelled.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Service Availability</h2>
              <p className="text-neutral-700 mb-4">
                While we strive to provide uninterrupted service, we do not guarantee that our services will be available at all times. We may experience downtime for maintenance, upgrades, or due to circumstances beyond our control.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-neutral-700 mb-4">
                InternetPro shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Termination</h2>
              <p className="text-neutral-700 mb-4">
                We reserve the right to terminate or suspend your account and access to our services immediately, without prior notice, for any reason, including but not limited to breach of these Terms of Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Changes to Terms</h2>
              <p className="text-neutral-700 mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our service. Your continued use of the service after such modifications constitutes your acceptance of the updated terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Contact Information</h2>
              <p className="text-neutral-700 mb-4">
                If you have any questions about these Terms of Service, please contact us at support@internetpro.com.
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};
