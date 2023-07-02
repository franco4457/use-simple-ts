import { useState } from 'react'

export function Toggle () {
  const [isOn, setIsOn] = useState(false)

  return (
    <section>
      <div>Toggle</div>
    </section>
  )
}
