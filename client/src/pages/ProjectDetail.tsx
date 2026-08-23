import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  Github,
  Play,
  Presentation,
} from "lucide-react";
import { useState } from "react";
import { useRoute } from "wouter";
import { PROJECTS } from "@shared/portfolio";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type ViewerMode = "presentation" | "demo" | "techStack" | null;

export default function ProjectDetail() {
  const [match, params] = useRoute("/projects/:id");
  const [viewerMode, setViewerMode] = useState<ViewerMode>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeDemo, setActiveDemo] = useState(0);

  if (!match) return null;

  const projectIndex = PROJECTS.findIndex((item) => item.id === params?.id);
  const project = PROJECTS[projectIndex];

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
  const gallery = Array.from(new Set([project.image, ...(project.gallery ?? [])].filter(Boolean)));
  const techStackImage = project.techStackImage ?? gallery[2] ?? gallery[0];
  const presentationSlides = (
    project.presentationSlides?.length ? project.presentationSlides : gallery
  ).filter(Boolean);
  const demoMedia = project.demoMedia?.length
    ? project.demoMedia
    : gallery.slice(0, 3).map((image, index) => ({
        type: "image" as const,
        src: image,
        title: ["Main Demo", "Detail Demo", "Result Demo"][index] ?? `Demo ${index + 1}`,
      }));
  const currentSlide = activeSlide % presentationSlides.length;
  const currentDemo = activeDemo % demoMedia.length;
  const results = project.results?.length
    ? project.results
    : ["Improved workflow accuracy", "Shipped a reliable interface", "Created a reusable technical foundation"];

  const openPresentation = () => {
    setActiveSlide(0);
    setViewerMode("presentation");
  };

  const openDemo = () => {
    setActiveDemo(0);
    setViewerMode("demo");
  };

  const openTechStack = () => {
    setViewerMode("techStack");
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
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#2f6dff]">{project.category} · {project.year}</p>

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

              {project.presentationLink && (
                <a
                  href={project.presentationLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-black px-5 py-3 text-xs font-bold uppercase transition hover:border-[#2f6dff] hover:text-[#2f6dff]"
                >
                  Presentation
                  <Presentation size={14} />
                </a>
              )}

              {project.reportLink && (
                <a
                  href={project.reportLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-black px-5 py-3 text-xs font-bold uppercase transition hover:border-[#2f6dff] hover:text-[#2f6dff]"
                >
                  Report
                  <FileText size={14} />
                </a>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden border border-black/15 bg-white">
              <button
                onClick={() => project.reportLink ? window.open(project.reportLink, "_blank", "noopener,noreferrer") : openDemo()}
                className="group relative block aspect-16/10 w-full overflow-hidden bg-neutral-100 text-left"
              >
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                <span className="absolute bottom-5 right-5 grid h-14 w-14 place-items-center rounded-full bg-white text-black shadow-lg transition group-hover:bg-[#2f6dff] group-hover:text-white">
                  {project.reportLink ? <FileText size={20} /> : <Play size={20} fill="currentColor" />}
                </span>
              </button>
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-8 border-y border-black/20 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400">Year</p><p className="mt-3 text-sm font-semibold">{project.year}</p></div>
          <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400">Duration</p><p className="mt-3 text-sm font-semibold">{project.duration ?? "—"}</p></div>
          <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400">Team</p><p className="mt-3 text-sm font-semibold">{project.team?.join(" · ") ?? "—"}</p></div>
          <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400">Stack</p><p className="mt-3 text-sm font-semibold leading-6">{(project.technologies ?? project.tags).join(" · ")}</p></div>
        </section>

        <section className="py-24">
          <div className="grid gap-8 lg:grid-cols-[0.42fr_1.58fr] lg:gap-20">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">Overview</p>
            <p className="max-w-4xl text-2xl font-semibold leading-normal tracking-tight md:text-3xl">{project.description}</p>
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
              onClick={() => project.presentationLink ? window.open(project.presentationLink, "_blank", "noopener,noreferrer") : openPresentation()}
              className="group border-t border-black pt-4 text-left"
            >
              <div className="relative aspect-video overflow-hidden bg-neutral-100">
                <img
                  src={presentationSlides[currentSlide]}
                  alt={`${project.title} presentation`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 rounded bg-white/90 px-3 py-1 text-xs font-black text-[#0868ff]">
                  {project.presentationLink ? "PDF" : `${presentationSlides.length} slides`}
                </span>
              </div>
              <div className="py-5">
                <h3 className="text-xl font-black">Presentation</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {project.presentationLink ? "Open the complete presentation as a PDF." : "View exported PPT pages as a slide deck."}
                </p>
              </div>
            </button>

            <button
              onClick={openTechStack}
              className="group border-t border-black pt-4 text-left"
            >
              <div className="relative aspect-video overflow-hidden bg-neutral-100">
                <img
                  src={techStackImage}
                  alt={`${project.title} tech stack`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 rounded bg-white/90 px-3 py-1 text-xs font-black text-[#0868ff]">
                  Stack
                </span>
              </div>
              <div className="py-5">
                <h3 className="text-xl font-black">기술 스택</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  View architecture, tools, and implementation stack as an image.
                </p>
              </div>
            </button>

            <button
              onClick={() => project.reportLink ? window.open(project.reportLink, "_blank", "noopener,noreferrer") : openDemo()}
              className="group border-t border-black pt-4 text-left"
            >
              <div className="relative aspect-video overflow-hidden bg-neutral-100">
                {project.reportLink ? (
                  <img
                    src={project.image}
                    alt={`${project.title} report`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                ) : demoMedia[0]?.type === "video" ? (
                  <div className="grid h-full w-full place-items-center bg-black text-white">
                    <Play size={42} fill="currentColor" />
                  </div>
                ) : (
                  <img
                    src={demoMedia[0]?.src}
                    alt={`${project.title} demo`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                )}
                <span className="absolute left-4 top-4 rounded bg-white/90 px-3 py-1 text-xs font-black text-[#0868ff]">
                  {project.reportLink ? "PDF" : `${demoMedia.length} media`}
                </span>
              </div>
              <div className="py-5">
                <h3 className="text-xl font-black">{project.reportLink ? "Report" : "Demo"}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {project.reportLink ? "Read the full project report as a PDF." : "Watch demo video or browse demo screenshots."}
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
            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
              <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
                <div>
                  <p className="text-xs font-black uppercase text-[#0868ff]">
                    {viewerMode}
                  </p>
                  <h2 className="mt-1 text-lg font-black">{project.title}</h2>
                </div>
                <button
                  onClick={() => setViewerMode(null)}
                  className="rounded-full border border-neutral-300 px-4 py-2 text-xs font-black uppercase transition hover:bg-black hover:text-white"
                >
                  Close
                </button>
              </div>

              {viewerMode === "presentation" ? (
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
              ) : viewerMode === "techStack" ? (
                <div className="bg-neutral-100">
                  <img
                    src={techStackImage}
                    alt={`${project.title} technology stack`}
                    className="max-h-[70vh] w-full object-contain"
                  />
                </div>
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
                  {viewerMode === "presentation"
                    ? `${currentSlide + 1} / ${presentationSlides.length}`
                    : viewerMode === "demo"
                      ? `${currentDemo + 1} / ${demoMedia.length}`
                      : "기술 스택"}
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
