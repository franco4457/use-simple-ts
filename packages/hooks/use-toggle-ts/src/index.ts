import { useState } from 'react'

export type UseToggleTSProps = {
  [key: string]: boolean
}

export function useToggleTS(): [false, () => void]
export function useToggleTS(initialState: undefined): [false, () => void]
export function useToggleTS(initialState: boolean): [boolean, () => void]
export function useToggleTS<T extends UseToggleTSProps>(
  initialState: T
): [T, (key: keyof T) => void]
export function useToggleTS(initialState?: unknown): unknown {
  const [isOn, setIsOn] = useState(initialState ?? false)
  const handlerToggle = (key?: keyof typeof initialState) => {
    if (typeof initialState === 'object' && key) {
      setIsOn({ ...isOn, [key]: !isOn[key] })
    } else if (typeof initialState === 'boolean') setIsOn(!isOn)
  }
  return [isOn, handlerToggle]
}

export type UseToggleTSReturn = ReturnType<typeof useToggleTS>
