import React from 'react'

export default function Contact() {
  return (
    <div className="contact-section">
      <div className="container contact-container">
        <div className="col-md-6 contact-title-section">
          <p className="contact-subtitle">Contacto</p>
          <h2 className="contact-title">
            Dudas?
            <br />
            Pongase en contacto
          </h2>
          <p className="contact-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            id sapien nisl. Nulla sit amet dapibus est.
          </p>
          <div className="learn-more-btn-section">
            <a
              className="nav-link learn-more-btn btn-invert"
              href="mailto:name@domain.com"
            >
              Email
            </a>
          </div>
        </div>
        <div className="col-md-6 contact-header-img">
          <img src="https://via.placeholder.com/604x457" />
        </div>
      </div>
    </div>
  )
}
