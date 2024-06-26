import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './error-page'
import './index.css'
import Contact from './routes/contact'
import Root from './routes/root'

const router = createBrowserRouter( [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />
      },
    ]
  },
  
] );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }>
      {/* <Root/> */}
    </RouterProvider>
  </React.StrictMode>,
)
