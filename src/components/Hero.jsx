import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    tag: 'AI Training',
    icon: <IconAI />,
    title: 'Get Paid to Train AI from Home',
    text: 'Platforms like Mindrift, Outlier & DataAnnotation pay you to review, rate and improve AI models — no office required.',
    primaryCta:   { label: 'Explore AI Platforms', target: 'remote-platforms' },
    secondaryCta: { label: 'See Work Proof',        target: 'work-proof-gallery' },
    accent: '#7B2FBE',
  },
  {
    tag: 'Chat Moderation',
    icon: <IconChat />,
    title: 'Earn as a Remote Chat Operator',
    text: 'Cloudworkers, Texting Factory & Chat from Home let you moderate and manage chats — text-only, flexible hours, no calls.',
    primaryCta:   { label: 'Chat Job Platforms', target: 'remote-platforms' },
    secondaryCta: { label: 'View My Proof',       target: 'work-proof-gallery' },
    accent: '#3C096C',
  },
  {
    tag: 'Surveys & Research',
    icon: <IconSurvey />,
    title: 'Make Money Sharing Your Opinions',
    text: 'Prolific, AttaPoll & GrapeData pay real cash for your insights. No special skills needed to start earning today.',
    primaryCta:   { label: 'Browse Survey Apps', target: 'remote-platforms' },
    secondaryCta: { label: 'Proof of Earnings',   target: 'work-proof-gallery' },
    accent: '#E85D04',
  },
  {
    tag: 'Expert Talent',
    icon: <IconExpert />,
    title: 'Premium Platforms for Skilled Workers',
    text: 'Mercor, Alignerr & CrowdGen connect professionals with high-paying AI and data projects — up to $200/hr.',
    primaryCta:   { label: 'Expert Platforms',  target: 'remote-platforms' },
    secondaryCta: { label: 'See Real Proof',     target: 'work-proof-gallery' },
    accent: '#9D4EDD',
  },
]

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}
function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

// SVG Icons for slides
function IconAI() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
    </svg>
  )
}

function IconChat() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
    </svg>
  )
}

function IconSurvey() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2V17zm4 0h-2V7h2V17zm4 0h-2v-4h2V17z"/>
    </svg>
  )
}

function IconExpert() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  )
}

export default function Hero() {
  const [current,        setCurrent]        = useState(0)
  const [isPaused,       setIsPaused]       = useState(false)
  const [fading,         setFading]         = useState(false)

  const goTo = useCallback((index) => {
    setFading(true)
    setTimeout(() => {
      setCurrent((index + slides.length) % slides.length)
      setFading(false)
    }, 280)
  }, [])

  const prev = () => goTo(current - 1)
  const next = () => goTo(current + 1)

  useEffect(() => {
    if (isPaused) return
    const t = setInterval(next, 7000)
    return () => clearInterval(t)
  }, [current, isPaused])  // eslint-disable-line

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const slide = slides[current]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg noise"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-88"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/5439146/pexels-photo-5439146.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-5439146.jpg&fm=jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/48 via-black/30 to-black/44" />

      {/* Glowing orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-17 blur-3xl pointer-events-none"
           style={{ background: 'radial-gradient(circle, #7B2FBE, transparent)' }} />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full opacity-15 blur-3xl pointer-events-none animate-float"
           style={{ background: 'radial-gradient(circle, #FF6D00, transparent)' }} />

      {/* Slide content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Tag */}
        <div
          className={`transition-all duration-300 ${fading ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'}`}
        >
          <span className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full text-sm font-outfit font-semibold border"
                style={{ borderColor: slide.accent + '60', background: slide.accent + '20', color: '#E0AAFF' }}>
            <span className="text-lg" style={{ color: 'inherit' }}>{slide.icon}</span>
            {slide.tag}
          </span>
        </div>

        {/* Title */}
        <h1
          className={`font-syne font-bold text-white mb-5 transition-all duration-300 ${fading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
          style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', lineHeight: 1.12, textShadow: '0 2px 20px rgba(8,8,8,0.8)' }}
        >
          {slide.title.split(' ').map((word, i) =>
            word === 'AI' || word === 'Remote' || word === 'Paid' || word === 'Earn' || word === 'Money' || word === 'Premium'
              ? <span key={i} className="text-brand-orange">{word} </span>
              : word + ' '
          )}
        </h1>

        {/* Global Subheadline */}
        <p
          className="font-outfit text-lg md:text-xl text-[#F7F0DC]/90 max-w-2xl mx-auto mb-3 transition-all duration-300"
          style={{ textShadow: '0 1px 12px rgba(8,8,8,0.9)' }}
        >
          Discover the exact remote platforms I use to earn from home — with real withdrawal proof to back it up.
        </p>

        {/* Slide-specific subtitle */}
        <p
          className={`font-outfit text-base md:text-lg text-white/55 max-w-xl mx-auto mb-10 transition-all duration-300 delay-75 ${fading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
          style={{ textShadow: '0 1px 12px rgba(8,8,8,0.9)' }}
        >
          {slide.text}
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto transition-all duration-300 delay-100 ${fading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
        >
          <button 
            type="button"
            className="btn-orange w-full sm:w-auto" 
            onClick={() => scrollTo(slide.primaryCta.target)}
          >
            {slide.primaryCta.label}
            <ChevronRight />
          </button>
          <button 
            type="button"
            className="btn-ghost w-full sm:w-auto" 
            onClick={() => scrollTo(slide.secondaryCta.target)}
          >
            {slide.secondaryCta.label}
          </button>
        </div>
      </div>

      {/* Arrow controls */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-200 focus:outline-none"
      >
        <ChevronLeft />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-200 focus:outline-none"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1} of ${slides.length}`}
            className={`transition-all duration-300 rounded-full focus:outline-none ${
              i === current
                ? 'w-6 h-2.5 bg-brand-orange'
                : 'w-2.5 h-2.5 bg-white/25 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
           style={{ background: 'linear-gradient(to bottom, transparent, var(--bg))' }} />
    </section>
  )
}
