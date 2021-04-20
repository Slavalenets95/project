import React, { useState } from 'react'
import FeedbackService, { Feedback, Status } from '../../../FeedbackService'
import LaterAnswer from './LaterAnswer'
import ProgressAnswer from './ProgressAnswer'
import ResolvedAnswer from './ResolvedAnswer'
import { formatDate } from './helper'
import useAppTranslation from '../../../../../../hooks/useAppTranslation'
import cn from 'classnames'
import classes from './styles.module.scss'

interface Props extends Feedback {
  deleteFeedback(id: number): any
}

const renderAnswer = (status: string, elProps: Props) => {
  const { responseExpected, answer, managerId } = elProps
  if (status === Status.InProgress) {
    return <ProgressAnswer />
  }
  if (status === Status.Later) {
    return <LaterAnswer responseExpected={responseExpected} />
  }
  return (
    <ResolvedAnswer
      answer={answer}
      managerId={managerId}
      responseDate={responseExpected}
    />
  )
}

const FeedbackListItem = (props: Props) => {
  const {
    id, message, feedbackPostDate, status, topic, deleteFeedback, 
  } = props
  const { topicName, topicsCategory } = topic
  const { categoryName } = topicsCategory
  const answerEl = renderAnswer(status, props)
  const { t } = useAppTranslation()

  const answerClasses: Record<Status, string> = {
    [Status.InProgress]: 'feedbackItem__progress',
    [Status.Later]: 'feedbackItem__later',
    [Status.Resolved]: 'feedbackItem__resolved',
  }

  const deleteFeedbackItem = async () => {
    try {
      await FeedbackService.deleteFeedbackById(id)
      deleteFeedback(id)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <li className={cn(classes.feedbackItem, classes[answerClasses[status]])}>
      <div className={classes.feedbackItem__question}>
        <h4 className={cn(classes.feedbackItem__title, classes.questionTitle)}>
          №{id} {t('category')}: {categoryName}
        </h4>
        <hr />
        <p className={classes.feedbackItem__topicName}>
          {t('topic')}: {topicName}
        </p>
        <span className={`${classes.feedbackItem__status} ${classes.decorate}`}>
          {status}
        </span>
        <p className={classes.feedbackItem__message}>{message}</p>
        <p className={classes.feedbackItem__date}>
          {t('applicationDate')}:{formatDate(feedbackPostDate)}
        </p>
        <button
          className={classes.feedbackItem__button_danger}
          type="button"
          onClick={deleteFeedbackItem}
        >
          {t('delete')}
        </button>
        <hr />
      </div>
      <div className={classes.feedbackItem__answer}>{answerEl}</div>
    </li>
  )
}

export default FeedbackListItem
