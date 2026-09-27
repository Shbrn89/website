import Section from '../ui/Section'
import { about } from '../../data/portfolio'

export default function About() {
  return (
    <Section id="about" eyebrow="02 — About" title="About">
      <div className="max-w-2xl space-y-5">
        {about.paragraphs.map((p, i) => (
          <p key={i} className="text-base leading-relaxed text-neutral-300">
            {p}
          </p>
        ))}
      </div>
    </Section>
  )
}
