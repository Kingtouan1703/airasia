import { Outlet } from 'react-router-dom'

export function RootLayout() {
  return (
    <main className='container'>
      <div className='lay-out-container'>
        <Outlet />
      </div>
    </main>
  )
}
