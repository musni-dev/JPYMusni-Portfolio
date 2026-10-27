import { useState, useEffect, useRef } from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaLaravel, FaNodeJs, FaPython, FaJava, FaFigma, FaGitAlt, FaGithub, FaLinkedin, FaVuejs, FaAngular, FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaAward, FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaServer, FaBars, FaSun, FaMoon, FaPaintBrush, FaVideo, FaCode } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFlutter, SiDart, SiMysql, SiSqlite, SiFirebase, SiSupabase, SiPostgresql, SiBlender, SiGimp, SiPostman, SiAndroidstudio } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { DiVisualstudio } from 'react-icons/di'


const EMAIL = 'musnipatrickyandoc@gmail.com'
const GH = 'https://github.com/musni-dev'
const LI = 'https://www.linkedin.com/in/john-patrick-musni-b8739a447'

const edu = [
  ['2023 – Present', 'Tertiary Education (College)', 'Dominican College of Tarlac, Inc. — Bachelor of Science in Information Technology', 'Capas, Tarlac'],
  ['2021 – 2023', 'Secondary Education (Senior High)', 'Benigno S. Aquino National High School — Humanities and Social Sciences (HUMSS)', 'San Nicolas Pob., Concepcion, Tarlac'],
  ['2017 – 2021', 'Secondary Education (Junior High)', 'Benigno S. Aquino National High School', 'San Nicolas Pob., Concepcion, Tarlac'],
  ['2011 – 2017', 'Primary Education', 'Jefmin Elementary School', 'Dutung A Matas, Concepcion, Tarlac'],
]
const skills = [
  ['Technical', [['Web Development', 'Strong', 92], ['IT Support', 'Strong', 90], ['Database Management', 'Comfortable', 72], ['Software & Applications', 'Comfortable', 70], ['Hardware', 'Comfortable', 68], ['Game Development', 'Basic', 40], ['Basic Networking', 'Basic', 45], ['Basic Security', 'Basic', 40]]],
  ['Design', [['Graphic Design (Canva)', 'Strong', 90], ['UI Design (Figma)', 'Comfortable', 72]]],
]
const pro = ['Problem Solving', 'Teamwork & Collaboration', 'Time Management', 'Adaptability', 'Customer Service', 'Communication']
const stack = [
  ['Programming Languages', [['PHP', FaPhp, '#777BB4'], ['JavaScript', FaJs, '#F7DF1E'], ['Java', FaJava, '#E76F00'], ['Python', FaPython, '#3776AB'], ['Dart', SiDart, '#0175C2']]],
  ['Front-end', [['HTML', FaHtml5, '#E34F26'], ['CSS', FaCss3Alt, '#1572B6'], ['JavaScript', FaJs, '#F7DF1E'], ['React', FaReact, '#61DAFB'], ['Next.js', SiNextdotjs, '#000'], ['TypeScript', SiTypescript, '#3178C6'], ['Tailwind CSS', SiTailwindcss, '#06B6D4']]],
  ['Back-end', [['PHP', FaPhp, '#777BB4'], ['Laravel', FaLaravel, '#FF2D20'], ['Python', FaPython, '#3776AB'], ['Node.js', FaNodeJs, '#5FA04E']]],
  ['Frameworks', [['Flutter', SiFlutter, '#02569B'], ['Laravel', FaLaravel, '#FF2D20'], ['React', FaReact, '#61DAFB'], ['Angular', FaAngular, '#DD0031'], ['Vue', FaVuejs, '#4FC08D']]],
  ['Database & Services', [['MySQL', SiMysql, '#4479A1'], ['SQLite', SiSqlite, '#003B57'], ['Firebase', SiFirebase, '#FFCA28'], ['Supabase', SiSupabase, '#3FCF8E'], ['PostgreSQL', SiPostgresql, '#4169E1']]],
  ['Design & Media', [['Canva', FaPaintBrush, '#00C4CC'], ['Figma', FaFigma, '#F24E1E'], ['Blender', SiBlender, '#E87D0D'], ['GIMP', SiGimp, '#5C5543'], ['CapCut', FaVideo, '#888']]],
  ['IDEs & Dev Tools', [['VS Code', VscVscode, '#007ACC'], ['Visual Studio 2022', DiVisualstudio, '#5C2D91'], ['Android Studio', SiAndroidstudio, '#3DDC84'], ['Eclipse IDE', FaCode, '#7F6FD9'], ['Git', FaGitAlt, '#F05032'], ['GitHub', FaGithub, '#181717'], ['Postman', SiPostman, '#FF6C37'], ['Herd', FaServer, '#F9322C'], ['Laragon', FaServer, '#0E83CD']]],
]
const projects = [
  { id: 'evosas', name: 'EvOSAS', sub: 'Evolution of the Office of Student Affairs and Services', url: 'https://evosas-dct.com/', tech: ['React', 'JavaScript', 'HTML5', 'CSS', 'Firebase'], desc: 'A centralized digital platform that modernizes the Office of Student Affairs and Services at Dominican College of Tarlac, Inc. It streamlines disciplinary records, lost-and-found management, SSC attendance monitoring, event evaluations, and student organization file management in one secure, efficient website.' },
  { id: 'taskease', name: 'Taskease', sub: 'Task assignment & team management', tech: ['JavaScript', 'HTML5', 'CSS', 'Bootstrap 5', 'CodeIgniter 4', 'MySQL'], desc: 'A task management system where a team leader creates projects, assigns tasks to team members and tracks progress. It keeps responsibilities clear, deadlines visible and teamwork organized in one place.' },
  { id: 'health', name: 'Barangay Dela Cruz Health Center', sub: 'Web Management System', tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap 5', 'Firebase'], desc: 'Digitizes patient records, streamlines appointment scheduling, and monitors medical supplies. It improves operational efficiency, ensures accurate data management, and provides faster, more organized healthcare services.' },
]
const certs = [['CCNA: Enterprise Networking, Security, and Automation', 'Oct 19, 2026'], ['Introduction to Cybersecurity', 'March 27, 2026'], ['CSS Essentials', 'August 4, 2025'], ['CCNA: Switching, Routing, and Wireless Essentials', 'May 7, 2025'], ['CCNA: Introduction to Networks', 'November 20, 2024'], ['Partner: JavaScript Essentials 1 (JSE)', 'December 13, 2023']]
const awards = ['Second Semester, 2023–2024', 'First Semester, 2024–2025', 'First Semester, 2026–2027']
const links = ['about', 'education', 'skills', 'stack', 'projects', 'certs', 'contact']
const labels = { about: 'About', education: 'Education', skills: 'Skills', stack: 'Tech Stack', projects: 'Projects', certs: 'Certifications', contact: 'Contact' }
const img = (n) => `${import.meta.env.BASE_URL}images/${n}`

function Rv({ children, className = '', as: T = 'div', ...p }) {
  const ref = useRef()
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { ref.current.classList.add('in'); ref.current.querySelectorAll('.bar i').forEach((b) => (b.style.width = b.dataset.w + '%')); io.disconnect() } }, { threshold: 0.12 })
    io.observe(ref.current); return () => io.disconnect()
  }, [])
  return <T ref={ref} className={`rv ${className}`} {...p}>{children}</T>
}
const Head = ({ n, t, sub }) => (<><Rv as="span" className="tag">{`// ${n}`}</Rv><Rv as="h2">{t}</Rv>{sub && <Rv as="p" className="sub">{sub}</Rv>}</>)

function Typing() {
  const [txt, setTxt] = useState('')
  useEffect(() => {
    const R = ['IT Support', 'Aspiring Software Developer', 'Web Developer']; let r = 0, c = 0, d = false, t
    const tick = () => { const w = R[r]; c += d ? -1 : 1; setTxt(w.slice(0, c)); let ms = d ? 35 : 75
      if (!d && c === w.length) { d = true; ms = 1400 } else if (d && !c) { d = false; r = (r + 1) % R.length; ms = 300 }
      t = setTimeout(tick, ms) }
    tick(); return () => clearTimeout(t)
  }, [])
  return <div className="role">{txt}</div>
}

function Particles() {
  const ref = useRef()
  useEffect(() => {
    const cv = ref.current, x = cv.getContext('2d'); let W, H, pts, raf
    const rs = () => { W = cv.width = cv.offsetWidth; H = cv.height = cv.offsetHeight; pts = Array.from({ length: Math.min(70, (W / 16) | 0) }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: Math.random() - 0.5, vy: Math.random() - 0.5 })) }
    rs(); addEventListener('resize', rs)
    const a = () => { x.clearRect(0, 0, W, H); x.fillStyle = x.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--ac').trim()
      pts.forEach((p, i) => { p.x = (p.x + p.vx * 0.5 + W) % W; p.y = (p.y + p.vy * 0.5 + H) % H; x.globalAlpha = 0.8; x.beginPath(); x.arc(p.x, p.y, 1.8, 0, 7); x.fill()
        for (let j = i + 1; j < pts.length; j++) { const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y); if (d < 130) { x.globalAlpha = (1 - d / 130) * 0.35; x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(q.x, q.y); x.stroke() } } })
      raf = requestAnimationFrame(a) }
    a(); return () => { cancelAnimationFrame(raf); removeEventListener('resize', rs) }
  }, [])
  return <canvas id="cv" ref={ref} />
}

function Slide({ p, zoom }) {
  const [i, setI] = useState(1)
  return (
    <div className="sl"><div className="card">
      <div className="gal">
        <div className="main" onClick={() => zoom(img(`${p.id}-${i}.png`))}><img src={img(`${p.id}-${i}.png`)} alt={`${p.name} screenshot ${i}`} onError={(e) => (e.target.style.display = 'none')} onLoad={(e) => (e.target.style.display = 'block')} /></div>
        <div className="thumbs">{[1, 2, 3].map((n) => <button key={n} className={n === i ? 'on' : ''} onClick={() => setI(n)} aria-label={`Photo ${n}`}><img src={img(`${p.id}-${n}.png`)} alt="" onError={(e) => (e.target.style.display = 'none')} /></button>)}</div>
      </div>
      <div className="info2"><small className="mono" style={{ color: 'var(--ac)', fontSize: 12 }}>{p.sub}</small><h3>{p.name}</h3><p>{p.desc}</p>
        <div className="stk">{p.tech.map((s) => <span key={s}>{s}</span>)}</div>
        {p.url && <a className="btn" style={{ justifyContent: 'center' }} href={p.url} target="_blank" rel="noopener noreferrer">Visit Live Site <FaExternalLinkAlt size={13} /></a>}
      </div>
    </div></div>
  )
}

function Carousel({ zoom }) {
  const [i, setI] = useState(0), sx = useRef(0), n = projects.length
  const go = (k) => setI((k + n) % n)
  return (
    <Rv className="car">
      <button className="nv l" onClick={() => go(i - 1)} aria-label="Previous"><FaChevronLeft /></button>
      <button className="nv r" onClick={() => go(i + 1)} aria-label="Next"><FaChevronRight /></button>
      <div className="vp" onTouchStart={(e) => (sx.current = e.touches[0].clientX)} onTouchEnd={(e) => { const d = e.changedTouches[0].clientX - sx.current; if (Math.abs(d) > 50) go(i + (d < 0 ? 1 : -1)) }}>
        <div className="trk" style={{ transform: `translateX(-${i * 100}%)` }}>{projects.map((p) => <Slide key={p.id} p={p} zoom={zoom} />)}</div>
      </div>
      <div className="dots">{projects.map((p, k) => <button key={p.id} className={k === i ? 'on' : ''} onClick={() => setI(k)} aria-label={p.name} />)}</div>
    </Rv>
  )
}

export default function App() {
  const [theme, setTheme] = useState('dark'), [open, setOpen] = useState(false), [lb, setLb] = useState(null), [act, setAct] = useState(''), [pg, setPg] = useState(0)
  useEffect(() => { document.documentElement.dataset.theme = theme }, [theme])
  useEffect(() => {
    const f = () => { setPg((scrollY / (document.body.scrollHeight - innerHeight)) * 100); let c = ''; document.querySelectorAll('section').forEach((s) => { if (scrollY + 120 >= s.offsetTop) c = s.id }); setAct(c) }
    addEventListener('scroll', f); return () => removeEventListener('scroll', f)
  }, [])
  const [f, setF] = useState({ n: '', e: '', m: '' })
  const send = (ev) => { ev.preventDefault(); location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Portfolio message from ' + f.n)}&body=${encodeURIComponent(f.m + '\n\n' + f.n + ' (' + f.e + ')')}` }

  return (
    <>
      <div id="pg" style={{ width: pg + '%' }} />
      <nav><div className="wrap">
        <a href="#home" className="logo mono">&lt;<b>JP</b>Musni/&gt;</a>
        <div className={`links ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
          {links.map((l) => <a key={l} href={`#${l}`} className={act === l ? 'on' : ''}>{labels[l]}</a>)}
          <button id="th" onClick={(e) => { e.stopPropagation(); setTheme(theme === 'dark' ? 'light' : 'dark') }} aria-label="Toggle theme">{theme === 'dark' ? <FaSun /> : <FaMoon />}</button>
        </div>
        <button id="bg" onClick={() => setOpen(!open)} aria-label="Menu"><FaBars /></button>
      </div></nav>

      <section id="home"><div style={{ position: 'absolute', inset: 0 }}><Particles /></div>
        <div className="wrap hero" style={{ position: 'relative', minHeight: '100vh', alignContent: 'center' }}>
          <div><span className="tag">&gt; WHO AM I?</span>
            <h1>Hi, I'm <span className="grad">John Patrick Musni</span></h1><Typing />
            <p>BSIT 4th year student who builds clean, responsive and user-friendly websites, and keeps systems running smoothly as an IT support enthusiast.</p>
            <div className="cta"><a className="btn p" href="#projects">View Projects →</a><a className="btn" href="#contact">Contact Me</a></div>
            <div className="soc"><a href={GH} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a><a href={LI} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a><a href={`mailto:${EMAIL}`} aria-label="Email"><FaEnvelope /></a></div>
          </div>
          <div className="avatar"><img src={img('profile.png')} alt="John Patrick Musni" /></div>
        </div>
      </section>

      <section id="about"><div className="wrap">
        <Head n="01 — about" t="About Me" />
        <Rv className="about">
          <div><p>I'm <b>John Patrick</b>, a BSIT 4th year student who enjoys building projects and responsive websites with HTML, CSS, JavaScript and PHP.</p>
            <p>I enjoy making sites that are clean, user friendly and shaped around what each client needs. Alongside development, I'm comfortable with IT support, from hardware troubleshooting to helping users with their applications.</p>
            <div className="pills">{['Web Development', 'IT Support', 'Problem Solving', 'Clean UI'].map((s) => <span key={s}>{s}</span>)}</div></div>
          <div className="card info"><div><b>Name</b>John Patrick Y. Musni</div><div><b>Course</b>BSIT, 4th Year</div><div><b>Location</b><FaMapMarkerAlt style={{ marginTop: 5 }} /> Concepcion, Tarlac, PH</div><div><b>Email</b><a href={`mailto:${EMAIL}`} style={{ wordBreak: 'break-all' }}>{EMAIL}</a></div><div><b>Goal</b>Software Developer</div></div>
        </Rv>
      </div></section>

      <section id="education" style={{ background: 'var(--bg2)' }}><div className="wrap">
        <Head n="02 — education" t="Education" sub="My academic journey so far." />
        <div className="tl">{edu.map((e) => <Rv className="it" key={e[1] + e[0]}><small>{e[0]}</small><h3>{e[1]}</h3><p>{e[2]}</p><p>{e[3]}</p></Rv>)}</div>
      </div></section>

      <section id="skills"><div className="wrap">
        <Head n="03 — skills" t="Skills" sub="What I do well, and how confident I am in each." />
        <div className="grid">{skills.map(([g, l]) => <Rv className="card" key={g}><h3 className="mono" style={{ color: 'var(--ac)', fontSize: 15, marginBottom: 16 }}>{g}</h3>
          {l.map(([s, lv, w]) => <div className="sk" key={s}><div><span>{s}</span><em>{lv}</em></div><div className="bar"><i data-w={w} /></div></div>)}</Rv>)}</div>
        <h3 className="mono" style={{ margin: '34px 0 14px', color: 'var(--ac)', fontSize: 15 }}>Professional skills</h3>
        <Rv className="pills">{pro.map((s) => <span key={s}>{s}</span>)}</Rv>
      </div></section>

      <section id="stack" style={{ background: 'var(--bg2)' }}><div className="wrap">
        <Head n="04 — tech-stack" t="Tech Stack" sub="The languages, frameworks and tools I work with." />
        {stack.map(([g, t]) => <Rv className="tg" key={g}><h3>{`// ${g}`}</h3><div className="tools">{t.map(([n, Ic, c]) => <div className="tool" key={n}><span className="ic"><Ic style={{ color: c }} /></span>{n}</div>)}</div></Rv>)}
      </div></section>

      <section id="projects"><div className="wrap">
        <Head n="05 — projects" t="Projects" sub="Things I have designed and built. Swipe or use the arrows, and click a photo to view it larger." />
        <Carousel zoom={setLb} />
      </div></section>

      <section id="certs" style={{ background: 'var(--bg2)' }}><div className="wrap">
        <Head n="06 — certifications & awards" t="Certifications & Awards" sub="Training I completed and recognitions I earned." />
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))' }}>
          {certs.map(([c, d], k) => <Rv className="card cert" key={c}><div className="th" onClick={() => setLb(img(`cert-${k + 1}.jpg`))}><img src={img(`cert-${k + 1}.jpg`)} alt="" onError={(e) => e.target.remove()} /><FaGraduationCap style={{ position: 'absolute', zIndex: -1 }} /></div><div><h4>{c}</h4><small>{d}</small></div></Rv>)}
          {awards.map((a) => <Rv className="card cert aw" key={a}><div className="th" style={{ cursor: 'default', color: 'var(--ac)' }}><FaAward /></div><div><h4>Dean's Lister</h4><small>{a}</small></div></Rv>)}
        </div>
      </div></section>

      <section id="contact"><div className="wrap">
        <Head n="07 — contact" t="Let's Work Together" sub="Have a project, a job opening, or a question? Send me a message." />
        <Rv className="ct"><div style={{ display: 'grid', gap: 16 }}>
          <a className="card" href={`mailto:${EMAIL}`}><span className="ci"><FaEnvelope /></span><div><small>Email</small><span>{EMAIL}</span></div></a>
          <a className="card" href={GH} target="_blank" rel="noopener noreferrer"><span className="ci"><FaGithub /></span><div><small>GitHub</small><span>github.com/musni-dev</span></div></a>
          <a className="card" href={LI} target="_blank" rel="noopener noreferrer"><span className="ci"><FaLinkedin /></span><div><small>LinkedIn</small><span>john-patrick-musni</span></div></a>
          <div className="card ic-l"><span className="ci"><FaMapMarkerAlt /></span> Concepcion, Tarlac, Philippines</div></div>
          <form className="card" onSubmit={send}>
            <input placeholder="Your name" required value={f.n} onChange={(e) => setF({ ...f, n: e.target.value })} />
            <input type="email" placeholder="Your email" required value={f.e} onChange={(e) => setF({ ...f, e: e.target.value })} />
            <textarea rows="5" placeholder="Your message" required value={f.m} onChange={(e) => setF({ ...f, m: e.target.value })} />
            <button className="btn p" type="submit">Send Message ➤</button>
          </form>
        </Rv>
      </div></section>
      <footer>© 2026 John Patrick Y. Musni. All Rights Reserved.</footer>
      <div id="lb" className={lb ? 'on' : ''} onClick={() => setLb(null)}>{lb && <img src={lb} alt="" />}</div>
    </>
  )
}
