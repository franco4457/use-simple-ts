import { useToggleTS } from '@use-simple-ts/use-toggle-ts'
import { TOGGLE_BUTTON_TEXT } from '@utils/const'

const { ON, OFF } = TOGGLE_BUTTON_TEXT

export function ToggleObject({
  initialState
}: {
  initialState: { [key: string]: boolean }
}) {
  const { toggle, handlerToggle } = useToggleTS(initialState || {})
  return (
    <section>
      <div>
        <h4>Toggle with objet props </h4>
        {Object.entries(toggle).map(([key, value], i) => (
          <button key={i} onClick={() => handlerToggle(key)}>
            {value ? ON : OFF}
          </button>
        ))}
      </div>
    </section>
  )
}
