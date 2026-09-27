import { useEffect, useState } from 'react'
import Container from '../ui/Container'
import { MenuIcon, CloseIcon, GitHubIcon } from '../ui/icons'
import { navLinks, profile } from '../../data/portfolio'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeHref, setActiveHref] = useState<string>('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: highlight the nav link for whichever section is in view.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => Boolean(el))

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-base-950/95'
          : 'border-b border-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="font-serif text-lg text-white">
          {profile.displayName}
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeHref === link.href
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm transition-colors ${
                  isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  aria-hidden
                  className={`absolute inset-x-3 -bottom-[1px] h-px bg-accent transition-opacity ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </a>
            )
          })}
          <span className="mx-3 h-4 w-px bg-white/10" aria-hidden />
          <a
            href={profile.githubUrl}
            target={profile.githubUrl.startsWith('http') ? '_blank' : undefined}
            rel={profile.githubUrl.startsWith('http') ? 'noreferrer' : undefined}
            aria-label="GitHub"
            className="p-2 text-neutral-400 transition-colors hover:text-white"
          >
            <GitHubIcon width={18} height={18} />
          </a>
          <a
            href={profile.resumeUrl}
            target={profile.resumeUrl.startsWith('http') ? '_blank' : undefined}
            rel={profile.resumeUrl.startsWith('http') ? 'noreferrer' : undefined}
            className="btn-ghost ml-1 !py-2 !text-xs"
          >
            Resume
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center border border-white/10 text-neutral-300 md:hidden"
        >
          {open ? (
            <CloseIcon width={18} height={18} />
          ) : (
            <MenuIcon width={18} height={18} />
          )}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-base-950 md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              const isActive = activeHref === link.href
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-1 py-2.5 text-sm transition-colors ${
                    isActive ? 'text-white' : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  <span
                    aria-hidden
                    className={`h-1 w-1 rounded-full bg-accent transition-opacity ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  {link.label}
                </a>
              )
            })}
            <div className="mt-2 flex items-center gap-3 border-t border-white/10 pt-4">
              <a
                href={profile.githubUrl}
                onClick={() => setOpen(false)}
                className="btn-ghost !py-2 !text-xs"
              >
                <GitHubIcon width={16} height={16} />
                GitHub
              </a>
              <a
                href={profile.resumeUrl}
                onClick={() => setOpen(false)}
                className="btn-ghost !py-2 !text-xs"
              >
                Resume
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
