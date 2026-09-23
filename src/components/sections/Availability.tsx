import Section from '../ui/Section'
import { CheckIcon } from '../ui/icons'
import { availability } from '../../data/portfolio'

export default function Availability() {
  return (
    <Section id="availability" className="pt-4">
      <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-base-800/60 p-8 sm:p-12">
        {/* subtle gradient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
        />
        <div className="relative">
          <span className="chip mb-5 gap-2">
            <span className="h-2 w-2 rounded-full bg-teal" />
            {availability.status}
          </span>

          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {availability.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
            {availability.description}
          </p>

          <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {availability.details.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent-glow">
                  <CheckIcon width={14} height={14} />
                </span>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-slate-500">
                    {item.label}
                  </dt>
                  <dd className="mt-0.5 text-sm font-semibold text-white">
                    {item.value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <a href="#contact" className="btn-primary">
              Contact me about an internship
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
