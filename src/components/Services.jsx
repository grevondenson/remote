import {
  LuUsers,
  LuGlobe,
  LuFileCheck,
  LuSmartphone,
  LuGraduationCap,
} from 'react-icons/lu'
import { services } from '../data/services'

const serviceIcons = {
  'account-management': LuUsers,
  'residential-proxies': LuGlobe,
  'verification-documents': LuFileCheck,
  'verification-numbers': LuSmartphone,
  'mentorship-program': LuGraduationCap,
  'general-consultation': LuUsers,
}

export default function Services() {
  const handleWhatsAppClick = (service) => {
    const phoneNumber = '254114555144' // Kenya WhatsApp number (no + prefix for URL)
    const encodedMessage = encodeURIComponent(service.whatsappMessage)
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(url, '_blank')
  }

  return (
    <section
      id="services"
      className="py-20 px-6"
      style={{ background: 'linear-gradient(180deg, var(--bg) 0%, var(--purple-700) 50%, var(--bg) 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-label mb-3">Work With Me</p>
          <h2 className="font-syne font-bold text-white text-4xl md:text-5xl">
            Services I <span className="text-brand-orange">Offer</span>
          </h2>
          <p className="font-outfit text-white/60 text-lg mt-4 max-w-2xl mx-auto">
            Choose the service that fits your remote work journey. All options include expert support and personalized guidance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`glass-card p-6 flex flex-col reveal reveal-delay-${(index % 5) + 1}`}
            >
              {/* Tag pill */}
              {service.tag && (
                <div className="mb-4">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-syne font-bold text-white"
                    style={{ background: 'var(--orange)', opacity: 0.6 }}
                  >
                    {service.tag}
                  </span>
                </div>
              )}

              {/* Icon */}
              {(() => {
                const IconComponent = serviceIcons[service.id]
                return IconComponent ? <IconComponent className="w-8 h-8 text-brand-gold mb-4" /> : null
              })()}

              {/* Title */}
              <h3 className="font-syne font-bold text-white text-xl mb-2">{service.title}</h3>

              {/* Price Badge */}
              <div className="mb-4">
                <p
                  className="font-syne font-bold text-sm px-3 py-2 rounded-lg inline-block"
                  style={{ background: 'rgba(212, 160, 23, 0.2)', color: 'var(--orange)' }}
                >
                  {service.price}
                </p>
              </div>

              {/* Description */}
              <p className="font-outfit text-white/70 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* WhatsApp Button */}
              <button
                type="button"
                onClick={() => handleWhatsAppClick(service)}
                className="btn-orange w-full justify-center text-center opacity-80"
              >
                 Message on WhatsApp
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
