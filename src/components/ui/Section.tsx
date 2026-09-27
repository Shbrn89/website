import type { ReactNode } from 'react'
import Container from './Container'

type SectionProps = {
  id: string
  /** two-digit index shown as a large watermark number, e.g. "01" */
  index?: string
  eyebrow?: string
  title?: string
  description?: string
  children: ReactNode
  className?: string
}

/**
 * A consistent section wrapper: strong vertical rhythm, a large numbered
 * heading block, and a centered container. Shared by every content section
 * so spacing and type scale stay consistent across the page.
 */
export default function Section({
  id,
  index,
  eyebrow,
  title,
  description,
  children,
  className = '',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`border-t border-white/10 py-24 sm:py-32 ${className}`}
    >
      <Container>
        {(eyebrow || title || description) && (
          <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-baseline sm:justify-between">
            <div className="max-w-2xl">
              {eyebrow && <p className="eyebrow">{eyebrow}</p>}
              {title && (
                <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl">
                  {title}
                </h2>
              )}
              {description && (
                <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400">
                  {description}
                </p>
              )}
            </div>
            {index && (
              <span
                aria-hidden
                className="shrink-0 font-serif text-6xl leading-none text-white/[0.06] sm:text-7xl"
              >
                {index}
              </span>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  )
}
