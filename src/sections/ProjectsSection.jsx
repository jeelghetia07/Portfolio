import Reveal from '../components/Reveal.jsx'

const projects = [
  {
    title: 'Portfolio Website',
    type: 'Interactive Dashboard',
    description: 'Created a dynamic portfolio website to present my work, skills, and experience through refined UI, smooth interactions, and a strong personal brand.',
    tag: 'React • Tailwind CSS • Vite',
    href: 'https://github.com/jeelghetia07/Portfolio',
  },
  {
    title: 'University Portal',
    type: 'Role-Based Access Concept',
    description: 'Built a scalable University Portal with RBAC using the PERN stack, enabling secure role-based access, dynamic dashboards, and seamless file management with Cloudinary integration.',
    tag: 'React • Node.js • Express • PostgreSQL • Cloudinary • JWT',
    href: 'https://github.com/jeelghetia07/University_Portal',
  },
  {
    title: 'Vibely',
    type: 'Social Media Website',
    description: 'Bold sections with premium visual pacing and micro-interactions.',
    tag: 'HTML + CSS',
    href: '#',
  },
]

function ProjectsSection() {
  return (
    <Reveal
      as="section"
      id="projects"
      variant="left"
      className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28"
    >
      <div className="pointer-events-none absolute left-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(164,123,255,0.07),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(120,182,255,0.05),transparent_70%)] blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#a47bff] sm:text-base">
            Projects
          </p>
          <h2 className="mt-3 font-[var(--font-display)] text-[2.2rem] leading-[1.02] text-white sm:text-[2.8rem]">
            Things I've Built.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Each project represents my approach to development: clean code, refined UI, and meaningful interaction.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              variant={index === 1 ? 'scale' : 'up'}
              delay={index * 130}
              className="group"
            >
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="relative flex min-h-[18rem] flex-col overflow-visible rounded-2xl border border-white/6 bg-white/2 p-5 sm:min-h-[20.5rem] sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#a47bff]/30 hover:bg-[#a47bff]/4 hover:shadow-[0_0_40px_rgba(164,123,255,0.08)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#a47bff]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a47bff]">
                  {project.type}
                </p>
                <h3 className="mt-4 font-[var(--font-display)] text-[1.7rem] font-semibold text-white sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-slate-300 sm:text-base">
                  {project.description}
                </p>

                <div className="mt-auto pt-6">
                  <div className="group/stack relative inline-flex">
                    <span className="inline-block rounded-full border border-white/8 bg-white/4 px-3 py-1 text-xs font-medium tracking-[0.18em] text-slate-400 transition-colors duration-200 group-hover/stack:border-[#a47bff]/30 group-hover/stack:text-slate-200">
                      TECH STACK
                    </span>

                    <div className="pointer-events-none absolute bottom-[calc(100%+14px)] left-0 z-20 w-max max-w-[18rem] rounded-2xl border border-[#a47bff]/20 bg-[#111522]/95 px-4 py-3 text-xs font-medium leading-6 text-slate-200 opacity-0 shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all duration-200 group-hover/stack:-translate-y-1 group-hover/stack:opacity-100">
                      {project.tag}
                      <span className="absolute left-8 top-full h-3 w-3 -translate-y-1/2 rotate-45 border-b border-r border-[#a47bff]/20 bg-[#111522]/95" />
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export default ProjectsSection
