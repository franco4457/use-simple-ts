import { useToggleTS } from '@/hooks/use-toggle-ts'
import { TOGGLE_BUTTON_TEXT } from '@utils/const'

const { ON, OFF } = TOGGLE_BUTTON_TEXT

export function Toggle ({ initialState }: {initialState?: boolean}) {
  // const typeInitialState = typeof initialState
  const [toggleValue, handleToggle] = useToggleTS(initialState)
  return (
    <section>
      <header>
        <h1>UseHookToggle</h1>
      </header>
      <div>
        <h4>Toggle without props</h4>
        <button onClick={() => handleToggle()}>
          {toggleValue ? ON : OFF}
        </button>
      </div>
    </section>
  )
}
