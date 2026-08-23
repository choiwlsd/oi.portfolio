/**
 * SocialLinks Component
 * 
 * Displays social media icons and links.
 * Used in Navbar and Footer.
 * 
 * Features:
 * - Renders social media links with lucide-react icons
 * - Hover effects for better UX
 * - Flexible layout (horizontal/vertical)
 */

import { Github, Linkedin, Twitter, Mail, Instagram, BookOpen } from 'lucide-react';
import { SOCIAL_LINKS } from '@shared/portfolio';

interface SocialLinksProps {
  className?: string;
}

/**
 * Maps platform names to lucide-react icons
 */
const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
  instagram: Instagram,
  blog: BookOpen
};

export default function SocialLinks({ className = 'flex gap-4' }: SocialLinksProps) {
  return (
    <div className={className}>
      {SOCIAL_LINKS.map((link) => {
        const Icon = iconMap[link.platform];
        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary transition-colors p-2 hover:bg-gray-100 rounded-lg"
            aria-label={link.platform}
            title={link.platform}
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
}
