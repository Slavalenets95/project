import React from 'react'
import useAppTranslation from '../../../../../../../hooks/useAppTranslation'
import classes from './styles.module.scss'

const ProgressAnswer = () => {
  const { t } = useAppTranslation()
  return <p className={classes.answer}>{t('waitingManagerAnser')}</p>
}

export default ProgressAnswer
