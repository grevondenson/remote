const stats = [
  { value: '13+',    label: 'Platforms Personally Used',    icon: '' },
  { value: '100%',   label: 'Real Withdrawal Screenshots',  icon: '' },
  { value: 'Daily',  label: 'Content on Remote Work Tips',  icon: '' },
  { value: '4+',     label: 'Remote Income Categories',     icon: '' },
]

export default function Credibility() {
  return (
    <section
      id="credibility"
      className="py-20 px-6"
      style={{ background: 'linear-gradient(180deg, var(--bg) 0%, var(--purple-700) 50%, var(--bg) 100%)' }}
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14 reveal">
          <p className="section-label mb-3">Why Learn from Me</p>
          <h2 className="font-syne font-bold text-white text-4xl md:text-5xl">
            No Hype. Just{' '}
            <span className="text-brand-orange">Proof.</span>
          </h2>
          <p className="font-outfit text-white/60 text-lg mt-4 max-w-xl mx-auto">
            I've done the work, collected the receipts, and I share everything — so you can skip the trial and error.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`glass-card p-7 text-center reveal reveal-delay-${i + 1}`}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="font-syne font-bold text-brand-orange text-3xl mb-1">{stat.value}</div>
              <div className="font-outfit text-white/55 text-sm leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
