// Illustrated browser-window mockups used when a project has no screenshot.
const G = '#E2E8F0'

const scenes = {
  shop: (
    <>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${42 + i * 84} 46)`}>
          <rect width="72" height="54" rx="6" fill={G} />
          <circle cx="36" cy="27" r="12" fill="currentColor" opacity={0.25 + i * 0.2} />
          <rect y="62" width="50" height="6" rx="3" fill={G} />
          <rect y="74" width="28" height="7" rx="3.5" fill="currentColor" />
        </g>
      ))}
      <circle cx="276" cy="30" r="7" fill="currentColor" />
    </>
  ),
  login: (
    <>
      <circle cx="160" cy="50" r="14" fill="currentColor" opacity=".25" />
      <circle cx="160" cy="46" r="5" fill="currentColor" />
      <rect x="110" y="72" width="100" height="14" rx="5" fill={G} />
      <rect x="110" y="92" width="100" height="14" rx="5" fill={G} />
      <rect x="110" y="114" width="100" height="16" rx="6" fill="currentColor" />
    </>
  ),
  events: (
    <>
      {Array.from({ length: 21 }).map((_, i) => (
        <rect key={i} x={40 + (i % 7) * 20} y={44 + Math.floor(i / 7) * 22} width="16" height="16" rx="4" fill={i === 9 || i === 15 ? 'currentColor' : G} />
      ))}
      <rect x="196" y="44" width="84" height="12" rx="4" fill="currentColor" opacity=".3" />
      <rect x="196" y="64" width="64" height="8" rx="4" fill={G} />
      <rect x="196" y="82" width="84" height="12" rx="4" fill="currentColor" opacity=".3" />
      <rect x="196" y="102" width="52" height="8" rx="4" fill={G} />
    </>
  ),
  auth: (
    <>
      <path d="M160 38 l32 12 v24 c0 20 -14 32 -32 40 c-18 -8 -32 -20 -32 -40 v-24z" fill="currentColor" opacity=".18" />
      <path d="M160 46 l24 9 v19 c0 15 -10 24 -24 31 c-14 -7 -24 -16 -24 -31 v-19z" fill="currentColor" />
      <path d="M149 76 l8 8 l14 -16" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  tickets: (
    <>
      <path d="M50 52 h220 v22 a10 10 0 0 0 0 20 v22 h-220 v-22 a10 10 0 0 0 0 -20z" fill={G} />
      <line x1="196" y1="52" x2="196" y2="116" stroke="#fff" strokeWidth="3" strokeDasharray="5 5" />
      <circle cx="74" cy="84" r="5" fill="currentColor" />
      <line x1="80" y1="84" x2="150" y2="84" stroke="currentColor" strokeWidth="3" strokeDasharray="4 4" />
      <circle cx="156" cy="84" r="5" fill="currentColor" />
      {[0, 1, 2, 3, 4, 5].map((i) => <rect key={i} x={210 + i * 9} y="70" width={i % 2 ? 3 : 5} height="30" fill="currentColor" />)}
    </>
  ),
  store: (
    <>
      {[0, 1, 2, 3, 4, 5].map((i) => <rect key={i} x={50 + i * 36.6} y="38" width="36.6" height="20" fill={i % 2 ? '#fff' : 'currentColor'} stroke={G} />)}
      <rect x="50" y="58" width="220" height="62" fill={G} opacity=".5" />
      {[0, 1, 2].map((i) => <rect key={i} x={66 + i * 66} y="76" width="40" height="30" rx="5" fill="currentColor" opacity={0.3 + i * 0.25} />)}
    </>
  ),
}

export default function ProjectArt({ kind = 'shop' }) {
  return (
    <svg viewBox="0 0 320 160" className="h-full w-full text-navy" role="img" aria-label="Project illustration" preserveAspectRatio="xMidYMid meet">
      <rect x="20" y="14" width="280" height="132" rx="12" fill="#fff" opacity=".96" />
      <path d="M20 26 a12 12 0 0 1 12 -12 h256 a12 12 0 0 1 12 12 v6 h-280z" fill={G} />
      {[0, 1, 2].map((i) => <circle key={i} cx={36 + i * 12} cy="23" r="3" fill="#fff" />)}
      {scenes[kind] || scenes.shop}
    </svg>
  )
}
