import Container from '../ui/Container'
import { profile } from '../../data/portfolio'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-hero-glow pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* faint grid + ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-faint bg-grid [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-accent/20 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-teal/10 blur-[100px]"
      />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left: intro */}
          <div className="animate-fade-in-up">
            <span className="chip mb-6 gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
              </span>
              Computer Science @ BINUS University
            </span>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl">
              Hi, I&apos;m{' '}
              <span className="text-gradient">{profile.displayName}</span>.
              <br />
              Computer Science Student &amp; Aspiring Software Developer
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              Computer Science student at BINUS University who enjoys building
              practical software projects across web development, machine
              learning, and computer vision.
            </p>

            {/* focus areas */}
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.focusAreas.map((area) => (
                <span key={area} className="chip text-xs">
                  {area}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                View my projects
              </a>
              <a href="#contact" className="btn-ghost">
                Get in touch
              </a>
            </div>
          </div>

          {/* Right: decorative profile / code card */}
          <div className="animate-fade-in [animation-delay:150ms]">
            <div className="gradient-border shadow-glow">
              <div className="rounded-2xl bg-base-900/90 p-6 backdrop-blur-sm">
                {/* window chrome */}
                <div className="mb-5 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <span className="h-3 w-3 rounded-full bg-green-400/70" />
                  <span className="ml-3 text-xs text-slate-500">
                    shobirin.ts
                  </span>
                </div>

                {/* faux code */}
                <pre className="overflow-x-auto text-[13px] leading-relaxed">
                  <code className="font-mono">
                    <span className="text-slate-500">const </span>
                    <span className="text-accent-glow">developer</span>
                    <span className="text-slate-500"> = </span>
                    <span className="text-slate-300">{'{'}</span>
                    {'\n'}
                    {'  '}
                    <span className="text-teal-soft">name</span>
                    <span className="text-slate-500">: </span>
                    <span className="text-slate-300">
                      &apos;{profile.fullName}&apos;
                    </span>
                    <span className="text-slate-500">,</span>
                    {'\n'}
                    {'  '}
                    <span className="text-teal-soft">focus</span>
                    <span className="text-slate-500">: [</span>
                    {'\n'}
                    {'    '}
                    <span className="text-slate-300">&apos;Web Development&apos;</span>
                    <span className="text-slate-500">,</span>
                    {'\n'}
                    {'    '}
                    <span className="text-slate-300">&apos;Machine Learning&apos;</span>
                    <span className="text-slate-500">,</span>
                    {'\n'}
                    {'    '}
                    <span className="text-slate-300">&apos;Computer Vision&apos;</span>
                    {'\n'}
                    {'  '}
                    <span className="text-slate-500">],</span>
                    {'\n'}
                    {'  '}
                    <span className="text-teal-soft">university</span>
                    <span className="text-slate-500">: </span>
                    <span className="text-slate-300">
                      &apos;{profile.university}&apos;
                    </span>
                    {'\n'}
                    <span className="text-slate-300">{'}'}</span>
                  </code>
                </pre>
              </div>
            </div>

            {/* quick facts under the card */}
            <dl className="mt-6 grid grid-cols-2 gap-3">
              {[
                { dt: 'University', dd: 'BINUS' },
                { dt: 'Major', dd: 'Computer Sci' },
              ].map((f) => (
                <div
                  key={f.dt}
                  className="rounded-xl border border-white/5 bg-base-800/50 px-4 py-3 text-center"
                >
                  <dt className="text-[11px] uppercase tracking-wider text-slate-500">
                    {f.dt}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-white">
                    {f.dd}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  )
}
