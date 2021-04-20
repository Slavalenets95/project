import React, { FC } from 'react'
import { Checkbox as CheckboxAntd } from 'antd'
import { CheckboxProps } from 'antd/lib/checkbox'

export interface Props extends CheckboxProps {}

const Checkbox: FC<Props> = ({ children, ...props }) => {
  return <CheckboxAntd {...props}>{children}</CheckboxAntd>
}
export default Checkbox
