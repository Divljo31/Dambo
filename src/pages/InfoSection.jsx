import React from 'react'
import house from '../assets/house.png'
import cake from '../assets/cake.png'
import baloons from '../assets/baloons.png'

const InfoSection = () => {
  return (
    <div className="info-section">
        <div className="container">
            <div className="info">
                <div className="item">
                    <div className="circle"><img src={house} alt="info-icon" /></div>
                    <div className="info-text-wrapper">
                        <h2 className='info-heading'>Babysitting</h2>
                        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="item">
                    <div className="circle"><img src={cake} alt="info-icon" /></div>
                    <div className="info-text-wrapper">
                        <h2 className='info-heading'>Baby shower</h2>
                        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="item">
                    <div className="circle"><img src={baloons} alt="info-icon" /></div> 
                    <div className="info-text-wrapper">
                        <h2 className='info-heading'>Full-Time Nanny</h2>
                        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
            <div className="time-wrapper">

            </div>
        </div>
    </div>
  )
}

export default InfoSection