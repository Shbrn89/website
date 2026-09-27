import Container from '../ui/Container'
import { profile, footer, navLinks } from '../../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-serif text-white">{profile.fullName}</p>
          <p className="mt-1 text-xs text-neutral-500">{footer.note}</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>

      <Container className="mt-8">
        <p className="text-center text-xs text-neutral-600">
          © {year} {profile.displayName}
        </p>
      </Container>
    </footer>
  )
}
