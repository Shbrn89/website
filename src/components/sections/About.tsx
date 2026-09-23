import Section from '../ui/Section'
import { about } from '../../data/portfolio'

export default function About() {
  return (
    <Section id="about" eyebrow="About me" title="A little about who I am">
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="space-y-5 lg:col-span-2">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-slate-400">
              {p}
            </p>
          ))}
        </div>

        <div className="card h-fit">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500">
            Quick facts
          </h3>
          <dl className="space-y-4">
            {about.highlights.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0"
              >
                <dt className="text-sm text-slate-500">{item.label}</dt>
                <dd className="text-right text-sm font-semibold text-white">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}
