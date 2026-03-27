import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/',
    icon: FaLinkedinIn,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/',
    icon: FaInstagram,
  },
]

function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden px-0 pb-10 pt-5 sm:px-0 lg:px-0"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,182,255,0.10),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(164,123,255,0.08),transparent_22%)]" />
      <div className="hero-noise absolute inset-0 opacity-30" />

      <nav className="relative z-10 flex items-center justify-between gap-4 border-b border-white/8 px-5 pb-5 pt-1 sm:px-8 lg:px-10">
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-[#a47bff]" />
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-white">
              Jeel Ghetia
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-400">
              Software Developer
            </p>
          </div>
        </div>

        <div className="hidden flex-wrap justify-end gap-4 text-sm text-slate-200 lg:flex">
          {navItems.map((item) => (
            <a key={item.label} className="minimal-nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="relative z-10 flex flex-1 items-center px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-24">
        <div className="w-full">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <p className="hero-kicker-strip">
              One page. Smooth transitions. Dark minimal design.
            </p>

            <div className="mt-6 space-y-3 sm:space-y-5">
              <div className="hero-sweep-wrap">
                <h1
                  className="hero-sweep-line"
                  style={{
                    animationDelay: '120ms',
                    '--hero-steps': 32,
                    '--hero-duration': '1.8s',
                    '--hero-width': '20ch',
                  }}
                >
                  Hii, I&apos;m Jeel Ghetia
                </h1>
              </div>
              <div className="hero-sweep-wrap">
                <h2
                  className="hero-sweep-line hero-sweep-sub text-[#a47bff]"
                  style={{
                    animationDelay: '1.25s',
                    '--hero-steps': 30,
                    '--hero-duration': '1.7s',
                    '--hero-width': '18ch',
                  }}
                >
                  Software Developer
                </h2>
              </div>
            </div>

            <p className="animate-rise mt-8 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base [animation-delay:1260ms]">
              Scroll through a single-page portfolio where every section enters
              differently and reverses again as you move back.
            </p>

            <div className="animate-rise mt-10 flex flex-wrap justify-center gap-4 [animation-delay:1420ms]">
              <a className="simple-button-primary" href="#projects">
                View Projects
              </a>
              <a className="simple-button-secondary" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="animate-rise mt-12 flex flex-wrap items-center justify-center gap-4 [animation-delay:1560ms]">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="minimal-social"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <a
              className="animate-rise mt-14 inline-flex items-center justify-center gap-3 text-sm font-medium text-slate-300 transition hover:text-[#a47bff] [animation-delay:1680ms]"
              href="#about"
            >
              <span className="scroll-dot border-white/20" />
              Scroll to continue
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
