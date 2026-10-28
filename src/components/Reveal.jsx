import { useEffect, useRef } from 'react'

// Fade-in on scroll. Wrap anything with <Reveal> ... </Reveal>.
// Also fills the skill bars once visible.
export function Reveal({ children, className = '', as: Tag = 'div', ...props }) {
  const boxRef = useRef()

  useEffect(() => {
    const box = boxRef.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        box.classList.add('in')
        box.querySelectorAll('.bar i').forEach((bar) => {
          bar.style.width = bar.dataset.w + '%'
        })
        observer.disconnect()
      },
      { threshold: 0.12 }
    )

    observer.observe(box)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={boxRef} className={`rv ${className}`} {...props}>
      {children}
    </Tag>
  )
}

// Section title: tag + heading + optional subtitle
export function SectionHead({ number, title, subtitle }) {
  return (
    <>
      <Reveal as="span" className="tag">{`// ${number}`}</Reveal>
      <Reveal as="h2">{title}</Reveal>
      {subtitle && <Reveal as="p" className="sub">{subtitle}</Reveal>}
    </>
  )
}