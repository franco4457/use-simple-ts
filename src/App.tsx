import './App.css'
import { Landing } from '@pages/index'
import { TogglePage } from '@pages/toggle'
import { Route } from 'wouter'
import { DebouncePage } from '@pages/debunce'

function App () {
  return (
    <>
      <Route path="/" component={Landing} />
      <Route path="/toggle" component={TogglePage} />
      <Route path="/debounce" component={DebouncePage} />
    </>
  )
}

export default App
