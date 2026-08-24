/**
 * 프로젝트 목록, 카드, 상세 페이지에서 사용하는 데이터입니다.
 * 프로젝트를 추가하거나 설명·기술·문서 링크를 수정할 때 이 파일만 변경하세요.
 * Home의 Selected Works에 표시할 프로젝트에는 `featured: true`를 지정하세요(★ 표시 역할).
 * 선택된 프로젝트는 이 파일에 작성된 순서대로 최대 3개가 노출됩니다.
 */
import type { Project } from '../types';
import { PROFILE } from './site';
import defaultProjectCover from '../../client/src/assets/projects/project-default.png';
import imageColorizationCover from '../../client/src/assets/projects/image-colorization-cover.png';
import temporaryResidentialFacilities from '../../client/src/assets/projects/temporary-residential-facilities.png';
import khuthon2024Demo from '../../client/src/assets/projects/khuthon2024-demo.gif';
import khuthon2024HW from '../../client/src/assets/projects/khuthon2024-hw.png';
import khuthon2024Structure from '../../client/src/assets/projects/khuthon2024-structure.png';
import poseAgentDuetPlay from '../../client/src/assets/projects/pose-agent/duet-play-page.png';
import poseAgentFocusedLesson from '../../client/src/assets/projects/pose-agent/focused-lesson-repeat.mp4';
import poseAgentHome from '../../client/src/assets/projects/pose-agent/home-page.png';
import poseAgentPlay from '../../client/src/assets/projects/pose-agent/play-page.png';
import poseWebcam from '../../client/src/assets/projects/pose-agent/web-cam.png';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Pose-Agent',
    description: '[캡스톤디자인] 자율협력지원 Agentic AI: 협주 가능 악기 레슨 Agent AI 플랫폼 기술 개발',
    shortDescription: '협주가능 악기 레슨 Agent AI 플랫폼: Pose Agent',
    image: poseWebcam,
    gallery: [poseAgentHome, poseAgentPlay, poseAgentDuetPlay, poseAgentFocusedLesson, poseWebcam],
    tags: ['Python', 'MediaPipe', 'AI', 'Multi-Agent System', 'Real-time Feedback'],
    link: '/projects/1',
    year: '2025',
    featured: true,
    category: 'AI',
    duration: 'Jan 2025 - May 2025',
    team: [PROFILE.name, 'Team Members'],
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
    demoMedia: [
      { type: 'image', src: poseWebcam, title: '웹캠' },
      { type: 'image', src: poseAgentHome, title: '홈화면' },
      { type: 'image', src: poseAgentPlay, title: '개별 레슨' },
      { type: 'image', src: poseAgentDuetPlay, title: '협주 모드' },
      {
        type: 'video',
        src: poseAgentFocusedLesson,
        poster: poseAgentPlay,
        title: '집중 반복 레슨',
      },
    ],
  },

  {
    id: '2',
    title: 'KHUTHON 2025 - ESG 마이크로 비료 거래 플랫폼',
    description: '🏆KHUTHON 최우수상 수상작: 마이크로 비료 거래 플랫폼',
    shortDescription: 'Micro fertilizer trading platform',
    image: 'https://cdn.phototourl.com/free/2026-05-13-edd55c19-479e-498c-966e-645a5d4d33bc.png',
    gallery: [defaultProjectCover],
    tags: ['JavaScript', 'React', 'Node.js'],
    link: '/projects/2',
    year: '2025',
    featured: true,
    category: 'Web',
    duration: 'Mar 2025 - May 2025',
    team: ['Frontend Developer', 'Backend Developer', 'Designer'],
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
    title: '세모톤 2025 - 강의실 대여 플랫폼',
    description: '🏆세모톤 대상 수상작: 강의실 대여 플랫폼',
    shortDescription: 'Classroom rental platform',
    image: 'https://cdn.phototourl.com/free/2026-05-13-1843cd55-a60c-47bd-ba6b-435c426a1246.png',
    gallery: [defaultProjectCover],
    tags: ['JavaScript', 'React', 'TypeScript'],
    link: '/projects/3',
    year: '2025',
    featured: true,
    category: 'Web',
    duration: 'Apr 2025 - Apr 2025',
    team: ['Frontend Developer', 'UI/UX Designer'],
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
    title: '소형화 및 개인화 전력 모니터링 시스템',
    description: 'KHUTHON 2024 우수상·인기상 수상작으로, 가상 측정 하드웨어와 실시간 웹 대시보드를 연결해 전체 전력량뿐 아니라 콘센트별 소비 전력을 분석하는 시스템입니다.',
    shortDescription: '콘센트별 소비 전력을 실시간으로 분석하는 개인화 모니터링 시스템',
    image: khuthon2024HW,
    gallery: [khuthon2024Structure, khuthon2024Demo],
    tags: ['React', 'Flask', 'Socket'],
    link: '/projects/4',
    year: '2024',
    featured: false,
    category: 'Web',
    duration: 'May 2024',
    team: ['Hackathon team'],
    challenge: '기존 소규모 전력 모니터링 서비스는 공간 전체 사용량만 보여주기 때문에 어떤 콘센트와 기기가 전력을 많이 소비하는지 파악하기 어려웠습니다.',
    approach: '콘센트에 연결되는 측정 장치를 가상 하드웨어 클라이언트로 모델링하고, 각 장치가 측정한 데이터를 TCP 소켓을 통해 로컬 서버로 주기적으로 전송하도록 설계했습니다.',
    solution: '다중 스레드 소켓 서버와 Flask API가 여러 장치의 전력 데이터를 처리하고, React·Highcharts 대시보드가 총사용량, 예상 요금, 최대 사용 기기와 장치별 변화를 실시간으로 시각화하도록 구현했습니다.',
    results: [
      'KHUTHON 2024 우수상·인기상 수상',
      '10개의 가상 하드웨어 클라이언트 동시 연결 및 데이터 수집',
      '콘센트별 사용량·평균·최대 사용 시간·에너지 등급 시각화',
    ],
    githubLink: 'https://github.com/choiwlsd/khuthon2024',
    demoMedia: [
      { type: 'video', src: '/projects/4/demo.mp4', title: 'Power monitoring demo' },
      { type: 'image', src: khuthon2024Demo, title: 'Dashboard preview' },
      { type: 'image', src: khuthon2024Structure, title: 'System architecture' },
    ],
  },

  {
    id: '5',
    title: 'Track Study Project - AI Cover Song Video Generator',
    description: '🏆TrackStudy Project 2등 수상작: 음성 및 영상 생성 모델을 활용한 노래 커버 영상 제작 서비스',
    shortDescription: 'AI-powered cover song video generator',
    image: defaultProjectCover,
    gallery: [defaultProjectCover],
    tags: ['Python', 'AI', 'Video Generation'],
    link: '/projects/5',
    year: '2024',
    featured: false,
    category: 'AI',
    duration: 'Apr 2024 - Apr 2024',
    team: ['Solo'],
    challenge: 'Create a service that generates cover song videos using AI.',
    approach: 'Integrated multiple AI models.',
    solution: 'Built end-to-end AI music video pipeline.',
    results: [
      'Won 2nd Prize at Track Study Project',
    ],
  },

  {
    id: '6',
    title: '재난 상황 대비 추가 임시주거시설 추천',
    description: '대구광역시의 인구 밀도와 재난·생활 인프라 데이터를 분석해 지진 겸용 임시주거시설로 활용할 숙박시설의 최적 위치를 추천한 데이터 분석 프로젝트입니다.',
    shortDescription: '재난 상황에 대비한 데이터 기반 임시주거시설 입지 추천',
    image: temporaryResidentialFacilities,
    gallery: [temporaryResidentialFacilities],
    tags: ['HDBSCAN', 'U-MAP', 'p-median'],
    link: '/projects/6',
    year: '2024',
    featured: false,
    category: 'Data',
    duration: 'May 2024 - Jun 2024',
    team: ['KHUDA Data Business Analysis Team'],
    challenge: '기존 임시주거시설 중 숙박시설과 내진 설계 시설의 비율이 낮고, 지역 규모·인구·재난 위험·생활 인프라를 함께 고려한 시설 지정 기준이 부족했습니다.',
    approach: '건축물대장, 병원·편의시설, 지진·산불 데이터를 전처리하고 PCA와 UMAP으로 차원을 축소한 뒤 HDBSCAN으로 불규칙한 밀도의 지역 데이터를 군집화했습니다.',
    solution: '시설별 적합성 점수를 산출해 클러스터별 상위 후보를 추출하고, 인구 밀도 중심과 숙박시설 간 이동 비용을 최소화하는 p-median 모델로 추가 임시주거시설을 선정했습니다.',
    results: [
      'UMAP과 HDBSCAN을 활용해 이상치가 많은 비구형 데이터 군집화',
      '인구 밀도를 반영한 지진 겸용 임시주거시설 후보 선정',
      '대구광역시 숙박시설 기반 추천 결과를 지도와 데이터로 시각화',
    ],
    githubLink: 'https://github.com/choiwlsd/6th-DB-Temporary_Residential_Facilities_Recommendation',
  },
  {
    id: '7',
    title: 'Image Colorization',
    description: 'Pix2Pix, CWGAN, U-Net을 단계적으로 실험하며 흑백 이미지에 자연스러운 색을 복원하는 딥러닝 모델을 개발한 프로젝트입니다.',
    shortDescription: '흑백 이미지를 컬러 이미지로 복원하는 딥러닝 모델 연구',
    image: imageColorizationCover,
    gallery: [imageColorizationCover],
    tags: ['Python', 'GAN', 'U-Net'],
    link: '/projects/7',
    year: '2024',
    featured: false,
    category: 'AI',
    duration: '2024',
    team: ['4-person team'],
    challenge: '흑백 사진의 밝기와 구조는 유지하면서 자연스럽고 일관된 색상 정보를 자동으로 복원하고, 제한된 데이터와 낮은 출력 품질 문제를 개선해야 했습니다.',
    approach: 'Pix2Pix에서 시작해 25,000쌍의 LAB 데이터로 CWGAN을 실험하고, 최종적으로 7,129쌍의 풍경 이미지와 VGG19 perceptual loss를 적용한 U-Net 모델로 발전시켰습니다.',
    solution: '입력 해상도를 320×320으로 높이고, convolution 범위와 batch size를 조정했으며, 학습률 스케줄러와 perceptual loss를 적용해 세부 구조와 색 복원 품질을 개선했습니다.',
    results: [
      'PSNR 최대 18.37dB · 평균 15.63dB',
      'SSIM 최대 0.4604 · 평균 0.2181',
      '학습 데이터에 포함되지 않은 과거 흑백 사진 컬러화 검증',
    ],
  },
  {
    id: '8',
    title: 'KBO 경기 결과 예측',
    description: 'KBO 팀별 타격·투구 기록과 연봉, 홈·원정 경기 환경 데이터를 결합해 경기 승패를 예측하고 여러 머신러닝 분류 모델의 성능을 비교한 프로젝트입니다.',
    shortDescription: 'KBO 기록과 경기 환경 데이터를 활용한 승패 예측 모델',
    image: defaultProjectCover,
    gallery: [defaultProjectCover],
    tags: ['Python', 'Scikit-learn', 'Machine Learning'],
    link: '/projects/8',
    year: '2024',
    featured: false,
    category: 'Data',
    duration: 'Jan 2024 - Jun 2024',
    team: ['KHUDA 6th ML Team 3'],
    challenge: '팀의 기본 기록만으로는 경기 결과에 영향을 주는 연봉 차이, 홈·원정 여부, 관중 수와 이동 거리 같은 환경 요인을 함께 반영하기 어려웠습니다.',
    approach: 'KBO 및 야구 기록 데이터를 수집·정제하고 팀별 타격과 투구 지표에 연봉, 홈·원정 경기 수, 평균 관중 수와 이동 거리 파생 변수를 결합했습니다.',
    solution: '상관관계 분석으로 주요 특성을 탐색한 뒤 Logistic Regression, SVM, Random Forest 분류 모델을 학습하고 하이퍼파라미터와 특성 조합에 따른 예측 성능을 비교했습니다.',
    results: [
      '팀별 타격·투구·연봉·경기 환경 데이터를 하나의 분석 데이터셋으로 구축',
      'Logistic Regression, SVM, Random Forest 기반 승패 예측 실험 수행',
      '승률 및 특성 간 상관관계를 분석해 주요 경기 영향 요인 도출',
    ],
    githubLink: 'https://github.com/choiwlsd/KHUDA-6th-ML-team3-Prediction-of-KBO',
  },
];

