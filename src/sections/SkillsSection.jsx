import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import TechBadge from '../components/TechBadge.jsx'

const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Java', 'Python', 'C++']

function SkillsSection() {
  const loopedSkills = [...skills, ...skills]

  return (
    <Reveal
      as="section"
      id="skills"
      variant="scale"
      className="relative min-h-[88vh] overflow-hidden px-5 py-28 sm:px-8 lg:px-10"
    >
      {/* Section nebula */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(120,182,255,0.07),transparent_70%)] blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        <SectionHeading
          eyebrow="Skills"
          title="Tech stack in motion."
          description="Tools and technologies I work with to build fast, responsive, and polished interfaces."
        />

        <div className="marquee-shell mt-12">
          <div className="marquee-track">
            {loopedSkills.map((skill, index) => (
              <TechBadge key={`${skill}-${index}`} skill={skill} />
            ))}
          </div>
        </div>

        <div className="marquee-shell mt-5">
          <div className="marquee-track marquee-track-reverse">
            {loopedSkills.map((skill, index) => (
              <TechBadge key={`reverse-${skill}-${index}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default SkillsSection