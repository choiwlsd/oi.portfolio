/**
 * /awards 페이지와 /about 페이지의 수상 경력에서 사용하는 데이터입니다.
 * 관련 포트폴리오가 있으면 projectId를, 공개 저장소는 githubUrl, 공식 대회 안내는 eventUrl에 입력하세요.
 * 수상 사진은 client/src/assets/awards에 저장하고 import한 뒤 gallery 배열에 추가하세요.
 * 값이 없으면 Awards 페이지의 해당 기능이 자동으로 비활성화됩니다.
 */

import digitalCompetition20261 from '@/assets/awards/digital-competition-2026-1.png';
import digitalCompetition20262 from '@/assets/awards/digital-competition-2026-2.png';
import digitalCompetition20263 from '@/assets/awards/digital-competition-2026-3.png';
import digitalCompetition20264 from '@/assets/awards/digital-competition-2026-4.png';
import khuthon20241 from '@/assets/awards/khuthon-2024-1.png';
import khuthon20242 from '@/assets/awards/khuthon-2024-2.png';
import khuthon20251 from '@/assets/awards/khuthon-2025-1.png';
import khuthon20252 from '@/assets/awards/khuthon-2025-2.png';
import khuthon20253 from '@/assets/awards/khuthon-2025-3.png';
import sanJoseUniversity1 from '@/assets/awards/san-jose-university-1.png';
import sanJoseUniversity2 from '@/assets/awards/san-jose-university-2.jpg';
import semothon1 from '@/assets/awards/semothon-1.jpg';
import semothon3 from '@/assets/awards/semothon-3.png';

export interface Award {
  date: string;
  year: string;
  title: string;
  result: string;
  project: string;
  description: string;
  organizer: string;
  projectId: string | null;
  githubUrl: string | null;
  eventUrl: string | null;
  gallery: string[];
}

export const AWARDS: Award[] = [
  {
    date: '2026. 08.',
    year: '2026',
    title: 'AI·SW중심대학 디지털경진대회 · SW부문',
    result: '우수상 · 인기상',
    project: 'RoomFit - 3D 인테리어 AI Agent',
    description: '실제 방 구조와 생활 맥락을 이해해 배치 가능한 공간 구성을 제안하는 RoomFit으로 우수상과 인기상을 수상했습니다.',
    organizer: '정보통신기획평가원 · AI·SW중심대학협의회',
    projectId: '9',
    githubUrl: 'https://github.com/Roomfit-AI/RoomFit-Web',
    eventUrl: 'https://dacon.io/competitions/open/236693/overview/description',
    gallery: [digitalCompetition20261, digitalCompetition20262, digitalCompetition20263, digitalCompetition20264],
  },
  {
    date: '2025. 05.',
    year: '2025',
    title: '경희대학교 KHUTHON',
    result: '최우수상',
    project: '잔반걸음 - 마이크로 비료 거래 플랫폼',
    description: '잔반을 발효해 만든 미생물 비료의 등급과 가격을 책정하고 지역 농가와 거래하는 순환경제 서비스입니다.',
    organizer: '경희대학교 · KHLUG',
    projectId: '2',
    githubUrl: 'https://github.com/choiwlsd/khuthon2025',
    eventUrl: 'https://thon.khlug.org/',
    gallery: [khuthon20251, khuthon20252, khuthon20253],
  },
  {
    date: '2025. 04.',
    year: '2025',
    title: '경희대학교 연합 해커톤 세모톤',
    result: '대상',
    project: '강의실 대여 플랫폼',
    description: '교내 유휴 강의실을 확인하고 편리하게 예약할 수 있는 강의실 대여 서비스입니다.',
    organizer: '경희대학교 소프트웨어융합대학 · 예술디자인대학 · 공과대학',
    projectId: '3',
    githubUrl: 'https://github.com/choiwlsd/2025_TEAM_6_FE',
    eventUrl: 'https://github.com/semothon',
    gallery: [semothon1, semothon3],
  },
  {
    date: '2025. 01.',
    year: '2025',
    title: 'Silicon Valley Innovation & Entrepreneurship Award',
    result: 'Second Prize',
    project: 'Innovation & Startup Program',
    description: 'Silicon Valley Innovation & Startup Program에서 혁신 아이디어를 발표해 Second Prize를 수상했습니다.',
    organizer: 'San José State University',
    projectId: null,
    githubUrl: null,
    eventUrl: null,
    gallery: [sanJoseUniversity1, sanJoseUniversity2],
  },
  {
    date: '2024. 05.',
    year: '2024',
    title: '경희대학교 KHUTHON',
    result: '우수상 · 인기상',
    project: '소형화 및 개인화 전력 모니터링 시스템',
    description: '콘센트별 소비 전력을 수집하고 실시간 대시보드로 분석하는 개인화 전력 모니터링 시스템입니다.',
    organizer: '경희대학교 · KHLUG',
    projectId: '4',
    githubUrl: 'https://github.com/choiwlsd/khuthon2024',
    eventUrl: 'https://thon.khlug.org/',
    gallery: [khuthon20241, khuthon20242],
  },
  {
    date: '2023. 11.',
    year: '2023',
    title: '경희대학교 컴퓨터공학부 Track Study Project',
    result: '2위',
    project: 'AI Cover Song Video Generator',
    description: '음성과 영상 생성 모델을 연결해 노래 커버 영상을 제작하는 AI 서비스입니다.',
    organizer: '경희대학교 컴퓨터공학부',
    projectId: '5',
    githubUrl: null,
    eventUrl: null,
    gallery: [],
  },
];
