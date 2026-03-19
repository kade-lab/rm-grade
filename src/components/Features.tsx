const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d4922a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Workflow Speed',
    desc: 'Cut your color session from hours to minutes. The RM Grade does the heavy lifting so you can focus on the story.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d4922a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        <path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
      </svg>
    ),
    title: 'Full Creative Control',
    desc: 'Every node is adjustable. Push it cinematic, pull it natural — the look is your canvas, not a preset prison.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d4922a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <circle cx="12" cy="14" r="1" />
      </svg>
    ),
    title: 'Any Camera',
    desc: 'Sony, Canon, RED, BRAW, Log formats — the RM Grade is camera-agnostic and handles any footage you throw at it.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d4922a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Battle-Tested',
    desc: 'Built and refined on real commercial shoots. Automotive, portrait, landscape — it holds up across the board.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d4922a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: 'Not a LUT',
    desc: 'LUTs bake in a look with no flexibility. The RM Grade is a full node tree — transparent, adjustable, and alive.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d4922a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Yours Forever',
    desc: 'One purchase. No subscriptions, no renewals, no monthly gates. Buy it once — use it on every project for life.',
  },
]

export default function Features() {
  return (
    <section className="bg-[#050a14] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#d4922a] text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            Why the RM Grade
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Built Different
          </h2>
          <p className="text-white/50 mt-4 text-lg max-w-xl mx-auto">
            Not a preset. Not a LUT. A real professional tool.
          </p>
        </div>

        {/* 6-card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group border border-white/5 hover:border-[#d4922a]/30 rounded-2xl bg-[#0a1628]/40 hover:bg-[#0a1628]/70 p-6 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-[#d4922a]/10 border border-[#d4922a]/20 flex items-center justify-center mb-4 group-hover:bg-[#d4922a]/20 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
