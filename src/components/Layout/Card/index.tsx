import React, { FC } from 'react'
import classes from './Card.module.scss'

const Card: FC = (props) => {
  const { children } = props
  return <div className={classes.card}>{children}</div>
}

export default Card
