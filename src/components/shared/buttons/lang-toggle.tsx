import { Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Button, type ButtonProps } from '@/components/ui/button'

type Props = ButtonProps & {}

export const ButtonLangToggle = ({ className, ...props }: Props) => {
  const { i18n } = useTranslation()
  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en')
  }
  return (
    <Button className={className} variant="outline" size="icon" onClick={changeLanguage} {...props}>
      <Languages />
      <span className="sr-only">Change Language</span>
    </Button>
  )
}
