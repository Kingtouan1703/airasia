import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './layout'
export const routers = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
  },
])
