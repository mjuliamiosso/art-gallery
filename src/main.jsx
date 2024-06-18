import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Home from './routes/Home/Home.jsx';
import AboutMe from './routes/AboutMe/AboutMe.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App></App>,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutme",
        element: <AboutMe />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
