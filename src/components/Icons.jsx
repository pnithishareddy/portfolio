const base = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }

export const icons = {
  Facebook: <svg {...base}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
  Instagram: <svg {...base}><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></svg>,
  'X (Twitter)': <svg {...base}><path d="M18 6L6 18M6 6l12 12" /></svg>,
  LinkedIn: <svg {...base}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>,
  Mail: <svg {...base}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 6L2 7" /></svg>,
  Pin: <svg {...base}><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  Arrow: <svg {...base} width="16" height="16"><path d="M7 17L17 7M8 7h9v9" /></svg>,
}

export function SocialLinks({ items, className = '' }) {
  return (
    <ul className={`flex gap-3 ${className}`}>
      {items.map((s) => (
        <li key={s.name}>
          <a href={s.url} target="_blank" rel="noreferrer" aria-label={s.name} title={s.name}
             className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-stone-600 transition hover:-transtone-y-0.5 hover:border-accent hover:text-accent">
            {icons[s.name]}
          </a>
        </li>
      ))}
    </ul>
  )
}
