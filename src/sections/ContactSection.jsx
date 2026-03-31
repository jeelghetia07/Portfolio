import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

function ContactSection() {
  return (
    <Reveal
      as="section"
      id="contact"
      variant="scale"
      className="relative min-h-[76vh] overflow-hidden px-5 pb-24 pt-28 sm:px-8 lg:px-10"
    >
      {/* Final section nebula — big, centered, fading out at bottom */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(164,123,255,0.09),rgba(120,182,255,0.05)_40%,transparent_70%)] blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect."
          description="Open to new projects, collaborations, and opportunities. Reach out and let's build something great."
        />

        {/* Contact cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-2xl">
          {[
            { label: 'Email', value: 'jeelghetia07@gmail.com', href: 'mailto:jeelghetia07@gmail.com' },
            { label: 'Location', value: 'Rajkot, Gujarat, IN', href: null },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/6 bg-white/2 p-4 transition-all duration-200 hover:border-[#a47bff]/25 hover:bg-[#a47bff]/4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a47bff]">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="mt-1.5 block text-sm text-slate-200 transition hover:text-[#c9b2ff] break-all">
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
            Back to Top ↑
          </a>
        </div>

        {/* Footer signature */}
        <Reveal variant="up" delay={300} className="mt-20 border-t border-white/5 pt-8">
          <p className="text-sm text-slate-500">
            Designed & built by{' '}
            <span className="text-[#a47bff]">Jeel Ghetia</span> · {new Date().getFullYear()}
          </p>
        </Reveal>
      </div>
    </Reveal>
  )
}

export default ContactSection