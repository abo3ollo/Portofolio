import AboutSection from "./_components/About/About";
import HeroSection from "./_components/HeroSection/HeroSection";
import Projects from "./_components/Projects/Projects";
import DesignServices from "./_components/Services/Services";

export default function Home() {
  return <>
  <main className="bg-black text-white min-h-screen">
      <HeroSection />
      <AboutSection/>
      <Projects/>
      <DesignServices/>
      
    </main>
  
  </>
}
