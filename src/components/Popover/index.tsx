import React, { FC } from 'react'
import { Popover as PopoverAntd } from 'antd'
import { PopoverProps as PopoverAntdProps } from 'antd/lib/popover'

export interface Props extends PopoverAntdProps {}

export const Popover: FC<Props> = ({ children, ...props }) => {
  return <PopoverAntd {...props}>{children}</PopoverAntd>
}
