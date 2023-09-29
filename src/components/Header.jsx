import React from 'react'
import { Link } from 'react-router-dom'
import dumbo from '../assets/dumbo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-left'>
            <Link to={'/'}><img src={dumbo} className='header-logo'/></Link>
            <ul>
                <Link to={'/'} className='header-link'>Home</Link>
                <Link to={'/'} className='header-link'>Cenovnik</Link>
                <Link to={'/'} className='header-link'>Kontakt</Link>
                <Link to={'/'} className='header-link'>Rezervacija</Link>
            </ul>
        </div>
        <div className='header-contact'>
            <p>Pozovite nas 065 8329 832</p>
            <div className='circle'>
                <FontAwesomeIcon icon={faInstagram} style={{color: "#fff"}} className='icon'/>
            </div>
        </div>
    </div>
  )
}

export default Header