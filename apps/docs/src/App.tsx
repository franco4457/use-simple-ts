import './App.css'
import { Route } from 'wouter'
import {
  PaginationPage,
  TogglePage,
  CloudinaryUploadPage,
  DebouncePage,
  Landing,
  HoverPage
} from '@pages'

function App() {
  return (
    <>
      <Route path="/" component={Landing} />
      <Route path="/toggle" component={TogglePage} />
      <Route path="/debounce" component={DebouncePage} />
      <Route path="/pagination" component={PaginationPage} />
      <Route path="/coudinary-upload" component={CloudinaryUploadPage} />
      <Route path="/hover" component={HoverPage} />
    </>
  )
}

export default App
