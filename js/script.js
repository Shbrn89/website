/**
 * ============================================================================
 *  SHOBIRIN — PERSONAL PORTFOLIO
 *  Plain vanilla JavaScript. No build step, no framework.
 * ============================================================================
 *
 *  This file handles small interactive behaviors:
 *  1. Navbar background on scroll
 *  2. Mobile menu open/close
 *  3. Scroll-spy — highlight the nav link for the section currently in view
 *  4. Footer year
 *
 *  Note: broken image fallbacks (portrait photo / project screenshots) are
 *  handled inline in index.html via the `onerror` attribute on each <img>,
 *  so they work even if this script fails to load.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScrollState()
  initMobileMenu()
  initScrollSpy()
  setFooterYear()
})

/* -------------------------------------------------------------------------- */
/*  1. NAVBAR BACKGROUND ON SCROLL                                            */
/* -------------------------------------------------------------------------- */

function initNavbarScrollState() {
  const navbar = document.getElementById('navbar')
  if (!navbar) return

  const updateScrolledState = () => {
    navbar.classList.toggle('is-scrolled', window.scrollY > 8)
  }

  updateScrolledState()
  window.addEventListener('scroll', updateScrolledState, { passive: true })
}

/* -------------------------------------------------------------------------- */
/*  2. MOBILE MENU TOGGLE                                                     */
/* -------------------------------------------------------------------------- */

function initMobileMenu() {
  const toggle = document.getElementById('navbar-toggle')
  const menu = document.getElementById('navbar-mobile-menu')
  const iconMenu = document.getElementById('icon-menu')
  const iconClose = document.getElementById('icon-close')
  if (!toggle || !menu) return

  const closeMenu = () => {
    menu.classList.remove('is-open')
    toggle.setAttribute('aria-expanded', 'false')
    iconMenu.style.display = ''
    iconClose.style.display = 'none'
  }

  const toggleMenu = () => {
    const isOpen = menu.classList.toggle('is-open')
    toggle.setAttribute('aria-expanded', String(isOpen))
    iconMenu.style.display = isOpen ? 'none' : ''
    iconClose.style.display = isOpen ? '' : 'none'
  }

  toggle.addEventListener('click', toggleMenu)

  // Close the mobile menu whenever a nav link inside it is clicked.
  menu.querySelectorAll('[data-nav-mobile]').forEach((link) => {
    link.addEventListener('click', closeMenu)
  })
}

/* -------------------------------------------------------------------------- */
/*  3. SCROLL-SPY — highlight the active section link                        */
/* -------------------------------------------------------------------------- */

function initScrollSpy() {
  const navLinks = document.querySelectorAll('[data-nav-link]')
  if (navLinks.length === 0) return

  // Map each section id -> the nav link(s) that point to it (desktop + mobile).
  const linksByHref = {}
  navLinks.forEach((link) => {
    const href = link.getAttribute('href')
    if (!linksByHref[href]) linksByHref[href] = []
    linksByHref[href].push(link)
  })

  const sectionIds = Object.keys(linksByHref)
  const sections = sectionIds
    .map((href) => document.querySelector(href))
    .filter(Boolean)

  if (sections.length === 0) return

  const setActive = (href) => {
    navLinks.forEach((link) => link.classList.remove('is-active'))
    ;(linksByHref[href] || []).forEach((link) => link.classList.add('is-active'))
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(`#${entry.target.id}`)
        }
      })
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
  )

  sections.forEach((section) => observer.observe(section))
}

/* -------------------------------------------------------------------------- */
/*  4. FOOTER YEAR                                                            */
/* -------------------------------------------------------------------------- */

function setFooterYear() {
  const el = document.getElementById('footer-copy')
  if (!el) return
  const year = new Date().getFullYear()
  el.textContent = `© ${year} Shobirin`
}
