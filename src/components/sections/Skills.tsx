import Section from '../ui/Section'
import Tag from '../ui/Tag'
import { skillGroups } from '../../data/portfolio'

// Small accent glyph per skill group (index-based, purely decorative).
const groupAccents = ['{ }', '</>', 'AI', '⚙']

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technologies I work with"
      description="Tools and concepts I use in coursework and personal projects, or that I'm actively learning."
      className="bg-base-900/40"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <div key={group.category} className="card card-hover">
            <div className="mb-5 flex items-center gap-3">
              <span
                aria-hidden
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-base-900/70 font-mono text-xs font-bold text-accent-glow"
              >
                {groupAccents[i % groupAccents.length]}
              </span>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
                {group.category}
              </h3>
            </div>
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
