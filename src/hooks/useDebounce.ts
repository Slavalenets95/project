import { useState } from 'react'

/**
 * @description Реализация debounce на основе стейта функционального компонента
 *  Позволяет получать актуальный стейт в cb благодаря тому, что не запоминает ссылку на cb,
 *  а всегда получает новую.
 */
const useDebounce = (cb: Function, delay = 0) => {
  const [timeoutId, setTimeoutId] = useState<number>()

  return (...args: any[]) => {
    clearTimeout(timeoutId)

    setTimeoutId(
      window.setTimeout(() => {
        cb(...args)
      }, delay),
    )
  }
}

export default useDebounce
