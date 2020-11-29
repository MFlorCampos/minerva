import React from 'react'

import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Finanzas() {
  return (
    <div>
      <Navbar />

      {/* SECTION LABEL */}
      <div id="top" />
      {/* WRAPPER */}
      <div className="wrapper">
        <div className="header">
          <div className="container header-container">
            <div className="col-lg-6 header-img-section">
              <img src="https://via.placeholder.com/663x640" alt="finanzas" />
            </div>
            <div className="col-lg-5 offset-lg-1 header-title-section">
              <p className="header-subtitle">Lideres en Finanzas</p>
              <h1 className="header-title">Finanzas</h1>
              <p className="header-title-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur id sapien nisl. Nulla sit amet dapibus est. Fusce
                velit nulla, vulputate sit amet scelerisque sed, pellentesque
                vitae nisl.
              </p>
              <div className="learn-more-btn-section">
                <a
                  className="nav-link learn-more-btn btn-invert"
                  href="#services"
                >
                  Contactenos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <Contact />
      <Footer />
    </div>
  )
}