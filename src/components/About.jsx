
import { profile, services } from '../data'

export default function About() {
  return (
    <section
      id="about"
      className="about-section px-5 pt-4 pb-12 md:pt-6 md:pb-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* About introduction */}
        <div className="about-intro grid grid-cols-1 gap-6 md:grid-cols-[1fr_1.4fr] md:gap-10">
          <div>
            <p className="eyebrow">About me</p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              Developer focused on clean, useful interfaces
            </h2>
          </div>

          <div className="space-y-4 text-base leading-relaxed md:text-lg">
            {profile.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <p className="text-sm text-stone-500">
              Currently in {profile.location}
            </p>
          </div>
        </div>

        {/* Services cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-10 md:grid-cols-3">
          {services.map(([title, description], index) => (
            <article
              key={title}
              className="card about-service-card p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50 md:p-7"
            >
              <span className="font-mono text-sm text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className="mt-4 text-xl font-bold text-stone-900">
                {title}
              </h3>

              <p className="mt-2 leading-relaxed">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
