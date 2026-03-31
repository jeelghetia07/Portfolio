import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const infoItems = [
  ['Name',       'Jeel'],
  ['Age',        '18'],
  ['Location',   'Rajkot, Gujarat'],
  ['Email',      'jeelghetia07@gmail.com'],
  ['Contact No.', '+91 98765 43210'],
]

function AboutSection() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      /* ─── Beam breathing loop ── */
      gsap.to('.about-beam', {
        scaleY: 1.06, opacity: 0.38, duration: 3,
        ease: 'sine.inOut', yoyo: true, repeat: -1,
        transformOrigin: 'center top',
      })

      /* ─── Scan line on enter ── */
      gsap.fromTo('.about-scan',
        { yPercent: 0, opacity: 1 },
        { yPercent: 10000, opacity: 0, duration: 2.2, ease: 'power1.inOut',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true } }
      )

      /* ─── Initial states ── */
      gsap.set('.about-stage', { opacity: 0.6, scale: 0.97 })
      gsap.set('.about-glow', { opacity: 0.1, xPercent: -22, yPercent: 10, rotate: -8 })
      gsap.set('.about-beam', { opacity: 0.04, scaleY: 0.5, transformOrigin: 'center top' })
      gsap.set('.about-left', { xPercent: -8, y: 48, rotateY: -12, transformOrigin: 'left center' })
      gsap.set('.about-right', { xPercent: 8, y: -40, rotateY: 12, transformOrigin: 'right center' })
      gsap.set('.about-label-inner, .about-title-inner, .about-copy-inner, .about-side-title-inner', { y: 110, opacity: 0 })
      gsap.set('.about-chip', { yPercent: 130, opacity: 0, scale: 0.85 })
      gsap.set('.about-info-row', { y: 24, opacity: 0 })

      /* ─── Scroll timeline ── */
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%', end: 'top 5%', scrub: 1,
        },
      })

      tl.to('.about-stage', { opacity: 1, scale: 1 }, 0)
        .to('.about-glow', { xPercent: 18, yPercent: -8, rotate: 10, opacity: 0.22 }, 0)
        .to('.about-beam', { scaleY: 1, opacity: 0.16 }, 0.02)
        .to('.about-left',  { xPercent: 0, y: 0, rotateY: 0, ease: 'back.out(1.4)' }, 0.04)
        .to('.about-right', { xPercent: 0, y: 0, rotateY: 0, ease: 'back.out(1.4)' }, 0.08)
        .to('.about-label-inner',      { y: 0, opacity: 1, ease: 'power3.out' }, 0.14)
        .to('.about-title-inner',      { y: 0, opacity: 1, ease: 'power3.out' }, 0.20)
        .to('.about-side-title-inner', { y: 0, opacity: 1, ease: 'power3.out' }, 0.24)
        .to('.about-copy-inner',       { y: 0, opacity: 1, ease: 'power2.out' }, 0.30)
        .to('.about-chip',     { yPercent: 0, opacity: 1, scale: 1, ease: 'back.out(2)', stagger: 0.07 }, 0.38)
        .to('.about-info-row', { y: 0, opacity: 1, ease: 'power3.out', stagger: 0.08 }, 0.44)

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative px-5 py-28 sm:px-8 sm:py-32 lg:px-10 overflow-hidden"
    >
      {/* Nebula glow */}
      <div className="about-glow pointer-events-none absolute inset-x-0 top-[16%] h-[22rem] rounded-full bg-[radial-gradient(circle,_rgba(164,123,255,0.11),rgba(120,182,255,0.05)_42%,transparent_72%)] blur-3xl" />

      {/* Center beam */}
      <div className="about-beam pointer-events-none absolute left-1/2 top-[10%] h-[78%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#a47bff]/40 to-transparent" />

      {/* Entry scan line */}
      <div className="about-scan pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#a47bff]/30 to-transparent" />

      <div className="about-stage mx-auto w-full max-w-[1180px] lg:min-h-[72vh] lg:py-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">

          {/* Left */}
          <div className="about-left relative z-10 will-change-transform">
            <div className="overflow-hidden">
              <p className="about-label-inner text-sm font-semibold uppercase tracking-[0.3em] text-[#a47bff] sm:text-base">
                About Me
              </p>
            </div>
            <div className="overflow-hidden mt-3">
              <h2 className="about-title-inner font-[var(--font-display)] text-[2.3rem] leading-[1.02] text-white sm:text-[3rem]">
                Software Developer
              </h2>
            </div>
            <div className="overflow-hidden mt-5">
              <p className="about-copy-inner max-w-xl text-[15px] leading-8 text-slate-300 sm:text-base">
                Hey, I am Jeel. Currently pursuing B.Tech 2nd year in Computer
                Science and Engineering at Pandit Deendayal Energy University,
                Gandhinagar.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              {['Frontend Focus', 'B.Tech CSE', 'Based in Gujarat'].map((chip) => (
                <span
                  key={chip}
                  className="about-chip rounded-full border border-[#a47bff]/20 bg-[#a47bff]/6 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-[#c9b2ff] transition-colors hover:border-[#a47bff]/45 hover:bg-[#a47bff]/12"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="about-right relative z-10 will-change-transform">
            <div className="overflow-hidden">
              <h3 className="about-side-title-inner font-[var(--font-display)] text-[2.3rem] leading-[1.02] text-white sm:text-[3rem]">
                Personal Info
              </h3>
            </div>
            <div className="mt-6 grid gap-0 text-[15px] leading-7 text-slate-300 sm:text-base">
              {infoItems.map(([label, value]) => (
                <div
                  key={label}
                  className="about-info-row grid grid-cols-[140px_1fr] gap-3 border-b border-white/6 px-2 py-3 rounded-md transition-all duration-200 hover:bg-[#a47bff]/6 hover:pl-4"
                >
                  <span className="font-medium text-white">{label}</span>
                  <span className={label === 'Email' ? 'break-all' : ''}>{value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection