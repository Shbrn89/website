import Container from '../ui/Container'
import Portrait from '../ui/Portrait'
import { GitHubIcon, ArrowUpRightIcon } from '../ui/icons'
import { profile } from '../../data/portfolio'

export default function Hero() {
  return (
    <section id="top" className="pt-32 pb-20 sm:pt-44 sm:pb-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* Left: intro */}
          <div className="order-2 animate-fade-in lg:order-1">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" aria-hidden />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {profile.label}
              </p>
            </div>

            <h1 className="mt-6 font-serif text-5xl leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {profile.fullName}
            </h1>

            <p className="mt-7 max-w-md text-2xl leading-snug text-neutral-100 sm:text-[1.7rem]">
              {profile.statement}
            </p>

            <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-400">
              {profile.summary}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="btn-primary px-7 py-3 text-sm tracking-wide"
              >
                View Projects
                <ArrowUpRightIcon width={15} height={15} />
              </a>
              <a
                href={profile.githubUrl}
                target={
                  profile.githubUrl.startsWith('http') ? '_blank' : undefined
                }
                rel={
                  profile.githubUrl.startsWith('http') ? 'noreferrer' : undefined
                }
                className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
              >
                <GitHubIcon width={16} height={16} />
                GitHub
              </a>
            </div>
          </div>

          {/* Right: portrait */}
          <div className="order-1 flex flex-col items-center lg:order-2 lg:items-end">
            <Portrait src={profile.photo} alt={profile.fullName} />
            <p className="mt-6 max-w-sm text-center font-mono text-xs uppercase tracking-[0.2em] text-neutral-600 lg:text-right">
              {profile.university} — {profile.major}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
