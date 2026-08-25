import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  Github,
  Play,
  Presentation,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import { AWARDS, PROJECTS } from "@shared/portfolio";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type ViewerMode = "presentation" | "presentationPdf" | "reportPdf" | "demo" | null;

export default function ProjectDetail() {
  const [match, params] = useRoute("/projects/:id");
  const [viewerMode, setViewerMode] = useState<ViewerMode>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeDemo, setActiveDemo] = useState(0);
  const projectIndex = PROJECTS.findIndex((item) => item.id === params?.id);
  const project = PROJECTS[projectIndex];
  const presentationPdf = project ? `/projects/${project.id}/presentation.pdf` : "";
  const reportPdf = project ? `/projects/${project.id}/report.pdf` : "";
  const [hasPresentationPdf, setHasPresentationPdf] = useState(false);
  const [hasReportPdf, setHasReportPdf] = useState(false);

  useEffect(() => {
    if (!project) return;

    const checkPdf = async (url: string) => {
      try {
        const response = await fetch(url, { method: "HEAD" });
        return response.ok && response.headers.get("content-type")?.includes("application/pdf");
      } catch {
        return false;
      }
    };

    void Promise.all([checkPdf(presentationPdf), checkPdf(reportPdf)]).then(([presentation, report]) => {
      setHasPresentationPdf(Boolean(presentation));
      setHasReportPdf(Boolean(report));
    });
  }, [project, presentationPdf, reportPdf]);

  if (!match) return null;

  if (!project) {
    return (
      <div className="min-h-screen bg-black p-2 text-white">
        <Navbar />
        <main className="grid min-h-[70vh] place-items-center pt-24 text-center">
          <div>
            <h1 className="text-5xl font-black">Project not found.</h1>
            <a href="/projects" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0868ff]">
              <ArrowLeft size={16} />
              Back to Projects
            </a>
          </div>
        </main>
      </div>
    );
  }

  const previousProject = PROJECTS[(projectIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];
  const projectAwards = AWARDS.filter((award) => award.projectId === project.id);
  const presentationSlides = (project.presentationSlides ?? []).filter(Boolean);
  const demoMedia = project.demoMedia ?? [];
  const hasPresentation = hasPresentationPdf || presentationSlides.length > 0;
  const hasDemo = demoMedia.length > 0;
  const currentSlide = presentationSlides.length ? activeSlide % presentationSlides.length : 0;
  const currentDemo = demoMedia.length ? activeDemo % demoMedia.length : 0;
  const results = project.results?.length
    ? project.results
    : ["Improved workflow accuracy", "Shipped a reliable interface", "Created a reusable technical foundation"];
  const activePdfUrl = viewerMode === "presentationPdf" ? presentationPdf : viewerMode === "reportPdf" ? reportPdf : "";

  const openPresentation = () => {
    setActiveSlide(0);
    setViewerMode("presentation");
  };

  const openDemo = () => {
    setActiveDemo(0);
    setViewerMode("demo");
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#fafaf8] text-black">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.055)_1px,transparent_1px)] bg-size-[72px_72px]" />
      <Navbar />

      <main className="relative z-10 mx-auto max-w-330 px-5 pb-28 pt-32 sm:px-8 md:pb-40 md:pt-40">
        <a href="/projects" className="inline-flex items-center gap-2 text-xs font-bold text-neutral-500 transition hover:text-[#2f6dff]">
          <ArrowLeft size={14} />
          Back to Projects
        </a>

        <section className="mt-12 grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start xl:gap-16">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#2f6dff]">{(Array.isArray(project.category) ? project.category : [project.category ?? "Others"]).join(" · ")} · {project.year}</p>

            <h1 className="mt-7 text-[clamp(2.6rem,4.2vw,4.5rem)] font-black leading-[1.02] tracking-[-0.045em]">{project.title}<span className="text-[#2f6dff]">.</span></h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-600">
              {project.shortDescription || project.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
              {project.tags?.map((tag) => (
                <span key={tag} className="text-[11px] font-semibold uppercase tracking-[0.13em] text-neutral-500">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-black px-5 py-3 text-xs font-bold uppercase text-white transition hover:bg-[#2f6dff]"
                >
                  Live Demo
                  <ExternalLink size={14} />
                </a>
              )}

              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-black px-5 py-3 text-xs font-bold uppercase transition hover:border-[#2f6dff] hover:text-[#2f6dff]"
                >
                  GitHub
                  <Github size={14} />
                </a>
              )}

              {hasPresentation && (
                <button
                  type="button"
                  onClick={() => hasPresentationPdf ? setViewerMode("presentationPdf") : openPresentation()}
                  className="inline-flex items-center gap-2 border border-black px-5 py-3 text-xs font-bold uppercase transition hover:border-[#2f6dff] hover:text-[#2f6dff]"
                >
                  Presentation
                  <Presentation size={14} />
                </button>
              )}

              {hasReportPdf && (
                <button
                  type="button"
                  onClick={() => setViewerMode("reportPdf")}
                  className="inline-flex items-center gap-2 border border-black px-5 py-3 text-xs font-bold uppercase transition hover:border-[#2f6dff] hover:text-[#2f6dff]"
                >
                  Report
                  <FileText size={14} />
                </button>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden border border-black/15 bg-white">
              <button
                type="button"
                disabled={!hasReportPdf && !hasDemo}
                onClick={() => hasReportPdf ? setViewerMode("reportPdf") : openDemo()}
                className={`relative block aspect-16/10 w-full overflow-hidden bg-neutral-100 text-left ${hasReportPdf || hasDemo ? "group" : "cursor-default"}`}
              >
                <img src={project.image} alt={project.title} className={`h-full w-full object-cover ${hasReportPdf || hasDemo ? "transition duration-500 group-hover:scale-[1.03]" : ""}`} />
                {hasReportPdf || hasDemo ? (
                  <span className="absolute bottom-5 right-5 grid h-14 w-14 place-items-center rounded-full bg-white text-black shadow-lg transition group-hover:bg-[#2f6dff] group-hover:text-white">
                    {hasReportPdf ? <FileText size={20} /> : <Play size={20} fill="currentColor" />}
                  </span>
                ) : null}
              </button>
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-8 border-y border-black/20 py-10 sm:grid-cols-3">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400">Year</p><p className="mt-3 text-sm font-semibold">{project.year}</p></div>
          <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400">Duration</p><p className="mt-3 text-sm font-semibold">{project.duration ?? "—"}</p></div>
          <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400">Team</p><p className="mt-3 text-sm font-semibold">{project.team?.join(" · ") ?? "—"}</p></div>
        </section>

        <section className={projectAwards.length > 0 ? "pb-24" : "py-24"}>
          {projectAwards.length > 0 && (
            <div className="mb-20 grid items-center gap-5 border-b border-black/20 py-10 lg:grid-cols-[0.42fr_1.58fr] lg:gap-20">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">
                AWARDS
              </p>

              <div className="space-y-3">
                {projectAwards.map((award) => (
                  <div key={award.title} className="flex items-center">
                    <div className="flex w-full items-center gap-3">
                      <span
                        className="shrink-0 text-xl sm:text-2xl"
                        aria-hidden="true"
                      >
                        🏆
                      </span>

                      <div className="flex min-w-0 flex-1 items-baseline gap-2">
                        <p className="truncate text-base font-semibold leading-6 sm:text-lg">
                          {award.title}
                        </p>

                        <p className="shrink-0 text-lg font-bold text-[#2f6dff] sm:text-xl">
                          {award.result}
                        </p>
                      </div>

                      <span className="shrink-0 text-xs font-medium text-neutral-400 sm:text-sm">
                        {award.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="grid gap-8 lg:grid-cols-[0.42fr_1.58fr] lg:gap-20">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">Overview</p>
            <p className="max-w-4xl text-2xl font-semibold leading-normal tracking-tight">{project.description}</p>
          </div>
          <div className="mt-24 divide-y divide-black/15 border-y border-black/20">
            {[
              ["01", "Challenge", project.challenge],
              ["02", "Approach", project.approach],
              ["03", "Solution", project.solution],
            ].map(([number, title, body]) => (
              <article key={title} className="grid gap-5 py-12 md:grid-cols-[80px_220px_1fr]">
                <span className="font-mono text-xs text-[#2f6dff]">{number}</span>
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="max-w-2xl text-sm leading-7 text-neutral-600">{body ?? "Details will be added soon."}</p>
              </article>
            ))}
          </div>
          <div className="mt-20 grid gap-8 lg:grid-cols-[0.42fr_1.58fr] lg:gap-20">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">Outcome</p>
            <ol className="grid gap-8 md:grid-cols-3">
              {results.map((result, index) => (
                <li key={result} className="border-t border-black pt-5"><span className="font-mono text-xs text-[#2f6dff]">0{index + 1}</span><p className="mt-5 text-sm font-semibold leading-7">{result}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-black pt-20">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#2f6dff]">Media</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">Explore the project.</h2>
            </div>
            <p className="text-xs font-semibold text-neutral-500">Click a card to open the viewer</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <button
              type="button"
              disabled={!hasPresentation}
              onClick={() => hasPresentationPdf ? setViewerMode("presentationPdf") : openPresentation()}
              className={`border-t pt-4 text-left ${hasPresentation ? "group border-black" : "cursor-default border-black/20"}`}
            >
              <div className="relative aspect-video overflow-hidden bg-neutral-100">
                {hasPresentation ? (
                  <div className="flex h-full flex-col justify-between bg-white p-6 transition group-hover:bg-[#f4f7ff]">
                    <div className="flex items-start justify-between"><Presentation size={28} strokeWidth={1.5} className="text-[#2f6dff]" /><span className="font-mono text-[10px] font-bold tracking-[0.16em] text-neutral-400">{hasPresentationPdf ? "PDF" : "SLIDES"}</span></div>
                    <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2f6dff]">Presentation</p><p className="mt-2 line-clamp-2 text-lg font-bold leading-tight">{project.title}</p></div>
                  </div>
                ) : (
                  <><img src={project.image} alt="" className="h-full w-full object-cover opacity-20 grayscale" /><span className="absolute inset-0 grid place-items-center text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">준비 중</span></>
                )}
              </div>
              <div className="py-5">
                <h3 className="text-xl font-black">Presentation</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {hasPresentationPdf ? "Open the complete presentation PDF." : presentationSlides.length ? "View exported PPT pages as a slide deck." : "등록된 발표 자료가 없습니다."}
                </p>
              </div>
            </button>

            <button
              type="button"
              disabled={!hasReportPdf}
              onClick={() => setViewerMode("reportPdf")}
              className={`border-t pt-4 text-left ${hasReportPdf ? "group border-black" : "cursor-default border-black/20"}`}
            >
              <div className="relative aspect-video overflow-hidden bg-neutral-100">
                {hasReportPdf ? (
                  <div className="flex h-full flex-col justify-between bg-[#111] p-6 text-white transition group-hover:bg-[#2f6dff]">
                    <div className="flex items-start justify-between"><FileText size={28} strokeWidth={1.5} /><span className="font-mono text-[10px] font-bold tracking-[0.16em] text-white/60">PDF</span></div>
                    <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">Project Report</p><p className="mt-2 line-clamp-2 text-lg font-bold leading-tight">{project.title}</p></div>
                  </div>
                ) : (
                  <><img src={project.image} alt="" className="h-full w-full object-cover opacity-20 grayscale" /><span className="absolute inset-0 grid place-items-center text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">준비 중</span></>
                )}
              </div>
              <div className="py-5">
                <h3 className="text-xl font-black">Report</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {hasReportPdf ? "Read the full project report as a PDF." : "등록된 보고서가 없습니다."}
                </p>
              </div>
            </button>

            <button
              type="button"
              disabled={!hasDemo}
              onClick={openDemo}
              className={`border-t pt-4 text-left ${hasDemo ? "group border-black" : "cursor-default border-black/20"}`}
            >
              <div className="relative aspect-video overflow-hidden bg-neutral-100">
                {hasDemo ? (
                  <div className="flex h-full flex-col justify-between bg-[#2f6dff] p-6 text-white transition group-hover:bg-[#1f55d9]">
                    <div className="flex items-start justify-between"><Play size={28} strokeWidth={1.5} /><span className="font-mono text-[10px] font-bold tracking-[0.16em] text-white/60">MEDIA</span></div>
                    <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">Demo Preview</p><p className="mt-2 line-clamp-2 text-lg font-bold leading-tight">{project.title}</p></div>
                  </div>
                ) : (
                  <><img src={project.image} alt="" className="h-full w-full object-cover opacity-20 grayscale" /><span className="absolute inset-0 grid place-items-center text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">준비 중</span></>
                )}
              </div>
              <div className="py-5">
                <h3 className="text-xl font-black">Demo</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {hasDemo ? "Watch demo video or browse demo screenshots." : "등록된 데모 자료가 없습니다."}
                </p>
              </div>
            </button>
          </div>
        </section>

        <section className="mt-28 grid gap-px border-y border-black bg-black md:grid-cols-2">
          <a href={`/projects/${previousProject.id}`} className="group bg-[#fafaf8] p-7 transition hover:bg-white">
            <p className="text-[11px] font-bold text-neutral-500">Previous Project</p>
            <div className="mt-3 flex items-center justify-between">
              <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
              <div className="text-right">
                <h3 className="text-sm font-bold">{previousProject.title}</h3>
                <p className="text-[11px] text-neutral-600">{previousProject.shortDescription}</p>
              </div>
            </div>
          </a>

          <a href={`/projects/${nextProject.id}`} className="group bg-[#fafaf8] p-7 transition hover:bg-white">
            <p className="text-[11px] font-bold text-neutral-500">Next Project</p>
            <div className="mt-3 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold">{nextProject.title}</h3>
                <p className="text-[11px] text-neutral-600">{nextProject.shortDescription}</p>
              </div>
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </a>
        </section>
      </main>

      {viewerMode && (
        <div
          className="fixed inset-0 z-100 bg-black/80 px-4 py-6 backdrop-blur-sm"
          onClick={() => setViewerMode(null)}
        >
          <div className="mx-auto flex h-full max-w-7xl flex-col justify-center">
            <div className="overflow-hidden border border-white/20 bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
              <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#2f6dff]">
                    {viewerMode === "presentationPdf" ? "Presentation PDF" : viewerMode === "reportPdf" ? "Project Report" : viewerMode}
                  </p>
                  <h2 className="mt-1 text-lg font-black">{project.title}</h2>
                </div>
                <div className="flex items-center gap-2">
                  {activePdfUrl && (
                    <>
                      <a href={activePdfUrl} target="_blank" rel="noreferrer" className="hidden items-center gap-2 border border-neutral-300 px-3 py-2 text-xs font-bold transition hover:border-[#2f6dff] hover:text-[#2f6dff] sm:inline-flex">Open <ExternalLink size={13} /></a>
                      <a href={activePdfUrl} download className="hidden items-center gap-2 border border-neutral-300 px-3 py-2 text-xs font-bold transition hover:border-[#2f6dff] hover:text-[#2f6dff] sm:inline-flex">Download <Download size={13} /></a>
                    </>
                  )}
                  <button onClick={() => setViewerMode(null)} className="border border-black bg-black px-4 py-2 text-xs font-bold uppercase text-white transition hover:bg-[#2f6dff]">Close</button>
                </div>
              </div>

              {viewerMode === "presentationPdf" || viewerMode === "reportPdf" ? (
                <div className="bg-[#ececea] p-2 sm:p-4">
                  <iframe
                    src={`${activePdfUrl}#toolbar=0&navpanes=0&view=FitH`}
                    title={`${project.title} ${viewerMode === "presentationPdf" ? "presentation" : "report"}`}
                    className="h-[72vh] w-full bg-white shadow-sm"
                  />
                </div>
              ) : viewerMode === "presentation" ? (
                <>
                  <div className="relative bg-neutral-100">
                    <img
                      src={presentationSlides[currentSlide]}
                      alt={`${project.title} presentation slide ${currentSlide + 1}`}
                      className="max-h-[68vh] w-full object-contain"
                    />
                    <button
                      onClick={() => setActiveSlide((slide) => (slide === 0 ? presentationSlides.length - 1 : slide - 1))}
                      className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 shadow-lg transition hover:bg-white"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      onClick={() => setActiveSlide((slide) => (slide === presentationSlides.length - 1 ? 0 : slide + 1))}
                      className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 shadow-lg transition hover:bg-white"
                      aria-label="Next slide"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </div>
                  <div className="flex gap-3 overflow-x-auto border-t border-neutral-200 p-4">
                    {presentationSlides.map((slide, index) => (
                      <button
                        key={`${slide}-${index}`}
                        onClick={() => setActiveSlide(index)}
                        className={`w-28 shrink-0 overflow-hidden rounded-lg border bg-white p-1 text-left transition ${
                          currentSlide === index ? "border-[#0868ff] ring-2 ring-[#0868ff]/20" : "border-neutral-200 hover:border-neutral-400"
                        }`}
                      >
                        <img src={slide} alt={`Slide thumbnail ${index + 1}`} className="aspect-video w-full rounded object-cover" />
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="grid gap-4 p-4 lg:grid-cols-[1fr_220px]">
                  <div className="overflow-hidden rounded-xl border border-neutral-200 bg-black">
                    <div className="aspect-video">
                      {demoMedia[currentDemo]?.type === "video" ? (
                        <video
                          src={demoMedia[currentDemo].src}
                          poster={demoMedia[currentDemo].poster}
                          controls
                          className="h-full w-full bg-black object-contain"
                        />
                      ) : (
                        <img
                          src={demoMedia[currentDemo]?.src}
                          alt={demoMedia[currentDemo]?.title || `${project.title} demo media`}
                          className="h-full w-full bg-white object-contain"
                        />
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {demoMedia.map((media, index) => (
                      <button
                        key={`${media.src}-${index}`}
                        onClick={() => setActiveDemo(index)}
                        className={`flex w-full items-center gap-3 rounded-lg border p-2 text-left transition ${
                          currentDemo === index ? "border-[#0868ff] bg-[#f3f7ff]" : "border-neutral-200 hover:border-neutral-400"
                        }`}
                      >
                        <div className="grid h-14 w-20 shrink-0 place-items-center overflow-hidden rounded bg-neutral-100">
                          {media.type === "video" ? (
                            <Play size={20} fill="currentColor" />
                          ) : (
                            <img src={media.src} alt="" className="h-full w-full object-cover" />
                          )}
                        </div>
                        <div>
                          <p className="text-xs font-black uppercase text-neutral-500">{media.type}</p>
                          <p className="text-sm font-bold">{media.title || `Demo ${index + 1}`}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between border-t border-neutral-200 px-5 py-4 text-xs font-bold text-neutral-500">
                <span>
                  {viewerMode === "presentationPdf"
                    ? "Presentation PDF"
                    : viewerMode === "reportPdf"
                      ? "Report PDF"
                    : viewerMode === "presentation"
                    ? `${currentSlide + 1} / ${presentationSlides.length}`
                    : `${currentDemo + 1} / ${demoMedia.length}`}
                </span>
                <span>Click outside to close</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10"><Footer /></div>
    </div>
  );
}
