import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Wifi, Tv, Zap } from 'lucide-react';
import { Button } from './Button';

const slides = [
  {
    id: 1,
    title: 'Lightning Fast 1 Gigabit Internet',
    subtitle: 'Experience blazing speeds for all your devices',
    description: 'Perfect for streaming, gaming, and remote work',
    icon: Zap,
    gradient: 'from-primary-600 to-primary-700',
    cta: 'Get Free Trial',
  },
  {
    id: 2,
    title: 'Premium IPTV Streaming',
    subtitle: 'Thousands of channels at your fingertips',
    description: 'HD quality streaming on all your devices',
    icon: Tv,
    gradient: 'from-secondary-600 to-secondary-700',
    cta: 'Explore Channels',
  },
  {
    id: 3,
    title: 'Bundle & Save More',
    subtitle: 'Combine internet and streaming for maximum value',
    description: 'Get the best deals with our custom bundles',
    icon: Wifi,
    gradient: 'from-primary-700 to-primary-800',
    cta: 'Build Your Bundle',
  },
];

export const HeroCarousel: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleCTAClick = () => {
    const slide = slides[currentSlide];
    if (slide.cta === 'Get Free Trial') {
      navigate('/trial');
    } else if (slide.cta === 'Explore Channels') {
      navigate('/streaming');
    } else if (slide.cta === 'Build Your Bundle') {
      const element = document.getElementById('bundle');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="relative w-full bg-gradient-to-r from-neutral-900 to-neutral-800 overflow-hidden">
      <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold z-10 shadow-lg">
        Limited Time: 1-Day Free Trial
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex items-center gap-8">
          <button
            onClick={goToPrevious}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white backdrop-blur-sm flex-shrink-0"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex-1 text-left text-white max-w-3xl mr-auto">
            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${slide.gradient} mb-4`}>
              <Icon className="w-7 h-7" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
              {slide.title}
            </h1>

            <p className="text-lg sm:text-xl text-neutral-200 mb-2">
              {slide.subtitle}
            </p>

            <p className="text-base text-neutral-300 mb-6">
              {slide.description}
            </p>

            <div className="flex items-center gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={handleCTAClick}
                className="hover:shadow-glow-primary transition-all duration-300"
              >
                {slide.cta}
              </Button>
              <Button variant="outline" size="md" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>

          <button
            onClick={goToNext}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white backdrop-blur-sm flex-shrink-0"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
