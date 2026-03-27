import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

const projects = [
  {
    title: 'Signal Thread',
    type: 'Portfolio concept',
    description: 'Scrolling layout with layered motion and clean composition.',
  },
  {
    title: 'Pulse Grid',
    type: 'Dashboard concept',
    description: 'Sharp cards, metrics, and animated states.',
  },
  {
    title: 'Northstar Launch',
    type: 'Landing page',
    description: 'Bold sections with premium visual pacing.',
  },
]

function ProjectsSection() {
  return (
    <Reveal as="section" id="projects" variant="left" className="min-h-[88vh] border-t border-white/6 px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1280px]">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work."
          description="Each card can become a deeper project page later, but the flow stays in one scrolling experience."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              variant={index === 1 ? 'scale' : 'up'}
              delay={index * 130}
              className="group relative overflow-hidden border-t border-white/10 pt-6 transition duration-300 hover:-translate-y-1"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[#a47bff]">
                {project.type}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-300 sm:text-lg">
                {project.description}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-[#a47bff]">
                View project
                <span
                  aria-hidden="true"
                  className="transition group-hover:translate-x-1"
                >
                  -&gt;
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export default ProjectsSection
