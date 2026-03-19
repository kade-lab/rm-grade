'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked — video stays paused (acceptable)
      })
    }
  }, [])

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* ── Video background ── */}
      {/* REPLACE: swap /video/hero-bg.mp4 with your actual hero reel */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        aria-hidden="true"
      />

      {/* Full dark overlay at 60% opacity */}
      <div className="absolute inset-0 bg-[#050a14]/60" aria-hidden="true" />

      {/* Top gradient fade */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(5,10,20,0.9) 0%, transparent 100%)' }}
        aria-hidden="true"
      />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(5,10,20,1) 0%, rgba(5,10,20,0.6) 60%, transparent 100%)' }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <p className="text-[#d4922a] text-sm font-semibold uppercase tracking-[0.25em] mb-6">
          Visuals by RM presents
        </p>

        {/* Main title with gold shimmer */}
        <h1 className="shimmer-text text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-6">
          The RM Grade
        </h1>

        {/* Subtitle */}
        <p className="text-white/80 text-xl sm:text-2xl font-light max-w-2xl mx-auto mb-4 leading-relaxed">
          A DaVinci Resolve power grade that makes every frame look cinematic —
          <br className="hidden sm:block" />
          built for automotive and commercial filmmakers.
        </p>

        {/* Price + CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="#get-it"
            className="pulse-gold bg-[#d4922a] hover:bg-[#e8a840] text-[#050a14] font-bold text-lg px-10 py-4 rounded-full transition-all duration-200 hover:scale-105 min-w-[220px]"
          >
            Get The RM Grade — $50
          </a>
          <a
            href="#before-after"
            className="border border-[#d4922a]/60 text-[#e8a840] hover:bg-[#d4922a]/10 font-medium text-lg px-8 py-4 rounded-full transition-all duration-200 min-w-[200px]"
          >
            See It In Action ↓
          </a>
        </div>

        {/* Trust line */}
        <p className="text-white/40 text-sm mt-6">
          Yours forever · Works on any camera · DaVinci Resolve Free compatible
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
        <span className="text-xs text-white/50 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#d4922a] to-transparent" />
      </div>
    </section>
  )
}
