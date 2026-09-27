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
    <Section id="contact" index="06" eyebrow="06 — Contact" title={contact.heading}>
      <p className="max-w-xl text-base leading-relaxed text-neutral-400">
        {contact.text}
      </p>

      <ul className="mt-10 max-w-xl divide-y divide-white/10 border-y border-white/10">
        {links.map(({ label, value, href, Icon }, i) => {
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
                className={`group flex items-center justify-between gap-4 py-5 text-sm transition-colors ${
                  isRealLink
                    ? 'text-neutral-200 hover:text-white'
                    : 'cursor-default text-neutral-500'
                }`}
              >
                <span className="flex items-center gap-4">
                  <span className="font-mono text-xs text-neutral-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Icon width={16} height={16} />
                  {label}
                </span>
                <span
                  className={`font-mono text-xs text-neutral-500 transition-transform ${
                    isRealLink ? 'group-hover:translate-x-0.5' : ''
                  }`}
                >
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
