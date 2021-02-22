import React from 'react'

import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
/*import OneLiner from '../components/DestacadosFinanzas'*/


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
              <h1 className="header-title-subpage" data-aos="zoom-in">Tecnología en Alimentos</h1>
              <p className="header-title-text" data-aos="zoom-in">
                El arte de hacer alimentos de forma industrial. 
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
              <h2 className="services-title">Desarrollo de Productos</h2>
              <p className="services-text">
              <ul>
                  <li data-aos="fade-down">
                  Brindamos asesoramiento en el desarrollo de nuevos productos, análisis sensorial, vida útil, mejora en los procesos, escalado, defectos de elaboración y en asuntos regulatorios de acuerdo con la legislación vigente. 
                  </li>
                </ul>
              </p>
            </div>
            <div className="col-lg-4 services-header-img-section" data-aos="flip-left">
              <svg className="icon-desarrollo"></svg>
            </div>
          </div>
        </div>

        <div id="mision" />
        {/* SERVICES */}
        <div className="mision-section">
          <div className="container mision-container">
            <div className="col-lg-4 mision-header-img-section" data-aos="flip-left">
              <svg className="icon-calidad"></svg>
            </div>
            <div className="col-lg-8">
              <h2 className="mision-title">Calidad y Seguridad Alimentaria</h2>
              <p className="mision-text">
              <ul>
                  <li data-aos="fade-down">
                    Capacitación de personal con el objetivo principal de que adquieran las competencias necesarias y fortalezcan la cultura de calidad e inocuidad en la empresa.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      
        <div className="services-section">
          <div className="container services-container">
            <div className="col-lg-8 services-title-section">
              <h2 className="services-title">Sistemas de Gestión</h2>
              <p className="services-text">
                <ul>
                  <li data-aos="fade-down">Trabajamos en la incorporación de herramientas de gestión, y en la implementación de normas internacionales de calidad y la inocuidad </li>
                </ul>
              </p>
            </div>
            <div className="col-lg-4 services-header-img-section" data-aos="flip-left">
              <svg className="icon-gestion"></svg>
            </div>
          </div>
        </div>
        {/*
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