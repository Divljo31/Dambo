import { TextField } from '@mui/material';
import React from 'react';
import EmptyTextarea from './EmptyTextarea';
import dumbo from '../assets/dumbo.png';
import igLogo from '../assets/instagram.png';
import fbLogo from '../assets/facebook.png';
import waLogo from '../assets/whatsapp.png';
import viLogo from '../assets/viber.png';





const Footer = () => {
  return (
    <footer>
      <div className="left-section">
        <div className="brand-info">
          <img src={dumbo} className='footer-logo'/>
          <p>Dambo</p>
          <p>&copy; Bar & Play</p>
          <p>Telefon: +381 65 444 444</p>
        </div>
        <div className="social-icons">
          <a href="#" className="icon">
            <img src={igLogo} className='social-icon'/>
          </a>
          <a href="#" className="icon">
           <img src={fbLogo} className='social-icon'/>
          </a>
          <a href="#" className="icon">
            <img src={waLogo} className='social-icon'/>
          </a>
          <a href="#" className="icon">
            <img src={viLogo} className='social-icon'/>
          </a>
        </div>
      </div>
      <div className="right-section">
        <h2 >Kontaktirajte nas</h2>
        <form>
            
            <TextField className= "white-border" id="filled-basic" label="Email" variant="filled" />
            <TextField className= "white-border" id="filled-basic" label="Ime i Prezime" variant="filled" />
            
            <EmptyTextarea/> 
             {/*Sve se menja u emptytextarea.jsx  */}

        </form>
      </div>
    </footer>
  );
};

export default Footer;