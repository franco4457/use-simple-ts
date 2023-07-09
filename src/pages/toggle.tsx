import { ToggleBoolean } from '@/components/toggle/toggle-boolean'
import { ToggleObject } from '@/components/toggle/toggle-object'

export function TogglePage () {
  return (
    <main>
      <header>
        <h1>UseHookToggle</h1>
      </header>
      <ToggleBoolean />
      <ToggleObject initialState={{ args1: true, args2: false }} />
    </main>
  )
}
