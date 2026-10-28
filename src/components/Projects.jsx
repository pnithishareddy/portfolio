<<<<<<< HEAD
import { useState } from 'react'
import { projects } from '../data'
import { icons } from './Icons'
import ProjectArt from './ProjectArt'

const gradients = [
  'from-[#0B3C5D] to-[#1D70A2]', 'from-[#F2A900] to-[#FFD166]', 'from-[#1D70A2] to-[#F2A900]',
  'from-[#06293F] to-[#2A85BD]', 'from-[#E08A00] to-[#F2A900]', 'from-[#2A85BD] to-[#7DC4E8]',
]

// Image order: 1) your own screenshot in public/projects/  2) automatic live screenshot of the site  3) illustration.
const shot = (url) => `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200&h=750`

function Thumb({ p }) {
  const [idx, setIdx] = useState(0)
  const sources = [p.image, p.live && p.live !== '#' ? shot(p.live) : null].filter(Boolean)
  if (idx >= sources.length) return <ProjectArt kind={p.art} />
  return (
    <img key={sources[idx]} src={sources[idx]} alt={`${p.title} screenshot`} loading="lazy"
      onError={() => setIdx(idx + 1)} className="absolute inset-0 h-full w-full object-cover object-top" />
  )
}

export default function Projects() {
  return (
    <section id="projects" className="px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Projects</p>
          <h2 className="mt-3 font-bold text-ink">Selected work</h2>
          <p className="mt-3 text-lg">Live projects deployed on Netlify, with source code on GitHub.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, i) => (
            <article key={p.title} className="reveal card group flex flex-col overflow-hidden transition hover:-translate-y-1.5 hover:border-accent/50">
              <div className={`relative h-44 bg-gradient-to-br ${gradients[i % gradients.length]} p-3`}>
                <Thumb p={p} />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 font-mono text-xs text-ink backdrop-blur">{p.tags[0]}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-bold text-ink">{p.title}</h3>
=======
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
>>>>>>> e8ac33cfca897500158a363306c8cc6cc4448be4
                <p className="mt-2 flex-1 leading-relaxed">{p.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => <li key={t} className="rounded-full border border-line px-3 py-1 text-xs">{t}</li>)}
                </ul>
                <div className="mt-6 flex items-center gap-3">
<<<<<<< HEAD
                  <a href={p.live} target="_blank" rel="noreferrer" className="btn-primary !px-4 !py-2 !text-sm">Live demo {icons.Arrow}</a>
                  {p.code && <a href={p.code} target="_blank" rel="noreferrer" className="btn-secondary !px-4 !py-2 !text-sm">Source code</a>}
=======
                  <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-xl bg-stone-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-accent">Live demo {icons.Arrow}</a>
                  {p.code && <a href={p.code} target="_blank" rel="noreferrer" className="rounded-xl border border-line px-5 py-2 text-sm font-semibold text-stone-900 transition hover:border-accent hover:text-accent">Source code</a>}
>>>>>>> e8ac33cfca897500158a363306c8cc6cc4448be4
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
