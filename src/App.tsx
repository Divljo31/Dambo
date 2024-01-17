import './styles.scss'
import "./styles/Header.scss"
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Rodjendaonica from './pages/Rodjendaonica/Rodjendaonica';
import Igraonica from "./pages/Igraonica/Igraonica";
import Kontakt from './pages/Kontakt/Kontakt';
import Footer from './components/Footer';
import O_Nama from './pages/O nama/O_Nama';
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "'Baloo 2', cursive",
    h1: {
      fontWeight: "bold",
    },
    h3: {
      fontWeight: "bold",
    },
    h5: {
      fontWeight: "bold",
    },
    body1: {
      fontWeight: "600",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-weight: "bold"
        }
      `,
    },
  },
});

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
        path: "/rodjendaonica",
        element: <Rodjendaonica />,
      },
      {
        path: "/igraonica",
        element: <Igraonica />,
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
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
