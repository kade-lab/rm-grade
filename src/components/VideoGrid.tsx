'use client'

import { useRef, useState } from 'react'

interface VideoCardProps {
  videoSrc: string
  posterSrc: string
  clientName: string
  igHandle: string
  description: string
}

const testimonials: VideoCardProps[] = [
  {
    videoSrc: '/video/diamond-detailz.mp4',
    posterSrc: '',
    clientName: 'Diamond Detailz',
    igHandle: '@diamonddetailz',
    description: 'Premium automotive detailing — Shelby Township, MI',
  },
  {
    videoSrc: '/video/rpmautolab.mp4',
    posterSrc: '',
    clientName: 'RPM Auto Lab',
    igHandle: '@rpmautolab',
    description: 'High-end auto lab',
  },
  {
    videoSrc: '/video/ascension-vclips.mp4',
    posterSrc: '',
    clientName: 'Ascension Automotive',
    igHandle: '@ascensionautomotive',
    description: 'Luxury automotive brand',
  },
  {
    videoSrc: '/video/kawi.mp4',
    posterSrc: '',
    clientName: 'Kawi',
    igHandle: '@kawi.cavyy',
    description: 'Automotive creator',
  },
  {
    videoSrc: '/video/unknown-m1k.mp4',
    posterSrc: '',
    clientName: 'Unknown M1K',
    igHandle: '@unknown_m1k',
    description: 'Automotive filmmaker',
  },
  {
    videoSrc: '/video/ascension-m3.mp4',
    posterSrc: '',
    clientName: 'Ascension Automotive',
    igHandle: '@ascensionautomotive',
    description: 'Luxury automotive brand',
  },
]

function VideoCard({ videoSrc, posterSrc, clientName, igHandle, description }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    if (!videoRef.current) return
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <div className="group flex flex-col gap-3">
      {/* Video container */}
      <div
        className="relative rounded-xl overflow-hidden aspect-[9/16] cursor-pointer bg-[#0a1628]"
        onClick={toggle}
      >
        {/* REPLACE: swap video src and poster with actual client testimonial footage */}
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          className="w-full h-full object-cover"
          playsInline
          preload="none"
          onEnded={() => setPlaying(false)}
        />

        {/* Gradient overlay bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/80 via-transparent to-transparent pointer-events-none" />

        {/* Play/pause button */}
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
          <div className="w-14 h-14 rounded-full bg-[#d4922a]/90 flex items-center justify-center shadow-lg">
            {playing ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Card info */}
      <div className="px-1">
        <p className="text-white font-semibold text-sm">{clientName}</p>
        <a
          href={`https://instagram.com/${igHandle.replace('@', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#d4922a] text-xs hover:text-[#e8a840] transition-colors"
        >
          {igHandle}
        </a>
        <p className="text-white/40 text-xs mt-0.5">{description}</p>
      </div>
    </div>
  )
}

export default function VideoGrid() {
  return (
    <section className="bg-[#050a14] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#d4922a] text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            Real Results
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Used by Real Filmmakers
          </h2>
          <p className="text-white/50 mt-4 text-lg max-w-xl mx-auto">
            These aren&apos;t mockups. These are real clients, real shoots, real footage.
          </p>
        </div>

        {/* Video grid: 3 col desktop, 2 col mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((t, i) => (
            <VideoCard key={i} {...t} />
          ))}
        </div>

        {/* Kade's quote */}
        <div className="mt-16 max-w-2xl mx-auto">
          <blockquote className="border-l-4 border-[#d4922a] pl-6">
            <p className="text-white/90 text-xl sm:text-2xl font-medium italic leading-relaxed">
              &ldquo;Reid&apos;s color work is on another level. Every frame he touches looks cinematic.&rdquo;
            </p>
            <footer className="mt-4 flex items-center gap-3">
              {/* REPLACE: /images/avatar-kade.jpg with actual photo */}
              <div className="w-10 h-10 rounded-full bg-[#d4922a]/20 border border-[#d4922a]/40 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#d4922a]/30 to-[#050a14]" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Kade — Diamond Detailz</p>
                <a
                  href="https://instagram.com/diamonddetailz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d4922a] text-xs hover:text-[#e8a840]"
                >
                  @diamonddetailz
                </a>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
