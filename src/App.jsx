import { useEffect } from 'react'
import Header      from './components/Header'
import Hero        from './components/Hero'
import WhatIDo     from './components/WhatIDo'
import Platforms   from './components/Platforms'
import Credibility from './components/Credibility'
import Services    from './components/Services'
import WorkProof   from './components/WorkProof'
import Newsletter  from './components/Newsletter'
import Footer      from './components/Footer'

// ACCESSIBILITY CHECKLIST — Milo RemoteDeals
// ✅ 1. Hero headline (#F7F0DC on dark overlay) — WCAG AA large text: 3:1 ✓
// ✅ 2. Subheadline (#F7F0DC/90 on #080808 overlay) — WCAG AA normal text: 4.5:1 ✓
// ✅ 3. Primary CTA: gold #D4A017 bg, #080808 text — contrast ratio ~8.5:1 ✓
// ✅ 4. Secondary CTA: ghost border visible on dark bg — meets 3:1 ✓
// ✅ 5. Tap targets: all buttons min-height 48px on mobile ✓
// ✅ 6. Focus rings: :focus-visible on all buttons and nav links ✓
// ✅ 7. Base font: 16px body, 14px minimum on mobile ✓
// ✅ 8. All images and logo icons have descriptive alt text ✓

export default function App() {

  // ─── Global scroll-reveal ─────────────────────────────────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        }),
      { threshold: 0.08 }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    // Re-scan on DOM changes (for dynamic content like filtered platform cards)
    const mutationObs = new MutationObserver(() => {
      const newEls = document.querySelectorAll('.reveal:not(.observed)')
      newEls.forEach((el) => {
        el.classList.add('observed')
        observer.observe(el)
      })
    })
    mutationObs.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObs.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-brand-bg">
      <Header />

      <main>
        <Hero />

        {/* Divider */}
        <div className="section-divider my-0" />

        <WhatIDo />

        <div className="section-divider my-0" />

        <Platforms />

        <div className="section-divider my-0" />

        <Credibility />

        <div className="section-divider my-0" />

        <Services />

        <div className="section-divider my-0" />

        <WorkProof />

        <div className="section-divider my-0" />

        <Newsletter />
      </main>

      <Footer />
    </div>
  )
}
