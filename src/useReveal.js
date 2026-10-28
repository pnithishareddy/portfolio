import { useEffect } from 'react'

// Adds the "show" class to any .reveal element when it scrolls into view.
export default function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target) }
      }),
      { threshold: 0.15 }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
