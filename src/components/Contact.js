import React from 'react'
import emailjs from 'emailjs-com'

export default function Contact() {

  function sendEmail(e){
    e.preventDefault();
    console.log(e.target.dropdown.value);
    var dropdown = parseInt(e.target.dropdown.value);
    let emailTo = "";
    switch (dropdown) {
      case 1:
      case 2:
        emailTo = 'template_akkq7ci';
        break;
        
      default:  
      case 3:
      case 4:
        emailTo = 'template_k5kyo5g';
        break;
    }
    console.log(emailTo);

    emailjs.sendForm('service_4hm0643', emailTo, e.target, 'user_ZPI3jPgXBrg1CVjYXGDts')
      .then((result) => {
          console.log(result.text);
          var enviado = document.getElementById("mensajeEnviado");
          enviado.classList.add("mensajeEnviado");
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
                    <input type="text" name="number" className="form-control" />
                    <label>Teléfono (Opcional)</label>
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

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <div className="dropdown servicioacontratar">
                      <select className="btn btn-secondary col-md-12" id="dropdown_service" name="dropdown">
                        <option hidden value="">¿Por qué servicio nos contacta?</option>
                        <option className="dropdown-item" type="button" value="1">Asesoramiento Contable Impositivo</option>
                        <option className="dropdown-item" type="button" value="2">Auditoría y Finanzas</option>
                        <option className="dropdown-item" type="button" value="3">Tecnología en Alimentos</option>
                        <option className="dropdown-item" type="button" value="4">Recursos Humanos</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea type="text" name="message" className="form-control md-textarea" />
                    <label>Mensaje</label>
                  </div>
                </div>
              </div>
              <label className="mensaje" id="mensajeEnviado">Mensaje enviado con éxito!</label>
              <div className="text-center text-md-left">
                <button className="learn-more-btn" style={{border: 'none'}}>Enviar</button>
              </div>
          </form>
        </div>
      </div>
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
        <div className="col-md-3 contact-header-img">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.46766570947!2d-58.51291088417389!3d-34.64289046708016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc84d0de79267%3A0x239b4fdb0dad6bbd!2sFonrouge%20542%2C%20C1408HFJ%20CABA!5e0!3m2!1ses!2sar!4v1606684589210!5m2!1ses!2sar"
            title="map"
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
