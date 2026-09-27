type TagProps = {
  children: string
}

/** A small label used for tech tags and skills. */
export default function Tag({ children }: TagProps) {
  return (
    <span className="border border-white/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-neutral-400">
      {children}
    </span>
  )
}
