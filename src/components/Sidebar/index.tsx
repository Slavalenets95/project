import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { sidebarSelectors, fetchCategories } from './categoriesSlice'
import useAppDispatch from '../../hooks/useAppDispatch'

import Item from './Item'

import classes from './style.module.scss'

const Sidebar: FC = () => {
  const { getCategories } = sidebarSelectors
  const categories = useSelector(getCategories)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  const items = Object.entries(categories).map(([key, value]) => {
    return (
      <Item key={key} data={value}>
        {key}
      </Item>
    )
  })

  return <ul className={classes.sidebar}>{items}</ul>
}

export default Sidebar
