const steps = [
  {
    number: '01',
    title: 'Import',
    desc: 'Download the .drp file. Open DaVinci Resolve. Import the Power Grade into your gallery in seconds.',
    detail: 'Works with Resolve Free and Studio.',
  },
  {
    number: '02',
    title: 'Adjust',
    desc: 'Apply it to your clip. Dial in exposure, push the nodes to taste. Each node is fully tunable — make it yours.',
    detail: 'Takes 2–5 minutes per project.',
  },
  {
    number: '03',
    title: 'Export',
    desc: 'Render your timeline. Ship the project. What used to take hours now takes minutes — every single time.',
    detail: 'Professional output, every frame.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-[#050a14] py-24 px-6">
      {/* Divider */}
      <div className="max-w-6xl mx-auto">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d4922a]/30 to-transparent mb-24" />

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#d4922a] text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            Simple Setup
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            How It Works
          </h2>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-3 gap-8 relative">
          {/* Connector line — desktop only */}
          <div className="hidden sm:block absolute top-8 left-1/6 right-1/6 h-px bg-gradient-to-r from-[#d4922a]/0 via-[#d4922a]/40 to-[#d4922a]/0" />

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center relative">
              {/* Step number */}
              <div className="relative z-10 w-16 h-16 rounded-full border-2 border-[#d4922a] bg-[#050a14] flex items-center justify-center mb-6">
                <span className="shimmer-text font-black text-lg">{step.number}</span>
              </div>

              <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3">{step.desc}</p>
              <p className="text-[#d4922a] text-xs font-medium">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
