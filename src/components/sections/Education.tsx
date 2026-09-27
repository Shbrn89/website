import Section from '../ui/Section'
import Tag from '../ui/Tag'
import { education, relevantCoursework } from '../../data/portfolio'

export default function Education() {
  return (
    <Section id="education" eyebrow="04 — Education" title="Education">
      <div className="max-w-2xl border-l border-white/10 pl-6">
        <h3 className="font-serif text-xl text-white">{education.university}</h3>
        <p className="mt-1 text-sm text-neutral-400">{education.program}</p>
        <p className="mt-4 text-sm leading-relaxed text-neutral-400">
          {education.description}
        </p>

        {relevantCoursework.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {relevantCoursework.map((course) => (
              <Tag key={course}>{course}</Tag>
            ))}
          </div>
        )}
      </div>
    </Section>
  )
}
