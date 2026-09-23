import { useEffect, useState } from 'react'
import Container from '../ui/Container'
import { MenuIcon, CloseIcon } from '../ui/icons'
import { navLinks, profile } from '../../data/portfolio'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-white/5 bg-base-950/80 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 text-base font-bold text-white"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-gradient text-sm font-extrabold text-base-950">
            S
          </span>
          <span>{profile.displayName}</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary ml-2">
            Get in touch
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-200 md:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/5 bg-base-950/95 backdrop-blur-md md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-base-800 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Get in touch
            </a>
          </Container>
        </div>
      )}
    </header>
  )
}
