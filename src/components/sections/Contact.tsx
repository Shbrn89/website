import Section from '../ui/Section'
import { contactIcons } from '../ui/icons'
import { contact, profile } from '../../data/portfolio'

export default function Contact() {
  // Hide any contact link that has no real value yet (e.g. empty location).
  const links = contact.links.filter((l) => l.value)

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's connect"
      description={contact.intro}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {links.map((link) => {
          const Icon = contactIcons[link.icon]
          const isLink = link.href && link.href !== '#'
          const Wrapper = isLink ? 'a' : 'div'
          return (
            <Wrapper
              key={link.label}
              {...(isLink
                ? {
                    href: link.href,
                    target: link.href.startsWith('http') ? '_blank' : undefined,
                    rel: link.href.startsWith('http') ? 'noreferrer' : undefined,
                  }
                : {})}
              className={`card flex items-center gap-4 ${
                isLink ? 'card-hover' : ''
              }`}
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent-glow">
                <Icon />
              </span>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  {link.label}
                </p>
                <p className="truncate text-sm font-semibold text-white">
                  {link.value}
                </p>
              </div>
            </Wrapper>
          )
        })}
      </div>

      <p className="mt-8 text-sm text-slate-500">
        Prefer email? Reach {profile.displayName} directly and I&apos;ll get
        back to you as soon as I can.
      </p>
    </Section>
  )
}
