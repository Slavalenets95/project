import React, { FC } from 'react'
import { Popover } from '../../Popover'
import { Category } from '../CategoriesService'

import SubMenu from './SubMenu'
import classes from './style.module.scss'

interface Props {
  data: Category
}

const Item: FC<Props> = ({ children, data }) => {
  const subMenu = <SubMenu data={data} />

  return (
    <Popover
      placement="rightTop"
      content={subMenu}
      trigger="hover"
      getPopupContainer={(triggerNode) => triggerNode}
    >
      <li className={classes.item}>{children}</li>
    </Popover>
  )
}

export default Item
