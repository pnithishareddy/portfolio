import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8 text-center text-sm text-stone-500">
      © {new Date().getFullYear()} {profile.name}. Built with React, Vite and Tailwind CSS.
    </footer>
  )
}
