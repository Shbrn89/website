import type { ReactNode } from 'react'
import Container from './Container'

type SectionProps = {
  id: string
  eyebrow?: string
  title?: string
  description?: string
  children: ReactNode
  className?: string
}

/**
 * A consistent section wrapper: vertical rhythm, an optional titled header
 * (eyebrow + heading + description), and a centered container.
 */
export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = '',
}: SectionProps) {
  return (
    <section id={id} className={`border-t border-white/5 py-20 sm:py-24 ${className}`}>
      <Container>
        {(eyebrow || title || description) && (
          <div className="mb-12 max-w-2xl">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && (
              <h2 className="font-serif text-3xl tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base leading-relaxed text-neutral-400">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  )
}
