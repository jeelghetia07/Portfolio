import AboutSection from './sections/AboutSection.jsx'
import ContactSection from './sections/ContactSection.jsx'
import HeroSection from './sections/HeroSection.jsx'
import ProjectsSection from './sections/ProjectsSection.jsx'
import ResumeSection from './sections/ResumeSection.jsx'
import SkillsSection from './sections/SkillsSection.jsx'

function App() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <div className="absolute left-[-8rem] top-[6rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,_rgba(255,111,145,0.18),_transparent_68%)] blur-3xl" />
        <div className="absolute right-[-8rem] top-[24rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,_rgba(123,223,246,0.16),_transparent_68%)] blur-3xl" />
        <div className="absolute left-1/2 top-[62rem] h-[18rem] w-[18rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(155,126,255,0.12),_transparent_68%)] blur-3xl" />
      </div>

      <div className="relative flex min-h-screen w-full flex-col px-0 pb-24 pt-0">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ResumeSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  )
}

export default App
