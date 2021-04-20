import React, { FC } from 'react'
import classes from './Category.module.scss'

interface Props {
  title?: string
  children: React.ReactChild
}

const Category: FC<Props> = (props: Props) => {
  const { title, children } = props
  return (
    <div className={classes.category}>
      {title && <h2 className={classes.category__title}>{title}</h2>}
      <div className={classes.category__item}>{children}</div>
    </div>
  )
}
export default Category
