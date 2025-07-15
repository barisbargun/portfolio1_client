import './style.css'
import './card.css'

import type React from 'react'

type Props = React.HTMLAttributes<HTMLDivElement> & {}

export const VerticalTimeline = ({ children }: Props) => {
  return (
    <div className="vertical-timeline vertical-timeline--two-columns before:bg-foreground">
      {children}
    </div>
  )
}
