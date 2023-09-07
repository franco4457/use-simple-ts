import { useRef } from 'react'
/* eslint-disable @typescript-eslint/ban-types  */
type ArgumentTypes<F extends Function> = F extends (...args: infer A) => unknown ? A : never

export const useDebounceTS = <T extends Function>(callback: T, delay = 0) => {
  const debouceRef = useRef<ReturnType<typeof setTimeout>>()

  const debouncer = (...args: ArgumentTypes<T>): void => {
    if (debouceRef.current) clearTimeout(debouceRef.current)
    debouceRef.current = setTimeout(() => {
      // eslint-disable-next-line n/no-callback-literal
      return callback(...args)
    }, delay)
  }
  debouncer.cancel = () => {
    if (debouceRef.current) clearTimeout(debouceRef.current)
  }
  debouncer.flush = (...args: ArgumentTypes<T>) => {
    if (debouceRef.current) {
      clearTimeout(debouceRef.current)
      // eslint-disable-next-line n/no-callback-literal
      return callback(...args)
    }
  }
  return debouncer
}

export type UseDebounceTsReturn = ReturnType<typeof useDebounceTS>
