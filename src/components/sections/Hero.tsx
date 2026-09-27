import Container from '../ui/Container'
import Portrait from '../ui/Portrait'
import { GitHubIcon } from '../ui/icons'
import { profile } from '../../data/portfolio'

export default function Hero() {
  return (
    <section id="top" className="pt-28 pb-16 sm:pt-36 sm:pb-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left: intro */}
          <div className="order-2 animate-fade-in lg:order-1">
            <p className="eyebrow">{profile.label}</p>

            <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
              {profile.fullName}
            </h1>

            <p className="mt-5 max-w-md text-xl leading-snug text-neutral-200">
              {profile.statement}
            </p>

            <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-400">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a
                href={profile.githubUrl}
                target={profile.githubUrl.startsWith('http') ? '_blank' : undefined}
                rel={profile.githubUrl.startsWith('http') ? 'noreferrer' : undefined}
                className="btn-ghost"
              >
                <GitHubIcon width={16} height={16} />
                GitHub
              </a>
            </div>
          </div>

          {/* Right: portrait */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <Portrait src={profile.photo} alt={profile.fullName} />
          </div>
        </div>
      </Container>
    </section>
  )
}
