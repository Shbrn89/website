import { useState } from 'react'

type ProjectImageProps = {
  src: string
  alt: string
  className?: string
}

/**
 * Project screenshot. Falls back to a plain placeholder block (no stock
 * imagery) when the screenshot hasn't been added yet under /public/projects.
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
        <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 text-center">
          <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-600">
            Screenshot pending
          </span>
          <code className="text-[11px] text-neutral-600">{src}</code>
        </div>
      )}
    </div>
  )
}
