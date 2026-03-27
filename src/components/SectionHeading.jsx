function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a47bff]">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-[var(--font-display)] text-[2.2rem] leading-[1.02] text-white sm:text-[2.8rem]">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
        {description}
      </p>
    </div>
  )
}

export default SectionHeading
