import { useState } from 'react'
import { LuExternalLink } from 'react-icons/lu'
import { platforms, CATEGORIES } from '../data/platforms'
import { PlatformLogo } from './PlatformLogo'

export default function Platforms() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? platforms
      : platforms.filter((p) => p.category === activeFilter)

  return (
    <section id="remote-platforms" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-4 reveal">
          <p className="section-label mb-3">Remote Platforms</p>
          <h2 className="font-syne font-bold text-white text-4xl md:text-5xl">
            Platforms I Actually{' '}
            <span className="text-brand-orange">Use & Trust</span>
          </h2>
        </div>

        <p className="text-center font-outfit text-white/60 text-lg max-w-2xl mx-auto mb-10 reveal">
          There's a lot of noise out there. These are the legitimate platforms I've personally worked with — each one pays real money for real work.
        </p>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12 reveal">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`filter-tab ${activeFilter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Platform count */}
        <p className="text-center font-outfit text-white/40 text-sm mb-8">
          Showing {filtered.length} platform{filtered.length !== 1 ? 's' : ''}
          {activeFilter !== 'All' ? ` · ${activeFilter}` : ''}
        </p>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((platform, i) => (
            <div
              key={platform.id}
              className={`glass-card p-6 flex flex-col reveal reveal-delay-${Math.min(i % 3 + 1, 5)}`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <PlatformLogo domain={platform.domain} name={platform.name} />
                  <div>
                    <h3 className="font-syne font-bold text-white text-base leading-tight">{platform.name}</h3>
                    <span className="font-outfit text-xs text-brand-orange-lt font-medium">{platform.category}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="font-outfit text-white/60 text-sm leading-relaxed flex-1 mb-5">
                {platform.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {platform.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost !py-2.5 !text-sm justify-center"
              >
                Visit Platform <LuExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center font-outfit text-white/30 text-xs mt-12 reveal">
          ⚠️ Earnings vary by platform, task type, location, and skill level. These are legitimate platforms but income is not guaranteed.
        </p>
      </div>
    </section>
  )
}
