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
import { useLocation } from 'wouter';
import { NAV_ITEMS } from '@shared/portfolio';
import SocialLinks from './SocialLinks';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const isActive = (href: string) =>
    href === '/' ? location === href : location === href || location.startsWith(`${href}/`);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-[#fafaf8]">
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
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href);

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`relative py-2 text-sm font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:bg-[#2f6dff] after:transition-transform ${
                      active
                        ? 'text-[#2f6dff] after:scale-x-100'
                        : 'text-gray-700 after:scale-x-0 hover:text-[#2f6dff] hover:after:scale-x-100'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
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
          <div className="border-t border-black/10 bg-[#fafaf8] md:hidden">
            <div className="px-4 py-4 space-y-3">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href);

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`block border-l-2 py-2 pl-3 transition-colors ${
                      active
                        ? 'border-[#2f6dff] font-semibold text-[#2f6dff]'
                        : 'border-transparent text-gray-700 hover:text-[#2f6dff]'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="flex gap-4 border-t border-black/10 pt-4">
                <SocialLinks />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
