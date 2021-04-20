import * as Yup from 'yup'
import { FormikHelpers } from 'formik'
import FeedbackService, { PostFeedback } from '../../FeedbackService'

interface FormValues {
  category: string
  topic: string
  message: string
}

export const initialValues = {
  category: '',
  topic: '',
  message: '',
}

export const validate = Yup.object({
  category: Yup.string().required('Required'),
  topic: Yup.string().required('Required'),
  message: Yup.string().required('Required'),
})

export const handleSubmit = async (
  { topic, message }: FormValues,
  { resetForm }: FormikHelpers<FormValues>,
) => {
  const body: PostFeedback = { message, topic: { id: topic } }
  try {
    await FeedbackService.postFeedback(body)
    resetForm()
  } catch (e) {
    console.log(e)
  }
}
