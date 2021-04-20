import React, { useState, useEffect } from 'react'
import { Formik } from 'formik'
import { validate, handleSubmit, initialValues } from './formHelper'
import FormSelect from '../../../../../components/FormSelect'
import FormTextArea from '../../../../../components/FormTextArea'
import Button from '../../../../../components/Button'
import useAppTranslation from '../../../../../hooks/useAppTranslation'
import FeedbackService, { Category } from '../../FeedbackService'
import classes from './styles.module.scss'

const FeedbackForm = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const { t } = useAppTranslation()

  useEffect(() => {
    setIsLoading(true)
    FeedbackService.getFeedbackCategory()
      .then((categories) => {
        setCategories(categories)
      })
      .catch(() => {
        setIsError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, handleSubmit }) => {
        const topics = categories.find(
          (category) => category.id === +values.category,
        )?.topics
        return (
          <form onSubmit={handleSubmit} className={classes.feedbackForm}>
            <div className={classes.feedbackForm__preview}>
              <h4 className={classes.feedbackForm__title}>{t('feedback')}</h4>
              <p>{t('dearClients')}</p>
              <p>{t('feedbackFormTitle')}</p>
              <hr />
            </div>
            <div className={classes.feedbackForm__content}>
              <p>{t('feedbackFormPreview')}</p>
              <label>
                {t('category')}:
                <FormSelect
                  className={classes.feedbackForm__select}
                  name="category"
                  options={categories}
                  resolveOptionId={(category) => category.id}
                  resolveOptionContent={(category) => category.categoryName}
                  handleChange={() => setFieldValue('topic', '')}
                />
              </label>
              <label>
                {t('topic')}:
                <FormSelect
                  className={classes.feedbackForm__select}
                  name="topic"
                  options={topics || []}
                  resolveOptionId={(topic) => topic.id}
                  resolveOptionContent={(topic) => topic.topicName}
                  disabled={!values.category}
                />
              </label>
              <label>
                {t('enterMessage')}:
                <FormTextArea
                  className={classes.feedbackForm__textarea}
                  name="message"
                  rows={4}
                  disabled={!values.topic}
                />
              </label>
              <Button
                htmlType="submit"
                type="primary"
                className={classes.feedbackForm__button}
              >
                {t('send')}
              </Button>
            </div>
          </form>
        )
      }}
    </Formik>
  )
}

export default FeedbackForm
