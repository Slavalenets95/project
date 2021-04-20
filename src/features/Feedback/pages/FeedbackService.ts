import Http from '../../../app/Http'

enum Urls {
  Feedback = '/api/feedback',
  Manager = '/api/manager',
  Customer = '/api/customer',
}

class CategoriesService {
  public static getFeedbackCategory() {
    return Http.get<Category[]>(`${Urls.Manager}/topicsCategory`)
  }

  public static getAllFeedback() {
    return Http.get<Feedback[]>(`${Urls.Feedback}/allMessages`)
  }

  public static postFeedback(body: PostFeedback) {
    return Http.post(`${Urls.Feedback}`, body)
  }

  public static getManagerById(id: number) {
    return Http.get<Manager>(`${Urls.Customer}/getManagerById/${id}`)
  }

  public static deleteFeedbackById(id: number) {
    return Http.delete(`${Urls.Feedback}/${id}`)
  }
}

export interface PostFeedback {
  message: string
  topic: { id: string }
}

export interface Manager {
  firstName: string
  lastName: string
}

export interface Category {
  categoryName: string
  id: number
  topics: Array<Topics>
}

export interface Topics {
  id: number
  topicName: string
  topicsCategory: string
}

interface TopicsCategory {
  actual: boolean
  categoryName: string
  id: number
  topics: Array<Topic>
}

interface Topic {
  id: number
  topicName: string
  topicsCategory: TopicsCategory
}

export enum Status {
  InProgress = 'IN_PROGRESS',
  Resolved = 'RESOLVED',
  Later = 'LATER',
}

export interface Feedback {
  answer: string | null
  feedbackPostDate: string
  id: number
  managerId: number | null
  message: string
  responseExpected: string | null
  status: Status
  topic: Topic
}

export default CategoriesService
