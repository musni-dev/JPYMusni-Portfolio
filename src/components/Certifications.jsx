import { FaGraduationCap, FaAward } from 'react-icons/fa'
import { certificates, awards } from '../data/certificates'
import { img } from '../data/helpers'
import { Reveal, SectionHead } from './Reveal'

export default function Certifications({ onZoom }) {
  return (
    <section id="certs" style={{ background: 'var(--bg2)' }}>
      <div className="wrap">
        <SectionHead
          number="06 — certifications & awards"
          title="Certifications & Awards"
          subtitle="Training I completed and recognitions I earned."
        />

        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))' }}>
          {/* Certificates */}
          {certificates.map((cert) => (
            <Reveal className="card cert" key={cert.title}>
              <div className="th" onClick={() => onZoom(img(cert.image))}>
                <img src={img(cert.image)} alt="" onError={(e) => e.target.remove()} />
                <FaGraduationCap style={{ position: 'absolute', zIndex: -1 }} />
              </div>
              <div>
                <h4>{cert.title}</h4>
                <small>{cert.date}</small>
              </div>
            </Reveal>
          ))}

          {/* Dean's Lister awards */}
          {awards.map((semester) => (
            <Reveal className="card cert aw" key={semester}>
              <div className="th" style={{ cursor: 'default', color: 'var(--ac)' }}>
                <FaAward />
              </div>
              <div>
                <h4>Dean's Lister</h4>
                <small>{semester}</small>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}