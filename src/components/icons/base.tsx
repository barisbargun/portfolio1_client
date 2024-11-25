type SvgProps = React.SVGAttributes<SVGElement>

const Svg = ({ ...props }: SvgProps) => {
  return (
    <svg fill="none" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" {...props}></svg>
  )
}

export { Svg, type SvgProps }
