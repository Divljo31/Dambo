import { motion } from 'framer-motion'

const LandingPage = () => {
  return (
    <div className='bg-image'>
      <div className="overlay"></div>
        <div className="landing-page">
          <div className='text-wrapper'>
            <motion.h1 viewport={{ once: true }} initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ ease: "easeIn", duration: 0.3 }} className='title1'>DEČIJA IGRAONICA</motion.h1>
            <motion.h2 viewport={{ once: true }} initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ ease: "easeIn", duration: 0.3 }} className='title2'>DAMBO BAR AND PLAY</motion.h2>
          </div>
        </div>
    </div>
  )
}

export default LandingPage