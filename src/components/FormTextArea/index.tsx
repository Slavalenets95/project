import React, { FC } from 'react'
import TextArea, { Props as TextAreaComponentProps } from '../TextArea'
import FormControl from '../FormControl'

export interface Props extends TextAreaComponentProps {
  name: string
  wrapperClassName?: string
}

const FormTextArea: FC<Props> = ({ name, wrapperClassName, ...props }) => {
  return (
    <FormControl className={wrapperClassName} name={name}>
      <TextArea {...props} />
    </FormControl>
  )
}

export default FormTextArea
