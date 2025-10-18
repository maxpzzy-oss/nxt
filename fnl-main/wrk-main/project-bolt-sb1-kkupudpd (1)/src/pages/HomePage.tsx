import React from 'react';
import { HeroCarousel } from '../components/HeroCarousel';
import { InternetPlans } from '../components/InternetPlans';
import { StreamingPackage } from '../components/StreamingPackage';
import { BundleBuilder } from '../components/BundleBuilder';
import { BestPlanFinder } from '../components/BestPlanFinder';
import { TrialSignup } from '../components/TrialSignup';
import { FAQ } from '../components/FAQ';

export const HomePage: React.FC = () => {
  return (
    <div>
      <HeroCarousel />

      <section className="py-12 sm:py-16 lg:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Find Your Perfect Plan
            </h2>
            <p className="text-lg text-neutral-600">
              Answer a few questions to get personalized recommendations
            </p>
          </div>
          <BestPlanFinder />
        </div>
      </section>

      <section id="plans" className="py-12 sm:py-16 lg:py-20 bg-white">
        <InternetPlans />
      </section>

      <section id="streaming" className="py-12 sm:py-16 lg:py-20 bg-neutral-50">
        <StreamingPackage />
      </section>

      <section id="bundle" className="py-12 sm:py-16 lg:py-20 bg-white">
        <BundleBuilder />
      </section>

      <section id="trial" className="py-12 sm:py-16 lg:py-20 bg-neutral-50">
        <TrialSignup />
      </section>

      <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-white">
        <FAQ />
      </section>
    </div>
  );
};
