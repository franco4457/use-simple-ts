import './App.css'
import { Landing } from '@pages/index'
import { TogglePage } from '@pages/toggle'
import { Route } from 'wouter'
import { DebouncePage } from '@pages/debunce'
import { PaginationPage } from '@pages/pagination'

function App () {
  return (
    <>
      <Route path="/" component={Landing} />
      <Route path="/toggle" component={TogglePage} />
      <Route path="/debounce" component={DebouncePage} />
      <Route path="/pagination" component={PaginationPage} />
    </>
  )
}

export default App
