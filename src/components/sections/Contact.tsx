import Section from '../ui/Section'
import { EmailIcon, GitHubIcon, LinkedInIcon, ArrowUpRightIcon } from '../ui/icons'
import { contact, profile } from '../../data/portfolio'

const links = [
  {
    label: 'GitHub',
    value: profile.githubUrl,
    Icon: GitHubIcon,
  },
  {
    label: 'LinkedIn',
    value: profile.linkedinUrl,
    Icon: LinkedInIcon,
  },
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: EmailIcon,
  },
  {
    label: 'Resume',
    value: profile.resumeUrl,
    Icon: ArrowUpRightIcon,
  },
]

export default function Contact() {
  return (
    <Section id="contact" eyebrow="06 — Contact" title={contact.heading}>
      <p className="max-w-xl text-base leading-relaxed text-neutral-400">
        {contact.text}
      </p>

      <ul className="mt-8 max-w-xl divide-y divide-white/10 border-t border-white/10">
        {links.map(({ label, value, href, Icon }) => {
          const url = href ?? value
          const isPlaceholder = !url || url === '#' || url.includes('example.com')
          const isRealLink = !isPlaceholder
          return (
            <li key={label}>
              <a
                href={isRealLink ? url : undefined}
                target={url?.startsWith('http') ? '_blank' : undefined}
                rel={url?.startsWith('http') ? 'noreferrer' : undefined}
                aria-disabled={!isRealLink}
                className={`flex items-center justify-between gap-4 py-4 text-sm transition-colors ${
                  isRealLink
                    ? 'text-neutral-200 hover:text-white'
                    : 'cursor-default text-neutral-500'
                }`}
              >
                <span className="flex items-center gap-3">
                  <Icon width={16} height={16} />
                  {label}
                </span>
                <span className="font-mono text-xs text-neutral-500">
                  {isRealLink ? value : 'link pending'}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
