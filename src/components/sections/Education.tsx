import Section from '../ui/Section'
import Tag from '../ui/Tag'
import { education, relevantCoursework } from '../../data/portfolio'

export default function Education() {
  return (
    <Section id="education">
      <div className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_2px_minmax(0,2fr)] sm:gap-0">
        {/* Left label column */}
        <div className="sm:pr-10">
          <p className="eyebrow">05 — Education</p>
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl">
            Education
          </h2>
        </div>

        {/* Divider — horizontal on mobile, vertical on desktop */}
        <div className="my-8 h-px w-full bg-white/10 sm:my-0 sm:h-auto sm:w-px sm:bg-white/10" />

        {/* Right content column */}
        <div className="max-w-xl sm:pl-10">
          <h3 className="font-serif text-xl text-white">
            {education.university}
          </h3>
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
      </div>
    </Section>
  )
}
