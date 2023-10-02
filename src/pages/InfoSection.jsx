import React from 'react'
import house from '../assets/house.png'
import cake from '../assets/cake.png'
import baloons from '../assets/baloons.png'
import BasicDateCalendar from '../components/Calendar'
import storyImg from '../assets/story.jpg';
import checkImg from '../assets/greenCheck.png';

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
                    <div className='benefit-div'>
                        <ul className='benefit-list'>
                            <li>
                                <img className="check-image" src={checkImg} alt="Checkmark" />
                                <p>Our job is to make your life easier.</p>
                            </li>
                            <li>
                                <img className="check-image" src={checkImg} alt="Checkmark" />
                                <p>Experience childcare as it should be.</p>
                            </li>
                            <li>
                                <img className="check-image" src={checkImg} alt="Checkmark" />
                                <p>Daycare is great…kids make it special.</p>
                            </li>
                            <li>
                                <img className="check-image" src={checkImg} alt="Checkmark" />
                                <p>We are childcare professionals.</p>
                            </li>
                            <li>
                                <img className="check-image" src={checkImg} alt="Checkmark" />
                                <p>Babysitting with immense love and care.</p>
                            </li>
                            <li>
                                <img className="check-image" src={checkImg} alt="Checkmark" />
                                <p>Your childcare wish just came true.</p>
                            </li>
                        </ul>
                    </div>
                    <div className='worktime-div'>  
                            <h3 className='table-h3'>Radno vreme</h3>
                            <table className='tabela-radno-vreme'>
                                <thead>
                                <tr>
                                    <th>Day</th>
                                    <th>Pocetak</th>
                                    <th>Kraj</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Ponedeljak</td>
                                    <td>9:00 </td>
                                    <td>5:00 </td>
                                </tr>
                                <tr>
                                    <td>Utorak</td>
                                    <td>9:00 </td>
                                    <td>5:00 </td>
                                </tr>
                                <tr>
                                    <td>Sreda</td>
                                    <td>9:00</td>
                                    <td>5:00</td>
                                </tr>
                                <tr>
                                    <td>Cetvrtak</td>
                                    <td>9:00 </td>
                                    <td>5:00 </td>
                                </tr>
                                <tr>
                                    <td>Petak</td>
                                    <td>9:00 </td>
                                    <td>5:00 </td>
                                </tr>
                                <tr>
                                    <td>Subota</td>
                                    <td>9:00 </td>
                                    <td>5:00 </td>
                                </tr>
                                <tr>
                                    <td>Nedelja</td>
                                    <td>9:00 </td>
                                    <td>5:00 </td>
                                </tr>
                                </tbody>
                            </table>
                    </div>
                    <div className="calendar-div">
                        <BasicDateCalendar/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoSection