import './App.css'
import { Welcome } from '@components/welcome'


function Debounce (){
return (
  <>
    <section>
      <h2>Debounce</h2>
    </section>
  </>
)
}

function App() {

  return (
    <main>
    <Welcome />
   <Debounce/>
    </main>
  )
}

export default App
