import Reveal from '../components/Reveal.jsx'

function AboutSection() {
  return (
    <Reveal
      as="section"
      id="about"
      variant="left"
      className="border-t border-white/6 px-5 py-18 sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="mx-auto grid w-full max-w-[1180px] items-start gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
        <div className="rounded-[1.75rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.14)]">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#a47bff] sm:text-base">
            About Me
          </p>
          <h2 className="mt-3 font-[var(--font-display)] text-[2.2rem] leading-[1.02] text-white sm:text-[2.8rem]">
            Software Developer
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-300 sm:text-base">
            Hey, I am Jeel. Currently I am pusring B.Tech 2nd year in Computer Science and Engineering at Pandit Deendayal Energy University, Gandhinagar.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-slate-200">
              Frontend Focus
            </span>
            <span className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-slate-200">
              B.Tech CSE
            </span>
            <span className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-slate-200">
              Based in Gujarat
            </span>
          </div>
        </div>

        <div className="grid gap-5">
          <Reveal
            variant="scale"
            delay={120}
            className="rounded-[1.75rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.14)]"
          >
            <h3 className="font-[var(--font-display)] text-[2.2rem] leading-[1.02] text-white sm:text-[2.8rem]">
              Personal Info
            </h3>
            <div className="mt-5 grid gap-3 text-[15px] leading-7 text-slate-300 sm:text-base">
              <div className="grid grid-cols-[140px_1fr] gap-3 border-b border-white/6 pb-3">
                <span className="font-medium text-white">Name</span>
                <span>Jeel</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-3 border-b border-white/6 pb-3">
                <span className="font-medium text-white">Age</span>
                <span>18</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-3 border-b border-white/6 pb-3">
                <span className="font-medium text-white">Location</span>
                <span>Rajkot, Gujarat</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-3 border-b border-white/6 pb-3">
                <span className="font-medium text-white">Email</span>
                <span className="break-all">jeelghetia07@gmail.com</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-3">
                <span className="font-medium text-white">Contact No.</span>
                <span>+91 98765 43210</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Reveal>
  )
}

export default AboutSection
