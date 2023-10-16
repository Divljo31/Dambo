import LandingPage from './components/LandingPage'
import InfoSection from './components/InfoSection'
import Faq from './components/Faq'
import Footer from '../../components/Footer'
import './Styles/Faq.scss'
import './Styles/LandingPage.scss'
import './Styles/InfoSection.scss'


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