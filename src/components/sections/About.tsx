import Section from '../ui/Section'
import { about } from '../../data/portfolio'

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_2px_minmax(0,2fr)] sm:gap-0">
        {/* Left label column */}
        <div className="sm:pr-10">
          <p className="eyebrow">02 — About</p>
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl">
            About
          </h2>
        </div>

        {/* Divider — horizontal on mobile, vertical on desktop */}
        <div className="my-8 h-px w-full bg-white/10 sm:my-0 sm:h-auto sm:w-px sm:bg-white/10" />

        {/* Right copy column */}
        <div className="max-w-xl space-y-5 sm:pl-10">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-neutral-300">
              {p}
            </p>
          ))}
        </div>
      </div>
    </Section>
  )
}
