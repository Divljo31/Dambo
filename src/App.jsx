import { useEffect, useState } from 'react'
import './styles.scss'
import LandingPage from './pages/LandingPage'
import Header from './components/Header'
import Footer from './components/Footer'
import InfoSection from './pages/InfoSection'
import Faq from './pages/Faq'


function App() {


  return (
    <>
      <LandingPage />
      <InfoSection />
      <Faq />
      <Footer/>
    </>
  )
}

export default App
