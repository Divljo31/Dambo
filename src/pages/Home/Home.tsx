import LandingPage from './components/LandingPage'
import InfoSection from './components/InfoSection'
import Faq from './components/Faq'
import './Styles/Faq.scss'
import './Styles/LandingPage.scss'
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