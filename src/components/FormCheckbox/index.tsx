import React, { FC } from 'react'
import Checkbox, { Props as CheckboxProps } from '../Checkbox'
import FormControl from '../FormControl'
import { useField } from 'formik'

export interface Props extends CheckboxProps {
  name: string
  wrapperClassName?: string
}

const FormCheckbox: FC<Props> = ({
  name,
  children,
  wrapperClassName,
  ...props
}) => {
  const [field] = useField(name)

  return (
    <FormControl className={wrapperClassName} name={name}>
      <Checkbox {...props} checked={field.value}>
        {children}
      </Checkbox>
    </FormControl>
  )
}

export default FormCheckbox
