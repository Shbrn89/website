import { useState } from 'react'

type ProjectImageProps = {
  src: string
  alt: string
  className?: string
}

/**
 * Project screenshot. Falls back to a plain placeholder block (no stock
 * imagery, no generated graphics) when the screenshot hasn't been added yet
 * under /public/projects — this is expected for projects without an asset
 * yet, not a broken state.
 */
export default function ProjectImage({
  src,
  alt,
  className = '',
}: ProjectImageProps) {
  const [failed, setFailed] = useState(false)

  return (
    <div
      className={`relative overflow-hidden border border-white/10 bg-base-900 ${className}`}
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_10px)] text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
            Screenshot pending
          </span>
          <code className="text-[10px] text-neutral-600">{src}</code>
        </div>
      )}
    </div>
  )
}
