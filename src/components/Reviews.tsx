const reviews = [
  {
    name: 'Your Name Here',
    handle: '@yourhandle',
    text: '"This is where your review will go. Real feedback from real filmmakers who use the RM Grade on their shoots."',
    avatar: null,
  },
  {
    name: 'Your Name Here',
    handle: '@yourhandle',
    text: '"Drop your honest review here. Talk about what changed for you — workflow, look, client feedback."',
    avatar: null,
  },
  {
    name: 'Your Name Here',
    handle: '@yourhandle',
    text: '"Share your experience. The good stuff. What would you tell another filmmaker on the fence?"',
    avatar: null,
  },
]

export default function Reviews() {
  return (
    <section className="bg-[#050a14] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#d4922a] text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            From the Community
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Reviews
          </h2>
          {/* REPLACE: remove this note when real reviews are collected */}
          <p className="text-white/30 text-sm mt-3 italic">
            Reviews coming soon — be the first to leave one after purchase.
          </p>
        </div>

        {/* Review cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="border border-dashed border-white/10 rounded-2xl bg-[#0a1628]/20 p-6"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(s => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#d4922a40">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-white/30 text-sm leading-relaxed mb-5 italic">{r.text}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* REPLACE: real avatar images */}
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10" />
                <div>
                  <p className="text-white/40 text-sm font-medium">{r.name}</p>
                  <p className="text-white/20 text-xs">{r.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
