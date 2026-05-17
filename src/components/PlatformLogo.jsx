import { useState, useEffect } from 'react'

export function PlatformLogo({ domain, name }) {
  const [logoSrc, setLogoSrc] = useState(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    // Try multiple logo sources with timeout
    const tryLogos = async () => {
      const sources = [
        // Try local logo first
        `/logos/${name.toLowerCase().replace(/\s+/g, '-')}.png`,
        // Try alternative Clearbit endpoints
        `https://logo.clearbit.com/${domain}`,
        `https://www.google.com/s2/favicons?domain=${domain}&sz=256`,
      ]

      for (const src of sources) {
        try {
          const img = new Image()
          img.src = src
          
          const loadPromise = new Promise((resolve) => {
            img.onload = () => resolve(src)
            img.onerror = () => resolve(null)
          })

          const timeoutPromise = new Promise((resolve) =>
            setTimeout(() => resolve(null), 3000)
          )

          const result = await Promise.race([loadPromise, timeoutPromise])
          if (result) {
            setLogoSrc(result)
            return
          }
        } catch (e) {
          console.warn(`Failed to load logo from ${src}`)
        }
      }

      setFailed(true)
    }

    tryLogos()
  }, [domain, name])

  // Fallback: Letter badge
  if (failed || !logoSrc) {
    return (
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-syne font-bold text-lg flex-shrink-0"
        style={{ background: 'rgba(212,160,23,0.2)', border: '1px solid rgba(212,160,23,0.3)' }}
        title={name}
      >
        {name.charAt(0).toUpperCase()}
      </div>
    )
  }

  return (
    <img
      src={logoSrc}
      alt={`${name} logo`}
      className="w-10 h-10 rounded-xl object-contain flex-shrink-0"
      style={{ background: '#fff', padding: '4px' }}
      onError={() => setFailed(true)}
    />
  )
}
