import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Category } from '../../CategoriesService'
import classes from './style.module.scss'

interface Props {
  data: Category
}

const SubMenu: FC<Props> = ({ data }) => {
  const items = Object.entries(data).map(([key, value]) => (
    <li key={key} className={classes.submenu__item}>
      <Link to={`/${value}`} className={classes.submenu__link}>
        {key}
      </Link>
    </li>
  ))

  return <ul className={classes.submenu}>{items}</ul>
}

export default SubMenu
