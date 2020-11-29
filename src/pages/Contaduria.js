/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import OneLiner from '../components/DestacadosContaduria'

const conflictos = ['Societarios', 'Económicos', 'Patrimoniales', 'Laborales', 'Fiscales', 'Previsionales', 'Comerciales']
export default function Contaduria() {
  return (
    <div  className="App">
      <Navbar />
      
      {/* SECTION LABEL */}
      <div id="top" />
      {/* WRAPPER */}
      <div className="wrapper">
        <div className="header-subpage">
          <div className="container header-container">
            <div className="col-lg-12 header-title-section">
              <h1 className="header-title-subpage">Contaduría</h1>
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

      <div className="blog-section">
        <div className="container blog-container">
          <div className="blog-title-section">
            <h2 className="blog-title">Enfoques</h2>
          </div>
        </div>
      </div>
      <OneLiner />

      <div className="services-section">
          <div className="container services-container">
            <div className="col-lg-8 services-title-section">
              <h2 className="services-title">Prevención y resolución de conflictos</h2>
              <p className="services-text">
                
                <ul>
                  {conflictos.map(e => <li data-aos="fade-down">{e}</li>)}
                </ul>

              </p>
            </div>
            <div className="col-lg-4 services-header-img-section" data-aos="flip-left">
              <svg className="icon-prevencion"></svg>
            </div>
          </div>
        </div>

        <div id="mision" />
        {/* SERVICES */}
        <div className="mision-section">
          <div className="container mision-container">
            <div className="col-lg-4 mision-header-img-section" data-aos="flip-left">
              <svg className="icon-decision"></svg>
            </div>
            <div className="col-lg-8">
              <h2 className="mision-title">Para que puedan tomar las mejores decisiones</h2>
              <p className="mision-text">
              <ul>
                  <li data-aos="fade-down">
                  Procesamiento de datos, preparación, elaboración y análisis crítico de informes. 
                  </li>
                  <li data-aos="fade-down">
                    Presentación de declaraciones y liquidaciones. 
                  </li>
                  <li data-aos="fade-down">
                    Confección de Estados Contables externos e informes internos
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      
        <div className="services-section">
          <div className="container services-container">
            <div className="col-lg-8 services-title-section">
              <h2 className="services-title">Institucionalizamos procesos de trabajo </h2>
              <p className="services-text">
                
                <ul>
                  <li data-aos="fade-down">Sistemas informáticos.</li>
                  <li data-aos="fade-down">Redes de comunicación. </li>
                  <li data-aos="fade-down">Captura de datos en la fuente.</li>
                  <li data-aos="fade-down">Administración de bases de datos.</li>
                  <li data-aos="fade-down">Informes en tiempo real.</li>

                </ul>

              </p>
            </div>
            <div className="col-lg-4 services-header-img-section" data-aos="flip-left">
              <svg className="icon-procesos"></svg>
            </div>
          </div>
        </div>

        <div id="mision" />
        {/* SERVICES */}
        <div className="mision-section">
          <div className="container mision-container">
            <div className="col-lg-4 mision-header-img-section" data-aos="flip-left">
              <svg className="icon-organizacion"></svg>
            </div>
            <div className="col-lg-8">
              <h2 className="mision-title">Organización empresaria</h2>
              <p className="mision-text">
                <ul>
                  <li data-aos="fade-down">
                  Diseño de estructura administrativa. 
                  </li>
                  <li data-aos="fade-down">
                  Asesoramiento, gestión, seguimiento de: auditorías, verificaciones, conciliaciones, litigios judiciales o extrajudiciales hasta su archivo.
                  </li>
                  <li data-aos="fade-down">
                  Asesoramiento patrimonial y laboral.
                  </li>
                  <li data-aos="fade-down">
                  Asesoramiento financiero y comercial.
                  </li>
                </ul>

              </p>
            </div>
          </div>
        </div>

      <div id="contact"/>
      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </div>
  )
}