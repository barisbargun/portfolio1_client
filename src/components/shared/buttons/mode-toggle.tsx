import { Moon, Sun } from 'lucide-react'

import { Button, ButtonProps } from '@/components/ui/button'

import { useTheme } from '../../global/theme-provider'

type Props = ButtonProps & {}

export function ButtonModeToggle({ className, ...props }: Props) {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      className={className}
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
      {...props}
    >
      {theme == 'dark' ? <Sun /> : <Moon />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
