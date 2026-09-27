import { useState } from 'react'

type PortraitProps = {
  src: string
  alt: string
}

/**
 * Hero portrait. Tries to load the real photo at `src`; if it's missing
 * (e.g. the placeholder file hasn't been replaced yet), falls back to a
 * plain monogram block instead of showing a broken image.
 *
 * Presented as a deliberately "framed" object — an offset border sits behind
 * the photo — rather than a plain cropped image, so it reads as a considered
 * design choice instead of a generic resume headshot.
 */
export default function Portrait({ src, alt }: PortraitProps) {
  const [failed, setFailed] = useState(false)
  const initial = alt.trim().charAt(0).toUpperCase() || 'S'

  return (
    <div className="relative w-full max-w-sm sm:max-w-none">
      {/* offset frame sitting behind the photo */}
      <div
        aria-hidden
        className="absolute -bottom-3 -right-3 h-full w-full border border-accent/40"
      />

      <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/15 bg-base-900">
        {!failed ? (
          <img
            src={src}
            alt={alt}
            onError={() => setFailed(true)}
            className="h-full w-full object-cover grayscale-[20%] transition-all duration-500 hover:grayscale-0"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center">
            <span className="font-serif text-6xl text-neutral-600">
              {initial}
            </span>
            <p className="max-w-[14rem] text-xs leading-relaxed text-neutral-500">
              Add a photo at{' '}
              <code className="rounded bg-white/5 px-1 py-0.5 text-neutral-400">
                /public/profile.jpg
              </code>
            </p>
          </div>
        )}

        {/* corner mark to make the placement feel intentional */}
        <span className="absolute left-0 top-0 h-8 w-px bg-accent" />
        <span className="absolute left-0 top-0 h-px w-8 bg-accent" />
      </div>
    </div>
  )
}
