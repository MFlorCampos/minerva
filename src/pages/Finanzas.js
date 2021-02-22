import React from 'react'

import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
/* import OneLiner from '../components/DestacadosFinanzas' */

export default function Finanzas() {
  window.scrollTo( 0, 0);
  return (
    <div>
      <Navbar />

      {/* SECTION LABEL */}
      <div id="top" />
      {/* WRAPPER */}
      <div className="wrapper">
        <div className="header-template">
          <div className="container header-container">
            <div className="col-lg-12 header-title-section">
              <h1 className="header-title-subpage" data-aos="zoom-in">Auditoría y Finanzas</h1>
              <p className="header-title-text" data-aos="zoom-in">
              </p>
              <div className="learn-more-btn-section">
                <a
                  className="nav-link learn-more-btn btn-invert"
                  href="#contact"
                  data-aos="zoom-in"
                >
                  Contáctenos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/*
      <div className="blog-section">
        <div className="container blog-container">
          <div className="blog-title-section">
            <h2 className="blog-title">Enfoques</h2>
          </div>
        </div>
      </div>
      <OneLiner />
    */}  
      <div className="services-section">
          <div className="container services-container">
            <div className="col-lg-8 services-title-section">
              <h2 className="services-title">Contabilidad y Auditoría</h2>
              <p className="services-text">
              <ul>
                  <li data-aos="fade-down">
                    Auditoría de estados contables. 
                  </li>
                  <li data-aos="fade-down">
                    Auditoría operativa y de procesos. 
                  </li>
                </ul>
              </p>
            </div>
            <div className="col-lg-4 services-header-img-section" data-aos="flip-left">
              <svg className="icon-organizacion"></svg>
            </div>
          </div>
        </div>

        <div id="mision" />
        {/* SERVICES */}
        <div className="mision-section">
          <div className="container mision-container">
            <div className="col-lg-4 mision-header-img-section" data-aos="flip-left">
            <svg className="icon-procesos"></svg>
            </div>
            <div className="col-lg-8">
              <h2 className="mision-title">Consultoría para PYMES</h2>
              <p className="mision-text">
              <ul>
                  <li data-aos="fade-down">
                    Colaboración en la implementación de sistemas de gestión contables.  
                  </li>
                  <li data-aos="fade-down">
                    Control periódico de la gestión administrativa contable. 
                  </li>
                  <li data-aos="fade-down">
                    Confección de reportes gerenciales. 
                  </li>
                  <li data-aos="fade-down">
                    Asistencia en la actualización de libros de comercio. 
                  </li>
                  <li data-aos="fade-down">
                    Asesoramiento, confección y control de las DDJJ relativas a tributos nacionales y provinciales. 
                  </li>
                  <li data-aos="fade-down">
                    Auditoría de sociedades de familia y pymes. 
                  </li>
                  <li data-aos="fade-down">
                    Confección de estados contables. 
                  </li>
                  <li data-aos="fade-down">
                    Presentación de los distintos regímenes de información requeridos por el BCRA para el pago de importaciones y giros al exterior. 
                  </li>
                  <li data-aos="fade-down">
                    Estudios de precios de transferencia. 
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        {/* 
        <div className="services-section">
          <div className="container services-container">
            <div className="col-lg-8 services-title-section">
              <h2 className="services-title">Lorem ipsum dolor sit amet</h2>
              <p className="services-text">
                
                <ul>
                  <li data-aos="fade-down">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id sapien nisl. </li>
                  <li data-aos="fade-down">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id sapien nisl. </li>
                  <li data-aos="fade-down">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id sapien nisl. </li>
                  <li data-aos="fade-down">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id sapien nisl. </li>
                  <li data-aos="fade-down">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id sapien nisl.</li>

                </ul>

              </p>
            </div>
            <div className="col-lg-4 services-header-img-section" data-aos="flip-left">
              <img src="https://via.placeholder.com/300" alt="placeholder"></img>
            </div>
          </div>
        </div>

        <div id="mision" />
        {/* SERVICES */}
        {/* 
        <div className="mision-section">
          <div className="container mision-container">
            <div className="col-lg-4 mision-header-img-section" data-aos="flip-left">
              <img src="https://via.placeholder.com/300" alt="placeholder"></img>
            </div>
            <div className="col-lg-8">
              <h2 className="mision-title">Lorem ipsum dolor sit amet</h2>
              <p className="mision-text">
                <ul>
                  <li data-aos="fade-down">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id sapien nisl. 
                  </li>
                  <li data-aos="fade-down">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id sapien nisl. 
                  </li>
                  <li data-aos="fade-down">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id sapien nisl. 
                  </li>
                  <li data-aos="fade-down">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id sapien nisl. 
                  </li>
                </ul>

              </p>
            </div>
          </div>
        </div>
        */}
      {/* CONTACT */}
      <Contact />
      <Footer />
    </div>
  )
}