import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({isOpen}) => {
    return (
        <div className={`menu ${isOpen ? 'open' : ''}`}>
            <ul>
                <Link to={'/'} className='header-link'>Home</Link>
                <Link to={'/'} className='header-link'>Cenovnik</Link>
                <Link to={'/'} className='header-link'>Kontakt</Link>
                <Link to={'/'} className='header-link'>Rezervacija</Link>
            </ul>
        </div>
    )
}

export default Menu