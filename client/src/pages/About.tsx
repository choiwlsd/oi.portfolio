import { Download, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";

const experience = [
  { period: "2024 — PRESENT", role: "Frontend & AI Developer", organization: "Project-based", description: "웹 애플리케이션과 AI 기반 서비스를 설계하고 개발합니다. 사용자 흐름을 정의하는 단계부터 구현과 개선까지 참여합니다." },
  { period: "2023 — PRESENT", role: "UI / UX & Product Design", organization: "Team projects", description: "사용자 문제를 바탕으로 정보 구조와 인터페이스를 설계하고, 실제 동작하는 프로토타입으로 구체화합니다." },
];
const awards = [["2025", "KHUTHON", "최우수상"], ["2025", "Semothon", "대상"], ["2024", "KHUTHON", "우수상 · 인기상"], ["2024", "Track Study Project", "2등"]];
const skills = { Development: ["React", "TypeScript", "JavaScript", "Python", "Node.js"], "AI / Data": ["PyTorch", "MediaPipe", "OpenCV", "Data Analysis"], Design: ["UI / UX", "Figma", "Prototyping"] };

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#fafaf8] text-black">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.055)_1px,transparent_1px)] bg-size-[72px_72px]" />
      <Navbar />
      <main className="relative z-10 mx-auto max-w-[1500px] px-5 pb-28 pt-32 sm:px-8 md:pb-40 md:pt-44">
        <header className="grid gap-12 border-b border-black pb-16 lg:grid-cols-[1.5fr_0.5fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#2f6dff]">Curriculum vitae · 2026</p>
            <h1 className="mt-8 text-[clamp(4rem,10vw,9rem)] font-black leading-[0.82] tracking-[-0.07em]">Jinyeong<br />Choi<span className="text-[#2f6dff]">.</span></h1>
          </div>
          <div className="max-w-sm lg:justify-self-end">
            <p className="text-lg font-bold leading-7">Frontend Developer<br />& AI Enthusiast</p>
            <p className="mt-6 text-sm leading-7 text-neutral-600">Seoul, South Korea<br />choiwlsd@gmail.com</p>
            <SocialLinks className="mt-6 flex gap-3" />
          </div>
        </header>

        <section className="grid gap-8 py-20 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">Profile</h2>
          <p className="max-w-4xl text-2xl font-semibold leading-[1.55] tracking-[-0.025em] md:text-4xl md:leading-[1.4]">사용자 경험을 최우선으로 생각하며, 복잡한 문제를 명확한 인터페이스와 견고한 코드로 해결합니다. 협업을 통해 더 나은 방향을 찾고 실제 가치를 만드는 개발자입니다.</p>
        </section>

        <section className="grid gap-8 border-t border-black/20 py-20 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">Experience</h2>
          <div className="space-y-14">
            {experience.map((item) => (
              <article key={item.role} className="grid gap-4 md:grid-cols-[180px_1fr]">
                <p className="font-mono text-xs text-[#2f6dff]">{item.period}</p>
                <div><h3 className="text-2xl font-bold">{item.role}</h3><p className="mt-1 text-sm font-semibold text-neutral-500">{item.organization}</p><p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-600">{item.description}</p></div>
              </article>
            ))}
          </div>
        </section>

        <div className="grid gap-20 border-t border-black/20 py-20 lg:grid-cols-2 lg:gap-24">
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">Education</h2>
            <p className="mt-10 font-mono text-xs text-[#2f6dff]">2021 — 2026</p><h3 className="mt-4 text-2xl font-bold">B.S. in Computer Science</h3><p className="mt-2 text-sm text-neutral-600">Kyung Hee University · Seoul</p>
          </section>
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">Awards</h2>
            <div className="mt-8 divide-y divide-black/15 border-t border-black/15">
              {awards.map(([year, title, result]) => <div key={`${title}-${year}`} className="grid grid-cols-[60px_1fr_auto] gap-4 py-4 text-sm"><span className="font-mono text-xs text-[#2f6dff]">{year}</span><span className="font-semibold">{title}</span><span className="text-neutral-500">{result}</span></div>)}
            </div>
          </section>
        </div>

        <section className="grid gap-8 border-t border-black/20 py-20 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">Skills</h2>
          <div className="grid gap-12 md:grid-cols-3">
            {Object.entries(skills).map(([group, items]) => <div key={group}><h3 className="text-sm font-bold">{group}</h3><ul className="mt-6 space-y-3 text-sm text-neutral-600">{items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}
          </div>
        </section>

        <div className="flex flex-wrap gap-3 border-t border-black pt-10">
          <a href="/resume.pdf" className="inline-flex items-center gap-3 bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-[#2f6dff]">Download CV <Download size={16} /></a>
          <a href="mailto:choiwlsd@gmail.com" className="inline-flex items-center gap-3 border border-black px-6 py-3 text-sm font-bold transition hover:border-[#2f6dff] hover:text-[#2f6dff]">Contact <Mail size={16} /></a>
        </div>
      </main>
      <div className="relative z-10"><Footer /></div>
    </div>
  );
}
