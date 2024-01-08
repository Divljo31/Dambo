import React from 'react'


interface AboutProps {
    title: string;
    content: string;
    imageUrl: string;
  }


  
const AboutComponent: React.FC<AboutProps> = ({ title, content, imageUrl }) => {
    return (
      <div className="about-container">
        <h2 className="about-title">{title}</h2>
       <div className='about-content'>
            <p className="about-text">{content}</p>
            <div className="about-image-container">
                <img src={imageUrl} alt="About Us" className="about-image" />
            </div>
        </div>
      </div>
    );
  };

export default AboutComponent