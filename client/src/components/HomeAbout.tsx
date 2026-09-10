import { ArrowUpRight } from "lucide-react";
import { useLocation } from "wouter";
import me from "@/assets/me.png";
import { ABOUT_CONTENT } from "@shared/portfolio";

export default function HomeAbout() {
  const [, navigate] = useLocation();

  return (
    <section id="about" className="relative border-t border-black/10">
      <div className="mx-auto max-w-[1500px] px-5 py-28 sm:px-8 md:py-40">
        <div className="mb-20 flex items-center gap-4">
          <span className="font-mono text-xs text-[#2f6dff]">01</span>
          <p className="text-xs font-bold uppercase tracking-[0.24em]">About</p>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1.45fr_0.55fr] lg:items-end lg:gap-24">
          <div>
            <p className="max-w-4xl text-[clamp(2.5rem,5.2vw,5.4rem)] font-black leading-[1.04] tracking-[-0.055em]">
              {ABOUT_CONTENT.homeHeadline[0]}
              <span className="block text-[#2f6dff]">{ABOUT_CONTENT.homeHeadline[1]}</span>
            </p>
            <div className="mt-16 grid gap-10 border-t border-black/20 pt-9 md:grid-cols-2">
              <p className="max-w-xl text-base leading-8 text-neutral-600 md:text-lg">
                {ABOUT_CONTENT.homeSummary}
              </p>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">Focus</p>
                <ul className="mt-6 space-y-3">
                  {ABOUT_CONTENT.focus.map((item) => <li key={item} className="text-sm font-semibold">{item}</li>)}
                </ul>
              </div>
            </div>
            <button onClick={() => navigate("/about")} className="group mt-14 inline-flex items-center gap-4 border-b border-black pb-2 text-sm font-bold transition hover:border-[#2f6dff] hover:text-[#2f6dff]">
              More about me
              <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          <div className="mx-auto w-full max-w-[300px] lg:mx-0 lg:justify-self-end">
            <div className="aspect-[3/4] overflow-hidden bg-[#efefeb]">
              <img src={me} alt="Jinyeong Choi" className="h-full w-full object-cover object-top grayscale" />
            </div>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">{ABOUT_CONTENT.name} · Seoul</p>
          </div>
        </div>
      </div>
    </section>
  );
}
