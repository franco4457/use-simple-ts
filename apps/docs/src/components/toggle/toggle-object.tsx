import { useToggleTS } from '@/hooks/use-toggle-ts'
import { TOGGLE_BUTTON_TEXT } from '@utils/const'

const { ON, OFF } = TOGGLE_BUTTON_TEXT

export function ToggleObject({
  initialState
}: {
  initialState: { [key: string]: boolean }
}) {
  const [toggleValue, handleToggle] = useToggleTS(initialState || {})
  return (
    <section>
      <div>
        <h4>Toggle with objet props </h4>
        {Object.entries(toggleValue).map(([key, value], i) => (
          <button key={i} onClick={() => handleToggle(key)}>
            {value ? ON : OFF}
          </button>
        ))}
      </div>
    </section>
  )
}
