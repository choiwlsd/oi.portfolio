import {
  Briefcase,
  Code2,
  Download,
  GraduationCap,
  Heart,
  Mail,
  Rocket,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import me from "@/assets/me.png";
import milan from "@/assets/milan.jpg";

const journey = [
  {
    period: "2021 - 2022",
    title: "Started University",
    subtitle: "B.S. in Computer Science, Seoul, Korea",
    body: "Began my journey in computer science and discovered my passion for building useful digital products.",
    icon: GraduationCap,
  },
  {
    period: "2022 - 2023",
    title: "Exploring & Learning",
    subtitle: "Web development, AI, UX design",
    body: "Explored web development and design. Built small projects and learned how users experience software.",
    icon: Code2,
  },
  {
    period: "2023 - 2024",
    title: "Building & Growing",
    subtitle: "Freelance projects, open source",
    body: "Started taking real projects and contributing to open source. Learned a lot by building real things.",
    icon: Rocket,
  },
  {
    period: "2024 - Present",
    title: "Focused & Impactful",
    subtitle: "Product design, full-stack development",
    body: "Focusing on building impactful products that help people through design and technology.",
    icon: Target,
  },
];

const education = [
  {
    period: "2021 - 2026 (Expected)",
    title: "B.S. in Computer Science",
    place: "Kyung Hee University, Seoul, Korea",
    note: "GPA 3.82 / 4.5",
  },
];

const experience = [
  {
    period: "2024 - Present",
    title: "Frontend & AI Developer",
    place: "Self-Employed",
    body: "Working with clients worldwide to design and develop web applications and AI-powered tools.",
  },
  {
    period: "2023 - 2024",
    title: "UX/UI Design Intern",
    place: "Design Studio",
    body: "Designed user interfaces and prototypes for web and mobile projects.",
  },
  {
    period: "2022 - 2023",
    title: "Teaching Assistant",
    place: "Data Structures Course",
    body: "Assisted in teaching data structures and algorithms to students.",
  },
];

const beliefs = [
  {
    title: "User First",
    body: "Always design and build with users in mind.",
    icon: Users,
  },
  {
    title: "Keep Learning",
    body: "Stay curious and never stop learning.",
    icon: Sparkles,
  },
  {
    title: "Build Impact",
    body: "Create solutions that make a real difference.",
    icon: Target,
  },
  {
    title: "Do with Passion",
    body: "Love what you do and do it with heart.",
    icon: Heart,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="px-5 pb-12 pt-28 md:px-10">
        <section className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <h1 className="mt-5 max-w-2xl text-6xl font-black leading-[0.98] tracking-normal md:text-7xl">
              Jinyeong Choi
            </h1>
            <div className="h-px w-120 max-w-full bg-black" />
            <p className="mt-7 max-w-xl text-base leading-7 text-neutral-700">
              I turn ideas into visual stories.
              <br/> 저는 사용자 경험을 최우선으로 생각하고 끊임없이 고민하며, 문제를 해결하고 가치를 창출하는 것을 목표로 하는 <span className="font-bold">협력하는 개발자</span>입니다. 
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded bg-black px-5 py-3 text-xs font-black uppercase text-white"
              >
                Download CV
                <Download size={14} />
              </a>
              <a
                href="mailto:choiwlsd@gmail.com"
                className="inline-flex items-center gap-2 rounded border border-neutral-300 bg-white px-5 py-3 text-xs font-black uppercase"
              >
                Contact Me
                <Mail size={14} />
              </a>
            </div>

            <SocialLinks className="mt-7 flex gap-3" />
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute right-4 top-2 z-10 h-10 w-28 rotate-12 bg-[#0868ff]" />
            <div className="relative rotate-2 border border-neutral-200 bg-white p-4 shadow-xl">
              <img src={me} alt="Jinyeong Choi" className="h-105 w-full object-cover grayscale" />
            </div>
            <span className="absolute -left-8 top-28 hidden text-5xl text-[#0868ff] md:block">♥</span>
            <span className="absolute -left-2 top-44 hidden text-3xl text-[#0868ff] md:block">♥</span>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-2xl mb-5">협력을 통해 함께 성장하는 개발자</h2>

          <div className="flex flex-col text-sm space-y-4 leading-7 text-neutral-700">
            <span>
              저는 사용자 경험을 최우선으로 생각하고 끊임없이 고민하며 더 나은 방향을 찾아가는{" "}
              <span className="font-bold">협력하는 개발자 최진영</span>입니다.
            </span>
            <span>
              저는 사용자가 웹사이트나 애플리케이션을 사용할 때 직관적이고 편안한 경험을 제공하는 것을 중요하게 생각합니다.
              단순히 기능을 구현하는 것을 넘어, 사용자가 자연스럽게 이해하고 사용할 수 있는 인터페이스를 만드는 데 관심이 많습니다.
            </span>
            <span>
              다양한 프로젝트와 스터디, 동아리 활동을 통해 협업과 소통의 가치를 배웠으며, 팀원들과 함께 고민하고 의견을 나누는 과정 속에서 더 나은 결과를 만들어가는 경험을 쌓아왔습니다.
            </span>
            <span>
              이러한 경험을 바탕으로 문제를 해결하고 가치를 만들어내는 개발자로 성장하고 있으며, 앞으로도 더 나은 사용자 경험을 제공하기 위해 끊임없이 노력하고 있습니다.
            </span>
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[1.25fr_0.95fr]">
          <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">My Journey</h2>

            <div className="relative mt-8 space-y-10">
              <div className="absolute left-8 top-0 h-full w-px bg-neutral-200" />
              {journey.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="relative grid grid-cols-[64px_1fr] gap-5">
                    <div className="relative z-10 grid h-16 w-16 place-items-center rounded-xl bg-[#eef4ff] text-[#0868ff]">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-[#0868ff]">{item.period}</p>
                      <h3 className="mt-1 text-base font-black">{item.title}</h3>
                      <p className="mt-1 text-sm font-semibold text-neutral-600">{item.subtitle}</p>
                      <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-600">{item.body}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <GraduationCap size={24} />
                <h2 className="text-xl font-black">Education</h2>
              </div>
              <div className="mt-6 space-y-6">
                {education.map((item) => (
                  <article key={item.title}>
                    <p className="text-xs font-black text-[#0868ff]">{item.period}</p>
                    <h3 className="mt-2 text-base font-black">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-neutral-600">{item.place}</p>
                    <span className="mt-4 inline-block rounded bg-[#e9f1ff] px-3 py-1 text-xs font-black text-[#0868ff]">
                      {item.note}
                    </span>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Briefcase size={24} />
                <h2 className="text-xl font-black">Experience</h2>
              </div>
              <div className="mt-6 space-y-7">
                {experience.map((item) => (
                  <article key={item.title} className="relative border-l border-neutral-200 pl-5">
                    <span className="absolute -left-1.25 top-1 h-2.5 w-2.5 rounded-full bg-[#0868ff]" />
                    <p className="text-xs font-black text-[#0868ff]">{item.period}</p>
                    <h3 className="mt-2 text-base font-black">{item.title}</h3>
                    <p className="text-sm font-semibold text-neutral-600">{item.place}</p>
                    <p className="mt-2 text-sm leading-6 text-neutral-600">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">My Story</h2>
            <div className="mt-1 h-0.5 w-15 rounded-full bg-[#0868ff]" />
            <p className="mt-6 max-w-xl text-sm leading-7 text-neutral-700">
              I&apos;ve always been curious about how things work and how we can make them better. That curiosity led me
              to computer science, and design helped me bring ideas to life.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-700">
              I enjoy solving problems, building products, and creating visuals that connect, inspire, and leave a
              lasting impact.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">What I Believe</h2>
            <div className="mt-1 h-0.5 w-28 rounded-full bg-[#0868ff]" />
            <div className="mt-7 space-y-6">
              {beliefs.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="flex gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-neutral-100">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-black">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-neutral-600">{item.body}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
