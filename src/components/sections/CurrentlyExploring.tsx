import Section from '../ui/Section'
import { currentlyExploring } from '../../data/portfolio'

export default function CurrentlyExploring() {
  return (
    <Section
      id="exploring"
      eyebrow="04 — Currently Exploring"
      title="Currently Exploring"
      description="Areas I'm actively learning right now — not areas of professional expertise."
    >
      <div className="grid gap-8 sm:grid-cols-3">
        {currentlyExploring.map((item) => (
          <div key={item.title}>
            <h3 className="font-serif text-lg text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
