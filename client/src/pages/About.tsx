import { useState } from "react";
import { ArrowUpRight, ChevronDown, Download, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import { ABOUT_CONTENT } from "@shared/portfolio";

export default function AboutPage() {
  const [showAllActivities, setShowAllActivities] = useState(false);
  const visibleActivities = showAllActivities
    ? ABOUT_CONTENT.activities
    : ABOUT_CONTENT.activities.slice(0, 3);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#fafaf8] text-black">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.055)_1px,transparent_1px)] bg-size-[72px_72px]" />
      <Navbar />
      <main className="relative z-10 mx-auto max-w-375 px-5 pb-28 pt-32 sm:px-8 md:pb-40 md:pt-44">
        <header className="grid gap-12 border-b border-black pb-16 lg:grid-cols-[1.5fr_0.5fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#2f6dff]">Curriculum vitae · 2026</p>
            <h1 className="mt-8 text-[clamp(4rem,10vw,9rem)] font-black leading-[0.82] tracking-[-0.07em]">{ABOUT_CONTENT.name.split(" ")[0]}<br />{ABOUT_CONTENT.name.split(" ")[1]}<span className="text-[#2f6dff]">.</span></h1>
          </div>
          <div className="max-w-sm lg:justify-self-end">
            <p className="text-lg font-bold leading-7">{ABOUT_CONTENT.role.map((line) => <span key={line} className="block">{line}</span>)}</p>
            <p className="mt-6 text-sm leading-7 text-neutral-600">{ABOUT_CONTENT.location}<br />{ABOUT_CONTENT.email}</p>
            <SocialLinks className="mt-6 flex gap-3" />
          </div>
        </header>

        <section className="grid gap-8 py-20 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">Profile</h2>
          <p className="max-w-4xl text-2xl font-semibold leading-[1.55] tracking-tight md:text-3xl md:leading-[1.4]">{ABOUT_CONTENT.profile}</p>
        </section>

        <section className="grid gap-8 border-t border-black/20 py-20 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">Interests</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {ABOUT_CONTENT.interests.map((interest, index) => {
              const category = interest === "AI Agent" ? "AI" : interest === "Data Analysis" ? "Data" : "Web";
              return (
              <a href={`/projects?category=${category}`} key={interest} className="group flex min-h-40 flex-col justify-between border border-black/20 bg-[#fafaf8]/80 p-6 backdrop-blur-[2px] transition hover:border-[#2f6dff] hover:bg-white md:min-h-48 md:p-8">
                <span className="font-mono text-xs text-[#2f6dff]">0{index + 1}</span>
                <div className="mt-10 flex items-end justify-between gap-4"><p className="text-xl font-bold leading-tight tracking-tight md:text-2xl">{interest}</p><ArrowUpRight size={17} className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></div>
              </a>
              );
            })}
          </div>
        </section>

        <section className="grid gap-8 border-t border-black/20 py-20 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">Experience</h2>
          <div className="space-y-14">
            {ABOUT_CONTENT.experience.map((item) => (
              <article key={item.role} className="grid gap-4 md:grid-cols-[180px_1fr]">
                <p className="font-mono text-xs text-[#2f6dff]">{item.period}</p>
                <div><h3 className="text-2xl font-bold">{item.role}</h3><p className="mt-1 text-sm font-semibold text-neutral-500">{item.organization}</p><p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-600">{item.description}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-t border-black/20 py-20 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">Leadership<br />& Activities</h2>
            <p className="mt-5 max-w-40 text-xs leading-5 text-neutral-400">Leadership, programs and communities.</p>
          </div>
          <div>
            <div className="divide-y divide-black/15 border-y border-black/20">
              {visibleActivities.map((activity) => (
                <article key={`${activity.title}-${activity.period}`} className="grid gap-3 py-6 md:grid-cols-[170px_110px_1fr] md:gap-6">
                  <p className="font-mono text-[11px] leading-5 text-[#2f6dff]">{activity.period}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-400">{activity.category}</p>
                  <div>
                    {'link' in activity ? (
                      <a href={activity.link} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-base font-bold transition hover:text-[#2f6dff]">
                        {activity.title}
                        <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    ) : (
                      <h3 className="text-base font-bold">{activity.title}</h3>
                    )}
                    <p className="mt-1.5 text-sm leading-6 text-neutral-500">{activity.organization}</p>
                  </div>
                </article>
              ))}
            </div>
            {ABOUT_CONTENT.activities.length > 3 && (
              <button
                type="button"
                aria-expanded={showAllActivities}
                onClick={() => setShowAllActivities((current) => !current)}
                className="group mt-7 inline-flex items-center gap-3 text-sm font-bold transition hover:text-[#2f6dff]"
              >
                {showAllActivities ? "Show less" : `Show more (${ABOUT_CONTENT.activities.length - 3})`}
                <ChevronDown size={16} className={`transition-transform duration-300 ${showAllActivities ? "rotate-180" : "group-hover:translate-y-0.5"}`} />
              </button>
            )}
          </div>
        </section>

        <div className="grid gap-20 border-t border-black/20 py-20 lg:grid-cols-2 lg:gap-24">
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">Education</h2>
            {ABOUT_CONTENT.education.map((edu) => (
              <div key={edu.period}>
                <p className="mt-10 font-mono text-xs text-[#2f6dff]">{edu.period}</p>
                <h3 className="mt-4 text-2xl font-bold">{edu.degree}</h3>
                <p className="mt-2 text-sm text-neutral-600">{edu.school}</p>
              </div>
            ))}
          </section>
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">Awards</h2>
            <div className="mt-8 divide-y divide-black/15 border-t border-black/15">
              {ABOUT_CONTENT.awards.map((award) => (
                <div key={`${award.title}-${award.year}`} className="grid grid-cols-[60px_1fr_auto] gap-4 py-4 text-sm">
                  <span className="font-mono text-xs text-[#2f6dff]">{award.year}</span>
                  <span className="font-semibold">{award.title}</span>
                  <span className="text-neutral-500">{award.result}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="grid gap-8 border-t border-black/20 py-20 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">Skills</h2>
          <div className="grid gap-12 md:grid-cols-3">
            {ABOUT_CONTENT.skills.map(({ group, items }) => <div key={group}><h3 className="text-sm font-bold">{group}</h3><ul className="mt-6 space-y-3 text-sm text-neutral-600">{items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}
          </div>
        </section>

        <div className="flex flex-wrap gap-3 border-t border-black pt-10">
          <a href="/resume.pdf" className="inline-flex items-center gap-3 bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-[#2f6dff]">Download CV <Download size={16} /></a>
          <a href={`mailto:${ABOUT_CONTENT.email}`} className="inline-flex items-center gap-3 border border-black px-6 py-3 text-sm font-bold transition hover:border-[#2f6dff] hover:text-[#2f6dff]">Contact <Mail size={16} /></a>
        </div>
      </main>
      <div className="relative z-10"><Footer /></div>
    </div>
  );
}
