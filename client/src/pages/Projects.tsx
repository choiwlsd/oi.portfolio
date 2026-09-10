import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { useLocation } from "wouter";
import { PROJECTS } from "@shared/portfolio";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = ["All", "Web", "AI", "Data", "기획", "Others"];
type SortOption = "latest" | "featured" | "alphabetical";

const monthIndexes: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

const getProjectDateScore = (project: (typeof PROJECTS)[number]) => {
  const dates = Array.from((project.duration ?? "").matchAll(/([A-Z][a-z]{2})?\s*(\d{4})/g));
  const timestamps = dates.map((match) => {
    const month = match[1] ? monthIndexes[match[1]] ?? 0 : 0;
    return Date.UTC(Number(match[2]), month);
  });

  if (timestamps.length === 0) return [Date.UTC(Number(project.year), 0), 0];
  return [timestamps.at(-1) ?? 0, timestamps[0] ?? 0];
};

export default function ProjectsPage() {
  const [location, setLocation] = useLocation();
  const requestedCategory = new URLSearchParams(location.split("?")[1] ?? "").get("category");
  const initialCategory = requestedCategory && categories.includes(requestedCategory)
    ? requestedCategory
    : "All";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortOption, setSortOption] = useState<SortOption>("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const filteredProjects = useMemo(() => {
    const filtered = PROJECTS.filter((project) => {
      if (activeCategory === "All") return true;
      const projectCategories = Array.isArray(project.category)
        ? project.category
        : [project.category ?? "Others"];
      return projectCategories.some((category) => category === activeCategory);
    });

    return [...filtered].sort((a, b) => {
      if (sortOption === "alphabetical") {
        return a.title.localeCompare(b.title, ["ko", "en"]);
      }

      const [aEnd, aStart] = getProjectDateScore(a);
      const [bEnd, bStart] = getProjectDateScore(b);
      const latestComparison = bEnd - aEnd || bStart - aStart;

      if (sortOption === "featured") {
        return Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || latestComparison;
      }

      return latestComparison;
    });
  }, [activeCategory, sortOption]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProjects.slice(start, start + itemsPerPage);
  }, [filteredProjects, currentPage]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#fafaf8] text-black">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.055)_1px,transparent_1px)] bg-size-[72px_72px]" />
      <Navbar />

      <main className="relative z-10 mx-auto max-w-330 px-5 pb-28 pt-32 sm:px-8 md:pb-40 md:pt-44">
        {/* Header */}
        <section className="relative border-b border-black pb-16">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#2f6dff]">Selected archive · 2024—2026</p>
          <h1 className="mt-8 text-[clamp(4rem,10vw,9rem)] font-black leading-[0.84] tracking-[-0.07em]">
            Projects<span className="text-[#2f6dff]">.</span>
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-8 text-neutral-600">
            A collection of selected work that solves problems, creates impact, and delivers value.
          </p>
        </section>

        {/* Filters */}
        <section className="mt-12 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentPage(1);
                }}
                className={`border-b px-1 py-2 text-sm font-bold transition ${
                  activeCategory === category
                    ? "border-[#2f6dff] text-[#2f6dff]"
                    : "border-transparent text-neutral-500 hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <select
            value={sortOption}
            onChange={(event) => {
              setSortOption(event.target.value as SortOption);
              setCurrentPage(1);
            }}
            aria-label="프로젝트 정렬"
            className="h-11 w-36 border border-black/20 bg-[#fafaf8] px-4 text-sm font-bold outline-none"
          >
            <option value="latest">Latest</option>
            <option value="featured">Featured</option>
            <option value="alphabetical">A–Z</option>
          </select>
        </section>

        {/* Projects Grid */}
        <section className="mt-14 grid gap-x-7 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
          {paginatedProjects.map((project) => {
            const projectCategories = Array.isArray(project.category)
              ? project.category
              : [project.category ?? "Others"];

            return (
            <article
              key={project.id}
              className="group"
            >
              <button
                onClick={() => setLocation(`/projects/${project.id}`)}
                className="flex h-full w-full flex-col text-left"
              >
                {/* Image */}
                <div className="relative aspect-16/10 overflow-hidden bg-[#efefeb]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                  />

                  <div className="absolute left-5 top-5 flex flex-wrap gap-1.5">
                    {projectCategories.map((category) => (
                      <span key={category} className="rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] shadow-md">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="mt-5 flex flex-1 flex-col border-t border-black/15 pt-5">
                  <h2 className="text-xl font-bold md:text-2xl">
                    {project.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-neutral-700">
                    {project.shortDescription ?? project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-5">
                    <span className="text-xs font-medium text-neutral-500">
                      {project.year}
                    </span>

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </button>
            </article>
            );
          })}
        </section>

        {/* Dot Pagination */}
        <section className="mt-15 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx + 1)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                currentPage === idx + 1
                  ? "bg-[#2f6dff] scale-125"
                  : "bg-neutral-300 hover:bg-neutral-400"
              }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </section>
      </main>

      <div className="relative z-10"><Footer /></div>
    </div>
  );
}
