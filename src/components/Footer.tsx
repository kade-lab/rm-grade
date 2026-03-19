'use client'

import { useState } from 'react'

const TOS_CLAUSES = [
  { title: '1. All Sales Final', text: 'The RM Grade is a digital product. All sales are final. No refunds under any circumstances.' },
  { title: '2. Personal License', text: 'Non-exclusive, non-transferable license for one (1) individual user.' },
  { title: '3. No Redistribution', text: 'You may not share, sell, or distribute the file to any third party.' },
  { title: '4. No Reverse Engineering', text: 'The node contents are proprietary. Reverse engineering is prohibited.' },
  { title: '5. Commercial Use', text: 'May be used in commercial client work. Cannot be resold as a product.' },
  { title: '6. No Warranty', text: 'Provided as-is. No warranties regarding specific compatibility.' },
  { title: '7. Intellectual Property', text: 'All IP rights remain exclusively with Reid (Visuals by RM).' },
  { title: '8. Governing Law', text: 'Governed by the laws of the State of Michigan, USA.' },
]

function TOSModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#050a14]/90 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 bg-[#0a1628] border border-[#d4922a]/30 rounded-2xl max-w-2xl w-full max-h-[80vh] flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h3 className="text-white font-bold text-lg">Terms of Sale</h3>
          <button onClick={onClose} className="text-white/40 hover:text-white text-xl" aria-label="Close">×</button>
        </div>
        <div className="overflow-y-auto px-6 py-5 space-y-5 flex-1">
          {TOS_CLAUSES.map((c, i) => (
            <div key={i}>
              <h4 className="text-[#e8a840] font-semibold text-sm mb-1">{c.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
        <div className="px-6 py-4 border-t border-white/10">
          <button onClick={onClose} className="w-full bg-[#d4922a] text-[#050a14] font-bold py-3 rounded-xl transition-colors hover:bg-[#e8a840]">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Footer() {
  const [showTOS, setShowTOS] = useState(false)

  return (
    <>
      {showTOS && <TOSModal onClose={() => setShowTOS(false)} />}

      {/* Instagram follow section */}
      <section className="bg-[#050a14] py-20 px-6 border-t border-white/5">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-white/40 text-sm uppercase tracking-widest mb-4">Follow the work</p>

          {/* IG icon */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4922a]/20 to-[#e8a840]/10 border border-[#d4922a]/30 flex items-center justify-center mx-auto mb-5">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d4922a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </div>

          <h2 className="text-white font-black text-3xl sm:text-4xl mb-2">
            @visualsbyrm_
          </h2>
          <p className="text-white/40 text-sm mb-6">
            Behind-the-scenes, color breakdowns, and new grade announcements.
          </p>

          <a
            href="https://instagram.com/visualsbyrm_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#d4922a]/50 text-[#e8a840] hover:bg-[#d4922a]/10 font-medium px-8 py-3 rounded-full transition-all duration-200"
          >
            Follow on Instagram
          </a>
        </div>
      </section>

      {/* Footer bar */}
      <footer className="bg-[#050a14] border-t border-white/5 px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="shimmer-text font-black text-lg">The RM Grade</span>
            <span className="text-white/20 text-xs">by Visuals by RM</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-white/30">
            <button
              onClick={() => setShowTOS(true)}
              className="hover:text-[#d4922a] transition-colors"
            >
              Terms of Sale
            </button>
            <a
              href="https://instagram.com/visualsbyrm_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4922a] transition-colors"
            >
              @visualsbyrm_
            </a>
          </div>

          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Visuals by RM. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
