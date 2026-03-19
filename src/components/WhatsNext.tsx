const teasers = [
  {
    label: 'V2',
    title: 'RM Grade V2',
    desc: 'The next evolution. More nodes, more control, even faster workflow. Built from lessons learned on real commercial shoots.',
    tag: 'COMING SOON',
  },
  {
    label: 'GENRE',
    title: 'Genre Grades',
    desc: 'Dedicated grades for portrait, lifestyle, night shoots, and golden hour. Signature looks for every scenario.',
    tag: 'COMING SOON',
  },
  {
    label: 'CAM',
    title: 'Camera Packs',
    desc: 'Camera-specific starting points — pre-tuned for Sony FX, Canon R5, RED Komodo, and more. Plug in and go.',
    tag: 'COMING SOON',
  },
]

export default function WhatsNext() {
  return (
    <section className="bg-[#050a14] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d4922a]/20 to-transparent mb-24" />

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#d4922a] text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            The Roadmap
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            What&apos;s Next
          </h2>
          <p className="text-white/50 mt-4 text-base max-w-lg mx-auto">
            The RM Grade is just the beginning. Here&apos;s what Reid is building next.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {teasers.map((t, i) => (
            <div
              key={i}
              className="relative border border-white/5 rounded-2xl bg-[#0a1628]/30 p-6 overflow-hidden"
            >
              {/* Blurred background label */}
              <span className="absolute -right-3 -bottom-3 text-8xl font-black text-white/3 select-none pointer-events-none">
                {t.label}
              </span>

              {/* COMING SOON badge */}
              <span className="inline-block bg-[#d4922a]/10 border border-[#d4922a]/30 text-[#d4922a] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                {t.tag}
              </span>

              <h3 className="text-white font-bold text-xl mb-3">{t.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm">
            Follow{' '}
            <a
              href="https://instagram.com/visualsbyrm_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4922a] hover:text-[#e8a840] transition-colors"
            >
              @visualsbyrm_
            </a>{' '}
            for launch announcements.
          </p>
        </div>
      </div>
    </section>
  )
}
