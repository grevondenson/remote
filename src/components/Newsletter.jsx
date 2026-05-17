import { useState } from 'react'
import { LuLoaderCircle } from 'react-icons/lu'
import { socials } from '../data/socials'
import { SocialIcon } from './Footer'

// ─── Config ───────────────────────────────────────────────────────────────────
// When you're ready to connect a real newsletter provider, replace this mock:
//   - Mailchimp:   POST to your Mailchimp signup URL
//   - ConvertKit:  POST to https://api.convertkit.com/v3/forms/{form_id}/subscribe
//   - Brevo:       POST to Brevo API
const NEWSLETTER_ENDPOINT = null  // e.g. 'https://app.convertkit.com/...' — set when ready

async function submitEmail(email) {
  if (!NEWSLETTER_ENDPOINT) {
    // Mock: simulate 1.2s API call
    await new Promise((r) => setTimeout(r, 1200))
    return { ok: true }
  }
  const res = await fetch(NEWSLETTER_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })
  return { ok: res.ok }
}

export default function Newsletter() {
  const [email,   setEmail]   = useState('')
  const [status,  setStatus]  = useState('idle') // idle | loading | success | error

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) {
      setStatus('error')
      return
    }
    setStatus('loading')
    try {
      const result = await submitEmail(email)
      setStatus(result.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ background: 'linear-gradient(180deg, var(--bg) 0%, var(--purple-700) 60%, var(--bg) 100%)' }}
    >
      <div className="max-w-2xl mx-auto text-center">

        {/* Heading */}
        <div className="reveal mb-10">
          <p className="section-label mb-3">Stay in the Loop</p>
          <h2 className="font-syne font-bold text-white text-4xl md:text-5xl mb-4">
            Weekly Remote Work{' '}
            <span className="text-brand-orange">Insights</span>
          </h2>
          <p className="font-outfit text-white/60 text-lg">
            Get new platform discoveries, earnings tips, and proof updates delivered straight to your inbox. No spam — just value.
          </p>
        </div>

        {/* Form */}
        <div className="glass-card p-8 reveal">
          {status === 'success' ? (
            <div className="text-center py-4">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-syne font-bold text-white text-2xl mb-2">You're in!</h3>
              <p className="font-outfit text-white/60">
                Thanks for subscribing. Check your inbox for a welcome email.
              </p>
            </div>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setStatus('idle') }}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                  placeholder="your@email.com"
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3.5 font-outfit text-white placeholder:text-white/30 outline-none focus:border-brand-orange transition-colors"
                />
                <button
                  onClick={handleSubmit}
                  disabled={status === 'loading'}
                  className="btn-orange !py-3.5 justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <LuLoaderCircle className="animate-spin h-4 w-4" />
                      Joining…
                    </span>
                  ) : 'Join Newsletter'}
                </button>
              </div>

              {status === 'error' && (
                <p className="font-outfit text-red-400 text-sm text-center">
                  Please enter a valid email address.
                </p>
              )}

              <p className="font-outfit text-white/30 text-xs text-center mt-3">
                No spam, ever. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>

        {/* Social links */}
        <div className="mt-14 reveal">
          <p className="font-outfit text-white/40 text-sm mb-5">Or connect with me directly</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/5 font-outfit text-sm text-white/70 hover:border-brand-orange hover:text-white hover:bg-brand-orange/10 transition-all duration-200"
              >
                <SocialIcon id={s.id} />
                {s.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
