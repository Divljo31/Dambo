import LandingPage from './components/HeroSection'
import InfoSection from './components/InfoSection'
import Faq from './components/Faq'
import './Styles/Faq.scss'
import './Styles/HeroSection.scss'
import './Styles/InfoSection.scss'

const Home = () => {
  return (
    <>
      <LandingPage />
      <div className="container">
        <InfoSection />
        <Faq />      
      </div>
    </>
  )
}

export default Home