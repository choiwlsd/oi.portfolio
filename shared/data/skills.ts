/**
 * 기술 숙련도와 사용 도구 목록 데이터입니다.
 * 향후 기술 차트나 별도 Skills 섹션에서 사용하며, 기술 추가·삭제는 이 파일에서 관리하세요.
 */
import type { Skill, Tool } from '../types';

export const SKILLS: Skill[] = [
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'Python', level: 85, category: 'frontend' },
  { name: 'UI / UX', level: 80, category: 'frontend' },
];

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
