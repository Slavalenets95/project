import React, { FC } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import FormInput from '../../../../../components/FormInput'
import FormCheckbox from '../../../../../components/FormCheckbox'
import Button from '../../../../../components/Button'
import useAppDispatch from '../../../../../hooks/useAppDispatch'
import useAppTranslation from '../../../../../hooks/useAppTranslation'
import { login } from '../../../authSlice'
import i18n from '../../../../../app/i18nConfig'

import classes from './style.module.scss'
import { message } from 'antd'
import { PayloadAction } from '@reduxjs/toolkit'
import { AuthDto } from '../../../AuthService'

const validationSchema = Yup.object().shape({
  email: Yup.string().required(i18n.t('emailRequired')),
})

const AuthForm: FC<Props> = ({ onSubmit }) => {
  const dispatch = useAppDispatch()
  const { t } = useAppTranslation()

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        rememberMe: false,
      }}
      validationSchema={validationSchema}
      onSubmit={async ({ email, password }) => {
        // выяснить, почему тип неправильно наследуется (включает в себя unknown)
        const result = (await dispatch(login({ email, password }))) as Partial<
          PayloadAction<AuthDto>
        >

        if (result.payload?.token) {
          message.success('Вы авторизованы')
          onSubmit()
        }
      }}
    >
      {({ handleSubmit }) => (
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.form__title}>{t('authTitle')}</div>
          <FormInput
            wrapperClassName={classes.form__input}
            size="large"
            name="email"
            placeholder={t('email')}
          />
          <FormInput
            wrapperClassName={classes.form__input}
            size="large"
            name="password"
            placeholder={t('password')}
            type="password"
          />
          <FormCheckbox name="rememberMe">{t('rememberMe')}</FormCheckbox>
          <Button
            className={classes.form__submit}
            htmlType="submit"
            type="primary"
            size="large"
            block
          >
            {t('signIn')}
          </Button>
        </form>
      )}
    </Formik>
  )
}

interface Props {
  onSubmit: () => void
}

export default AuthForm
