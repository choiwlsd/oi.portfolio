/**
 * Footer Component
 * 
 * Footer section displayed at the bottom of the page.
 * Features:
 * - Copyright information
 * - Navigation links
 * - Social media links
 * - Scroll to top button
 * 
 * Design: Clean footer with minimal styling
 */

import { ArrowUp } from 'lucide-react';
import { Link } from 'wouter';
import { NAV_ITEMS } from '@shared/portfolio';
import SocialLinks from '@/components/SocialLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins' }}>
              dev.
            </h3>
            <p className="text-gray-600 text-sm">
              Building beautiful and functional digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Navigation</h4>
            <nav className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Connect</h4>
            <SocialLinks className="flex gap-3" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © {currentYear} Dev Developer. All rights reserved.
          </p>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-gray-100 hover:bg-blue-600 hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
