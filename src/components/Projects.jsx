import { projects } from '../data'
import { icons } from './Icons'

const gradients = [
  'from-teal-700 to-emerald-400', 'from-amber-400 to-orange-500', 'from-stone-800 to-stone-500',
  'from-emerald-600 to-lime-400', 'from-teal-500 to-sky-500', 'from-rose-400 to-amber-300',
]

export default function Projects() {
  return (
    <section id="projects" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Projects</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">Selected work</h2>
          <p className="mt-3 text-lg">Live projects deployed on Netlify, with source code on GitHub.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article key={p.title} className="reveal card group flex flex-col overflow-hidden transition hover:-transtone-y-1.5 hover:border-accent/50">
              <div className={`relative flex h-40 items-end bg-gradient-to-br ${gradients[i % gradients.length]} p-5`}>
                <span className="absolute right-5 top-4 font-mono text-5xl font-bold text-white/30">0{i + 1}</span>
                <span className="rounded-full bg-white/70 px-3 py-1 font-mono text-xs text-stone-900 backdrop-blur">{p.tags[0]}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-stone-900">{p.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed">{p.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => <li key={t} className="rounded-full border border-line px-3 py-1 text-xs">{t}</li>)}
                </ul>
                <div className="mt-6 flex items-center gap-3">
                  <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-xl bg-stone-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-accent">Live demo {icons.Arrow}</a>
                  {p.code && <a href={p.code} target="_blank" rel="noreferrer" className="rounded-xl border border-line px-5 py-2 text-sm font-semibold text-stone-900 transition hover:border-accent hover:text-accent">Source code</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
