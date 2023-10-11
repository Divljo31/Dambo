import './styles.scss'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'
import InfoSection from './components/InfoSection'
import Faq from './components/Faq'
import Header from './components/Header';
import Home from './pages/Home';
import Cenovnik from './pages/Cenovnik';
import Kontakt from './pages/Kontakt';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cenovnik",
        element: <Cenovnik />
      },
      {
        path: "/kontakt",
        element: <Kontakt />
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
