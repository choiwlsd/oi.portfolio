import { ReactNode } from 'react';

/**
 * Shared constants and static data for the developer portfolio
 * Contains portfolio information, projects, skills, and tools
 */

import type { NavItem, Project, Skill, Tool, SocialLink } from './types';

/**
 * Navigation menu items
 */
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Awards', href: '/awards' },
  { label: 'Projects', href: '/projects' },
];

/**
 * Social media links
 */
export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'github', url: 'https://github.com/choiwlsd', icon: 'Github' },
  { platform: 'blog', url: 'https://oiblog.tistory.com/', icon: 'BookOpen' },
  { platform: 'linkedin', url: 'www.linkedin.com/in/jinyeong-choi-oo88o1245689', icon: 'Linkedin' },
  { platform: 'instagram', url: 'https://instagram.com/_oiwlsx', icon: 'Instagram' },
  { platform: 'email', url: 'mailto:choiwlsd@gmail.com', icon: 'Mail' },
];

import blueBG from '../client/src/assets/background/blue-none-bg.png';
import pinkBG from '../client/src/assets/background/pink-none-bg.png';
/**
 * Featured projects with detailed information
 */
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Pose-Agent',
    description: '[캡스톤디자인] 자율협력지원 Agentic AI: 협주 가능 악기 레슨 Agent AI 플랫폼 기술 개발',
    shortDescription: '협주가능 악기 레슨 Agent AI 플랫폼',
    image: blueBG,
    gallery: [blueBG, pinkBG],
    tags: ['Python', 'MediaPipe', 'AI'],
    link: '/projects/1',
    year: '2025',
    featured: true,
    category: 'AI',
    duration: 'Jan 2025 - May 2025',
    team: ['Jinyeong Choi', 'Team Members'],
    technologies: ['Python', 'MediaPipe', 'OpenCV', 'PyTorch', 'TCN', 'CNN'],
    challenge: 'Create a real-time music learning AI system that analyzes user performance and provides integrated feedback on pitch, rhythm, and posture.',
    approach: 'Implemented multi-agent architecture where each agent handles specific aspects (Pose, Pitch, Rhythm) and collaborates for comprehensive feedback.',
    solution: 'Developed Pose Agent using MediaPipe for pose estimation, TCN for posture classification, and rule-based feedback generation for real-time analysis.',
    results: [
      'Successfully implemented pose estimation and analysis',
      'Integrated multi-agent system architecture',
      'Real-time feedback generation capability',
    ],
    liveLink: 'https://github.com/choiwlsd/Pose-Agent',
    githubLink: 'https://github.com/choiwlsd/Pose-Agent',
  },

  {
    id: '2',
    title: 'KHUTHON 2025 - Micro Fertilizer Trading Platform',
    description: '🏆KHUTHON 최우수상 수상작: 마이크로 비료 거래 플랫폼',
    shortDescription: 'Micro fertilizer trading platform',
    image: 'https://cdn.phototourl.com/free/2026-05-13-edd55c19-479e-498c-966e-645a5d4d33bc.png',
    gallery: [blueBG, pinkBG],
    tags: ['JavaScript', 'React', 'Node.js'],
    link: '/projects/2',
    year: '2025',
    featured: true,
    category: 'Web',
    duration: 'Mar 2025 - May 2025',
    team: ['Frontend Developer', 'Backend Developer', 'Designer'],
    technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    challenge: 'Build a platform for farmers to buy and sell micro fertilizers efficiently.',
    approach: 'Created a user-friendly marketplace with real-time inventory management and secure transactions.',
    solution: 'Developed full-stack web application with React frontend and Node.js backend.',
    results: [
      'Won Grand Prize at KHUTHON 2025',
      'Positive user feedback',
      'Scalable architecture',
    ],
    liveLink: 'https://github.com/choiwlsd/khuthon2025',
    githubLink: 'https://github.com/choiwlsd/khuthon2025',
  },

  {
    id: '3',
    title: 'Semothon 2025 - Classroom Rental Platform',
    description: '🏆세모톤 대상 수상작: 강의실 대여 플랫폼',
    shortDescription: 'Classroom rental platform',
    image: 'https://cdn.phototourl.com/free/2026-05-13-1843cd55-a60c-47bd-ba6b-435c426a1246.png',
    gallery: [blueBG, pinkBG],
    tags: ['JavaScript', 'React', 'TypeScript'],
    link: '/projects/3',
    year: '2025',
    featured: true,
    category: 'Web',
    duration: 'Apr 2025 - Apr 2025',
    team: ['Frontend Developer', 'UI/UX Designer'],
    technologies: ['JavaScript', 'React', 'TypeScript', 'CSS'],
    challenge: 'Design and develop a platform for university classroom reservations.',
    approach: 'Built responsive web interface with intuitive booking system and real-time availability.',
    solution: 'Created modern React application with TypeScript.',
    results: [
      'Won Grand Prize at Semothon 2025',
      'Excellent UI/UX feedback',
      'Responsive design',
    ],
    liveLink: 'https://github.com/choiwlsd/2025_TEAM_6_FE',
    githubLink: 'https://github.com/choiwlsd/2025_TEAM_6_FE',
  },

  {
    id: '4',
    title: 'KHUTHON 2024 - Personal Power Monitoring System',
    description: '🏆KHUTHON 우수상/인기상 수상작: 개인화된 전력 모니터링 시스템',
    shortDescription: 'Personal power monitoring system',
    image: blueBG,
    gallery: [blueBG, pinkBG],
    tags: ['JavaScript', 'React', 'IoT'],
    link: '/projects/4',
    year: '2024',
    featured: false,
    category: 'Web',
    duration: 'May 2024 - May 2024',
    team: ['Developer', 'Designer'],
    technologies: ['JavaScript', 'React', 'IoT'],
    challenge: 'Create a system to monitor and optimize household electricity consumption.',
    approach: 'Developed IoT-integrated web application.',
    solution: 'Built dashboard with charts and analytics.',
    results: [
      'Won Excellence Award and Popularity Award at KHUTHON 2024',
    ],
  },

  {
    id: '5',
    title: 'Track Study Project - AI Cover Song Video Generator',
    description: '🏆TrackStudy Project 2등 수상작: 음성 및 영상 생성 모델을 활용한 노래 커버 영상 제작 서비스',
    shortDescription: 'AI-powered cover song video generator',
    image: blueBG,
    gallery: [blueBG, pinkBG],
    tags: ['Python', 'AI', 'Video Generation'],
    link: '/projects/5',
    year: '2024',
    featured: false,
    category: 'AI',
    duration: 'Apr 2024 - Apr 2024',
    team: ['Solo'],
    technologies: ['Python', 'AI Models', 'Video Processing'],
    challenge: 'Create a service that generates cover song videos using AI.',
    approach: 'Integrated multiple AI models.',
    solution: 'Built end-to-end AI music video pipeline.',
    results: [
      'Won 2nd Prize at Track Study Project',
    ],
  },

  {
    id: '6',
    title: 'Done-Check',
    description: 'To-do Chrome extension service. Done? then check what you did!🌱🐾',
    shortDescription: 'Chrome extension for task tracking',
    image: blueBG,
    gallery: [blueBG, pinkBG],
    tags: ['JavaScript', 'Chrome Extension'],
    link: '/projects/6',
    year: '2025',
    featured: false,
    category: 'Others',
    duration: 'Aug 2025',
    team: ['Solo'],
    technologies: ['JavaScript', 'Chrome API'],
    challenge: 'Create a simple task tracking browser extension.',
    approach: 'Built lightweight Chrome extension with local storage.',
    solution: 'Developed a user-friendly task management interface.',
    results: [
      'Functional Chrome extension',
      'Positive user feedback',
    ],
  },
];

/**
 * Skills with proficiency levels
 */
export const SKILLS: Skill[] = [
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'Python', level: 85, category: 'frontend' },
  { name: 'UI / UX', level: 80, category: 'frontend' },
];

/**
 * Tools and technologies
 */
export const TOOLS: Tool[] = [
  { name: 'JavaScript', icon: 'Code', category: 'frontend' },
  { name: 'TypeScript', icon: 'Zap', category: 'frontend' },
  { name: 'React', icon: 'Zap', category: 'frontend' },
  { name: 'Python', icon: 'Zap', category: 'frontend' },
  { name: 'Vite', icon: 'Zap', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'Wind', category: 'frontend' },
  { name: 'Node.js', icon: 'Server', category: 'tools' },
  { name: 'Git', icon: 'GitBranch', category: 'tools' },
];

/** 경력 — About 페이지가 이 배열을 직접 사용합니다. */
export const EXPERIENCE = [
  {
    period: '2026. 08. — PRESENT',
    role: 'KIST Europe Software Convergence Intern',
    organization: 'Research-based',
    description: 'KIST Europe에서 소프트웨어 융합 연구 인턴으로 근무하며, 연구 프로젝트에 필요한 소프트웨어 개발 및 데이터 분석을 수행합니다. 다양한 연구 분야와 협업하며 실질적인 문제 해결 능력을 향상시키고 있습니다.',
  },
  {
    period: '2024 — PRESENT',
    role: 'Frontend & AI Developer',
    organization: 'Project-based',
    description: '웹 애플리케이션과 AI 기반 서비스를 설계하고 개발합니다. 사용자 흐름을 정의하는 단계부터 구현과 개선까지 참여합니다.',
  },
];

/** 리더십 및 대외활동 — 최신순으로 작성합니다. */
export const ACTIVITIES = [
  {
    period: '2025. 01. — 2025. 12.',
    title: '미디어홍보팀장',
    organization: '경희대학교 소프트웨어융합대학 학생회 새벽',
    category: 'Leadership',
  },
  {
    period: '2025. 01. — 2025. 12.',
    title: '디닷컴 회장',
    organization: '경희대학교 소프트웨어융합대학 학술동아리',
    category: 'Leadership',
  },
  {
    period: '2025. 01.',
    title: 'Silicon Valley Innovation & Startup Program 수료',
    organization: 'San Jose State University',
    category: 'Program',
  },
  {
    period: '2024. 08. — 2025. 07.',
    title: '제2기숙사 생활멘토',
    organization: '경희대학교',
    category: 'Leadership',
  },
  {
    period: '2024. 07. — 2024. 12.',
    title: '디닷컴 총무',
    organization: '경희대학교 소프트웨어융합대학 학술동아리',
    category: 'Leadership',
  },
  {
    period: '2024. 04. — 2024. 05.',
    title: '베리어프리 앱 개발 콘테스트 참여',
    organization: 'Barrier-Free App Development Contest',
    category: 'Program',
  },
  {
    period: '2024. 01. — 2024. 06.',
    title: 'KHUDA',
    organization: '경희대학교 데이터분석 AI 동아리',
    category: 'Community',
    link: 'https://github.com/khuda-data',
  },
  {
    period: '2024. 05.',
    title: '제2회 Generative AI Ideation 참여',
    organization: '뤼튼(Wrtn) 캠퍼스리더 주관',
    category: 'Program',
  },
  {
    period: '2024. 03. — 2024. 08.',
    title: 'University MakeUs Challenge 6기 · WEB 파트',
    organization: '대학생 IT 연합 동아리 UMC',
    category: 'Community',
    link: 'https://umc.makeus.in/',
  },
] as const;

/**
 * Contact information
 */
export const CONTACT_INFO = {
  email: 'choiwlsd@gmail.com',
  phone: '+82 10-8265-XXXX',
  location: 'South Korea',
  blog: 'https://oiblog.tistory.com/',
};

/**
 * Portfolio metadata
 */
interface PORTFOLIO_META {
  name: string;
  title: string;
  tagline: ReactNode;
  subtitle: string;
  bio: string;
  cta: {
    primary: string;
    secondary: string;
  };
}

export const PORTFOLIO_META = {
  name: 'Jinyeong Choi',
  title: 'Full-Stack Developer & AI Enthusiast',
  subtitle: 'Passionate about tackling new challenges and experiencing the overall flow of AI service development',
  bio: "I'm a Computer Science student passionate about building innovative solutions at the intersection of AI and web development. I love collaborating with people and believe in the power of synergy. With multiple hackathon awards and real-world project experience, I'm committed to creating impactful digital experiences.",
  cta: {
    primary: 'View My Work',
    secondary: 'Get in Touch',
  },
};

/**
 * About / CV content
 * 경력, 학력, 수상, 기술과 소개 문구는 이곳에서만 수정합니다.
 */
export const ABOUT_CONTENT = {
  name: 'Jinyeong Choi',
  location: 'Seoul, South Korea',
  email: 'choiwlsd@gmail.com',
  role: ['Software Engineer'],
  homeHeadline: ['사용자 경험을 고민하고,', '함께 답을 만드는 개발자.'],
  homeSummary: '복잡한 문제를 명확한 인터페이스와 견고한 코드로 풀어냅니다. 협업 과정에서 의견을 연결하고, 실제로 사용하기 좋은 결과를 만드는 일을 중요하게 생각합니다.',
  profile: '사용자 경험을 최우선으로 생각하며, 복잡한 문제를 명확한 인터페이스와 견고한 코드로 해결합니다. 협업을 통해 더 나은 방향을 찾고 실제 가치를 만드는 개발자입니다.',
  focus: ['Frontend Development', 'AI Service', 'UI / UX'],
  experience: EXPERIENCE,
  activities: ACTIVITIES,
  education: [
    {
      period: '2021 — 2026',
      degree: 'B.S. in Computer Science',
      school: 'Kyung Hee University · Seoul',
    },
    {
      period: '2018 — 2022',
      degree: 'American School of Milan Middle School Diploma & High School',
      school: 'American School of Milan · Italy',
    },
  ],
  awards: [
    { year: '2025', title: 'KHUTHON', result: '최우수상' },
    { year: '2025', title: 'Semothon', result: '대상' },
    { year: '2024', title: 'KHUTHON', result: '우수상 · 인기상' },
    { year: '2024', title: 'Track Study Project', result: '2등' },
  ],
  skills: [
    { group: 'Development', items: ['React', 'TypeScript', 'JavaScript', 'Python', 'Node.js'] },
    { group: 'AI / Data', items: ['PyTorch', 'MediaPipe', 'OpenCV', 'Data Analysis'] },
    { group: 'Design', items: ['UI / UX', 'Figma', 'Prototyping'] },
  ],
};
