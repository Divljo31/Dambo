import './Styles/Contact.scss'

const Kontakt = () => {
  return (
  <>
    <div className="contact">
      <div className="bg-wave"></div>
      <div className="contact-container">
        
        <div className="header-section">
          <h1>Kontakt</h1>
        </div>

        <div className='map-contactForm'>
          <h2 className='map-title'>Kako do nas?</h2>
          <div className="map-contact-wrapper">
            <div className="map-section">
              {/* <p>Aenean sollicitudin, lorem auci elit consequat ipsutissem niuis sed odio sit amet nibh vulputate cursus a sit amet.</p> */}
              <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d750.6109188707942!2d19.36085141626068!3d44.36521766095769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ssr!2srs!4v1698879896592!5m2!1ssr!2srs" loading="lazy"></iframe>
            </div>

            <div className="contact-form-section">
              <h2>Zakazite termin</h2>
              <form>
                <input className="input-form" type="text" placeholder="Ime i prezime" />
                <input className="input-form" type="email" placeholder="Email" />
                <textarea className="input-form" placeholder="Napisite poruku..."></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
};  

export default Kontakt