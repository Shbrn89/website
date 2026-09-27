import Section from '../ui/Section'
import Tag from '../ui/Tag'
import { skillGroups } from '../../data/portfolio'

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="03 — Skills"
      title="Skills"
      description="Tools and areas I use in coursework and the projects above."
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 text-sm font-medium text-white">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
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
