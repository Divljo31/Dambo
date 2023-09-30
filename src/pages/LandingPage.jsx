import React from 'react'
import Header from '../components/Header'

const LandingPage = () => {
  return (
    <div className='bg-image'>
      <Header />
      <div className="landing-page">
        <div className='text-wrapper'>
          <h1>Our little heaven!</h1>
          <h2>Welcome to Dambo</h2>
        </div>
      </div>
    </div>
  )
}

export default LandingPage