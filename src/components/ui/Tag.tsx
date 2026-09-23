type TagProps = {
  children: string
}

/** A small pill used for tech tags and skills. */
export default function Tag({ children }: TagProps) {
  return (
    <span className="rounded-md border border-white/10 bg-base-900 px-2.5 py-1 text-xs font-medium text-slate-300">
      {children}
    </span>
  )
}
