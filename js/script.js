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
 *  4. Scroll-reveal — fade/slide sections in as they enter the viewport
 *  5. Footer year
 *
 *  Note: broken image fallbacks (portrait photo / project screenshots) are
 *  handled inline in index.html via the `onerror` attribute on each <img>,
 *  so they work even if this script fails to load.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScrollState()
  initMobileMenu()
  initScrollSpy()
  initScrollReveal()
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

  const setActive = (href) => {
    navLinks.forEach((link) => link.classList.remove('is-active'))
    // If `href` doesn't match any nav link (e.g. the hero/"#top"), this just
    // clears the highlight everywhere — which is exactly what we want when
    // scrolling back to the very top of the page.
    ;(linksByHref[href] || []).forEach((link) => link.classList.add('is-active'))
  }

  // Track every section that has a nav link, PLUS the hero ("#top") itself.
  // Without tracking the hero too, scrolling/clicking back to the top left
  // no section "in view" from the observer's point of view, so the last
  // active link (e.g. "About") stayed highlighted forever — confusing.
  const sectionsToTrack = [{ href: '#top', el: document.getElementById('top') }]
  Object.keys(linksByHref).forEach((href) => {
    sectionsToTrack.push({ href, el: document.querySelector(href) })
  })

  const hrefByElementId = {}
  const sections = []
  sectionsToTrack.forEach(({ href, el }) => {
    if (!el) return
    hrefByElementId[el.id] = href
    sections.push(el)
  })

  if (sections.length === 0) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(hrefByElementId[entry.target.id])
        }
      })
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
  )

  sections.forEach((section) => observer.observe(section))

  // Give instant feedback on click — the highlight jumps to the clicked
  // link right away instead of waiting for the smooth-scroll animation to
  // finish and the observer above to catch up.
  navLinks.forEach((link) => {
    link.addEventListener('click', () => setActive(link.getAttribute('href')))
  })

  // Anything that scrolls back to the top of the page (the "Shobirin" logo
  // or either "Home" button) should clear the highlight immediately too.
  document.querySelectorAll('a[href="#top"]').forEach((link) => {
    link.addEventListener('click', () => setActive('#top'))
  })
}

/* -------------------------------------------------------------------------- */
/*  4. SCROLL-REVEAL — fade/slide sections in as they enter the viewport     */
/* -------------------------------------------------------------------------- */

function initScrollReveal() {
  // If the user has asked their OS to reduce motion, skip this entirely —
  // every section stays fully visible with no animation (see the matching
  // `prefers-reduced-motion` rule in css/style.css as a CSS-only backup).
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches
  if (prefersReducedMotion) return

  // Every section under <main> gets the "reveal" treatment — hidden by
  // default, then faded/slid into place — except the hero (#top), which
  // already has its own simple fade-in as soon as the page loads.
  const revealTargets = document.querySelectorAll('main > section:not(#top)')
  if (revealTargets.length === 0) return

  revealTargets.forEach((el) => el.classList.add('reveal'))

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          // Reveal each section once, then stop watching it.
          obs.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 },
  )

  revealTargets.forEach((el) => observer.observe(el))
}

/* -------------------------------------------------------------------------- */
/*  5. FOOTER YEAR                                                            */
/* -------------------------------------------------------------------------- */

function setFooterYear() {
  const el = document.getElementById('footer-copy')
  if (!el) return
  const year = new Date().getFullYear()
  el.textContent = `© ${year} Shobirin`
}
