import { profile } from '../data'

export default function Footer() {
  return (
<<<<<<< HEAD
    <footer className="bg-gradient-to-r from-[#06293F] via-navy to-[#1D70A2] px-5 py-8 text-center text-sm text-white/70">
=======
    <footer className="border-t border-line px-5 py-8 text-center text-sm text-stone-500">
>>>>>>> e8ac33cfca897500158a363306c8cc6cc4448be4
      © {new Date().getFullYear()} {profile.name}. Built with React, Vite and Tailwind CSS.
    </footer>
  )
}
