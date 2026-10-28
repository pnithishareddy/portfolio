import { profile, projects, skills } from '../data'

export default function Hero() {
  const techCount = skills.reduce((n, g) => n + g.items.length, 0)
  const stats = [[projects.length, 'Projects built'], [techCount, 'Technologies'], [profile.location.split(',')[0], 'Based in']]
  return (
    <section id="home" className="hero-section relative px-5 pb-12 md:pt-14">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#1D70A2]/20 blur-[110px]" />
        <div className="absolute -right-20 top-24 h-96 w-96 rounded-full bg-glow/25 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-4xl">
        <p className="availability-badge animate-rise">
          <span className="availability-indicator"><span className="availability-pulse" /><span className="availability-dot" /></span>
          Available for opportunities
        </p>
        <h1 className="animate-rise text-ink [animation-delay:.1s]">
          Hi, I am {profile.name}.<br /><span className="text-gradient">{profile.role}.</span>
        </h1>
        <p className="animate-rise max-w-2xl text-lg [animation-delay:.2s]">{profile.tagline}</p>
        <div className="animate-rise mt-8 flex flex-wrap gap-4 [animation-delay:.3s]">
          <a href="#projects" className="btn-primary">View my work</a>
          <a href="#contact" className="btn-secondary">Get in touch</a>
        </div>
        <dl className="animate-rise mt-12 grid grid-cols-3 gap-4 [animation-delay:.4s]">
          {stats.map(([n, l]) => (
            <div key={l} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <dt className="text-2xl font-bold text-navy md:text-3xl">{n}</dt>
              <dd className="mt-1 text-xs md:text-sm">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
