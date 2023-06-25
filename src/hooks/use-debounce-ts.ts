import React from 'react'

/* eslint-disable @typescript-eslint/ban-types  */
type ArgumentTypes<F extends Function> = F extends (...args: infer A) => unknown
  ? A
  : never

export const useDebounceTS = <T extends Function>(callback: T, delay = 0) => {
  const debouceRef = React.useRef<ReturnType<typeof setTimeout>>()
  return (...args: ArgumentTypes<T>): void => {
    if (debouceRef.current) clearTimeout(debouceRef.current)
    debouceRef.current = setTimeout(() => {
      // eslint-disable-next-line n/no-callback-literal
      callback(...args)
    }, delay)
  }
}
