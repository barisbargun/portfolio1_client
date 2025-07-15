import { Menu, X } from 'lucide-react'
import { useState } from 'react'

import { type MenuLinkConfig, menuLinkConfig } from '@/config/nav'
import { siteConfig } from '@/config/site'
import { useIsMobile } from '@/hooks/is-mobile'
import { useScrollLock } from '@/hooks/scroll-lock'
import { cn } from '@/lib/utils'

import { ButtonModeToggle } from '../shared/buttons/mode-toggle'

export const Navbar = () => {
  const isMobile = useIsMobile()
  const [openMobileNav, setOpenMobileNav] = useState(false)
  useScrollLock(openMobileNav)

  const Header = ({ children }: { children: React.ReactNode }) => (
    <header className="fixed left-0 top-0 z-50 flex w-full justify-center border-b bg-background/95 font-sourceCodePro">
      <div className="container flex items-center justify-between py-2 lg:py-3">{children}</div>
    </header>
  )

  const Author = () => (
    <strong className="font-bold uppercase tracking-[0.3rem] sm:tracking-[0.5rem]">
      {siteConfig.author}
    </strong>
  )

  return isMobile ? (
    <Header>
      <button
        className="z-50 rounded-full lg:hidden"
        aria-label="Toggle mobile navigation menu"
        onClick={() => setOpenMobileNav((v) => !v)}
      >
        {openMobileNav ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>

      <Author />

      <ButtonModeToggle />

      <nav
        className={cn(
          'fixed bottom-0 right-0 top-0 z-40 w-full bg-background/95 transition-all duration-300 ease-in-out lg:hidden',
          !openMobileNav && 'invisible opacity-0'
        )}
      >
        <ul className="size-full flex-col gap-6 flex-center">
          {Object.values(menuLinkConfig).map((v) => (
            <li key={v.name}>
              <a
                href={'#' + v.link}
                className="font-source text-2xl transition-opacity"
                onClick={() => setOpenMobileNav(false)}
              >
                {v.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Header>
  ) : (
    <Header>
      <div className="animate-shine !bg-clip-text text-transparent drop-shadow-whiteGlow [background:radial-gradient(circle_at_center,theme(colors.slate.100_/_85%),transparent)_-200%_50%_/_200%_100%_no-repeat,theme(colors.slate.800)] after:absolute after:left-0 after:top-0 after:size-full after:[content:''] dark:[background:radial-gradient(circle_at_center,theme(colors.slate.900_/_85%),transparent)_-200%_50%_/_200%_100%_no-repeat,theme(colors.slate.100)]">
        <Author />
      </div>

      {/** Desktop Nav */}
      <nav className="max-lg:hidden">
        <ul className="flex items-center justify-between gap-10">
          {Object.values(menuLinkConfig).map(
            (v: MenuLinkConfig) =>
              v.showNav && (
                <li key={v.name}>
                  <a
                    className="text-sm font-semibold uppercase opacity-60 transition-opacity hover:opacity-100"
                    href={`#${v.link}`}
                  >
                    {v.name}
                  </a>
                </li>
              )
          )}
          <li>
            <ButtonModeToggle />
          </li>
        </ul>
      </nav>
    </Header>
  )
}
