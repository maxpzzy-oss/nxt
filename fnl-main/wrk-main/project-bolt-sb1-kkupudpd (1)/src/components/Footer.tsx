import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Wifi, Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <Wifi className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">InternetPro</span>
            </div>
            <p className="text-neutral-400 text-sm mb-4">
              Premium high-speed internet and IPTV streaming services. Experience the future of connectivity.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('plans')}
                  className="text-neutral-400 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  Internet Plans
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('streaming')}
                  className="text-neutral-400 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  IPTV Streaming
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('bundle')}
                  className="text-neutral-400 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  Bundle Deals
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-neutral-400 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-neutral-400">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>support@internetpro.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-400">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>24/7 Support Available</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Serving Nationwide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-400">
              {currentYear} InternetPro. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <span className="text-sm text-neutral-400">Follow Us:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
