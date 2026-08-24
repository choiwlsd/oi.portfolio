/**
 * 사이트 전역에서 사용하는 기본 프로필, 연락처, 내비게이션, 소셜 링크 데이터입니다.
 * 이름·이메일·지역처럼 여러 화면에서 반복되는 값은 PROFILE에서만 수정하세요.
 */
import type { NavItem, SocialLink } from '@shared/types';

export const PROFILE = {
  name: 'Jinyeong Choi',
  email: 'choiwlsd@gmail.com',
  phone: '+82 10-8265-XXXX',
  location: 'Seoul, South Korea',
  role: 'Software Engineer',
  blog: 'https://oiblog.tistory.com/',
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Awards', href: '/awards' },
  { label: 'Projects', href: '/projects' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'github', url: 'https://github.com/choiwlsd', icon: 'Github' },
  { platform: 'blog', url: PROFILE.blog, icon: 'BookOpen' },
  { platform: 'linkedin', url: 'www.linkedin.com/in/jinyeong-choi-oo88o1245689', icon: 'Linkedin' },
  { platform: 'instagram', url: 'https://instagram.com/_oiwlsx', icon: 'Instagram' },
  { platform: 'email', url: `mailto:${PROFILE.email}`, icon: 'Mail' },
];

export const CONTACT_INFO = {
  email: PROFILE.email,
  phone: PROFILE.phone,
  location: PROFILE.location,
  blog: PROFILE.blog,
};

export const PORTFOLIO_META = {
  name: PROFILE.name,
  title: 'Full-Stack Developer & AI Enthusiast',
  subtitle: 'Passionate about tackling new challenges and experiencing the overall flow of AI service development',
  bio: "I'm a Computer Science student passionate about building innovative solutions at the intersection of AI and web development. I love collaborating with people and believe in the power of synergy.",
  cta: { primary: 'View My Work', secondary: 'Get in Touch' },
};
