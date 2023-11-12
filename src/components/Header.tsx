import { useState } from 'react'
import { Link } from 'react-router-dom'
import dumbo from '../assets/dumbo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import menuOpenBtn from '../assets/menu.png'
import menuCloseBtn from '../assets/close.png'
import Menu from './Menu'
import '../styles/Header.scss'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className='header'>
            <div className='header-left'>
                <Link to={'/'}><motion.img whileHover={{ scale: 1.075 }} src={dumbo} className='header-logo'/></Link>
                <ul>
                    <Link to={'/'} className='header-link'>Pocetna</Link>
                    <Link to={'/cenovnik'} className='header-link'>Cenovnik</Link>
                    <Link to={'/kontakt'} className='header-link'>Kontakt</Link>
                </ul>
            </div>
            <div className='header-contact'>
                <p>Pozovite nas 065 8329 832</p>
                <div className='circle'>
                    <FontAwesomeIcon icon={faInstagram} style={{color: "#fff"}} className='icon'/>
                </div>
            </div>
            <div className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            <AnimatePresence>
                {isOpen ? (
                    <motion.img initial={{ opacity: 1 }} exit={{ opacity: 0 }} src={menuCloseBtn} alt="menu-icon" className='menu-icon' />
                ) : (
                    <motion.img initial={{ opacity: 1 }} exit={{ opacity: 0 }} src={menuOpenBtn} alt="menu-icon" className='menu-icon' />
                )}
            </AnimatePresence>
            </div>
            <AnimatePresence>
                {isOpen ? (
                    <Menu isOpen={isOpen} />
                ) : null}
            </AnimatePresence>
        </div>
    )
}

export default Header