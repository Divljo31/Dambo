import React from 'react'
import LandingPage from '../components/LandingPage'
import InfoSection from '../components/InfoSection'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <LandingPage />
      <InfoSection />
      <Faq />
      <Footer/>        
    </>
  )
}

export default Home