import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

const highlights = [
  'Dark, minimal interfaces',
  'Frontend interactions with purpose',
  'Design that stays clean while moving',
]

function AboutSection() {
  return (
    <Reveal
      as="section"
      id="about"
      variant="left"
      className="min-h-[88vh] border-t border-white/6 px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto grid w-full max-w-[1280px] items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <SectionHeading
          eyebrow="About Me"
          title="I build simple layouts that become interesting through motion."
          description="The goal is not to overload the screen. It is to make each section feel different as you move through the page."
        />

        <div className="grid gap-6">
          {highlights.map((item, index) => (
            <Reveal
              key={item}
              variant={index % 2 === 0 ? 'right' : 'scale'}
              delay={index * 120}
              className="border-l border-white/10 py-7 pl-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#a47bff]">
                0{index + 1}
              </p>
              <p className="mt-3 text-lg leading-8 text-slate-100">{item}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export default AboutSection
