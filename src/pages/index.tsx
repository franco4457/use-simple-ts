import { Toggle } from '@components/toggle'
import { Debounce } from '@components/debounce'
import { Welcome } from '@components/welcome'

export function Landing () {
  return (
    <main>
      <Welcome />
      <Debounce />
      <Toggle />
    </main>
  )
}
