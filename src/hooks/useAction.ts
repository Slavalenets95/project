import FunctionType from '../model/FunctionType'
import { useCallback } from 'react'
import useAppDispatch from './useAppDispatch'

/**
 * @description Оборачивает actionCreator в dispatch.
 *  Это необходимо для того, чтобы можно было автоматически вызывать диспатч экшна
 *  вызовом actionCreator, вместо передачи результата вызова actionCreator в dispatch вручную.
 */
const useAction = <T extends FunctionType>(actionCreator: T) => {
  const dispatch = useAppDispatch()

  return useCallback(
    (...args: Parameters<T>) => {
      dispatch(actionCreator(...args))
    },
    [dispatch, actionCreator],
  )
}

export default useAction
