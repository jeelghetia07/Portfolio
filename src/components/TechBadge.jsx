const techStyles = {
  React: {
    accent: '#61dafb',
    icon: (
      <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden="true">
        <circle cx="32" cy="32" r="4.5" fill="#61dafb" />
        <ellipse
          cx="32"
          cy="32"
          rx="20"
          ry="8"
          fill="none"
          stroke="#61dafb"
          strokeWidth="3"
        />
        <ellipse
          cx="32"
          cy="32"
          rx="20"
          ry="8"
          fill="none"
          stroke="#61dafb"
          strokeWidth="3"
          transform="rotate(60 32 32)"
        />
        <ellipse
          cx="32"
          cy="32"
          rx="20"
          ry="8"
          fill="none"
          stroke="#61dafb"
          strokeWidth="3"
          transform="rotate(120 32 32)"
        />
      </svg>
    ),
  },
  JavaScript: {
    accent: '#f7df1e',
    icon: (
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f7df1e] text-sm font-black text-[#111827]">
        JS
      </div>
    ),
  },
  HTML: {
    accent: '#e34f26',
    icon: (
      <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden="true">
        <polygon points="12,8 52,8 48,52 32,57 16,52" fill="#e34f26" />
        <polygon points="32,13 48,13 45,49 32,53" fill="#ef652a" />
        <text
          x="32"
          y="39"
          textAnchor="middle"
          fontSize="18"
          fontWeight="700"
          fill="#fff"
        >
          5
        </text>
      </svg>
    ),
  },
  CSS: {
    accent: '#1572b6',
    icon: (
      <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden="true">
        <polygon points="12,8 52,8 48,52 32,57 16,52" fill="#1572b6" />
        <polygon points="32,13 48,13 45,49 32,53" fill="#33a9dc" />
        <text
          x="32"
          y="39"
          textAnchor="middle"
          fontSize="18"
          fontWeight="700"
          fill="#fff"
        >
          3
        </text>
      </svg>
    ),
  },
  Java: {
    accent: '#f89820',
    icon: (
      <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden="true">
        <path
          d="M24 41h18c0 6-4 9-9 9s-9-3-9-9Z"
          fill="none"
          stroke="#f89820"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23 26c7-4 2-8 9-12M33 24c7-4 1-8 8-12"
          fill="none"
          stroke="#5382a1"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M46 35c4 0 6-2 6-4s-2-4-6-4"
          fill="none"
          stroke="#f89820"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  Python: {
    accent: '#4b8bbe',
    icon: (
      <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden="true">
        <path
          d="M32 10c-10 0-10 5-10 10v8h20v4H16c-6 0-10 4-10 10s4 10 10 10h8v-10c0-5 4-10 10-10h10c6 0 10-4 10-10V20c0-6-4-10-10-10H32Z"
          fill="#4b8bbe"
        />
        <path
          d="M32 54c10 0 10-5 10-10v-8H22v-4h26c6 0 10-4 10-10s-4-10-10-10h-8v10c0 5-4 10-10 10H20c-6 0-10 4-10 10v2c0 6 4 10 10 10h12Z"
          fill="#ffd43b"
        />
        <circle cx="28" cy="20" r="2.2" fill="#fff" />
        <circle cx="36" cy="44" r="2.2" fill="#fff" />
      </svg>
    ),
  },
  'C++': {
    accent: '#659ad2',
    icon: (
      <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden="true">
        <polygon points="24,10 42,20 42,44 24,54 6,44 6,20" fill="#659ad2" />
        <text
          x="23"
          y="37"
          textAnchor="middle"
          fontSize="20"
          fontWeight="700"
          fill="#fff"
        >
          C
        </text>
        <text
          x="44"
          y="30"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill="#fff"
        >
          ++
        </text>
      </svg>
    ),
  },
}

function TechBadge({ skill }) {
  const config = techStyles[skill]

  return (
    <article
      className="group flex min-w-[210px] items-center gap-4 rounded-[1.4rem] border border-white/8 bg-[#101927] px-5 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition hover:-translate-y-1"
      style={{ '--accent': config.accent }}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-[1.1rem] border border-white/8 bg-[#0c131d] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
        {config.icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Skill
        </p>
        <p className="mt-1 text-lg font-semibold text-white">{skill}</p>
      </div>
      <div
        className="ml-auto h-3 w-3 rounded-full shadow-[0_0_20px_var(--accent)]"
        style={{ backgroundColor: config.accent }}
      />
    </article>
  )
}

export default TechBadge
