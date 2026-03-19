export default function Included() {
  return (
    <section className="bg-[#050a14] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#d4922a] text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            What You Get
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            What&apos;s Included
          </h2>
        </div>

        {/* Main card */}
        <div className="border border-[#d4922a]/30 rounded-2xl bg-[#0a1628]/50 overflow-hidden">
          {/* Top banner */}
          <div className="bg-gradient-to-r from-[#d4922a]/20 to-[#e8a840]/10 border-b border-[#d4922a]/20 px-8 py-5 flex items-center justify-between">
            <div>
              <h3 className="text-white font-bold text-xl">The RM Grade Power Grade</h3>
              <p className="text-white/50 text-sm mt-0.5">DaVinci Resolve (.drp file)</p>
            </div>
            <div className="text-right">
              <p className="shimmer-text text-3xl font-black">$50</p>
              <p className="text-white/40 text-xs">one-time — yours forever</p>
            </div>
          </div>

          <div className="p-8">
            {/* 11 nodes callout */}
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#d4922a]/20 border border-[#d4922a]/30 flex items-center justify-center">
                <span className="text-[#e8a840] font-black text-lg">11</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">11 Purpose-Built Nodes</h4>
                <p className="text-white/50 text-sm mt-1 leading-relaxed">
                  Each node was engineered with a specific intent — together they create a
                  signature cinematic look that works across cameras, lighting conditions, and
                  subject matter. What&apos;s inside stays inside.
                </p>
              </div>
            </div>

            {/* Feature list */}
            <ul className="space-y-4">
              {[
                {
                  icon: '⚡',
                  title: 'Instant one-click import',
                  desc: 'Drop it into any Resolve project in under 60 seconds.',
                },
                {
                  icon: '🎛',
                  title: 'Full parameter control',
                  desc: 'Every node is tunable. Dial it to taste — subtle or cinematic.',
                },
                {
                  icon: '📷',
                  title: 'Any camera, any log format',
                  desc: 'Works with Sony, Canon, RED, BRAW, ProRes Log, and more.',
                },
                {
                  icon: '🔐',
                  title: 'Node contents protected',
                  desc: 'The look is the product. What\'s inside is Reid\'s proprietary process — not included in the license.',
                },
                {
                  icon: '📄',
                  title: 'PDF quick-start guide',
                  desc: 'Get up and running fast with step-by-step setup instructions.',
                },
                {
                  icon: '♾️',
                  title: 'Lifetime access',
                  desc: 'Buy once. Use forever. No subscriptions, no expiration.',
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 py-4 border-t border-white/5 first:border-0 first:pt-0">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-white font-semibold">{item.title}</p>
                    <p className="text-white/50 text-sm mt-0.5">{item.desc}</p>
                  </div>
                  <div className="ml-auto flex-shrink-0">
                    <div className="w-5 h-5 rounded-full bg-[#d4922a]/20 border border-[#d4922a]/50 flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#d4922a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Value prop banner */}
          <div className="border-t border-[#d4922a]/20 bg-[#d4922a]/5 px-8 py-5 text-center">
            <p className="text-[#e8a840] font-semibold text-lg">
              What would you pay to save 2–3 hours on every single project?
            </p>
            <p className="text-white/50 text-sm mt-2">
              At 10 projects a month, that&apos;s 20–30 hours back — every month.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
