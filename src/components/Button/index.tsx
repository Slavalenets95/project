import React, { FC } from 'react'
import { Button as ButtonAntd } from 'antd'
import { ButtonProps } from 'antd/lib/button'

interface Props extends ButtonProps {}

const Button: FC<Props> = ({ children, ...props }) => {
  return <ButtonAntd {...props}>{children}</ButtonAntd>
}

export default Button
