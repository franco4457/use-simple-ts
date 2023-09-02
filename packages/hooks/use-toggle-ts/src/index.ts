import { useState } from 'react'

export type UseToggleTSProps = {
  [key: string]: boolean
}

export function useToggleTS(): { toggle: false; handlerToggle: (value?: boolean) => void }
export function useToggleTS(initialState: undefined): {
  toggle: false
  handlerToggle: (value?: boolean) => void
}
export function useToggleTS(initialState: boolean): {
  toggle: boolean
  handlerToggle: (value?: boolean) => void
}
export function useToggleTS<T extends UseToggleTSProps>(
  initialState: T
): { toggle: T; handlerToggle: (key: keyof T) => void }
export function useToggleTS(initialState?: unknown): unknown {
  const [toggle, setToggle] = useState(initialState ?? false)
  const handlerToggle = (key?: keyof typeof initialState) => {
    if (typeof toggle === 'object' && typeof initialState === 'object' && key) {
      setToggle({ ...toggle, [key]: !toggle[key] })
    } else if (typeof initialState === 'boolean' && typeof key === 'boolean') setToggle(key)
    else if (typeof toggle === 'boolean') setToggle(!toggle)
  }
  return { toggle, handlerToggle }
}

export type UseToggleTSReturn = ReturnType<typeof useToggleTS>
