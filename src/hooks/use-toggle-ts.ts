import { useState } from 'react'

// type useToggleTypeTS = (initialState?:boolean | {[keyof typeof initialState]: boolean}) => [ initialState, ()=> void]
type useToggleTypeTS = (initialState?:boolean) => [ boolean, ()=> void]

export const useToggleTS:useToggleTypeTS = (initialState): [boolean, ()=> void] => {
  const [isOn, setIsOn] = useState(initialState ?? false)
  const handlerToggle = () => {
    setIsOn(!isOn)
  }
  return [isOn, handlerToggle]
}
