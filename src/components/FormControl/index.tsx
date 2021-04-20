import React, { ReactElement } from 'react'
import { Form } from 'antd'
import { useField } from 'formik'
import { FormItemProps } from 'antd/lib/form'

const FormControl = ({
  name,
  children,
  customField = false,
  ...props
}: Props) => {
  const [field, meta] = useField(name)

  const renderChildren = () => {
    if (customField) {
      return children
    }

    return React.cloneElement(children, { ...field })
  }

  return (
    <Form.Item
      {...props}
      help={meta.touched && meta.error}
      validateStatus={meta.touched && meta.error ? 'error' : ''}
    >
      {renderChildren()}
    </Form.Item>
  )
}

interface Props extends FormItemProps {
  name: string
  children: ReactElement
  customField?: boolean
  wrapperClassName?: string
}

export default FormControl
