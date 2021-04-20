import React, { FC } from 'react'
import useAppTranslation from '../../../../hooks/useAppTranslation'
import { Link } from 'react-router-dom'
import { Modal } from '../../../../components/Modal'
import AuthForm from './AuthForm'

import classes from './style.module.scss'

interface Props {
  show: boolean
  close?: () => void
}

const AuthModal: FC<Props> = ({ show, close }) => {
  const { t } = useAppTranslation()

  const handleCancel = () => {
    if (close) {
      close()
    }
  }

  return (
    <Modal visible={show} footer={null} onCancel={handleCancel}>
      <AuthForm onSubmit={handleCancel} />
      <div className={classes.signup}>
        <Link to="/sign-up">{t('signUp')}</Link>
      </div>
    </Modal>
  )
}

export default AuthModal
