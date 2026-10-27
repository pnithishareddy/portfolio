import { useEffect, useState } from 'react'
import { profile } from '../data'

const links = [['Home', 'home'], ['About', 'about'], ['Skills', 'skills'], ['Projects', 'projects'], ['Contact', 'contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach(([, id]) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])

  const initials = profile.name.split(' ').map((w) => w[0]).join('').slice(0, 2)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main">
        <a href="#home" className="flex items-center gap-2 font-bold text-stone-900">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-accent to-glow text-sm text-white">{initials}</span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`} className={`rounded-lg px-4 py-2 text-sm font-medium transition ${active === id ? 'bg-stone-900/5 text-stone-900' : 'hover:text-stone-900'}`}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href="#contact" className="rounded-xl bg-stone-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-accent">Hire me</a>
          <button className="rounded-full p-2 text-stone-900 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M5 5l12 12M17 5L5 17" /> : <path d="M3 6h16M3 11h16M3 16h16" />}
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-line bg-bg p-3 md:hidden">
          {links.map(([label, id]) => (
            <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 font-medium text-stone-900 hover:bg-stone-100">{label}</a></li>
          ))}
        </ul>
      )}
    </header>
  )
}
