import { useState, useEffect } from 'react'

const ROLES = ['IT Support', 'Aspiring Software Developer', 'Web Developer']

// Typewriter effect in the hero section
export default function Typing() {
  const [text, setText] = useState('')

  useEffect(() => {
    let roleIndex = 0
    let charCount = 0
    let deleting = false
    let timer

    const tick = () => {
      const word = ROLES[roleIndex]
      charCount += deleting ? -1 : 1
      setText(word.slice(0, charCount))

      let delay = deleting ? 35 : 75

      if (!deleting && charCount === word.length) {
        deleting = true
        delay = 1400
      } else if (deleting && charCount === 0) {
        deleting = false
        roleIndex = (roleIndex + 1) % ROLES.length
        delay = 300
      }

      timer = setTimeout(tick, delay)
    }

    tick()
    return () => clearTimeout(timer)
  }, [])

  return <div className="role">{text}</div>
}