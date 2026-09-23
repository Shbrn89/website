import type { TimelineItem } from '../../data/portfolio'

type TimelineProps = {
  items: TimelineItem[]
}

/** Vertical timeline used for Education and Learning Journey. */
export default function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative space-y-8 border-l border-white/10 pl-8">
      {items.map((item, i) => (
        <li key={`${item.title}-${i}`} className="relative">
          <span className="absolute -left-[2.15rem] top-1.5 grid h-4 w-4 place-items-center rounded-full border border-accent/50 bg-base-950">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-gradient" />
          </span>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="text-base font-semibold text-white">{item.title}</h3>
            <span className="text-xs font-medium uppercase tracking-wider text-accent-soft">
              {item.meta}
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  )
}
