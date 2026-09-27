import Section from '../ui/Section'
import Tag from '../ui/Tag'
import { skillGroups } from '../../data/portfolio'

export default function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      eyebrow="03 — Skills"
      title="Skills"
      description="Tools and areas I use in coursework and the projects above."
    >
      <div className="grid divide-y divide-white/10 border-y border-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.category} className="py-6 sm:px-8 sm:py-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
