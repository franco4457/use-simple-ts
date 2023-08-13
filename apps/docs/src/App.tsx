import './App.css'
import { DebouncePage } from '@pages/debunce'
import { Landing } from '@pages/index'
import { PaginationPage } from '@pages/pagination'
import { Route } from 'wouter'
import { TogglePage } from '@pages/toggle'
import { CloudinaryUploadPage } from '@pages/cloudinary-upload'

function App () {
  return (
    <>
      <Route path="/" component={Landing} />
      <Route path="/toggle" component={TogglePage} />
      <Route path="/debounce" component={DebouncePage} />
      <Route path="/pagination" component={PaginationPage} />
      <Route path="/coudinary-upload" component={CloudinaryUploadPage} />
    </>
  )
}

export default App
