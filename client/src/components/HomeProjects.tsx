import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@shared/portfolio";
import { navigate } from "wouter/use-browser-location";

export default function HomeProjects() {
  const featured = PROJECTS.slice(0, 3);

  return (
    <section id="projects" className="relative border-t border-black/10">
      <div className="mx-auto max-w-[1320px] px-5 py-28 sm:px-8 md:py-40">
        <div className="grid gap-8 border-b border-black pb-9 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="font-mono text-xs text-[#2f6dff]">02</span>
              <p className="text-xs font-bold uppercase tracking-[0.24em]">Selected projects</p>
            </div>
            <h2 className="text-[clamp(3rem,7vw,6.5rem)] font-black leading-[0.95] tracking-[-0.06em]">
              Selected work<span className="text-[#2f6dff]">.</span>
            </h2>
          </div>
          <button onClick={() => navigate("/projects")} className="group mb-1 inline-flex w-fit items-center gap-4 text-sm font-bold">
            Explore all projects
            <span className="grid h-11 w-11 place-items-center rounded-full border border-black transition group-hover:border-[#2f6dff] group-hover:bg-[#2f6dff] group-hover:text-white">
              <ArrowRight size={17} />
            </span>
          </button>
        </div>

        <div className="mt-14 grid gap-x-7 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((project, index) => (
            <article key={project.id} onClick={() => navigate(project.link)} className="group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#efefeb]">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]" />
                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/8" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] backdrop-blur-sm sm:left-6 sm:top-6">
                  {project.category}
                </span>
                <span className="absolute bottom-5 right-5 grid h-12 w-12 translate-y-3 place-items-center rounded-full bg-white opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={19} />
                </span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-6 border-t border-black/15 pt-5">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs text-neutral-400">0{index + 1}</span>
                    <h3 className="text-xl font-bold leading-tight tracking-[-0.025em] md:text-2xl">{project.title}</h3>
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-500 md:text-base">
                    {project.shortDescription ?? project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-400">{tag}</span>
                    ))}
                  </div>
                </div>
                <span className="shrink-0 font-mono text-xs text-neutral-500">{project.year}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
