'use client'

import { useState } from 'react'

// ── Terms of Sale content ──────────────────────────────────────
const TOS_CLAUSES = [
  {
    title: '1. Digital Product — All Sales Final',
    text: 'The RM Grade is a digital product delivered immediately upon purchase. Due to the nature of digital goods, all sales are final. No refunds, exchanges, or chargebacks will be honored under any circumstances.',
  },
  {
    title: '2. License Grant',
    text: 'Upon purchase, you are granted a non-exclusive, non-transferable, personal license to use the RM Grade on your own projects. This license is for one (1) individual user.',
  },
  {
    title: '3. No Redistribution',
    text: 'You may not share, sell, give away, upload, distribute, or make the RM Grade file available to any third party in any form, paid or unpaid. Each license is for a single user only.',
  },
  {
    title: '4. No Reverse Engineering',
    text: 'You may not attempt to reverse-engineer, deconstruct, copy, or replicate the internal node structure of the RM Grade. The node contents are proprietary intellectual property of Reid (Visuals by RM).',
  },
  {
    title: '5. Commercial Use',
    text: 'The RM Grade may be used in commercial client work. You may not sell the grade itself as part of your own product or service offering.',
  },
  {
    title: '6. No Warranty',
    text: 'The RM Grade is provided as-is. Visuals by RM makes no warranties regarding compatibility with specific hardware, software versions, or use cases beyond what is described on this page.',
  },
  {
    title: '7. Intellectual Property',
    text: 'All intellectual property rights in and to the RM Grade, including its node structure, methodology, and design, remain exclusively with Reid (Visuals by RM).',
  },
  {
    title: '8. Governing Law',
    text: 'These terms are governed by the laws of the State of Michigan, United States. By purchasing, you agree to these terms in full.',
  },
]

// ── TOS Modal ─────────────────────────────────────────────────
function TOSModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#050a14]/90 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 bg-[#0a1628] border border-[#d4922a]/30 rounded-2xl max-w-2xl w-full max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h3 className="text-white font-bold text-lg">Terms of Sale</h3>
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white transition-colors text-xl leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        {/* Content */}
        <div className="overflow-y-auto px-6 py-5 space-y-5 flex-1">
          {TOS_CLAUSES.map((clause, i) => (
            <div key={i}>
              <h4 className="text-[#e8a840] font-semibold text-sm mb-1">{clause.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">{clause.text}</p>
            </div>
          ))}
        </div>
        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="w-full bg-[#d4922a] hover:bg-[#e8a840] text-[#050a14] font-bold py-3 rounded-xl transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Lead Form ─────────────────────────────────────────────────
export default function LeadForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    ig: '',
    phone: '',
    tos: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [showTOS, setShowTOS] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required.'
    if (!form.ig.trim()) e.ig = 'Instagram handle is required.'
    if (!form.tos) e.tos = 'You must agree to the Terms of Sale.'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    // TODO: send form data to your CRM / email list
    // e.g. POST to /api/lead with form data
    setSubmitted(true)
  }

  const field = (key: keyof typeof form, val: string) => {
    setForm(f => ({ ...f, [key]: val }))
    if (errors[key]) setErrors(e => { const n = { ...e }; delete n[key]; return n })
  }

  return (
    <>
      {showTOS && <TOSModal onClose={() => setShowTOS(false)} />}

      <section id="get-it" className="bg-[#050a14] py-24 px-6">
        {/* Divider */}
        <div className="max-w-5xl mx-auto">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d4922a]/40 to-transparent mb-24" />
        </div>

        <div className="max-w-xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <p className="text-[#d4922a] text-sm font-semibold uppercase tracking-[0.25em] mb-3">
              Get Instant Access
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              Get The RM Grade
            </h2>
            <p className="text-white/50 mt-4">
              Fill out your info below to unlock your purchase link.
            </p>
          </div>

          {submitted ? (
            /* ── Thank you + unlock ── */
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#d4922a]/20 border border-[#d4922a]/50 flex items-center justify-center mx-auto mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d4922a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-2xl mb-2">You&apos;re in.</h3>
              <p className="text-white/50 mb-8">Click below to complete your purchase.</p>

              {/* ── Buy button — REPLACE with Square checkout link ── */}
              <a
                href="REPLACE_WITH_SQUARE_CHECKOUT_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="pulse-gold inline-block bg-[#d4922a] hover:bg-[#e8a840] text-[#050a14] font-black text-xl px-12 py-5 rounded-full transition-all duration-200 hover:scale-105"
              >
                Buy Now — $50
              </a>

              <p className="text-white/30 text-xs mt-4">
                All Sales Final · Digital delivery upon purchase
              </p>
            </div>
          ) : (
            /* ── Lead capture form ── */
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-white/70 text-sm font-medium mb-1.5" htmlFor="lf-name">
                  Full Name <span className="text-[#d4922a]">*</span>
                </label>
                <input
                  id="lf-name"
                  type="text"
                  value={form.name}
                  onChange={e => field('name', e.target.value)}
                  placeholder="Your name"
                  className={`w-full bg-[#0a1628] border ${errors.name ? 'border-red-500' : 'border-white/10 focus:border-[#d4922a]'} rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none transition-colors text-sm`}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-white/70 text-sm font-medium mb-1.5" htmlFor="lf-email">
                  Email <span className="text-[#d4922a]">*</span>
                </label>
                <input
                  id="lf-email"
                  type="email"
                  value={form.email}
                  onChange={e => field('email', e.target.value)}
                  placeholder="you@example.com"
                  className={`w-full bg-[#0a1628] border ${errors.email ? 'border-red-500' : 'border-white/10 focus:border-[#d4922a]'} rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none transition-colors text-sm`}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Instagram */}
              <div>
                <label className="block text-white/70 text-sm font-medium mb-1.5" htmlFor="lf-ig">
                  Instagram Handle <span className="text-[#d4922a]">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm">@</span>
                  <input
                    id="lf-ig"
                    type="text"
                    value={form.ig}
                    onChange={e => field('ig', e.target.value.replace('@', ''))}
                    placeholder="yourhandle"
                    className={`w-full bg-[#0a1628] border ${errors.ig ? 'border-red-500' : 'border-white/10 focus:border-[#d4922a]'} rounded-xl pl-8 pr-4 py-3 text-white placeholder-white/30 outline-none transition-colors text-sm`}
                  />
                </div>
                {errors.ig && <p className="text-red-400 text-xs mt-1">{errors.ig}</p>}
              </div>

              {/* Phone (optional) */}
              <div>
                <label className="block text-white/70 text-sm font-medium mb-1.5" htmlFor="lf-phone">
                  Phone <span className="text-white/30 text-xs">(optional)</span>
                </label>
                <input
                  id="lf-phone"
                  type="tel"
                  value={form.phone}
                  onChange={e => field('phone', e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-[#0a1628] border border-white/10 focus:border-[#d4922a] rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none transition-colors text-sm"
                />
              </div>

              {/* TOS checkbox */}
              <div className={`flex items-start gap-3 p-4 rounded-xl border ${errors.tos ? 'border-red-500/50 bg-red-500/5' : 'border-white/5 bg-[#0a1628]/40'}`}>
                <input
                  id="lf-tos"
                  type="checkbox"
                  checked={form.tos}
                  onChange={e => {
                    setForm(f => ({ ...f, tos: e.target.checked }))
                    if (errors.tos) setErrors(er => { const n = { ...er }; delete n.tos; return n })
                  }}
                  className="mt-0.5 w-4 h-4 accent-[#d4922a] cursor-pointer flex-shrink-0"
                />
                <label htmlFor="lf-tos" className="text-white/60 text-sm leading-relaxed cursor-pointer">
                  I have read and agree to the{' '}
                  <button
                    type="button"
                    onClick={() => setShowTOS(true)}
                    className="text-[#d4922a] hover:text-[#e8a840] underline transition-colors"
                  >
                    Terms of Sale
                  </button>
                  , including the no-refund policy and no-redistribution clause. I understand all sales are final.
                </label>
              </div>
              {errors.tos && <p className="text-red-400 text-xs -mt-3">{errors.tos}</p>}

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#d4922a] hover:bg-[#e8a840] text-[#050a14] font-black text-lg py-4 rounded-xl transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
              >
                Unlock My Purchase Link →
              </button>

              <p className="text-center text-white/30 text-xs">
                No spam. We hate it too.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
