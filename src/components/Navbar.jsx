import { useEffect, useState } from 'react'
<<<<<<< HEAD
import { profile, socials } from '../data'
import { SocialLinks, icons } from './Icons'

const links = [['Home', 'home'], ['About', 'about'], ['Skills', 'skills'], ['Projects', 'projects'], ['Contact', 'contact']]
const panel = 'bg-gradient-to-b from-[#06293F] via-navy to-[#12557F]'
=======
import { profile } from '../data'

const links = [['Home', 'home'], ['About', 'about'], ['Skills', 'skills'], ['Projects', 'projects'], ['Contact', 'contact']]
>>>>>>> e8ac33cfca897500158a363306c8cc6cc4448be4

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
<<<<<<< HEAD
  const initials = profile.name.split(' ').map((w) => w[0]).join('').slice(0, 2)
=======
>>>>>>> e8ac33cfca897500158a363306c8cc6cc4448be4

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach(([, id]) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])

<<<<<<< HEAD
  return (
    <>
      {/* Desktop sidebar */}
      <aside className={`${panel} fixed inset-y-0 left-0 z-40 hidden w-72 flex-col justify-between p-8 text-white lg:flex`}>
        <div>
          <a href="#home" className="block">
            <span className="grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-glow to-[#E08A00] text-2xl font-bold text-white shadow-lg shadow-black/30">{initials}</span>
            <p className="mb-0 mt-5 text-xl font-bold text-white">{profile.name}</p>
            <p className="mb-0 mt-1 text-sm text-white/70">{profile.role}</p>
          </a>
          <nav aria-label="Main" className="mt-10">
            <ul className="space-y-1">
              {links.map(([label, id], i) => (
                <li key={id}>
                  <a href={`#${id}`} className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${active === id ? 'bg-white/15 text-white' : 'text-white/65 hover:bg-white/10 hover:text-white'}`}>
                    <span className={`font-mono text-xs ${active === id ? 'text-glow' : 'text-white/40'}`}>0{i + 1}</span>{label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="space-y-5">
          <SocialLinks items={socials} className="flex-wrap" />
          <a href={`mailto:${profile.email}`} className="flex items-center gap-2 break-all text-xs text-white/70 hover:text-white">
            <span className="text-glow">{icons.Mail}</span>{profile.email}
          </a>
        </div>
      </aside>

      {/* Mobile / tablet top bar */}
      <header className={`${panel} sticky top-0 z-50 text-white lg:hidden`}>
        <div className="flex h-16 items-center justify-between px-5">
          <a href="#home" className="flex items-center gap-3 font-bold text-white">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-glow to-[#E08A00] text-sm">{initials}</span>{profile.name}
          </a>
          <button className="rounded-lg p-2 text-white" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
=======
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
>>>>>>> e8ac33cfca897500158a363306c8cc6cc4448be4
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M5 5l12 12M17 5L5 17" /> : <path d="M3 6h16M3 11h16M3 16h16" />}
            </svg>
          </button>
        </div>
<<<<<<< HEAD
        {open && (
          <ul className="border-t border-white/10 px-3 pb-3">
            {links.map(([label, id]) => (
              <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 font-semibold text-white hover:bg-white/10">{label}</a></li>
            ))}
          </ul>
        )}
      </header>
    </>
=======
      </nav>
      {open && (
        <ul className="border-t border-line bg-bg p-3 md:hidden">
          {links.map(([label, id]) => (
            <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 font-medium text-stone-900 hover:bg-stone-100">{label}</a></li>
          ))}
        </ul>
      )}
    </header>
>>>>>>> e8ac33cfca897500158a363306c8cc6cc4448be4
  )
}
