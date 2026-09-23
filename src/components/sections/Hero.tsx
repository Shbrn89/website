import Container from '../ui/Container'
import { profile } from '../../data/portfolio'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-hero-glow pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <Container>
        <div className="max-w-3xl animate-fade-in-up">
          <span className="chip mb-6 gap-2">
            <span className="h-2 w-2 rounded-full bg-teal" />
            Open to a semester 6 internship
          </span>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
            Hi, I&apos;m{' '}
            <span className="text-gradient">{profile.displayName}</span>.
            <br />
            {profile.role}.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View my projects
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 sm:max-w-xl">
            <div>
              <dt className="text-sm text-slate-500">University</dt>
              <dd className="mt-1 font-semibold text-white">
                {profile.university}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500">Major</dt>
              <dd className="mt-1 font-semibold text-white">{profile.major}</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500">Semester</dt>
              <dd className="mt-1 font-semibold text-white">
                {profile.semester}
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  )
}
