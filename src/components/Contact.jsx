import { useState } from 'react'
import { profile, socials } from '../data'
import { icons, SocialLinks } from './Icons'

const field = 'w-full rounded-xl border border-line bg-white px-4 py-3 text-stone-900 outline-none transition placeholder:text-stone-500 focus:border-glow focus:ring-2 focus:ring-glow/20'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const onChange = (e) => { setForm({ ...form, [e.target.name]: e.target.value }); setSent(false) }

  const onSubmit = (e) => {
    e.preventDefault()
    const err = {}
    if (!form.name.trim()) err.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Enter a valid email address.'
    if (form.message.trim().length < 10) err.message = 'Write at least 10 characters.'
    setErrors(err)
    if (Object.keys(err).length) return
    // Opens the visitor's email app. Swap for Formspree/Netlify Forms for server-side delivery.
    const body = `${form.message}\n\nFrom: ${form.name} (${form.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio message from ' + form.name)}&body=${encodeURIComponent(body)}`
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="px-5 py-24">
      <div className="card reveal relative mx-auto max-w-6xl overflow-hidden p-8 md:p-14">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" aria-hidden="true" />
        <div className="relative grid gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">Let us build something together</h2>
            <p className="mt-4 max-w-md text-lg">Have a project, internship or question? Send a message and I will reply within two days.</p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3"><span className="text-accent">{icons.Mail}</span><a href={`mailto:${profile.email}`} className="hover:text-stone-900">{profile.email}</a></li>
              <li className="flex items-center gap-3"><span className="text-accent">{icons.Pin}</span>{profile.location}</li>
            </ul>
            <SocialLinks items={socials} className="mt-8" />
          </div>
          <form onSubmit={onSubmit} noValidate className="space-y-5">
            {[['name', 'Name', 'text', 'Your name'], ['email', 'Email', 'email', 'you@example.com']].map(([n, label, type, ph]) => (
              <div key={n}>
                <label htmlFor={n} className="mb-1.5 block text-sm font-medium text-stone-800">{label}</label>
                <input id={n} name={n} type={type} placeholder={ph} value={form[n]} onChange={onChange} className={field} aria-invalid={!!errors[n]} />
                {errors[n] && <p className="mt-1 text-sm text-rose-600">{errors[n]}</p>}
              </div>
            ))}
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-stone-800">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell me about your project" value={form.message} onChange={onChange} className={field} aria-invalid={!!errors.message} />
              {errors.message && <p className="mt-1 text-sm text-rose-600">{errors.message}</p>}
            </div>
            <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-accent to-glow px-6 py-3.5 font-semibold text-white transition hover:opacity-90">Send message</button>
            {sent && <p role="status" className="text-center font-medium text-emerald-600">Your email app is opening with the message ready to send.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
