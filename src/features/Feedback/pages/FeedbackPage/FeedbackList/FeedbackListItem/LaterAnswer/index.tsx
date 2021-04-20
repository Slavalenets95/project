import React from 'react'
import { formatDate } from '../helper'
import useAppTranslation from '../../../../../../../hooks/useAppTranslation'
import classes from './styles.module.scss'

interface Props {
  responseExpected: string | null
}

const LaterAnswer = ({ responseExpected }: Props) => {
  const { t } = useAppTranslation()

  return (
    <>
      <p>{t('laterRequest')}</p>
      {responseExpected ? (
        <>
          <span>{t('estimatedResponce')}: </span>
          <time>{formatDate(responseExpected)}</time>
        </>
      ) : null}
    </>
  )
}

export default LaterAnswer
