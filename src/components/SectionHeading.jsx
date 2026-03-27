function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a47bff]">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-[var(--font-display)] text-3xl leading-none text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
        {description}
      </p>
    </div>
  )
}

export default SectionHeading
