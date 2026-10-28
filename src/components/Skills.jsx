import { useState } from 'react'
import { skills } from '../data'

const dots = { Beginner: 1, Intermediate: 2, Advanced: 3 }

export default function Skills() {
  const [active, setActive] = useState(0)
  const group = skills[active]

  return (
    <section id="skills" className="px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Skills</p>
          <h2 className="mt-3 text-ink">Technologies I work with</h2>
        </div>

        <div className="reveal mt-12 grid gap-6 xl:grid-cols-[280px_1fr]">
          <div role="tablist" aria-label="Skill categories" className="flex gap-3 overflow-x-auto pb-1 xl:flex-col xl:overflow-visible">
            {skills.map((g, i) => (
              <button key={g.group} role="tab" aria-selected={active === i} onClick={() => setActive(i)}
                className={`min-w-[200px] rounded-2xl border p-5 text-left transition xl:min-w-0 ${active === i ? 'border-transparent bg-gradient-to-br from-navy to-[#1D70A2] text-white shadow-lg shadow-navy/25' : 'border-line bg-surface hover:border-accent/50'}`}>
                <span className="flex items-center justify-between font-display text-lg font-bold">
                  {g.group}<span className={`font-mono text-xs ${active === i ? 'text-white/70' : 'text-muted/70'}`}>0{g.items.length}</span>
                </span>
                <span className={`mt-1 block text-sm ${active === i ? 'text-white/80' : 'text-muted'}`}>{g.blurb}</span>
              </button>
            ))}
          </div>

          <div role="tabpanel" className="panel p-6 md:p-8">
            <ul key={group.group} className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {group.items.map(([name, level]) => (
                <li key={name} className="animate-rise flex items-center gap-4 rounded-2xl border border-line bg-bg p-4 transition hover:-translate-y-0.5 hover:border-accent/50">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-navy to-[#1D70A2] font-display text-lg font-bold text-white">{name[0]}</span>
                  <div>
                    <p className="font-semibold text-ink">{name}</p>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
                      {[1, 2, 3].map((n) => <span key={n} className={`h-1.5 w-4 rounded-full ${n <= dots[level] ? 'bg-accent' : 'bg-line'}`} />)}
                      <span className="ml-1">{level}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
