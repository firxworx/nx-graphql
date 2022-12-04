import { Outlet } from 'react-router-dom'
import { Navigation } from './Navigation'

export function AppLayout(): JSX.Element {
  return (
    <div>
      <div>Welcome to App</div>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
