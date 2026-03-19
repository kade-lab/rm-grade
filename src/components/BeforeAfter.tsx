'use client'

import { useRef, useState, useCallback, useEffect } from 'react'

interface SliderProps {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  label: string
  initialPos?: number
}

function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  label,
  initialPos = 50,
}: SliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState(initialPos)
  const dragging = useRef(false)

  const clamp = (v: number) => Math.max(2, Math.min(98, v))

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(clamp(pct))
  }, [])

  // Mouse handlers
  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true
    updatePos(e.clientX)
  }

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (dragging.current) updatePos(e.clientX)
    }
    const onMouseUp = () => { dragging.current = false }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [updatePos])

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    dragging.current = true
    updatePos(e.touches[0].clientX)
  }

  useEffect(() => {
    const onTouchMove = (e: TouchEvent) => {
      if (dragging.current) {
        e.preventDefault()
        updatePos(e.touches[0].clientX)
      }
    }
    const onTouchEnd = () => { dragging.current = false }
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    window.addEventListener('touchend', onTouchEnd)
    return () => {
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [updatePos])

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <p className="text-center text-white/50 text-xs uppercase tracking-widest">{label}</p>
      )}
      <div
        ref={containerRef}
        className="ba-container rounded-xl overflow-hidden aspect-video w-full"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        {/* BEFORE — full width image, clipped on right */}
        {/* REPLACE: swap these src paths with your actual comparison images */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${beforeSrc})` }}
          aria-label={beforeAlt}
        />

        {/* AFTER — clipped to reveal from the left */}
        <div
          className="ba-after"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          aria-label={afterAlt}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${afterSrc})` }}
          />
        </div>

        {/* Slider handle line + arrows */}
        <div
          className="ba-handle"
          style={{ left: `${pos}%` }}
          aria-hidden="true"
        >
          <div className="ba-arrows">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#050a14" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
              <polyline points="9 18 15 12 9 6" transform="translate(6, 0)" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-3 left-3 bg-[#050a14]/80 text-white text-xs font-semibold px-2 py-1 rounded pointer-events-none select-none">
          BEFORE
        </div>
        <div className="absolute bottom-3 right-3 bg-[#d4922a]/90 text-[#050a14] text-xs font-semibold px-2 py-1 rounded pointer-events-none select-none">
          RM GRADE
        </div>
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  return (
    <section id="before-after" className="bg-[#050a14] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#d4922a] text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            See The Difference
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Before vs. After
          </h2>
          <p className="text-white/50 mt-4 text-lg max-w-xl mx-auto">
            Drag the slider to see exactly what the RM Grade does to your footage.
          </p>
        </div>

        {/* Main hero slider — Helmet on Bridge */}
        {/* REPLACE: /images/ba-helmet-before.jpg and /images/ba-helmet-after.jpg */}
        <div className="mb-12">
          <BeforeAfterSlider
            beforeSrc="/images/helmet-before.png"
            afterSrc="/images/helmet-after.png"
            beforeAlt="Helmet on bridge — flat, ungraded"
            afterAlt="Helmet on bridge — RM Grade applied"
            label="Helmet on Bridge"
            initialPos={40}
          />
        </div>

        {/* Side-by-side pair grid */}
        <div className="grid sm:grid-cols-3 gap-6">
          {/* Maybach */}
          {/* REPLACE: /images/ba-maybach-before.jpg and /images/ba-maybach-after.jpg */}
          <BeforeAfterSlider
            beforeSrc="/images/maybach-before.png"
            afterSrc="/images/maybach-after.png"
            beforeAlt="Maybach — flat"
            afterAlt="Maybach — RM Grade"
            label="Maybach"
            initialPos={50}
          />

          {/* McLaren Sunset */}
          {/* REPLACE: /images/ba-mclaren-sunset-before.jpg and /images/ba-mclaren-sunset-after.jpg */}
          <BeforeAfterSlider
            beforeSrc="/images/mclaren-sunset-before.png"
            afterSrc="/images/mclaren-sunset-after.png"
            beforeAlt="McLaren sunset — flat"
            afterAlt="McLaren sunset — RM Grade"
            label="McLaren Sunset"
            initialPos={50}
          />

          {/* McLaren Garage */}
          {/* REPLACE: /images/ba-mclaren-garage-before.jpg and /images/ba-mclaren-garage-after.jpg */}
          <BeforeAfterSlider
            beforeSrc="/images/mclaren-garage-before.png"
            afterSrc="/images/mclaren-garage-after.png"
            beforeAlt="McLaren garage — flat"
            afterAlt="McLaren garage — RM Grade"
            label="McLaren Garage"
            initialPos={50}
          />
        </div>

        <p className="text-center text-white/30 text-sm mt-8">
          All footage shot by Reid &amp; clients — no additional editing applied.
        </p>
      </div>
    </section>
  )
}
