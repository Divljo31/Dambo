import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom'

interface MenuProps {
    isOpen: boolean;
}
// className={`menu ${props.isOpen ? 'open' : ''}`}
const Menu: React.FC<MenuProps> = (props) => {
    return (
        <motion.div initial={{ opacity: 0, x: 600}} animate={{ opacity: 1, x: 218}} transition={{ ease: "circIn", duration: 0.2 }} className='menu'>
            <ul>
                <Link to={'/'} className='header-link'>Home</Link>
                <Link to={'/'} className='header-link'>Cenovnik</Link>
                <Link to={'/'} className='header-link'>Kontakt</Link>
                <Link to={'/'} className='header-link'>Rezervacija</Link>
            </ul>
        </motion.div>
    )
}

export default Menu