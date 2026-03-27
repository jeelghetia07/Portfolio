import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import TechBadge from '../components/TechBadge.jsx'

const skills = [
  'React',
  'JavaScript',
  'HTML',
  'CSS',
  'Java',
  'Python',
  'C++',
]

function SkillsSection() {
  const loopedSkills = [...skills, ...skills]

  return (
    <Reveal as="section" id="skills" variant="scale" className="min-h-[88vh] border-t border-white/6 px-5 py-24 sm:px-8 lg:px-10">
      <div>
        <SectionHeading
          eyebrow="Skills"
          title="Tech stack in motion."
          description="This section stays alive while the rest of the page changes around it."
        />

        <div className="marquee-shell mt-10">
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
