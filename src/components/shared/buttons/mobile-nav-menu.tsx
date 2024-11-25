import { motion } from 'framer-motion'
import { forwardRef, HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

type Props = HTMLAttributes<HTMLButtonElement> & {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ButtonMobileNavMenu = forwardRef<HTMLButtonElement, Props>(
  ({ open, setOpen, className, ...props }, ref) => {
    return (
      <button
        aria-label="sidebar-button"
        title="sidebar-button"
        className={cn('z-10 rounded-full flex-center', className)}
        ref={ref}
        onClick={() => setOpen((v) => !v)}
        {...props}
      >
        <svg className="stroke-black dark:stroke-white" width="23" height="18" viewBox="0 0 23 18">
          <motion.path
            variants={{
              hidden: { d: 'M 2 2.5 L 20 2.5' },
              show: { d: 'M 3 16.5 L 17 2.5' }
            }}
            initial="hidden"
            animate={open ? 'show' : 'hidden'}
          />
          <motion.path
            d="M 2 9.423 L 20 9.423"
            initial={{ opacity: 1 }}
            animate={open ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.path
            variants={{
              hidden: {
                d: 'M 2 16.346 L 20 16.346'
              },
              show: { d: 'M 3 2.5 L 17 16.346' }
            }}
            initial="hidden"
            animate={open ? 'show' : 'hidden'}
          />
        </svg>
      </button>
    )
  }
)

ButtonMobileNavMenu.displayName = 'ButtonMobileNavMenu'

export { ButtonMobileNavMenu }
