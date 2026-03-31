import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

const projects = [
  {
    title: 'Signal Thread',
    type: 'Portfolio concept',
    description: 'Scrolling layout with layered motion and clean composition.',
    tag: 'React + GSAP',
  },
  {
    title: 'Pulse Grid',
    type: 'Dashboard concept',
    description: 'Sharp cards, live metrics, and animated data states.',
    tag: 'React + Recharts',
  },
  {
    title: 'Northstar Launch',
    type: 'Landing page',
    description: 'Bold sections with premium visual pacing and micro-interactions.',
    tag: 'HTML + CSS',
  },
]

function ProjectsSection() {
  return (
    <Reveal
      as="section"
      id="projects"
      variant="left"
      className="relative min-h-[88vh] overflow-hidden px-5 py-28 sm:px-8 lg:px-10"
    >
      {/* Section nebula */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(164,123,255,0.07),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(120,182,255,0.05),transparent_70%)] blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work."
          description="Each project is a chance to push further — better motion, cleaner code, sharper design."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              variant={index === 1 ? 'scale' : 'up'}
              delay={index * 130}
              className="group relative overflow-hidden rounded-2xl border border-white/6 bg-white/2 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#a47bff]/30 hover:bg-[#a47bff]/4 hover:shadow-[0_0_40px_rgba(164,123,255,0.08)]"
            >
              {/* Top accent line */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#a47bff]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a47bff]">
                {project.type}
              </p>
              <h3 className="mt-4 font-[var(--font-display)] text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-300">
                {project.description}
              </p>

              {/* Tech tag */}
              <span className="mt-5 inline-block rounded-full border border-white/8 bg-white/4 px-3 py-1 text-xs font-medium tracking-wide text-slate-400">
                {project.tag}
              </span>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#a47bff] transition group-hover:gap-3">
                View project
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export default ProjectsSection