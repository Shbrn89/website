import { useState } from 'react'

type PortraitProps = {
  src: string
  alt: string
}

/**
 * Hero portrait. Tries to load the real photo at `src`; if it's missing
 * (e.g. the placeholder file hasn't been replaced yet), falls back to a
 * plain monogram block instead of showing a broken image.
 */
export default function Portrait({ src, alt }: PortraitProps) {
  const [failed, setFailed] = useState(false)
  const initial = alt.trim().charAt(0).toUpperCase() || 'S'

  return (
    <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden border border-white/10 bg-base-900 sm:max-w-none">
      {!failed ? (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover grayscale-[15%] transition-transform duration-500 hover:grayscale-0"
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
      {/* thin corner mark to make the placement feel intentional, not decorative */}
      <span className="absolute left-0 top-0 h-8 w-px bg-accent/60" />
      <span className="absolute left-0 top-0 h-px w-8 bg-accent/60" />
    </div>
  )
}
