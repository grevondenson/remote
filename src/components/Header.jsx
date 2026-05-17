import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Home',              id: 'home' },
  { label: 'Remote Platforms',  id: 'remote-platforms' },
  { label: 'Services',          id: 'services' },
  { label: 'Work Proof Gallery',id: 'work-proof-gallery' },
  { label: 'Contact',           id: 'contact' },
]

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[rgba(7,0,13,0.85)] backdrop-blur-md border-b border-purple-800/30'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <img
              src="/apple-touch-icon.png"
              alt="Milo Remote Deals Logo"
              className="w-8 h-8 rounded-lg"
            />
            <span className="font-syne font-bold  text-white text-base leading-none group-hover:text-brand-orange-lt transition-colors">
              MILO- <span className="text-brand-orange-lt">REMOTE</span>DEALS
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.id)}
                className="px-4 py-2 rounded-full text-sm font-outfit font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 focus:outline-none"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="btn-orange nav-cta ml-3"
            >
              Join Newsletter
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile slide-down menu */}
      <div
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="bg-[rgba(13,1,24,0.97)] backdrop-blur-xl border-b border-purple-800/40 pt-24 pb-8 px-6 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.id)}
              className="text-left text-lg font-syne font-semibold text-white/80 hover:text-brand-orange transition-colors py-2 border-b border-purple-800/20"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="btn-orange nav-cta mt-3"
          >
            Join Newsletter
          </button>
        </div>
      </div>
    </>
  )
}
