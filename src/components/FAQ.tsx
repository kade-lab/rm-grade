'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'What cameras is the RM Grade compatible with?',
    a: 'The RM Grade works with any camera format you can bring into DaVinci Resolve — Sony S-Log, Canon C-Log, RED IPP2, BRAW, ProRes Log, ARRI LogC, and more. It is camera-agnostic by design. You may need to apply a color space transform or input LUT first if your footage is in a log format — the quick-start guide walks you through this.',
  },
  {
    q: 'Does it work with DaVinci Resolve Free?',
    a: 'Yes. The RM Grade is fully compatible with the free version of DaVinci Resolve. You do not need a Studio license to install or use it. All 11 nodes function exactly the same in both versions.',
  },
  {
    q: 'Will I get updates when you release new versions?',
    a: 'The RM Grade v1 is a complete, standalone product. Future versions or genre-specific grades will be released separately. Your purchase gives you permanent access to the version you bought — no recurring fees, no expiration.',
  },
  {
    q: 'What is your refund policy?',
    a: 'All sales are final. Because the RM Grade is a digital product that is delivered instantly and cannot be returned, we do not offer refunds under any circumstances. Please review the before/after comparisons carefully before purchasing. If you have questions before buying, DM @visualsbyrm_ on Instagram.',
  },
  {
    q: 'How do I install it?',
    a: 'After purchase, you will receive a .drp file. Open DaVinci Resolve, go to the Color page, right-click in the Gallery panel, and select "Import Power Grade." Select the .drp file and it will appear in your gallery, ready to apply. The included PDF guide walks through every step with screenshots.',
  },
  {
    q: 'Can I see what is inside the nodes?',
    a: 'No. The internal structure of the 11 nodes is proprietary and protected under the Terms of Sale. You can view, adjust, and apply every node — but the internal node structure is locked. Attempting to reverse-engineer or redistribute the node contents is a violation of the license. See the full Terms of Sale for details.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <section className="bg-[#050a14] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#d4922a] text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            Common Questions
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">FAQ</h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
                open === i
                  ? 'border-[#d4922a]/50 bg-[#0a1628]/80'
                  : 'border-white/5 bg-[#0a1628]/30 hover:border-white/10'
              }`}
            >
              {/* Question row */}
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => toggle(i)}
                aria-expanded={open === i}
              >
                <span className={`font-semibold text-base sm:text-lg pr-4 ${open === i ? 'text-[#e8a840]' : 'text-white'}`}>
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 ${
                    open === i
                      ? 'border-[#d4922a] bg-[#d4922a]/20 rotate-45'
                      : 'border-white/20 bg-transparent'
                  }`}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 2v8M2 6h8"
                      stroke={open === i ? '#d4922a' : 'white'}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>

              {/* Answer */}
              <div
                className={`faq-answer ${open === i ? 'open' : ''}`}
              >
                <div className="px-6 pb-5">
                  <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <p className="text-center text-white/40 text-sm mt-10">
          Still have questions?{' '}
          <a
            href="https://instagram.com/visualsbyrm_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4922a] hover:text-[#e8a840] transition-colors"
          >
            DM @visualsbyrm_ on Instagram
          </a>
        </p>
      </div>
    </section>
  )
}
