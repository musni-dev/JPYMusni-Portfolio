import { useState, useRef } from 'react'
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../data/projects'
import { img } from '../data/helpers'
import { Reveal, SectionHead } from './Reveal'

// One project card: photo gallery on the left, details on the right
function ProjectSlide({ project, onZoom }) {
  const [photo, setPhoto] = useState(1) // which screenshot is selected (1-3)
  const currentImage = img(`${project.id}-${photo}.png`)

  return (
    <div className="sl">
      <div className="card">
        {/* Photos */}
        <div className="gal">
          <div className="main" onClick={() => onZoom(currentImage)}>
            <img
              src={currentImage}
              alt={`${project.name} screenshot ${photo}`}
              onError={(e) => (e.target.style.display = 'none')}
              onLoad={(e) => (e.target.style.display = 'block')}
            />
          </div>

          <div className="thumbs">
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                className={n === photo ? 'on' : ''}
                onClick={() => setPhoto(n)}
                aria-label={`Photo ${n}`}
              >
                <img
                  src={img(`${project.id}-${n}.png`)}
                  alt=""
                  onError={(e) => (e.target.style.display = 'none')}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="info2">
          <small className="mono" style={{ color: 'var(--ac)', fontSize: 12 }}>{project.sub}</small>
          <h3>{project.name}</h3>
          <p>{project.desc}</p>

          <div className="stk">
            {project.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>

          {project.url && (
            <a
              className="btn"
              style={{ justifyContent: 'center' }}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Live Site <FaExternalLinkAlt size={13} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

// Slider with arrows, dots and swipe
function ProjectCarousel({ onZoom }) {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(0)
  const total = projects.length

  const goTo = (index) => setCurrent((index + total) % total)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    const distance = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(distance) > 50) {
      goTo(current + (distance < 0 ? 1 : -1))
    }
  }

  return (
    <Reveal className="car">
      <button className="nv l" onClick={() => goTo(current - 1)} aria-label="Previous">
        <FaChevronLeft />
      </button>
      <button className="nv r" onClick={() => goTo(current + 1)} aria-label="Next">
        <FaChevronRight />
      </button>

      <div className="vp" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div className="trk" style={{ transform: `translateX(-${current * 100}%)` }}>
          {projects.map((project) => (
            <ProjectSlide key={project.id} project={project} onZoom={onZoom} />
          ))}
        </div>
      </div>

      <div className="dots">
        {projects.map((project, index) => (
          <button
            key={project.id}
            className={index === current ? 'on' : ''}
            onClick={() => setCurrent(index)}
            aria-label={project.name}
          />
        ))}
      </div>
    </Reveal>
  )
}

// The whole Projects section
export default function Projects({ onZoom }) {
  return (
    <section id="projects">
      <div className="wrap">
        <SectionHead
          number="05 — projects"
          title="Projects"
          subtitle="Things I have designed and built. Swipe or use the arrows, and click a photo to view it larger."
        />
        <ProjectCarousel onZoom={onZoom} />
      </div>
    </section>
  )
}