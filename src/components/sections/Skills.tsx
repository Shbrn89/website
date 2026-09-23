import Section from '../ui/Section'
import Tag from '../ui/Tag'
import { skillGroups } from '../../data/portfolio'

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technologies I work with"
      description="Tools and concepts I use in coursework and personal projects, or that I'm actively learning."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.category} className="card card-hover">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent-soft">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Tag key={skill.name}>{skill.name}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
