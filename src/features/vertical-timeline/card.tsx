import { cn } from '@/lib/utils'

export const VerticalTimelineElement = ({
  children = '',
  className = '',
  contentArrowStyle,
  contentStyle,
  date = '',
  icon,
  iconClassName = '',
  iconOnClick,
  onTimelineElementClick,
  position = '',
  style,
  textClassName = ''
}: any) => (
  <div
    className={cn(
      'vertical-timeline-element',
      {
        'vertical-timeline-element--left': position === 'left',
        'vertical-timeline-element--right': position === 'right',
        'vertical-timeline-element--no-children': children === ''
      },
      className
    )}
    style={style}
  >
    <>
      <span
        style={{
          boxShadow: '0 0 0 4px hsl(var(--foreground))'
        }}
        className={cn(iconClassName, 'vertical-timeline-element-icon bg-card shadowCard')}
        onClick={iconOnClick}
      >
        {icon}
      </span>
      <div
        style={contentStyle}
        className={cn(
          'vertical-timeline-element-content bg-card shadowCard',

          textClassName
        )}
        onClick={onTimelineElementClick}
      >
        <div style={contentArrowStyle} className="vertical-timeline-element-content-arrow" />
        {children}
        <small className="vertical-timeline-element-date font-sourceCodePro font-semibold uppercase text-muted-foreground sm:tracking-widest">
          {date}
        </small>
      </div>
    </>
  </div>
)
