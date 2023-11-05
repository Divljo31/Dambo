import './styles.scss'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Cenovnik from './pages/Cenovnik/Cenovnik';
import Kontakt from './pages/Kontakt/Kontakt';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
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
