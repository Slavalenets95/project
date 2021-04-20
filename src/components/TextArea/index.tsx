import React, { FC } from 'react'
import { Input as InputAntd } from 'antd'
import { TextAreaProps as TextAreaAntdProps } from 'antd/lib/input'

export interface Props extends TextAreaAntdProps {}

const TextArea: FC<Props> = ({ ...props }) => {
  const { TextArea } = InputAntd
  return <TextArea {...props} />
}

export default TextArea
