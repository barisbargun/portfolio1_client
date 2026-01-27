import type { ProjectTagConfig } from '@/config/sections/projects'
import { cn } from '@/lib/utils'

type Props = {
  isActive: boolean
} & ProjectTagConfig &
  React.HTMLAttributes<HTMLLIElement>

const activeColor = 'bg-[color-mix(in_srgb,var(--hover-color),transparent_70%)]'
export const ProjectTab = ({ isActive, label, value, icon, color, className, ...props }: Props) => {
  return (
    <li
      className={cn(
        'flex cursor-pointer items-center gap-2 rounded-lg border p-3 transition-colors',
        `hover:${activeColor}`,
        isActive && activeColor,
        className
      )}
      style={{ borderColor: color, '--hover-color': color } as React.CSSProperties}
      {...props}
    >
      <img src={icon} alt={label} className="h-6 w-6 object-contain" />
      <p>{value}</p>
    </li>
  )
}
