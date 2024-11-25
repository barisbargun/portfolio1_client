import { HTMLMotionProps, motion } from 'framer-motion'
import React from 'react'

type CreateMotionProps<T extends React.ElementType = 'div'> = {
  component?: T
} & React.ComponentProps<T>

export const CreateMotion = <T extends React.ElementType = 'div'>({
  component,
  ...props
}: HTMLMotionProps<any> & CreateMotionProps<T>) => {
  const Component = motion.create(component)
  return <Component {...props} />
}
