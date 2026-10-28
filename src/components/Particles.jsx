import { useEffect, useRef } from 'react'

// Moving dots background in the hero section
export default function Particles() {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width, height, dots, frameId

    const setup = () => {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight

      const count = Math.min(70, Math.floor(width / 16))
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.random() - 0.5,
        vy: Math.random() - 0.5,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      const color = getComputedStyle(document.documentElement).getPropertyValue('--ac').trim()
      ctx.fillStyle = color
      ctx.strokeStyle = color

      dots.forEach((dot, i) => {
        dot.x = (dot.x + dot.vx * 0.5 + width) % width
        dot.y = (dot.y + dot.vy * 0.5 + height) % height

        // the dot
        ctx.globalAlpha = 0.8
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, 1.8, 0, Math.PI * 2)
        ctx.fill()

        // lines to nearby dots
        for (let j = i + 1; j < dots.length; j++) {
          const other = dots[j]
          const distance = Math.hypot(dot.x - other.x, dot.y - other.y)

          if (distance < 130) {
            ctx.globalAlpha = (1 - distance / 130) * 0.35
            ctx.beginPath()
            ctx.moveTo(dot.x, dot.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        }
      })

      frameId = requestAnimationFrame(draw)
    }

    setup()
    window.addEventListener('resize', setup)
    draw()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', setup)
    }
  }, [])

  return <canvas id="cv" ref={canvasRef} />
}