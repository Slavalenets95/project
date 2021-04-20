import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import classes from './Container.module.scss'
import cn from 'classnames'

const Container: FC<Props> = (props) => {
  const { children, ...restProps } = props
  return (
    <div {...restProps} className={cn(classes.container, restProps.className)}>
      {children}
    </div>
  )
}

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default Container
