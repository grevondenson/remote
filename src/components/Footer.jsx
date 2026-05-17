import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa6'
import { socials } from '../data/socials'

export function SocialIcon({ id }) {
  const cls = 'w-4 h-4 flex-shrink-0'
  if (id === 'instagram')       return <FaInstagram className={cls} />
  if (id === 'tiktok')          return <FaTiktok className={cls} />
  if (id === 'whatsapp-channel' || id === 'whatsapp-group' || id === 'whatsapp-dm')
                                 return <FaWhatsapp className={cls} />
  return null
}

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const navLinks = [
    { label: 'Home',               id: 'home' },
    { label: 'Remote Platforms',   id: 'remote-platforms' },
    { label: 'Work Proof Gallery', id: 'work-proof-gallery' },
    { label: 'Contact',            id: 'contact' },
  ]

  return (
    <footer
      className="border-t px-6 pt-14 pb-8"
      style={{ borderColor: 'rgba(123,47,190,0.2)', background: 'var(--purple-800)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="grid sm:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <button
              type="button"
              onClick={() => scrollTo('home')}
              className="flex items-center gap-2 mb-4 focus:outline-none group"
            >
              <img
                src="/apple-touch-icon.png"
                alt="Milo Remote Deals Logo"
                className="w-6 h-6 rounded-md flex-shrink-0"
              />
              <span className="font-syne font-bold text-white text-base group-hover:text-brand-orange-lt transition-colors">
                Milo <span className="text-brand-orange-lt">Remote</span>Deals
              </span>
            </button>
            <p className="font-outfit text-white/45 text-sm leading-relaxed">
              Your honest guide to legit remote work — AI training, chat moderation, surveys, and more.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-syne font-bold text-white/80 text-sm mb-4 uppercase tracking-widest">Navigate</p>
            <ul className="space-y-2">
              {navLinks.map(l => (
                <li key={l.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(l.id)}
                    className="font-outfit text-white/50 text-sm hover:text-brand-orange transition-colors focus:outline-none"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="font-syne font-bold text-white/80 text-sm mb-4 uppercase tracking-widest">Follow Me</p>
            <ul className="space-y-2.5">
              {socials.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 font-outfit text-white/50 text-sm hover:text-brand-orange transition-colors"
                  >
                    <SocialIcon id={s.id} />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section-divider mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-outfit text-white/30 text-xs">
            © {new Date().getFullYear()} Milo RemoteDeals. All rights reserved.
          </p>
          <p className="font-outfit text-white/25 text-xs text-center sm:text-right max-w-sm">
            ⚠️ Earnings shown are personal results and not guarantees. Remote income varies by skill, platform, location, and effort.
          </p>
        </div>
      </div>
    </footer>
  )
}
