import Reveal from '../components/Reveal.jsx'

function ContactSection() {
  return (
    <Reveal
      as="section"
      id="contact"
      variant="scale"
      className="relative min-h-[76vh] overflow-hidden px-5 pb-24 pt-28 sm:px-8 lg:px-10"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(164,123,255,0.09),rgba(120,182,255,0.05)_40%,transparent_70%)] blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#a47bff] sm:text-base">
            Contact
          </p>
          <h2 className="mt-3 font-[var(--font-display)] text-[2.2rem] leading-[1.02] text-white sm:text-[2.8rem]">
            Let&apos;s connect.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Open to new projects, collaborations, and opportunities. Reach out and let&apos;s build something great.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-2xl">
          {[
            { label: 'Email', value: 'jeelghetia07@gmail.com', href: 'mailto:jeelghetia07@gmail.com' },
            { label: 'Location', value: 'Rajkot, Gujarat, IN', href: null },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/6 bg-white/2 p-4 transition-all duration-200 hover:border-[#a47bff]/25 hover:bg-[#a47bff]/4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a47bff]">
                {item.label}
              </p>
              {item.href ? (
                <a href={item.href} className="mt-1.5 block break-all text-sm text-slate-200 transition hover:text-[#c9b2ff]">
                  {item.value}
                </a>
              ) : (
                <p className="mt-1.5 text-sm text-slate-300">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a className="simple-button-primary" href="mailto:jeelghetia07@gmail.com">
            Email Me
          </a>
          <a className="simple-button-secondary" href="#home">
            Back to Top ^
          </a>
        </div>

        <Reveal variant="up" delay={300} className="mt-20 border-t border-white/5 pt-8">
          <p className="text-sm text-slate-500">
            Designed &amp; built by <span className="text-[#a47bff]">Jeel Ghetia</span> · {new Date().getFullYear()}
          </p>
        </Reveal>
      </div>
    </Reveal>
  )
}

export default ContactSection
