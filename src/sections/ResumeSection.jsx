import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

const resumeItems = [
  {
    year: '2025 – Present',
    title: 'Software Developer',
    description: 'Building interactive frontend experiences and personal projects focused on clean UI and smooth motion.',
  },
  {
    year: 'Core Focus',
    title: 'React & UI Development',
    description: 'Strong interest in modern layouts, animations, and user flow. Always chasing pixel-perfect results.',
  },
  {
    year: '2024 – Present',
    title: 'B.Tech CSE — PDEU',
    description: 'Computer Science and Engineering at Pandit Deendayal Energy University, Gandhinagar.',
  },
  {
    year: 'Ongoing',
    title: 'Open Source & Projects',
    description: 'Exploring frontend tooling, GSAP animations, and building a portfolio that reflects real craft.',
  },
]

function ResumeSection() {
  return (
    <Reveal
      as="section"
      id="resume"
      variant="right"
      className="relative min-h-[88vh] overflow-hidden px-5 py-28 sm:px-8 lg:px-10"
    >
      {/* Section nebula */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(164,123,255,0.07),transparent_70%)] blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        <SectionHeading
          eyebrow="Resume"
          title="Experience snapshot."
          description="A growing timeline of what I've built, learned, and where I'm headed."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {resumeItems.map((item, index) => (
            <Reveal
              key={item.title}
              variant={index % 2 === 0 ? 'up' : 'left'}
              delay={index * 120}
              className="group relative overflow-hidden rounded-2xl border border-white/6 bg-white/2 p-6 transition-all duration-300 hover:border-[#a47bff]/30 hover:bg-[#a47bff]/4"
            >
              {/* Accent left bar */}
              <div className="absolute left-0 top-0 h-full w-[2px] rounded-l-2xl bg-gradient-to-b from-[#a47bff]/60 via-[#a47bff]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a47bff]">
                {item.year}
              </p>
              <h3 className="mt-3 font-[var(--font-display)] text-xl font-semibold text-white sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-300">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Download CTA */}
        <Reveal variant="up" delay={480} className="mt-10">
          <a
            href="#"
            className="simple-button-secondary inline-flex"
          >
            Download Full Resume →
          </a>
        </Reveal>
      </div>
    </Reveal>
  )
}

export default ResumeSection