import { createBrowserRouter } from 'react-router-dom'
import Home from './home/home'
import { RootLayout } from './layout/layout'
export const routers = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
])
