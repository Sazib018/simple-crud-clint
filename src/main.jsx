import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Users from './Components/Users/Users'
import Update from './Components/Update/Update'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>
  },
  {
    path:"/users",
    element:<Users></Users>,
    loader: ()=> fetch("http://localhost:3000/users")
  },
  {
    path:"/update/:id",
    element:<Update></Update>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
