import React, { FC } from 'react'
import classes from './Content.module.scss'

const Content: FC = (props) => {
  const { children } = props
  return <div className={classes.content}>{children}</div>
}

export default Content
