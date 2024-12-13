import { motion } from 'framer-motion'
import { useState } from 'react'

import { MenuLinkConfig, menuLinkConfig } from '@/constants/nav'
import { siteConfig } from '@/constants/site'
import useScrollLock from '@/hooks/scroll-lock'
import { cn } from '@/lib/utils'

import { ButtonMobileNavMenu } from '../shared/buttons/mobile-nav-menu'
import { ButtonModeToggle } from '../shared/buttons/mode-toggle'

export const Navbar = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false)
  useScrollLock(openMobileNav)

  return (
    <>
      <header className="fixed left-0 top-0 z-50 flex w-full justify-center border-b bg-background/40 font-sourceCodePro backdrop-blur-sm">
        <div className="container flex items-center justify-between py-2 lg:py-3">
          {/** For Mobile */}
          <ButtonMobileNavMenu
            className="z-50 lg:hidden"
            open={openMobileNav}
            setOpen={setOpenMobileNav}
          />

          <div className="animate-shine !bg-clip-text font-bold uppercase tracking-[0.2rem] text-transparent drop-shadow-whiteGlow [background:radial-gradient(circle_at_center,theme(colors.slate.100_/_85%),transparent)_-200%_50%_/_200%_100%_no-repeat,theme(colors.slate.800)] after:absolute after:left-0 after:top-0 after:size-full after:[content:''] dark:[background:radial-gradient(circle_at_center,theme(colors.slate.900_/_85%),transparent)_-200%_50%_/_200%_100%_no-repeat,theme(colors.slate.100)] md:tracking-[0.5rem]">
            <strong>{siteConfig.author}</strong>
          </div>
          {/** For Desktop */}
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

          <ButtonModeToggle className="lg:hidden" />
        </div>
      </header>
      <motion.ul
        variants={{
          initial: {
            display: 'none',
            opacity: 0
          },
          animate: {
            display: 'flex',
            opacity: 1
          }
        }}
        transition={{
          duration: 0.2
        }}
        initial="initial"
        animate={openMobileNav ? 'animate' : 'initial'}
        className={cn(
          'fixed bottom-0 right-0 top-0 z-40 w-full flex-col gap-6 border-[6px] border-border bg-background/90 backdrop-blur-sm flex-center lg:hidden'
        )}
      >
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
      </motion.ul>
    </>
  )
}
