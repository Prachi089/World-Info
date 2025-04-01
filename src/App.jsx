/* eslint-disable no-unused-vars */
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import{Home} from './pages/Home';
import {About} from './pages/About';
import {Contact} from './pages/Contact';
import {Country} from './pages/Country';
import {AppLayout} from './component/AppLayout'
import { ErrorPage } from './pages/ErrorPage';
import { CountryDetails } from './component/CountryDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path:"/home",
        element:<Home/>
      },
      {
        path:"about",
        element:<About />
      },
      {
        path:"contact",
        element:<Contact />
      },
      {
        path:'country',
        element:<Country/>
      },
      {
        path:'country/:id',
        element:<CountryDetails/>
      }
  ]
  }

])

function App() {


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
