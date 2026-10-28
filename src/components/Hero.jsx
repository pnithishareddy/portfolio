<<<<<<< HEAD
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
=======
import { profile, socials, projects, skills } from '../data'
import { SocialLinks } from './Icons'

export default function Hero() {
  const techCount = skills.reduce((n, g) => n + g.items.length, 0)
  return (
    <section id="home" className="relative overflow-hidden px-5 pb-20 pt-36 md:pt-44">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="absolute left-1/2 top-0 h-96 w-96 -transtone-x-1/2 rounded-full bg-accent/30 blur-[120px]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
        <div>
          {/* <p className="animate-rise inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Available for opportunities
          </p> */}


<section id="home" className="hero-section">
  <div className="container">
    <p className="availability-badge animate-rise">
      <span className="availability-indicator">
        <span className="availability-pulse"></span>
        <span className="availability-dot"></span>
      </span>
      Available for Opportunities
    </p>
  </div>
</section>


          <h1 className="animate-rise mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-stone-900 [animation-delay:.1s] sm:text-5xl md:text-6xl">
            Hi, I am {profile.name}<br /><span className="text-gradient">{profile.role}</span>
          </h1>
          <p className="animate-rise mt-6 max-w-xl text-lg leading-relaxed [animation-delay:.2s]">{profile.tagline}</p>
          <div className="animate-rise mt-9 flex flex-wrap gap-4 [animation-delay:.3s]">
            <a href="#projects" className="rounded-xl bg-gradient-to-r from-accent to-glow px-7 py-3.5 font-semibold text-white transition hover:opacity-90">View my work</a>
            <a href="#contact" className="rounded-xl border border-line px-7 py-3.5 font-semibold text-stone-900 transition hover:border-accent hover:text-accent">Get in touch</a>
          </div>
          <SocialLinks items={socials} className="animate-rise mt-10 [animation-delay:.4s]" />
        </div>

        <div className="animate-rise relative [animation-delay:.3s]">
          <div className="card animate-float p-6 shadow-xl shadow-teal-900/10">
            <div className="flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-accent to-glow text-2xl font-bold text-white">
                {profile.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}
              </div>
              <div>
                <p className="text-lg font-bold text-stone-900">{profile.name}</p>
                <p className="text-sm">{profile.role}</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[[projects.length, 'Projects'], [techCount, 'Technologies'], [profile.location.split(',')[0], 'Currently in']].map(([n, l]) => (
                <div key={l} className="rounded-xl bg-stone-100 py-4">
                  <p className="text-2xl font-bold text-stone-900">{n}</p>
                  <p className="text-xs">{l}</p>
                </div>
              ))}
            </div>
            {/* <pre className="mt-6 overflow-x-auto rounded-xl bg-stone-900 p-4 font-mono text-xs leading-6 text-stone-300"><code>{`const dev = {\n  role: "${profile.role}",\n  stack: ["React", "Tailwind"],\n  openToWork: true,\n};`}</code></pre> */}
          </div>
        </div>
>>>>>>> e8ac33cfca897500158a363306c8cc6cc4448be4
      </div>
    </section>
  )
}
