import React from 'react'
import emailjs from 'emailjs-com'

export default function Contact() {

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_4hm0643', 'template_akkq7ci', e.target, 'user_ZPI3jPgXBrg1CVjYXGDts')
      .then((result) => {
          console.log(result.text);
          alert("Mensaje enviado!");
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div className="contact-section" id="contact">
      <div className="container contact-container">
        <div className="col-md-6 contact-title-section">
        <h2 className="contact-title">
          Contáctenos para saber más
        </h2>
        <div className="row">
        <div className="col-md-12 mb-md-0 mb-5">
          <form className="contact-form" name="contact-form" onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" name="name" className="form-control" />
                    <label>Nombre y Apellido</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="email" name="email" className="form-control" />
                    <label>Email</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input type="text" name="subject" className="form-control" />
                    <label>Empresa</label>
                  </div>
                </div>
              </div>
              {/*Grid row
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <div className="dropdown servicioacontratar">
                      <button className="btn btn-secondary dropdown-toggle col-md-12" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      ¿Por qué servicio nos contacta?
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                          <button className="dropdown-item" type="button">Contabilidad</button>
                          <button className="dropdown-item" type="button">Finanzas</button>
                          <button className="dropdown-item" type="button">Técnologia en alimentos</button>
                          <button className="dropdown-item" type="button">Imagen corporativa</button>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
                */}
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea type="text" name="message" className="form-control md-textarea" />
                    <label>Mensaje</label>
                  </div>
                </div>
              </div>
              <div className="text-center text-md-left">
                <button type="submit" value="Send" className="learn-more-btn" style={{border: 'none'}}>Enviar</button>
              </div>
          </form>
        </div>
      </div>
        </div>
        <div className="col-md-3 contact-header-img">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.46766570947!2d-58.51291088417389!3d-34.64289046708016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc84d0de79267%3A0x239b4fdb0dad6bbd!2sFonrouge%20452%2C%20C1408HFJ%20CABA!5e0!3m2!1ses!2sar!4v1606684589210!5m2!1ses!2sar"
          title="map"
          width="100%"
          height="450"
          frameBorder="0"
          style={{border: 0}}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0" />
        </div>
        <div className="col-md-3 contact-header-img">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.5141087434804!2d-58.36933608417463!3d-34.61644626567981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334d447bd4d23%3A0x3ad7355d0f77c4c4!2sCH%20Madero%20Urbano%20Suites!5e0!3m2!1ses!2sar!4v1606684288869!5m2!1ses!2sar" 
          title="map2"
          width="100%" 
          height="450" 
          frameBorder="0" 
          style={{border: 0}}
          allowFullScreen="" 
          aria-hidden="false" 
          tabIndex="0" />
        </div>
      </div>
    </div>
  )
}
