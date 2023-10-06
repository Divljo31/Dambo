import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import dumbo from '../assets/dumbo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import menuOpenBtn from '../assets/menu.png'
import menuCloseBtn from '../assets/close.png'
import Menu from './Menu'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    }

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
            <div className="menu-btn" onClick={handleMenuClick}>
                {isOpen ? (
                    <img src={menuCloseBtn} alt="menu-icon" className='menu-icon' />
                ) : (
                    <img src={menuOpenBtn} alt="menu-icon" className='menu-icon' />
                )}
            </div>
            <Menu isOpen={isOpen} />
        </div>
    )
}

export default Header