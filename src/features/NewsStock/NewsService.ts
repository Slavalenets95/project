import Http from '../../app/Http'

class NewsService {
  static get(id: string) {
    return Http.get<NewsDto>(`/api/manager/news/${id}`)
  }
}

export interface NewsDto {
  title: string
  fullText: string
  postingDate: string
}

export default NewsService
