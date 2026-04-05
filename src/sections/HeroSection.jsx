import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const navItems = [
  { label: 'Home',     href: '#home'     },
  { label: 'About Me', href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Resume',   href: '#resume'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

const socialLinks = [
  { label: 'GitHub',    href: 'https://github.com/jeelghetia07',    icon: FaGithub    },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/jeel-ghetia-a6849b316/',  icon: FaLinkedinIn },
  { label: 'Instagram', href: 'https://instagram.com/jeel_ghetia_', icon: FaInstagram  },
]

function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden px-0 pb-10 pt-5"
    >
      {/* Subtle hero-only radial glow — sits behind nav */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(164,123,255,0.13),transparent)]" />

      <div className="hero-noise absolute inset-0 opacity-20" />

      {/* ── Nav ── */}
      <nav className="relative z-10 flex items-center justify-between gap-4 px-5 pb-5 pt-1 sm:px-8 lg:px-10">
        {/* Logo */}
        <a
          href="#home"
          className="group inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/4 p-2.5 transition hover:border-[#a47bff]/40 hover:bg-[#a47bff]/10"
          aria-label="Jeel Ghetia home"
        >
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[linear-gradient(135deg,rgba(164,123,255,0.18),rgba(120,182,255,0.12))]">
            <span className="absolute inset-[1px] rounded-[10px] border border-white/10" />
            <span className="font-[var(--font-display)] text-lg font-semibold tracking-[0.08em] text-white transition group-hover:text-[#c9b2ff]">
              JG
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden flex-wrap justify-end gap-4 text-sm text-slate-200 lg:flex">
          {navItems.map((item) => (
            <a key={item.label} className="minimal-nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── Hero content ── */}
      <div className="relative z-10 flex flex-1 items-center px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-24">
        <div className="w-full">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            {/* Eyebrow badge */}
            <div
              className="animate-rise mb-6 inline-flex items-center gap-2 rounded-full border border-[#a47bff]/25 bg-[#a47bff]/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-[#c9b2ff]"
              style={{ animationDelay: '0ms' }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#a47bff] shadow-[0_0_8px_#a47bff]" />
              Available for opportunities
            </div>

            <div className="space-y-3 sm:space-y-5">
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
                  Hi, I&apos;m Jeel Ghetia
                </h1>
              </div>
              <div className="hero-sweep-wrap flex justify-center">
                <h2
                  className="hero-sweep-line hero-sweep-sub text-[#a47bff]"
                  style={{
                    animationDelay: '1200ms',
                    '--hero-steps': 50,
                    '--hero-duration': '1.7s',
                    '--hero-width': '18ch',
                  }}
                >
                  Software Developer
                </h2>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="animate-rise mt-10 flex flex-wrap justify-center gap-4 [animation-delay:1420ms]">
              <a className="simple-button-primary" href="#projects">
                View Projects
              </a>
              <a className="simple-button-secondary" href="#contact">
                Contact Me
              </a>
            </div>

            {/* Socials */}
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

            {/* Scroll CTA */}
            <a
              className="animate-rise mt-14 inline-flex items-center justify-center gap-3 text-sm font-medium text-slate-400 transition hover:text-[#a47bff] [animation-delay:1680ms]"
              href="#about"
            >
              <span className="scroll-dot" />
              Scroll to continue
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection