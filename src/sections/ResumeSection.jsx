import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

const resumeItems = [
  {
    year: '2025 - Present',
    title: 'Software Developer',
    description: 'Building interactive frontend experiences and personal projects.',
  },
  {
    year: 'Core Focus',
    title: 'React and UI Development',
    description: 'Strong interest in modern layouts, animations, and user flow.',
  },
]

function ResumeSection() {
  return (
    <Reveal as="section" id="resume" variant="right" className="min-h-[88vh] border-t border-white/6 px-5 py-24 sm:px-8 lg:px-10">
      <div>
        <SectionHeading
          eyebrow="Resume"
          title="Experience snapshot."
          description="A cleaner timeline block that can later hold your real experience and education."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {resumeItems.map((item, index) => (
            <Reveal
              key={item.title}
              variant={index % 2 === 0 ? 'up' : 'left'}
              delay={index * 120}
              className="border-l border-white/10 py-6 pl-6"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[#a47bff]">
                {item.year}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export default ResumeSection
