import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowUpRight, ChevronLeft, ChevronRight, Github, Images, Trophy, X } from 'lucide-react';
import { useState } from 'react';
import { useLocation } from 'wouter';
import { AWARDS } from '@shared/portfolio';

export default function AwardsPage() {
  const [, setLocation] = useLocation();
  const [galleryAwardIndex, setGalleryAwardIndex] = useState<number | null>(null);
  const [galleryImageIndex, setGalleryImageIndex] = useState(0);
  const galleryAward = galleryAwardIndex === null ? null : AWARDS[galleryAwardIndex];

  const openGallery = (awardIndex: number) => {
    setGalleryAwardIndex(awardIndex);
    setGalleryImageIndex(0);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#fafaf8] text-black">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.055)_1px,transparent_1px)] bg-size-[72px_72px]" />
      <Navbar />

      <main className="relative z-10 mx-auto max-w-375 px-5 pb-28 pt-32 sm:px-8 md:pb-40 md:pt-44">
        <header className="grid gap-12 border-b border-black pb-16 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#2f6dff]">Awards & Recognition</p>
            <h1 className="mt-8 text-[clamp(4rem,10vw,9rem)] font-black leading-[0.82] tracking-[-0.07em]">
              Selected<br />Awards<span className="text-[#2f6dff]">.</span>
            </h1>
          </div>
          <div className="max-w-md lg:justify-self-end">
            <Trophy className="text-[#2f6dff]" size={30} strokeWidth={1.5} />
            <p className="mt-7 text-xl font-bold leading-8">아이디어를 실제 서비스로 구현하고, 결과로 증명한 기록입니다.</p>
            <p className="mt-5 text-sm leading-7 text-neutral-600">해커톤과 프로젝트에서 받은 주요 수상 경력을 관련 작업과 함께 정리했습니다.</p>
          </div>
        </header>

        <section className="py-20 md:py-28">
          <div className="mb-10 flex items-end justify-between border-b border-black/20 pb-5">
            <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">Recognition</h2>
            <p className="font-mono text-xs text-neutral-400">{String(AWARDS.length).padStart(2, '0')} awards</p>
          </div>

          <div className="hidden grid-cols-[80px_120px_minmax(0,1fr)_180px_auto] gap-8 border-b border-black px-6 pb-4 text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-400 md:grid">
            <span>No.</span>
            <span>Date / Award</span>
            <span>Competition / Project</span>
            <span>Organizer</span>
            <span>Links</span>
          </div>

          <div className="divide-y divide-black/20 border-b border-black/20">
            {AWARDS.map((award, index) => (
              <article
                key={`${award.title}-${award.year}`}
                role={award.projectId ? 'link' : undefined}
                tabIndex={award.projectId ? 0 : undefined}
                onClick={() => award.projectId && setLocation(`/projects/${award.projectId}`)}
                onKeyDown={(event) => {
                  if (award.projectId && (event.key === 'Enter' || event.key === ' ')) {
                    event.preventDefault();
                    setLocation(`/projects/${award.projectId}`);
                  }
                }}
                className={`grid gap-5 px-4 py-10 transition duration-300 md:grid-cols-[80px_120px_minmax(0,1fr)_180px_auto] md:items-start md:gap-8 md:px-6 md:py-12 ${
                  award.projectId
                    ? 'group cursor-pointer hover:-translate-y-1 hover:bg-[#eef4ff] focus-visible:bg-[#eef4ff] focus-visible:outline-none'
                    : 'cursor-default'
                }`}
              >
                <span className="font-mono text-xs text-neutral-400">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <p className="font-mono text-xs font-bold text-[#2f6dff]">{award.date}</p>
                  <p className="mt-3 text-lg font-black">{award.result}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">{award.title}</p>
                  <h3 className={`mt-3 text-2xl font-black tracking-tight transition-colors md:text-3xl ${award.projectId ? 'group-hover:text-[#2f6dff]' : ''}`}>{award.project}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600">{award.description}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-400 md:hidden">Organizer</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-neutral-600 md:mt-0">{award.organizer}</p>
                </div>
                <div className="flex gap-2 md:flex-col">
                  {award.gallery.length > 0 ? (
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        openGallery(index);
                      }}
                      aria-label={`${award.title} 수상 사진 보기`}
                      className="relative z-10 grid h-11 w-11 place-items-center border border-black bg-black text-white transition hover:border-[#2f6dff] hover:bg-[#2f6dff]"
                    >
                      <Images size={17} />
                    </button>
                  ) : (
                    <button type="button" disabled aria-label="등록된 수상 사진 없음" className="relative z-10 grid h-11 w-11 cursor-not-allowed place-items-center border border-black/10 text-neutral-300">
                      <Images size={17} />
                    </button>
                  )}

                  {award.githubUrl ? (
                    <a
                      href={award.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      aria-label={`${award.project} GitHub 보기`}
                      className="relative z-10 grid h-11 w-11 place-items-center border border-black/20 text-black transition hover:border-[#2f6dff] hover:text-[#2f6dff]"
                    >
                      <Github size={17} />
                    </a>
                  ) : (
                    <button type="button" disabled aria-label="연결된 GitHub 저장소 없음" className="relative z-10 grid h-11 w-11 cursor-not-allowed place-items-center border border-black/10 text-neutral-300">
                      <Github size={17} />
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-7 border-t border-black py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2f6dff]">More work</p>
            <h2 className="mt-3 text-2xl font-black">수상작 외의 프로젝트도 확인해 보세요.</h2>
          </div>
          <a href="/projects" className="group inline-flex items-center gap-3 self-start bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-[#2f6dff] sm:self-auto">
            All Projects
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </section>
      </main>

      {galleryAward && galleryAward.gallery.length > 0 && (
        <div
          className="fixed inset-0 z-100 grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setGalleryAwardIndex(null)}
        >
          <div className="w-full max-w-5xl overflow-hidden bg-white" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2f6dff]">Award Gallery</p>
                <h2 className="mt-1 font-bold">{galleryAward.title}</h2>
              </div>
              <button type="button" onClick={() => setGalleryAwardIndex(null)} aria-label="갤러리 닫기" className="grid h-10 w-10 place-items-center bg-black text-white transition hover:bg-[#2f6dff]">
                <X size={18} />
              </button>
            </div>
            <div className="relative flex min-h-80 items-center justify-center bg-neutral-100 md:min-h-150">
              <img src={galleryAward.gallery[galleryImageIndex]} alt={`${galleryAward.title} 수상 사진 ${galleryImageIndex + 1}`} className="max-h-[72vh] w-full object-contain" />
              {galleryAward.gallery.length > 1 && (
                <>
                  <button type="button" onClick={() => setGalleryImageIndex((current) => (current - 1 + galleryAward.gallery.length) % galleryAward.gallery.length)} aria-label="이전 사진" className="absolute left-4 grid h-11 w-11 place-items-center bg-white shadow transition hover:bg-[#2f6dff] hover:text-white"><ChevronLeft size={20} /></button>
                  <button type="button" onClick={() => setGalleryImageIndex((current) => (current + 1) % galleryAward.gallery.length)} aria-label="다음 사진" className="absolute right-4 grid h-11 w-11 place-items-center bg-white shadow transition hover:bg-[#2f6dff] hover:text-white"><ChevronRight size={20} /></button>
                </>
              )}
            </div>
            <div className="flex items-center justify-between px-5 py-4 text-xs font-bold text-neutral-500">
              <span>{galleryAward.result}</span>
              <span>{galleryImageIndex + 1} / {galleryAward.gallery.length}</span>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10"><Footer /></div>
    </div>
  );
}
