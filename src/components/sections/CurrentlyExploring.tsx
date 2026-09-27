import Section from '../ui/Section'
import { currentlyExploring } from '../../data/portfolio'

export default function CurrentlyExploring() {
  return (
    <Section
      id="exploring"
      index="04"
      eyebrow="04 — Currently Exploring"
      title="Currently Exploring"
      description="Areas I'm actively learning right now — not areas of professional expertise."
    >
      <div className="grid divide-y divide-white/10 border-y border-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {currentlyExploring.map((item, i) => (
          <div key={item.title} className="py-6 sm:px-8 sm:py-8">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="border border-white/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                Learning
              </span>
            </div>
            <h3 className="mt-4 font-serif text-lg text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
