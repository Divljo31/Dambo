import { useState } from 'react'
import './styles.scss'
import LandingPage from './pages/LandingPage'
import Header from './components/Header'
import Footer from './components/Footer'
import InfoSection from './pages/InfoSection'


function App() {

  return (
    <>
      <LandingPage />
      <InfoSection />
      <Footer/>
    </>
  )
}

export default App
