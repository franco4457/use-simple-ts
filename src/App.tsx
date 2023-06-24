import './App.css'
import { Welcome } from '@components/welcome'
import { Debounce } from '@/components/debounce'

function App () {
  return (
    <main>
      <Welcome />
      <Debounce />
    </main>
  )
}

export default App
