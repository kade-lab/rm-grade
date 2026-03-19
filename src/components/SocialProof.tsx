'use client'

import { useEffect, useRef, useState } from 'react'

// Starts at 5, multiplied by 3x = 15
const REAL_COUNT = 5
const DISPLAY_COUNT = REAL_COUNT * 3 // 15

export default function SocialProof() {
  const [count, setCount] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const animatedRef = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true
          // Animate count from 0 to DISPLAY_COUNT
          let start = 0
          const duration = 1800
          const startTime = performance.now()

          const tick = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            start = Math.round(eased * DISPLAY_COUNT)
            setCount(start)
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#050a14] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="border border-[#d4922a]/20 rounded-2xl bg-[#0a1628]/30 p-8 sm:p-12 text-center">
          {/* Counter */}
          <div className="flex items-baseline justify-center gap-3 mb-4">
            <span className="shimmer-text text-7xl sm:text-8xl font-black tabular-nums">
              {count}
            </span>
            <span className="text-[#d4922a] text-2xl font-bold">+</span>
          </div>

          <p className="text-white font-semibold text-xl sm:text-2xl mb-2">
            filmmakers already using the RM Grade
          </p>
          <p className="text-white/40 text-sm">
            Automotive creators, commercial directors, and freelancers leveling up their color.
          </p>

          {/* Avatar stack placeholder */}
          <div className="flex items-center justify-center mt-8 gap-2">
            <div className="flex -space-x-3">
              {/* REPLACE: swap these gradient avatars with real client profile pics */}
              {['from-[#d4922a] to-[#e8a840]', 'from-[#7a5218] to-[#d4922a]', 'from-[#e8a840] to-[#fff5cc]', 'from-[#0a1628] to-[#d4922a]', 'from-[#d4922a] to-[#7a5218]'].map((g, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${g} border-2 border-[#050a14]`}
                />
              ))}
            </div>
            <div className="flex items-center gap-1 ml-2">
              {[1, 2, 3, 4, 5].map(i => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#d4922a">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>

          <p className="text-white/30 text-xs mt-3">
            Real filmmakers. Real footage. Real results.
          </p>
        </div>
      </div>
    </section>
  )
}
