import { Outlet } from 'react-router-dom'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

export default function RootLayout() {
  return (
    <div>
        <Nav />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}
