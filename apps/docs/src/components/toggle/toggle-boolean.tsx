import { useToggleTS } from '@use-simple-ts/use-toggle-ts'
import { TOGGLE_BUTTON_TEXT } from '@utils/const'

const { ON, OFF } = TOGGLE_BUTTON_TEXT

export function ToggleBoolean({ initialState }: { initialState?: boolean }) {
  const { toggle, handlerToggle } = useToggleTS(initialState || false)

  return (
    <section>
      <h4>Toggle without props</h4>
      <button onClick={() => handlerToggle()}>{toggle ? ON : OFF}</button>
    </section>
  )
}
