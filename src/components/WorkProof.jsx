import { useState, useEffect } from 'react'
import { proofTabs, proofImages } from '../data/workProof'

/* ─── Placeholder image card ──────────────────────────────────────────────── */
function ProofPlaceholder({ alt, date, platform }) {
  return (
    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] flex flex-col items-center justify-center"
         style={{ background: 'var(--card-bg)', border: '1px dashed rgba(123,47,190,0.4)' }}>

      {/* Fake blurred lines mimicking a censored screenshot */}
      <div className="absolute inset-0 p-5 flex flex-col gap-2.5 opacity-10 pointer-events-none">
        {[80, 60, 90, 55, 70, 45, 85].map((w, i) => (
          <div key={i} className="rounded-sm h-2.5" style={{ width: `${w}%`, background: '#C77DFF' }} />
        ))}
      </div>

      {/* Icon + label */}
      <div className="relative z-10 text-center px-6">
        <div className="text-5xl mb-3">📸</div>
        <p className="font-syne font-bold text-white/80 text-sm">{platform} Proof</p>
        <p className="font-outfit text-white/40 text-xs mt-1">{date}</p>
        <span className="inline-block mt-4 px-3 py-1 rounded-full text-xs font-outfit font-semibold text-brand-orange border border-brand-orange/40">
          Replace with your screenshot
        </span>
      </div>
    </div>
  )
}

/* ─── Arrow buttons ───────────────────────────────────────────────────────── */
function ArrowBtn({ onClick, dir }) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-200 focus:outline-none flex-shrink-0"
      aria-label={dir === 'prev' ? 'Previous image' : 'Next image'}
    >
      {dir === 'prev'
        ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polyline points="15 18 9 12 15 6" /></svg>
        : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polyline points="9 18 15 12 9 6" /></svg>
      }
    </button>
  )
}

/* ─── Main component ──────────────────────────────────────────────────────── */
export default function WorkProof() {
  const [activePlatform, setActivePlatform] = useState(proofTabs[0].id)
  const [imgIndex,       setImgIndex]       = useState(0)
  const [fading,         setFading]         = useState(false)

  // Reset image index when switching platform
  useEffect(() => { setImgIndex(0) }, [activePlatform])

  const switchPlatform = (id) => {
    if (id === activePlatform) return
    setFading(true)
    setTimeout(() => {
      setActivePlatform(id)
      setFading(false)
    }, 250)
  }

  const images = proofImages[activePlatform] || []
  const totalImages = images.length
  const currentImage = images[imgIndex]
  const platformLabel = proofTabs.find(t => t.id === activePlatform)?.label || ''

  const prevImg = () => setImgIndex((imgIndex - 1 + totalImages) % totalImages)
  const nextImg = () => setImgIndex((imgIndex + 1) % totalImages)

  return (
    <section
      id="work-proof-gallery"
      className="py-24 px-6"
      style={{ background: 'linear-gradient(180deg, var(--bg) 0%, #0D0118 50%, var(--bg) 100%)' }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-4 reveal">
          <p className="section-label mb-3">Work Proof Gallery</p>
          <h2 className="font-syne font-bold text-white text-4xl md:text-5xl">
            Real <span className="text-brand-orange">Withdrawals.</span> Real Money.
          </h2>
        </div>

        <p className="text-center font-outfit text-white/60 text-base max-w-2xl mx-auto mb-12 reveal">
          Every screenshot below is from an actual withdrawal or earnings dashboard. Sensitive info is blurred. Switch between platforms to see proof from each one.
        </p>

        {/* Platform tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 reveal">
          {proofTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => switchPlatform(tab.id)}
              className={`filter-tab ${activePlatform === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery card */}
        <div
          className="glass-card p-6 md:p-8 reveal"
        >
          {/* Platform name + image counter */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-syne font-bold text-white text-xl">
              {platformLabel} <span className="text-white/40 font-normal text-base">Proof</span>
            </h3>
            <span className="font-outfit text-white/40 text-sm">
              {imgIndex + 1} / {totalImages}
            </span>
          </div>

          {/* Image area with fade transition */}
          <div className={`relative transition-opacity duration-250 ${fading ? 'opacity-0' : 'opacity-100'}`}>
            {currentImage.src ? (
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="w-full rounded-xl object-contain max-h-96"
              />
            ) : (
              <ProofPlaceholder
                alt={currentImage.alt}
                date={currentImage.date}
                platform={platformLabel}
              />
            )}
          </div>

          {/* Caption */}
          <p className="font-outfit text-white/40 text-sm mt-4 text-center">
            {currentImage.alt} — {currentImage.date}
          </p>

          {/* Navigation */}
          {totalImages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-6">
              <ArrowBtn onClick={prevImg} dir="prev" />

              {/* Dot indicators */}
              <div className="flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    aria-label={`Image ${i + 1}`}
                    className={`rounded-full transition-all duration-300 focus:outline-none ${
                      i === imgIndex
                        ? 'w-5 h-2 bg-brand-orange'
                        : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <ArrowBtn onClick={nextImg} dir="next" />
            </div>
          )}
        </div>

        
        
      </div>
    </section>
  )
}
