import React, { FC } from 'react'
import { Modal as ModalAntd } from 'antd'
import { ModalProps as ModalAntdProps } from 'antd/lib/modal'

export interface Props extends ModalAntdProps {}

export const Modal: FC<Props> = ({ children, ...props }) => {
  return <ModalAntd {...props}>{children}</ModalAntd>
}
