import React, { FC } from 'react'
import { Input as InputAntd } from 'antd'
import { InputProps as InputAntdProps } from 'antd/lib/input'

export interface Props extends InputAntdProps {}

const Input: Component = ({ ...props }) => {
  return <InputAntd {...props} />
}

Input.Search = InputAntd.Search

interface Component extends FC<Props> {
  Search: typeof InputAntd.Search
}

export default Input
