import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../data/profile'
import { Reveal, SectionHead } from './Reveal'

// EmailJS values live in the .env file (see .env.example)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  // Update one field of the form
  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value })
  }

  // Runs when the visitor clicks "Send Message"
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' }) // clear the form
    } catch (error) {
      console.error('Email failed:', error)
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <div className="wrap">
        <SectionHead
          number="07 — contact"
          title="Let's Work Together"
          subtitle="Have a project, a job opening, or a question? Send me a message."
        />

        <Reveal className="ct">
          {/* Contact cards */}
          <div style={{ display: 'grid', gap: 16 }}>
            <a className="card" href={`mailto:${EMAIL}`}>
              <span className="ci"><FaEnvelope /></span>
              <div><small>Email</small><span>{EMAIL}</span></div>
            </a>

            <a className="card" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <span className="ci"><FaGithub /></span>
              <div><small>GitHub</small><span>github.com/musni-dev</span></div>
            </a>

            <a className="card" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              <span className="ci"><FaLinkedin /></span>
              <div><small>LinkedIn</small><span>john-patrick-musni</span></div>
            </a>

            <div className="card ic-l">
              <span className="ci"><FaMapMarkerAlt /></span> Concepcion, Tarlac, Philippines
            </div>
          </div>

          {/* Message form */}
          <form className="card" onSubmit={handleSubmit}>
            <input
              placeholder="Your name"
              required
              value={form.name}
              onChange={handleChange('name')}
            />
            <input
              type="email"
              placeholder="Your email"
              required
              value={form.email}
              onChange={handleChange('email')}
            />
            <textarea
              rows="5"
              placeholder="Your message"
              required
              value={form.message}
              onChange={handleChange('message')}
            />

            <button className="btn p" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message ➤'}
            </button>

            {status === 'success' && (
              <p style={{ color: 'var(--ac)', fontSize: 14 }}>
                Message sent! Thank you, I'll reply to you soon.
              </p>
            )}
            {status === 'error' && (
              <p style={{ color: '#ff6b6b', fontSize: 14 }}>
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}