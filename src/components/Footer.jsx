import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#06293F] via-navy to-[#1D70A2] px-5 py-8 text-center text-sm text-white/70">
      © {new Date().getFullYear()} {profile.name}. Built with React, Vite and Tailwind CSS.
    </footer>
  )
}
