/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import Navbar from '../components/Navbar'
import OneLiner from '../components/OneLiner'
//import News from '../components/News'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


export default function Home() {

  return (
    <div className="App">
      <Navbar />

      {/* SECTION LABEL */}
      <div id="top" />
      {/* WRAPPER */}
      <div className="wrapper">
        <Hero />

        <OneLiner />
        

        {/* SECTION LABEL */}
        <div id="nosotros" />
        {/* SERVICES */}
        <div className="services-section">
          <div className="container services-container">
            <div className="col-lg-5 services-title-section">
              <h2 className="services-title" data-aos="fade-down">Sobre Nosotros</h2>
              <p className="services-text" data-aos="fade-down">
                Somos una consultora interdisciplinaria integrada por profesionales especializados que buscan solucionar los desafíos de las Pymes y las grandes empresas.<br />
              </p>
              <p className="services-text" data-aos="fade-down">
                Con un equipo ágil y diverso conseguimos resultados integrales para que pequeñas, medianas y grandes empresas puedan desenvolverse y crecer en el cada vez más dinámico ecosistema de negocios.<br />
              </p>
              <p className="services-text" data-aos="fade-down">
                La Consultora Rioplatense Minerva fue constituida el 02 de mayo de 1989, hace más de 30 años.
              </p>
            </div>
            <div className="col-lg-6 offset-lg-1 services-header-img-section">
              <img src="/assets/images/nosotros.jpg" alt="sobre nosotros" />
            </div>
          </div>
        </div>

        <div id="mision" />
        {/* SERVICES */}
        <div className="mision-section">
          <div className="mision-section-bg-graphics">
            <img src="assets/images/services-section-bg.png" alt="servicios bg" />
          </div>
          <div className="container mision-container">
            <div className="col-lg-6 mision-header-img-section">
              <img src="/assets/images/mision.jpg" alt="mision" />
            </div>
            <div className="col-lg-5 offset-lg-1 mision-title-section">
              <h2 className="mision-title" data-aos="fade-down">Nuestra Mision</h2>
              <p className="mision-text" data-aos="fade-down">
                  Nos involucramos con cada organización para crecer junto a ella.<br />
              </p>
              <p className="mision-text" data-aos="fade-down">
                Queremos transmitir nuestro conocimiento y experiencia para asegurar el éxito y la continuidad en el contexto socio - económico contemporáneo. <br />
              </p>
              <p className="mision-text" data-aos="fade-down">
                Nuestra misión es apoyar a las pequeñas, medianas y grandes empresas potenciando y acompañando su crecimiento con soluciones ágiles e integrales.<br />
              </p>
              <p className="mision-text" data-aos="fade-down">
                Partimos del principio de Empresa en Marcha para la permanencia en el futuro de una organización.<br />
              </p>
              <p className="mision-text" data-aos="fade-down">
                Potenciamos las virtudes, acompañamos el éxito y aseguramos la continuidad.
              </p>
            </div>
          </div>
        </div>

        
        {/* NEWS 
        <div id="news" />
        <News />
        */}
        {/* SECTION LABEL */}
        <div id="contact" />
        {/* CONTACT */}
        <Contact />

        {/* FOOTER */}
        <Footer />
      </div>
    </div>  
  )
}