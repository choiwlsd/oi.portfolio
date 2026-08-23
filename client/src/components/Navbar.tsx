/**
 * Navbar Component
 * 
 * Main navigation bar displayed at the top of the page.
 * Features:
 * - Logo/brand name
 * - Navigation menu items
 * - Social media links
 * - Responsive design (mobile hamburger menu)
 * 
 * Design: Clean, minimal navbar with blue accent for active links
 */

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, SOCIAL_LINKS } from '@shared/portfolio';
import SocialLinks from './SocialLinks';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand */}
          <div className="flex-none">
            <a href="/" className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins' }}>
              dev.
            </a>
          </div>

          <div className="hidden md:flex flex-1 justify-end items-center gap-20">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop Social Links */}
            <div className="flex items-center gap-4">
              <SocialLinks />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-gray-700 hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 flex gap-4">
                <SocialLinks />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
