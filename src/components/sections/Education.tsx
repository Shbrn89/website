import Section from '../ui/Section'
import Timeline from '../ui/Timeline'
import Tag from '../ui/Tag'
import { education, relevantCoursework } from '../../data/portfolio'

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Where I'm studying"
      className="bg-base-900/40"
    >
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Timeline items={education} />
        </div>

        {relevantCoursework.length > 0 && (
          <div className="card h-fit">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500">
              Relevant coursework
            </h3>
            <div className="flex flex-wrap gap-2">
              {relevantCoursework.map((course) => (
                <Tag key={course}>{course}</Tag>
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  )
}
