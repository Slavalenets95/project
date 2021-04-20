import React, { useState, useEffect } from 'react'
import FeedbackService, { Feedback } from '../../FeedbackService'
import FeedbackListItem from './FeedbackListItem'
import useAppTranslation from '../../../../../hooks/useAppTranslation'
import classes from './styles.module.scss'

const FeedbackList = () => {
  const [feedbacks, setFeedback] = useState<Feedback[]>([])
  const { t } = useAppTranslation()

  const deleteFeedback = (id: number) => {
    const index = feedbacks.findIndex((feedback) => feedback.id === id)
    setFeedback([...feedbacks.slice(0, index), ...feedbacks.slice(index + 1)])
  }

  useEffect(() => {
    FeedbackService.getAllFeedback().then((feedbacks) => {
      setFeedback(feedbacks)
    })
  }, [])

  if (feedbacks.length === 0) {
    return <p>{t('noRequests')}</p>
  }

  return (
    <div className={classes.wrapper}>
      <ul className={classes.feedbackList}>
        {feedbacks.map((feedback) => (
          <FeedbackListItem
            key={feedback.id}
            {...feedback}
            deleteFeedback={deleteFeedback}
          />
        ))}
      </ul>
    </div>
  )
}

export default FeedbackList
