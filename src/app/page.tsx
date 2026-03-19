import Hero from '@/components/Hero'
import BeforeAfter from '@/components/BeforeAfter'
import SocialProof from '@/components/SocialProof'
import VideoGrid from '@/components/VideoGrid'
import Included from '@/components/Included'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import FAQ from '@/components/FAQ'
import LeadForm from '@/components/LeadForm'
import WhatsNext from '@/components/WhatsNext'
import Reviews from '@/components/Reviews'
import Footer from '@/components/Footer'
import ExitIntent from '@/components/ExitIntent'

export default function Home() {
  return (
    <main className="bg-[#050a14] min-h-screen">
      {/* Exit intent popup — desktop only */}
      <ExitIntent />

      {/* 1 — Hero with video background */}
      <Hero />

      {/* 2 — Before/After drag sliders */}
      <BeforeAfter />

      {/* 3 — Social proof counter */}
      <SocialProof />

      {/* 4 — Client video testimonial grid */}
      <VideoGrid />

      {/* 5 — What's Included (11 nodes) */}
      <Included />

      {/* 6 — Feature cards */}
      <Features />

      {/* 7 — How It Works (3 steps) */}
      <HowItWorks />

      {/* 8 — Reviews placeholder */}
      <Reviews />

      {/* 9 — FAQ accordion */}
      <FAQ />

      {/* 10 — Lead capture form + TOS + gated buy button */}
      <LeadForm />

      {/* 11 — What's Next teasers */}
      <WhatsNext />

      {/* 12 — Instagram follow + Footer */}
      <Footer />
    </main>
  )
}
