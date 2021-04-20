import React, { PropsWithChildren } from 'react'
import { Table as TableAntd } from 'antd'
import { TableProps as TableAntdProps } from 'antd/lib/table'

export interface Props<T> extends TableAntdProps<T> {}

const Table = <T extends object>(props: PropsWithChildren<Props<T>>) => {
  const { children, pagination, ...otherProps } = props
  return (
    <TableAntd
      {...otherProps}
      pagination={{ position: ['bottomCenter'], ...pagination }}
    >
      {children}
    </TableAntd>
  )
}

export default Table
