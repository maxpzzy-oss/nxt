import React, { useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Wifi } from 'lucide-react';
import { Footer } from './Footer';

export const Layout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

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
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors">
              <Wifi className="w-8 h-8" />
              <span className="text-xl font-bold">ConnectPro</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className="text-neutral-700 hover:text-primary-600 transition-colors"
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                Home
              </Link>
              <Link
                to="/trial"
                className="text-neutral-700 hover:text-primary-600 transition-colors"
              >
                Free Trial
              </Link>
              <button
                onClick={() => scrollToSection('plans')}
                className="text-neutral-700 hover:text-primary-600 transition-colors cursor-pointer"
              >
                Plans
              </button>
              <button
                onClick={() => scrollToSection('bundle')}
                className="text-neutral-700 hover:text-primary-600 transition-colors cursor-pointer"
              >
                Bundles
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
