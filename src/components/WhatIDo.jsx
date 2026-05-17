const items = [
  {
    icon: '👾',
    title: 'Training AI Remotely',
    text: 'I work on data annotation, prompt creation, and AI response evaluation across platforms like Mindrift, Outlier, and DataAnnotation Tech — contributing to the models millions of people use every day.',
  },
  {
    icon: '💻',
    title: 'Chat Moderation & Micro-tasks',
    text: 'From text-based chat moderation on Cloudworkers and Texting Factory, to quick surveys on Prolific and AttaPoll — I stack multiple income streams that work around my schedule.',
  },
  {
    icon: '🕵🏽',
    title: 'Sharing Real Proof & Platform Insights',
    text: 'I document everything: platforms I use, tasks I do, and real withdrawal screenshots. No hype, no empty promises — just honest guidance to help you build your own remote income.',
  },
]

export default function WhatIDo() {
  return (
    <section
      id="what-i-do"
      className="py-24 px-6"
      style={{ background: 'linear-gradient(180deg, var(--bg) 0%, var(--purple-800) 50%, var(--bg) 100%)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <p className="section-label mb-3">What I Do</p>
          <h2 className="font-syne font-bold text-white text-4xl md:text-5xl">
            Real Remote Work,{' '}
            <span className="text-brand-orange">Real Results</span>
          </h2>
          <p className="font-outfit text-white/60 text-lg mt-4 max-w-xl mx-auto">
            I'm not just talking about remote work — I'm living it. Here's exactly what I do and teach.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className={`glass-card p-8 reveal reveal-delay-${i + 1}`}
            >
              <div className="text-5xl mb-5">{item.icon}</div>
              <h3 className="font-syne font-bold text-white text-xl mb-3">{item.title}</h3>
              <p className="font-outfit text-white/60 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
