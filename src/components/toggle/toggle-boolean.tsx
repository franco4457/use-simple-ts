import { useToggleTS } from '@/hooks/use-toggle-ts'
import { TOGGLE_BUTTON_TEXT } from '@utils/const'

const { ON, OFF } = TOGGLE_BUTTON_TEXT

export function ToggleBoolean ({
  initialState
}: {
  initialState?: boolean
}) {
  const [toggleValue, handleToggle] = useToggleTS(initialState || false)

  return (
    <section>
        <h4>Toggle without props</h4>
        <button onClick={() => handleToggle()}>{toggleValue ? ON : OFF}</button>
    </section>
  )
}
