/**
 * Hero Section Component
 * 
 * Main hero section with:
 * - Large headline "I build digital experiences"
 * - Subheading with tagline
 * - CTA buttons (View My Work, Get in Touch)
 * - Decorative elements (underline, asterisk)
 * - Responsive design
 * 
 * Design: Bold typography with asymmetric layout
 * Left side: Text content
 * Right side: Decorative elements (in desktop view)
 */

import Button from '@/components/Button';
import { PORTFOLIO_META } from '@shared/portfolio';
import FloatingBadge from '@/components/ui/floating-badge';
import flowerimage from '@/assets/flower.png';
import laptopimage from '@/assets/laptop.png';
import headphoneimage from '@/assets/headphone.png';
import mouseimage from '@/assets/mouse.png';
import keyboardimage from '@/assets/keyboard.png';

export default function Hero() {
  return (
    <section className="overflow-x-auto overflow-y-hidden">
      <div
        className="
          relative
          w-360
          mx-auto
          min-h-205
          px-8
          pt-6
        ">
          {/* intro */}
        <div className="absolute left-8 top-14 max-w-87.5">
          <p className="text-[#2f6dff] font-medium italic text-base mb-3">
            Welcome to my Portfolio!
          </p>

          <p className="text-[30px] leading-[1.2] font-light">
            I&apos;m <span className="font-bold underline">Jinyeong</span>, a<br></br>
            Software and AI Engineer based in{" "}
            <span className="font-bold underline">Kyung Hee Univ</span>
            .
          </p>
        </div>

        {/* main title */}
        <div className="flex flex-col items-center justify-center pt-12 select-none">
          <div className="relative">

            <h1 className="text-[120px] leading-[0.92] font-black tracking-[-0.08em] text-center">
              Try.
              <br />
              Do.
              <br />
              Collaborate.
              <br />
              Develop.
            </h1>
          </div>
        </div>

        {/* floating badges */}
        <FloatingBadge
          className="left-[19%] top-[28%] rotate-3"
          text="Tackling Challenges"
        />

        <FloatingBadge
          className="right-[22%] top-[45%] -rotate-3"
          text="Leadership"
        />

        <FloatingBadge
          className="left-[25%] top-[58%] rotate-4"
          text="Passionate"
        />

        <FloatingBadge
          className="left-[47%] top-[68%] -rotate-2"
          text="Insight-Driven · Results-Oriented"
        />

        {/* icons */}
        <div className="absolute right-[28%] top-[28%]">
          <img src={keyboardimage} alt="Keyboard" className='w-45 rotate-12' />
        </div>

        <div className="absolute left-[18%] top-[40%]">
          <img src={mouseimage} alt="Mouse" className='w-32 rotate-320'/>
        </div>

        <div className="absolute left-[18%] top-[63%]">
          <img src={laptopimage} alt="Laptop" className='w-45  rotate-[8deg]'/>
        </div>

        <div className="absolute right-[18%] top-[50%] z-1">
          <img src={headphoneimage} alt="Headphones" className='w-40 h-45 rotate-[-8deg]' />
        </div>

        {/* polaroid */}
        <div className="absolute right-[7%] top-[18%] rotate-[7deg]">
          <div className="bg-white p-3 shadow-2xl border border-neutral-200 w-55">
            <img
              src={flowerimage}
              className="w-full h-62.5 object-cover"
            />

            <div className="mt-3 flex justify-end">
              <span className="bg-[#b4d7ee] px-3 py-1 text-xs font-semibold -rotate-2">
                vibe
              </span>
            </div>
          </div>
        </div>

        {/* sticky note */}
        <div className="absolute right-[5%] bottom-[12%] rotate-[-5deg]">
          <div className="bg-[#f2e8d8] p-5 shadow-lg w-55">
            <div className="absolute -top-2.5 left-15 w-24 h-6 bg-[#d6b78d]/70 -rotate-2" />

            <ul className="space-y-2 text-base font-medium mt-2 text-neutral-700">
              <li>— Computer Science</li>
              <li>— AI Enthusiastic</li>
              <li>— Data Analysis</li>
              <li>— React: Web Developer</li>
            </ul>
          </div>
        </div>

        {/* handwriting */}
        <div className="absolute left-[4%] bottom-[21%] -rotate-6">
          <p className="text-2xl leading-snug font-light italic">
            Ready to challenge
            <br />
            innovatively
          </p>

          <button className="mt-5 border-[3px] border-[#2f6dff] text-[#2f6dff] px-6 py-2 rounded-full text-2xl font-semibold italic hover:bg-[#2f6dff] hover:text-white transition">
            Let&apos;s GO!
          </button>
        </div>
      </div>
    </section>
  );
}
