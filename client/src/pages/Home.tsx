/**
 * Home Page Component
 * 
 * Main landing page of the developer portfolio.
 * Combines all sections:
 * - Navbar (fixed header)
 * - Hero section (introduction)
 * - About section (experience, skills, tools)
 * - Projects section (featured work)
 * - Contact section (CTA)
 * - Footer
 * 
 * Design: Modern playful minimalism with bold typography
 * and strategic use of blue accent color
 */

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import HomeProjects from '@/components/HomeProjects';
import HomeAbout from '@/components/HomeAbout';


const Home = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#fafaf8] text-black">
      {/* grid */}
      <div
        className="
          pointer-events-none fixed inset-0 z-0
          bg-[linear-gradient(to_right,rgba(0,0,0,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.055)_1px,transparent_1px)]
          bg-size-[72px_72px]
          opacity-60
        "
      />
      
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 pt-16 md:pt-20">

        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <HomeAbout />

        {/* Projects Section */}
        <HomeProjects />

        {/* Contact Section */}
        {/* <Contact />  */}
      </main>

      {/* Footer */}
      <div className="relative z-10"><Footer /></div>
    </div>
  );
}

export default Home;
