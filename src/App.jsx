import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaBars, FaSun, FaMoon } from 'react-icons/fa'

import { EMAIL, GITHUB_URL, LINKEDIN_URL, education, skillGroups, professionalSkills } from './data/profile'
import { techStack } from './data/techStack'
import { img } from './data/helpers'

import { Reveal, SectionHead } from './components/Reveal'
import Typing from './components/Typing'
import Particles from './components/Particles'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

// Navbar links (id of the section -> text shown)
const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'stack', label: 'Tech Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'certs', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export default function App() {
  const [theme, setTheme] = useState('dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [zoomedImage, setZoomedImage] = useState(null) // image shown in the big popup
  const [activeSection, setActiveSection] = useState('')
  const [scrollProgress, setScrollProgress] = useState(0)

  // Apply dark / light theme
  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  // Scroll progress bar + highlight the current navbar link
  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.body.scrollHeight - window.innerHeight
      setScrollProgress((window.scrollY / scrollable) * 100)

      let current = ''
      document.querySelectorAll('section').forEach((section) => {
        if (window.scrollY + 120 >= section.offsetTop) current = section.id
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = (e) => {
    e.stopPropagation()
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      {/* Scroll progress bar */}
      <div id="pg" style={{ width: scrollProgress + '%' }} />

      {/* NAVBAR */}
      <nav>
        <div className="wrap">
          <a href="#home" className="logo mono">&lt;<b>JP</b>Musni/&gt;</a>

          <div className={`links ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={activeSection === link.id ? 'on' : ''}
              >
                {link.label}
              </a>
            ))}

            <button id="th" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          <button id="bg" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <FaBars />
          </button>
        </div>
      </nav>

      {/* HOME */}
      <section id="home">
        <div style={{ position: 'absolute', inset: 0 }}>
          <Particles />
        </div>

        <div className="wrap hero" style={{ position: 'relative', minHeight: '100vh', alignContent: 'center' }}>
          <div>
            <span className="tag">&gt; WHO AM I?</span>
            <h1>Hi, I'm <span className="grad">John Patrick Musni</span></h1>
            <Typing />
            <p>
              BSIT 4th year student who builds clean, responsive and user-friendly websites,
              and keeps systems running smoothly as an IT support enthusiast.
            </p>

            <div className="cta">
              <a className="btn p" href="#projects">View Projects →</a>
              <a className="btn" href="#contact">Contact Me</a>
            </div>

            <div className="soc">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href={`mailto:${EMAIL}`} aria-label="Email"><FaEnvelope /></a>
            </div>
          </div>

          <div className="avatar">
            <img src={img('profile.png')} alt="John Patrick Musni" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="wrap">
          <SectionHead number="01 — about" title="About Me" />

          <Reveal className="about">
            <div>
              <p>
                I'm <b>John Patrick</b>, a BSIT 4th year student who enjoys building projects
                and responsive websites with HTML, CSS, JavaScript and PHP.
              </p>
              <p>
                I enjoy making sites that are clean, user friendly and shaped around what each
                client needs. Alongside development, I'm comfortable with IT support, from
                hardware troubleshooting to helping users with their applications.
              </p>

              <div className="pills">
                {['Web Development', 'IT Support', 'Problem Solving', 'Clean UI'].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="card info">
              <div><b>Name</b>John Patrick Y. Musni</div>
              <div><b>Course</b>BSIT, 4th Year</div>
              <div><b>Location</b><FaMapMarkerAlt style={{ marginTop: 5 }} /> Concepcion, Tarlac, PH</div>
              <div><b>Email</b><a href={`mailto:${EMAIL}`} style={{ wordBreak: 'break-all' }}>{EMAIL}</a></div>
              <div><b>Goal</b>Software Developer</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <SectionHead number="02 — education" title="Education" subtitle="My academic journey so far." />

          <div className="tl">
            {education.map((item) => (
              <Reveal className="it" key={item.level + item.years}>
                <small>{item.years}</small>
                <h3>{item.level}</h3>
                <p>{item.school}</p>
                <p>{item.place}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="wrap">
          <SectionHead
            number="03 — skills"
            title="Skills"
            subtitle="What I do well, and how confident I am in each."
          />

          <div className="grid">
            {skillGroups.map((group) => (
              <Reveal className="card" key={group.title}>
                <h3 className="mono" style={{ color: 'var(--ac)', fontSize: 15, marginBottom: 16 }}>
                  {group.title}
                </h3>

                {group.items.map((skill) => (
                  <div className="sk" key={skill.name}>
                    <div>
                      <span>{skill.name}</span>
                      <em>{skill.level}</em>
                    </div>
                    <div className="bar"><i data-w={skill.percent} /></div>
                  </div>
                ))}
              </Reveal>
            ))}
          </div>

          <h3 className="mono" style={{ margin: '34px 0 14px', color: 'var(--ac)', fontSize: 15 }}>
            Professional skills
          </h3>
          <Reveal className="pills">
            {professionalSkills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="stack" style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <SectionHead
            number="04 — tech-stack"
            title="Tech Stack"
            subtitle="The languages, frameworks and tools I work with."
          />

          {techStack.map((group) => (
            <Reveal className="tg" key={group.title}>
              <h3>{`// ${group.title}`}</h3>
              <div className="tools">
                {group.tools.map((tool) => (
                  <div className="tool" key={tool.name}>
                    <span className="ic"><tool.icon style={{ color: tool.color }} /></span>
                    {tool.name}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROJECTS (components/Projects.jsx) */}
      <Projects onZoom={setZoomedImage} />

      {/* CERTIFICATIONS (components/Certifications.jsx) */}
      <Certifications onZoom={setZoomedImage} />

      {/* CONTACT (components/Contact.jsx) */}
      <Contact />

      <footer>© 2026 John Patrick Y. Musni. All Rights Reserved.</footer>

      {/* Big image popup */}
      <div id="lb" className={zoomedImage ? 'on' : ''} onClick={() => setZoomedImage(null)}>
        {zoomedImage && <img src={zoomedImage} alt="" />}
      </div>
    </>
  )
}