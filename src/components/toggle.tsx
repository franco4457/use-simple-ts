import { useState } from 'react'

const useToggleTS = (): [boolean, ()=> void] => {
  const [isOn, setIsOn] = useState(false)
  const handlerToggle = () => {
    setIsOn(!isOn)
  }
  return [isOn, handlerToggle]
}

export function Toggle () {
  const [toggleValue, handleToggle] = useToggleTS()
  return (
    <section>
      <div>Toggle</div>
      <button onClick={() => handleToggle() }>{toggleValue ? 'ON' : 'OFF'}</button>
    </section>
  )
}
