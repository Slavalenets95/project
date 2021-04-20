import React, { useEffect, useState } from 'react'
import FeedbackService, { Manager } from '../../../../FeedbackService'
import useAppTranslation from '../../../../../../../hooks/useAppTranslation'
import { formatDate } from '../helper'
import cn from 'classnames'
import classes from './styles.module.scss'

interface Props {
  answer: string | null
  responseDate: string | null
  managerId: number | null
}

const ResolvedAnswer = ({ answer, responseDate, managerId }: Props) => {
  const [managerInfo, setManagerInfo] = useState<Manager | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const { t } = useAppTranslation()

  useEffect(() => {
    if (managerId) {
      FeedbackService.getManagerById(managerId).then((manager) => setManagerInfo(manager))
    }
  }, [managerId])

  return (
    <div className={classes.answer}>
      <div className={classes.answer__header}>
        <button
          className={classes.answer__button}
          type="button"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {t('viewAnswer')}
        </button>
      </div>
      <div
        className={cn(`${classes.unvisible}`, {
          [classes.visibleAnswer]: showAnswer,
        })}
      >
        <p className={classes.answer__txt}>{answer}</p>
        <p className={classes.answer__txt_sm}>
          {t('name')}: {managerInfo?.firstName}
        </p>
        <p className={classes.answer__txt_sm}>
          {t('surname')}: {managerInfo?.lastName}
        </p>
        <p className={classes.answer__date}>
          {t('responceTime')}:{' '}
          {responseDate === null
            ? 'Время ответа не установлено'
            : formatDate(responseDate)}
        </p>
      </div>
    </div>
  )
}

export default ResolvedAnswer
