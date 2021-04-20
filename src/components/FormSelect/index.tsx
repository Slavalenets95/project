import React, { PropsWithChildren } from 'react'
import { useField } from 'formik'
import Select, { PossibleId, Props as SelectProps } from '../Select'
import FormControl from '../FormControl'

export interface Props<T, Id extends PossibleId>
  extends Omit<SelectProps<T, Id>, 'value'> {
  name: string
  handleChange?: (value: string) => void
}

const FormSelect = <T, Id extends PossibleId>({
  name,
  handleChange,
  ...props
}: PropsWithChildren<Props<T, Id>>) => {
  const [field, , helper] = useField(name)
  return (
    <FormControl name={name} customField>
      <Select
        {...props}
        {...field}
        onChange={(value) => {
          helper.setValue(value)
          if (handleChange) {
            handleChange(value)
          }
        }}
      />
    </FormControl>
  )
}

export default FormSelect
