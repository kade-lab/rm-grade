'use client'

import { useEffect, useState, useCallback } from 'react'

export default function ExitIntent() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  const dismiss = useCallback(() => {
    setVisible(false)
    setDismissed(true)
    // Don't show again this session
    try {
      sessionStorage.setItem('rmgrade-exit-dismissed', '1')
    } catch {
      // sessionStorage unavailable
    }
  }, [])

  useEffect(() => {
    // Only desktop — skip on touch devices
    if (typeof window === 'undefined') return
    if (window.innerWidth < 768) return

    try {
      if (sessionStorage.getItem('rmgrade-exit-dismissed')) return
    } catch {
      // ignore
    }

    // Wait 5s before enabling (don't trigger immediately)
    let enabled = false
    const enableTimer = setTimeout(() => { enabled = true }, 5000)

    const onMouseLeave = (e: MouseEvent) => {
      if (!enabled) return
      if (dismissed) return
      // Trigger when cursor moves toward top of screen
      if (e.clientY <= 10) {
        setVisible(true)
      }
    }

    document.addEventListener('mouseleave', onMouseLeave)
    return () => {
      clearTimeout(enableTimer)
      document.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [dismissed])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Wait — before you go"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#050a14]/85 backdrop-blur-sm"
        onClick={dismiss}
      />

      {/* Modal */}
      <div className="relative z-10 bg-[#0a1628] border border-[#d4922a]/40 rounded-2xl max-w-md w-full p-8 text-center shadow-2xl">
        {/* Close */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-white/30 hover:text-white/70 transition-colors text-2xl leading-none"
          aria-label="Close"
        >
          ×
        </button>

        {/* Icon */}
        <div className="w-14 h-14 rounded-full bg-[#d4922a]/10 border border-[#d4922a]/30 flex items-center justify-center mx-auto mb-5">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d4922a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
        </div>

        <p className="text-[#d4922a] text-xs font-semibold uppercase tracking-widest mb-2">
          Wait — before you leave
        </p>
        <h2 className="text-white font-black text-2xl sm:text-3xl mb-3">
          What would you pay to save<br />20–30 hours a month?
        </h2>
        <p className="text-white/50 text-sm leading-relaxed mb-7">
          The RM Grade is $50 — one time, yours forever. Every filmmaker who uses it
          wishes they&apos;d bought it sooner.
        </p>

        {/* CTA */}
        <a
          href="#get-it"
          onClick={dismiss}
          className="block w-full bg-[#d4922a] hover:bg-[#e8a840] text-[#050a14] font-bold py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] text-base mb-3"
        >
          Get The RM Grade — $50 →
        </a>

        <button
          onClick={dismiss}
          className="text-white/30 hover:text-white/50 text-sm transition-colors"
        >
          No thanks, I don&apos;t want to save time.
        </button>
      </div>
    </div>
  )
}
