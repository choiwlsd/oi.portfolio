import { ArrowDown, ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { useLocation } from "wouter";
import { PROJECTS } from "@/../../shared/const";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = ["All", "Web", "AI", "UI/UX", "Others"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [, setLocation] = useLocation();

  const itemsPerPage = 6;

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      if (activeCategory === "All") return true;
      return project.category === activeCategory;
    });
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProjects.slice(start, start + itemsPerPage);
  }, [filteredProjects, currentPage]);

  return (
    <div className="min-h-screen text-black">
      <Navbar />

      <main className="px-6 pb-6 pt-12 md:px-10">
        {/* Header */}
        <section className="relative pt-10 md:pt-16">
          <p className="text-xl italic text-[#0868ff]" style={{ fontFamily: "cursive" }}>
            Things I've built
          </p>

          <h1 className="mt-3 text-7xl font-black">
            Projects.
          </h1>

          <p className="mt-7 max-w-md text-lg leading-8">
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
                className={`h-11 min-w-20 rounded-lg px-5 text-sm font-bold transition ${
                  activeCategory === category
                    ? "bg-[#0868ff] text-white"
                    : "bg-neutral-100 hover:bg-neutral-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <select className="h-11 w-36 rounded-lg border border-neutral-300 bg-white px-4 text-sm font-bold outline-none">
            <option>Latest</option>
            <option>Featured</option>
            <option>A-Z</option>
          </select>
        </section>

        {/* Projects Grid */}
        <section className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {paginatedProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <button
                onClick={() => setLocation(`/projects/${project.id}`)}
                className="flex h-full w-full flex-col text-left"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden bg-neutral-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 rounded bg-white/85 px-3 py-1 text-xs font-bold text-black outline-1 outline-black/10">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="text-xl font-black">
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
                        className="rounded bg-neutral-100 px-3 py-1 text-xs text-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-5">
                    <span className="text-sm font-bold text-black">
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
          ))}
        </section>

        {/* Dot Pagination */}
        <section className="mt-15 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx + 1)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                currentPage === idx + 1
                  ? "bg-[#0868ff] scale-125"
                  : "bg-neutral-300 hover:bg-neutral-400"
              }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}