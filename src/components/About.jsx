import { profile, services } from '../data'

export default function About() {
  return (
    <section id="about" className="about-section px-5">
      <div className="mx-auto max-w-5xl">
        <div className="reveal about-intro grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow">About me</p>
            <h2 className="mt-3 font-bold text-ink">Full stack developer building complete web applications</h2>
          </div>
          <div className="space-y-4 text-lg leading-relaxed">
            {profile.about.map((p) => <p key={p}>{p}</p>)}
            <p className="text-sm text-muted">Based in {profile.location}</p>
          </div>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {services.map(([t, d], i) => (
            <article key={t} className="reveal card p-7 transition hover:-translate-y-1 hover:border-accent/50">
              <span className="font-mono text-sm font-bold text-gradient">0{i + 1}</span>
              <h3 className="mt-4 font-bold text-ink">{t}</h3>
              <p className="mt-2 leading-relaxed">{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
