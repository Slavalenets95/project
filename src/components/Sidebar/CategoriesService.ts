import Http from '../../app/Http'

class CategoriesService {
  public static get() {
    return Http.get<Categories>('/api/categories')
  }
}

export type Category = Record<string, string>
export type Categories = Record<string, Category>

export default CategoriesService
