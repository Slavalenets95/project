import queryString from 'query-string'
import { useLocation } from 'react-router-dom'

/**
 * @description Возвращает query-параметры текущего роута в виде объекта
 */
const useQuery = <T>(): T => {
  const { search } = useLocation()
  return (queryString.parse(search) as unknown) as T
}

export default useQuery
