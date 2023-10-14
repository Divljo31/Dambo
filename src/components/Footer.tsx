import { TextField } from '@mui/material';
import React, { useRef } from 'react';
import EmptyTextarea from '../pages/Home/components/EmptyTextarea';
import dumbo from '../assets/dumbo.png';
import igLogo from '../assets/instagram.png';
import fbLogo from '../assets/facebook.png';
import waLogo from '../assets/whatsapp.png';
import viLogo from '../assets/viber.png';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';



const Footer = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current!, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <footer>
      <div className="container">
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
          <h2>Kontaktirajte nas</h2>
          <form ref={form} onSubmit={sendEmail}>
              <TextField className="white-border" id="filled-basic" type='email' name='user_email' label="Email" variant="filled" />
              <TextField className="white-border" id="filled-basic" type='text' name='user_name' label="Ime i Prezime" variant="filled" />
              <EmptyTextarea name={'message'} /> 
              {/*Sve se menja u emptytextarea.jsx  */}
              <Button type='submit' variant='contained'>Send</Button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;