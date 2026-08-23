/**
 * Contact Section Component
 * 
 * Displays:
 * - Call-to-action message
 * - Contact information (email, phone, location)
 * - Primary CTA button
 * 
 * Design: Bold blue background with white text
 * Centered layout with emphasis on contact action
 */

import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '@shared/portfolio';
import Button from './Button';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-black text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's work together
            </h2>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              I'm currently open to new opportunities and exciting projects.
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-white">
            {/* Email */}
            <div className="flex flex-col items-center gap-3">
              <Mail size={32} className="text-blue-100" />
              <div>
                <p className="text-sm text-blue-100 mb-1">Email</p>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="font-semibold hover:text-blue-200 transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center gap-3">
              <Phone size={32} className="text-blue-100" />
              <div>
                <p className="text-sm text-blue-100 mb-1">Phone</p>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="font-semibold hover:text-blue-200 transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center gap-3">
              <MapPin size={32} className="text-blue-100" />
              <div>
                <p className="text-sm text-blue-100 mb-1">Location</p>
                <p className="font-semibold">{CONTACT_INFO.location}</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              variant="secondary"
              size="lg"
              icon
              href={`mailto:${CONTACT_INFO.email}`}
              className="bg-white text-blue-600 hover:bg-blue-50 border-white hover:border-blue-100"
            >
              Say Hello
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
