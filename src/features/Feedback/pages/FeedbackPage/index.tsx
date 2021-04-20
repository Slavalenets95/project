import React from 'react'
import FeedbackForm from './FeedbackForm'
import FeedbackList from './FeedbackList'
import { Tabs } from 'antd'
import useAppTranslation from '../../../../hooks/useAppTranslation'
import classes from './styles.module.scss'

export enum Tab {
  form = 'feedbackForm',
  list = 'feedbackList',
}

const FeedbackPage = () => {
  const { TabPane } = Tabs
  const { t } = useAppTranslation()

  return (
    <section className={classes.container}>
      <Tabs defaultActiveKey={Tab.form}>
        <TabPane tab={t('formAppeal')} key={Tab.form}>
          <FeedbackForm />
        </TabPane>
        <TabPane tab={t('listAppeals')} key={Tab.list}>
          <FeedbackList />
        </TabPane>
      </Tabs>
    </section>
  )
}

export default FeedbackPage
