import './styles.scss'
import "./styles/Header.scss"
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home/Home';
//import Cenovnik from './pages/Cenovnik/Cenovnik';
import Kontakt from './pages/Kontakt/Kontakt';
import Footer from './components/Footer';
import O_Nama from './pages/O nama/O_Nama';

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
        element: <Home />,
      },
      {
        path: "/cenovnik",
        element: <Cenovnik />,
      },
      {
        path: "/kontakt",
        element: <Kontakt />,
      },
      {
        path: "/o-nama",
        element: <O_Nama />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
