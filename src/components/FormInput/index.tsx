import React, { FC } from 'react'
import Input, { Props as InputComponentProps } from '../Input'
import FormControl from '../FormControl'

export interface Props extends InputComponentProps {
  name: string
  wrapperClassName?: string
}

const FormInput: FC<Props> = ({ name, wrapperClassName, ...props }) => {
  return (
    <FormControl className={wrapperClassName} name={name}>
      <Input {...props} />
    </FormControl>
  )
}

export default FormInput
