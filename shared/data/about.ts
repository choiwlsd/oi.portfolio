/**
 * Home의 About 요약과 /about CV 페이지에서 사용하는 데이터입니다.
 * 경력, 활동, 학력, 수상, 관심사, 기술 그룹을 수정할 때 이 파일을 변경하세요.
 */
import { PROFILE } from './site';

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

export const ACTIVITIES = [
  { period: '2025. 01. — 2025. 12.', title: '미디어홍보팀장', organization: '경희대학교 소프트웨어융합대학 학생회 새벽', category: 'Leadership' },
  { period: '2025. 01. — 2025. 12.', title: '디닷컴 회장', organization: '경희대학교 소프트웨어융합대학 학술동아리', category: 'Leadership' },
  { period: '2025. 01.', title: 'Silicon Valley Innovation & Startup Program 수료', organization: 'San Jose State University', category: 'Program' },
  { period: '2024. 08. — 2025. 07.', title: '제2기숙사 생활멘토', organization: '경희대학교', category: 'Leadership' },
  { period: '2024. 07. — 2024. 12.', title: '디닷컴 총무', organization: '경희대학교 소프트웨어융합대학 학술동아리', category: 'Leadership' },
  { period: '2024. 04. — 2024. 05.', title: '베리어프리 앱 개발 콘테스트 참여', organization: 'Barrier-Free App Development Contest', category: 'Program' },
  { period: '2024. 01. — 2024. 06.', title: 'KHUDA', organization: '경희대학교 데이터분석 AI 동아리', category: 'Community', link: 'https://github.com/khuda-data' },
  { period: '2024. 05.', title: '제2회 Generative AI Ideation 참여', organization: '뤼튼(Wrtn) 캠퍼스리더 주관', category: 'Program' },
  { period: '2024. 03. — 2024. 08.', title: 'University MakeUs Challenge 6기 · WEB 파트', organization: '대학생 IT 연합 동아리 UMC', category: 'Community', link: 'https://umc.makeus.in/' },
] as const;

export const EDUCATION = [
  { period: '2021 — 2026', degree: 'B.S. in Computer Science', school: 'Kyung Hee University · Seoul' },
  { period: '2018 — 2022', degree: 'American School of Milan Middle School Diploma & High School', school: 'American School of Milan · Italy' },
];

export const AWARDS = [
  { year: '2025', title: 'KHUTHON', result: '최우수상' },
  { year: '2025', title: 'Semothon', result: '대상' },
  { year: '2024', title: 'KHUTHON', result: '우수상 · 인기상' },
  { year: '2024', title: 'Track Study Project', result: '2등' },
];

export const ABOUT_CONTENT = {
  name: PROFILE.name,
  location: PROFILE.location,
  email: PROFILE.email,
  role: [PROFILE.role],
  homeHeadline: ['사용자 경험을 고민하고,', '함께 답을 만드는 개발자.'],
  homeSummary: '복잡한 문제를 명확한 인터페이스와 코드로 풀어냅니다. 협업 과정에서 의견을 연결하고, 실제로 사용하기 좋은 결과를 만드는 일을 중요하게 생각합니다.',
  profile: '사용자 경험을 최우선으로 생각하며, 복잡한 문제를 명확한 인터페이스와 견고한 코드로 해결합니다. 협업을 통해 더 나은 방향을 찾고 실제 가치를 만드는 개발자입니다.',
  focus: ['Frontend Development', 'AI Service', 'UI / UX'],
  interests: ['AI Agent', 'Web Development', 'Data Analysis'],
  experience: EXPERIENCE,
  activities: ACTIVITIES,
  education: EDUCATION,
  awards: AWARDS,
  skills: [
    { group: 'Development', items: ['React', 'TypeScript', 'JavaScript', 'Python', 'Node.js'] },
    { group: 'AI / Data', items: ['PyTorch', 'MediaPipe', 'OpenCV', 'Data Analysis'] },
    { group: 'Design', items: ['UI / UX', 'Figma', 'Prototyping'] },
  ],
};
