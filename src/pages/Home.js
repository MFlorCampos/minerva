/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import Navbar from '../components/Navbar'
import OneLiner from '../components/OneLiner'
//import News from '../components/News'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import AOS from 'aos';
import OneLinerItem from '../components/OneLinerItem'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faChartBar, faArrowsAlt, faBinoculars  } from '@fortawesome/free-solid-svg-icons'



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

        <OneLiner  />
        

        {/* SECTION LABEL */}
        <div id="nosotros" />
        {/* SERVICES */}
        <div className="services-section">
          <div className="container services-container">
            <div className="col-lg-5 services-title-section">
              <h2 className="services-title" data-aos="fade-down">Sobre Nosotros</h2>
              <p className="services-text" data-aos="fade-down">
                Somos una consultora interdisciplinaria integrada por profesionales especializados que buscan solucionar los desafíos de las pymes y grandes empresas.
              <br />
              </p>
              <p className="services-text" data-aos="fade-down">
                Con un equipo ágil y diverso conseguimos resultados integrales para que pequeñas, medianas y grandes empresas puedan desenvolverse y crecer en el cada vez más dinámico ecosistema de negocios.<br />
              </p>
              <p className="services-text" data-aos="fade-down">
                Consultora Rioplatense Minerva fue constituida el 02 de mayo de 1989, hace más de 30 años.
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
                Nuestra misión es apoyar a las empresas potenciando y acompañando su crecimiento con soluciones ágiles e integrales.<br />
              </p>
              <p className="mision-text" data-aos="fade-down">
                Vemos como herramienta para la permanencia, la capacitación continua para generar ideas y así poder brindar soluciones en un entorno en donde la impermanencia y la dinámica de cambio son la constante.<br />
              </p>
              <p className="mision-text" data-aos="fade-down">
                Partimos del principio de Empresa en Marcha para la permanencia en el futuro de una organización.
              </p>
              <p className="mision-text" data-aos="fade-down">
                Potenciamos las virtudes, acompañamos el éxito y trabajamos para asegurar la continuidad.
              </p>
            </div>
          </div>
        </div>

        <div className="blog-section services-section">
          <div className="container blog-container">
            <div className="blog-title-section">
              <h2 className="blog-title yellow">Enfoques</h2>
            </div>
          </div>
        </div>

        <div className="services-section">
          <div className="container strategy-container icons-yellow" data-aos="fade-up">
            <OneLinerItem
              icon = {faChartBar}
              title={`Diseño de Plan de negocios`}
            />
            <OneLinerItem
              icon = {faArrowsAlt}
              title={`Definición de estrategias`}
            />
            <OneLinerItem
              icon = {faBinoculars}
              title={`Generación de nuevos negocios`}
            />
            <OneLinerItem
              icon = {faEye}
              title={`Gestion y control`}
            />
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