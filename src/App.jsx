import Home from './Home'
import Contacto from './Contacto'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/contacto",
    element: <Contacto/>
  }
])

  return (
    <div className='app'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
