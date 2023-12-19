import './styles.scss'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home/Home';
//import Cenovnik from './pages/Cenovnik/Cenovnik';
import Kontakt from './pages/Kontakt/Kontakt';
import Footer from './components/Footer';
import About from './pages/About/About';
import Igraonica from './pages/Igraonica/Igraonica';
import Rodjendaonica from './pages/Rodjendaonica/Rodjendaonica';

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
        path: "/o_nama",
        element: <About/>
      },
      {
        path: "/igraonica",
        element: <Igraonica/>
      },
      {
        path: "/rodjendaonica",
        element: <Rodjendaonica/>
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
