import React, { PropsWithChildren } from 'react'
import { Select as SelectAntd } from 'antd'
import { SelectProps } from 'antd/lib/select'
import View from '../../model/View'

export type PossibleId = string | number

export interface Props<T, Id extends PossibleId>
  extends Omit<SelectProps<string>, 'options' | 'value'> {
  options: T[]
  value: Id | undefined
  resolveOptionId: (option: T) => Id
  resolveOptionContent: (option: T) => View
}

const { Option } = SelectAntd

const Select = <T, Id extends PossibleId>({
  value,
  options,
  resolveOptionId,
  resolveOptionContent,
  ...props
}: PropsWithChildren<Props<T, Id>>) => {
  return (
    <SelectAntd {...props} value={value?.toString()}>
      {options.map((option) => {
        const optionId = resolveOptionId(option).toString()

        return (
          <Option key={optionId} value={optionId}>
            {resolveOptionContent(option)}
          </Option>
        )
      })}
    </SelectAntd>
  )
}

export default Select
