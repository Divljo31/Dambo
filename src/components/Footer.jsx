import { TextField } from '@mui/material';
import React from 'react';
import { Button } from '@mui/base/Button';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import EmptyTextarea from './EmptyTextarea';






const Footer = () => {
  return (
    <footer>
      <div className="left-section">
        <div className="brand-info">
          <p>Dambo</p>
          <p>&copy; Bar & Play</p>
          <p>Telefon: +381 65 444 444</p>
        </div>
        <div className="social-icons">
          <a href="#" className="icon">
            Facebook
          </a>
          <a href="#" className="icon">
            Twitter
          </a>
          <a href="#" className="icon">
            Instagram
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