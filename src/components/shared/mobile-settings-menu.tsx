import { Bolt, Languages, Moon, Sun } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { useTheme } from '@/components/global/theme-provider'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export const MobileSettingsMenu = () => {
  const { theme, setTheme } = useTheme()
  const { i18n } = useTranslation()
  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Bolt />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}>
          {theme == 'dark' ? <Sun /> : <Moon />}
          Toggle Mode
        </DropdownMenuItem>
        <DropdownMenuItem className="mt-2" onClick={changeLanguage}>
          <Languages />
          Toggle Language
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
